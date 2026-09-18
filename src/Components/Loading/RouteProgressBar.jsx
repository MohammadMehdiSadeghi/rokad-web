"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function RouteProgressBar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // When route changes, quickly finish loading progress
    setProgress(100);
    const timer = setTimeout(() => {
      setLoading(false);
      setProgress(0);
    }, 300);

    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  useEffect(() => {
    // Listen for internal Link clicks to show instant progress bar
    const handleClick = (e) => {
      const target = e.target.closest("a");
      if (
        target &&
        target.href &&
        target.href.startsWith(window.location.origin) &&
        !target.href.includes("#") &&
        target.target !== "_blank" &&
        target.pathname !== window.location.pathname
      ) {
        setLoading(true);
        setProgress(35);
        setTimeout(() => setProgress(75), 150);
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  if (!loading && progress === 0) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-[100] h-[3px] bg-transparent pointer-events-none"
    >
      <div
        className="h-full bg-gradient-to-r from-[#59BBAF] via-[#E0195B] to-[#F8A41D] transition-all duration-300 ease-out shadow-[0_0_8px_rgba(89,187,175,0.6)]"
        style={{
          width: `${progress}%`,
          opacity: loading || progress > 0 ? 1 : 0,
        }}
      />
    </div>
  );
}
