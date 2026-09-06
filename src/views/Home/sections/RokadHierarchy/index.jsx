"use client";

import Container from "../../../../layout/Container";
import { ChevronLeftIcon } from "../../../../common/Icons";

/* =========================================================
   DATA — سه شاخهٔ اکوسیستم (طرح مرجع: کارت‌های تمام‌رنگی)
========================================================= */

const branches = [
  {
    en: "EDUCATION",
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
    darker: "#57390A",
  },
  {
    en: "GROWTH",
    label: "رشد",
    title: "شتاب‌دهندهٔ رکاد",
    role: "می‌سازی",
    body: "از ایده تا محصول قابل عرضه؛ منتورشیپ تخصصی، سرمایه اولیه و شبکه‌ای از سرمایه‌گذاران رکاد.",
    stats: [
      { v: "۴۰+", l: "تیم" },
      { v: "۳۰+", l: "سرمایه‌گذار" },
      { v: "۶ ماه", l: "دوره" },
    ],
    color: "#59BBAF",
    dark: "#438C83",
    darker: "#1F413D",
  },
  {
    en: "COMMUNITY",
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
    darker: "#231032",
  },
];

/* =========================================================
   BRANCH CARD — کارت تمام‌رنگی با برچسب انگلیسی داخل کارت
========================================================= */

function BranchCard({ branch }) {
  return (
    <div className="relative h-full flex flex-col">
      {/* ── کارت تمام‌رنگی با لبهٔ سخت تیره ── */}
      <div
        className="relative flex flex-1 flex-col rounded-[1.5rem] p-5 sm:p-6 text-white"
        style={{
          background: branch.color,
          boxShadow: `0 0.4375rem 0 0 ${branch.darker}`,
        }}
      >
        {/* برچسب انگلیسی داخل کارت */}
        <span
          dir="ltr"
          className="self-start mb-4 text-[0.8125rem] font-black tracking-[0.22em] text-white/70"
        >
          {branch.en}
        </span>

        {/* عنوان نقش */}
        <h3 className="text-[1.5rem] sm:text-[1.75rem] font-black leading-[1.25] text-right">
          اینجا {branch.role}
        </h3>

        {/* عنوان شاخه */}
        <div className="mt-1.5 mb-3 text-right">
          <span className="text-[0.9375rem] font-bold text-white/85">
            → {branch.title}
          </span>
        </div>

        {/* بدنه */}
        <p className="text-[0.8125rem] font-medium leading-[1.85] text-right text-white/90 flex-1 mb-4">
          {branch.body}
        </p>

        {/* آمار */}
        <div className="flex justify-between gap-2 pt-4 mb-5 border-t border-dashed border-white/40">
          {branch.stats.map((s, si) => (
            <div key={si} className="text-center flex-1">
              <div className="font-black text-[1.375rem] leading-none text-white">
                {s.v}
              </div>
              <div className="text-[0.625rem] font-medium mt-1.5 text-white/75">
                {s.l}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-left">
          <button
            type="button"
            className="inline-flex items-center gap-1.5 px-[1.25rem] py-[0.5625rem] rounded-[0.625rem] [corner-shape:squircle] font-extrabold text-[0.9375rem] text-white cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
            style={{ background: branch.dark }}
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
   MAIN SECTION — مطابق طرح مرجع دسکتاپ
========================================================= */

export default function RokadHierarchy() {
  return (
    <section
      id="rokad-hierarchy"
      dir="rtl"
      className="relative overflow-hidden bg-bg-neutral pt-[4rem] sm:pt-[5rem] lg:pt-[6rem] pb-[4.5rem] sm:pb-[5.5rem] lg:pb-[6.5rem] px-4 sm:px-6 lg:px-8"
    >
      <Container className="relative z-10">
        {/* ════ MANIFESTO HEADER ════ */}
        <div className="text-right mb-10 lg:mb-12">
          {/* تیتر بزرگ */}
          <h2 className="font-black text-[2.5rem] sm:text-[3rem] lg:text-[3.875rem] leading-[1.2] tracking-tight text-right">
            <span className="inline-block ml-1">رکاد،</span>
            <span className="inline-block ml-1">فراتر</span>
            <span className="inline-block ml-1">از یک</span>
            <span className="inline-block text-[#E0195B]">مدرسه </span>
          </h2>

          {/* زیرنویس */}
          <p className="mt-5 sm:mt-6 text-[0.9375rem] sm:text-[1.0625rem] font-medium leading-[1.85] text-[#292827] max-w-[48rem]">
            یک رکادین در سه فضای زنده به‌صورت هم‌زمان حضور دارد: کالج،
            شتاب‌دهنده و کافه. سه لایهٔ همزمان از یک زندگی — نه سه مرحلهٔ جدا.
          </p>
        </div>

        {/* ════ GRID 3-COLUMN ════ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-7 items-stretch">
          {branches.map((branch) => (
            <BranchCard key={branch.en} branch={branch} />
          ))}
        </div>
      </Container>
    </section>
  );
}
