"use client";

/**
 * ScrollSmooth — لایه‌ی اسکرول نرم GSAP (ScrollSmoother) برای کل سایت رکاد
 *
 * ساختار: فقط محتوای جریان صفحه (main + footer) داخل wrapper قرار می‌گیرد؛
 * المان‌های position:fixed (هدر، مودال ثبت‌نام، نوار پیشرفت) بیرون می‌مانن
 * تا transform روی content روی اون‌ها اثر نذاره.
 *
 * نکات:
 *  - موبایل/تاچ: اسکرول نیتیو می‌مونه (ScrollSmoother روی تاچ تجربه نمی‌ده)
 *  - prefers-reduced-motion: کاملاً غیرفعال
 *  - اسکرول واقعی روی #smooth-wrapper اتفاق می‌افته، نه window —
 *    بقیه‌ی کامپوننت‌ها باید از helpers پایین (pageScroll) استفاده کنن
 */

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
}

let smoother = null;
export const getSmoother = () => smoother;

const reducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

/* ── هلپرهای یکپارچه‌ی اسکرول: با و بدون Smoother کار می‌کنن ── */

export function getScrollTop() {
  if (smoother) return smoother.scrollTop();
  return window.scrollY || document.documentElement.scrollTop || 0;
}

export function setScrollTop(y, smooth = false) {
  if (smoother) {
    smoother.scrollTop(y);
    if (smooth) smoother.scrollTop(y, true);
    return;
  }
  window.scrollTo({ top: y, behavior: smooth ? "smooth" : "auto" });
}

export function scrollToTarget(el, { smooth = true, position = "top top" } = {}) {
  if (!el) return;
  if (smoother) {
    smoother.scrollTo(el, smooth, position);
    return;
  }
  el.scrollIntoView({ behavior: smooth ? "smooth" : "auto", block: "start" });
}

// اشتراک در رویداد اسکرول فارض‌النظر از اینکه اسکرولر کدومه (wrapper یا window)
export function onPageScroll(cb) {
  const wrapper = typeof document !== "undefined" && document.getElementById("smooth-wrapper");
  const handler = () => cb();
  window.addEventListener("scroll", handler, { passive: true });
  wrapper?.addEventListener("scroll", handler, { passive: true });
  return () => {
    window.removeEventListener("scroll", handler);
    wrapper?.removeEventListener("scroll", handler);
  };
}

/* ── کامپوننت ── */
export default function ScrollSmooth({ children, lag = 0.45 }) {
  const contentRef = useRef(null);
  const pathname = usePathname();

  // ناوبری سمت کلاینت: محتوای جدید جای قبلی رو می‌گیره —
  // بعد از رندر، موقعیت تریگرها و ارتفاع اسپیسر باید رفرش شه
  useEffect(() => {
    const t = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 120);
    return () => clearTimeout(t);
  }, [pathname]);

  useEffect(() => {
    // تاچ خالص/موبایل و کاربرانی که کاهش حرکت خواستن → اسکرول نیتیو
    // (لپ‌تاپ‌های لمسی ویندوزی maxTouchPoints>0 دارن ولی پوینتر ظریف دارن
    //  — پس فقط وقتی pointer:coarse واقعاً تاچ باشه کنار می‌ریم)
    const coarseTouch =
      ScrollTrigger.isTouch === 1 &&
      window.matchMedia?.("(pointer: coarse)").matches;
    const wantNative = coarseTouch || reducedMotion();

    // همیشه (حتی در حالت نیتیو) اسموثرِ مانده از قبل رو بکش —
    // وگرنه body height کاذب اسپیسر باقی می‌مونه و صفحه ری‌پارسی/لگ می‌خوره
    if (smoother) {
      smoother.kill(true);
      smoother = null;
      document.documentElement.removeAttribute("data-smoother");
    }
    if (wantNative) return;

    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: lag, // ثانیه تأخیر نرم — کوتاه تا حس «لغزش بی‌روم» نده
      effects: false, // data-speed/lag خودکار خاموش؛ پارالاکس از scrollAnimations مدیریت می‌شه
      ignoreMobileResize: true,
    });
    // پرچم: اسکرول‌های native-css (scroll-behavior) غیرفعال بشن تا با رفر اسموثر قاطی نشن
    document.documentElement.setAttribute("data-smoother", "on");
    if (location.hostname === "localhost") window.__smoother = smoother; // dev probe

    return () => {
      smoother?.kill(true);
      smoother = null;
      document.documentElement.removeAttribute("data-smoother");
    };
  }, [lag]);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content" ref={contentRef}>
        {children}
      </div>
    </div>
  );
}
