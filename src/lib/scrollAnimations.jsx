"use client";

/**
 * scrollAnimations — مرکز انیمیشن‌های اسکرول سایت Rokad College (GSAP + ScrollTrigger)
 *
 * اصول طراحی (مطابق DESIGN_SYSTEM سایت — نئوبروتالیسم):
 *  - همه انیمیشن‌ها once: true — هنگام اسکرول بالا/پایین تکرار و پرش ندارند
 *  - fade+rise برای متن‌ها (power3.out)، stamp برای کارت‌ها (back.out)
 *  - clip-path wipe فقط روی تیترهای h2 (امضای بصری سکشن‌ها)
 *  - scrub‌ها محدود و سبک: پارالاکس روی لایه‌های پترین بک‌گراند و تصویر Story
 *  - stagger از CSS متغیر --stagger خوانده میشه؛ کارت‌های hidden (ریسپانسیو/اسوایپر) شمارش نمیشن
 *  - fallback ایمن: هیچ المانی روی نامرئی قفل نمیمونه
 *  - احترام کامل به prefers-reduced-motion
 *  - GSAP از node_modules — بدون نیاز به اینترنت
 */

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined" && !gsap.core.globals().ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
}

const prefersReduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const FA = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
const toFa = (n) => String(n).replace(/\d/g, (d) => FA[+d]);

const q = (scope, sel) =>
  scope && scope.current ? scope.current.querySelector(sel) : null;

const qa = (scope, sel) =>
  scope && scope.current
    ? Array.from(scope.current.querySelectorAll(sel)).filter(
        (el) => el.offsetWidth > 0 || el.offsetHeight > 0 // رد کردن نسخه‌های hidden ریسپانسیو
      )
    : [];

/* ── CLIP-PATH WIPE روی تیترها (امضای نئوبروتالیستی سایت)
      جهت باز شدن از راست به چپ — مطابق مسیر خواندن فارسی/RTL ── */
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
      clearProps: "clipPath,opacity",
      scrollTrigger: { trigger: opts.trigger || els[0], start: "top 88%", once: true },
    }
  );
}

/* ── FADE + RISE برای متن و ردیف‌ها ──
   gsap.from + clearProps: انیمیشن نسبت به transform فعلی CSS انجام میشه
   (کلاس‌های rotate/translate خود کارت‌ها حفظ) و آخر کار استایل اصلی برمی‌گرده ── */
// GSAP stagger function signature: (index, target, targets) — target is arg 2!
const staggerFn = (_i, el) => parseFloat(getComputedStyle(el).getPropertyValue("--stagger")) || 0;

function fadeUp(targets, opts = {}) {
  const els = Array.isArray(targets) ? targets.filter(Boolean) : [targets].filter(Boolean);
  if (!els.length) return;
  gsap.from(
    els,
    {
      y: opts.y ?? 40,
      x: opts.x ?? 0,
      opacity: 0,
      duration: opts.duration ?? 0.8,
      ease: "power3.out",
      delay: opts.delay ?? 0,
      stagger: staggerFn,
      clearProps: "all",
      scrollTrigger: { trigger: opts.trigger || els[0], start: opts.start || "top 88%", once: true },
    }
  );
}

/* ── STAMP (ضربه نئوبروتالیستی) کارت‌ها ── */
function stampIn(targets, opts = {}) {
  const els =
    targets instanceof NodeList || Array.isArray(targets)
      ? Array.from(targets).filter(Boolean)
      : [targets].filter(Boolean);
  if (!els.length) return;
  gsap.from(
    els,
    {
      y: opts.y ?? 70,
      x: opts.x ?? 0,
      scale: opts.scale ?? 0.86,
      opacity: 0,
      rotate: () => gsap.utils.random(-4, 4), // نسبی روی چرخش CSS موجود
      duration: 0.7,
      ease: opts.ease ?? "back.out(1.7)",
      stagger: staggerFn,
      delay: opts.delay ?? 0,
      clearProps: "all",
      scrollTrigger: { trigger: opts.trigger || els[0], start: opts.start || "top 90%", once: true },
    }
  );
}

