import type {
  MenuCategory,
  MenuItem,
  SubCategory,
} from "@/data/banquetMenuData";

/**
 * Google Sheet source of truth for this menu.
 * Client edits this sheet → changes appear live on the site.
 * See SETUP.md at the repo root.
 */
export const SHEET_CONFIG = {
  sheetId: "148GUf4oqPg8FX2D-H0tikJ5POyMxIKzeXqZDQrlgKSg",
  gid: "1235339567",
} as const;

const CURRENCY = "₹";

/**
 * The sticky banquet nav (BanquetNav.tsx) hardcodes these section ids, so
 * the adapter must emit the same slugs regardless of how the client spells
 * the category titles. Add new overrides here if more categories get aliased.
 */
const CATEGORY_ID_OVERRIDES: Record<string, string> = {
  "mains - vegetarian": "mains-veg",
  "mains - non vegetarian": "mains-nonveg",
  "ram's signature": "rams-signature",
  "rams signature": "rams-signature",
  "ram signature": "rams-signature",
};

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

// We use the CSV export endpoint (not gviz/tq JSON) because gviz types each
// column strictly (e.g. boolean Available, numeric Price) and silently drops
// any cell that doesn't match that type. CSV export preserves all cell text
// verbatim, so boolean FALSE values and unusual price formats come through
// reliably.

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

function categoryIdFor(title: string): string {
  const key = title
    .toLowerCase()
    .replace(/[\u2018\u2019\u02BC\u0060]/g, "'")
    .trim();
  return CATEGORY_ID_OVERRIDES[key] ?? slugify(title);
}

function formatPrice(raw: string): string {
  const v = String(raw).trim();
  if (!v) return "";
  if (v.includes(CURRENCY) || /^[₹$€£]/.test(v)) return v;
  return `${CURRENCY}${v}`;
}

function normalizeDiet(v: string): MenuItem["diet"] {
  const d = v.toLowerCase().trim();
  if (d === "veg") return "veg";
  if (d === "non-veg" || d === "nonveg" || d === "non veg") return "non-veg";
  return undefined;
}

/**
 * Merge variant rows for the same dish. Banquet items often have no price,
 * but when variants + prices are present we join them: "₹A / ₹B".
 */
function mergeRowsToItems(rows: SheetRow[]): MenuItem[] {
  const items: MenuItem[] = [];
  const index = new Map<string, number>();

  for (const row of rows) {
    const name = row.Name?.trim();
    if (!name) continue;

    const description = row.Description?.trim();
    const variant = row.Variant?.trim();
    const price = formatPrice(row.Price);
    const diet = normalizeDiet(row.DietType);
    const priceLabel = variant && price ? `${variant} ${price}` : price;

    const key = `${name.toLowerCase()}|${(description || "").toLowerCase()}`;
    const existing = index.get(key);
    if (existing === undefined) {
      const item: MenuItem = { name };
      if (description) item.description = description;
      if (priceLabel) item.price = priceLabel;
      if (diet) item.diet = diet;
      items.push(item);
      index.set(key, items.length - 1);
    } else {
      const item = items[existing];
      if (priceLabel) {
        item.price = item.price ? `${item.price} / ${priceLabel}` : priceLabel;
      }
    }
  }

  return items;
}

function transformRows(rows: SheetRow[]): MenuCategory[] {
  const available = rows.filter((r) => isAvailable(r.Available));

  /*
   * Category-level metadata rows: any available row where Name is empty is
   * treated as category metadata (not an item). Its Description becomes one
   * paragraph of the category's description. Multiple such rows produce
   * multiple paragraphs, joined with "|" (the RamsSignatureHeader and other
   * headers split on "|" to render separate <p> blocks).
   */
  const descriptions = new Map<string, string[]>();
  const itemRows: SheetRow[] = [];
  for (const row of available) {
    const cat = row.Category?.trim();
    if (!cat) continue;
    const name = row.Name?.trim();
    if (!name) {
      const desc = row.Description?.trim();
      if (desc) {
        const list = descriptions.get(cat) ?? [];
        list.push(desc);
        descriptions.set(cat, list);
      }
      continue;
    }
    itemRows.push(row);
  }

  const byCat = new Map<string, Map<string, SheetRow[]>>();
  for (const row of itemRows) {
    const cat = row.Category.trim();
    const sub = row.SubCategory?.trim() || "";
    if (!byCat.has(cat)) byCat.set(cat, new Map());
    const subMap = byCat.get(cat)!;
    if (!subMap.has(sub)) subMap.set(sub, []);
    subMap.get(sub)!.push(row);
  }

  const categories: MenuCategory[] = [];
  byCat.forEach((subMap, catTitle) => {
    const hasRealSubs =
      subMap.size > 1 || (subMap.size === 1 && !subMap.has(""));

    const description = descriptions.get(catTitle)?.join("|");

    if (hasRealSubs) {
      const subCategories: SubCategory[] = [];
      subMap.forEach((subRows, subName) => {
        const items = mergeRowsToItems(subRows);
        if (items.length === 0) return;
        subCategories.push({ name: subName || catTitle, items });
      });
      if (subCategories.length === 0) return;
      categories.push({
        id: categoryIdFor(catTitle),
        title: catTitle,
        ...(description ? { description } : {}),
        categories: subCategories,
      });
    } else {
      const items = mergeRowsToItems(subMap.get("") ?? []);
      if (items.length === 0) return;
      categories.push({
        id: categoryIdFor(catTitle),
        title: catTitle,
        ...(description ? { description } : {}),
        items,
      });
    }
  });

  return categories;
}

export async function fetchBanquetMenu(): Promise<MenuCategory[]> {
  const rows = await fetchSheetRows();
  return transformRows(rows);
}
