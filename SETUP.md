# Madras Square — Self-Serve Menu Setup

Your menu is powered by Google Sheets. Edit the sheet, refresh the page,
done. No developer needed.

There are **5 menus**, each backed by its own Google Sheet:

| Menu              | Sheet                                                                                                             |
| ----------------- | ----------------------------------------------------------------------------------------------------------------- |
| East Coast Food   | <https://docs.google.com/spreadsheets/d/17ycUvq6m-yyiSAKUcLDqMap0iV2KZCGEmej9nxfybPs/edit?gid=1082101207>          |
| East Coast Drinks | <https://docs.google.com/spreadsheets/d/1o4U7QJZOOHlYzhmZCmEqbFbv0Zk9mZFW4tKPaze5kjE/edit?gid=769161435>           |
| East Coast Banquet| <https://docs.google.com/spreadsheets/d/1AKJj-QUZhjUcpN24otklDiL_UYkTUybJbLGwaim4nUM/edit?gid=179261080>           |
| The Beach Food    | <https://docs.google.com/spreadsheets/d/1hF98v8mepLJBwQ0Wy9xO1TcIsq3JN6PWVnpC6ZakQ7g/edit?gid=564329166>           |
| The Beach Drinks  | <https://docs.google.com/spreadsheets/d/1rLzDyEz07Z6_ixDUGjJEESkFT4q6wbXVTPvwPBRPkK0/edit?gid=834377372>           |

The IDs are already wired into `shared/config.js` — you don't need to edit
any code to start using this.

---

## One-time setup per sheet (do this for each of the 5)

### 1. Make sure the sheet has the right columns

Row 1 must be exactly these headers, in this order:

```
Category | SubCategory | Name | Description | Variant | Price | DietType | Tags | Available
```

If a sheet is blank, seed it by **File → Import** and uploading the
matching CSV from `csv/`:

- `csv/eastcoast_food.csv`
- `csv/eastcoast_drinks.csv`
- `csv/thebeach_food.csv`
- (banquet and thebeach-drinks: start from a sibling as a template or add rows manually)

Choose **Replace current sheet** on import.

### 2. Share the sheet publicly (view-only)

This is the **most important step** — without it the website can't read
the sheet.

1. Top-right of the sheet → **Share**.
2. Under **General access**, change from *Restricted* to
   **Anyone with the link**.
3. Keep the role as **Viewer**.
4. Click **Done**.

Only people you've explicitly invited as editors can edit. Customers
loading the website only see the rendered menu, never the sheet itself.

### 3. Test it

Open the matching HTML page in your browser:

- `EastCoast/food.html`
- `EastCoast/drinks.html`
- `EastCoast/banquet.html`
- `TheBeach/food.html`
- `TheBeach/drinks.html`

You should see the menu. If it says *"Could not load menu"*, the sheet
almost certainly isn't shared publicly — go back to step 2.

---

## How to edit the menu (day-to-day)

Open the relevant Google Sheet and change any cell. Hit Enter. Refresh
the website. That's it.

### Column reference

| Column         | What it does                                                                         |
| -------------- | ------------------------------------------------------------------------------------ |
| `Category`     | The big section heading (e.g. `SOUPS`, `SALADS`, `STARTERS`).                        |
| `SubCategory`  | Optional grouping inside a category (e.g. `Vegetarian Starters`). Leave blank if unused. |
| `Name`         | The dish / drink name shown in bold.                                                 |
| `Description`  | Short line under the name.                                                           |
| `Variant`      | Leave blank for simple items. Fill it when the same item has multiple prices (e.g. `Veg`, `Chicken`, `Prawns` or `Domestic`, `Imported`). Use the **same `Name`** on each variant row. |
| `Price`        | Number only — no `₹` symbol.                                                         |
| `DietType`     | `veg` or `non-veg` (lowercase).                                                      |
| `Tags`         | Comma- or `|`-separated labels shown as pills. `new` and `seafood` are pre-styled. Leave blank for none. |
| `Available`    | `TRUE` to show, `FALSE` to hide temporarily without deleting. Blank also counts as available. |

### Common edits

- **Change a price:** edit `Price`, refresh.
- **Temporarily hide an item (e.g. out of stock):** set `Available` to `FALSE`.
- **Add a new dish:** add a row, fill in at least `Category`, `Name`, `Price`, `DietType`, and `Available=TRUE`.
- **Add a new section:** use a new value in `Category` — it'll automatically get its own heading.
- **Mark something "new":** put `new` in the `Tags` column.

### Don't do

- Don't rename, remove, or reorder the header row.
- Don't put `₹` or other text in the `Price` column — numbers only.
- Don't delete the sheet or change "Anyone with the link — Viewer" sharing.
- Don't type `True ` / `Yes` / `1` with a trailing space — stick to `TRUE` / `FALSE`.

---

## Freshness

Google caches sheet responses for about a minute. If a change doesn't
show up immediately, wait 60 seconds and hard-refresh (Ctrl+F5 on
Windows, Cmd+Shift+R on Mac).

---

## For the developer: adding a new menu

1. Create a Google Sheet, seed it with the 9-column header.
2. Share it "Anyone with the link — Viewer".
3. Copy the sheet ID and tab gid from the URL.
4. Add an entry to `window.MENUS` in `shared/config.js`:

   ```js
   "newplace-food": {
     sheetId: "…",
     gid: "…",
   },
   ```

5. In the matching HTML page, set `window.MENU = "newplace-food"` before
   loading `shared/menu.js`.

---

## Troubleshooting

| Symptom                              | Likely cause                              | Fix                                                            |
| ------------------------------------ | ----------------------------------------- | -------------------------------------------------------------- |
| "Menu not configured yet"            | `window.MENU` doesn't match a `MENUS` key | Check spelling in the HTML page                                 |
| "Could not load menu"                | Sheet not shared publicly                 | Share → Anyone with the link → Viewer                          |
| An item is missing                   | `Available` is `FALSE` (or a typo)        | Use exactly `TRUE` / `FALSE`                                   |
| Category heading looks wrong         | Header row was edited                     | Restore original headers                                       |
| Price shows as `₹undefined`          | Non-numeric value in `Price`              | Numbers only, no symbols                                       |
| Changes not showing                  | 1-minute Google cache                     | Wait 60s, hard-refresh (Ctrl+F5)                               |
