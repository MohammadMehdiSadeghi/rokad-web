/* =========================================================
   صفحه آرشیو افتخارات
   ---------------------------------------------------------
   • گرید تخت ۳تایی — هر دانش‌آموز یک کارت
   • جدا شده بر اساس «نوع مسابقه» (جشنواره)
   • داخل هر جشنواره، کارت‌ها از «۱ کشوری» تا «۳ ناحیه» مرتب‌ن
   دیتا: /api/award?populate=winners + fallback نمونه
========================================================= */
"use client";

import { useMemo } from "react";
import Container from "../../layout/Container";
import useRokadData from "../../lib/useRokadData";
import { fetchAwards } from "../../lib/api";
import fallbackAwards from "../../lib/fallback/awards";

/* ---------- تکسچر و مدال هر مقام ---------- */
const THEME_MAP = {
  first: { accent: "#F8A41D", tint: "#FEF6E8", pattern: "/assets/home/Honors/yellowTexture.png", label: "مقام اول", medal: "/assets/home/Honors/f1.png" },
  second: { accent: "#525252", tint: "#F2F2F2", pattern: "/assets/home/Honors/grayTexture.png", label: "مقام دوم", medal: "/assets/home/Honors/s2.png" },
  third: { accent: "#A56216", tint: "#FEF3E8", pattern: "/assets/home/Honors/BronzeTexture.png", label: "مقام سوم", medal: "/assets/home/Honors/t3.png" },
  district: { accent: "#202a5a", tint: "#F4F5FB", pattern: "/assets/home/Honors/blueTexture.png", label: "نشان افتخار", medal: "/assets/home/Honors/district-honor-badge.png" },
};
const DEFAULT_THEME = THEME_MAP.first;

/* ---------- ترتیب: مقام ← سطح (۱ کشوری تا ۳ ناحیه) ---------- */
const RANK_ORDER = { first: 1, second: 2, third: 3, district: 4 };
const LEVEL_ORDER = { "کشوری": 1, "استانی": 2, "ناحیه": 3 };

/* رقم فارسی */
const toFa = (n) => String(n).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);

/* حروف اول نام */
function initials(name) {
  const parts = String(name || "").trim().split(" ");
  return (parts[0]?.[0] ?? "") + "." + (parts[1]?.[0] ?? "");
}

/* ---------------------------------------------------------
   استخراج جشنواره / رشته / سطح — اگر صریح نباشه از متن
--------------------------------------------------------- */
function normalize(honor) {
  let festival = honor.festival;
  let field = honor.field;
  let level = honor.level;

  if (!festival) {
    const m = /جشنواره‌ی\s+([^\s،]+)/.exec(honor.title || "");
    festival = m ? `جشنواره‌ی ${m[1]}` : honor.rank === "district" ? "نشان‌های افتخار" : "سایر افتخارات";
  }
  if (!field) {
    const m = /بخش\s+([^\s،]+)/.exec(honor.meta || "");
    field = m ? m[1] : "عمومی";
  }
  if (!level) {
    const text = `${honor.title || ""} ${honor.meta || ""}`;
    level = text.includes("کشوری") ? "کشوری" : text.includes("استانی") ? "استانی" : text.includes("ناحیه") ? "ناحیه" : "کشوری";
  }

  return { ...honor, festival, field, level };
}

