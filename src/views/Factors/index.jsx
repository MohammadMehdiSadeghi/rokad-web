"use client";

import { useMemo, useState } from "react";
import Container from "../../layout/Container";
import { TEAM, GROUPS } from "./data";

/* =========================================================
   صفحه «عوامل رکاد» — کادر انسانی
   گرید ۳تایی؛ کارت افقی: عکس سمت راست، اطلاعات سمت چپ
   کارت بنیان‌گذار (featured) عرض ۲ ستون را می‌گیرد.
   زبان بصری از Rokad-design-system.md:
   شدو سخت آفست + بوردر 2px جوهری + ردیوس گوشه‌بریده
========================================================= */

/* رنگ تیره‌تر برای بوردر/شدو بج — همان تابع سکشن Team فیگما */
function darker(hex) {
  const c = parseInt(hex.slice(1), 16);
  const r = Math.max(0, ((c >> 16) & 255) - 40);
  const g = Math.max(0, ((c >> 8) & 255) - 40);
  const b = Math.max(0, (c & 255) - 40);
  return `rgb(${r},${g},${b})`;
}

/* ── کارت افقیfeatured — حامد آرون (عرض ۲ ستون) ── */
function FeaturedCard({ member }) {
  return (
    <article
      className="relative lg:col-span-2"
      style={{ gridRow: "span 2" }}
    >
      <div
        aria-hidden="true"
        className="absolute top-[0.3125rem] left-[0.3125rem] w-full h-full bg-[#292827]"
        style={{ borderRadius: "25px 0 25px 0" }}
      />
      <div
        className="relative z-10 flex flex-col sm:flex-row-reverse bg-[#EAEAE9] h-full overflow-hidden transition-transform duration-200 hover:-translate-x-[2px] hover:-translate-y-[2px]"
        style={{
          border: "2px solid #292827",
          borderRadius: "25px 0 25px 0",
        }}
      >
        {/* عکس — سمت راست */}
        <div
          className="relative w-full sm:w-[42%] min-h-[16rem] sm:min-h-0 overflow-hidden shrink-0"
          style={{
            backgroundColor: member.color,
            borderLeft: "2px solid #292827",
          }}
        >
          <img
            src={member.pattern}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-70 select-none"
          />
          {member.img ? (
            <img
              src={member.img}
              alt={member.name}
              className="relative z-10 w-full h-full object-cover object-top"
            />
          ) : (
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              <span className="text-white font-black text-[5rem] leading-none select-none">
                {member.name.charAt(0)}
              </span>
            </div>
          )}
        </div>

        {/* اطلاعات — سمت چپ */}
        <div className="flex-1 p-5 sm:p-6 flex flex-col">
          <span
            className="self-start inline-flex items-center text-[0.7rem] font-bold text-white mb-3"
            style={{
              backgroundColor: member.color,
              border: `1px solid ${darker(member.color)}`,
              borderRadius: "6px 0 6px 0",
              padding: "2px 12px",
              boxShadow: `1px 1px 0 0 ${darker(member.color)}`,
            }}
          >
            {member.badge}
          </span>

          <h3 className="font-extrabold text-[1.5rem] sm:text-[1.75rem] text-[#292827] mb-2">
            {member.name}
          </h3>
          <p className="text-[0.9375rem] font-medium text-[#292827]/80 leading-[1.6] mb-4">
            {member.role}
          </p>

          {member.bio && (
            <p className="text-[0.8125rem] font-medium text-[#292827]/60 leading-[1.9] mb-4">
              {member.bio}
            </p>
          )}

          <div className="w-full h-px bg-[#292827]/20 my-auto" />

          {/* آیکون‌های تزئینی پایین */}
          <div className="flex items-center gap-2 pt-4">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="w-[25px] h-[25px] flex items-center justify-center text-[0.6rem] text-white/70"
                style={{
                  backgroundColor: member.color,
                  border: `1px solid ${darker(member.color)}`,
                  borderRadius: "4.6px 0 4.6px 0",
                  boxShadow: `1px 1px 0 0 ${darker(member.color)}`,
                }}
              >
                ✦
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

/* ── کارت افقی استاندارد — عکس راست، اطلاعات چپ ── */
function HorizontalCard({ member }) {
  return (
    <article className="relative">
      <div
        aria-hidden="true"
        className="absolute top-[0.3125rem] left-[0.3125rem] w-full h-full bg-[#292827]"
        style={{ borderRadius: "25px 0 25px 0" }}
      />
      <div
        className="relative z-10 flex flex-row bg-[#EAEAE9] h-full overflow-hidden transition-transform duration-200 hover:-translate-x-[2px] hover:-translate-y-[2px]"
        style={{
          border: "2px solid #292827",
          borderRadius: "25px 0 25px 0",
        }}
      >
        {/* عکس — سمت راست */}
        <div
          className="relative w-[38%] shrink-0 overflow-hidden min-h-[10rem]"
          style={{
            backgroundColor: member.color,
            borderLeft: "2px solid #292827",
          }}
        >
          <img
            src={member.pattern}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-70 select-none"
          />
          {member.img ? (
            <img
              src={member.img}
              alt={member.name}
              className="relative z-10 w-full h-full object-cover object-top"
            />
          ) : (
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              <span className="text-white font-black text-[3rem] leading-none select-none">
                {member.name.charAt(0)}
              </span>
            </div>
          )}
        </div>

        {/* اطلاعات — سمت چپ */}
        <div className="flex-1 p-4 flex flex-col justify-between gap-2 min-w-0">
          <div>
            <h3 className="font-extrabold text-[1rem] sm:text-[1.125rem] text-[#292827] leading-[1.35] mb-1">
              {member.name}
            </h3>
            <p className="text-[0.75rem] font-medium text-[#292827]/70 leading-[1.55]">
              {member.role}
            </p>
          </div>

          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="w-[22px] h-[22px] flex items-center justify-center text-[0.55rem] text-white/70"
                  style={{
                    backgroundColor: member.color,
                    border: `1px solid ${darker(member.color)}`,
                    borderRadius: "4.6px 0 4.6px 0",
                    boxShadow: `1px 1px 0 0 ${darker(member.color)}`,
                  }}
                >
                  ✦
                </span>
              ))}
            </div>
            <span
              className="inline-flex items-center text-[0.65rem] font-bold text-white whitespace-nowrap"
              style={{
                backgroundColor: member.color,
                border: `1px solid ${darker(member.color)}`,
                borderRadius: "6px 0 6px 0",
                padding: "1px 10px",
                boxShadow: `1px 1px 0 0 ${darker(member.color)}`,
              }}
            >
              {member.badge}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

/* ── پیل فیلتر ── */
function FilterPill({ active, onClick, label }) {
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
        className="cursor-pointer text-white"
        style={{
          ...base,
          background: "#59BBAF",
          border: "1.5px solid #59BBAF",
          boxShadow: "2.75px 2.75px 0 #292827",
        }}
      >
        {label}
      </button>
    );
  }
  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-white text-ink cursor-pointer hover:-translate-y-[1px]"
      style={{ ...base, border: "1.5px solid #EAEAE9" }}
    >
      {label}
    </button>
  );
}

