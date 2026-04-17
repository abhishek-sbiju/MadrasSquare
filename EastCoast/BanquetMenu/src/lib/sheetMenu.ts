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
  sheetId: "1AKJj-QUZhjUcpN24otklDiL_UYkTUybJbLGwaim4nUM",
  gid: "179261080",
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
  const key = title.toLowerCase().trim();
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

  const categories: MenuCategory[] = [];
  byCat.forEach((subMap, catTitle) => {
    const hasRealSubs =
      subMap.size > 1 || (subMap.size === 1 && !subMap.has(""));

    if (hasRealSubs) {
      const subCategories: SubCategory[] = [];
      subMap.forEach((subRows, subName) => {
        subCategories.push({
          name: subName || catTitle,
          items: mergeRowsToItems(subRows),
        });
      });
      categories.push({
        id: categoryIdFor(catTitle),
        title: catTitle,
        categories: subCategories,
      });
    } else {
      categories.push({
        id: categoryIdFor(catTitle),
        title: catTitle,
        items: mergeRowsToItems(subMap.get("") ?? []),
      });
    }
  });

  return categories;
}

export async function fetchBanquetMenu(): Promise<MenuCategory[]> {
  const rows = await fetchSheetRows();
  return transformRows(rows);
}
