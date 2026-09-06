"use client";
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

// تعداد کارت در هر «صفحه» در دسکتاپ
const CARDS_PER_PAGE = 4;

function EcoCard({ title, body, featured, tilt, isActive, cardRef, className = "" }) {
  return (
    <article
      ref={cardRef}
      style={{ "--tilt": `${tilt}deg` }}
      data-active={isActive || undefined}
      className={`
      group p-4 xs:p-5 sm:p-6 flex flex-row items-center gap-3 xs:gap-4 sm:gap-5 min-h-[9rem] xs:min-h-[10rem] sm:min-h-[11.5rem] text-right
      backdrop-blur-[19.06px] rotate-[var(--tilt)] hover:rotate-0
      transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
      hover:-translate-y-1.5 hover:shadow-[0_15px_40px_-5px_rgba(89,187,175,0.25)]

      bg-[#FFFFFF12] hover:bg-[#59BBAF]
      border-[0.11875rem] border-[#59BBAF] hover:border-[#FFFFFF]
      rounded-[0_1.90875rem_0_1.90875rem] [corner-shape:squircle]

      ${isActive ? "-translate-y-1.5 shadow-[0_15px_40px_-5px_rgba(89,187,175,0.25)] bg-[#59BBAF] border-[#FFFFFF] rotate-0" : ""}
      ${className}
      `}
    >
      {/* Icon — راست کارت (اول در DOM زیر RTL) */}
      <div
        className={`w-12 h-12 xs:w-13 xs:h-13 sm:w-16 sm:h-16 flex items-center justify-center flex-shrink-0 transition-colors duration-500 rounded-[0.62625rem_0_0.62625rem_0] [corner-shape:squircle] bg-[#58BDAF] group-hover:bg-[#202A5A] ${isActive ? "bg-[#202A5A]" : ""}`}
      >
        <span
          className={`w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 text-[#0e1633] group-hover:text-white transition-colors duration-300 ${
            isActive ? "text-white" : ""
          }`}
        >
          <UserIcon />
        </span>
      </div>

      {/* Text — چپِ آیکون */}
            <div className="flex flex-col items-start text-right">
              <h4 className="font-black text-[0.8125rem] xs:text-[0.9375rem] sm:text-[1.125rem] text-white mb-1 sm:mb-2 leading-snug transition-colors duration-300">
                {title}
              </h4>
              <p className="hidden font-medium text-[0.6875rem] xs:text-[0.75rem] sm:text-[0.9375rem] text-white/70 leading-relaxed transition-colors duration-300">
                {body}
              </p>
            </div>
    </article>
  );
}

