"use client";

import Container from "../../../../layout/Container";
import { ChevronLeftIcon } from "../../../../common/Icons";

const sectionPattern = "/assets/Pattern/layout-pattern.png";

/* تایتل کلمه‌به‌کلمه با روتیت متناوب −۱/+۱ درجه — هر کلمه یک اسپن،
   مثل تیترهای بقیه سکشن‌ها (Comments، Story و…) */
function RotatedTitle({ words }) {
  return (
    <h2 className="font-black text-[1.5rem] xs:text-[1.625rem] sm:text-[2.25rem] lg:text-[3.3125rem] leading-[1.3] text-ink flex flex-wrap justify-center items-center gap-x-2 sm:gap-x-3 gap-y-1 px-2">
      {words.map((w, i) => (
        <span
          key={i}
          className={`inline-block ${
            i % 2 === 0 ? "rotate-[-1deg]" : "rotate-[1deg]"
          } ${w.color || ""}`}
        >
          {w.text}
        </span>
      ))}
    </h2>
  );
}

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
      {/* ── پنل تمام‌رنگ — ردیوس گوشه‌بریده و سایه سخت ── */}
      <div
        className="relative flex flex-1 flex-col p-3.5 xs:p-4 sm:p-6 lg:p-7 text-white rounded-[0_1.25rem_0_1.25rem] sm:rounded-[0_1.5rem_0_1.5rem] [corner-shape:squircle] border-2 border-[#292827]"
        style={{
          background: branch.color,
          boxShadow: `3px 3px 0 ${branch.darker}`,
        }}
      >
        {/* ردیف بالا: برچسب انگلیسی + چیپ سفید */}
        <div className="flex items-center justify-between mb-2.5 sm:mb-4">
          <span
            className="inline-flex items-center text-[0.625rem] xs:text-[0.6875rem] sm:text-[0.75rem] font-black text-ink/90 bg-white/95 px-2.5 py-1 sm:px-3 sm:py-1 rounded-[4px_0_4px_0] sm:rounded-[6px_0_6px_0]"
            style={{
              boxShadow: `1.5px 1.5px 0 ${branch.darker}`,
            }}
          >
            {branch.label}
          </span>
          <span
            dir="ltr"
            className="text-[0.625rem] xs:text-[0.6875rem] sm:text-[0.75rem] font-black tracking-[0.15em] sm:tracking-[0.2em] text-white/80"
          >
            {branch.en}
          </span>
        </div>

        {/* نقش */}
        <p className="text-[0.75rem] xs:text-[0.8125rem] sm:text-[0.875rem] font-bold text-white/90 text-right mb-0.5 sm:mb-1">
          اینجا {branch.role}
        </p>

        {/* عنوان شاخه */}
        <h3 className="text-[1.125rem] xs:text-[1.25rem] sm:text-[1.5rem] lg:text-[1.75rem] font-black leading-tight text-right mb-2 sm:mb-3">
          {branch.title}
        </h3>

        {/* بدنه */}
        <p className="text-[0.72rem] xs:text-[0.78rem] sm:text-[0.875rem] font-medium leading-[1.65] sm:leading-relaxed text-right text-white/90 mb-3.5 sm:mb-5">
          {branch.body}
        </p>

        {/* دکمه ورود — سفید روی رنگ تم، فول عرض وسط‌چین */}
        <div className="mt-auto">
          <button
            type="button"
            className="w-full flex items-center justify-center gap-1.5 bg-white px-3.5 py-2 sm:py-2.5 rounded-lg sm:rounded-xl [corner-shape:squircle] font-black text-xs xs:text-sm cursor-pointer transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
            style={{ color: branch.darker, boxShadow: `2px 2px 0 ${branch.darker}` }}
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
      className="relative overflow-hidden bg-bg-neutral py-[2.5rem] sm:py-[4rem] lg:py-[6rem] w-full"
    >
      {/* ── پس‌زمینه پترن همیشگی — همون ماسک گرادیانی بقیه سکشن‌ها:
          بالا و پایین سکشن محو میشه که لبه‌ها بریده به نظر نرسن ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 w-full h-full z-0 pointer-events-none
                [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]
                [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]"
      >
        <img
          src={sectionPattern}
          alt=""
          aria-hidden="true"
          draggable="false"
          className="w-full h-full object-cover opacity-35 rotate-180 select-none"
        />
      </div>

      <Container className="relative z-10">
        {/* ── تیتر — هر کلمه یک اسپن با روتیت متناوب −۱/+۱ ── */}
        <div className="text-center mb-4 sm:mb-6 lg:mb-[4rem]">
          <RotatedTitle
            words={[
              { text: "اکوسیستم", color: "text-[#59BBAF]" },
              { text: "رکاد", color: "text-[#202A5A]" },
            ]}
          />
          {/* متن توضیح سئو — بصری مخفی */}
          <p className="sr-only">
            یک رکادین به‌صورت هم‌زمان در سه فضای زنده حضور دارد: کالج،
            شتاب‌دهنده و کافه — سه لایهٔ همزمان از یک زندگی، نه سه مرحلهٔ جدا.
          </p>
        </div>

        {/* ── سه پنل تمام‌رنگ ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 lg:gap-7 items-stretch">
          {branches.map((branch) => (
            <BranchCard key={branch.en} branch={branch} />
          ))}
        </div>
      </Container>
    </section>
  );
}
