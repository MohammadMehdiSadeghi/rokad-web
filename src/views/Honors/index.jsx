/* =========================================================
   صفحه آرشیو افتخارات — ساختار سلسله‌مراتبی
   ---------------------------------------------------------
   جشنواره  →  مقام (۱/۲/۳ کشوری)  →  رشته (گرافیک، برنامه‌نویسی…)
   هر «رشته» یک کارت مستقل با برندگانش است.
   دیتا: /api/award?populate=winners + fallback نمونه
   فیلدهای festival/field اختیاری‌اند؛ اگر نباشن از title/meta
   استخراج می‌شن تا دیتای فعلی بک‌اند هم درست بنشینه.
========================================================= */
"use client";

import { useMemo } from "react";
import Container from "../../layout/Container";
import useRokadData from "../../lib/useRokadData";
import { fetchAwards } from "../../lib/api";
import fallbackAwards from "../../lib/fallback/awards";

/* ---------- تکسچر پترن هر رتبه ---------- */
const goldPattern = "/assets/home/Honors/yellowTexture.png";
const silverPattern = "/assets/home/Honors/grayTexture.png";
const bronzePattern = "/assets/home/Honors/BronzeTexture.png";
const navyPattern = "/assets/home/Honors/blueTexture.png";

const THEME_MAP = {
  first: { accent: "#F8A41D", tint: "#FEF6E8", pattern: goldPattern, label: "مقام اول", medal: "/assets/home/Honors/f1.png" },
  second: { accent: "#525252", tint: "#F2F2F2", pattern: silverPattern, label: "مقام دوم", medal: "/assets/home/Honors/s2.png" },
  third: { accent: "#A56216", tint: "#FEF3E8", pattern: bronzePattern, label: "مقام سوم", medal: "/assets/home/Honors/t3.png" },
  district: { accent: "#202a5a", tint: "#F4F5FB", pattern: navyPattern, label: "نشان افتخار", medal: "/assets/home/Honors/district-honor-badge.png" },
};

const RANK_ORDER = ["first", "second", "third", "district"];
const DEFAULT_THEME = THEME_MAP.first;

/* رقم فارسی */
const toFa = (n) => String(n).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);

/* حروف اول نام */
function initials(name) {
  const parts = String(name || "").trim().split(" ");
  return (parts[0]?.[0] ?? "") + "." + (parts[1]?.[0] ?? "");
}

/* ---------------------------------------------------------
   نرمال‌سازی: تضمین وجود festival و field روی هر رکورد
--------------------------------------------------------- */
function normalize(honor) {
  let festival = honor.festival;
  let field = honor.field;

  if (!festival) {
    // «مقام اول جشنواره‌ی فردا» → «جشنواره‌ی فردا»
    const m = /جشنواره‌ی\s+([^\s،]+)/.exec(honor.title || "");
    festival = m ? `جشنواره‌ی ${m[1]}` : honor.rank === "district" ? "نشان‌های افتخار" : "سایر افتخارات";
  }

  if (!field) {
    // «رتبه‌ی اول کشوری در بخش برنامه‌نویسی …» → «برنامه‌نویسی»
    const m = /بخش\s+([^\s،]+)/.exec(honor.meta || "");
    field = m ? m[1] : "عمومی";
  }

  return { ...honor, festival, field };
}

