"use client";

import Link from "next/link";
import Container from "../../layout/Container";
import { ChevronLeftIcon, LinkedInIcon } from "../../common/Icons";
import { useEnrollment } from "../../lib/EnrollmentContext";
import { PERSONAS, INK, INK_LIGHT, findAlumni, themeFor } from "../Alumni/data";

/* =========================================================
   پروفایل دانش‌آموخته — DESIGN 04 «تم شخصیت»
   رنگ‌بندی جنسیتی: دختران = صورتی (accent)، پسران = سبز
   (secondary). پرسونا (کالج/کلوپ/اکو) فقط به‌عنوان
   برچسب «بخش رُکاد» نمایش داده می‌شود.
   هیرو تمام‌عرض با رنگ تم جنسیتی + دایره‌های تزئینی،
   آواتار بزرگ با شدو سخت 6px، کارت اطلاعات، نمونه‌کارها
   و مقالات — همه با توکن‌های دیزاین‌سیستم رکاد
========================================================= */

function initials(name) {
  const parts = name.split(" ");
  return (parts[0]?.[0] ?? "") + "." + (parts[1]?.[0] ?? "");
}

/* ── دکمه‌ها ── */
function BtnSolid({ p, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center gap-1.5 font-extrabold text-[0.9375rem] cursor-pointer transition-all duration-200 hover:-translate-y-0.5"
      style={{
        background: "#fff",
        color: p.normal,
        border: `1.5px solid #fff`,
        borderRadius: "0.625rem",
        padding: "10px 22px",
        boxShadow: `2.75px 2.75px 0 ${p.darker}`,
      }}
    >
      {children}
    </button>
  );
}

/* لینکدین — فقط وقتی لینک واقعی در دیتا هست رندر می‌شود */
function BtnLinkedIn({ href, name }) {
  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1.5 font-bold text-[0.9375rem] text-white cursor-pointer transition-all duration-200 hover:bg-white hover:text-ink"
      style={{
        background: "transparent",
        border: "1.5px solid rgba(255,255,255,0.5)",
        borderRadius: "0.625rem",
        padding: "10px 22px",
      }}
    >
      <LinkedInIcon className="w-4 h-4" />
      لینکدین {name}
    </a>
  );
}

/* ── تیتر سکشن با خط رنگی ادامه‌دار (d4-sect-title) ── */
function SectTitle({ p, children }) {
  return (
    <h2
      className="font-black text-[1.5rem] sm:text-[2rem] leading-[1.3] text-ink mb-5 flex items-center gap-4"
    >
      <span className="whitespace-nowrap">◉ {children}</span>
      <span
        aria-hidden="true"
        className="flex-1 h-[3px] rounded-[2px]"
        style={{ background: p.normal }}
      />
    </h2>
  );
}

/* ── برچسب شیشه‌ای روی هیرو (pill با backdrop-blur) ── */
function GlassLabel({ children }) {
  return (
    <span
      className="inline-flex items-center gap-2 text-[0.6875rem] font-bold text-white mb-4"
      style={{
        background: "rgba(255,255,255,0.15)",
        border: "1px solid rgba(255,255,255,0.35)",
        borderRadius: "40px",
        padding: "6px 14px",
        backdropFilter: "blur(4px)",
      }}
    >
      ◉ {children}
    </span>
  );
}

/* ── کپسول اطلاعات سریع روی هیرو ── */
function QuickPill({ k, v }) {
  return (
    <div
      className="text-[0.75rem] text-white"
      style={{
        background: "rgba(255,255,255,0.1)",
        border: "1px solid rgba(255,255,255,0.25)",
        borderRadius: "40px",
        padding: "8px 14px",
      }}
    >
      {k}:<strong className="font-extrabold mr-1.5">{v}</strong>
    </div>
  );
}

/* =========================================================
   MAIN
========================================================= */

