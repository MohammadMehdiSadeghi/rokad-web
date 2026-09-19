/* =========================================================
   صفحه آرشیو افتخارات — گرید تخت
   ---------------------------------------------------------
   همهٔ دانش‌آموزان توی یک گرید ۳تایی؛ هر دانش‌آموز یک کارت.
   اطلاعات جشنواره/مقام/رشته روی خود کارت به‌صورت بج میاد،
   پس هیچ سلسله‌مراتبی و تودرتویی وجود نداره.
   دیتا: /api/award?populate=winners + fallback نمونه
========================================================= */
"use client";

import { useMemo } from "react";
import Container from "../../layout/Container";
import useRokadData from "../../lib/useRokadData";
import { fetchAwards } from "../../lib/api";
import fallbackAwards from "../../lib/fallback/awards";

/* ---------- تکسچر و مدال هر رتبه ---------- */
const THEME_MAP = {
  first: { accent: "#F8A41D", tint: "#FEF6E8", pattern: "/assets/home/Honors/yellowTexture.png", label: "مقام اول", medal: "/assets/home/Honors/f1.png" },
  second: { accent: "#525252", tint: "#F2F2F2", pattern: "/assets/home/Honors/grayTexture.png", label: "مقام دوم", medal: "/assets/home/Honors/s2.png" },
  third: { accent: "#A56216", tint: "#FEF3E8", pattern: "/assets/home/Honors/BronzeTexture.png", label: "مقام سوم", medal: "/assets/home/Honors/t3.png" },
  district: { accent: "#202a5a", tint: "#F4F5FB", pattern: "/assets/home/Honors/blueTexture.png", label: "نشان افتخار", medal: "/assets/home/Honors/district-honor-badge.png" },
};
const DEFAULT_THEME = THEME_MAP.first;

/* رقم فارسی */
const toFa = (n) => String(n).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);

/* حروف اول نام */
function initials(name) {
  const parts = String(name || "").trim().split(" ");
  return (parts[0]?.[0] ?? "") + "." + (parts[1]?.[0] ?? "");
}

/* ---------------------------------------------------------
   استخراج جشنواره و رشته — اگه فیلد صریح نباشه از متن
--------------------------------------------------------- */
function normalize(honor) {
  let festival = honor.festival;
  let field = honor.field;

  if (!festival) {
    const m = /جشنواره‌ی\s+([^\s،]+)/.exec(honor.title || "");
    festival = m ? `جشنواره‌ی ${m[1]}` : honor.rank === "district" ? "نشان‌های افتخار" : "سایر افتخارات";
  }
  if (!field) {
    const m = /بخش\s+([^\s،]+)/.exec(honor.meta || "");
    field = m ? m[1] : "عمومی";
  }
  return { ...honor, festival, field };
}

/* ---------------------------------------------------------
   تخت‌کردن: هر برنده = یک آیتم مستقل
--------------------------------------------------------- */
function flatten(items) {
  const out = [];
  (items || []).forEach((raw) => {
    const h = normalize(raw);
    const theme = THEME_MAP[h.rank] ?? DEFAULT_THEME;
    (h.winners ?? []).forEach((w, i) => {
      out.push({
        ...w,
        key: `${h.id ?? h.title}-${w.name}-${i}`,
        festival: h.festival,
        field: h.field,
        rankLabel: theme.label,
        theme,
      });
    });
  });
  return out;
}
/* ---------------------------------------------------------
   کارت دانش‌آموز برنده — یک کارت برای هر نفر
--------------------------------------------------------- */
function WinnerCard({ w }) {
  const { theme } = w;
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
          {w.gen && (
            <span className="absolute top-2.5 right-3 z-10 text-[0.6875rem] font-black px-2.5 py-0.5 rounded-full bg-white text-navy border border-navy/20 shadow-[1.5px_1.5px_0_0_rgba(32,42,90,0.35)]">
              {w.gen}
            </span>
          )}
        </div>

        {/* آواتار هم‌پوشان */}
        <div className="relative -mt-9 mx-auto z-20 flex justify-center">
          {w.avatar ? (
            <img
              src={w.avatar}
              alt={w.name}
              loading="lazy"
              decoding="async"
              className="w-[4.5rem] h-[4.5rem] rounded-full object-cover border-2 border-navy shadow-[2.5px_2.5px_0_0_rgba(32,42,90,0.35)]"
            />
          ) : (
            <div
              className="w-[4.5rem] h-[4.5rem] rounded-full border-2 border-navy flex items-center justify-center font-black text-base shadow-[2.5px_2.5px_0_0_rgba(32,42,90,0.35)]"
              style={{ backgroundColor: theme.tint, color: theme.accent }}
            >
              {initials(w.name)}
            </div>
          )}
        </div>

        {/* نام و نقش */}
        <div className="px-4 pt-2 text-center">
          <h3 className="font-black text-[1.0625rem] text-navy leading-snug line-clamp-1">{w.name}</h3>
          {w.role && (
            <p className="text-[0.75rem] font-extrabold text-teal-text mt-0.5 line-clamp-2">{w.role}</p>
          )}
        </div>

        {/* بج‌های جشنواره / رشته / مقام */}
        <div className="px-4 pt-3 pb-4 mt-auto flex flex-wrap justify-center gap-1.5">
          <span className="text-[0.6875rem] font-black px-2.5 py-1 rounded-full bg-navy-alt text-white">
            {w.festival}
          </span>
          <span className="text-[0.6875rem] font-bold px-2.5 py-1 rounded-full border border-navy/20 text-navy/70 bg-[#FAFAFA]">
            {w.field}
          </span>
          <span
            className="text-[0.6875rem] font-black px-2.5 py-1 rounded-full text-white"
            style={{ backgroundColor: theme.accent }}
          >
            {w.rankLabel}
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
  const winners = useMemo(() => flatten(rawHonors), [rawHonors]);

  return (
    <>
      {/* ═════════ مقدمه ═════════ */}
      <section className="pt-14 sm:pt-20 pb-8 sm:pb-10 bg-white" dir="rtl">
        <Container className="text-center">
          <h1 className="font-black text-[1.75rem] sm:text-[2.625rem] lg:text-[3.25rem] leading-[1.35] text-ink mb-4">
            آرشیو <span className="text-navy-alt">افتخارات</span> رکاد
          </h1>
          <p className="font-medium text-[0.875rem] sm:text-[1.0625rem] leading-[1.9] text-ink/60 max-w-2xl mx-auto">
            هر کارت، یه دانش‌آموز رکاده که توی یه جشنواره مقام آورده —
            جشنواره، رشته و مقامش روی همون کارت نوشته شده.
          </p>
        </Container>
      </section>

      {/* ═════════ گرید تخت ۳تایی — هر دانش‌آموز یک کارت ═════════ */}
      <section className="pb-16 sm:pb-20 bg-white" dir="rtl">
        <Container>
          {winners.length === 0 ? (
            <div className="bg-white border-2 border-dashed border-navy/20 rounded-[0_1.5rem_0_1.5rem] [corner-shape:squircle] px-6 py-10 text-center max-w-xl mx-auto">
              <h2 className="font-black text-[1rem] text-navy mb-1.5">لیست منتخبین هنوز ثبت نشده</h2>
              <p className="text-[0.8125rem] text-navy/60 leading-7">
                به‌محض وارد شدن اسامی برنده‌ها در پنل مدیریت، همین‌جا نمایش داده می‌شه.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8 auto-rows-fr">
              {winners.map((w) => (
                <WinnerCard key={w.key} w={w} />
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
