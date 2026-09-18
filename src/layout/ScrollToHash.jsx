"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToHash() {
  const pathname = usePathname();

  useEffect(() => {
    let cancelled = false;

    const performScroll = () => {
      if (typeof window === "undefined") return;
      const hash = window.location.hash;

      if (!hash) {
        window.scrollTo({ top: 0, behavior: "instant" });
        return;
      }

      const targetId = hash.replace("#", "");
      let attempts = 0;
      const maxAttempts = 25; // Try for ~2.5 seconds to accommodate dynamic imports

      const tryScrollToElement = () => {
        if (cancelled) return;
        const el = document.getElementById(targetId);

        if (el) {
          // Calculate offset accounting for fixed header height
          const headerOffset = window.innerWidth >= 1024 ? 90 : 70;
          const elementPosition = el.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: Math.max(0, offsetPosition),
            behavior: "smooth",
          });
        } else if (attempts < maxAttempts) {
          attempts++;
          setTimeout(tryScrollToElement, 100);
        }
      };

      tryScrollToElement();
    };

    const timer = setTimeout(performScroll, 60);
    window.addEventListener("hashchange", performScroll);

    return () => {
      cancelled = true;
      clearTimeout(timer);
      window.removeEventListener("hashchange", performScroll);
    };
  }, [pathname]);

  return null;
}