export default function AlumniProfileView({ slug }) {
  const member = findAlumni(slug);
  const { openEnrollment } = useEnrollment();

  if (!member) {
    return (
      <section dir="rtl" className="py-24 px-4 sm:px-6 lg:px-8 min-h-[50vh]">
        <Container className="text-center">
          <h1 className="font-black text-[1.75rem] sm:text-[2.25rem] text-ink mb-4">
            این دانش‌آموخته پیدا نشد
          </h1>
          <p className="text-ink/60 mb-8">
            ممکنه آدرس اشتباه باشه یا پروفایل هنوز ساخته نشده باشه.
          </p>
          <Link
            href="/alumni"
            className="inline-flex items-center gap-1.5 font-extrabold text-[0.9375rem] text-white cursor-pointer transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: PERSONAS.eco.normal,
              border: `1.5px solid ${PERSONAS.eco.dark}`,
              borderRadius: "0.625rem",
              padding: "10px 22px",
              boxShadow: `2.75px 2.75px 0 ${PERSONAS.eco.darker}`,
            }}
          >
            بازگشت به لیست دانش‌آموختگان
            <ChevronLeftIcon className="w-3.5 h-3.5" />
          </Link>
        </Container>
      </section>
    );
  }

  const p = themeFor(member); // تم جنسیتی: دختر = صورتی، پسر = سبز
  const persona = PERSONAS[member.persona]; // فقط برای برچسب بخش

  return (
    <>
      {/* ════ HERO — بلید تمام‌عرض با رنگ تم شخصیت ════ */}
      <section
        dir="rtl"
        className="relative overflow-hidden"
        style={{ background: p.normal, color: p.textOnNormal }}
      >
        {/* دایره‌های تزئینی */}
        <span
          aria-hidden="true"
          className="absolute rounded-full pointer-events-none"
          style={{
            top: "-100px",
            left: "-100px",
            width: "400px",
            height: "400px",
            background: "rgba(255,255,255,0.06)",
          }}
        />
        <span
          aria-hidden="true"
          className="absolute rounded-full pointer-events-none"
          style={{
            bottom: "-80px",
            right: "-80px",
            width: "280px",
            height: "280px",
            background: "rgba(255,255,255,0.05)",
          }}
        />

        <Container className="relative z-10 py-14 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-12 items-center">
            {/* آواتار بزرگ — ردیوس 34px، بوردر 4px سفید، شدو سخت 6px */}
            <div
              className="mx-auto lg:mx-0 grid place-items-center font-black select-none"
              style={{
                width: "280px",
                height: "280px",
                maxWidth: "70vw",
                maxHeight: "70vw",
                borderRadius: "34px 0 34px 0",
                background: "#fff",
                color: p.normal,
                border: "4px solid #fff",
                boxShadow: `2.75px 2.75px 0 ${p.darker}`,
                fontSize: "80px",
              }}
            >
              {initials(member.name)}
            </div>

            {/* مشخصات */}
            <div className="text-center lg:text-right">
              <GlassLabel>
                بخش {persona.label} رُکاد — {member.gen}
              </GlassLabel>
              <h1 className="font-black text-[2.75rem] sm:text-[3.5rem] lg:text-[4.5rem] leading-[1] mb-2 tracking-tight">
                {member.name}
              </h1>
              <p className="text-[1.125rem] sm:text-[1.25rem] font-medium opacity-90 mb-5">
                {member.role}
              </p>

              <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-6">
                <QuickPill k="محل کار" v={member.city} />
                <QuickPill k="نمونه‌کار" v={`${member.projects} پروژه`} />
                <QuickPill k="مقاله" v={`${member.posts} مقاله`} />
                <QuickPill k="سال ورود" v={member.year} />
              </div>

              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <BtnSolid p={p} onClick={openEnrollment}>
                  تماس با {member.name.split(" ")[0]}
                </BtnSolid>
                <BtnLinkedIn href={member.linkedIn} name={member.name.split(" ")[0]} />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ════ بک‌کرانکس: بیو + کارت اطلاعات کلیدی ════ */}
      <section dir="rtl" className="bg-white py-14 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-12 items-start">
            {/* بیو */}
            <div>
              <p
                className="text-[0.6875rem] font-bold tracking-[0.2em] mb-3"
                style={{ color: p.normal }}
              >
                ◉ بیوگرافی
              </p>
              <h2 className="font-black text-[1.5rem] sm:text-[2rem] leading-[1.4] text-ink mb-4">
                {member.field}
              </h2>
              {member.bio.map((para, i) => (
                <p
                  key={i}
                  className="text-[0.9375rem] leading-[2] text-ink/80 mb-4"
                >
                  {para}
                </p>
              ))}

              {/* نقل‌قول */}
              <blockquote
                className="mt-6 bg-white p-6 sm:p-7"
                style={{
                  border: `1.5px solid ${p.normal}`,
                  borderRadius: "24px 0 24px 0",
                  boxShadow: `2.75px 2.75px 0 ${p.normal}`,
                }}
              >
                <p
                  className="text-[1.0625rem] sm:text-[1.1875rem] leading-[1.9] font-medium text-ink"
                >
                  <span
                    className="text-[2.5rem] leading-none ml-1 align-bottom"
                    style={{ color: p.normal }}
                  >
                    «
                  </span>
                  {member.quote}
                  <span style={{ color: p.normal }}>»</span>
                </p>
              </blockquote>
            </div>

            {/* کارت اطلاعات کلیدی */}
            <aside
              className="p-6 sm:p-7 lg:sticky lg:top-28"
              style={{
                background: p.light,
                border: `1.5px solid ${p.normal}`,
                borderRadius: "24px 0 24px 0",
                boxShadow: `2.75px 2.75px 0 ${p.normal}`,
              }}
            >
              <h3
                className="text-[0.875rem] font-bold mb-4"
                style={{ color: p.dark }}
              >
                ◉ اطلاعات کلیدی
              </h3>
              <dl className="grid gap-2.5">
                {[
                  ["نسل رُکاد", member.gen],
                  ["بخش رُکاد", persona.label],
                  ["حوزه", member.field],
                  ["محل کار", member.city],
                  ["سال فارغ‌التحصیلی", member.year],
                  ["نمونه‌کار", `${member.projects} پروژه`],
                  ["مقاله در رُکاد", `${member.posts} مقاله`],
                  ["ابزار اصلی", member.tools],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="flex justify-between items-baseline gap-3 text-[0.8125rem] pb-2.5"
                    style={{
                      borderBottom: `1px dashed ${p.normal}40`,
                    }}
                  >
                    <dt className="text-ink/60 whitespace-nowrap">{k}</dt>
                    <dd className="font-bold text-ink text-left">{v}</dd>
                  </div>
                ))}
              </dl>

              <Link
                href="/alumni"
                className="inline-flex items-center gap-1 mt-5 text-[0.8125rem] font-bold transition-colors hover:opacity-80"
                style={{ color: p.dark }}
              >
                <ChevronLeftIcon className="w-3 h-3 rotate-180" />
                بازگشت به همه دانش‌آموختگان
              </Link>
            </aside>
          </div>
        </Container>
      </section>

      {/* ════ نمونه‌کارها ════ */}
      {member.portfolio.length > 0 && (
        <section
          dir="rtl"
          className="bg-bg-neutral py-14 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
        >
          <Container>
            <SectTitle p={p}>نمونه‌کارها</SectTitle>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {member.portfolio.map((proj, i) => (
                <article
                  key={i}
                  className="bg-white overflow-hidden group cursor-pointer transition-all duration-200 hover:-translate-x-[3px] hover:-translate-y-[3px]"
                  style={{
                    border: `1.5px solid ${p.normal}`,
                    borderRadius: "24px 0 24px 0",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `2.75px 2.75px 0 ${p.normal}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div
                    className="h-[180px] grid place-items-center font-black text-[2rem]"
                    style={{
                      background: p.light,
                      color: p.normal,
                      borderBottom: `1.5px solid ${p.normal}`,
                    }}
                  >
                    {String(i + 1).padStart(2, "0").replace(/[0-9]/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d])}
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-[1rem] text-ink mb-1">
                      {proj.title}
                    </h3>
                    <p className="text-[0.6875rem] text-ink/60">{proj.meta}</p>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* ════ مقالات ════ */}
      {member.articles.length > 0 && (
        <section dir="rtl" className="bg-white py-14 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
          <Container>
            <SectTitle p={p}>مقالات</SectTitle>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {member.articles.map((art, i) => (
                <a
                  key={i}
                  href="/blog"
                  className="bg-white p-5 sm:p-6 flex items-center justify-between gap-4 transition-all duration-150 hover:-translate-x-[2px] hover:-translate-y-[2px]"
                  style={{
                    border: `1.5px solid ${INK_LIGHT}`,
                    borderRadius: "17px 0 17px 0",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = p.normal;
                    e.currentTarget.style.background = p.light;
                    e.currentTarget.style.boxShadow = `2.75px 2.75px 0 ${p.normal}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = INK_LIGHT;
                    e.currentTarget.style.background = "#fff";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div className="min-w-0">
                    <h4 className="font-bold text-[0.9375rem] text-ink mb-1">
                      {art.title}
                    </h4>
                    <p className="text-[0.6875rem] text-ink/60">{art.excerpt}</p>
                  </div>
                  <span
                    aria-hidden="true"
                    className="w-9 h-9 flex-shrink-0 grid place-items-center"
                    style={{
                      borderRadius: "50%",
                      background: p.light,
                      border: `1.5px solid ${p.normal}`,
                      color: p.dark,
                    }}
                  >
                    <ChevronLeftIcon className="w-3.5 h-3.5" />
                  </span>
                </a>
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
