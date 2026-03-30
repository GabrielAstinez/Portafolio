const games = [
  {
    title: "Proyecto Hades",
    genre: "Recreation",
    genreClass: "genre-rpg",
    engine: "Unity",
    engineClass: "engine-unity",
    images: [
      "Assets/Proyects/hades_1.png",
      "Assets/Proyects/hades_2.png",
      "Assets/Proyects/hades_3.png",
    ],
    emoji: "🏰",
    desc: "Recreation of a scene from the video game: HADES.",
    tags: ["#Recreation", "#Videogame", "#Scene"],
    downloads: "0",
    statColor: "var(--gold)",
    fullDesc: "Recreation of a scene from the video game: HADES.",
    features: [
      "Creation of 3D models",
      "Creation of toon shaders",
      "UV mapping",
      "Creation of textures",
    ],
    techs: ["Unity", "C#", "ProBuilder", "Ink"],
    platforms: ["PC"],
    year: "2024",
  },
  {
    title: "Rock Rush",
    genre: "VideoGame",
    genreClass: "genre-rpg",
    engine: "Unity",
    engineClass: "engine-unity",
    images: ["Assets/Proyects/RockRush.gif"],
    emoji: "🪨",
    desc: "Virtual reality game about breaking rocks to pass the level.",
    tags: ["#VirtualReality", "#Videogame", "#VR"],
    downloads: "0",
    statColor: "var(--gold)",
    fullDesc: "Virtual reality game about breaking rocks to pass the level.",
    features: [
      "Creation of 3D models",
      "Creation of toon shaders",
      "UV mapping",
      "Creation of textures",
    ],
    techs: ["Unity", "C#", "Blender"],
    platforms: ["PC"],
    year: "2025",
  },
  {
    title: "Coord 4 U",
    genre: "App Web",
    genreClass: "genre-AppWeb",
    engine: "Flutter",
    engineClass: "engine-flutter",
    images: ["Assets/Proyects/Coord4U1.png", "Assets/Proyects/Coord4U2.png"],
    emoji: "🎮",
    desc: "An application created in Flutter designed to save coordinates in video games.",
    tags: ["#Tag1", "#Tag2", "#Tag3"],
    downloads: "0",
    statColor: "var(--gold)",
    fullDesc:
      "An application created in Flutter designed to save coordinates in video games [Language testing]",
    features: ["Flutter Code"],
    techs: ["Flutter", "VSCODE"],
    platforms: ["PC", "PHONE"],
    year: "2025",
  },
  {
    title: "Playground for languages",
    genre: "React + Python",
    genreClass: "genre-action",
    engine: "Unity",
    engineClass: "engine-unity",
    images: [
      "Assets/Proyects/PlayGroundCEL.png",
      "Assets/Proyects/PlayGroundAct.png",
    ],
    emoji: "🕹️",
    desc: "A web app for studying languages, made with python + react",
    tags: ["#React", "#HTML", "#Python"],
    downloads: "0",
    statColor: "var(--green)",
    fullDesc:
      "A web app for studying languages like Cel, starlark, etc., made with python, react and other technologies.",
    features: [
      "Key feature of the game",
      "Another mechanic or system",
      "Something you built yourself",
      "What makes it unique",
    ],
    techs: ["React", "Python", "CSS", "JS", "HTML"],
    platforms: ["PC"],
    year: "2026",
  },
  {
    title: "Project to be added",
    genre: "Genre / Type",
    genreClass: "genre-horror",
    engine: "Unity",
    engineClass: "engine-unity",
    images: [],
    emoji: "📦",
    desc: "Short description of the project goes here. What is it about and what makes it interesting.",
    tags: ["#Tag1", "#Tag2", "#Tag3"],
    downloads: "0",
    statColor: "var(--gold)",
    fullDesc:
      "Full description of the project goes here. Explain the concept, gameplay mechanics, what you built, and what you learned from it.",
    features: [
      "Key feature of the game",
      "Another mechanic or system",
      "Something you built yourself",
      "What makes it unique",
    ],
    techs: ["Unity", "C#"],
    platforms: ["PC"],
    year: "20XX",
  },
  {
    title: "Project to be added",
    genre: "Genre / Type",
    genreClass: "genre-racing",
    engine: "Unity",
    engineClass: "engine-unity",
    images: [],
    emoji: "🔧",
    desc: "Short description of the project goes here. What is it about and what makes it interesting.",
    tags: ["#Tag1", "#Tag2", "#Tag3"],
    downloads: "0",
    statColor: "var(--gold)",
    fullDesc:
      "Full description of the project goes here. Explain the concept, gameplay mechanics, what you built, and what you learned from it.",
    features: [
      "Key feature of the game",
      "Another mechanic or system",
      "Something you built yourself",
      "What makes it unique",
    ],
    techs: ["Unity", "C#"],
    platforms: ["PC"],
    year: "20XX",
  },
];

