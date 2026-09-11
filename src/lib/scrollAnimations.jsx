"use client";

/**
 * scrollAnimations — مرکز انیمیشن‌های اسکرول سایت Rokad College (GSAP + ScrollTrigger)
 *
 * نگارش حرفه‌ای:
 *  - clip-path wipe reveal روی تیترها (سبک نئوبروتالیستی)
 *  - پارالاکس روی تصاویر و بک‌گراندها
 *  - استمپ (ضربه) کارت‌ها با back.out
 *  - خط پیشرفت اسکرول بالای صفحه
 *  - count-up فارسی با حفظ علامت‌ها
 *  - fallback ایمن: هیچ المانی روی نامرئی قفل نمیمونه
 *  - احترام کامل به prefers-reduced-motion
 *  - بدون نیاز به اینترنت (GSAP از node_modules)
 */

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined" && !gsap.core.globals().ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
}

const reduceMotion =
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const FA = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
const toFa = (n) => String(n).replace(/\d/g, (d) => FA[+d]);

const q = (scope, sel) => (scope.current ? scope.current.querySelector(sel) : null);
const qa = (scope, sel) =>
  scope.current ? Array.from(scope.current.querySelectorAll(sel)) : [];

/* ── ابزار: تبدیل متن به کلمات برای stagger ── */
function splitWords(el) {
  if (!el || el.dataset.split === "1") return Array.from(el.children);
  const words = el.textContent.trim().split(/\s+/);
  el.innerHTML = words.map((w) => `<span style="display:inline-block;will-change:transform">${w}</span>`).join(" ");
  el.dataset.split = "1";
  return Array.from(el.children);
}

/* ── CLIP-PATH WIPE روی تیترها (حرفه‌ای) ── */
function wipeIn(targets, opts = {}) {
  const els = Array.isArray(targets) ? targets : [targets];
  if (!els.length) return;
  gsap.fromTo(
    els,
    { clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)", y: 30, opacity: 0 },
    {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      y: 0, opacity: 1, duration: 0.9, ease: "power4.out", stagger: 0.12,
      scrollTrigger: { trigger: els[0], start: "top 90%", once: true },
    }
  );
}

/* ── STAMP (ضربه نئوبروتالیستی) روی کارت‌ها ── */
function stampIn(targets, opts = {}) {
  const els = Array.isArray(targets) || targets instanceof NodeList ? Array.from(targets) : [targets];
  if (!els.length) return;
  gsap.fromTo(
    els,
    { y: 80, scale: 0.8, opacity: 0, rotation: () => gsap.utils.random(-3, 3) },
    {
      y: 0, scale: 1, opacity: 1, rotation: 0, duration: 0.7, ease: "back.out(1.7)",
      stagger: opts.stagger ?? 0.12, clearProps: "transform",
      scrollTrigger: { trigger: opts.trigger || els[0], start: "top 92%", once: true },
    }
  );
}

/* ── FADE/slide ساده برای متن ── */
function fadeUp(targets, opts = {}) {
  const els = Array.isArray(targets) || targets instanceof NodeList ? Array.from(targets) : [targets];
  if (!els.length) return;
  gsap.fromTo(
    els,
    { y: opts.y ?? 50, opacity: 0 },
    {
      y: 0, opacity: 1, duration: opts.duration ?? 0.7, ease: "power3.out",
      stagger: opts.stagger ?? 0.08, clearProps: "transform",
      scrollTrigger: { trigger: opts.trigger || els[0], start: "top 92%", once: true },
    }
  );
}

/* ── PARALLAX روی تصویر ── */
function parallax(img, amount = 60) {
  if (!img) return;
  gsap.fromTo(
    img,
    { yPercent: -amount / 10 },
    {
      yPercent: amount / 10, ease: "none",
      scrollTrigger: { trigger: img.parentElement || img, start: "top bottom", end: "bottom top", scrub: true },
    }
  );
}

/* ── COUNT-UP فارسی (حفظ علامت) ── */
function countUp(el, target, pre = "", suf = "") {
  const obj = { v: 0 };
  gsap.to(obj, {
    v: target, duration: 1.8, ease: "power2.out",
    scrollTrigger: { trigger: el, start: "top 92%", once: true },
    onUpdate: () => { el.textContent = pre + toFa(Math.round(obj.v)) + suf; },
  });
}
function parseNum(text) {
  const m = text.match(/\d+/);
  if (!m) return null;
  const idx = text.indexOf(m[0]);
  return { target: parseInt(m[0], 10), pre: text.slice(0, idx), suf: text.slice(idx + m[0].length) };
}

