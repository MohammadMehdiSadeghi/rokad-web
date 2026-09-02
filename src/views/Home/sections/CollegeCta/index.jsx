"use client";

import Container from "../../../../layout/Container";
import { ChevronLeftIcon } from "../../../../common/Icons";

const sectionPattern = "/assets/Pattern/layout-pattern.png";

/* =========================================================
   DATA — برچسب‌های تخته (۸ دپارتمان)
========================================================= */

const stickies = [
  { id: 1, title: "طراحی سایت", meta: "HTML · CSS · WordPress", bg: "#FFC15C", top: 30, right: 40, w: 180, rotate: -4 },
  { id: 2, title: "برنامه‌نویسی", meta: "Python · JavaScript", bg: "#85CFC5", top: 50, right: 260, w: 200, rotate: 3 },
  { id: 3, title: "طراحی گرافیک", meta: "Figma · Photoshop", bg: "#FFD641", top: 70, right: 500, w: 190, rotate: -2 },
  { id: 4, title: "تولید محتوا", meta: "نوشتن · سئو · شبکه‌های اجتماعی", bg: "#FBE4E4", top: 40, right: 740, w: 200, rotate: 4 },
  { id: 5, title: "MBA نوجوان", meta: "مدیریت و کسب‌وکار", bg: "#EDE7F6", top: 260, right: 60, w: 220, rotate: 2 },
  { id: 6, title: "رویدادهای کارآفرینی", meta: "استارتاپ ویکند · هکاتون", bg: "#FFF6E6", top: 380, right: 60, w: 200, rotate: -3 },
  { id: 7, title: "IELTS", meta: "آمادگی آکادمیک زبان", bg: "#E4F4F2", top: 170, right: 800, w: 190, rotate: -1.5 },
  { id: 8, title: "Free Discussion", meta: "مکالمهٔ آزاد انگلیسی", bg: "#FFFFFF", top: 300, right: 800, w: 210, rotate: 3.5 },
];

/* =========================================================
   ICONS
========================================================= */

function DeptIcon({ type }) {
  const icons = {
    "طراحی سایت": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M2 20h20"/></svg>
    ),
    "برنامه‌نویسی": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
    ),
    "طراحی گرافیک": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22a10 10 0 1 1 0-20 8 8 0 0 1 8 8c0 3-2 5-4 5h-2a2 2 0 0 0 0 4 3 3 0 0 1-2 3z"/></svg>
    ),
    "تولید محتوا": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16v14H4z"/><path d="M8 9h10M8 13h7"/></svg>
    ),
    "MBA نوجوان": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l9 4-9 4-9-4z"/><path d="M3 12l9 4 9-4"/></svg>
    ),
    "رویدادهای کارآفرینی": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
    ),
    "IELTS": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/></svg>
    ),
    "Free Discussion": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
    ),
  };
  return icons[type] || icons["طراحی سایت"];
}

// ===== PART2 =====

/* =========================================================
   STICKY NOTE — برچسب کاغذی روی تخته
========================================================= */

function StickyNote({ s }) {
  return (
    <a
      href="#"
      className="absolute border-[0.15625rem] border-[#292827] rounded-[0.25rem_0.25rem_0.75rem_0.25rem] [corner-shape:squircle] px-4 py-[0.875rem] shadow-[3px_3px_0_#292827] hover:rotate-0 hover:scale-105 hover:z-10 transition-transform hidden lg:block"
      style={{
        top: `${s.top}px`,
        right: `${s.right}px`,
        width: `${s.w}px`,
        background: s.bg,
        transform: `rotate(${s.rotate}deg)`,
      }}
    >
      {/* پونز */}
      <div
        aria-hidden="true"
        className="absolute -top-[6px] left-1/2 -translate-x-1/2 w-[14px] h-[14px] bg-[#292827] rounded-full shadow-[0_2px_0_rgba(0,0,0,0.2)]"
      />
      <div className="font-black text-[0.9375rem] leading-[1.3]">{s.title}</div>
      <span className="block text-[0.71875rem] font-semibold text-[#777777] mt-1">{s.meta}</span>
    </a>
  );
}

/* =========================================================
   POLAROID CTA — کارت وسط تخته
========================================================= */

