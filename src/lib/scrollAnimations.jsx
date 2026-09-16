"use client";

/**
 * scrollAnimations — GSAP + ScrollTrigger for Rokad College
 *
 * Key principles:
 *  - once: false → animations repeat on every scroll in/out
 *  - No clearProps → ScrollTrigger can reverse properly
 *  - Honors & Comments excluded → they use Swiper CSS transitions
 *  - Hero excluded → static hero, no scroll animation
 *  - ScrollTrigger.config for performance
 *  - prefers-reduced-motion respected
 */

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined" && !gsap.core.globals().ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
  // بهینه‌سازی عملکرد — کاهش callback و محاسبات اضافی
  ScrollTrigger.config({ limitCallbacks: true, ignoreMobileResize: true });
}

const prefersReduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

const FA = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
const toFa = (n) => String(n).replace(/\d/g, (d) => FA[+d]);

const q = (scope, sel) =>
  scope?.current?.querySelector(sel) ?? null;

const qa = (scope, sel) =>
  scope?.current
    ? Array.from(scope.current.querySelectorAll(sel)).filter(
        (el) => el.offsetWidth > 0 || el.offsetHeight > 0
      )
    : [];

/* ── WIPE (clip-path) روی تیترها ── */
function wipeIn(targets, opts = {}) {
  const els = (Array.isArray(targets) ? targets : [targets]).filter(Boolean);
  if (!els.length) return;
  gsap.fromTo(
    els,
    { clipPath: "inset(0 0 0 100%)", opacity: 0 },
    {
      clipPath: "inset(0 0 0 0%)",
      opacity: 1,
      duration: 0.9,
      ease: "power4.out",
      stagger: opts.stagger ?? 0.1,
      scrollTrigger: {
        trigger: opts.trigger || els[0],
        start: "top 88%",
        once: false,
      },
    }
  );
}

/* ── STAGGER delay ── */
const staggerFn = (_i, el) =>
  parseFloat(el.style.getPropertyValue("--stagger")) || 0;

function staggerize(els) {
  els.forEach((el, i) =>
    el.style.setProperty("--stagger", String(i * 0.08))
  );
}

/* ── FADE + RISE ── */
function fadeUp(targets, opts = {}) {
  const els = Array.isArray(targets)
    ? targets.filter(Boolean)
    : [targets].filter(Boolean);
  if (!els.length) return;
  gsap.from(els, {
    y: opts.y ?? 40,
    x: opts.x ?? 0,
    opacity: 0,
    duration: opts.duration ?? 0.8,
    ease: "power3.out",
    delay: opts.delay ?? 0,
    stagger: staggerFn,
    scrollTrigger: {
      trigger: opts.trigger || els[0],
      start: opts.start || "top 88%",
      once: false,
    },
  });
}

/* ── STAMP (کارت‌ها) ── */
function stampIn(targets, opts = {}) {
  const els =
    targets instanceof NodeList || Array.isArray(targets)
      ? Array.from(targets).filter(Boolean)
      : [targets].filter(Boolean);
  if (!els.length) return;
  gsap.from(els, {
    y: opts.y ?? 70,
    x: opts.x ?? 0,
    scale: opts.scale ?? 0.86,
    opacity: 0,
    rotate: () => gsap.utils.random(-4, 4),
    duration: 0.7,
    ease: opts.ease ?? "back.out(1.7)",
    stagger: staggerFn,
    delay: opts.delay ?? 0,
    scrollTrigger: {
      trigger: opts.trigger || els[0],
      start: opts.start || "top 90%",
      once: false,
    },
  });
}

/* ── COUNT-UP فارسی ── */
function countUp(el, opts = {}) {
  const raw = el.textContent.trim();
  const m = raw.match(/\d+/);
  if (!m) return;
  const target = parseInt(m[0], 10);
  if (!Number.isFinite(target) || target <= 0) return;
  const idx = raw.indexOf(m[0]);
  const pre = raw.slice(0, idx);
  const suf = raw.slice(idx + m[0].length);
  const obj = { v: 0 };
  gsap.to(obj, {
    v: target,
    duration: opts.duration ?? 1.6,
    ease: "power2.out",
    onUpdate: () => {
      el.textContent = pre + toFa(Math.round(obj.v)) + suf;
    },
    onComplete: () => {
      el.textContent = raw;
    },
    scrollTrigger: {
      trigger: opts.trigger || el,
      start: "top 92%",
      once: false,
    },
  });
}

/* ════════════════════════════════════════════════
 *           توابع اختصاصی هر بخش
 * ════════════════════════════════════════════════ */

function animHero() {
  // سکشن Hero بدون انیمیشن اسکرول — استاتیک
}