const assets = [
  {
    name: "Material Cows - Free Pack",
    type: "Sprites",
    typeClass: "type-sprites",
    count:
      "A free pack of elemental cows for video games, includes a normal cow, a stone cow, and a slime cow.",
    tags: ["Pixel Art", "Characters", "Animals"],
    btnClass: "btn-buy-green",
    emoji: "🐄",
    imgSrc: "Assets/AssetsShows/Cows_Demo.png",
    itchUrl: "https://iggnacio17.itch.io/material-cows-free-pack",
  },
  {
    name: "Material Cows",
    type: "Sprites",
    typeClass: "type-sprites",
    count: "10 Material cows pixel art 64x64 with Icons and Outline",
    tags: ["Pixel Art", "Characters", "Animals"],
    btnClass: "btn-buy-gold",
    emoji: "🐄",
    imgSrc: "Assets/AssetsShows/Cows_Full.png",
    itchUrl: "https://iggnacio17.itch.io/material-cows",
  },
  {
    name: "Tamacutechi",
    type: "Sprites",
    typeClass: "type-sprites",
    count:
      "A set of 3 png pixel art images about tamagotchis, with different colors and personality.",
    tags: ["Pixel Art", "Cute", "Toys"],
    btnClass: "btn-buy-green",
    emoji: "🥚",
    imgSrc: "Assets/AssetsShows/Tamagotchi.png",
    itchUrl: "https://iggnacio17.itch.io/tamacutechi",
  },
  {
    name: "Shader Retro Unity 3D Build-in",
    type: "Shader",
    typeClass: "type-shader",
    count: "A shader for unity 3D mobile like Retro Style",
    tags: ["Shader", "3D", "Phone_Shader"],
    btnClass: "btn-buy-gold",
    emoji: "🧱",
    images: [
      "Assets/AssetsShows/ShaderRetro.png",
      "Assets/AssetsShows/NotShader.png",
    ],
    itchUrl: "https://itch.io",
  },
  {
    name: "Toon Shader Unity 3D Build-in",
    type: "Shader",
    typeClass: "type-shader",
    count: "A shader for unity 3D mobile like Cartoon Style",
    tags: ["Shader", "3D", "Phone_Shader"],
    btnClass: "btn-buy-gold",
    emoji: "🧱",
    images: [
      "Assets/AssetsShows/ToonShader.png",
      "Assets/AssetsShows/NotShader.png",
    ],
    itchUrl: "https://itch.io",
  },
  {
    name: "Asset to be added",
    type: "Type",
    typeClass: "type-musica",
    count: "Short description of what this asset pack includes.",
    tags: ["Tag1", "Tag2", "Tag3"],
    btnClass: "btn-buy-gold",
    emoji: "🎵",
    imgClass: "asset-img-6",
    itchUrl: "https://itch.io",
  },
  {
    name: "Asset to be added",
    type: "Type",
    typeClass: "type-scripts",
    count: "Short description of what this asset pack includes.",
    tags: ["Tag1", "Tag2", "Tag3"],
    btnClass: "btn-buy-gold",
    emoji: "💻",
    imgClass: "asset-img-7",
    itchUrl: "https://itch.io",
  },
  {
    name: "Asset to be added",
    type: "Type",
    typeClass: "type-tipografias",
    count: "Short description of what this asset pack includes.",
    tags: ["Tag1", "Tag2", "Tag3"],
    btnClass: "btn-buy-gold",
    emoji: "🔤",
    imgClass: "asset-img-8",
    itchUrl: "https://itch.io",
  },
];

// ── Estado del carrusel del modal ──────────────────────────────────────────
let _modalImages = [];
let _modalEmoji = "";
let _modalCurrent = 0;

function _renderModalSlide() {
  const container = document.getElementById("modalImg");
  if (_modalImages.length === 0) {
    container.innerHTML = `
      <div class="modal-img-inner" style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:5rem;">
        ${_modalEmoji}
      </div>`;
    return;
  }

  const hasMultiple = _modalImages.length > 1;
  container.innerHTML = `
    <div style="position:relative;width:100%;height:100%;">
      <img
        src="${_modalImages[_modalCurrent]}"
        alt="Screenshot ${_modalCurrent + 1}"
        style="width:100%;height:100%;object-fit:cover;display:block;border-radius:inherit;"
        onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"
      />
      <div style="display:none;position:absolute;inset:0;align-items:center;justify-content:center;font-size:5rem;">
        ${_modalEmoji}
      </div>
      ${
        hasMultiple
          ? `
        <button onclick="modalPrev()" style="
          position:absolute;left:10px;top:50%;transform:translateY(-50%);
          background:rgba(0,0,0,0.55);border:none;color:#fff;font-size:1.5rem;
          width:38px;height:38px;border-radius:50%;cursor:pointer;z-index:10;
          display:flex;align-items:center;justify-content:center;">&#8249;</button>
        <button onclick="modalNext()" style="
          position:absolute;right:10px;top:50%;transform:translateY(-50%);
          background:rgba(0,0,0,0.55);border:none;color:#fff;font-size:1.5rem;
          width:38px;height:38px;border-radius:50%;cursor:pointer;z-index:10;
          display:flex;align-items:center;justify-content:center;">&#8250;</button>
        <div style="
          position:absolute;bottom:8px;right:12px;
          background:rgba(0,0,0,0.55);color:#fff;font-size:0.75rem;
          padding:2px 8px;border-radius:10px;">
          ${_modalCurrent + 1} / ${_modalImages.length}
        </div>
      `
          : ""
      }
    </div>`;
}

