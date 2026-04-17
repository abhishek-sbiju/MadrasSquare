import type { MenuItem, MenuSection } from "@/data/menuData";

/**
 * Google Sheet source of truth for this menu.
 * Client edits this sheet → changes appear live on the site.
 * See SETUP.md at the repo root.
 */
export const SHEET_CONFIG = {
  sheetId: "1hF98v8mepLJBwQ0Wy9xO1TcIsq3JN6PWVnpC6ZakQ7g",
  gid: "564329166",
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

function toTitleCase(s: string): string {
  return s.toLowerCase().replace(/\b[a-z]/g, (c) => c.toUpperCase());
}

function formatPrice(raw: string): string {
  const v = String(raw).trim();
  if (!v) return "";
  if (v.includes(CURRENCY) || /^[₹$€£]/.test(v)) return v;
  return `${CURRENCY}${v}`;
}

/**
 * Merge variant rows for the same dish into one `price: "₹A / ₹B / ₹C"`
 * string, matching the existing hardcoded data's convention.
 */
function mergeRowsToItems(rows: SheetRow[]): MenuItem[] {
  const items: MenuItem[] = [];
  const index = new Map<string, number>();

  for (const row of rows) {
    const name = row.Name?.trim();
    if (!name) continue;

    const description = row.Description?.trim();
    const price = formatPrice(row.Price);

    const key = `${name.toLowerCase()}|${(description || "").toLowerCase()}`;
    const existing = index.get(key);
    if (existing === undefined) {
      const item: MenuItem = { name };
      if (description) item.description = description;
      if (price) item.price = price;
      items.push(item);
      index.set(key, items.length - 1);
    } else {
      const item = items[existing];
      if (price) {
        item.price = item.price ? `${item.price} / ${price}` : price;
      }
    }
  }

  return items;
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
      subMap.forEach((subRows, subName) => {
        subsections.push({
          title: subName || catTitle,
          items: mergeRowsToItems(subRows),
        });
      });
      sections.push({
        id: slugify(catTitle),
        title: toTitleCase(catTitle),
        items: [],
        subsections,
      });
    } else {
      sections.push({
        id: slugify(catTitle),
        title: toTitleCase(catTitle),
        items: mergeRowsToItems(subMap.get("") ?? []),
      });
    }
  });

  return sections;
}

export async function fetchMenuSections(): Promise<MenuSection[]> {
  const rows = await fetchSheetRows();
  return transformRows(rows);
}
