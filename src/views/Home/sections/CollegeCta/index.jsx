"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay } from "swiper/modules";
import Container from "../../../../layout/Container";
import { ChevronLeftIcon } from "../../../../common/Icons";

import "swiper/css";

const sectionPattern = "/assets/Pattern/layout-pattern.png";

/* =========================================================
   DATA — ۸ دپارتمان کالج رکاد
========================================================= */

const departments = [
  { id: 1, title: "طراحی سایت",     icon: "code" },
  { id: 2, title: "برنامه‌نویسی",    icon: "code" },
  { id: 3, title: "طراحی گرافیک",   icon: "design" },
  { id: 4, title: "تولید محتوا",    icon: "content" },
  { id: 5, title: "MBA نوجوان",     icon: "mba" },
  { id: 6, title: "کارآفرینی",      icon: "entre" },
  { id: 7, title: "IELTS",          icon: "lang" },
  { id: 8, title: "Free Discussion", icon: "chat" },
];

/* =========================================================
   ICONS
========================================================= */

function PillIcon({ type }) {
  const icons = {
    code: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
    design: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22a10 10 0 1 1 0-20 8 8 0 0 1 8 8c0 3-2 5-4 5h-2a2 2 0 0 0 0 4 3 3 0 0 1-2 3z"/></svg>,
    content: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16v14H4z"/><path d="M8 9h10M8 13h7"/></svg>,
    mba: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l9 4-9 4-9-4z"/><path d="M3 12l9 4 9-4"/></svg>,
    entre: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>,
    lang: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/></svg>,
    chat: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
  };
  return icons[type] || icons.code;
}

/* =========================================================
   PILL — کارت پیل دو لایه
========================================================= */

function Pill({ dept, index }) {
  const isOdd = index % 2 === 0;
  const rotate = isOdd ? -1.5 : 1.5;
  const bgTint = isOdd ? "#FEF6E8" : "#EEF8F7";
  const iconColor = isOdd ? "#BA7B16" : "#438C83";
  const accentColor = isOdd ? "#F8A41D" : "#59BBAF";

  return (
    <div
      className="relative shrink-0 select-none"
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {/* سایه پشتی */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[#292827] rounded-[1.25rem_0_1.25rem_0] [corner-shape:squircle]"
        style={{ transform: "translate(0.25rem, 0.25rem)" }}
      />
      {/* پیل جلو */}
      <div
        className="relative z-10 inline-flex items-center gap-3 px-4 py-3 border-2 border-[#292827] rounded-[1.25rem_0_1.25rem_0] [corner-shape:squircle]"
        style={{ background: bgTint }}
      >
        {/* آیکون */}
        <div
          className="w-9 h-9 flex items-center justify-center border-2 border-[#292827] rounded-[0.625rem_0_0.625rem_0] [corner-shape:squircle]"
          style={{ background: accentColor, color: "#ffffff" }}
        >
          <span className="w-4 h-4">
            <PillIcon type={dept.icon} />
          </span>
        </div>

        {/* عنوان */}
        <span className="font-extrabold text-[0.9375rem] whitespace-nowrap" style={{ color: "#292827" }}>
          {dept.title}
        </span>

        {/* شماره */}
        <span className="inline-flex items-center justify-center min-w-[1.5rem] h-6 px-2 rounded-full text-[0.6875rem] font-extrabold text-white" style={{ background: "#292827" }}>
          {`۰${dept.id}`}
        </span>
      </div>
    </div>
  );
}

/* =========================================================
   MAIN SECTION — V2: Horizontal Pill Slider
========================================================= */

export default function CollegeCta() {
  const swiperRef = useRef(null);

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
        <div className="text-center mb-10 lg:mb-12">
          {/* Eyebrow badge */}
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#59BBAF] text-white border-2 border-[#292827] rounded-full font-extrabold text-[0.8125rem] -rotate-2 shadow-[3px_3px_0_#292827] mb-5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
            ویژه دبیرستانی‌ها
          </span>

          {/* تیتر */}
          <h2 className="font-black text-[2rem] sm:text-[2.75rem] lg:text-[3.75rem] leading-[1.05] tracking-tight">
            <span className="inline-block -rotate-1 ml-1">دپارتمان‌های</span>
            <span className="inline-block rotate-[1.5deg] ml-1 px-3 sm:px-4 rounded-[1rem_0_1rem_0] [corner-shape:squircle] border-2 border-[#292827] shadow-[4px_4px_0_#59BBAF]" style={{ background: "#F8A41D", color: "#292827" }}>
              کالج رکاد
            </span>
          </h2>

          {/* زیرنویس */}
          <p className="mt-3 sm:mt-4 text-[0.9375rem] sm:text-[1rem] font-semibold leading-[1.85] text-[#777777] max-w-[36rem] mx-auto">
            از فناوری اطلاعات تا زبان و کسب‌وکار — کنار برنامهٔ درسی مدرسه‌ات
            می‌شینن و مهارتی رو یاد می‌گیری که همین حالا باهاش کار می‌کنی.
          </p>
        </div>

        {/* ════ CAROUSEL ════ */}
        <div className="relative">
          <style>{`
            .college-swiper .swiper-wrapper {
              align-items: center;
              transition-timing-function: linear !important;
            }
          `}</style>
          <Swiper
            modules={[A11y, Autoplay]}
            ref={swiperRef}
            loop={true}
            dir="rtl"
            slidesPerView="auto"
            spaceBetween={16}
            speed={3500}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            allowTouchMove={true}
            className="college-swiper !py-4"
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {departments.map((dept, i) => (
              <SwiperSlide key={dept.id} className="!w-auto">
                <Pill dept={dept} index={i} />
              </SwiperSlide>
            ))}
            {/* duplicate for seamless feel */}
            {departments.map((dept, i) => (
              <SwiperSlide key={`dup-${dept.id}`} className="!w-auto">
                <Pill dept={dept} index={i} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* ── فید لبه‌ها — محو شدن پیل‌ها به سمت لبه ── */}
          <div
            aria-hidden="true"
            className="absolute top-0 bottom-0 right-0 w-16 sm:w-24 lg:w-32 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to left, #ffffff 0%, rgba(255,255,255,0.9) 30%, transparent 100%)" }}
          />
          <div
            aria-hidden="true"
            className="absolute top-0 bottom-0 left-0 w-16 sm:w-24 lg:w-32 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to right, #ffffff 0%, rgba(255,255,255,0.9) 30%, transparent 100%)" }}
          />
        </div>

        {/* ════ BOTTOM CTA ════ */}
        <div className="mt-10 lg:mt-12 flex flex-col items-center gap-4">
          {/* Hint badge */}
          <span className="inline-block px-4 py-1.5 bg-[#FFD641] text-[#292827] border-2 border-[#292827] rounded-[0.625rem_0_0.625rem_0] [corner-shape:squircle] font-extrabold text-[0.8125rem] -rotate-2 shadow-[3px_3px_0_#292827]">
            ثبت‌نام ورودی جدید باز شده
          </span>

          {/* CTA button */}
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
      </Container>
    </section>
  );
}