function modalPrev() {
  _modalCurrent =
    (_modalCurrent - 1 + _modalImages.length) % _modalImages.length;
  _renderModalSlide();
}

function modalNext() {
  _modalCurrent = (_modalCurrent + 1) % _modalImages.length;
  _renderModalSlide();
}

// ── renderGames ─────────────────────────────────────────────────────────────
function renderGames() {
  const grid = document.getElementById("gamesGrid");

  grid.innerHTML = games
    .map((g, i) => {
      const firstImg = g.images && g.images.length > 0 ? g.images[0] : null;

      const imgContent = firstImg
        ? `<img
             src="${firstImg}"
             alt="${g.title}"
             style="width:100%;height:100%;object-fit:cover;display:block;"
             onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"
           />
           <div class="game-img-placeholder" style="display:none;">${g.emoji}</div>`
        : `<div class="game-img-placeholder">${g.emoji}</div>`;

      return `
        <div class="game-card reveal" onclick="openModal(${i})">
          <div class="game-img">
            ${imgContent}
            <div class="game-engine ${g.engineClass}">${g.engine}</div>
          </div>
          <div class="game-body">
            <div class="game-title">${g.title}</div>
            <div class="game-genre ${g.genreClass}">${g.genre}</div>
            <div class="game-desc">${g.desc}</div>
            <div class="game-tags">
              ${g.tags.map((t) => `<span class="game-tag">${t}</span>`).join("")}
            </div>
            <div class="game-footer">
              <div class="game-stats" style="color:${g.statColor};">${g.year}</div>
              <span class="game-link">View more →</span>
            </div>
          </div>
        </div>`;
    })
    .join("");

  observeReveal();
}

// ── renderAssets ─────────────────────────────────────────────────────────────
function renderAssets() {
  const grid = document.getElementById("assetsGrid");

  grid.innerHTML = assets
    .map((a, i) => {
      const imgList =
        a.images && a.images.length > 0 ? a.images : a.imgSrc ? [a.imgSrc] : [];

      const firstImg = imgList[0] || null;
      const hasMany = imgList.length > 1;
      const isClickable = imgList.length > 0;

      const imgContent = firstImg
        ? `<img src="${firstImg}" alt="${a.name}" class="asset-img-real"
             onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
           <div class="asset-emoji" style="display:none;">${a.emoji}</div>`
        : `<div class="asset-emoji">${a.emoji}</div>`;

      const multiBadge = hasMany
        ? `<div style="position:absolute;top:8px;left:8px;background:rgba(0,0,0,0.6);
               color:#fff;font-size:0.7rem;padding:2px 7px;border-radius:10px;z-index:2;">
             📷 ${imgList.length}
           </div>`
        : "";

      const clickAttr = isClickable
        ? `onclick="openAssetModal(${i})" style="cursor:pointer;"`
        : "";

      return `
    <div class="asset-card reveal">
      <div class="asset-img ${firstImg ? "" : a.imgClass || ""}" style="position:relative;" ${clickAttr}>
        ${imgContent}
        ${multiBadge}
        <div class="asset-type ${a.typeClass}">${a.type}</div>
      </div>
      <div class="asset-body">
        <div class="asset-name">${a.name}</div>
        <div class="asset-count">${a.count}</div>
        <div class="asset-tags">
          ${a.tags.map((t) => `<span class="asset-tag">${t}</span>`).join("")}
        </div>
        <div class="asset-footer">
          <a href="${a.itchUrl}" target="_blank" rel="noopener noreferrer" class="btn-buy ${a.btnClass}">VIEW</a>
        </div>
      </div>
    </div>`;
    })
    .join("");

  observeReveal();
}

