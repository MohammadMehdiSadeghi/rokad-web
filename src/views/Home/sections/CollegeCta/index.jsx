"use client";

import Container from "../../../../layout/Container";
import { ChevronLeftIcon } from "../../../../common/Icons";
import { useEnrollment } from "../../../../lib/EnrollmentContext";

const sectionPattern = "/assets/Pattern/layout-pattern.png";

/* =========================================================
   DATA — ۸ دورهٔ کالج رکاد
   رنگ‌ها از دیزاین‌سیستم رکاد (تم‌های light هر شاخه)
========================================================= */

const departments = [
  { title: "طراحی سایت", meta: "HTML · CSS · WordPress", accent: "#202A5A", icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M2 20h20"/></svg>
  )},
  { title: "برنامه‌نویسی", meta: "Python · JavaScript", accent: "#438C83", icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
  )},
  { title: "طراحی گرافیک", meta: "Figma · Photoshop", accent: "#E0195B", icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22a10 10 0 1 1 0-20 8 8 0 0 1 8 8c0 3-2 5-4 5h-2a2 2 0 0 0 0 4 3 3 0 0 1-2 3z"/></svg>
  )},
  { title: "تولید محتوا", meta: "نوشتن · سئو · شبکه‌های اجتماعی", accent: "#BA7B16", icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16v14H4z"/><path d="M8 9h10M8 13h7"/></svg>
  )},
  { title: "MBA نوجوان", meta: "مدیریت و کسب‌وکار", accent: "#652D90", icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l9 4-9 4-9-4z"/><path d="M3 12l9 4 9-4"/></svg>
  )},
  { title: "رویدادهای کارآفرینی", meta: "استارتاپ ویکند · هکاتون", accent: "#438C83", icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
  )},
  { title: "IELTS", meta: "آمادگی آکادمیک زبان", accent: "#202A5A", icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/></svg>
  )},
  { title: "Free Discussion", meta: "مکالمهٔ آزاد انگلیسی", accent: "#E0195B", icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
  )},
];

/* =========================================================
   COURSE CHIP — تگ دوره، خوانا و واضح روی بنر
========================================================= */

