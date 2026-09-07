"use client";

import { useMemo, useState } from "react";
import Container from "../../layout/Container";

/* =========================================================
   دیزاین‌توکن‌ها — دقیقاً از Rokad-design-system.md
   ۵ پرسونا: اکوسیستم / پسر / دختر / کالج / کلوپ
   سایه سخت 2.75px، ردیوس‌ها 5/8/12/17/24/34/40، بوردر 1.5px
========================================================= */

const PERSONAS = {
  eco: {
    label: "اکوسیستم",
    normal: "#59BBAF",
    dark: "#438C83",
    darker: "#1F413D",
    light: "#EEF8F7",
    lightActive: "#CCEAE6",
    textOnNormal: "#FFFFFF",
  },
  male: {
    label: "پسران",
    normal: "#202A5A",
    dark: "#182044",
    darker: "#0B0F1F",
    light: "#E9EAEF",
    lightActive: "#BABDCC",
    textOnNormal: "#FFFFFF",
  },
  female: {
    label: "دختران",
    normal: "#E0195B",
    dark: "#A81344",
    darker: "#4E0920",
    light: "#FCE8EF",
    lightActive: "#F5B8CC",
    textOnNormal: "#FFFFFF",
  },
  college: {
    label: "کالج",
    normal: "#F8A41D",
    dark: "#BA7B16",
    darker: "#57390A",
    light: "#FEF6E8",
    lightActive: "#FDE3B9",
    textOnNormal: "#57390A",
  },
  club: {
    label: "کلوپ",
    normal: "#652D90",
    dark: "#4C226C",
    darker: "#231032",
    light: "#F0EAF4",
    lightActive: "#CFBEDD",
    textOnNormal: "#FFFFFF",
  },
};

const INK = "#292827";
const INK_LIGHT = "#EAEAE9";

/* ── داده نمونه دانش‌آموختگان ── */
const alumni = [
  {
    name: "مریم رضایی",
    role: "مدیر محصول در دیجی‌کالا",
    gen: "نسل ۷",
    persona: "female",
    year: "۱۴۰۱",
    field: "محصول و طراحی",
    projects: 12,
    posts: 4,
  },
  {
    name: "علی مرادی",
    role: "بنیان‌گذار و مدیرعامل استارتاپ «کارنو»",
    gen: "نسل ۵",
    persona: "eco",
    year: "۱۳۹۹",
    field: "آموزش",
    projects: 9,
    posts: 7,
  },
  {
    name: "امیرحسین تهرانی",
    role: "توسعه‌دهنده فرانت‌اند در اسنپ",
    gen: "نسل ۶",
    persona: "male",
    year: "۱۴۰۰",
    field: "برنامه‌نویسی وب",
    projects: 15,
    posts: 2,
  },
  {
    name: "پوریا رحمانی",
    role: "موسیقی‌دان، برنامه‌نویس، عضو کلوپ خلاق رکاد",
    gen: "نسل ۹",
    persona: "club",
    year: "۱۴۰۳",
    field: "هنر تعاملی / کد",
    projects: 7,
    posts: 2,
  },
  {
    name: "سارا احمدی",
    role: "طراح رابط کاربری در کافه‌بازار",
    gen: "نسل ۷",
    persona: "female",
    year: "۱۴۰۱",
    field: "UI/UX",
    projects: 11,
    posts: 3,
  },
  {
    name: "محمدکریم نوری",
    role: "بنیان‌گذار پادکست «مسیر»",
    gen: "نسل ۴",
    persona: "college",
    year: "۱۳۹۸",
    field: "رسانه و محتوا",
    projects: 6,
    posts: 9,
  },
  {
    name: "هستی موسوی",
    role: "دانشجوی کامپیوتر و منتور دوره‌های رکاد",
    gen: "نسل ۸",
    persona: "female",
    year: "۱۴۰۲",
    field: "هوش مصنوعی",
    projects: 8,
    posts: 1,
  },
  {
    name: "پارسا رستمی",
    role: "برنامه‌نویس موبایل در تپسی",
    gen: "نسل ۶",
    persona: "male",
    year: "۱۴۰۰",
    field: "موبایل",
    projects: 10,
    posts: 2,
  },
  {
    name: "نگار صادقی",
    role: "مدیر رشد در استارتاپ «کارنو»",
    gen: "نسل ۵",
    persona: "eco",
    year: "۱۳۹۹",
    field: "رشد و مارکتینگ",
    projects: 7,
    posts: 5,
  },
  {
    name: "ابوالفضل قاسمی",
    role: "عکاس و سازنده محتوای ویدیویی",
    gen: "نسل ۹",
    persona: "club",
    year: "۱۴۰۳",
    field: "تولید محتوا",
    projects: 14,
    posts: 0,
  },
  {
    name: "ریحانه کریمی",
    role: "بنیان‌گذار فروشگاه اینترنتی «گلرنگ»",
    gen: "نسل ۸",
    persona: "college",
    year: "۱۴۰۲",
    field: "کارآفرینی",
    projects: 5,
    posts: 3,
  },
  {
    name: "مهدی یوسفی",
    role: "مهندس DevOps در دیجی‌نکست",
    gen: "نسل ۴",
    persona: "male",
    year: "۱۳۹۸",
    field: "زیرساخت",
    projects: 9,
    posts: 4,
  },
];