export default function Ecosystem() {
  // ── اسکرول لاک دسکتاپ ──
  // وقتی کاربر به سکشن می‌رسه: ۴ کارت کنار هم. یک اسکرول به پایین →
  // کارت‌های بعدی از سمت راست میان و جایگزین می‌شن. یک اسکرول به بالا →
  // کارت‌های قبلی از سمت چپ میان و جایگزین می‌شن. بعد از جابجایی بین
  // دو صفحه، قفل باز میشه و اسکرول به سکشن بعدی می‌ره.
  const sectionRef = useRef(null);
  const pageRef = useRef(0);
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(cards.length / CARDS_PER_PAGE);

  // ── تغییر صفحه (بین دسکتاپ و موبایل مشترک) ──
  const goPage = (next) => {
    if (next < 0 || next >= totalPages) return false;
    setPage(next);
    return true;
  };

  // ── سوایپ موبایل ──
  const touchStartX = useRef(null);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(dx) < 40) return;
    // در RTL: کشیدن انگشت از چپ به راست → اسلاید بعدی، به چپ → اسلاید قبلی
    const next = dx > 0 ? pageRef.current + 1 : pageRef.current - 1;
    goPage(next);
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || typeof window === "undefined") return;

    let lockActive = window.innerWidth >= 1024;
    // وقتی قفل فعاله، موقعیت اسکرول رو به‌خاطر می‌سپاریم تا با نوار اسکرول
    // یا هر وسیله‌ی دیگه نتونه از محدوده خارج بشه
    let lockedScrollY = null;
    let lockTimer = null;

    const onResize = () => {
      lockActive = window.innerWidth >= 1024;
    };
    window.addEventListener("resize", onResize);

    // آیا مرکز سکشن نزدیکِ مرکز صفحه است؟
    const isSectionCentered = () => {
      const rect = section.getBoundingClientRect();
      const mid = window.innerHeight / 2;
      return rect.top < mid && rect.bottom > mid;
    };

    // ── اسکرول با موس / تاچ‌پد ──
    const onWheel = (e) => {
      if (!lockActive) return;
      // فقط وقتی مرکز سکشن نزدیکِ مرکز صفحه‌ست، رفتار قفل رو فعال کن
      if (!isSectionCentered()) return;

      const delta = e.deltaY;
      if (Math.abs(delta) < 8) return;

      const goingDown = delta > 0;
      const target = pageRef.current + (goingDown ? 1 : -1);

      // اگه به لبه رسیدیم → قفل رو آزاد کن و بذار صفحه عادی اسکرول شه
      if (target < 0 || target >= totalPages) {
        lockedScrollY = null;
        return;
      }

      e.preventDefault();
      goPage(target);
      // قفل کوتاه فقط برای جلوگیری از پریدن صفحه وسطِ انیمیشن؛
      // به محض اینکه اسکرول به لبه رسید یا سکشن از وسط خارج شد، آزاد می‌شه
      lockedScrollY = window.scrollY;
      clearTimeout(lockTimer);
      lockTimer = setTimeout(() => {
        lockedScrollY = null;
      }, 300);
    };

    // ── نوار اسکرول / کیبورد / هر اسکرول دیگه ──
    const onScroll = () => {
      if (!lockActive || lockedScrollY === null) return;
      // اگه سکشن از وسط دیدگاه خارج شد → قفل رو رها کن (کاربر داره می‌ره)
      if (!isSectionCentered()) {
        lockedScrollY = null;
        return;
      }
      // فقط تا پایان انیمیشن، اسکرول رو سر جای قفل نگه دار
      if (Math.abs(window.scrollY - lockedScrollY) > 2) {
        window.scrollTo(0, lockedScrollY);
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (lockTimer) clearTimeout(lockTimer);
    };
  }, [totalPages]);

  // همیشه pageRef رو با page به‌روز نگه می‌داریم
  pageRef.current = page;

  return (
      <section
        ref={sectionRef}
        className="py-[4rem] sm:py-[5rem] lg:py-[6rem] px-4 sm:px-6 relative overflow-hidden"
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
          {/* Heading — فاصله ۴rem تا محتوای پایین */}
          <h2 className="text-center font-black text-[1.375rem] xs:text-[1.5rem] sm:text-[2.375rem] lg:text-[2.875rem] leading-[1.3] text-white mb-[4rem] flex flex-wrap justify-center items-center gap-x-2">
            <span className="inline-block -rotate-[1.9deg]">یه</span>
            <span className="inline-block rotate-[1.9deg] text-teal">
              اکوسیستم
            </span>
            <span className="inline-block -rotate-[1.9deg]">کامل</span>
            <span className="inline-block rotate-[1.9deg]">برای</span>
            <span className="inline-block -rotate-[1.9deg]">رشد</span>
          </h2>

          {/* Subtitle — بصری هاید شده ولی برای سئو توی DOM می‌مونه */}
          <p className="sr-only">
            رکاد یه اکوسیستم کامل برای رشد نوجواناس — از آموزش و رویداد تا
            شتاب‌دهی و شبکه‌ی حرفه‌ای، همه کنار هم.
          </p>

          {/* ── موبایل/تبلت: اسلایدر ۴تایی (۲×۲) با سوایپ ── */}
                    <div
                      className="lg:hidden"
                      dir="rtl"
                      onTouchStart={onTouchStart}
                      onTouchEnd={onTouchEnd}
                    >
                      <div className="relative min-h-[19.5rem] xs:min-h-[21.5rem] sm:min-h-[25rem]">
                        {Array.from({ length: totalPages }).map((_, pg) => {
                          const group = cards.slice(pg * CARDS_PER_PAGE, (pg + 1) * CARDS_PER_PAGE);
                          const isCurrent = pg === page;
                          // موبایل: صفحه‌ی بعدی از چپ (-30%) میاد وسط، صفحه‌ی قبلی به راست (+30%) می‌ره
                          const slideX = isCurrent
                            ? "translate-x-0 opacity-100"
                            : pg < page
                              ? "translate-x-[30%] opacity-0"
                              : "-translate-x-[30%] opacity-0";
                          return (
                            <div
                              key={pg}
                              className={`grid grid-cols-2 gap-2.5 xs:gap-3 sm:gap-5 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] absolute inset-0 ${slideX}`}
                              aria-hidden={!isCurrent}
                              style={{ pointerEvents: isCurrent ? "auto" : "none" }}
                            >
                              {group.map((c, i) => (
                                <EcoCard key={i} {...c} isActive={false} />
                              ))}
                            </div>
                          );
                        })}
                      </div>

                      {/* نشانگر صفحه */}
                      <div className="flex items-center justify-center gap-2 mt-6 lg:mt-8">
                        {Array.from({ length: totalPages }).map((_, i) => (
                          <span
                            key={i}
                            className={`h-1.5 rounded-full transition-all duration-300 ${
                              i === page ? "w-6 bg-[#59BBAF]" : "w-1.5 bg-white/25"
                            }`}
                          />
                        ))}
                      </div>
                    </div>

          {/* ── دسکتاپ: صفحات ۴تایی (۲ بالا + ۲ پایین) با اسکرول لاک ── */}
          <div className="hidden lg:block relative" dir="rtl">
            {/* بدون overflow-hidden — وگرنه لبه‌ی کارت‌های چرخیده (rotate) بریده می‌شن */}
            <div className="relative min-h-[24.5rem]">
              {Array.from({ length: totalPages }).map((_, pg) => {
                const group = cards.slice(pg * CARDS_PER_PAGE, (pg + 1) * CARDS_PER_PAGE);
                const isCurrent = pg === page;
                // موقعیت هر صفحه نسبت به صفحه‌ی فعلی — این خودش جهت اسلاید رو می‌سازه:
                // صفحه‌ی بعدی از راست (+30%) میاد وسط، صفحه‌ی قبلی به چپ (-30%) می‌ره
                const slideX = isCurrent
                  ? "translate-x-0 opacity-100"
                  : pg < page
                    ? "-translate-x-[30%] opacity-0"
                    : "translate-x-[30%] opacity-0";
                return (
                  <div
                    key={pg}
                    className={`grid grid-cols-2 gap-5 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] absolute inset-0 ${slideX}`}
                    aria-hidden={!isCurrent}
                    style={{ pointerEvents: isCurrent ? "auto" : "none" }}
                  >
                    {group.map((c, i) => (
                      <EcoCard key={i} {...c} isActive={false} />
                    ))}
                  </div>
                );
              })}
            </div>

            {/* نشانگر صفحه */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {Array.from({ length: totalPages }).map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === page ? "w-6 bg-[#59BBAF]" : "w-1.5 bg-white/25"
                  }`}
                />
              ))}
            </div>
          </div>
        </Container>
      </section>
    );
  }
