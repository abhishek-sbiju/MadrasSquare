import type { MenuItem, MenuSection } from "@/data/menuData";

/**
 * Google Sheet source of truth for this menu.
 * Client edits this sheet → changes appear live on the site.
 * See SETUP.md at the repo root.
 */
export const SHEET_CONFIG = {
  sheetId: "1rtiCkSTJFIAqQmz8TQ8ymvdX6hXcv2iLOwvOv_ETRW8",
  gid: "1405826352",
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
// Fetch + parse CSV export
// ---------------------------------------------------------------------------
//
// We intentionally use the CSV export endpoint (not gviz/tq JSON) because
// gviz types each column (e.g. Price → number) and silently drops any cell
// whose value doesn't match that type. A cell like "9000 (1000ml)" comes
// back as null over gviz but is preserved verbatim in CSV export.

function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let cell = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (inQuotes) {
      if (ch === '"') {
        if (text[i + 1] === '"') { cell += '"'; i++; }
        else { inQuotes = false; }
      } else {
        cell += ch;
      }
    } else {
      if (ch === '"') inQuotes = true;
      else if (ch === ",") { row.push(cell); cell = ""; }
      else if (ch === "\n") { row.push(cell); rows.push(row); row = []; cell = ""; }
      else if (ch === "\r") { /* skip; \n handles line end */ }
      else cell += ch;
    }
  }
  if (cell.length > 0 || row.length > 0) { row.push(cell); rows.push(row); }
  return rows;
}

