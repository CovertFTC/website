// ============================================================
// Renders content from the data/*.js files, then wires up nav +
// motion. All content edits belong in data/, not here.
// ============================================================
const DATA = window.SITE_DATA || {};
const STATS = window.STATS || [];
const MEMBERS = window.TEAM_MEMBERS || [];
const SPONSORS = window.SPONSORS || [];

// ---- render: team number + email links ----
document.querySelectorAll("[data-team-number]").forEach((el) => {
  el.textContent = DATA.teamNumber || el.textContent;
});

document.querySelectorAll("[data-email]").forEach((el) => {
  if (!DATA.email) return;
  const subject = el.dataset.subject;
  el.href = `mailto:${DATA.email}` + (subject ? `?subject=${encodeURIComponent(subject)}` : "");
  if (el.dataset.email === "text") el.textContent = DATA.email;
});

// ---- render: stats (mission page) ----
const statsGrid = document.getElementById("statsGrid");
if (statsGrid && STATS.length) {
  statsGrid.innerHTML = STATS
    .map(
      (s) => `
      <div class="stat">
        <span class="stat-num" data-count="${s.value}">0</span>
        <span class="stat-label">${s.label}</span>
      </div>`
    )
    .join("");
}

// ---- render: members (team page) ----
const teamGrid = document.getElementById("teamGrid");
if (teamGrid && MEMBERS.length) {
  teamGrid.innerHTML = MEMBERS
    .map(
      (m) => `
      <article class="agent reveal">
        <div class="agent-visor"><span class="agent-init">${m.initials}</span></div>
        <h3>${m.name}</h3>
        <p class="agent-role"><span class="redacted">${m.role}</span></p>
      </article>`
    )
    .join("");
}

// ---- render: socials (contact page) ----
const socialLinks = document.getElementById("socialLinks");
if (socialLinks && DATA.socials) {
  socialLinks.innerHTML = DATA.socials
    .map((s) => `<a href="${s.url}" target="_blank" rel="noopener">${s.label}</a>`)
    .join("");
}

// ---- render: sponsors (sponsors page) ----
const sponsorGrid = document.getElementById("sponsorGrid");
if (sponsorGrid) {
  const sponsors = SPONSORS;
  if (sponsors.length === 0) {
    sponsorGrid.innerHTML = Array.from(
      { length: 4 },
      () => `<div class="sponsor-slot reveal"><span>Your Logo Here</span></div>`
    ).join("");
  } else {
    sponsorGrid.innerHTML = sponsors
      .map((s) => {
        const inner = s.logo
          ? `<img src="${s.logo}" alt="${s.name}" loading="lazy">`
          : `<span class="sponsor-name">${s.name}</span>`;
        return s.url
          ? `<a class="sponsor-slot filled reveal" href="${s.url}" target="_blank" rel="noopener">${inner}</a>`
          : `<div class="sponsor-slot filled reveal">${inner}</div>`;
      })
      .join("");
  }
}

// ---- nav scroll state ----
const nav = document.getElementById("nav");
const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 24);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// ---- mobile menu ----
const burger = document.getElementById("navBurger");
const links = document.getElementById("navLinks");
burger.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  burger.classList.toggle("open", open);
  burger.setAttribute("aria-expanded", String(open));
});
links.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    links.classList.remove("open");
    burger.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
  })
);

// ---- scroll reveals ----
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
);
document.querySelectorAll(".reveal").forEach((el, i) => {
  el.style.transitionDelay = `${(i % 4) * 70}ms`;
  revealObserver.observe(el);
});

// ---- stat count-up ----
const countUp = (el) => {
  const target = parseInt(el.dataset.count, 10);
  const duration = 1400;
  const start = performance.now();
  const tick = (now) => {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(target * eased);
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
};
const statObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        countUp(entry.target);
        statObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.6 }
);
document.querySelectorAll(".stat-num").forEach((el) => statObserver.observe(el));

// ---- footer year ----
document.getElementById("year").textContent = new Date().getFullYear();