/* ── PARALLAX (scrub آهسته) — فقط روی المان‌های تزئینی/بک‌گراند ── */
function parallax(el, amount = 5) {
  if (!el) return;
  gsap.fromTo(
    el,
    { yPercent: -amount },
    {
      yPercent: amount,
      ease: "none",
      scrollTrigger: {
        trigger: el.closest("section, article") || el.parentElement || el,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    }
  );
}

/* ── COUNT-UP فارسی (حفظ پیشوند/پسوند متن) ── */
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
      el.textContent = raw; // برگرداندن دقیق متن اصلی (علامت‌ها حفظ)
    },
    scrollTrigger: { trigger: opts.trigger || el, start: "top 92%", once: true },
  });
}

/* ── STAGGER خودکار: بچه‌های یک لیست/گرید به ترتیب DOM تاخیر می‌گیرن ── */
function staggerize(els) {
  els.forEach((el, i) => el.style.setProperty("--stagger", String(i * 0.08)));
}

/* ── SAFETY NET عمومی: هدر + کارت‌ها + پترین ── */
function safeReveal(scope) {
  const head = qa(scope, ":is(h1,h2):not(.sr-only)").slice(0, 1);
  const paras = qa(scope, "p").slice(0, 6);
  const cards = qa(scope, "article, [class*='shadow-[']");
  const rest = Array.from(new Set([...head, ...paras])).filter(Boolean);
  if (rest.length) fadeUp(rest, { trigger: scope.current, y: 36 });
  if (head.length) wipeIn(head, { trigger: scope.current });
  if (cards.length) {
    staggerize(cards.slice(0, 16));
    stampIn(cards.slice(0, 16), { trigger: scope.current, y: 50, scale: 0.92 });
  }
  qa(scope, "section > div:first-child img[alt='']").forEach((img) => parallax(img, 4));
}

/* ════════════════════════════════════════════════
 *                 توابع اختصاصی هر بخش
 *  (بر اساس DOM واقعی هر سکشن — کارت‌ها، تیترها، پترین‌ها)
 * ════════════════════════════════════════════════ */

function animHero(scope) {
  // تیپ‌رایت اصلی (هر دو نسخه موبایل/دسکتاپ): wipe از چپ
  const heads = qa(scope, "h1");
  if (heads.length) wipeIn(heads, { trigger: scope.current, start: "top 95%" });
  // کارت/کانواس هیرو: stamp آرام
  const canvas = q(scope, "[class*='canvas'], canvas") || q(scope, "img[alt=''], img");
  if (canvas) fadeUp(canvas, { trigger: scope.current, start: "top 95%", y: 60, delay: 0.25, duration: 1 });
  // دکمه‌ها/زیرعنوان‌ها
  const ctas = qa(scope, "button, a[href]").slice(0, 4);
  if (ctas.length) {
    staggerize(ctas);
    fadeUp(ctas, { trigger: scope.current, start: "top 95%", y: 28, delay: 0.4 });
  }
}

function animStats(scope) {
  const h = q(scope, "h2:not(.sr-only)");
  if (h) wipeIn(h, { trigger: scope.current });
  const grid = q(scope, "[class*='grid-cols']");
  const cards = grid ? Array.from(grid.children).filter((c) => c.offsetWidth > 0) : qa(scope, "article");
  if (cards.length) {
    staggerize(cards);
    stampIn(cards, { trigger: grid || scope.current, y: 80 });
    cards.forEach((c) => {
      const n = c.querySelector(".font-black");
      if (n && /\d/.test(n.textContent)) countUp(n);
    });
  } else safeReveal(scope);
  qa(scope, "section > div img[alt='']").forEach((img) => parallax(img, 4));
}

function animDualSchool(scope) {
  const grid = q(scope, "[class*='md:grid-cols-2']");
  const cards = grid ? Array.from(grid.children).filter((c) => c.offsetWidth > 0) : qa(scope, "article");
  if (cards.length) {
    staggerize(cards);
    stampIn(cards, { trigger: scope.current, y: 100, scale: 0.9 });
  } else safeReveal(scope);
  qa(scope, "section > div img[alt='']").forEach((img) => parallax(img, 4));
}