function animStats(scope) {
  const h = q(scope, "h2:not(.sr-only)");
  if (h) wipeIn(h, { trigger: scope.current });
  const grid = q(scope, "[class*='grid-cols']");
  const cards = grid
    ? Array.from(grid.children).filter((c) => c.offsetWidth > 0)
    : qa(scope, "article");
  if (cards.length) {
    staggerize(cards);
    stampIn(cards, { trigger: grid || scope.current, y: 80 });
    cards.forEach((c) => {
      const n = c.querySelector(".font-black");
      if (n && /\d/.test(n.textContent)) countUp(n);
    });
  }
}

function animDualSchool(scope) {
  const h = q(scope, "h2:not(.sr-only)");
  if (h) wipeIn(h, { trigger: scope.current });
  const grid = q(scope, "[class*='md:grid-cols-2']");
  const cards = grid
    ? Array.from(grid.children).filter((c) => c.offsetWidth > 0)
    : qa(scope, "article");
  if (cards.length) {
    staggerize(cards);
    stampIn(cards, { trigger: scope.current, y: 100, scale: 0.9 });
  }
}

function animStory(scope) {
  const img = q(scope, "img:not([alt=''])");
  const h = q(scope, "h2:not(.sr-only)");
  if (h) wipeIn(h, { trigger: scope.current });
  if (img) fadeUp(img, { trigger: scope.current, y: 40, duration: 0.9 });
  const text = h?.closest("div");
  // h2 رو از لیست حذف کن چون قبلاً wipeIn خورده
  const paras = text ? Array.from(text.children).filter((el) => el !== h) : qa(scope, "p");
  if (paras.length) {
    staggerize(paras.slice(0, 6));
    fadeUp(paras.slice(0, 6), { trigger: scope.current, y: 30, delay: 0.2 });
  }
}

function animPillars(scope) {
  const h = q(scope, "h2:not(.sr-only)");
  if (h) wipeIn(h, { trigger: scope.current });
  const grid = q(scope, "[class*='grid-cols']");
  const cards = grid
    ? Array.from(grid.children).filter((c) => c.offsetWidth > 0)
    : qa(scope, "article");
  if (cards.length) {
    staggerize(cards);
    stampIn(cards, { trigger: grid || scope.current, y: 70, ease: "back.out(2)" });
  }
}

/* ── Ecosystem: فقط تیتر wipe — کارت‌ها توسط سیستم صفحه‌بندی CSS مدیریت میشن ── */
function animEcosystem(scope) {
  const h = q(scope, "h2:not(.sr-only)");
  if (h) wipeIn(h, { trigger: scope.current });
}

function animHierarchy(scope) {
  const h = q(scope, "h2:not(.sr-only)");
  if (h) wipeIn(h, { trigger: scope.current });
  const grid = q(scope, "[class*='lg:grid-cols-3']");
  const cards = grid
    ? Array.from(grid.children).filter((c) => c.offsetWidth > 0)
    : qa(scope, "article");
  if (cards.length) {
    staggerize(cards);
    stampIn(cards, { trigger: grid || scope.current, y: 70 });
  }
}

function animEvents(scope) {
  const h = q(scope, "h2:not(.sr-only)");
  if (h) wipeIn(h, { trigger: scope.current });
}

function animFaq(scope) {
  const h = q(scope, "h2:not(.sr-only)");
  if (h) wipeIn(h, { trigger: scope.current });
  const grid = q(scope, "[class*='lg:grid-cols-2']");
  const items = grid
    ? Array.from(grid.children).filter((c) => c.offsetWidth > 0)
    : qa(scope, "details, [class*='border-2']");
  if (items.length) {
    staggerize(items);
    fadeUp(items, { trigger: scope.current, x: 40, y: 0 });
  }
}

/* ── Honors: تیتر wipe + فید کانتینر کاروسل ── */
function animHonors(scope) {
  const h = q(scope, "h2:not(.sr-only)");
  if (h) wipeIn(h, { trigger: scope.current });
  const carousel = q(scope, ".honors-swiper");
  if (carousel) fadeUp([carousel], { trigger: scope.current, y: 20, duration: 0.7 });
}

function animCollegeCta(scope) {
  const h = q(scope, "h2:not(.sr-only)");
  if (h) wipeIn(h, { trigger: scope.current });
  const notes = qa(scope, "[class*='shadow-[']");
  if (notes.length) {
    staggerize(notes.slice(0, 8));
    gsap.fromTo(
      notes.slice(0, 8),
      { y: 90, scale: 0.85, opacity: 0, rotation: () => gsap.utils.random(-10, 10) },
      {
        y: 0, scale: 1, opacity: 1, rotation: 0,
        duration: 0.85, ease: "back.out(1.5)", stagger: staggerFn,
        scrollTrigger: { trigger: scope.current, start: "top 90%", once: false },
      }
    );
  }
}

