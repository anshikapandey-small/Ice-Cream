/* ==========================================================
   Berry Bliss — script.js
   1. Product catalogue (10 items, 3 categories) + SVG art
   2. Navbar, mobile menu, reveal-on-scroll animations
   3. Three.js hero — rotating ice cream cone (GLB model,
      procedural cup as fallback)
   ========================================================== */
"use strict";

/* ---------- 1. PRODUCT CATALOGUE ---------- */

const PRODUCTS = [
  // Classic Favourites
  { name: "Belgian Chocolate", desc: "Rich and creamy Belgian chocolate ice cream.", cat: "Classic", grid: "grid-classic",
    scoops: ["#7B4B2A", "#5C3620", "#8A5A33"], bg: "#FFE9DE", top: "#5C3620", drizzle: "#F6A6B5" },
  { name: "Madagascar Vanilla", desc: "Smooth vanilla ice cream with a delicate aroma.", cat: "Classic", grid: "grid-classic",
    scoops: ["#FFF3E0", "#F7E8CE", "#FFEFD8"], bg: "#FCE4EC", top: "#E85D75", drizzle: "#F6A6B5" },
  { name: "Strawberry Swirl", desc: "Fresh strawberry flavour with sweet strawberry swirls.", cat: "Classic", grid: "grid-classic",
    scoops: ["#F6A6B5", "#F9C2CE", "#F6A6B5"], bg: "#FFF9F5", top: "#E85D75", drizzle: "#fff" },
  { name: "Butterscotch Crunch", desc: "Creamy butterscotch with crunchy caramel pieces.", cat: "Classic", grid: "grid-classic",
    scoops: ["#EBB567", "#E8A852", "#F2C078"], bg: "#FCE4EC", top: "#C77F35", drizzle: "#8A5A33" },
  // Fruity Delights
  { name: "Mango Magic", desc: "Sweet and refreshing Alphonso mango ice cream.", cat: "Fruity", grid: "grid-fruity",
    scoops: ["#FFB65C", "#FF9F3D", "#FFC97E"], bg: "#FFF9F5", top: "#E85D75", drizzle: "#fff" },
  { name: "Blueberry Bliss", desc: "Blueberry ice cream with fruity berry swirls.", cat: "Fruity", grid: "grid-fruity",
    scoops: ["#8E7CC3", "#7A68B0", "#A79BD4"], bg: "#FCE4EC", top: "#5B4A9E", drizzle: "#FFD6C9" },
  { name: "Black Currant", desc: "Tangy black currant ice cream with a rich fruity flavour.", cat: "Fruity", grid: "grid-fruity",
    scoops: ["#5B2A6E", "#4A2159", "#6E3A82"], bg: "#FFF9F5", top: "#E85D75", drizzle: "#F6A6B5" },
  // Signature Specials
  { name: "Cookies & Cream", desc: "Vanilla ice cream loaded with chocolate cookie chunks.", cat: "Signature", grid: "grid-signature",
    scoops: ["#F5EFE6", "#EBE2D4", "#F5EFE6"], bg: "#FCE4EC", top: "#4A342C", drizzle: "#4A342C", chips: true },
  { name: "Red Velvet Dream", desc: "Creamy red velvet ice cream with cake crumbs.", cat: "Signature", grid: "grid-signature",
    scoops: ["#C13B50", "#D95B6A", "#B02F44"], bg: "#FFF9F5", top: "#FFF3E0", drizzle: "#fff" },
  { name: "Strawberry Cheesecake", desc: "Strawberry ice cream with cheesecake-inspired swirls.", cat: "Signature", grid: "grid-signature",
    scoops: ["#F6A6B5", "#FFF3E0", "#F9C2CE"], bg: "#FCE4EC", top: "#E85D75", drizzle: "#FFD6C9" }
];

/* Deterministic pseudo-random so every render looks the same */
function seededRand(seed) {
  let s = seed;
  return () => { s = (s * 9301 + 49297) % 233280; return s / 233280; };
}

