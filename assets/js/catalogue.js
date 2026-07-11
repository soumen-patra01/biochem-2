/* BIOCHEM TECHNOLOGIES — catalogue.js
   Search + suggestions · filters · grid rendering · compare · empty state */
(function () {
  "use strict";
  if (typeof BIOCHEM_PRODUCTS === "undefined") return;

  var products = BIOCHEM_PRODUCTS;
  var grid = document.getElementById("product-grid");
  var emptyState = document.getElementById("empty-state");
  var countEl = document.querySelector("[data-result-count]");
  var chipsEl = document.querySelector("[data-active-chips]");
  var searchInput = document.getElementById("catalogue-search");
  var suggestions = document.getElementById("search-suggestions");

  var state = { q: "", cat: "all", app: [], ind: [], form: [], tech: [] };
  var compare = [];

  var TECH_LABELS = { eco: "Eco Friendly", zdhc: "ZDHC Compatible", silicone: "Silicone", enzyme: "Enzyme" };
  var POPULAR = ["Silicone softener", "Peroxide stabilizer", "Bio-polishing", "Soaping agent", "Wetting agent"];

  /* ---------- Helpers ---------- */
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function matches(p) {
    if (state.cat !== "all" && p.cat !== state.cat) return false;
    if (state.app.length && !state.app.some(function (a) {
      return p.apps.some(function (pa) { return pa.toLowerCase().indexOf(a.toLowerCase()) !== -1; });
    })) return false;
    if (state.ind.length && !state.ind.some(function (i) { return p.industries.indexOf(i) !== -1; })) return false;
    if (state.form.length && state.form.indexOf(p.form) === -1) return false;
    if (state.tech.length && !state.tech.every(function (t) { return p.tech.indexOf(t) !== -1; })) return false;
    if (state.q) {
      var hay = (p.code + " " + p.name + " " + p.summary + " " + p.catLabel + " " +
        p.apps.join(" ") + " " + p.industries.join(" ") + " " + p.benefits.join(" ")).toLowerCase();
      if (hay.indexOf(state.q.toLowerCase()) === -1) return false;
    }
    return true;
  }

  /* ---------- Render ---------- */
  var DL_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>';

  function flagBadge(p) {
    if (p.flag === "new") return '<span class="badge badge--new">New</span>';
    if (p.flag === "featured") return '<span class="badge badge--featured">Featured</span>';
    return "";
  }

  function techBadges(p) {
    return p.tech.map(function (t) {
      var cls = (t === "eco" || t === "zdhc") ? "badge badge--eco" : "badge";
      return '<span class="' + cls + '">' + esc(TECH_LABELS[t] || t) + "</span>";
    }).join("");
  }

  function renderCard(p, i) {
    var checked = compare.indexOf(p.code) !== -1 ? " checked" : "";
    return '<article class="pcard" style="animation-delay:' + Math.min(i * 45, 360) + 'ms">' +
      '<div class="pcard__top"><span class="code" data-copy="' + esc(p.code) + '" data-tip="Copy code">' + esc(p.code) + "</span>" +
      '<span class="badge badge--category">' + esc(p.catLabel) + "</span></div>" +
      "<h3>" + esc(p.name) + "</h3>" + (flagBadge(p) ? '<div class="pcard__row">' + flagBadge(p) + "</div>" : "") +
      '<p class="pcard__sum">' + esc(p.summary) + "</p>" +
      '<div class="pcard__row"><span class="pcard__label">Applications</span>' +
      p.apps.map(function (a) { return '<span class="chip chip--tag">' + esc(a) + "</span>"; }).join("") + "</div>" +
      '<div class="pcard__row"><span class="pcard__label">Key benefits</span></div>' +
      '<ul class="pcard__benefits">' + p.benefits.map(function (b) { return "<li>" + esc(b) + "</li>"; }).join("") + "</ul>" +
      '<div class="pcard__row"><span class="badge">' + esc(p.form) + "</span>" + techBadges(p) +
      p.industries.map(function (ind) { return '<span class="badge">' + esc(ind) + "</span>"; }).join("") + "</div>" +
      '<div class="pcard__foot">' +
      '<button class="doc-btn" type="button" aria-label="Download TDS for ' + esc(p.name) + '">' + DL_ICON + "TDS</button>" +
      '<button class="doc-btn" type="button" aria-label="Download MSDS for ' + esc(p.name) + '">' + DL_ICON + "MSDS</button>" +
      '<button class="doc-btn" type="button" data-modal-open="modal-sample" data-product-name="Product: ' + esc(p.name) + " (" + esc(p.code) + ')">Sample</button>' +
      '<a class="btn btn--sm btn--secondary" href="product-detail.html">View</a></div>' +
      '<div class="pcard__compare"><label class="checkbox"><input type="checkbox" data-compare-code="' + esc(p.code) + '"' + checked + "><span>Add to compare</span></label></div>" +
      "</article>";
  }

  function render() {
    var visible = products.filter(matches);
    grid.innerHTML = visible.map(renderCard).join("");
    if (countEl) countEl.textContent = visible.length;
    emptyState.classList.toggle("is-visible", visible.length === 0);
    renderChips();
  }

  function renderChips() {
    if (!chipsEl) return;
    var chips = [];
    ["app", "ind", "form", "tech"].forEach(function (key) {
      state[key].forEach(function (v) {
        chips.push('<button class="chip is-active" data-chip-remove="' + key + ":" + esc(v) + '">' +
          esc(TECH_LABELS[v] || v) + " ✕</button>");
      });
    });
    if (state.q) chips.push('<button class="chip is-active" data-chip-remove="q:">“' + esc(state.q) + '” ✕</button>');
    chipsEl.innerHTML = chips.join("");
  }

  /* ---------- Category tiles ---------- */
  var catCounts = { all: products.length };
  products.forEach(function (p) { catCounts[p.cat] = (catCounts[p.cat] || 0) + 1; });
  document.querySelectorAll("[data-cat-count]").forEach(function (el) {
    var c = catCounts[el.getAttribute("data-cat-count")] || 0;
    el.textContent = c + " product" + (c === 1 ? "" : "s");
  });
  document.querySelectorAll(".cat-tile").forEach(function (tile) {
    tile.addEventListener("click", function () {
      document.querySelectorAll(".cat-tile").forEach(function (t) { t.classList.remove("is-active"); });
      tile.classList.add("is-active");
      state.cat = tile.getAttribute("data-cat");
      render();
      document.getElementById("catalogue").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  /* Deep-link: products.html#dyeing etc. */
  var hash = location.hash.replace("#", "");
  var hashTile = document.querySelector('.cat-tile[data-cat="' + hash + '"]');
  if (hashTile) {
    document.querySelectorAll(".cat-tile").forEach(function (t) { t.classList.remove("is-active"); });
    hashTile.classList.add("is-active");
    state.cat = hash;
  }

  /* ---------- Filters ---------- */
  document.querySelectorAll("[data-filter]").forEach(function (box) {
    box.addEventListener("change", function () {
      var key = box.getAttribute("data-filter");
      var val = box.value;
      if (box.checked) {
        if (state[key].indexOf(val) === -1) state[key].push(val);
      } else {
        state[key] = state[key].filter(function (v) { return v !== val; });
      }
      render();
    });
  });

  function resetFilters() {
    state = { q: "", cat: state.cat, app: [], ind: [], form: [], tech: [] };
    document.querySelectorAll("[data-filter]").forEach(function (b) { b.checked = false; });
    if (searchInput) searchInput.value = "";
    render();
  }
  document.querySelectorAll("[data-reset-filters]").forEach(function (btn) {
    btn.addEventListener("click", resetFilters);
  });

  document.addEventListener("click", function (e) {
    var chip = e.target.closest("[data-chip-remove]");
    if (!chip) return;
    var parts = chip.getAttribute("data-chip-remove").split(":");
    var key = parts[0], val = parts.slice(1).join(":");
    if (key === "q") {
      state.q = "";
      if (searchInput) searchInput.value = "";
    } else {
      state[key] = state[key].filter(function (v) { return v !== val; });
      var box = document.querySelector('[data-filter="' + key + '"][value="' + val + '"]');
      if (box) box.checked = false;
    }
    render();
  });

  /* Mobile filter drawer */
  var filters = document.getElementById("filters");
  var fabOpen = document.querySelector("[data-filters-open]");
  var fabClose = document.querySelector("[data-filters-close]");
  if (fabOpen && filters) fabOpen.addEventListener("click", function () { filters.classList.add("is-open"); });
  if (fabClose && filters) fabClose.addEventListener("click", function () { filters.classList.remove("is-open"); });

  /* ---------- Search + suggestions ---------- */
  if (searchInput) {
    var recent = [];
    try { recent = JSON.parse(localStorage.getItem("bc-recent") || "[]"); } catch (e) { recent = []; }

    function saveRecent(q) {
      if (!q) return;
      recent = [q].concat(recent.filter(function (r) { return r !== q; })).slice(0, 4);
      try { localStorage.setItem("bc-recent", JSON.stringify(recent)); } catch (e) {}
    }
    function hi(text, q) {
      var idx = text.toLowerCase().indexOf(q.toLowerCase());
      if (idx === -1 || !q) return esc(text);
      return esc(text.slice(0, idx)) + "<mark>" + esc(text.slice(idx, idx + q.length)) + "</mark>" + esc(text.slice(idx + q.length));
    }
    var SEARCH_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>';
    var CLOCK_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>';

    function showSuggestions() {
      var q = searchInput.value.trim();
      var html = "";
      if (q.length >= 2) {
        var hits = products.filter(function (p) {
          return (p.name + " " + p.code + " " + p.apps.join(" ") + " " + p.catLabel).toLowerCase().indexOf(q.toLowerCase()) !== -1;
        }).slice(0, 6);
        if (hits.length) {
          html += '<div class="suggestions__group"><p class="suggestions__label">Products</p>' +
            hits.map(function (p) {
              return '<button type="button" data-suggest="' + esc(p.name) + '" role="option">' + SEARCH_ICON +
                "<span>" + hi(p.name, q) + ' <span class="caption">· ' + esc(p.code) + " · " + esc(p.catLabel) + "</span></span></button>";
            }).join("") + "</div>";
        }
      } else {
        if (recent.length) {
          html += '<div class="suggestions__group"><p class="suggestions__label">Recent searches</p>' +
            recent.map(function (r) { return '<button type="button" data-suggest="' + esc(r) + '" role="option">' + CLOCK_ICON + "<span>" + esc(r) + "</span></button>"; }).join("") + "</div>";
        }
        html += '<div class="suggestions__group"><p class="suggestions__label">Popular</p>' +
          POPULAR.map(function (s) { return '<button type="button" data-suggest="' + esc(s) + '" role="option">' + SEARCH_ICON + "<span>" + esc(s) + "</span></button>"; }).join("") + "</div>";
      }
      suggestions.innerHTML = html;
      var open = html !== "";
      suggestions.classList.toggle("is-open", open);
      searchInput.setAttribute("aria-expanded", String(open));
    }

    var debounce;
    searchInput.addEventListener("input", function () {
      clearTimeout(debounce);
      debounce = setTimeout(function () {
        state.q = searchInput.value.trim();
        render();
        showSuggestions();
      }, 120);
    });
    searchInput.addEventListener("focus", showSuggestions);
    searchInput.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        saveRecent(searchInput.value.trim());
        suggestions.classList.remove("is-open");
      }
      if (e.key === "Escape") suggestions.classList.remove("is-open");
    });
    suggestions.addEventListener("click", function (e) {
      var btn = e.target.closest("[data-suggest]");
      if (!btn) return;
      searchInput.value = btn.getAttribute("data-suggest");
      state.q = searchInput.value;
      saveRecent(state.q);
      suggestions.classList.remove("is-open");
      render();
    });
    document.addEventListener("click", function (e) {
      if (!e.target.closest(".cat-hero__search")) suggestions.classList.remove("is-open");
    });
  }

  /* ---------- Compare ---------- */
  var compareBar = document.getElementById("compare-bar");
  var compareCount = document.querySelector("[data-compare-count]");

  function updateCompareBar() {
    if (compareCount) compareCount.textContent = compare.length;
    compareBar.classList.toggle("is-visible", compare.length >= 1);
  }
  grid.addEventListener("change", function (e) {
    var box = e.target.closest("[data-compare-code]");
    if (!box) return;
    var code = box.getAttribute("data-compare-code");
    if (box.checked) {
      if (compare.length >= 3) {
        box.checked = false;
        return;
      }
      compare.push(code);
    } else {
      compare = compare.filter(function (c) { return c !== code; });
    }
    updateCompareBar();
  });
  var clearBtn = document.querySelector("[data-compare-clear]");
  if (clearBtn) clearBtn.addEventListener("click", function () {
    compare = [];
    grid.querySelectorAll("[data-compare-code]").forEach(function (b) { b.checked = false; });
    updateCompareBar();
  });
  var compareOpen = document.querySelector("[data-compare-open]");
  if (compareOpen) compareOpen.addEventListener("click", function () {
    var items = products.filter(function (p) { return compare.indexOf(p.code) !== -1; });
    if (!items.length) return;
    var rows = [
      ["Product", function (p) { return "<strong>" + esc(p.name) + "</strong><br><span class='code'>" + esc(p.code) + "</span>"; }],
      ["Category", function (p) { return esc(p.catLabel); }],
      ["Form", function (p) { return esc(p.form); }],
      ["Applications", function (p) { return p.apps.map(esc).join("<br>"); }],
      ["Industries", function (p) { return p.industries.map(esc).join("<br>"); }],
      ["Key benefits", function (p) { return p.benefits.map(esc).join("<br>"); }],
      ["Technology", function (p) { return p.tech.map(function (t) { return esc(TECH_LABELS[t] || t); }).join("<br>") || "—"; }]
    ];
    var table = document.getElementById("compare-table");
    table.innerHTML = rows.map(function (row, i) {
      var cells = items.map(function (p) { return "<td>" + row[1](p) + "</td>"; }).join("");
      return "<tr>" + (i === 0 ? "<th>" + row[0] + "</th>" : "<td><strong>" + row[0] + "</strong></td>") + cells + "</tr>";
    }).join("");
    document.getElementById("modal-compare").classList.add("is-open");
    document.getElementById("modal-compare").setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  });

  /* ---------- Initial render (with brief skeleton) ---------- */
  var skeletonHTML = "";
  for (var i = 0; i < 6; i++) {
    skeletonHTML += '<div class="pcard-skeleton" aria-hidden="true">' +
      '<div class="skeleton" style="width:40%"></div><div class="skeleton" style="width:70%;height:20px"></div>' +
      '<div class="skeleton" style="width:100%"></div><div class="skeleton" style="width:85%"></div>' +
      '<div class="skeleton" style="width:55%"></div></div>';
  }
  grid.innerHTML = skeletonHTML;
  setTimeout(render, 350);
})();
