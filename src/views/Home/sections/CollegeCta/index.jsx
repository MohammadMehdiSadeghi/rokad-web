"use client";

import Container from "../../../../layout/Container";
import { ChevronLeftIcon } from "../../../../common/Icons";

const sectionPattern = "/assets/Pattern/layout-pattern.png";

/* =========================================================
   DATA — ۸ دپارتمان کالج رکاد
========================================================= */

const departments = [
  {
    id: 1,
    title: "طراحی سایت",
    meta: "HTML · CSS · WordPress",
    theme: "amber",
  },
  {
    id: 2,
    title: "برنامه‌نویسی",
    meta: "Python · JavaScript",
    theme: "teal",
  },
  {
    id: 3,
    title: "طراحی گرافیک",
    meta: "Figma · Photoshop",
    theme: "teal",
  },
  {
    id: 4,
    title: "تولید محتوا",
    meta: "نوشتن · سئو · سوشال",
    theme: "amber",
  },
  {
    id: 5,
    title: "MBA نوجوان",
    meta: "مدیریت و کسب‌وکار",
    theme: "amber",
  },
  {
    id: 6,
    title: "رویدادهای کارآفرینی",
    meta: "استارتاپ ویکند · هکاتون",
    theme: "teal",
  },
  {
    id: 7,
    title: "IELTS",
    meta: "آمادگی آکادمیک زبان",
    theme: "teal",
  },
  {
    id: 8,
    title: "Free Discussion",
    meta: "مکالمهٔ آزاد انگلیسی",
    theme: "amber",
  },
];

/* =========================================================
   THEMES
========================================================= */

const THEMES = {
  amber: {
    color: "#F8A41D",
    dark: "#BA7B16",
    tint: "#FEF6E8",
    iconBg: "#FEF6E8",
    iconColor: "#BA7B16",
    dotColor: "#BA7B16",
  },
  teal: {
    color: "#59BBAF",
    dark: "#438C83",
    tint: "#EEF8F7",
    iconBg: "#EEF8F7",
    iconColor: "#438C83",
    dotColor: "#438C83",
  },
};

/* =========================================================
   ICONS (SVG inline)
========================================================= */

function DeptIcon({ type }) {
  const icons = {
    "طراحی سایت": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M2 20h20"/></svg>
    ),
    "برنامه‌نویسی": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
    ),
    "طراحی گرافیک": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22a10 10 0 1 1 0-20 8 8 0 0 1 8 8c0 3-2 5-4 5h-2a2 2 0 0 0 0 4 3 3 0 0 1-2 3z"/></svg>
    ),
    "تولید محتوا": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16v14H4z"/><path d="M8 9h10M8 13h7"/></svg>
    ),
    "MBA نوجوان": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l9 4-9 4-9-4z"/><path d="M3 12l9 4 9-4"/></svg>
    ),
    "رویدادهای کارآفرینی": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
    ),
    "IELTS": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/></svg>
    ),
    "Free Discussion": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
    ),
  };
  return icons[type] || icons["طراحی سایت"];
}

/* =========================================================
   DEPT CARD — کارت دو لایه دپارتمان
========================================================= */