/* =========================================================
   ATOMS
========================================================= */

function initials(name) {
  const parts = name.split(" ");
  return (parts[0]?.[0] ?? "") + "." + (parts[1]?.[0] ?? "");
}

/* آواتار placeholder با حرف اول — ردیوس pill طبق توکن */
function Avatar({ member, size = 80 }) {
  const p = PERSONAS[member.persona];
  return (
    <div
      className="flex-shrink-0 grid place-items-center font-black select-none"
      style={{
        width: size,
        height: size,
        borderRadius: "40px",
        background: `linear-gradient(135deg, ${p.light}, ${p.lightActive})`,
        color: p.dark,
        fontSize: size * 0.34,
        border: `1.5px solid ${p.normal}`,
        boxShadow: `2.75px 2.75px 0 ${p.normal}`,
      }}
    >
      {initials(member.name)}
    </div>
  );
}

/* چیپ پرسونا — بوردر 1.5px currentColor، ردیوس pill */
function PersonaChip({ persona, children }) {
  const p = PERSONAS[persona];
  return (
    <span
      className="inline-flex items-center gap-1.5 text-[0.6875rem] font-bold whitespace-nowrap"
      style={{
        color: p.dark,
        background: p.light,
        border: `1.5px solid ${p.normal}`,
        borderRadius: "40px",
        padding: "4px 10px",
      }}
    >
      <span
        className="w-2 h-2 rounded-full"
        style={{ background: p.normal }}
      />
      {children ?? p.label}
    </span>
  );
}

/* لینک/تگ کوچک داخل کارت — سبک اکوسیستم */
function Tag({ persona, children }) {
  const p = PERSONAS[persona];
  return (
    <span
      className="text-[0.6875rem] font-medium transition-colors duration-150"
      style={{
        padding: "5px 10px",
        borderRadius: "5px",
        background: p.light,
        color: p.dark,
        border: `1px solid ${p.normal}`,
      }}
    >
      {children}
    </span>
  );
}

/* =========================================================
   CARD — DESIGN 01 (گرید کلاسیک) با امضای بصری رکاد
========================================================= */

function AlumniCard({ member }) {
  const p = PERSONAS[member.persona];
  return (
    <article
      className="group relative bg-white overflow-hidden transition-all duration-200 hover:-translate-x-[2px] hover:-translate-y-[2px]"
      style={{
        border: `1.5px solid ${INK_LIGHT}`,
        borderRadius: "24px",
        padding: "24px",
        boxShadow: `2.75px 2.75px 0 ${INK}`,
      }}
    >
      {/* مثلث گوشه — رنگ تم پرسونا */}
      <span
        aria-hidden="true"
        className="absolute top-0 left-0 w-0 h-0"
        style={{
          borderStyle: "solid",
          borderWidth: "34px 0 0 34px",
          borderColor: `${p.normal} transparent transparent transparent`,
        }}
      />

      <div className="flex gap-4 items-start mb-4">
        <Avatar member={member} />
        <div className="min-w-0 pt-1">
          <h3 className="font-black text-[1.25rem] leading-tight text-ink mb-1">
            {member.name}
          </h3>
          <p className="text-[0.8125rem] leading-[1.5] text-ink/70 mb-2">
            {member.role}
          </p>
          <PersonaChip persona={member.persona}>
            {member.gen} · {PERSONAS[member.persona].label}
          </PersonaChip>
        </div>
      </div>

      {/* جداکننده خط‌چین — همان سبک کارت‌های سایت */}
      <div
        className="border-t border-dashed mb-3"
        style={{ borderColor: INK_LIGHT }}
      />

      <div className="flex justify-between text-[0.6875rem] text-ink/60 mb-3">
        <span>سال فارغ‌التحصیلی: {member.year}</span>
        <span>{member.field}</span>
      </div>

      <div className="flex gap-2 flex-wrap">
        <Tag persona={member.persona}>{member.projects} نمونه‌کار</Tag>
        <Tag persona={member.persona}>{member.posts} مقاله</Tag>
      </div>
    </article>
  );
}

