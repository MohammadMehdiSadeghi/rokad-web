import { useEffect, useRef, useState } from "react";
import Container from "../../../../layout/Container";
import { UserIcon } from "../../../../common/Icons";

const ecosystemPattern = "/assets/Shared/Patterns/Ecosystem-Pattern.png";

const cards = [
  {
    title: "مسیر رشد شخصی‌سازی‌شده",
    body: "استعدادسنجی دقیق و طراحی نقشه‌ی راهی که فقط مال توئه؛ نه به مسیر یکسان برای همه.",
    tilt: -1.5,
  },
  {
    title: "مسیر رشد شخصی‌سازی‌شده",
    body: "استعدادسنجی دقیق و طراحی نقشه‌ی راهی که فقط مال توئه؛ نه به مسیر یکسان برای همه.",
    featured: true,
    tilt: 1.2,
  },
  {
    title: "مسیر رشد شخصی‌سازی‌شده",
    body: "استعدادسنجی دقیق و طراحی نقشه‌ی راهی که فقط مال توئه؛ نه به مسیر یکسان برای همه.",
    tilt: -1,
  },
  {
    title: "مسیر رشد شخصی‌سازی‌شده",
    body: "استعدادسنجی دقیق و طراحی نقشه‌ی راهی که فقط مال توئه؛ نه به مسیر یکسان برای همه.",
    tilt: 1.5,
  },
  {
    title: "مسیر رشد شخصی‌سازی‌شده",
    body: "استعدادسنجی دقیق و طراحی نقشه‌ی راهی که فقط مال توئه؛ نه به مسیر یکسان برای همه.",
    tilt: 1,
  },
  {
    title: "مسیر رشد شخصی‌سازی‌شده",
    body: "استعدادسنجی دقیق و طراحی نقشه‌ی راهی که فقط مال توئه؛ نه به مسیر یکسان برای همه.",
    tilt: -1.2,
  },
  {
    title: "مسیر رشد شخصی‌سازی‌شده",
    body: "استعدادسنجی دقیق و طراحی نقشه‌ی راهی که فقط مال توئه؛ نه به مسیر یکسان برای همه.",
    tilt: 1.5,
  },
  {
    title: "مسیر رشد شخصی‌سازی‌شده",
    body: "استعدادسنجی دقیق و طراحی نقشه‌ی راهی که فقط مال توئه؛ نه به مسیر یکسان برای همه.",
    tilt: -1,
  },
];

/**
 * این هوک مشخص می‌کنه از بین یه لیست از عنصرها (refs)، کدوم یکی
 * از نظر «مرکز عنصر» به «مرکز صفحه (50vh)» نزدیک‌تره.
 * فقط زیر یک breakpoint خاص (پیش‌فرض 1024px = lg) فعال می‌شه،
 * چون تو دسکتاپ همون :hover واقعی کارو انجام می‌ده.
 */
function useClosestToCenter(
  count,
  { minPercent = 30, maxPercent = 70, disableAboveWidth = 1024 } = {},
) {
  const itemRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const checkWidth = () => setEnabled(window.innerWidth < disableAboveWidth);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, [disableAboveWidth]);

  useEffect(() => {
    if (!enabled) {
      setActiveIndex(null);
      return;
    }

    let rafId = null;

    const compute = () => {
      const vh = window.innerHeight;
      const zoneTop = vh * (minPercent / 100);
      const zoneBottom = vh * (maxPercent / 100);
      const viewportCenter = vh / 2;

      let bestIndex = null;
      let bestDistance = Infinity;

      itemRefs.current.forEach((node, i) => {
        if (!node) return;
        const rect = node.getBoundingClientRect();
        const elCenter = rect.top + rect.height / 2;

        if (elCenter < zoneTop || elCenter > zoneBottom) return;

        const distance = Math.abs(elCenter - viewportCenter);
        if (distance < bestDistance) {
          bestDistance = distance;
          bestIndex = i;
        }
      });

      setActiveIndex(bestIndex);
    };

    const onScrollOrResize = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        compute();
        rafId = null;
      });
    };

    compute();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [enabled, minPercent, maxPercent]);

  const setRef = (index) => (node) => {
    itemRefs.current[index] = node;
  };

  return { setRef, activeIndex };
}

