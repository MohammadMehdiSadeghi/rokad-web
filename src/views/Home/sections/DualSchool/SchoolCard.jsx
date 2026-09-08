// SchoolCard.jsx
"use client";

import { useEnrollment } from "../../../../lib/EnrollmentContext";

const THEMES = {
  boys: {
    rotate: "rotate-0 sm:rotate-1",
    bg: "bg-navy-alt",
    ctaText: "text-navy-alt",
  },
  girls: {
    rotate: "rotate-0 sm:-rotate-1",
    bg: "bg-magenta",
    ctaText: "text-magenta",
  },
};

function DotBullet() {
  return (
    <span className="relative w-2.5 h-2.5 sm:w-3 sm:h-3 flex-shrink-0">
      <span className="absolute inset-0 rounded-full bg-white/60" />
      <span className="absolute left-0.5 top-0.5 w-[0.375rem] sm:w-[0.4375rem] h-[0.375rem] sm:h-[0.4375rem] rounded-full bg-white/75" />
    </span>
  );
}

export default function SchoolCard({
  theme,
  category,
  title,
  meta,
  chips,
  ctaLabel,
  illustration,
  pattern,
  seoText,
}) {
  const { openEnrollment } = useEnrollment();
  const t = THEMES[theme] || THEMES.boys;

  return (
    <div
      className={`${t.rotate} relative h-full transition-all duration-500 ease-out hover:rotate-0 hover:-translate-y-1.5`}
    >
      {/* کارت اصلی */}
      <div
        className={`relative ${t.bg} text-white p-5 xs:p-6 sm:p-8 lg:p-10 overflow-hidden h-full min-h-[19rem] xs:min-h-[20.5rem] sm:min-h-[18rem] lg:min-h-[22rem] flex flex-col border-2 border-white/10 rounded-[1.75rem] sm:rounded-[2.75rem] lg:rounded-[3.25rem] [corner-shape:squircle] transition-all duration-500 hover:shadow-2xl`}
      >
        {/* ── Background Pattern ── */}
        {pattern && (
          <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
            <img
              src={pattern}
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover opacity-80 mix-blend-overlay"
            />
          </div>
        )}

        {/* ── Desktop Layout (sm+) — دقیقاً حالت اول چت ── */}
        <div className="hidden sm:flex relative z-10 flex-col justify-between flex-1 max-w-[70%] ml-auto">
          {/* Title */}
          <h3 className="font-black text-[1.625rem] sm:text-[2.125rem] lg:text-[2.25rem] leading-tight">
            {title}
          </h3>

          {/* Chips */}
          <div className="flex flex-col items-start gap-1 sm:gap-1.5">
            {chips.map((chip) => (
              <span
                key={chip}
                className="-rotate-2 flex items-center gap-2 bg-white/[0.15] font-semibold text-[1rem] sm:text-[1.0625rem] rounded-chip px-2.5 py-1 sm:px-3.5 sm:py-2"
              >
                <DotBullet />
                {chip}
              </span>
            ))}
          </div>

          {/* Meta */}
          <p className="text-[1rem] sm:text-[1.0625rem] opacity-80">{meta}</p>

          {/* Button */}
          <button
            type="button"
            onClick={openEnrollment}
            className={`self-start rotate-[1.5deg] bg-white font-extrabold text-[0.9375rem] rounded-[0.5rem] px-5 sm:px-7 py-2.5 sm:py-3 ${t.ctaText} transition-transform duration-300 hover:scale-105 hover:rotate-0 cursor-pointer`}
          >
            {ctaLabel}
          </button>
        </div>

        {/* Illustration on Desktop (sm+) — مثل حالت اول چت */}
        {illustration && (
          <img
            src={illustration}
            alt=""
            aria-hidden="true"
            className="hidden sm:block pointer-events-none select-none absolute bottom-0 left-0 h-[12rem] sm:h-[15rem] lg:h-[17rem] w-auto opacity-95 z-[1]"
          />
        )}

        {/* ── Mobile Layout (< sm) — کامپکت و متناسب برای موبایل ── */}
        <div className="sm:hidden relative z-10 flex flex-col justify-between h-full flex-1">
          {/* بالا: عنوان، رشته، آدرس */}
          <div className="flex flex-col gap-2 w-full">
            <h3 className="font-black text-[1.45rem] xs:text-[1.625rem] leading-tight whitespace-nowrap">
              {title}
            </h3>

            <div className="flex items-center justify-end w-full">
              {chips.map((chip) => (
                <span
                  key={chip}
                  className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-xs font-bold text-[0.75rem] xs:text-[0.8125rem] rounded-chip px-3 py-1 whitespace-nowrap"
                >
                  <DotBullet />
                  {chip}
                </span>
              ))}
            </div>

            <p className="text-[0.875rem] xs:text-[0.9375rem] opacity-90 font-medium leading-normal whitespace-nowrap">
              {meta}
            </p>
          </div>

          {/* پایین: دکمه و کاراکتر */}
          <div className="mt-4 flex flex-row items-end justify-between w-full">
            <button
              type="button"
              onClick={openEnrollment}
              className={`inline-flex items-center justify-center bg-white font-black text-[0.8125rem] xs:text-[0.875rem] rounded-xl px-4 xs:px-5 py-2.5 ${t.ctaText} shadow-md active:scale-[0.98] cursor-pointer shrink-0 mb-1`}
            >
              {ctaLabel}
            </button>

            {illustration && (
              <div className="relative -mb-5 xs:-mb-6 -ml-3 xs:-ml-4 flex items-end justify-end pointer-events-none select-none">
                <img
                  src={illustration}
                  alt=""
                  aria-hidden="true"
                  className="h-[11rem] xs:h-[12.5rem] w-auto object-contain object-bottom drop-shadow-md"
                />
              </div>
            )}
          </div>
        </div>

        {/* متن سئو */}
        {seoText && <p className="sr-only">{seoText}</p>}
      </div>
    </div>
  );
}