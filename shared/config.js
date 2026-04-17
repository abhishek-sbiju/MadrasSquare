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
  "eastcoast-drinks": {
    sheetId: "1o4U7QJZOOHlYzhmZCmEqbFbv0Zk9mZFW4tKPaze5kjE",
    gid: "769161435",
  },
  "eastcoast-banquet": {
    sheetId: "1AKJj-QUZhjUcpN24otklDiL_UYkTUybJbLGwaim4nUM",
    gid: "179261080",
  },
  "thebeach-food": {
    sheetId: "1hF98v8mepLJBwQ0Wy9xO1TcIsq3JN6PWVnpC6ZakQ7g",
    gid: "564329166",
  },
  "thebeach-drinks": {
    sheetId: "1rLzDyEz07Z6_ixDUGjJEESkFT4q6wbXVTPvwPBRPkK0",
    gid: "834377372",
  },
};

window.CURRENCY = "₹";