function EcoCard({ title, body, featured, tilt, isActive, cardRef }) {
  return (
    <article
      ref={cardRef}
      style={{ "--tilt": `${tilt}deg` }}
      data-active={isActive || undefined}
      className={`
        group p-3 xs:p-4 sm:p-6 flex flex-col gap-2 sm:gap-4
        backdrop-blur-[19.06px] rotate-[var(--tilt)] hover:rotate-0
        transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
        hover:-translate-y-1.5 hover:shadow-[0_15px_40px_-5px_rgba(89,187,175,0.25)]

        bg-[#FFFFFF12] hover:bg-[#59BBAF]
        border-[0.11875rem] border-[#59BBAF] hover:border-[#FFFFFF]
        rounded-[0_1.90875rem_0_1.90875rem] [corner-shape:squircle]

        ${isActive ? "-translate-y-1.5 shadow-[0_15px_40px_-5px_rgba(89,187,175,0.25)] bg-[#59BBAF] border-[#FFFFFF] rotate-0" : ""}
      `}
    >
      {/* Icon */}
      <div
        className={`
          w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 flex items-center justify-center flex-shrink-0
          transition-colors duration-500
          rounded-[0.62625rem_0_0.62625rem_0] [corner-shape:squircle]
          bg-[#58BDAF] group-hover:bg-[#202A5A]
          ${isActive ? "bg-[#202A5A]" : ""}
        `}
      >
        <span
          className={`w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-[#0e1633] group-hover:text-white transition-colors duration-300 ${
            isActive ? "text-white" : ""
          }`}
        >
          <UserIcon />
        </span>
      </div>

      {/* Text */}
      <div>
        <h4 className="font-black text-[0.75rem] xs:text-[0.8125rem] sm:text-[1.125rem] text-white mb-1 sm:mb-2 leading-snug transition-colors duration-300">
          {title}
        </h4>
        <p
          className={`text-[0.5625rem] xs:text-[0.625rem] sm:text-[0.8125rem] leading-[1.7] sm:leading-[1.85] text-white/60 group-hover:text-white/90 transition-colors duration-300 line-clamp-3 sm:line-clamp-none ${
            isActive ? "text-white/90" : ""
          }`}
        >
          {body}
        </p>
      </div>
    </article>
  );
}

export default function Ecosystem() {
  const { setRef, activeIndex } = useClosestToCenter(cards.length, {
    minPercent: 30,
    maxPercent: 70,
  });

  return (
      <section
        className="py-[6.25rem] sm:py-[6.875rem] lg:py-[8.125rem] px-4 sm:px-6 relative overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse at 30% 20%, #1c2c60 0%, #0e1633 60%, #0b1228 100%)",
        }}
      >
        {/* ── Background Pattern Layer ── */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <img
            src={ecosystemPattern}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        {/* Subtle decorative blobs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
          <div className="absolute -top-20 -right-20 w-[26.25rem] h-[26.25rem] rounded-full bg-teal/10 blur-[5.625rem]" />
          <div className="absolute bottom-0 left-0 w-[18.75rem] h-[18.75rem] rounded-full bg-navy/40 blur-[4.375rem]" />
        </div>

        <Container className="relative z-10">
          {/* Heading */}
          <h2 className="text-center font-black text-[1.375rem] xs:text-[1.5rem] sm:text-[2.375rem] lg:text-[2.875rem] leading-[1.3] text-white mb-3 sm:mb-4 flex flex-wrap justify-center items-center gap-x-2">
            <span className="inline-block -rotate-[1.9deg]">یه</span>
            <span className="inline-block rotate-[1.9deg] text-teal">
              اکوسیستم
            </span>
            <span className="inline-block -rotate-[1.9deg]">کامل</span>
            <span className="inline-block rotate-[1.9deg]">برای</span>
            <span className="inline-block -rotate-[1.9deg]">رشد</span>
          </h2>

          <p className="text-center font-medium text-[0.75rem] xs:text-[0.8125rem] sm:text-[1rem] leading-[1.9] text-white/60  mx-auto mb-6 sm:mb-16">
            از استعدادسنجی تا اولین شغلت، تمام گام‌های مسیر با پشتیبانی متخصصان طی
            می‌شه.
          </p>

          {/* Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 xs:gap-3 sm:gap-5">
            {cards.map((c, i) => (
              <EcoCard
                key={i}
                {...c}
                isActive={activeIndex === i}
                cardRef={setRef(i)}
              />
            ))}
          </div>
        </Container>
      </section>
    );
  }