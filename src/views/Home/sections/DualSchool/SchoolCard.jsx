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
      <span className="absolute left-0.5 top-0.5 w-[0.375rem] h-[0.375rem] rounded-full bg-white/80" />
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
      className={`${t.rotate} relative h-full transition-all duration-300 ease-out hover:rotate-0 hover:-translate-y-1`}
    >
      {/* کارت اصلی */}
      <div
        className={`relative ${t.bg} text-white p-5 xs:p-6 sm:p-8 lg:p-10 overflow-hidden h-full min-h-[19rem] xs:min-h-[20.5rem] sm:min-h-[22rem] lg:min-h-[24rem] flex flex-col justify-between border-2 border-white/10 rounded-[1.75rem] sm:rounded-[2.5rem] lg:rounded-[3rem] [corner-shape:squircle] shadow-xl transition-all duration-300 hover:shadow-2xl`}
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

        {/* ۱. بخش بالا: ۱. عنوان، ۲. رشته، ۳. آدرس */}
        <div className="relative z-10 flex flex-col gap-2 xs:gap-2.5 sm:gap-3 w-full">
          {/* خط اول: عنوان هنرستان — تک‌خطی */}
          <h3 className="font-black text-[1.45rem] xs:text-[1.625rem] sm:text-[2rem] lg:text-[2.25rem] leading-tight whitespace-nowrap">
            {title}
          </h3>

          {/* خط دوم: بج رشته — در سمت چپ */}
          <div className="flex items-center justify-end w-full">
            {chips.map((chip) => (
              <span
                key={chip}
                className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-xs font-bold text-[0.75rem] xs:text-[0.8125rem] sm:text-[0.875rem] rounded-chip px-3 py-1 sm:py-1.5 whitespace-nowrap shadow-xs"
              >
                <DotBullet />
                {chip}
              </span>
            ))}
          </div>

          {/* خط سوم: آدرس و لوکیشن — تک‌خطی */}
          <p className="text-[0.875rem] xs:text-[0.9375rem] sm:text-[1rem] opacity-90 font-medium leading-normal whitespace-nowrap">
            {meta}
          </p>
        </div>

        {/* متن توضیح برای سئو */}
        {seoText && <p className="sr-only">{seoText}</p>}

        {/* ۲. بخش پایین: دکمه ثبت‌نام و عکس کاراکتر کنار هم در پایین کارت */}
        <div className="relative z-10 mt-4 sm:mt-8 flex flex-row items-end justify-between w-full">
          {/* دکمه پیش‌ثبت‌نام */}
          <button
            type="button"
            onClick={() => openEnrollment()}
            className={`inline-flex items-center justify-center bg-white font-black text-[0.8125rem] xs:text-[0.875rem] sm:text-[0.9375rem] rounded-xl px-4 xs:px-5 sm:px-7 py-2.5 sm:py-3 ${t.ctaText} shadow-[0_4px_14px_rgba(0,0,0,0.15)] transition-all duration-200 hover:scale-105 active:scale-[0.98] cursor-pointer shrink-0 mb-1 sm:mb-0`}
          >
            {ctaLabel}
          </button>

          {/* عکس کاراکتر — بزرگ، واضح و جذاب در گوشه پایین */}
          {illustration && (
            <div className="relative -mb-5 xs:-mb-6 sm:-mb-8 lg:-mb-10 -ml-3 xs:-ml-4 sm:absolute sm:bottom-0 sm:left-0 lg:left-2 flex items-end justify-end pointer-events-none select-none">
              <img
                src={illustration}
                alt=""
                aria-hidden="true"
                className="h-[11rem] xs:h-[12.5rem] sm:h-[17.5rem] lg:h-[20.5rem] xl:h-[22.5rem] w-auto object-contain object-bottom drop-shadow-[0_8px_16px_rgba(0,0,0,0.2)]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}