/* ---------------------------------------------------------
   گروه‌بندی: جشنواره → مقام → رشته
--------------------------------------------------------- */
function groupHonors(items) {
  const list = (items || []).map(normalize);
  const festivals = [];
  const byFestival = new Map();

  for (const h of list) {
    if (!byFestival.has(h.festival)) {
      const entry = { name: h.festival, ranks: [], _byRank: new Map() };
      byFestival.set(h.festival, entry);
      festivals.push(entry);
    }
    const fest = byFestival.get(h.festival);
    const rank = RANK_ORDER.includes(h.rank) ? h.rank : "first";
    if (!fest._byRank.has(rank)) {
      const band = { rank, theme: THEME_MAP[rank] ?? DEFAULT_THEME, entries: [] };
      fest._byRank.set(rank, band);
      fest.ranks.push(band);
    }
    fest._byRank.get(rank).entries.push(h);
  }

  // مرتب‌سازی مقام‌ها: ۱ ← ۲ ← ۳ ← نشان
  for (const f of festivals) {
    f.ranks.sort((a, b) => RANK_ORDER.indexOf(a.rank) - RANK_ORDER.indexOf(b.rank));
    delete f._byRank;
  }
  return festivals;
}
/* ---------------------------------------------------------
   کارت «رشته» — یک مقام در یک رشته با برندگانش
--------------------------------------------------------- */
function FieldCard({ entry, theme }) {
  const winners = entry.winners ?? [];

  return (
    <article className="relative">
      {/* سایه سخت */}
      <div
        aria-hidden="true"
        className="absolute inset-0 translate-x-[0.3rem] translate-y-[0.3rem] rounded-[0_1.5rem_0_1.5rem] [corner-shape:squircle]"
        style={{ backgroundColor: theme.accent }}
      />

      <div className="relative flex flex-col h-full bg-white rounded-[0_1.5rem_0_1.5rem] [corner-shape:squircle] border-2 border-navy overflow-hidden">
        {/* هدر رنگی + پترن */}
        <div className="relative w-full h-[3.75rem] shrink-0 overflow-hidden" style={{ backgroundColor: theme.accent }}>
          <img
            src={theme.pattern}
            alt=""
            aria-hidden="true"
            draggable="false"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none opacity-40"
          />
          {/* نام رشته */}
          <div className="relative z-10 h-full flex items-center justify-between gap-3 px-4">
            <h3 className="font-black text-[1.0625rem] sm:text-[1.125rem] text-white leading-tight">
              {entry.field}
            </h3>
            <img
              src={theme.medal}
              alt={theme.label}
              draggable="false"
              loading="lazy"
              decoding="async"
              className="w-9 h-9 object-contain shrink-0 -rotate-6 drop-shadow select-none"
            />
          </div>
        </div>

        {/* توضیح */}
        {entry.meta && (
          <p className="px-4 pt-3 text-[0.75rem] font-semibold leading-[1.8] text-ink/60">
            {entry.meta}
          </p>
        )}

        {/* برندگان */}
        <div className="px-4 py-3 flex-1">
          {winners.length === 0 ? (
            <p className="text-[0.75rem] text-navy/45 leading-7">
              اسامی برندگان این رشته به‌زودی ثبت می‌شه.
            </p>
          ) : (
            <ul className="m-0 p-0 list-none space-y-2.5">
              {winners.map((w, i) => (
                <li key={w.name + i} className="flex items-center gap-3">
                  {w.avatar ? (
                    <img
                      src={w.avatar}
                      alt={w.name}
                      loading="lazy"
                      decoding="async"
                      className="w-10 h-10 rounded-full object-cover border-2 border-navy shrink-0"
                    />
                  ) : (
                    <span
                      className="w-10 h-10 rounded-full border-2 border-navy shrink-0 flex items-center justify-center font-black text-[0.75rem]"
                      style={{ backgroundColor: theme.tint, color: theme.accent }}
                    >
                      {initials(w.name)}
                    </span>
                  )}
                  <span className="min-w-0">
                    <span className="block font-black text-[0.9375rem] text-navy leading-snug truncate">
                      {w.name}
                    </span>
                    {(w.role || w.gen) && (
                      <span className="block text-[0.6875rem] font-bold text-teal-text truncate">
                        {[w.role, w.gen].filter(Boolean).join(" · ")}
                      </span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* فوتر */}
        <div className="border-t border-dashed border-navy/15 px-4 py-2 flex items-center justify-between text-[0.6875rem] font-bold text-navy/60 bg-[#FAFAFA] shrink-0">
          <span>{toFa(winners.length)} برنده</span>
          <span>{theme.label}</span>
        </div>
      </div>
    </article>
  );
}
/* ---------------------------------------------------------
   نوار «مقام» — عنوان رتبه + شمارش رشته‌ها
--------------------------------------------------------- */
function RankBand({ band }) {
  const { theme, entries } = band;
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-5 sm:mb-6">
      <span
        className="inline-flex items-center gap-2 rounded-[0_0.75rem_0_0.75rem] [corner-shape:squircle] px-3.5 py-1.5 text-white font-black text-[0.9375rem] sm:text-[1rem] border-2 border-navy shadow-[2.5px_2.5px_0_0_rgba(32,42,90,0.3)]"
        style={{ backgroundColor: theme.accent }}
      >
        <img
          src={theme.medal}
          alt=""
          aria-hidden="true"
          draggable="false"
          loading="lazy"
          decoding="async"
          className="w-5 h-5 object-contain select-none"
        />
        {theme.label}
      </span>
      <span className="text-[0.8125rem] font-bold text-ink/50">
        {toFa(entries.length)} رشته
      </span>
      <span className="flex-1 h-[2px] rounded-full" style={{ backgroundColor: `${theme.accent}33` }} />
    </div>
  );
}

/* ---------------------------------------------------------
   صفحه
--------------------------------------------------------- */
export default function HonorsPage() {
  const rawHonors = useRokadData(fetchAwards, fallbackAwards);
  const festivals = useMemo(() => groupHonors(rawHonors), [rawHonors]);

  return (
    <>
      {/* ═════════ مقدمه ═════════ */}
      <section className="pt-14 sm:pt-20 pb-4 sm:pb-6 bg-white" dir="rtl">
        <Container className="text-center">
          <h1 className="font-black text-[1.75rem] sm:text-[2.625rem] lg:text-[3.25rem] leading-[1.35] text-ink mb-4">
            آرشیو <span className="text-navy-alt">افتخارات</span> رکاد
          </h1>
          <p className="font-medium text-[0.875rem] sm:text-[1.0625rem] leading-[1.9] text-ink/60 max-w-2xl mx-auto">
            هر مدال روی این صفحه یعنی یه دانش‌آموز که از صفر شروع کرد و ایستاد
            تا آخرش. افتخارات به تفکیک جشنواره، مقام و رشته دسته‌بندی شده‌ن.
          </p>
        </Container>
      </section>

      {/* ═════════ سکشن هر جشنواره ═════════ */}
      {festivals.map((festival, fi) => {
        const isTinted = fi % 2 === 1;
        return (
          <section
            key={festival.name}
            id={`festival-${fi}`}
            dir="rtl"
            className="relative w-full py-12 sm:py-14 lg:py-16"
            style={{ backgroundColor: isTinted ? "#FAFAF7" : "#FFFFFF" }}
          >
            <Container>
              {/* سربرگ جشنواره */}
              <div className="mb-9 sm:mb-11">
                <span className="inline-block text-[0.6875rem] font-black tracking-wide text-navy/45 mb-2">
                  جشنواره
                </span>
                <h2 className="font-black text-[1.5rem] sm:text-[2rem] lg:text-[2.25rem] leading-[1.3] text-ink flex flex-wrap items-baseline gap-x-3">
                  <span>{festival.name}</span>
                  <span className="text-[0.8125rem] font-bold text-ink/40">
                    {toFa(festival.ranks.reduce((n, b) => n + b.entries.length, 0))} افتخار
                  </span>
                </h2>
                <div className="mt-4 h-[3px] w-24 rounded-full bg-teal" />
              </div>

              {/* مقام‌ها به ترتیب ۱ ← ۲ ← ۳ */}
              <div className="space-y-10 sm:space-y-12">
                {festival.ranks.map((band) => (
                  <div key={band.rank}>
                    <RankBand band={band} />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 auto-rows-fr">
                      {band.entries.map((entry, ei) => (
                        <FieldCard key={entry.id ?? `${band.rank}-${ei}`} entry={entry} theme={band.theme} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          </section>
        );
      })}
    </>
  );
}