/* =========================================================
   MAIN
========================================================= */

export default function FactorsPage() {
  const [group, setGroup] = useState("all");

  const counts = useMemo(() => {
    const c = { all: TEAM.length };
    for (const g of GROUPS) {
      if (g.key !== "all") c[g.key] = TEAM.filter((m) => m.group === g.key).length;
    }
    return c;
  }, []);

  const list = useMemo(
    () => (group === "all" ? TEAM : TEAM.filter((m) => m.group === group)),
    [group],
  );

  const featured = list.find((m) => m.featured);
  const rest = list.filter((m) => !m.featured);

  return (
    <>
      {/* ════ هیرو ════ */}
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
          <span
            className="inline-flex items-center gap-2 text-[0.6875rem] font-bold mb-4"
            style={{
              color: "#438C83",
              background: "#EEF8F7",
              border: "1.5px solid #59BBAF",
              borderRadius: "40px",
              padding: "6px 14px",
            }}
          >
            ◉ کادر رکاد
          </span>
          <h1 className="font-black text-[1.75rem] sm:text-[2.625rem] lg:text-[3.25rem] leading-[1.35] text-ink mb-4">
            عوامل <span className="text-teal-alt">رکاد</span>
          </h1>
          <p className="font-medium text-[0.875rem] sm:text-[1.0625rem] leading-[1.9] text-ink/60 max-w-2xl mx-auto">
            هر پروژه یک قصه داره، پشت هر قصه یک تیم — این آدم‌ها هستند که
            هرروز رکاد رو می‌سازن؛ از مدیریت تا راهبری هنرستان‌ها.
          </p>
        </Container>
      </section>

      {/* ════ فیلتر + گرید ۳تایی ════ */}
      <section
        dir="rtl"
        className="bg-bg-neutral py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
      >
        <Container>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-10">
            <span className="text-[0.8125rem] font-bold text-ink/60 ml-1">
              فیلتر:
            </span>
            {GROUPS.map((g) => (
              <FilterPill
                key={g.key}
                active={group === g.key}
                onClick={() => setGroup(g.key)}
                label={`${g.label} (${counts[g.key]})`}
              />
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 auto-rows-min">
            {/* کارت بنیان‌گذار — فقط در فیلتر «همه» و «مدیریت» دیده می‌شود */}
            {featured && <FeaturedCard member={featured} />}
            {rest.map((m) => (
              <HorizontalCard key={m.name} member={m} />
            ))}
          </div>

          <p className="text-center text-[0.8125rem] text-ink/50 mt-12">
            {list.length} نفر از کادر رکاد نمایش داده می‌شود
          </p>
        </Container>
      </section>
    </>
  );
}
