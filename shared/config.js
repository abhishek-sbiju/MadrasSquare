/* ============================================================
   Shared Config — Madras Square
   ------------------------------------------------------------
   One entry per menu. Each menu is backed by its own Google
   Sheet. A specific tab inside that sheet is identified by its
   `gid` (the number after `gid=` in the sheet URL), so clients
   can rename tabs freely without breaking the site.

   SHEET URL EXAMPLE
     https://docs.google.com/spreadsheets/d/<SHEET_ID>/edit?gid=<GID>
                                            ^^^^^^^^             ^^^

   SHARING
     Each sheet must be set to "Anyone with the link — Viewer"
     (File → Share → General access → Anyone with the link).
   ============================================================ */

window.MENUS = {
  "eastcoast-food": {
    sheetId: "17ycUvq6m-yyiSAKUcLDqMap0iV2KZCGEmej9nxfybPs",
    gid: "1082101207",
  },
  "eastcoast-banquet": {
    sheetId: "148GUf4oqPg8FX2D-H0tikJ5POyMxIKzeXqZDQrlgKSg",
    gid: "1235339567",
  },
  "thebeach-food": {
    sheetId: "1hF98v8mepLJBwQ0Wy9xO1TcIsq3JN6PWVnpC6ZakQ7g",
    gid: "564329166",
  },
  "madras-square-liquor": {
    sheetId: "1rtiCkSTJFIAqQmz8TQ8ymvdX6hXcv2iLOwvOv_ETRW8",
    gid: "1405826352",
  },
};

window.CURRENCY = "₹";