function animStory(scope) {
  const img = q(scope, "img");
  const h = q(scope, "h2:not(.sr-only)");
  const text = h ? h.closest("div") : null;
  const paras = text ? Array.from(text.children) : qa(scope, "p");
  if (h) wipeIn(h, { trigger: scope.current });
  if (img) {
    fadeUp(img, { trigger: scope.current, x: 60, y: 0, duration: 1 });
    // پارالاکس آرام روی تصویر — wrapper وسطی (ستون تصویر)
    const wrap = img.parentElement?.parentElement;
    if (wrap) parallax(wrap, 3);
  }
  if (paras.length) {
    staggerize(paras.slice(0, 6));
    fadeUp(paras.slice(0, 6), { trigger: scope.current, y: 30, delay: 0.2 });
  }
}

function animPillars(scope) {
  const h = q(scope, "h2:not(.sr-only)");
  if (h) wipeIn(h, { trigger: scope.current });
  const grid = q(scope, "[class*='grid-cols']");
  const cards = grid ? Array.from(grid.children).filter((c) => c.offsetWidth > 0) : qa(scope, "article");
  if (cards.length) {
    staggerize(cards);
    stampIn(cards, { trigger: grid || scope.current, y: 70, ease: "back.out(2)" });
  } else safeReveal(scope);
  qa(scope, "section > div img[alt='']").forEach((img) => parallax(img, 4));
}

function animEcosystem(scope) {
  const h = q(scope, "h2:not(.sr-only)");
  if (h) wipeIn(h, { trigger: scope.current });
  const cards = qa(scope, "article");
  if (cards.length) {
    staggerize(cards);
    stampIn(cards, { trigger: scope.current, y: 60, scale: 0.94 });
  } else safeReveal(scope);
  qa(scope, "section > div img[alt='']").forEach((img) => parallax(img, 3));
}

function animHierarchy(scope) {
  const h = q(scope, "h2:not(.sr-only)");
  if (h) wipeIn(h, { trigger: scope.current });
  const grid = q(scope, "[class*='lg:grid-cols-3']");
  const cards = grid ? Array.from(grid.children).filter((c) => c.offsetWidth > 0) : qa(scope, "article");
  if (cards.length) {
    staggerize(cards);
    stampIn(cards, { trigger: grid || scope.current, y: 70 });
  } else safeReveal(scope);
  qa(scope, "section > div img[alt='']").forEach((img) => parallax(img, 4));
}

function animEvents(scope) {
  const h = q(scope, "h2:not(.sr-only)");
  if (h) wipeIn(h, { trigger: scope.current });
  // اسلایدهای اسوایپر (فقط visible)
  const slides = qa(scope, ".swiper-slide-active, .swiper-slide-next, .swiper-slide-prev");
  if (slides.length) {
    fadeUp(slides, { trigger: scope.current, y: 50, delay: 0.15 });
  } else {
    const track = qa(scope, ".swiper-wrapper > *");
    if (track.length) {
      staggerize(track.slice(0, 6));
      fadeUp(track.slice(0, 6), { trigger: scope.current, y: 50 });
    }
  }
  const arrows = qa(scope, "button");
  if (arrows.length) fadeUp(arrows, { trigger: scope.current, y: 20, delay: 0.3 });
  qa(scope, "section > div img[alt='']").forEach((img) => parallax(img, 3));
}

function animFaq(scope) {
  const h = q(scope, "h2:not(.sr-only)");
  if (h) wipeIn(h, { trigger: scope.current });
  const grid = q(scope, "[class*='lg:grid-cols-2']");
  const items = grid ? Array.from(grid.children).filter((c) => c.offsetWidth > 0) : qa(scope, "details, [class*='border-2']");
  if (items.length) {
    staggerize(items);
    fadeUp(items, { trigger: scope.current, x: 40, y: 0 });
  } else safeReveal(scope);
}