function animRokadians(scope) {
  const h = q(scope, "h2:not(.sr-only)");
  if (h) wipeIn(h, { trigger: scope.current });
  const cards = qa(scope, "article");
  if (cards.length) {
    staggerize(cards.slice(0, 12));
    stampIn(cards.slice(0, 12), { trigger: scope.current, y: 60, scale: 0.92 });
  }
  qa(scope, ".font-black").forEach((el) => {
    if (el.children.length === 0 && /^\D*\d/.test(el.textContent) && el.textContent.length < 14)
      countUp(el);
  });
}

/* ── Comments: تیتر wipe + فید کانتینر کاروسل ── */
function animComments(scope) {
  const h = q(scope, "h2:not(.sr-only)");
  if (h) wipeIn(h, { trigger: scope.current });
  const carousel = q(scope, ".comments-swiper");
  if (carousel) fadeUp([carousel], { trigger: scope.current, y: 20, duration: 0.7, delay: 0.15 });
}

function animTeamTeaser(scope) {
  const h = q(scope, "h2:not(.sr-only)");
  if (h) wipeIn(h, { trigger: scope.current });
  const big = qa(scope, "a, article").slice(0, 2);
  if (big.length) fadeUp(big, { trigger: scope.current, x: -50, y: 0, duration: 0.9 });
  const grid = q(scope, "[class*='grid-cols-2']");
  const minis = grid
    ? Array.from(grid.children).filter((c) => c.offsetWidth > 0)
    : qa(scope, "[class*='grid'] > div");
  if (minis.length) {
    staggerize(minis.slice(0, 8));
    stampIn(minis.slice(0, 8), { trigger: scope.current, y: 50, scale: 0.92 });
  }
}

function animBlogs(scope) {
  const h = q(scope, "h2:not(.sr-only)");
  if (h) wipeIn(h, { trigger: scope.current });
}

function animFinalCta(scope) {
  const imgs = qa(scope, "img:not([alt=''])");
  if (imgs.length >= 2) {
    fadeUp(imgs[0], { trigger: scope.current, x: -80, y: 0, duration: 1 });
    fadeUp(imgs[imgs.length - 1], { trigger: scope.current, x: 80, y: 0, duration: 1 });
  } else if (imgs.length === 1) {
    fadeUp(imgs[0], { trigger: scope.current, y: 50, duration: 1 });
  }
  const h = q(scope, "h2:not(.sr-only)");
  if (h) wipeIn(h, { trigger: scope.current });
  const textBlock = h?.parentElement;
  if (textBlock) {
    const rest = Array.from(textBlock.children).filter((c) => c !== h);
    if (rest.length) fadeUp(rest, { trigger: scope.current, y: 30, delay: 0.35 });
  }
}

/* ════════════════════════════════════════════════ */

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
  FinalCTA: animFinalCta,
};

export function useScrollAnimations(scope, sectionName) {
  const name = String(sectionName || "").replace(/Section$/, "");
  useEffect(() => {
    if (!scope.current) return;
    if (prefersReduced()) return;

    const ctx = gsap.context(() => {
      try {
        const fn = ANIM_MAP[name];
        fn ? fn(scope) : null;
      } catch (e) {
        if (typeof window !== "undefined") {
          window.__saErrs = window.__saErrs || [];
          window.__saErrs.push(name + ": " + e.message);
        }
        gsap.set(scope.current.querySelectorAll("*"), { clearProps: "all", opacity: 1 });
      }
    }, scope);

    // رفرش بعد از لود تصاویر/داده
    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);
    const t = setTimeout(onLoad, 1500);

    // ایمنی: المان نامرئی بعد از ۳ ثانیه visible بشه
    const safety = setTimeout(() => {
      if (!scope.current) return;
      const vh = window.innerHeight || document.documentElement.clientHeight;
      scope.current.querySelectorAll("*").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top >= vh || r.bottom <= 0) return;
        const cs = getComputedStyle(el);
        if (
          parseFloat(cs.opacity) < 0.05 &&
          cs.visibility !== "hidden" &&
          !el.closest(".sr-only") &&
          !el.closest("[hidden]") &&
          !el.closest(".swiper-wrapper") &&
          !el.classList.contains("card-inner-wrap") &&
          (el.offsetWidth > 15 || el.offsetHeight > 15)
        ) {
          gsap.set(el, { clearProps: "all", opacity: 1 });
        }
      });
    }, 3000);

    return () => {
      window.removeEventListener("load", onLoad);
      clearTimeout(t);
      clearTimeout(safety);
      ctx.revert();
    };
  }, [scope, name]);
}

export default useScrollAnimations;
