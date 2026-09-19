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
        className={`relative ${t.bg} text-white p-4 xs:p-5 sm:p-8 lg:p-10 overflow-hidden h-full min-h-[10.5rem] xs:min-h-[11.75rem] sm:min-h-[18rem] lg:min-h-[22rem] flex flex-col justify-between border-2 border-white/10 rounded-[1.5rem] xs:rounded-[1.75rem] sm:rounded-[2.75rem] lg:rounded-[3.25rem] [corner-shape:squircle] transition-all duration-500 hover:shadow-2xl`}
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

        {/* ── Desktop Layout (sm+) ── */}
        <div className="hidden sm:flex relative z-10 flex-col justify-between flex-1 max-w-[70%] ml-auto">
          {/* Title */}
          <h3 className="font-black text-[1.375rem] sm:text-[1.625rem] lg:text-[1.875rem] leading-tight">
            {title}
          </h3>

          {/* Chips */}
          <div className="flex flex-col items-start gap-1 sm:gap-1.5">
            {chips.map((chip) => (
              <span
                key={chip}
                className="-rotate-2 flex items-center gap-2 bg-white/[0.15] font-semibold text-[0.875rem] sm:text-[0.9375rem] rounded-chip px-2.5 py-1 sm:px-3.5 sm:py-1.5"
              >
                <DotBullet />
                {chip}
              </span>
            ))}
          </div>

          {/* Meta */}
          <p className="text-[0.875rem] sm:text-[0.9375rem] opacity-80">{meta}</p>

          {/* Button */}
          <button
            type="button"
            onClick={openEnrollment}
            className={`self-start rotate-[1.5deg] bg-white font-extrabold text-[0.875rem] rounded-[0.5rem] px-5 sm:px-7 py-2 sm:py-2.5 ${t.ctaText} transition-transform duration-300 hover:scale-105 hover:rotate-0 cursor-pointer`}
          >
            {ctaLabel}
          </button>
        </div>

        {/* Illustration on Desktop (sm+) */}
        {illustration && (
          <img
            src={illustration}
            alt=""
            aria-hidden="true"
            className="hidden sm:block pointer-events-none select-none absolute bottom-0 left-0 h-[12rem] sm:h-[15rem] lg:h-[17rem] w-auto opacity-95 z-[1]"
          />
        )}

        {/* ── Mobile Layout (< sm) — مستطیلی افقی و شیک زیر هم ── */}
        <div className="sm:hidden relative z-10 flex flex-col justify-between h-full flex-1 max-w-[62%] xs:max-w-[65%] gap-2">
          {/* بالا: عنوان، رشته، آدرس */}
          <div className="flex flex-col gap-1.5 w-full">
            <h3 className="font-black text-[1rem] xs:text-[1.0625rem] leading-tight text-white">
              {title}
            </h3>

            <div className="flex items-center gap-1 w-full">
              {chips.map((chip) => (
                <span
                  key={chip}
                  className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-xs font-bold text-[0.6875rem] xs:text-[0.75rem] rounded-chip px-2.5 py-0.5 whitespace-nowrap"
                >
                  <DotBullet />
                  {chip}
                </span>
              ))}
            </div>

            <p className="text-[0.75rem] xs:text-[0.8125rem] opacity-90 font-medium leading-tight">
              {meta}
            </p>
          </div>

          {/* دکمه */}
          <div className="pt-1">
            <button
              type="button"
              onClick={openEnrollment}
              className={`inline-flex items-center justify-center bg-white font-black text-[0.78125rem] xs:text-[0.84375rem] rounded-lg px-3.5 xs:px-4 py-1.5 xs:py-2 ${t.ctaText} shadow-md active:scale-[0.98] cursor-pointer shrink-0`}
            >
              {ctaLabel}
            </button>
          </div>
        </div>

        {/* Illustration on Mobile (< sm) — چسبیده به پایین چپ کارت مستطیلی */}
        {illustration && (
          <img
            src={illustration}
            alt=""
            aria-hidden="true"
            className="sm:hidden pointer-events-none select-none absolute bottom-0 left-0 h-[9rem] xs:h-[10.25rem] w-auto object-contain object-bottom opacity-95 z-[1]"
          />
        )}

        {/* متن سئو */}
        {seoText && <p className="sr-only">{seoText}</p>}
      </div>
    </div>
  );
}