function DeptCard({ dept, index }) {
  const t = THEMES[dept.theme];
  const rots = [-1.5, 1, -1, 1.5, 1.5, -1, 1, -1.5];
  const rotate = rots[index % rots.length];

  return (
    <div
      className="relative"
      style={{ transform: `rotate(${rotate}deg)`, transition: "transform 300ms ease-out" }}
    >
      {/* سایه پشتی */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[#292827] rounded-[0_2rem_0_2rem] [corner-shape:squircle]"
        style={{ transform: "translate(0.3125rem, 0.3125rem)" }}
      />
      {/* کارت جلو */}
      <div
        className="relative z-10 border-[0.1875rem] rounded-[0_2rem_0_2rem] [corner-shape:squircle] p-4 sm:p-5 flex flex-col gap-3 min-h-[9rem] sm:min-h-[10rem] transition-transform hover:rotate-0 hover:-translate-y-1"
        style={{ background: t.tint, borderColor: t.color }}
      >
        {/* شماره */}
        <span
          className="absolute top-3 left-3 text-[0.75rem] font-extrabold"
          style={{ color: t.color, opacity: 0.4 }}
        >
          {`۰${dept.id}`}
        </span>

        {/* آیکون */}
        <div
          className="w-11 h-11 flex items-center justify-center border-2 border-[#292827] rounded-[0.875rem_0_0.875rem_0] [corner-shape:squircle]"
          style={{ background: t.iconBg, color: t.iconColor }}
        >
          <span className="w-5 h-5">
            <DeptIcon type={dept.title} />
          </span>
        </div>

        {/* عنوان */}
        <h3
          className="font-extrabold text-[1rem] sm:text-[1.0625rem] leading-[1.35]"
          style={{ color: "#292827" }}
        >
          {dept.title}
        </h3>

        {/* متا */}
        <div
          className="flex items-center gap-1.5 text-[0.75rem] font-semibold mt-auto"
          style={{ color: "#777777" }}
        >
          <span
            className="w-2 h-2 rounded-full shrink-0"
            style={{ background: t.color }}
          />
          {dept.meta}
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   MAIN SECTION — V1: College CTA Grid
========================================================= */

export default function CollegeCta() {
  return (
    <section
      id="college-cta"
      dir="rtl"
      className="relative overflow-hidden bg-white pt-[4rem] sm:pt-[5rem] lg:pt-[6rem] pb-[4rem] sm:pb-[5rem] lg:pb-[6rem] px-4 sm:px-6 lg:px-8"
    >
      {/* ── Background Pattern Layer ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-60
                [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]
                [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]"
      >
        <img
          src={sectionPattern}
          alt=""
          draggable="false"
          className="w-full h-full object-cover select-none"
        />
      </div>

      <Container className="relative z-10">
        {/* ════ HEADER ════ */}
        <div className="mb-10 lg:mb-12">
          {/* Eyebrow badge */}
          <span
            className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#59BBAF] text-white border-2 border-[#292827] rounded-full font-extrabold text-[0.8125rem] -rotate-2 shadow-[3px_3px_0_#292827] mb-5"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
            ویژه دبیرستانی‌ها
          </span>

          {/* تیتر بزرگ */}
          <h2 className="font-black text-[2rem] sm:text-[2.75rem] lg:text-[4rem] leading-[1.05] tracking-tight">
            <span className="inline-block -rotate-1 ml-1">کالج</span>
            <span
              className="inline-block rotate-[1.5deg] ml-1 px-3 sm:px-4 rounded-[1rem_0_1rem_0] [corner-shape:squircle] border-2 border-[#292827] shadow-[4px_4px_0_#59BBAF]"
              style={{ background: "#F8A41D", color: "#292827" }}
            >
              رکاد
            </span>
            <span className="inline-block -rotate-[0.5deg] ml-1">کنار برنامهٔ درسی‌ات</span>
          </h2>

          {/* زیرنویس */}
          <p className="mt-3 sm:mt-4 text-[0.9375rem] sm:text-[1rem] font-semibold leading-[1.85] text-[#777777] max-w-[42rem]">
            <b style={{ color: "#BA7B16" }}>دپارتمان‌های تخصصی کالج رکاد</b>،
            از فناوری اطلاعات تا زبان و کسب‌وکار، کنار برنامه‌ی درسی مدرسه‌ات
            می‌شینن و مهارتی رو یاد می‌گیری که <b style={{ color: "#438C83" }}>همین حالا</b> باهاش کار می‌کنی.
          </p>
        </div>

        {/* ════ GRID 8 دپارتمان ════ */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 items-stretch mb-10 lg:mb-12">
          {departments.map((dept, i) => (
            <DeptCard key={dept.id} dept={dept} index={i} />
          ))}
        </div>

        {/* ════ CTA BAR ════ */}
        <div className="relative">
          {/* سایه پشتی CTA بار */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[#292827] rounded-[1.75rem_0_1.75rem_0] [corner-shape:squircle]"
            style={{ transform: "translate(0.375rem, 0.375rem)" }}
          />
          <div
            className="relative z-10 border-[0.1875rem] border-[#292827] rounded-[1.75rem_0_1.75rem_0] [corner-shape:squircle] overflow-hidden"
            style={{ background: "#FEF6E8" }}
          >
            {/* پترن نقطه‌ای روی CTA */}
            <div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none opacity-20"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, #BA7B16 1px, transparent 1.5px)`,
                backgroundSize: "22px 22px",
                maskImage: "linear-gradient(to left, transparent, black 40%)",
                WebkitMaskImage: "linear-gradient(to left, transparent, black 40%)",
              }}
            />

            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 p-6 sm:p-8 lg:p-10">
              <div>
                <div className="text-[1.25rem] sm:text-[1.5rem] font-black leading-[1.3]">
                  جای <span className="inline-block -rotate-1 px-2 rounded-[0.5rem_0_0.5rem_0] [corner-shape:squircle] bg-[#59BBAF] text-white border-2 border-[#292827] mx-1">مسیر شغلی</span> نوجوونت رو الان رزرو کن
                </div>
                <div className="mt-1.5 text-[0.875rem] font-semibold" style={{ color: "#777777" }}>
                  ثبت‌نام ورودی جدید کالج باز شد — ظرفیت محدوده
                </div>
              </div>

              {/* دکمه CTA دو لایه */}
              <div className="relative inline-block shrink-0 -rotate-2 hover:rotate-0 transition-transform">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[#292827] rounded-[0.875rem_0_0.875rem_0] [corner-shape:squircle]"
                  style={{ transform: "translate(0.25rem, 0.25rem)" }}
                />
                <a
                  href="#"
                  className="relative z-10 inline-flex items-center gap-2.5 px-6 py-3 border-2 border-[#292827] rounded-[0.875rem_0_0.875rem_0] [corner-shape:squircle] font-extrabold text-[0.9375rem]"
                  style={{ background: "#F8A41D", color: "#292827" }}
                >
                  ثبت‌نام در کالج رکاد
                  <ChevronLeftIcon className="w-4.5 h-4.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}