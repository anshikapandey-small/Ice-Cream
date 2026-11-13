/* ==========================================================
   Berry Bliss — script.js
   1. Full menu data (all 8 sections) + tabbed rendering
   2. Navbar, mobile menu, reveal-on-scroll
   3. Three.js hero — rotating ice cream cone (GLB model,
      procedural cup as fallback)
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
  { name: "Matka Kulfi", note: "from ₹20", go: "kulfi" },
  { name: "Rabdi Falooda", note: "from ₹60", go: "rabdi" },
  { name: "Ice Cream", note: "from ₹20", go: "icecream" },
  { name: "Family Packs", note: "from ₹80", go: "family" }
];

const price = (v) => (v == null ? `<span class="na">—</span>` : `₹${v}`);

function tableHTML(title, cols, items) {
  const head = cols.map((c) => `<th scope="col" class="num">${c} (₹)</th>`).join("");
  const rows = items.map((it) => {
    const [name, ...rest] = it;
    const prices = rest.filter((v) => typeof v === "number" || v === null);
    const note = rest.find((v) => typeof v === "string");
    const cells = prices.map((v) => `<td class="num">${price(v)}</td>`).join("");
    return `<tr><th scope="row"><span class="item-name">${name}</span>${note ? `<small>${note}</small>` : ""}</th>${cells}</tr>`;
  }).join("");
  return `
    <div class="menu-block">
      <h3 class="menu-title">${title}</h3>
      <div class="table-wrap">
        <table class="menu-table">
          <thead><tr><th scope="col">Item</th>${head}</tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    </div>`;
}

const tabsEl = document.getElementById("tabs");
const panelEl = document.getElementById("menuPanel");
const highlightsEl = document.getElementById("highlights");

function showCategory(id, scroll) {
  const cat = MENU.find((c) => c.id === id) || MENU[0];
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

function renderMenu() {
  tabsEl.innerHTML = MENU.map((c) =>
    `<button class="tab" role="tab" data-id="${c.id}" aria-selected="false">${c.tab}</button>`).join("");
  tabsEl.addEventListener("click", (e) => {
    const b = e.target.closest(".tab");
    if (b) showCategory(b.dataset.id, false);
  });
  highlightsEl.innerHTML = HIGHLIGHTS.map((h) =>
    `<button class="hl-card" data-go="${h.go}"><strong>${h.name}</strong><span>${h.note}</span></button>`).join("");
  highlightsEl.addEventListener("click", (e) => {
    const b = e.target.closest(".hl-card");
    if (b) showCategory(b.dataset.go, true);
  });
  showCategory(MENU[0].id, false);
}
renderMenu();

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

/* ---------- 3. THREE.JS ROTATING ICE CREAM CONE ---------- */