/* =========================================================
   FILTER PILL — دکمه فیلتر پرسونا
========================================================= */

function FilterPill({ active, onClick, persona, count }) {
  const p = persona ? PERSONAS[persona] : null;
  const base = {
    borderRadius: "40px",
    padding: "8px 18px",
    fontSize: "0.8125rem",
    fontWeight: 700,
    transition: "all .15s",
  };
  if (active) {
    return (
      <button
        type="button"
        onClick={onClick}
        className="cursor-pointer"
        style={{
          ...base,
          background: p ? p.normal : INK,
          color: p ? p.textOnNormal : "#fff",
          border: `1.5px solid ${p ? p.normal : INK}`,
          boxShadow: `2.75px 2.75px 0 ${p ? p.darker : "#0E0E0E"}`,
        }}
      >
        {p ? p.label : "همه"}
        <span className="opacity-70 mr-1.5 text-[0.6875rem]">({count})</span>
      </button>
    );
  }
  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-white text-ink cursor-pointer hover:-translate-y-[1px]"
      style={{ ...base, border: `1.5px solid ${INK_LIGHT}` }}
    >
      {p ? p.label : "همه"}
      <span className="opacity-50 mr-1.5 text-[0.6875rem]">({count})</span>
    </button>
  );
}

/* =========================================================
   MAIN VIEW
========================================================= */

export default function AlumniPage() {
  const [filter, setFilter] = useState("all");

  const counts = useMemo(() => {
    const c = { all: alumni.length };
    for (const key of Object.keys(PERSONAS)) {
      c[key] = alumni.filter((a) => a.persona === key).length;
    }
    return c;
  }, []);

  const list = useMemo(
    () => (filter === "all" ? alumni : alumni.filter((a) => a.persona === filter)),
    [filter],
  );

  return (
    <>
      {/* ════ هیرو صفحه — همان پترن استاندارد اکثر سکشن‌ها ════ */}
      <section
        dir="rtl"
        className="relative overflow-hidden bg-white pt-14 sm:pt-20 pb-8 sm:pb-10 px-4 sm:px-6 lg:px-8"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-60 rotate-180 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]"
        >
          <img
            src="/assets/Pattern/layout-pattern.png"
            alt=""
            draggable="false"
            className="w-full h-full object-cover select-none"
          />
        </div>

        <Container className="relative z-10 text-center">
          <h1 className="font-black text-[1.75rem] sm:text-[2.625rem] lg:text-[3.25rem] leading-[1.35] text-ink mb-4">
            دانش‌آموختگان <span className="text-teal-alt">رُکاداسکول</span>
          </h1>
          <p className="font-medium text-[0.875rem] sm:text-[1.0625rem] leading-[1.9] text-ink/60 max-w-2xl mx-auto">
            همه‌ی کسانی که راه رُکاد را طی کرده‌اند و امروز جای خود را ساخته‌اند
            — از نسل‌های اول تا آخرین نسل.
          </p>
        </Container>
      </section>

      {/* ════ فیلتر + گرید ════ */}
      <section dir="rtl" className="bg-bg-neutral pb-16 sm:pb-20 lg:pb-24 px-4 sm:px-6 lg:px-8">
        <Container>
          {/* ردیف فیلتر پرسونا */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-10">
            <span className="text-[0.8125rem] font-bold text-ink/60 ml-1">
              فیلتر:
            </span>
            <FilterPill
              active={filter === "all"}
              onClick={() => setFilter("all")}
              persona={null}
              count={counts.all}
            />
            {Object.keys(PERSONAS).map((key) => (
              <FilterPill
                key={key}
                active={filter === key}
                onClick={() => setFilter(key)}
                persona={key}
                count={counts[key]}
              />
            ))}
          </div>

          {/* گرید کارت‌ها */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {list.map((m) => (
              <AlumniCard key={m.name} member={m} />
            ))}
          </div>

          <p className="text-center text-[0.8125rem] text-ink/50 mt-12">
            {list.length} دانش‌آموخته نمایش داده می‌شود
          </p>
        </Container>
      </section>
    </>
  );
}
