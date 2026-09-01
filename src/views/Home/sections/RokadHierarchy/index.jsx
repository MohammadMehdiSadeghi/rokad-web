"use client";

import Container from "../../../../layout/Container";
import { ChevronLeftIcon } from "../../../../common/Icons";

const sectionPattern = "/assets/Pattern/layout-pattern.png";

/* =========================================================
   DATA — سه شاخهٔ اکوسیستم
========================================================= */

const branches = [
  {
    label: "آموزش",
    title: "کالج رکاد",
    role: "یاد می‌گیری",
    body: "مسیر یادگیری ساختاریافته، اساتید مسلط و پروژه‌های واقعی — پایه‌های مهارت اینجا شکل می‌گیرد.",
    stats: [
      { v: "۸۰۰+", l: "دانش‌آموخته" },
      { v: "۴۵+", l: "دوره" },
      { v: "۹۴٪", l: "رضایت" },
    ],
    color: "#F8A41D",
    dark: "#BA7B16",
    tint: "#FEF6E8",
    darker: "#57390A",
  },
  {
    label: "رشد",
    title: "شتاب‌دهندهٔ رکاد",
    role: "می‌سازی",
    body: "از ایده تا محصول قابل عرضه؛ منتورشیپ تخصصی، سرمایه اولیه و شبکه‌ای از سرمایه‌گذاران رکاد.",
    stats: [
      { v: "۴۰+", l: "تیم" },
      { v: "۲.۵ میلیون دلار", l: "سرمایه" },
      { v: "۶ ماه", l: "دوره" },
    ],
    color: "#59BBAF",
    dark: "#438C83",
    tint: "#EEF8F7",
    darker: "#1F413D",
  },
  {
    label: "جامعه",
    title: "کافه کارآفرینی",
    role: "زندگی می‌کنی",
    body: "محل ملاقات ایده‌ها، رویدادها و شبکه‌سازی روزمره در فضایی گرم و پویا.",
    stats: [
      { v: "۱۲۰+", l: "رویداد" },
      { v: "۵۰۰۰+", l: "عضو" },
      { v: "۷/۷", l: "باز" },
    ],
    color: "#652D90",
    dark: "#4C226C",
    tint: "#F0EAF4",
    darker: "#231032",
  },
];

/* =========================================================
   CTA BUTTON — دو لایهٔ رکادی
========================================================= */

function CtaBtn({ label, color }) {
  return (
    <div className="relative inline-block -rotate-2">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[#292827] rounded-[0.625rem] [corner-shape:squircle]"
        style={{ transform: "translate(-3px, 3px)" }}
      />
      <button
        type="button"
        className="relative z-10 inline-flex items-center gap-1.5 px-[1.125rem] py-[0.5rem] border-2 border-[#292827] rounded-[0.625rem] [corner-shape:squircle] font-extrabold text-[0.9375rem] cursor-pointer hover:-translate-y-0.5 transition-transform"
        style={{ background: color, color: "#ffffff" }}
      >
        <span>{label}</span>
        <ChevronLeftIcon className="w-3 h-3" />
      </button>
    </div>
  );
}

/* =========================================================
   BRANCH CARD — کارت دو لایهٔ شاخه
========================================================= */

function BranchCard({ branch, index }) {
  const rots = [-1, 1, 1.5];
  const rotate = rots[index % rots.length];

  return (
    <div
      className="relative h-full"
      style={{ transform: `rotate(${rotate}deg)`, transition: "transform 500ms ease-out" }}
    >
      {/* سایه پشتی */}
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-[0_2rem_0_2rem] [corner-shape:squircle]"
        style={{
          background: branch.color,
          transform: "translate(-6px, 6px)",
        }}
      />
      {/* کارت جلو */}
      <div
        className="relative z-10 h-full border-2 border-[#292827] rounded-[0_2rem_0_2rem] [corner-shape:squircle] flex flex-col"
        style={{ background: branch.tint }}
      >
        <div className="p-5 sm:p-6 flex flex-col h-full">
          {/* هدر: Label + شماره */}
          <div className="flex items-center justify-between mb-3">
            <span
              className="inline-block px-3 py-1 rounded-[0.75rem] [corner-shape:squircle] text-[0.8125rem] font-bold border"
              style={{
                borderColor: branch.color,
                color: branch.color,
                background: "#ffffff",
                transform: "rotate(-2deg)",
              }}
            >
              {branch.label}
            </span>
            <span
              className="text-[2.375rem] font-black leading-none"
              style={{ color: branch.color, opacity: 0.4 }}
            >
              {`۰${index + 1}`}
            </span>
          </div>

          {/* Role verb */}
          <div className="text-right mb-1">
            <span
              className="inline-block text-[1.75rem] sm:text-[2rem] font-black leading-[1.15]"
              style={{
                color: branch.darker,
                transform: `rotate(${index === 1 ? -1 : 1}deg)`,
              }}
            >
              اینجا {branch.role}
            </span>
          </div>

          {/* عنوان شاخه */}
          <div className="text-right mb-2.5">
            <span
              className="text-[0.9375rem] font-bold"
              style={{ color: branch.color }}
            >
              → {branch.title}
            </span>
          </div>

          {/* بدنه */}
          <p
            className="text-[0.8125rem] font-medium leading-[1.75] text-right flex-1 mb-3"
            style={{ color: "#777777" }}
          >
            {branch.body}
          </p>

          {/* آمار افقی */}
          <div
            className="flex justify-between gap-2 pt-3.5 mb-3.5 border-t border-dashed"
            style={{ borderColor: `${branch.color}55` }}
          >
            {branch.stats.map((s, si) => (
              <div key={si} className="text-center flex-1">
                <div
                  className="font-black text-[1.375rem] leading-none"
                  style={{ color: branch.darker }}
                >
                  {s.v}
                </div>
                <div
                  className="text-[0.625rem] font-medium mt-1"
                  style={{ color: "#777777" }}
                >
                  {s.l}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div>
            <CtaBtn label="ورود" color={branch.color} />
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   MAIN SECTION — V4: Manifesto Grid
========================================================= */

export default function RokadHierarchy() {
  return (
    <section
      id="rokad-hierarchy"
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
        {/* ════ MANIFESTO HEADER ════ */}
        <div className="text-right mb-10 lg:mb-12">
          {/* تیتر بزرگ */}
          <h2
            className="font-black text-[2.5rem] sm:text-[3rem] lg:text-[3.875rem] leading-[1.2] tracking-tight text-right"
          >
            <span className="inline-block ml-1">رکاد،</span>
            <span className="inline-block ml-1">فراتر</span>
            <span className="inline-block ml-1">از یک</span>
            <span className="inline-block text-[#E0195B]">
              مدرسه.
            </span>
          </h2>

          {/* زیرنویس */}
          <p className="mt-5 sm:mt-6 text-[0.9375rem] sm:text-[1.0625rem] font-medium leading-[1.85] text-[#292827] max-w-[48rem]">
            یک <i className="font-bold">رکادین</i> در سه فضای زنده به‌صورت
            هم‌زمان حضور دارد:
            <b style={{ color: "#F8A41D" }}> کالج</b>،
            <b style={{ color: "#59BBAF" }}> شتاب‌دهنده</b> و
            <b style={{ color: "#652D90" }}> کافه</b>.
            سه لایهٔ همزمان از یک زندگی — نه سه مرحلهٔ جدا.
          </p>
        </div>

        {/* ════ GRID 3-COLUMN ════ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 items-stretch">
          {branches.map((branch, i) => (
            <BranchCard key={i} branch={branch} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}