"use client";

import { useEffect } from "react";
import { scrollToTarget, setScrollTop, getSmoother } from "./ScrollSmooth";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollToHash() {
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (!hash) return;
      const el = document.getElementById(hash.replace("#", ""));
      if (el) {
        // موقعیت‌های قدیمی (قبل از settle شدن اسموثر/تریگرها) باعث کم‌رفتن
        // مقصد می‌شن: اول رفرش، بعد چند فریم که رفرش نهایی بشه اسکرول می‌زنیم
        ScrollTrigger.refresh();
        setTimeout(
          () => scrollToTarget(el, { smooth: true, position: "top top" }),
          60
        );
      }
    };

    // کلیک روی لنگرهای همان‌صفحه (مثل /#schools در هدر):
    // Next Link این‌ها را با pushState جابه‌جا می‌کند و هیچ hashchange/popstate
    // نمی‌تابد — پس خودمان در capture می‌گیریم و اسکرول نرم GSAP می‌زنیم
    const onClick = (e) => {
      const a = e.target instanceof Element ? e.target.closest("a[href]") : null;
      if (!a) return;
      try {
        const url = new URL(a.href, location.href);
        if (
          url.pathname === location.pathname &&
          url.hash &&
          document.getElementById(url.hash.slice(1))
        ) {
          e.preventDefault();
          history.pushState(null, "", url);
          scrollToTarget(
            document.getElementById(url.hash.slice(1)),
            { smooth: true, position: "top top" }
          );
        }
      } catch (_) {
        /* لینک خارجی/ناسالم — رها کن */
      }
    };

    // ورود مستقیم با #hash (load/refresh) — بعد از آماده‌شدن ScrollSmoother
    const t = setTimeout(scrollToHash, 150);
    window.addEventListener("hashchange", scrollToHash);
    window.addEventListener("popstate", scrollToHash);
    document.addEventListener("click", onClick, true);
    return () => {
      clearTimeout(t);
      window.removeEventListener("hashchange", scrollToHash);
      window.removeEventListener("popstate", scrollToHash);
      document.removeEventListener("click", onClick, true);
    };
  }, []);

  return null;
}