/* ---------------------------------------------------------
   گروه‌بندی بر اساس نوع مسابقه + مرتب‌سازی ۱کشوری → ۳ناحیه
--------------------------------------------------------- */
function groupByFestival(items) {
  const groups = [];
  const byName = new Map();

  for (const raw of items || []) {
    const h = normalize(raw);
    if (!byName.has(h.festival)) {
      const g = { name: h.festival, entries: [] };
      byName.set(h.festival, g);
      groups.push(g);
    }
    byName.get(h.festival).entries.push(h);
  }

  const orderOf = (h) =>
    (RANK_ORDER[h.rank] ?? 9) * 10 + (LEVEL_ORDER[h.level] ?? 9);

  for (const g of groups) {
    g.entries.sort((a, b) => orderOf(a) - orderOf(b));
    g.total = g.entries.reduce((n, e) => n + (e.winners?.length ?? 0), 0);
  }
  return groups;
}
/* ---------------------------------------------------------
   کارت دانش‌آموز برنده — یک کارت برای هر نفر
--------------------------------------------------------- */
function WinnerCard({ winner, entry }) {
  const theme = THEME_MAP[entry.rank] ?? DEFAULT_THEME;
  return (
    <article className="relative">
      {/* سایه سخت — رنگ مقام */}
      <div
        aria-hidden="true"
        className="absolute inset-0 translate-x-[0.3rem] translate-y-[0.3rem] rounded-[0_1.5rem_0_1.5rem] [corner-shape:squircle]"
        style={{ backgroundColor: theme.accent }}
      />

      <div className="relative flex flex-col h-full bg-white rounded-[0_1.5rem_0_1.5rem] [corner-shape:squircle] border-2 border-navy overflow-hidden">
        {/* هدر رنگی + پترن + مدال */}
        <div className="relative w-full h-[4.5rem] shrink-0 overflow-hidden" style={{ backgroundColor: theme.accent }}>
          <img
            src={theme.pattern}
            alt=""
            aria-hidden="true"
            draggable="false"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none opacity-40"
          />
          <img
            src={theme.medal}
            alt={theme.label}
            draggable="false"
            loading="lazy"
            decoding="async"
            className="absolute top-2 left-3 z-10 w-9 h-9 object-contain -rotate-6 drop-shadow select-none"
          />
          {winner.gen && (
            <span className="absolute top-2.5 right-3 z-10 text-[0.6875rem] font-black px-2.5 py-0.5 rounded-full bg-white text-navy border border-navy/20 shadow-[1.5px_1.5px_0_0_rgba(32,42,90,0.35)]">
              {winner.gen}
            </span>
          )}
        </div>

        {/* آواتار هم‌پوشان */}
        <div className="relative -mt-9 mx-auto z-20 flex justify-center">
          {winner.avatar ? (
            <img
              src={winner.avatar}
              alt={winner.name}
              loading="lazy"
              decoding="async"
              className="w-[4.5rem] h-[4.5rem] rounded-full object-cover border-2 border-navy shadow-[2.5px_2.5px_0_0_rgba(32,42,90,0.35)]"
            />
          ) : (
            <div
              className="w-[4.5rem] h-[4.5rem] rounded-full border-2 border-navy flex items-center justify-center font-black text-base shadow-[2.5px_2.5px_0_0_rgba(32,42,90,0.35)]"
              style={{ backgroundColor: theme.tint, color: theme.accent }}
            >
              {initials(winner.name)}
            </div>
          )}
        </div>

        {/* نام و نقش */}
        <div className="px-4 pt-2 text-center">
          <h3 className="font-black text-[1.0625rem] text-navy leading-snug line-clamp-1">{winner.name}</h3>
          {winner.role && (
            <p className="text-[0.75rem] font-extrabold text-teal-text mt-0.5 line-clamp-2">{winner.role}</p>
          )}
        </div>

        {/* بج‌ها: رشته · مقام · سطح */}
        <div className="px-4 pt-3 pb-4 mt-auto flex flex-wrap justify-center gap-1.5">
          <span className="text-[0.6875rem] font-bold px-2.5 py-1 rounded-full border border-navy/20 text-navy/70 bg-[#FAFAFA]">
            {entry.field}
          </span>
          <span
            className="text-[0.6875rem] font-black px-2.5 py-1 rounded-full text-white"
            style={{ backgroundColor: theme.accent }}
          >
            {theme.label}
          </span>
          <span className="text-[0.6875rem] font-black px-2.5 py-1 rounded-full bg-navy-alt text-white">
            {entry.level}
          </span>
        </div>
      </div>
    </article>
  );
}
/* ---------------------------------------------------------
   صفحه
--------------------------------------------------------- */
export default function HonorsPage() {
  const rawHonors = useRokadData(fetchAwards, fallbackAwards);
  const festivals = useMemo(() => groupByFestival(rawHonors), [rawHonors]);

  return (
    <>
      {/* ═════════ مقدمه ═════════ */}
      <section className="pt-14 sm:pt-20 pb-8 sm:pb-10 bg-white" dir="rtl">
        <Container className="text-center">
          <h1 className="font-black text-[1.75rem] sm:text-[2.625rem] lg:text-[3.25rem] leading-[1.35] text-ink mb-4">
            آرشیو <span className="text-navy-alt">افتخارات</span> رکاد
          </h1>
          <p className="font-medium text-[0.875rem] sm:text-[1.0625rem] leading-[1.9] text-ink/60 max-w-2xl mx-auto">
            هر کارت، یه دانش‌آموز رکاده که توی یه مسابقه مقام آورده.
            افتخارات به تفکیک نوع مسابقه دسته‌بندی شده و از مقام اول کشوری
            تا مقام سوم ناحیه مرتب شده‌ن.
          </p>
        </Container>
      </section>

      {/* ═════════ هر نوع مسابقه: یک سکشن با گرید تخت ۳تایی ═════════ */}
      {festivals.map((fest, fi) => {
        const isTinted = fi % 2 === 1;
        return (
          <section
            key={fest.name}
            id={`festival-${fi}`}
            dir="rtl"
            className="relative w-full py-12 sm:py-14 lg:py-16"
            style={{ backgroundColor: isTinted ? "#FAFAF7" : "#FFFFFF" }}
          >
            <Container>
              {/* سربرگ نوع مسابقه */}
              <div className="mb-8 sm:mb-10">
                <span className="inline-block text-[0.6875rem] font-black tracking-wide text-navy/45 mb-2">
                  نوع مسابقه
                </span>
                <h2 className="font-black text-[1.5rem] sm:text-[2rem] lg:text-[2.25rem] leading-[1.3] text-ink flex flex-wrap items-baseline gap-x-3">
                  <span>{fest.name}</span>
                  <span className="text-[0.8125rem] font-bold text-ink/40">
                    {toFa(fest.total)} برگزیده
                  </span>
                </h2>
                <div className="mt-4 h-[3px] w-24 rounded-full bg-teal" />
              </div>

              {/* گرید تخت ۳تایی — مرتب‌شده از ۱ کشوری تا ۳ ناحیه */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8 auto-rows-fr">
                {fest.entries.flatMap((entry, ei) =>
                  (entry.winners ?? []).map((w, wi) => (
                    <WinnerCard
                      key={`${entry.id ?? ei}-${w.name}-${wi}`}
                      winner={w}
                      entry={entry}
                    />
                  ))
                )}
              </div>
            </Container>
          </section>
        );
      })}

      {festivals.length === 0 && (
        <section className="pb-16 bg-white" dir="rtl">
          <Container>
            <div className="bg-white border-2 border-dashed border-navy/20 rounded-[0_1.5rem_0_1.5rem] [corner-shape:squircle] px-6 py-10 text-center max-w-xl mx-auto">
              <h2 className="font-black text-[1rem] text-navy mb-1.5">لیست منتخبین هنوز ثبت نشده</h2>
              <p className="text-[0.8125rem] text-navy/60 leading-7">
                به‌محض وارد شدن اسامی برنده‌ها در پنل مدیریت، همین‌جا نمایش داده می‌شه.
              </p>
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