function animHonors(scope) {
  const h = q(scope, "h2:not(.sr-only)");
  if (h) wipeIn(h, { trigger: scope.current });
  const slides = qa(scope, ".swiper-slide-visible, .swiper-slide-active, .swiper-slide-next");
  const cards = slides.length ? slides : qa(scope, "article");
  if (cards.length) {
    staggerize(cards);
    stampIn(cards, { trigger: scope.current, y: 60, scale: 0.9 });
  }
  qa(scope, "section > div img[alt='']").forEach((img) => parallax(img, 3));
}

function animCollegeCta(scope) {
  const h = q(scope, "h2:not(.sr-only)");
  if (h) wipeIn(h, { trigger: scope.current });
  // نوت‌های چسبان (کارت‌های سایه‌سخت با rotate)
  const notes = qa(scope, "[class*='shadow-[']");
  if (notes.length) {
    staggerize(notes.slice(0, 8));
    gsap.fromTo(
      notes.slice(0, 8),
      {
        y: 90,
        scale: 0.85,
        opacity: 0,
        rotation: () => gsap.utils.random(-10, 10), // اضافه روی چرخش CSS فعلی، بعد clearProps
      },
      {
        y: 0,
        scale: 1,
        opacity: 1,
        rotation: 0,
        duration: 0.85,
        ease: "back.out(1.5)",
        stagger: staggerFn,
        clearProps: "all",
        scrollTrigger: { trigger: scope.current, start: "top 90%", once: true },
      }
    );
  } else safeReveal(scope);
  qa(scope, "section > div img[alt='']").forEach((img) => parallax(img, 4));
}

function animRokadians(scope) {
  const h = q(scope, "h2:not(.sr-only)");
  const sub = q(scope, "h2 ~ p, p");
  if (h) wipeIn(h, { trigger: scope.current });
  const cards = qa(scope, "article");
  if (cards.length) {
    staggerize(cards.slice(0, 12));
    stampIn(cards.slice(0, 12), { trigger: scope.current, y: 60, scale: 0.92 });
  } else safeReveal(scope);
  // آمار عددی سکشن (font-black با رقم)
  qa(scope, ".font-black").forEach((el) => {
    if (el.children.length === 0 && /^\D*\d/.test(el.textContent) && el.textContent.length < 14)
      countUp(el);
  });
  qa(scope, "section > div img[alt='']").forEach((img) => parallax(img, 3));
}

function animComments(scope) {
  const h = q(scope, "h2:not(.sr-only)");
  if (h) wipeIn(h, { trigger: scope.current });
  // توجه: .card-inner-wrap opacity خودش رو با CSS swiper کنترل می‌کنه — انیمیشن روی خود اسلاید
  const slides = qa(scope, ".swiper-slide-active, .swiper-slide-next");
  if (slides.length) fadeUp(slides, { trigger: scope.current, y: 40, delay: 0.2 });
  const arrows = qa(scope, "button");
  if (arrows.length) fadeUp(arrows, { trigger: scope.current, y: 20, delay: 0.35 });
  qa(scope, "section > div img[alt='']").forEach((img) => parallax(img, 3));
}

function animTeamTeaser(scope) {
  const h = q(scope, "h2:not(.sr-only)");
  if (h) wipeIn(h, { trigger: scope.current });
  const big = qa(scope, "a, article").slice(0, 2);
  if (big.length) fadeUp(big, { trigger: scope.current, x: -50, y: 0, duration: 0.9 });
  const grid = q(scope, "[class*='grid-cols-2']");
  const minis = grid ? Array.from(grid.children).filter((c) => c.offsetWidth > 0) : qa(scope, "[class*='grid'] > div");
  if (minis.length) {
    staggerize(minis.slice(0, 8));
    stampIn(minis.slice(0, 8), { trigger: scope.current, y: 50, scale: 0.92 });
  }
}

