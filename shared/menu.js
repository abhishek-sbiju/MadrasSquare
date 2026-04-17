/* ============================================================
   Reusable Google Sheets → Dynamic Menu Renderer
   ------------------------------------------------------------
   Each page sets these globals BEFORE loading this script:
     window.SHEET_ID    = "<your Google Sheet ID>";
     window.SHEET_NAME  = "eastcoast_food"; // tab/sheet name
     window.MENU_MOUNT  = "#menu";          // optional, default "#menu"
     window.CURRENCY    = "₹";              // optional, default "₹"

   Sheet columns (header row):
     Category | SubCategory | Name | Description | Variant |
     Price   | DietType   | Tags | Available
   ============================================================ */

(function () {
  "use strict";

  const MOUNT_SELECTOR = window.MENU_MOUNT || "#menu";
  const CURRENCY = window.CURRENCY || "₹";

  // -----------------------------------------------------------
  // 1. Fetch sheet via gviz JSON and normalize into plain objects
  // -----------------------------------------------------------
  async function fetchSheet(sheetId, { gid, sheetName } = {}) {
    // Cache-buster: Google caches gviz responses aggressively. Appending a
    // per-minute token keeps edits fresh without hammering the endpoint.
    const bust = Math.floor(Date.now() / 60000);
    const tabParam = gid
      ? `gid=${encodeURIComponent(gid)}`
      : `sheet=${encodeURIComponent(sheetName || "")}`;
    const url =
      `https://docs.google.com/spreadsheets/d/${sheetId}` +
      `/gviz/tq?tqx=out:json&${tabParam}&_=${bust}`;

    const res = await fetch(url);
    const text = await res.text();

    // gviz wraps JSON in a JS callback — strip it
    const json = JSON.parse(
      text.substring(text.indexOf("{"), text.lastIndexOf("}") + 1)
    );

    const cols = json.table.cols.map((c, i) => {
      const label = (c.label || "").trim();
      return label || `col${i}`;
    });

    return json.table.rows.map((row) => {
      const obj = {};
      row.c.forEach((cell, i) => {
        let v = cell ? cell.v : "";
        if (v === null || v === undefined) v = "";
        obj[cols[i]] = typeof v === "string" ? v.trim() : v;
      });
      return obj;
    });
  }

  // -----------------------------------------------------------
  // 2. Keep only rows where Available is truthy
  // -----------------------------------------------------------
  function isAvailable(value) {
    if (value === true) return true;
    if (value === false) return false;
    const v = String(value).toLowerCase().trim();
    if (v === "" || v === "true" || v === "yes" || v === "y" || v === "1") {
      return true;
    }
    return false;
  }

  // -----------------------------------------------------------
  // 3. Group { Category: { SubCategory: [items...] } }
  //    Preserves the order items first appear in the sheet.
  // -----------------------------------------------------------
  function groupItems(items) {
    const grouped = new Map();

    items.forEach((item) => {
      const cat = item.Category || "Other";
      const sub = item.SubCategory || "";

      if (!grouped.has(cat)) grouped.set(cat, new Map());
      const subMap = grouped.get(cat);
      if (!subMap.has(sub)) subMap.set(sub, []);
      subMap.get(sub).push(item);
    });

    return grouped;
  }

  // -----------------------------------------------------------
  // 4. Simple HTML escaper
  // -----------------------------------------------------------
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  // -----------------------------------------------------------
  // 5. Render grouped menu into the mount element
  // -----------------------------------------------------------
  function renderMenu(grouped, container) {
    container.innerHTML = "";

    if (grouped.size === 0) {
      container.innerHTML = `<p class="menu-empty">No items available.</p>`;
      return;
    }

    grouped.forEach((subMap, category) => {
      const section = document.createElement("section");
      section.className = "menu-category";

      const catHeading = document.createElement("h2");
      catHeading.className = "menu-category-title";
      catHeading.textContent = category;
      section.appendChild(catHeading);

      subMap.forEach((items, sub) => {
        if (sub) {
          const subHeading = document.createElement("h3");
          subHeading.className = "menu-subcategory-title";
          subHeading.textContent = sub;
          section.appendChild(subHeading);
        }

        const list = document.createElement("ul");
        list.className = "menu-items";

        // Merge variants of the same item name into a single card
        const byName = new Map();
        items.forEach((it) => {
          const key = it.Name || "";
          if (!byName.has(key)) byName.set(key, []);
          byName.get(key).push(it);
        });

        byName.forEach((variants, name) => {
          list.appendChild(renderItem(name, variants));
        });

        section.appendChild(list);
      });

      container.appendChild(section);
    });
  }

  // -----------------------------------------------------------
  // 6. Render a single item (may have multiple variants)
  // -----------------------------------------------------------
  function renderItem(name, variants) {
    const li = document.createElement("li");
    li.className = "menu-item";

    const first = variants[0];
    const desc = first.Description || "";
    const diet = (first.DietType || "").toLowerCase();
    const tags = String(first.Tags || "")
      .split(/[|,]/)
      .map((t) => t.trim())
      .filter(Boolean);

    let dotClass = "";
    if (diet === "veg") dotClass = "dot-veg";
    else if (diet === "non-veg") dotClass = "dot-nonveg";

    const variantHtml =
      variants.length === 1 && !first.Variant
        ? first.Price !== "" && first.Price != null
          ? `<span class="menu-price">${CURRENCY}${esc(first.Price)}</span>`
          : ""
        : `<ul class="menu-variants">${variants
            .map(
              (v) => `
                <li>
                  <span class="menu-variant-name">${esc(v.Variant || "Regular")}</span>
                  ${
                    v.Price !== "" && v.Price != null
                      ? `<span class="menu-price">${CURRENCY}${esc(v.Price)}</span>`
                      : ""
                  }
                </li>`
            )
            .join("")}</ul>`;

    li.innerHTML = `
      <div class="menu-item-head">
        ${dotClass ? `<span class="diet-dot ${dotClass}" title="${esc(diet)}"></span>` : ""}
        <h4 class="menu-item-name">${esc(name)}</h4>
        ${
          tags.length
            ? `<span class="menu-tags">${tags
                .map((t) => `<span class="menu-tag tag-${esc(t.toLowerCase())}">${esc(t)}</span>`)
                .join("")}</span>`
            : ""
        }
      </div>
      ${desc ? `<p class="menu-desc">${esc(desc)}</p>` : ""}
      ${variantHtml}
    `;

    return li;
  }

  // -----------------------------------------------------------
  // 7. Init
  // -----------------------------------------------------------
  async function init() {
    const container = document.querySelector(MOUNT_SELECTOR);
    if (!container) {
      console.error(`[menu] mount element not found: ${MOUNT_SELECTOR}`);
      return;
    }

    // Resolve the sheet. Preferred: window.MENU points at an entry in
    // window.MENUS (from config.js). Fallback kept for any legacy pages
    // still using window.SHEET_ID + window.SHEET_NAME.
    let sheetId = "";
    let gid = "";
    let sheetName = "";

    if (window.MENU && window.MENUS && window.MENUS[window.MENU]) {
      const entry = window.MENUS[window.MENU];
      sheetId = entry.sheetId;
      gid = entry.gid;
      sheetName = entry.sheetName || "";
    } else {
      sheetId = window.SHEET_ID || "";
      sheetName = window.SHEET_NAME || "";
    }

    if (!sheetId || /^PASTE_.*_HERE$/.test(sheetId) || (!gid && !sheetName)) {
      container.innerHTML =
        `<p class="menu-error">Menu not configured yet. Check <code>shared/config.js</code>.</p>`;
      return;
    }

    container.innerHTML = `<p class="menu-loading">Loading menu…</p>`;

    try {
      const rows = await fetchSheet(sheetId, { gid, sheetName });
      const available = rows.filter((r) => isAvailable(r.Available));
      const grouped = groupItems(available);
      renderMenu(grouped, container);
    } catch (err) {
      console.error("[menu] failed to load", err);
      container.innerHTML =
        `<p class="menu-error">Could not load menu. Please refresh the page.</p>`;
    }
  }

  // Expose for debugging / reuse
  window.MenuSystem = { fetchSheet, groupItems, isAvailable, renderMenu, init };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