/* ── SAFETY NET: هیچ‌وقت نامرئی نمیمونه ── */
function safeFallback(scope) {
  fadeUp(scope.current.children, { trigger: scope.current, y: 40, stagger: 0.08 });
}

/* ════════════════════════════════════════════════
 *                         توابع هر بخش
 * ════════════════════════════════════════════════ */

function animHero(scope) {
  const content = q(scope, ".relative.mx-auto") || scope.current;
  const kids = Array.from(content.children);
  // تیتر wipe، بقیه fade
  const h = kids.find((c) => c.tagName === "H1" || c.querySelector("h1"));
  if (h) wipeIn(h.querySelector("h1") || h);
  const rest = kids.filter((c) => c !== (h || null));
  if (rest.length) fadeUp(rest, { trigger: content, y: 40, stagger: 0.1, delay: 0.15 });
  const char = q(scope, 'img[alt=""]');
  if (char && window.innerWidth <= 1024) fadeUp(char, { trigger: char, scale: 0.9 });
  parallax(char, 40);
}

function animStats(scope) {
  const cards = qa(scope, ".grid > div");
  if (cards.length) stampIn(cards, { trigger: scope.current, stagger: 0.14 });
  else safeFallback(scope);
  cards.forEach((card) => {
    const numEl = card.querySelector("div:nth-child(2)");
    const p = numEl && parseNum(numEl.textContent);
    if (p) countUp(numEl, p.target, p.pre, p.suf);
  });
}

function animDualSchool(scope) {
  const cards = qa(scope, ".grid > div");
  if (cards.length) stampIn(cards, { trigger: scope.current, stagger: 0.22, y: 100 });
  else safeFallback(scope);
  // پارالاکس روی تصاویر هر مدرسه
  qa(scope, 'img[alt=""]').forEach((img) => parallax(img, 50));
}

function animStory(scope) {
  const img = q(scope, 'img[alt=""]');
  if (img) { fadeUp(img, { x: 100, trigger: img }); parallax(img, 60); }
  const text = q(scope, ".relative.z-10 > div") || q(scope, ".relative.z-10");
  if (text) fadeUp(text.children || text, { x: -50, stagger: 0.1, delay: 0.15, trigger: scope.current });
}

function animPillars(scope) {
  const cards = qa(scope, ".grid > div");
  if (cards.length) stampIn(cards, { trigger: scope.current, stagger: 0.15, ease: "back.out(2)" });
  else safeFallback(scope);
}

function animEcosystem(scope) {
  const cards = qa(scope, "article");
  if (cards.length) { stampIn(cards, { trigger: scope.current }); return; }
  const grid = qa(scope, ".grid > div");
  if (grid.length) stampIn(grid, { trigger: scope.current });
  else safeFallback(scope);
}

function animHierarchy(scope) {
  const cards = qa(scope, ".grid > div");
  if (cards.length) stampIn(cards, { trigger: scope.current, stagger: 0.13 });
  else safeFallback(scope);
}

function animEvents(scope) {
  const slides = qa(scope, ".swiper-slide");
  if (slides.length) stampIn(slides, { trigger: scope.current, stagger: 0.08, y: 50 });
  const h = q(scope, "h2");
  if (h) wipeIn(h);
}

function animFaq(scope) {
  const items = qa(scope, ".border-2");
  if (items.length) fadeUp(items, { x: 60, stagger: 0.08, trigger: scope.current });
  else safeFallback(scope);
  const consult = q(scope, "[class*='bg-teal']") || q(scope, "[class*='teal']");
  if (consult) stampIn(consult, { trigger: consult, delay: 0.2 });
}

function animHonors(scope) {
  const wraps = qa(scope, ".card-inner-wrap");
  if (wraps.length) stampIn(wraps, { trigger: scope.current, stagger: 0.12, rotation: 0, y: 80 });
  else safeFallback(scope);
  const h = q(scope, "h2");
  if (h) wipeIn(h);
}

function animCollegeCta(scope) {
  const notes = qa(scope, "[class*='shadow-[3px_3px_0']");
  if (notes.length) {
    gsap.fromTo(
      notes,
      { y: 90, x: () => gsap.utils.random(-60, 60), rotation: () => gsap.utils.random(-12, 12), opacity: 0, scale: 0.8 },
      {
        y: 0, x: 0, rotation: 0, opacity: 1, scale: 1, duration: 0.85, ease: "back.out(1.5)",
        stagger: 0.1, clearProps: "transform",
        scrollTrigger: { trigger: scope.current, start: "top 92%", once: true },
      }
    );
  } else safeFallback(scope);
  const h = q(scope, "h2");
  if (h) wipeIn(h);
}