// ── openAssetModal ───────────────────────────────────────────────────────────
function openAssetModal(idx) {
  const a = assets[idx];

  const imgList =
    a.images && a.images.length > 0 ? a.images : a.imgSrc ? [a.imgSrc] : [];

  _modalImages = imgList;
  _modalEmoji = a.emoji;
  _modalCurrent = 0;

  _renderModalSlide();

  document.getElementById("modalContent").innerHTML = `
    <div class="modal-title">${a.name}</div>
    <div class="modal-pills">
      <span class="modal-pill">${a.type}</span>
      ${a.tags.map((t) => `<span class="modal-pill">${t}</span>`).join("")}
    </div>
    <p class="modal-desc">${a.count}</p>
    <div style="margin-top:1rem;">
      <a href="${a.itchUrl}" target="_blank" rel="noopener noreferrer"
         class="btn-buy ${a.btnClass}" style="display:inline-block;">VIEW ON ITCH.IO</a>
    </div>`;

  document.getElementById("modalOverlay").classList.add("active");
  document.body.style.overflow = "hidden";
}

// ── openModal ───────────────────────────────────────────────────────────────
function openModal(idx) {
  const g = games[idx];

  _modalImages = g.images && g.images.length > 0 ? g.images : [];
  _modalEmoji = g.emoji;
  _modalCurrent = 0;

  _renderModalSlide();

  document.getElementById("modalContent").innerHTML = `
    <div class="modal-title">${g.title}</div>
    <div class="modal-pills">
      <span class="modal-pill">${g.genre}</span>
      <span class="modal-pill">${g.engine}</span>
      <span class="modal-pill">${g.year}</span>
      <span class="modal-pill">University project</span>
    </div>
    <p class="modal-desc">${g.fullDesc}</p>

    <div class="modal-section-title">FEATURES</div>
    <div class="modal-features">
      ${g.features.map((f) => `<div class="modal-feature">${f}</div>`).join("")}
    </div>

    <div class="modal-two-col">
      <div>
        <div class="modal-section-title">TECHNOLOGIES</div>
        <div class="modal-tech-tags">
          ${g.techs.map((t) => `<span class="modal-tech-tag">${t}</span>`).join("")}
        </div>
      </div>
      <div>
        <div class="modal-section-title">PLATFORMS</div>
        <div class="modal-tech-tags">
          ${g.platforms.map((p) => `<span class="modal-platform-tag">${p}</span>`).join("")}
        </div>
      </div>
    </div>`;

  document.getElementById("modalOverlay").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("modalOverlay").classList.remove("active");
  document.body.style.overflow = "";
}

function closeModalOutside(e) {
  if (e.target === document.getElementById("modalOverlay")) closeModal();
}

function setActive(el) {
  document
    .querySelectorAll(".nav-links a")
    .forEach((a) => a.classList.remove("active"));
  el.classList.add("active");
  closeMenu();
}

function toggleMenu() {
  document.getElementById("hamburger").classList.toggle("open");
  document.getElementById("navLinks").classList.toggle("open");
}

function closeMenu() {
  document.getElementById("hamburger").classList.remove("open");
  document.getElementById("navLinks").classList.remove("open");
}

function updateNavOnScroll() {
  const sections = ["inicio", "sobre", "videojuegos", "assets", "contacto"];
  const scrollY = window.scrollY + 80;
  let current = "inicio";

  sections.forEach((id) => {
    const el = document.getElementById(id);
    if (el && el.offsetTop <= scrollY) current = id;
  });

  document.querySelectorAll(".nav-links a").forEach((a) => {
    a.classList.toggle("active", a.getAttribute("href") === "#" + current);
  });
}

const words = ["Game Developer", "Unity / C#", "Pixel Artist", "3D Designer"];
let wordIndex = 0,
  charIndex = 0,
  isDeleting = false;

function typewriter() {
  const el = document.getElementById("typewriter-text");
  const word = words[wordIndex];

  if (!isDeleting) {
    el.textContent = word.slice(0, ++charIndex);
    if (charIndex === word.length) {
      isDeleting = true;
      setTimeout(typewriter, 1800);
      return;
    }
  } else {
    el.textContent = word.slice(0, --charIndex);
    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }

  setTimeout(typewriter, isDeleting ? 60 : 100);
}

function observeReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 },
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

function animateBars() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll(".tech-bar-fill").forEach((bar) => {
            bar.style.width = bar.dataset.width + "%";
          });
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 },
  );

  document
    .querySelectorAll(".about-card")
    .forEach((card) => observer.observe(card));
}

function updateCounter() {
  const msg = document.getElementById("contactMsg");
  document.getElementById("msgCount").textContent = msg.value.length;
}

function sendMessage() {
  const btn = document.querySelector(".btn-submit");
  btn.textContent = "✓ MESSAGE SENT";
  btn.style.background = "var(--green-dim)";
  setTimeout(() => {
    btn.textContent = "SEND MESSAGE";
    btn.style.background = "";
  }, 3000);
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});
window.addEventListener("scroll", updateNavOnScroll);

renderGames();
renderAssets();
typewriter();
observeReveal();
animateBars();
