/* ==========================================================
   Berry Bliss — script.js
   1. Full menu data (all 8 sections) + tabbed rendering
   2. Navbar, mobile menu, reveal-on-scroll
   (hero is now a banner image)
   ========================================================== */
"use strict";

/* ---------- 1. MENU DATA ----------
   Item format:  [name, half, full]   (two-price sections)
                 [name, price]        (single-price sections)
   Use null for "not available" (shown as —).
   To change a price or add an item, just edit this list. */

const MENU = [
  {
    id: "icecream", tab: "Ice Cream", title: "Ice Cream", cols: ["Half", "Full"],
    items: [
      ["Mix Cone", 25, 35], ["Chocolate", 20, 30], ["Mango", 20, 30], ["Strawberry", 20, 30],
      ["Butterscotch", 25, 40], ["Kaju Anjeer", 25, 40, "Cashew & Fig"],
      ["Kesar Pista", 25, 40, "Saffron & Pistachio"], ["Kaju Draksh", 25, 40, "Cashew & Raisins"],
      ["Rajbhog", 25, 40], ["Chhappan Bhog", 25, 40], ["Green Pista", 25, 40],
      ["Badam Pista", 25, 40, "Almond & Pistachio"], ["Shahi Gulab", 25, 40, "Royal Rose"],
      ["Sitaphal", 30, 50, "Custard Apple"], ["American Dry Fruit", 30, 50], ["Sugar-Free", 40, 50]
    ]
  },
  {
    id: "kulfi", tab: "Matka Kulfi", title: "Special Rajasthani Matka Kulfi", cols: ["Price"],
    items: [
      ["Kesar Kulfi", 25], ["Pista Kulfi", 25], ["Rajbhog Kulfi", 25],
      ["Malai Kulfi", 20], ["Mango Kulfi", 20], ["Rabdi Kulfi", 30]
    ]
  },
  {
    id: "falooda", tab: "Falooda Shakes", title: "Falooda Shake", cols: ["Half", "Full"],
    items: [
      ["Fruit Salad", 30, 50], ["Rose Falooda", 30, 50], ["Kesar Falooda", 30, 50],
      ["Kaju Cold Coffee", 40, 60], ["Pineapple Falooda", 40, 60], ["Mango Falooda", 40, 60],
      ["Anjeer Falooda", 40, 60, "Fig"], ["Strawberry Falooda", 40, 60], ["Chocolate Falooda", 40, 60],
      ["Special Fruit Salad", 40, 60], ["Badam Shake", 40, 60, "Almond"],
      ["Kaju Anjeer Shake", 50, 80], ["Mix Fruit Falooda", 50, 80], ["Sitaphal Falooda", 50, 80],
      ["Butterscotch Falooda", 50, 80], ["Pista Falooda", 50, 80], ["Falooda Ice Cream", 50, 80],
      ["Kulfi Falooda", 70, 120],
      ["Krishna Special Falooda", 80, 150], ["Rajbhog Falooda", 80, 150], ["Special Mawa Falooda", 80, 150]
    ]
  },
  {
    id: "rabdi", tab: "Rabdi Falooda", title: "Special Rabdi Falooda", cols: ["Half", "Full"],
    items: [
      ["Special Rabdi Rose Falooda", 60, 100], ["Special Rabdi Kesar Falooda", 60, 100],
      ["Special Rabdi Pista Falooda", 60, 100], ["Special Rabdi Sitaphal Falooda", 60, 100],
      ["Special Rabdi Butterscotch Falooda", 60, 100], ["Special Rabdi Mango Falooda", 60, 100],
      ["Special Rabdi Falooda", 60, 100], ["Matka Special Rabdi", 60, null],
      ["Special Malai Rabdi", 60, 100], ["Matka Rabdi Kulfi", 70, null]
    ]
  },
  {
    id: "milkshake", tab: "Milkshakes", title: "Milkshakes", cols: ["Full"],
    items: [
      ["Chocolate Milkshake", 80], ["Butterscotch Milkshake", 80], ["Rose Milkshake", 80],
      ["Pista Milkshake", 80], ["Strawberry Milkshake", 80], ["Pineapple Milkshake", 80],
      ["Kesar Milkshake", 80], ["Blackcurrant Milkshake", 80]
    ],
    extra: {
      title: "Milkshake — Per Litre", cols: ["Price"],
      items: [["Fruit Salad", 180], ["Kaju Anjeer", 220, "Cashew & Fig"], ["Kaju Cold Cocoa", 220], ["Badam Shake", 220, "Almond"]]
    }
  },
  {
    id: "family", tab: "Family Packs", title: "Family Packs", cols: ["Price"],
    items: [["250 gm", 80], ["500 gm", 150], ["1000 gm (1 kg)", 300]],
    extra: {
      title: "Special Items", cols: ["Price"],
      items: [["Krishna Special Mix Ice Cream", 70], ["Krishna Special Mix Rabdi Ice Cream", 90]]
    }
  }
];