function PolaroidCta() {
  return (
    <div
      className="absolute top-[155px] left-1/2 -translate-x-1/2 -rotate-2 bg-white border-[0.1875rem] border-[#292827] p-3 pb-5 shadow-[6px_6px_0_#292827] z-5 w-[260px] text-center hidden lg:block"
    >
      {/* نوار چسب */}
      <div
        aria-hidden="true"
        className="absolute -top-[14px] left-1/2 -translate-x-1/2 rotate-6 w-[70px] h-6"
        style={{ background: "rgba(248,164,29,0.6)", border: "1px solid rgba(41,40,39,0.3)" }}
      />

      {/* عکس */}
      <div className="h-[130px] bg-[#F8A41D] flex items-center justify-center mb-3 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, #C57F0A 1px, transparent 1.5px)",
            backgroundSize: "20px 20px",
            opacity: 0.2,
          }}
        />
        <span className="relative z-10 bg-[#292827] text-[#F8A41D] px-3 py-2 rounded-[0.5rem_0_0.5rem_0] [corner-shape:squircle] font-black text-[1.125rem] -rotate-3">
          کالج رکاد
        </span>
      </div>

      <div className="font-extrabold text-[0.875rem] mb-3" style={{ color: "#292827" }}>
        مسیر شغلی نوجوونت 📌
      </div>

      {/* دکمه CTA دو لایه */}
      <div className="relative inline-block -rotate-1 hover:rotate-0 transition-transform">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[#292827] rounded-[0.875rem_0_0.875rem_0] [corner-shape:squircle]"
          style={{ transform: "translate(0.25rem, 0.25rem)" }}
        />
        <a
          href="#"
          className="relative z-10 inline-flex items-center gap-2 px-5 py-[0.625rem] border-2 border-[#292827] rounded-[0.875rem_0_0.875rem_0] [corner-shape:squircle] font-extrabold text-[0.875rem] whitespace-nowrap"
          style={{ background: "#F8A41D", color: "#292827" }}
        >
          همین حالا ثبت‌نام کن
          <ChevronLeftIcon className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

/* =========================================================
   MAIN SECTION — V9: Poster Board
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
        <img src={sectionPattern} alt="" draggable="false" className="w-full h-full object-cover select-none" />
      </div>

      <Container className="relative z-10">
        {/* ════ HEADER ════ */}
        <div className="text-center mb-10 lg:mb-12">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#59BBAF] text-white border-2 border-[#292827] rounded-full font-extrabold text-[0.8125rem] -rotate-2 shadow-[3px_3px_0_#292827] mb-5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
            ویژه دبیرستانی‌ها
          </span>

          <h2 className="font-black text-[2rem] sm:text-[2.75rem] lg:text-[3.375rem] leading-[1.05] tracking-tight">
            <span className="inline-block -rotate-1 ml-1">تختهٔ اعلانات</span>
            <span
              className="inline-block rotate-[1.5deg] ml-1 px-3 sm:px-4 rounded-[1rem_0_1rem_0] [corner-shape:squircle] border-2 border-[#292827] shadow-[4px_4px_0_#59BBAF]"
              style={{ background: "#F8A41D", color: "#292827" }}
            >
              کالج رکاد
            </span>
          </h2>

          <p className="mt-3 sm:mt-4 text-[0.9375rem] sm:text-[1rem] font-semibold leading-[1.85] text-[#777777] max-w-[36rem] mx-auto">
            هر برچسب یه دپارتمان — هر یکی رو که خواستی برداشتی و بردی روی برنامهٔ درسیت.
          </p>
        </div>

        {/* ════ BOARD (دسکتاپ) ════ */}
        <div
          className="relative bg-[#F6F6F6] border-[0.1875rem] border-[#292827] rounded-[1.25rem_0_1.25rem_0] [corner-shape:squircle] shadow-[8px_8px_0_#292827] min-h-[520px] p-8 sm:p-10 mb-8 hidden lg:block"
          style={{
            backgroundImage: `
              linear-gradient(rgba(41,40,39,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(41,40,39,0.04) 1px, transparent 1px)
            `,
            backgroundSize: "24px 24px",
          }}
        >
          {stickies.map((s) => (
            <StickyNote key={s.id} s={s} />
          ))}
          <PolaroidCta />
        </div>

        {/* ════ BOARD (موبایل/تبلت) — استیکی‌ها بهصورت ایستا ════ */}
        <div className="lg:hidden">
          <div
            className="border-[0.1875rem] border-[#292827] rounded-[1.25rem_0_1.25rem_0] [corner-shape:squircle] shadow-[6px_6px_0_#292827] p-5 sm:p-6 mb-6"
            style={{ background: "#F6F6F6" }}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {stickies.map((s) => (
                <a
                  key={s.id}
                  href="#"
                  className="block border-[0.15625rem] border-[#292827] rounded-[0.25rem_0.25rem_0.75rem_0.25rem] [corner-shape:squircle] px-3 py-2.5 shadow-[2px_2px_0_#292827]"
                  style={{ background: s.bg }}
                >
                  <div className="font-black text-[0.8125rem] leading-[1.3]">{s.title}</div>
                  <span className="block text-[0.6875rem] font-semibold text-[#777777] mt-0.5">{s.meta}</span>
                </a>
              ))}
            </div>
          </div>

          {/* CTA موبایل */}
          <div className="text-center">
            <div className="relative inline-block -rotate-1 hover:rotate-0 transition-transform">
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[#292827] rounded-[0.875rem_0_0.875rem_0] [corner-shape:squircle]"
                style={{ transform: "translate(0.25rem, 0.25rem)" }}
              />
              <a
                href="#"
                className="relative z-10 inline-flex items-center gap-2.5 px-6 py-3 border-2 border-[#292827] rounded-[0.875rem_0_0.875rem_0] [corner-shape:squircle] font-extrabold text-[0.9375rem] whitespace-nowrap"
                style={{ background: "#F8A41D", color: "#292827" }}
              >
                ثبت‌نام در کالج رکاد
                <ChevronLeftIcon className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