/* Hand-built SVG "photograph" for each flavour — consistent 1:1 dimensions */
function scoopSVG(p, index) {
  const rnd = seededRand(97 + index * 31);
  const [c1, c2, c3] = p.scoops;
  const sprinkles = [];
  const sprinkleCols = ["#E85D75", "#FFD6C9", "#fff", "#F6A6B5", "#C77F35"];
  for (let i = 0; i < 12; i++) {
    const x = 120 + rnd() * 240, y = 150 + rnd() * 130;
    const rot = Math.floor(rnd() * 180);
    const col = sprinkleCols[Math.floor(rnd() * sprinkleCols.length)];
    sprinkles.push(`<rect x="${x.toFixed(0)}" y="${y.toFixed(0)}" width="14" height="4.5" rx="2.2" fill="${col}" opacity="0.9" transform="rotate(${rot} ${x.toFixed(0)} ${y.toFixed(0)})"/>`);
  }
  const chips = p.chips
    ? `<circle cx="175" cy="300" r="9" fill="#4A342C"/><circle cx="270" cy="255" r="8" fill="#4A342C"/><circle cx="330" cy="305" r="9" fill="#4A342C"/><circle cx="220" cy="330" r="7" fill="#4A342C"/>`
    : "";
  return `
  <svg viewBox="0 0 480 480" role="img" aria-label="${p.name} ice cream" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="g${index}" cx="50%" cy="38%" r="75%">
        <stop offset="0%" stop-color="${p.bg}"/><stop offset="100%" stop-color="#F6A6B5" stop-opacity="0.45"/>
      </radialGradient>
    </defs>
    <rect width="480" height="480" fill="url(#g${index})"/>
    <circle cx="240" cy="300" r="150" fill="#fff" opacity="0.35"/>
    <!-- cup -->
    <path d="M148 320h184l-24 100a16 16 0 0 1-16 12H188a16 16 0 0 1-16-12z" fill="#F6A6B5"/>
    <path d="M148 320h184l-5 22H153z" fill="#E85D75"/>
    <path d="M188 345c30 14 74 14 104 0" stroke="#FFF9F5" stroke-width="7" fill="none" stroke-linecap="round" opacity="0.85"/>
    <!-- scoops -->
    <circle cx="172" cy="300" r="56" fill="${c1}"/>
    <circle cx="308" cy="300" r="56" fill="${c3}"/>
    <circle cx="240" cy="262" r="64" fill="${c2}"/>
    <ellipse cx="216" cy="236" rx="18" ry="11" fill="#fff" opacity="0.45"/>
    ${sprinkles.join("")}
    ${chips}
    <!-- drizzle -->
    <path d="M188 268c20 16 44-12 64 4s44-12 60 6" stroke="${p.drizzle}" stroke-width="8" fill="none" stroke-linecap="round" opacity="0.95"/>
    <!-- strawberry on top -->
    <path d="M240 176c-3-8-9-12-16-13 2 7 8 12 16 13zM240 176c3-8 9-12 16-13-2 7-8 12-16 13z" fill="#7FB069"/>
    <path d="M240 180c-11 0-19 8-19 18 0 11 10 22 19 22s19-11 19-22c0-10-8-18-19-18z" fill="#E85D75"/>
    <circle cx="234" cy="194" r="1.8" fill="#FFD6C9"/><circle cx="246" cy="190" r="1.8" fill="#FFD6C9"/><circle cx="240" cy="203" r="1.8" fill="#FFD6C9"/>
  </svg>`;
}

