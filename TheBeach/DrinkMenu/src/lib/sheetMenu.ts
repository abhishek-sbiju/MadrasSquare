import type { MenuItem, MenuSection } from "@/data/menuData";

/**
 * Google Sheet source of truth for this menu.
 * Client edits this sheet → changes appear live on the site.
 * See SETUP.md at the repo root.
 */
export const SHEET_CONFIG = {
  sheetId: "1rLzDyEz07Z6_ixDUGjJEESkFT4q6wbXVTPvwPBRPkK0",
  gid: "834377372",
} as const;

const CURRENCY = "₹";

/**
 * Expected sheet column order (header row):
 *   Category | SubCategory | Name | Description | Variant |
 *   Price    | DietType    | Tags | Available
 */
interface SheetRow {
  Category: string;
  SubCategory: string;
  Name: string;
  Description: string;
  Variant: string;
  Price: string;
  DietType: string;
  Tags: string;
  Available: string;
}

// ---------------------------------------------------------------------------
// Fetch + parse gviz response
// ---------------------------------------------------------------------------

async function fetchSheetRows(): Promise<SheetRow[]> {
  const bust = Math.floor(Date.now() / 60000);
  const url =
    `https://docs.google.com/spreadsheets/d/${SHEET_CONFIG.sheetId}` +
    `/gviz/tq?tqx=out:json&gid=${encodeURIComponent(SHEET_CONFIG.gid)}` +
    `&_=${bust}`;

  const res = await fetch(url);
  if (!res.ok) throw new Error(`Sheet fetch failed: ${res.status}`);
  const text = await res.text();

  const json = JSON.parse(
    text.substring(text.indexOf("{"), text.lastIndexOf("}") + 1),
  );

  const cols: string[] = json.table.cols.map(
    (c: { label?: string }, i: number) => (c.label || "").trim() || `col${i}`,
  );

  type GvizCell = { v: unknown } | null;
  type GvizRow = { c: GvizCell[] };

  return (json.table.rows as GvizRow[]).map((row) => {
    const obj: Record<string, string> = {};
    row.c.forEach((cell, i) => {
      const raw = cell ? cell.v : "";
      const v = raw === null || raw === undefined ? "" : raw;
      obj[cols[i]] = typeof v === "string" ? v.trim() : String(v);
    });
    return obj as unknown as SheetRow;
  });
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function isAvailable(value: string): boolean {
  const v = String(value).toLowerCase().trim();
  return v === "" || v === "true" || v === "yes" || v === "y" || v === "1";
}

function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function formatPrice(raw: string): string {
  const v = String(raw).trim();
  if (!v) return "";
  if (v.includes(CURRENCY) || /^[₹$€£]/.test(v)) return v;
  return `${CURRENCY}${v}`;
}

/**
 * Map a Variant column value to the right price-field on MenuItem.
 * Returns undefined for "unknown" variants — those fall back to `price`.
 */
type PriceField =
  | "price"
  | "priceDom"
  | "priceImp"
  | "priceGlass"
  | "priceBottle"
  | "price300"
  | "price650";

function variantToField(variant: string): PriceField {
  const v = variant.toLowerCase().trim();
  if (!v) return "price";
  if (v === "domestic" || v === "dom") return "priceDom";
  if (v === "imported" || v === "imp") return "priceImp";
  if (v === "peg" || v === "glass") return "priceGlass";
  if (v.startsWith("bottle")) return "priceBottle";
  if (v === "pitcher") return "priceBottle";
  if (v === "330ml" || v === "300ml") return "price300";
  if (v === "650ml" || v === "1000ml") return "price650";
  return "price";
}

/**
 * Derive the two-column header pair for a section/subsection based on the
 * variants its items actually use. Returns undefined when no pair matches.
 */
function deriveHeaders(variants: Set<string>): [string, string] | undefined {
  const has = (v: string) => variants.has(v.toLowerCase());
  if (has("domestic") && has("imported")) return ["DOM", "IMP"];
  if (has("peg") && has("bottle")) return ["Peg", "Bottle"];
  if (has("glass") && has("bottle")) return ["Glass", "Bottle"];
  if (has("glass") && has("pitcher")) return ["Glass", "Pitcher"];
  if ((has("330ml") || has("300ml")) && (has("650ml") || has("1000ml"))) {
    return ["330ml", "650ml"];
  }
  return undefined;
}

// ---------------------------------------------------------------------------
// Group flat rows → MenuSection[]
// ---------------------------------------------------------------------------

function mergeRowsToItems(rows: SheetRow[]): {
  items: MenuItem[];
  variants: Set<string>;
} {
  const items: MenuItem[] = [];
  const index = new Map<string, number>();
  const variantsSeen = new Set<string>();

  for (const row of rows) {
    const name = row.Name?.trim();
    if (!name) continue;

    const description = row.Description?.trim();
    const variant = row.Variant?.trim();
    const field = variantToField(variant);
    const price = formatPrice(row.Price);

    if (variant) variantsSeen.add(variant.toLowerCase());

    const key = `${name.toLowerCase()}|${(description || "").toLowerCase()}`;
    const existing = index.get(key);
    if (existing === undefined) {
      const item: MenuItem = { name };
      if (description) item.description = description;
      if (price) {
        if (field === "price") {
          // Preserve variant label in the price string if we couldn't map it.
          item.price = variant ? `${variant} ${price}` : price;
        } else {
          (item as Record<string, string>)[field] = price;
        }
      }
      items.push(item);
      index.set(key, items.length - 1);
    } else {
      const item = items[existing];
      if (price) {
        if (field === "price") {
          const extra = variant ? `${variant} ${price}` : price;
          item.price = item.price ? `${item.price} / ${extra}` : extra;
        } else {
          (item as Record<string, string>)[field] = price;
        }
      }
    }
  }

  return { items, variants: variantsSeen };
}

function transformRows(rows: SheetRow[]): MenuSection[] {
  const available = rows.filter((r) => isAvailable(r.Available));

  const byCat = new Map<string, Map<string, SheetRow[]>>();
  for (const row of available) {
    const cat = row.Category?.trim();
    if (!cat) continue;
    const sub = row.SubCategory?.trim() || "";
    if (!byCat.has(cat)) byCat.set(cat, new Map());
    const subMap = byCat.get(cat)!;
    if (!subMap.has(sub)) subMap.set(sub, []);
    subMap.get(sub)!.push(row);
  }

  const sections: MenuSection[] = [];
  byCat.forEach((subMap, catTitle) => {
    const hasRealSubs =
      subMap.size > 1 || (subMap.size === 1 && !subMap.has(""));

    if (hasRealSubs) {
      const subsections: NonNullable<MenuSection["subsections"]> = [];
      let allVariants = new Set<string>();
      subMap.forEach((subRows, subName) => {
        const { items, variants } = mergeRowsToItems(subRows);
        const headers = deriveHeaders(variants);
        subsections.push({
          title: subName || catTitle,
          items,
          ...(headers ? { priceHeaders: headers } : {}),
        });
        allVariants = new Set([...allVariants, ...variants]);
      });

      // Section-level fallback headers so the nav/render has something sensible
      const sectionHeaders = deriveHeaders(allVariants);
      sections.push({
        id: slugify(catTitle),
        title: toTitleCase(catTitle),
        items: [],
        subsections,
        ...(sectionHeaders ? { priceHeaders: sectionHeaders } : {}),
      });
    } else {
      const { items, variants } = mergeRowsToItems(subMap.get("") ?? []);
      const headers = deriveHeaders(variants);
      sections.push({
        id: slugify(catTitle),
        title: toTitleCase(catTitle),
        items,
        ...(headers ? { priceHeaders: headers } : {}),
      });
    }
  });

  return sections;
}

/** "COLD BEVERAGES" → "Cold Beverages" */
function toTitleCase(s: string): string {
  return s
    .toLowerCase()
    .replace(/\b[a-z]/g, (c) => c.toUpperCase());
}

// ---------------------------------------------------------------------------
// Public: fetch + transform
// ---------------------------------------------------------------------------

export async function fetchMenuSections(): Promise<MenuSection[]> {
  const rows = await fetchSheetRows();
  return transformRows(rows);
}