async function fetchSheetRows(): Promise<SheetRow[]> {
  const bust = Math.floor(Date.now() / 60000);
  const url =
    `https://docs.google.com/spreadsheets/d/${SHEET_CONFIG.sheetId}` +
    `/export?format=csv&gid=${encodeURIComponent(SHEET_CONFIG.gid)}` +
    `&_=${bust}`;

  const res = await fetch(url);
  if (!res.ok) throw new Error(`Sheet fetch failed: ${res.status}`);
  const text = await res.text();

  const rows = parseCsv(text).filter((r) => r.some((c) => c.trim() !== ""));
  if (rows.length === 0) return [];

  const header = rows[0].map((h) => h.trim());
  return rows.slice(1).map((r) => {
    const obj: Record<string, string> = {};
    header.forEach((key, i) => {
      obj[key || `col${i}`] = (r[i] ?? "").trim();
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
  const v = canonicalVariant(variant);
  if (!v) return "price";
  if (v === "domestic" || v === "dom") return "priceDom";
  if (v === "imported" || v === "imp") return "priceImp";
  if (v === "peg" || v === "glass") return "priceGlass";
  if (v === "bottle") return "priceBottle";
  if (v === "pitcher") return "priceBottle";
  if (v === "330ml" || v === "300ml") return "price300";
  if (v === "650ml" || v === "1000ml") return "price650";
  return "price";
}

/**
 * Strip size annotations from a Variant string so that e.g. "Bottle 1000ml"
 * and "Bottle" share the same canonical key ("bottle"). Variants that ARE
 * sizes ("330ml", "650ml") are preserved as-is.
 */
function canonicalVariant(variant: string): string {
  const lower = variant.toLowerCase().trim();
  if (!lower) return "";
  const stripped = lower
    .replace(/\s*\d+(?:\.\d+)?\s*(?:ml|l|ltr|lts)\b/g, "")
    .trim();
  return stripped || lower;
}

/** Default volume assumed for each volumetric price-field. */
const DEFAULT_VOLUME: Partial<Record<PriceField, string>> = {
  priceBottle: "750ml",
};

/**
 * Extract a non-default volume annotation from a Variant string.
 * Example: variant="Bottle 1000ml", field="priceBottle" → "1000ml".
 * Returns undefined when the variant carries no size, or when the size
 * equals the default for that field.
 */
function extractNonDefaultVolume(
  variant: string,
  field: PriceField,
): string | undefined {
  const defaultSize = DEFAULT_VOLUME[field];
  if (!defaultSize) return undefined;
  const m = variant.match(/(\d+(?:\.\d+)?)\s*(ml|l|ltr|lts)\b/i);
  if (!m) return undefined;
  const size = `${m[1]}${m[2].toLowerCase()}`;
  return size === defaultSize ? undefined : size;
}

/** Append a "(1000ml)"-style volume annotation to a price value. */
function annotatePriceWithVolume(price: string, size?: string): string {
  if (!price || !size) return price;
  if (price.includes("(")) return price;
  return `${price} (${size})`;
}

/**
 * Derive the two-column header pair for a section/subsection based on the
 * variants its items actually use. Returns undefined when no pair matches.
 */
function deriveHeaders(variants: Set<string>): [string, string] | undefined {
  const has = (v: string) => variants.has(v.toLowerCase());
  if (has("domestic") && has("imported")) return ["DOM", "IMP"];
  if (has("dom") && has("imp")) return ["DOM", "IMP"];
  if (has("peg") && has("bottle")) return ["Peg", "Bottle"];
  if (has("glass") && has("bottle")) return ["Glass", "Bottle"];
  if (has("glass") && has("pitcher")) return ["Glass", "Pitcher"];
  if ((has("330ml") || has("300ml")) && (has("650ml") || has("1000ml"))) {
    return ["330ml", "650ml"];
  }
  return undefined;
}

/**
 * When a section/subsection has rows with only a SINGLE price variant (e.g.
 * all pitchers use `Variant=DOM`), collapse the variant-specific price field
 * onto the generic `price` field and return a single-label header so the UI
 * renders one column instead of a sparse two-column layout.
 */
function collapseSingleVariant(
  items: MenuItem[],
  variants: Set<string>,
): { items: MenuItem[]; headers?: string[] } {
  if (variants.size !== 1) return { items };
  const variant = [...variants][0];
  if (!variant) return { items };
  const field = variantToField(variant);
  if (field === "price") return { items };
  const collapsed: MenuItem[] = items.map((it) => {
    const obj = { ...it } as Record<string, unknown>;
    const p = obj[field];
    if (!p) return it;
    delete obj[field];
    obj.price = p;
    return obj as MenuItem;
  });
  return { items: collapsed, headers: [variant.toUpperCase()] };
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
    const variant = row.Variant?.trim() || "";
    const field = variantToField(variant);
    const rawPrice = formatPrice(row.Price);
    const volume = extractNonDefaultVolume(variant, field);
    const price = annotatePriceWithVolume(rawPrice, volume);

    if (variant) variantsSeen.add(canonicalVariant(variant));

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
    const realSubNames = [...subMap.keys()].filter((s) => s !== "");
    const emptySubRows = subMap.get("") ?? [];

    if (realSubNames.length === 0) {
      const { items, variants } = mergeRowsToItems(emptySubRows);
      if (items.length === 0) return;
      const collapsed = collapseSingleVariant(items, variants);
      const headers = collapsed.headers ?? deriveHeaders(variants);
      sections.push({
        id: slugify(catTitle),
        title: toTitleCase(catTitle),
        items: collapsed.items,
        ...(headers ? { priceHeaders: headers } : {}),
      });
      return;
    }

    // Category has real subcategories — possibly alongside empty-subcat rows
    // which we treat as top-level items under the category.
    const subsections: NonNullable<MenuSection["subsections"]> = [];
    const allVariants = new Set<string>();

    let topItems: MenuItem[] = [];
    let topHeaders: string[] | undefined;
    if (emptySubRows.length > 0) {
      const { items, variants } = mergeRowsToItems(emptySubRows);
      const collapsed = collapseSingleVariant(items, variants);
      topItems = collapsed.items;
      topHeaders = collapsed.headers ?? deriveHeaders(variants);
      variants.forEach((v) => allVariants.add(v));
    }

    for (const subName of realSubNames) {
      const { items, variants } = mergeRowsToItems(subMap.get(subName)!);
      if (items.length === 0) continue;
      const collapsed = collapseSingleVariant(items, variants);
      const headers = collapsed.headers ?? deriveHeaders(variants);
      subsections.push({
        title: subName,
        items: collapsed.items,
        ...(headers ? { priceHeaders: headers } : {}),
      });
      variants.forEach((v) => allVariants.add(v));
    }

    if (topItems.length === 0 && subsections.length === 0) return;

    const sectionHeaders = topHeaders ?? deriveHeaders(allVariants);
    sections.push({
      id: slugify(catTitle),
      title: toTitleCase(catTitle),
      items: topItems,
      subsections,
      ...(sectionHeaders ? { priceHeaders: sectionHeaders } : {}),
    });
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