const HIGHLIGHTS = [
  { name: "Matka Kulfi", from: 20, go: "kulfi" },
  { name: "Rabdi Falooda", from: 60, go: "rabdi" },
  { name: "Ice Cream", from: 20, go: "icecream" },
  { name: "Family Packs", from: 80, go: "family" }
];

const price = (v) => (v == null ? `<span class="na">—</span>` : `₹${v}`);

function tableHTML(title, cols, items) {
  const head = cols.map((c) => `<th scope="col" class="num">${I18N.t("col_" + c)} (₹)</th>`).join("");
  const rows = items.map((it) => {
    const [name, ...rest] = it;
    const prices = rest.filter((v) => typeof v === "number" || v === null);
    const note = rest.find((v) => typeof v === "string");
    const cells = prices.map((v) => `<td class="num">${price(v)}</td>`).join("");
    return `<tr><th scope="row"><span class="item-name">${I18N.item(name)}</span>${note ? `<small>${I18N.item(note)}</small>` : ""}</th>${cells}</tr>`;
  }).join("");
  return `
    <div class="menu-block">
      <h3 class="menu-title">${I18N.item(title)}</h3>
      <div class="table-wrap">
        <table class="menu-table">
          <thead><tr><th scope="col">${I18N.t("col_item")}</th>${head}</tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    </div>`;
}

const tabsEl = document.getElementById("tabs");
const panelEl = document.getElementById("menuPanel");
const highlightsEl = document.getElementById("highlights");

let currentCat = MENU[0].id;

function showCategory(id, scroll) {
  const cat = MENU.find((c) => c.id === id) || MENU[0];
  currentCat = cat.id;
  tabsEl.querySelectorAll(".tab").forEach((b) => {
    const on = b.dataset.id === cat.id;
    b.classList.toggle("active", on);
    b.setAttribute("aria-selected", String(on));
  });
  panelEl.innerHTML =
    tableHTML(cat.title, cat.cols, cat.items) +
    (cat.extra ? tableHTML(cat.extra.title, cat.extra.cols, cat.extra.items) : "");
  panelEl.classList.remove("swap"); void panelEl.offsetWidth; panelEl.classList.add("swap");
  if (scroll) tabsEl.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderLabels() {
  tabsEl.innerHTML = MENU.map((c) =>
    `<button class="tab" role="tab" data-id="${c.id}" aria-selected="false">${I18N.item(c.tab)}</button>`).join("");
  highlightsEl.innerHTML = HIGHLIGHTS.map((h) =>
    `<button class="hl-card" data-go="${h.go}"><strong>${I18N.item(h.name)}</strong><span>${I18N.t("from", { p: "₹" + h.from })}</span></button>`).join("");
  showCategory(currentCat, false);
}

tabsEl.addEventListener("click", (e) => {
  const b = e.target.closest(".tab");
  if (b) showCategory(b.dataset.id, false);
});
highlightsEl.addEventListener("click", (e) => {
  const b = e.target.closest(".hl-card");
  if (b) showCategory(b.dataset.go, true);
});
document.addEventListener("langchange", renderLabels);   // re-draw menu when language changes
renderLabels();

/* ---------- 2. NAVBAR + SCROLL REVEALS ---------- */

const navbar = document.getElementById("navbar");
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(open));
});
navLinks.addEventListener("click", (e) => {
  if (e.target.tagName === "A") navLinks.classList.remove("open");
});

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 12);
}, { passive: true });

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const io = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); }
  });
}, { threshold: 0.15 });
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

document.getElementById("year").textContent = new Date().getFullYear();