function animBlogs(scope) {
  const h = q(scope, "h2:not(.sr-only)");
  if (h) wipeIn(h, { trigger: scope.current });
  const slides = qa(scope, ".swiper-slide-active, .swiper-slide-next, .swiper-slide-prev");
  const cards = slides.length ? slides : qa(scope, "article");
  if (cards.length) {
    staggerize(cards);
    stampIn(cards, { trigger: scope.current, y: 70 });
  }
  const arrows = qa(scope, "button");
  if (arrows.length) fadeUp(arrows, { trigger: scope.current, y: 20, delay: 0.3 });
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
  const btn = q(scope, "button, a[href]") || q(scope, "h2 ~ div a, h2 ~ p + *");
  const textBlock = h ? h.parentElement : null;
  if (textBlock) {
    const rest = Array.from(textBlock.children).filter((c) => c !== h);
    if (rest.length) fadeUp(rest, { trigger: scope.current, y: 30, delay: 0.35 });
  }
  if (btn) fadeUp(btn, { trigger: scope.current, y: 20, delay: 0.5 });
}

/* ── خط پیشرفت اسکرول بالای صفحه (رنگ‌های پالت رکاد) ── */
let progressAdded = false;
function addProgress() {
  if (progressAdded || typeof document === "undefined") return;
  progressAdded = true;
  const bar = document.createElement("div");
  bar.id = "rokad-scroll-progress";
  // full-width با scaleX (فقط compositor) — انیمیشن width هر فریم layout می‌زد و رِد می‌کرد
  bar.style.cssText =
    "position:fixed;top:0;right:0;height:3px;width:100%;z-index:9999;" +
    "transform:scaleX(0);transform-origin:right center;" +
    "background:linear-gradient(to left,#59bbaf 0%,#202a5a 50%,#e0195b 100%);" +
    "pointer-events:none;will-change:transform;";
  // مستقیم در body (root stacking context) تا زیر هدر fixed ن‌مونه
  document.body.appendChild(bar);
  gsap.to(bar, {
    scaleX: 1,
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
  FinalCTA: animFinalCta,
};

export function useScrollAnimations(scope, sectionName) {
  const name = String(sectionName || "").replace(/Section$/, "");
  useEffect(() => {
    if (!scope.current) return;
    if (prefersReduced()) return; // بدون انیمیشن، همه visible می‌مونن

    addProgress();

    const ctx = gsap.context(() => {
      const fn = ANIM_MAP[name];
      try {
        fn ? fn(scope) : safeReveal(scope);
      } catch (e) {
        // خرابی یک سکشن نباید کل صفحه رو سفید کنه
        if (typeof window !== "undefined") {
          window.__saErrs = window.__saErrs || [];
          window.__saErrs.push(name + ": " + e.message);
        }
        gsap.set(scope.current.querySelectorAll("*"), { clearProps: "all", opacity: 1 });
      }
    }, scope);

    // اسکرین‌های پهن، لود دیرِ تصویر و داده‌های async: چند refresh مطمئن
    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);
    const t = setTimeout(onLoad, 900);
    const t2 = setTimeout(onLoad, 2200); // داده‌های API (Stats/Blogs/…) ممکنه دیر بیان

    // ⛑️ SAFETY NET: هر المانی که بعد ۴s داخل ویوپورت هنوز نامرئی موند، force-visible
    // (فقط داخل ویوپورت — المان‌های زیر تاگ عمداً منتظر اسکرول‌اند)
    const safety = setTimeout(() => {
      if (!scope.current) return;
      const vh = window.innerHeight || document.documentElement.clientHeight;
      scope.current.querySelectorAll("*").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top >= vh || r.bottom <= 0) return; // هنوز دیده نشده — دست نزن
        const cs = getComputedStyle(el);
        if (
          parseFloat(cs.opacity) < 0.05 &&
          cs.visibility !== "hidden" &&
          !el.closest(".sr-only") &&
          !el.closest("[hidden]") &&
          !el.closest(".swiper-wrapper") && // اسلایدهای غیرفعال سوایپر عمداً مخفین
          !el.classList.contains("card-inner-wrap") &&
          (el.offsetWidth > 15 || el.offsetHeight > 15)
        ) {
          gsap.set(el, { clearProps: "all", opacity: 1 });
        }
      });
    }, 4000);

    return () => {
      window.removeEventListener("load", onLoad);
      clearTimeout(t);
      clearTimeout(t2);
      clearTimeout(safety);
      ctx.revert();
    };
  }, [scope, name]);
}

export default useScrollAnimations;
