"use client";

import Container from "../../../../layout/Container";
import { ChevronLeftIcon } from "../../../../common/Icons";

/* =========================================================
   DATA — سه شاخهٔ اکوسیستم (طرح مرجع: پنل‌های تمام‌رنگ)
   رنگ‌ها از Rokad-design-system.md:
   تیل #59BBAF (اکو) · نارنجی #F8A41D (کالج) · بنفش #652D90 (کلوپ)
   هر پنل: چیپ سفید بالا + متن سفید + عنوان بزرگ پایین + دکمه
========================================================= */

const branches = [
  {
    en: "GROWTH",
    label: "شتاب‌دهنده",
    title: "شتاب‌دهندهٔ رکاد",
    role: "می‌سازی",
    body: "ایده‌ات را با منتورهای متخصص، سرمایهٔ اولیه و شبکه‌ای از سرمایه‌گذاران رکاد به یک محصول واقعی تبدیل کن — در یک دورهٔ شش‌ماههٔ فشرده.",
    color: "#59BBAF",
    dark: "#438C83",
    darker: "#1F413D",
  },
  {
    en: "COMMUNITY",
    label: "کافه کارآفرینی",
    title: "کافه کارآفرینی",
    role: "زندگی می‌کنی",
    body: "محل ملاقات ایده‌ها، رویدادها و شبکه‌سازی روزمره در فضایی گرم و پویا؛ هر هفته کارگاه، هر ماه رویداد بزرگ.",
    color: "#652D90",
    dark: "#4C226C",
    darker: "#231032",
  },
  {
    en: "EDUCATION",
    label: "کالج",
    title: "کالج رکاد",
    role: "یاد می‌گیری",
    body: "مسیر یادگیری ساختاریافته با اساتید مسلط و پروژه‌های واقعی؛ پایه‌های مهارت اینجا شکل می‌گیرد.",
    color: "#F8A41D",
    dark: "#BA7B16",
    darker: "#57390A",
  },
];

/* =========================================================
   BRANCH PANEL — پنل تمام‌رنگِ مرجع
   چیپ سفید گوشه بالا-راست (LTR: بالا-چپ) + برچسب انگلیسی
   + بدنه سفید + آمار خط‌چین + عنوان بزرگ پایین + دکمه
========================================================= */

function BranchCard({ branch }) {
  return (
    <div className="relative h-full flex flex-col">
      {/* ── پنل تمام‌رنگ — ردیوس گوشه‌بریده و سایه سخت تیره ── */}
      <div
        className="relative flex flex-1 flex-col p-5 sm:p-6 text-white"
        style={{
          background: branch.color,
          borderRadius: "24px 0 24px 0",
          border: "2px solid #292827",
          boxShadow: `2.5px 4.5px 0 ${branch.darker}`,
        }}
      >
        {/* ردیف بالا: برچسب انگلیسی + چیپ سفید */}
        <div className="flex items-center justify-between mb-6">
          <span
            className="inline-flex items-center text-[0.75rem] font-black text-ink/85 bg-white/95"
            style={{
              borderRadius: "8px 0 8px 0",
              padding: "5px 14px",
              boxShadow: `1.5px 1.5px 0 ${branch.darker}`,
            }}
          >
            {branch.label}
          </span>
          <span
            dir="ltr"
            className="text-[0.75rem] font-black tracking-[0.22em] text-white/75"
          >
            {branch.en}
          </span>
        </div>

        {/* نقش */}
        <p className="text-[0.9375rem] font-bold text-white/85 text-right mb-1">
          اینجا {branch.role}
        </p>

        {/* عنوان شاخه */}
        <h3 className="text-[1.75rem] sm:text-[2rem] font-black leading-[1.25] text-right mb-3">
          {branch.title}
        </h3>

        {/* بدنه */}
        <p className="text-[0.8125rem] font-medium leading-[1.9] text-right text-white/90 mb-5">
          {branch.body}
        </p>

        {/* دکمه ورود — سفید روی رنگ تم، فول عرض وسط‌چین */}
        <div className="mt-auto">
          <button
            type="button"
            className="w-full flex items-center justify-center gap-1.5 bg-white px-[1.25rem] py-[0.5625rem] rounded-[0.625rem] [corner-shape:squircle] font-extrabold text-[0.9375rem] cursor-pointer transition-all duration-300 hover:-translate-y-0.5"
            style={{ color: branch.darker, boxShadow: `2.75px 2.75px 0 ${branch.darker}` }}
          >
            <span>ورود</span>
            <ChevronLeftIcon className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   MAIN SECTION — مطابق طرح مرجع: تیتر + ۳ پنل رنگی
========================================================= */

export default function RokadHierarchy() {
  return (
    <section
      id="rokad-hierarchy"
      dir="rtl"
      className="relative overflow-hidden bg-bg-neutral py-[4rem] sm:py-[5rem] lg:py-[6rem] px-4 sm:px-6 lg:px-8"
    >
      <Container className="relative z-10">
        {/* ── تیتر — کلمه‌به‌کلمه با رنگ تم (آکا پنل‌ها) ── */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="font-black text-[2.5rem] sm:text-[3rem] lg:text-[3.875rem] leading-[1.25] tracking-tight text-ink">
            <span className="inline-block ml-2">سه</span>
            <span className="inline-block ml-2 text-[#652D90]">فضای</span>
            <span className="inline-block text-[#F8A41D]">زندهٔ</span>{" "}
            <span className="inline-block text-[#59BBAF]">رکاد</span>
          </h2>
          <p className="mt-4 text-[0.875rem] sm:text-[1rem] text-ink/60 max-w-xl mx-auto leading-[1.9]">
            یک رکادین به‌صورت هم‌زمان در سه فضای زنده حضور دارد: کالج،
            شتاب‌دهنده و کافه — سه لایهٔ همزمان از یک زندگی، نه سه مرحلهٔ جدا.
          </p>
        </div>

        {/* ── سه پنل تمام‌رنگ ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-7 items-stretch">
          {branches.map((branch) => (
            <BranchCard key={branch.en} branch={branch} />
          ))}
        </div>
      </Container>
    </section>
  );
}