function CourseChip({ d, i }) {
  return (
    <div
      className={`relative bg-white border-2 border-[#292827] rounded-[0_0.625rem_0_0.625rem] sm:rounded-[0_0.75rem_0_0.75rem] [corner-shape:squircle] shadow-[2px_2px_0_#57390A] sm:shadow-[2.75px_2.75px_0_#57390A] p-2 xs:p-2.5 sm:p-3 transition-transform duration-300 hover:-translate-y-1 hover:rotate-0 ${
        i % 2 === 0 ? "rotate-[-1deg]" : "rotate-[1deg]"
      }`}
    >
      <div className="flex items-center gap-2 xs:gap-2.5">
        <span
          className="w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9 flex-shrink-0 flex items-center justify-center rounded-[0.35rem_0_0.35rem_0] sm:rounded-[0.4rem_0_0.4rem_0] [corner-shape:squircle] border-2 border-[#292827]"
          style={{ background: "#FEF6E8", color: d.accent }}
        >
          <span className="w-3.5 h-3.5 xs:w-4 xs:h-4 block">{d.icon}</span>
        </span>
        <div className="min-w-0 flex-1">
          <div className="font-black text-[0.75rem] xs:text-[0.8125rem] sm:text-[0.9375rem] leading-[1.3] text-[#292827] truncate">
            {d.title}
          </div>
          <span className="block text-[0.58rem] xs:text-[0.65rem] sm:text-[0.6875rem] font-semibold text-[#777777] mt-0.5 truncate" dir="auto">
            {d.meta}
          </span>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   MAIN SECTION — بنر تبلیغاتی کالج رکاد
   ویژه دبیرستانی‌ها (بزرگ‌ترین متن) + کالج رکاد (مشخص)
   + «این دوره‌ها رو داریم» + ۸ دوره + CTA
========================================================= */

export default function CollegeCta() {
  const { openEnrollment } = useEnrollment();

  return (
    <section
      id="college-cta"
      dir="rtl"
      className="relative overflow-hidden bg-bg-neutral pt-[4rem] sm:pt-[5rem] lg:pt-[6rem] pb-[4rem] sm:pb-[5rem] lg:pb-[6rem] w-full"
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
          aria-hidden="true"
          draggable="false"
          className="w-full h-full object-cover rotate-180 select-none"
        />
      </div>

      <Container className="relative z-10">
        {/* ── بنر کارت بزرگ با پس‌زمینه رنگ تم کالج (#F8A41D) ── */}
        <div className="relative">
          {/* لایه زیرین سایه سخت — مشکی دیزاین‌سیستم */}
          <div
            aria-hidden="true"
            className="absolute inset-0 translate-x-[0.35rem] translate-y-[0.35rem] sm:translate-x-[0.5rem] sm:translate-y-[0.5rem] rounded-[0_2rem_0_2rem] sm:rounded-[0_3rem_0_3rem] [corner-shape:squircle] bg-[#292827]"
          />

          {/* بنر اصلی کالج */}
          <div
            className="relative overflow-hidden rounded-[0_2rem_0_2rem] sm:rounded-[0_3rem_0_3rem] [corner-shape:squircle] border-[0.1875rem] border-[#292827] bg-[#F8A41D] p-5 xs:p-7 sm:p-10 lg:p-14"
          >
            {/* پترن پس‌زمینه داخل بنر کالج */}
            <div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none opacity-[0.12]"
            >
              <img
                src="/assets/home/TeamTeaser/yellow.png"
                alt=""
                draggable="false"
                className="w-full h-full object-cover select-none"
              />
            </div>

            {/* گرید ۲ ستونه دسکتاپ: راست متن + چپ دوره‌ها */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* ── ستون راست: پیام اصلی بنر ── */}
              <div className="text-center lg:text-right">
                {/* بج کالج رکاد — مشخص و برجسته */}
                <div className="inline-flex items-center gap-2 bg-white border-[0.15625rem] sm:border-[0.1875rem] border-[#292827] rounded-[0_0.75rem_0_0.75rem] sm:rounded-[0_1rem_0_1rem] [corner-shape:squircle] px-3.5 sm:px-5 py-1.5 sm:py-2.5 shadow-[3px_3px_0_#57390A] sm:shadow-[4px_4px_0_#57390A] rotate-[-2deg] mb-3 sm:mb-4">
                  <span className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-[#F8A41D] border-2 border-[#292827]" style={{ color: "#57390A" }}>
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                  </span>
                  <span className="font-black text-[1rem] sm:text-[1.25rem] lg:text-[1.375rem] text-[#292827] leading-none">
                    کالج رکاد
                  </span>
                </div>

                {/* تیتر اصلی — بزرگ‌ترین متن بنر */}
                <h2 className="font-black text-[1.5rem] xs:text-[1.625rem] sm:text-[2.25rem] lg:text-[3.3125rem] leading-[1.2] text-[#292827] mb-3 sm:mb-4 lg:mb-4 flex flex-wrap justify-center lg:justify-start items-center gap-x-2.5 gap-y-1">
                  <span className="inline-block rotate-[-1deg]">ویژه</span>
                  <span className="inline-block rotate-[1deg]">دبیرستانی</span>
                  <span className="inline-block rotate-[-1.5deg]">ها!</span>
                </h2>

                {/* زیرنویس — بصری هاید ولی محتوای اصلی برای کاربر: خط ساده بنر */}
                <p className="font-bold text-[0.9375rem] sm:text-[1.0625rem] lg:text-[1.125rem] leading-[1.8] sm:leading-[1.9] text-[#57390A] mb-5 sm:mb-6 max-w-md mx-auto lg:mx-0">
                  از همین امسال، کنار مدرسه وارد مسیر شغلی واقعی شو — بدون نیاز به مدرک، روی پروژه واقعی یاد می‌گیری.
                </p>

                {/* CTA */}
                <div className="flex flex-col items-center lg:items-start">
                  <div className="relative inline-flex items-center justify-center">
                    <div
                      aria-hidden="true"
                      className="absolute top-[0.125rem] left-[0.125rem] w-full h-full rounded-[0_0.875rem_0_0.875rem] [corner-shape:squircle] bg-[#292827]"
                    />
                    <button
                      type="button"
                      onClick={openEnrollment}
                      className="relative z-10 inline-flex items-center gap-2.5 bg-white border-2 border-[#292827] text-[#292827] font-extrabold text-base sm:text-lg px-7 sm:px-8 py-3 sm:py-3.5 rounded-[0_0.875rem_0_0.875rem] [corner-shape:squircle] whitespace-nowrap cursor-pointer [background-image:linear-gradient(to_right,#292827,#292827)] bg-no-repeat [background-size:0%_100%] hover:[background-size:100%_100%] hover:text-white transition-all duration-300 ease-out"
                    >
                      همین حالا ثبت‌نام کن
                      <ChevronLeftIcon className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* ── ستون چپ: این دوره‌ها رو داریم ── */}
              <div>
                <div className="flex items-center gap-2.5 mb-4 sm:mb-5">
                  <span className="inline-flex items-center gap-1.5 bg-[#292827] text-white rounded-[0_0.625rem_0_0.625rem] [corner-shape:squircle] px-3.5 py-1.5 font-black text-[0.875rem] sm:text-[1rem] rotate-[1deg] shadow-[2.75px_2.75px_0_rgba(41,40,39,0.35)]">
                    این دوره‌ها رو داریم:
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 xs:gap-2.5 sm:gap-3.5">
                  {departments.map((d, i) => (
                    <CourseChip key={d.title} d={d} i={i} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* استیکرهای گوشه بنر */}
          <span
            aria-hidden="true"
            className="hidden lg:flex absolute -top-5 -right-5 z-20 items-center justify-center w-14 h-14 rounded-full bg-[#59BBAF] text-white border-2 border-[#292827] shadow-[3px_3px_0_#292827] rotate-[8deg]"
          >
            <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5"/><path d="m5 12 7-7 7 7"/></svg>
          </span>
        </div>
      </Container>
    </section>
  );
}