function renderProducts() {
  const grids = {};
  PRODUCTS.forEach((p, i) => {
    const card = document.createElement("article");
    card.className = "card reveal";
    card.style.transitionDelay = `${(i % 4) * 90}ms`;
    card.innerHTML = `
      <div class="card-img">
        ${scoopSVG(p, i)}
        <span class="card-badge">${p.cat}</span>
      </div>
      <div class="card-body">
        <h4>${p.name}</h4>
        <p>${p.desc}</p>
      </div>`;
    (grids[p.grid] ||= document.getElementById(p.grid)).appendChild(card);
  });
}
renderProducts();

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

  /* Lights */
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

  /* Ground shadow catcher */
  const ground = new THREE.Mesh(
    new THREE.CircleGeometry(2.4, 48),
    new THREE.ShadowMaterial({ opacity: 0.22 })
  );
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  scene.add(ground);

  /* Spinning rig: model sits inside, rotation/float applied to the rig */
  const rig = new THREE.Group();
  scene.add(rig);

  /* --- Load the provided GLB model (textures are embedded) --- */
  const MODEL_URL = "ice-cream-cone.glb";   // must sit next to index.html with exactly this name
  if (typeof THREE.GLTFLoader !== "function") {
    console.warn("GLTFLoader script didn't load (check the <script> tag / network); using procedural cup.");
    rig.add(buildProceduralCup());
  } else new THREE.GLTFLoader().load(
    MODEL_URL,
    (gltf) => {
      const model = gltf.scene;
      /* The exported mesh leans ~23° (tip toward -Z, slightly +X).
         Rotate the cone's real axis onto +Y so it stands upright and
         spins around its own centre instead of wobbling. */
      model.quaternion.setFromUnitVectors(
        new THREE.Vector3(0.06, 1, 0.43).normalize(),
        new THREE.Vector3(0, 1, 0)
      );
      /* Normalize: center and scale to ~2.6 units tall, base at y = 0 */
      const box = new THREE.Box3().setFromObject(model);
      const size = new THREE.Vector3();
      box.getSize(size);
      const scale = 2.6 / size.y;
      model.scale.setScalar(scale);
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
      /* Offset camera target to model centre */
      camera.lookAt(0, 1.15, 0);
    },
    undefined,
    (err) => {
      /* For network errors `err` is a ProgressEvent; read the real status from it */
      const status = err && err.target ? `${err.target.status} ${err.target.statusText}` : "";
      console.warn(`GLB failed to load from "${MODEL_URL}" ${status} — building procedural fallback.`, err);
      rig.add(buildProceduralCup());
    }
  );

  /* --- Procedural fallback cup (only used if the GLB can't load) --- */
  function buildProceduralCup() {
    const g = new THREE.Group();
    const cupPts = [
      new THREE.Vector2(0.30, 0.02), new THREE.Vector2(0.38, 0.06),
      new THREE.Vector2(0.42, 0.18), new THREE.Vector2(0.50, 0.55),
      new THREE.Vector2(0.58, 0.98), new THREE.Vector2(0.60, 1.04)
    ];
    const cupMesh = new THREE.Mesh(
      new THREE.LatheGeometry(cupPts, 64),
      new THREE.MeshPhysicalMaterial({
        color: 0xF6A6B5, transparent: true, opacity: 0.38,
        roughness: 0.12, metalness: 0.05, side: THREE.DoubleSide,
        clearcoat: 0.6, clearcoatRoughness: 0.25
      })
    );
    cupMesh.castShadow = true;
    g.add(cupMesh);

    function scoop(color, x, y, z, r) {
      const geo = new THREE.SphereGeometry(r, 48, 48);
      const pos = geo.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        const vx = pos.getX(i), vy = pos.getY(i), vz = pos.getZ(i);
        const n = 1 + 0.03 * Math.sin(vx * 6.1) * Math.cos(vy * 5.3 + vz * 4.7);
        pos.setXYZ(i, vx * n, vy * n, vz * n);
      }
      geo.computeVertexNormals();
      const m = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color, roughness: 0.55 }));
      m.position.set(x, y, z);
      m.castShadow = true;
      return m;
    }
    g.add(scoop(0xF6A6B5, 0, 1.32, 0.02, 0.36));
    g.add(scoop(0xFFF3E0, -0.33, 1.16, 0.06, 0.33));
    g.add(scoop(0x6B4226, 0.33, 1.16, -0.04, 0.33));

    const berryTop = new THREE.Mesh(
      new THREE.SphereGeometry(0.11, 24, 24),
      new THREE.MeshStandardMaterial({ color: 0xE85D75, roughness: 0.4 })
    );
    berryTop.position.set(0, 1.76, 0.02);
    berryTop.castShadow = true;
    g.add(berryTop);
    return g;
  }

  /* Interaction state */
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
      rig.rotation.y = t * 0.35;                                   // slow continuous spin
      rig.position.y = Math.sin(t * 1.1) * 0.08 + 0.05;            // gentle float
      rig.rotation.x += (mouseY * 0.10 - rig.rotation.x) * 0.05;   // mouse parallax
      rig.rotation.y += mouseX * 0.003;                            // subtle extra turn
      /* scroll parallax */
      const rect = heroCup.getBoundingClientRect();
      const offset = Math.min(Math.max(rect.top / window.innerHeight, -1), 1);
      wrap.style.transform = `translateY(${offset * 40}px)`;
    } else {
      rig.rotation.y = 0.6;                                        // pleasant static angle
      rig.position.y = 0.05;
    }
    renderer.render(scene, camera);
  }
  animate();
})();