(function initHero() {
  const wrap = document.getElementById("cupCanvasWrap");
  if (!wrap || typeof THREE === "undefined") return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
  camera.position.set(0, 1.4, 5.4);
  camera.lookAt(0, 0.85, 0);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.outputEncoding = THREE.sRGBEncoding;
  wrap.appendChild(renderer.domElement);

  scene.add(new THREE.AmbientLight(0xfff0f3, 0.75));
  const key = new THREE.DirectionalLight(0xffffff, 1.1);
  key.position.set(3.5, 6, 4);
  key.castShadow = true;
  key.shadow.mapSize.set(1024, 1024);
  key.shadow.bias = -0.0005;
  scene.add(key);
  const fill = new THREE.PointLight(0xF6A6B5, 0.55, 20);
  fill.position.set(-4, 2.5, 3);
  scene.add(fill);
  const rim = new THREE.DirectionalLight(0xFFD6C9, 0.55);
  rim.position.set(-2, 4, -4);
  scene.add(rim);

  const ground = new THREE.Mesh(
    new THREE.CircleGeometry(2.4, 48),
    new THREE.ShadowMaterial({ opacity: 0.22 })
  );
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  scene.add(ground);

  const rig = new THREE.Group();
  scene.add(rig);

  /* GLB model — must sit next to index.html with exactly this name */
  const MODEL_URL = "ice-cream-cone.glb";
  if (typeof THREE.GLTFLoader !== "function") {
    console.warn("GLTFLoader didn't load; using procedural cup.");
    rig.add(buildProceduralCup());
  } else new THREE.GLTFLoader().load(
    MODEL_URL,
    (gltf) => {
      const model = gltf.scene;
      /* Straighten the leaning export so it spins around its own axis */
      model.quaternion.setFromUnitVectors(
        new THREE.Vector3(0.06, 1, 0.43).normalize(),
        new THREE.Vector3(0, 1, 0)
      );
      const box = new THREE.Box3().setFromObject(model);
      const size = new THREE.Vector3();
      box.getSize(size);
      model.scale.setScalar(2.6 / size.y);
      box.setFromObject(model);
      const center = new THREE.Vector3();
      box.getCenter(center);
      model.position.set(-center.x, -box.min.y, -center.z);
      model.traverse((o) => {
        if (o.isMesh) {
          o.castShadow = true;
          o.receiveShadow = true;
          if (o.material) {
            o.material.roughness = Math.min(o.material.roughness ?? 0.8, 0.85);
            if (o.material.map) o.material.map.anisotropy = 4;
            o.material.needsUpdate = true;
          }
        }
      });
      rig.add(model);
      camera.lookAt(0, 1.15, 0);
    },
    undefined,
    (err) => {
      console.warn(`GLB failed to load from "${MODEL_URL}" — using procedural fallback.`, err);
      rig.add(buildProceduralCup());
    }
  );

  function buildProceduralCup() {
    const g = new THREE.Group();
    const pts = [[0.30,0.02],[0.38,0.06],[0.42,0.18],[0.50,0.55],[0.58,0.98],[0.60,1.04]]
      .map(([x, y]) => new THREE.Vector2(x, y));
    const cup = new THREE.Mesh(
      new THREE.LatheGeometry(pts, 64),
      new THREE.MeshPhysicalMaterial({
        color: 0xF6A6B5, transparent: true, opacity: 0.38, roughness: 0.12,
        metalness: 0.05, side: THREE.DoubleSide, clearcoat: 0.6, clearcoatRoughness: 0.25
      })
    );
    cup.castShadow = true;
    g.add(cup);
    const scoop = (color, x, y, z, r) => {
      const m = new THREE.Mesh(new THREE.SphereGeometry(r, 48, 48),
        new THREE.MeshStandardMaterial({ color, roughness: 0.55 }));
      m.position.set(x, y, z);
      m.castShadow = true;
      return m;
    };
    g.add(scoop(0xF6A6B5, 0, 1.32, 0.02, 0.36));
    g.add(scoop(0xFFF3E0, -0.33, 1.16, 0.06, 0.33));
    g.add(scoop(0x6B4226, 0.33, 1.16, -0.04, 0.33));
    g.add(scoop(0xE85D75, 0, 1.76, 0.02, 0.11));
    return g;
  }

  let mouseX = 0, mouseY = 0;
  const heroCup = document.getElementById("heroCup");
  if (!reduceMotion) {
    window.addEventListener("mousemove", (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    }, { passive: true });
  }

  function resize() {
    const w = wrap.clientWidth || 1, h = wrap.clientHeight || 1;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  resize();
  window.addEventListener("resize", resize);

  const clock = new THREE.Clock();
  function animate() {
    requestAnimationFrame(animate);
    const t = clock.getElapsedTime();
    if (!reduceMotion) {
      rig.rotation.y = t * 0.35;
      rig.position.y = Math.sin(t * 1.1) * 0.08 + 0.05;
      rig.rotation.x += (mouseY * 0.10 - rig.rotation.x) * 0.05;
      rig.rotation.y += mouseX * 0.003;
      const rect = heroCup.getBoundingClientRect();
      const offset = Math.min(Math.max(rect.top / window.innerHeight, -1), 1);
      wrap.style.transform = `translateY(${offset * 40}px)`;
    } else {
      rig.rotation.y = 0.6;
      rig.position.y = 0.05;
    }
    renderer.render(scene, camera);
  }
  animate();
})();