function animRokadians(scope) {
  const railCards = qa(scope, ".rokadians-rail > div");
  if (railCards.length) fadeUp(railCards, { x: 80, trigger: scope.current, stagger: 0.08 });
  else safeFallback(scope);
  qa(scope, "[class*='font-black']").forEach((el) => {
    const p = parseNum(el.textContent);
    if (p && p.target >= 2) countUp(el, p.target, p.pre, p.suf);
  });
}

function animComments(scope) {
  const wraps = qa(scope, ".card-inner-wrap");
  if (wraps.length) stampIn(wraps, { scale: 0.6, trigger: scope.current, stagger: 0.1, ease: "back.out(1.6)" });
  else safeFallback(scope);
  const h = q(scope, "h2");
  if (h) wipeIn(h);
}

function animTeamTeaser(scope) {
  const grid = q(scope, ".grid.grid-cols-1");
  if (grid) stampIn(grid, { trigger: grid });
  const mini = qa(scope, ".grid.grid-cols-2 > div");
  if (mini.length) stampIn(mini, { trigger: scope.current, stagger: 0.07, y: 50 });
  else if (!grid) safeFallback(scope);
}

function animBlogs(scope) {
  const cards = qa(scope, ".grid > div");
  if (cards.length) stampIn(cards, { trigger: scope.current, stagger: 0.12, y: 70 });
  else safeFallback(scope);
  const h = q(scope, "h2");
  if (h) wipeIn(h);
}

function animFinalCta(scope) {
  const imgs = qa(scope, 'img[alt=""]');
  if (imgs.length >= 2) {
    fadeUp(imgs[0], { x: -160, duration: 1, trigger: imgs[0] });
    fadeUp(imgs[imgs.length - 1], { x: 160, duration: 1, trigger: imgs[imgs.length - 1] });
  }
  const slogan = q(scope, "h2");
  if (slogan) wipeIn(slogan, { delay: 0.3 });
}

/* خط پیشرفت اسکرول (یه بار ست میشه) */
let progressAdded = false;
function addProgress() {
  if (progressAdded || typeof document === "undefined") return;
  progressAdded = true;
  const bar = document.createElement("div");
  bar.id = "rokad-scroll-progress";
  bar.style.cssText =
    "position:fixed;top:0;left:0;height:4px;width:0%;z-index:9999;" +
    "background:#000;border-right:2px solid #fff;pointer-events:none;";
  document.body.appendChild(bar);
  gsap.to(bar, {
    width: "100%",
    ease: "none",
    scrollTrigger: { start: 0, end: "max", scrub: 0.3 },
  });
}

const ANIM_MAP = {
  Hero: animHero,
  Stats: animStats,
  DualSchool: animDualSchool,
  Story: animStory,
  Pillars: animPillars,
  Ecosystem: animEcosystem,
  RokadHierarchy: animHierarchy,
  EventsCarousel: animEvents,
  Faq: animFaq,
  Honors: animHonors,
  CollegeCta: animCollegeCta,
  Rokadians: animRokadians,
  Comments: animComments,
  TeamTeaser: animTeamTeaser,
  Blogs: animBlogs,
  FinalCTA: animFinalCTA,
};

export function useScrollAnimations(scope, sectionName) {
  useEffect(() => {
    if (!scope.current) return;
    if (reduceMotion) return; // بدون انیمیشن، همه visible می‌مونن

    addProgress();

    const ctx = gsap.context(() => {
      const fn = ANIM_MAP[sectionName];
      try {
        fn ? fn(scope) : safeFallback(scope);
      } catch (e) {
        gsap.set(scope.current.querySelectorAll("*"), { clearProps: "all", opacity: 1 });
        safeFallback(scope);
      }
    }, scope);

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    const t = setTimeout(refresh, 800);

    // ⛑️ SAFETY NET: بعد از ۲.۵s هر المان نامرئی رو force-visible می‌کنیم
    const safety = setTimeout(() => {
      const els = scope.current ? scope.current.querySelectorAll("*") : [];
      els.forEach((el) => {
        const cs = getComputedStyle(el);
        if (parseFloat(cs.opacity) < 0.05 && cs.visibility !== "hidden" && el.offsetWidth > 15) {
          gsap.set(el, { opacity: 1, clearProps: "transform" });
        }
      });
    }, 2500);

    return () => {
      window.removeEventListener("load", refresh);
      clearTimeout(t);
      clearTimeout(safety);
      ctx.revert();
    };
  }, [scope, sectionName]);
}

export default useScrollAnimations;
