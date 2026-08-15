const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 50);
});

menuToggle?.addEventListener("click", () => {
  const open = header.classList.toggle("menu-open");
  menuToggle.setAttribute("aria-expanded", open);
  menuToggle.textContent = open ? "×" : "☰";
});

document.querySelectorAll(".nav a").forEach(a => {
  a.addEventListener("click", () => {
    header.classList.remove("menu-open");
    menuToggle?.setAttribute("aria-expanded", "false");
    if (menuToggle) menuToggle.textContent = "☰";
  });
});

const slides = [...document.querySelectorAll(".hero-slide")];
const current = document.getElementById("slide-current");
let slideIndex = 0;
let timer;

function showSlide(index) {
  slideIndex = (index + slides.length) % slides.length;
  slides.forEach((slide, i) => slide.classList.toggle("is-active", i === slideIndex));
  if (current) current.textContent = String(slideIndex + 1).padStart(2, "0");
}
function nextSlide() { showSlide(slideIndex + 1); resetTimer(); }
function prevSlide() { showSlide(slideIndex - 1); resetTimer(); }
function resetTimer() {
  clearInterval(timer);
  timer = setInterval(() => showSlide(slideIndex + 1), 6500);
}
document.getElementById("next")?.addEventListener("click", nextSlide);
document.getElementById("prev")?.addEventListener("click", prevSlide);
resetTimer();

const lightbox = document.querySelector(".lightbox");
const lightboxContent = document.querySelector(".lightbox-content");
const closeLightbox = () => {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxContent.innerHTML = "";
};

document.querySelectorAll(".gallery-card").forEach(card => {
  card.addEventListener("click", () => {
    const img = card.querySelector("img");
    if (!img) return;

    const fullImg = document.createElement("img");
    fullImg.src = img.src;
    fullImg.alt = img.alt;
    fullImg.style.maxWidth = "100%";
    fullImg.style.maxHeight = "100%";
    fullImg.style.objectFit = "contain";

    lightboxContent.innerHTML = "";
    lightboxContent.appendChild(fullImg);
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
  });
});

document.querySelector(".lightbox-close")?.addEventListener("click", closeLightbox);
lightbox?.addEventListener("click", e => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeLightbox(); });

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Privacy / cookie preferences
const CONSENT_KEY = "olea_cookie_consent_v1";
const cookieBanner = document.getElementById("cookie-banner");
const cookieModal = document.getElementById("cookie-modal");
const analyticsConsent = document.getElementById("analytics-consent");

function saveConsent(analytics) {
  localStorage.setItem(CONSENT_KEY, JSON.stringify({
    necessary: true,
    analytics: !!analytics,
    savedAt: new Date().toISOString()
  }));
  if (cookieBanner) cookieBanner.hidden = true;
  if (cookieModal) cookieModal.hidden = true;
}

function openCookieSettings() {
  const saved = JSON.parse(localStorage.getItem(CONSENT_KEY) || "null");
  if (analyticsConsent) analyticsConsent.checked = !!saved?.analytics;
  if (cookieModal) cookieModal.hidden = false;
}

const savedConsent = localStorage.getItem(CONSENT_KEY);
if (!savedConsent && cookieBanner) cookieBanner.hidden = false;

document.getElementById("cookie-accept")?.addEventListener("click", () => saveConsent(true));
document.getElementById("cookie-reject")?.addEventListener("click", () => saveConsent(false));
document.getElementById("cookie-settings")?.addEventListener("click", openCookieSettings);
document.getElementById("cookie-settings-link")?.addEventListener("click", openCookieSettings);
document.getElementById("cookie-close")?.addEventListener("click", () => { if (cookieModal) cookieModal.hidden = true; });
document.getElementById("cookie-save")?.addEventListener("click", () => saveConsent(analyticsConsent?.checked));
document.getElementById("cookie-accept-modal")?.addEventListener("click", () => saveConsent(true));