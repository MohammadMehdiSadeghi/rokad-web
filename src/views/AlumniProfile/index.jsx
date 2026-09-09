"use client";

import Link from "next/link";
import Container from "../../layout/Container";
import { ChevronLeftIcon, LinkedInIcon } from "../../common/Icons";
import { useEnrollment } from "../../lib/EnrollmentContext";
import { PERSONAS, INK, INK_LIGHT, findAlumni, themeFor } from "../Alumni/data";

/* =========================================================
   پروفایل دانش‌آموخته — دیزاین سیستم رکاد
   شامل: جایگاه شغلی فعلی، دستاوردها و افتخارات،
   فعالیت‌های کلیدی در دوره دانش‌آموزی، پروژه‌های شاخص،
   پیام و نقل‌قول، و مشخصات کلیدی.
========================================================= */

function initials(name) {
  const parts = name.split(" ");
  return (parts[0]?.[0] ?? "") + "." + (parts[1]?.[0] ?? "");
}

/* ── آیکون‌های اختصاصی SVG ── */
function AwardIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}

function StarIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function BriefcaseIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="14" x="2" y="7" rx="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

function ProjectIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 7V5a2 2 0 0 1 2-2h2" />
      <path d="M17 3h2a2 2 0 0 1 2 2v2" />
      <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
      <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
      <rect width="10" height="10" x="7" y="7" rx="2" />
    </svg>
  );
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

/* ── تیتر سکشن ── */
function SectTitle({ p, children }) {
  return (
    <h2 className="font-black text-[1.375rem] sm:text-[1.75rem] leading-[1.3] text-ink mb-6 flex items-center gap-3">
      <span className="flex-shrink-0 w-3 h-3 rounded-full" style={{ background: p.normal }} />
      <span className="whitespace-nowrap">{children}</span>
      <span
        aria-hidden="true"
        className="flex-1 h-[2px] rounded-[2px]"
        style={{ background: p.lightActive }}
      />
    </h2>
  );
}

/* ── برچسب‌های هیرو ── */
function GlassLabel({ children }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 text-[0.75rem] font-bold text-white mb-3"
      style={{
        background: "rgba(255,255,255,0.18)",
        border: "1px solid rgba(255,255,255,0.35)",
        borderRadius: "40px",
        padding: "5px 14px",
        backdropFilter: "blur(4px)",
      }}
    >
      {children}
    </span>
  );
}

function QuickPill({ k, v }) {
  return (
    <div
      className="text-[0.75rem] text-white"
      style={{
        background: "rgba(255,255,255,0.12)",
        border: "1px solid rgba(255,255,255,0.25)",
        borderRadius: "40px",
        padding: "6px 14px",
      }}
    >
      {k}: <strong className="mr-1 font-extrabold">{v}</strong>
    </div>
  );
}

/* =========================================================
   MAIN COMPONENT
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
          <p className="mb-8 text-ink/60">
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

  const p = themeFor(member);
  const persona = PERSONAS[member.persona] ?? PERSONAS.eco;

  return (
    <>
      {/* ════ HERO — معرفی شاخص با رنگ تم ════ */}
      <section
        dir="rtl"
        className="relative overflow-hidden"
        style={{ background: p.normal, color: p.textOnNormal }}
      >
        {/* المان‌های تزئینی پس‌زمینه */}
        <span
          aria-hidden="true"
          className="absolute rounded-full pointer-events-none"
          style={{
            top: "-120px",
            left: "-100px",
            width: "420px",
            height: "420px",
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

        <Container className="relative z-10 py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8 lg:gap-12 items-center">
            {/* آواتار */}
            <div
              className="grid mx-auto font-black select-none lg:mx-0 place-items-center"
              style={{
                width: "260px",
                height: "260px",
                maxWidth: "65vw",
                maxHeight: "65vw",
                borderRadius: "34px 0 34px 0",
                background: "#fff",
                color: p.normal,
                border: "4px solid #fff",
                boxShadow: `2.75px 2.75px 0 ${p.darker}`,
                fontSize: "76px",
              }}
            >
              {initials(member.name)}
            </div>

            {/* مشخصات فردی */}
            <div className="text-center lg:text-right">
              <div className="flex flex-wrap items-center justify-center gap-2 mb-2 lg:justify-start">
                <GlassLabel>
                  بخش {persona.label} رکاد — {member.gen}
                </GlassLabel>
                {member.currentStatus && (
                  <span
                    className="inline-flex items-center gap-1.5 text-[0.75rem] font-bold text-white mb-3"
                    style={{
                      background: "rgba(0,0,0,0.18)",
                      borderRadius: "40px",
                      padding: "5px 14px",
                    }}
                  >
                    <BriefcaseIcon className="w-3.5 h-3.5" />
                    {member.currentStatus}
                  </span>
                )}
              </div>

              <h1 className="font-black text-[2.5rem] sm:text-[3.25rem] lg:text-[4rem] leading-[1.1] mb-2 tracking-tight">
                {member.name}
              </h1>
              <p className="text-[1.0625rem] sm:text-[1.1875rem] font-medium opacity-90 mb-5">
                {member.role}
              </p>

              {/* کپسول‌های سریع */}
              <div className="flex flex-wrap gap-2.5 justify-center lg:justify-start mb-6">
                <QuickPill k="محل کار فعلی" v={member.city} />
                <QuickPill k="پروژه‌ها" v={`${member.projects} نمونه‌کار`} />
                <QuickPill k="مقالات" v={`${member.posts} یادداشت`} />
                <QuickPill k="فارغ‌التحصیلی" v={`سال ${member.year}`} />
              </div>

              {/* دکمه‌های اقدام */}
              <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
                <BtnSolid p={p} onClick={openEnrollment}>
                  ارتباط و همکاری با {member.name.split(" ")[0]}
                </BtnSolid>
                <BtnLinkedIn href={member.linkedIn} name={member.name.split(" ")[0]} />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ════ بدنه اصلی: ستون محتوا + سایدبار اطلاعات ════ */}
      <section dir="rtl" className="px-4 py-12 bg-white sm:py-16 sm:px-6 lg:px-8">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-12 items-start">
            
            {/* ── ستون محتوا ── */}
            <div className="space-y-10">
              
              {/* ۱. بیوگرافی و معرفی */}
              <div>
                <span
                  className="text-[0.6875rem] font-bold tracking-[0.15em] block mb-2"
                  style={{ color: p.normal }}
                >
                  ◉ درباره دانش‌آموخته
                </span>
                <h2 className="font-black text-[1.375rem] sm:text-[1.75rem] leading-[1.4] text-ink mb-4">
                  تخصص در {member.field}
                </h2>
                {member.bio.map((para, i) => (
                  <p
                    key={i}
                    className="text-[0.9375rem] leading-[2] text-ink/80 mb-3"
                  >
                    {para}
                  </p>
                ))}
              </div>

              {/* ۲. پیام و روایت دانش‌آموخته از رکاد (یک‌بند شاخص) */}
              {member.quote && (
                <div
                  className="relative p-6 sm:p-7"
                  style={{
                    background: p.light,
                    border: `1.5px solid ${p.normal}`,
                    borderRadius: "24px 0 24px 0",
                    boxShadow: `2.75px 2.75px 0 ${p.normal}`,
                  }}
                >
                  <span
                    aria-hidden="true"
                    className="absolute -top-3 right-6 text-[0.75rem] font-black px-3 py-0.5 rounded-full text-white"
                    style={{ background: p.normal }}
                  >
                    روایت تجربه در رکاد
                  </span>
                  <p className="text-[1rem] sm:text-[1.0625rem] leading-[2] font-semibold text-ink pt-1">
                    «{member.quote}»
                  </p>
                </div>
              )}

              {/* ۳. دستاوردها و افتخارات (فیلد اختصاصی از ویس) */}
              {member.achievements && member.achievements.length > 0 && (
                <div>
                  <SectTitle p={p}>دستاوردها و افتخارات</SectTitle>
                  <div className="grid gap-3">
                    {member.achievements.map((ach, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3.5 p-4 rounded-xl transition-all"
                        style={{
                          background: "#FAFAFA",
                          border: `1.5px solid ${INK_LIGHT}`,
                          boxShadow: `2px 2px 0 ${INK_LIGHT}`,
                        }}
                      >
                        <span
                          className="w-8 h-8 rounded-lg flex-shrink-0 grid place-items-center mt-0.5"
                          style={{
                            background: p.lightActive,
                            color: p.dark,
                          }}
                        >
                          <AwardIcon className="w-4 h-4" />
                        </span>
                        <div className="text-[0.9375rem] font-bold text-ink leading-[1.8]">
                          {ach}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ۴. فعالیت‌های کلیدی در دوره دانش‌آموزی رکاد (فیلد اختصاصی از ویس) */}
              {member.studentActivities && member.studentActivities.length > 0 && (
                <div>
                  <SectTitle p={p}>فعالیت‌های کلیدی در دوران دانش‌آموزی رکاد</SectTitle>
                  <div className="grid gap-3">
                    {member.studentActivities.map((act, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3.5 p-4 rounded-xl"
                        style={{
                          background: "#FAFAFA",
                          border: `1.5px solid ${INK_LIGHT}`,
                          boxShadow: `2px 2px 0 ${INK_LIGHT}`,
                        }}
                      >
                        <span
                          className="w-8 h-8 rounded-lg flex-shrink-0 grid place-items-center mt-0.5"
                          style={{
                            background: p.light,
                            color: p.normal,
                          }}
                        >
                          <StarIcon className="w-4 h-4" />
                        </span>
                        <div className="text-[0.9375rem] font-medium text-ink/90 leading-[1.8]">
                          {act}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* ── سایدبار اطلاعات کلیدی و برچسب‌ها ── */}
            <aside
              className="p-6 space-y-6 sm:p-7 lg:sticky lg:top-24"
              style={{
                background: p.light,
                border: `1.5px solid ${p.normal}`,
                borderRadius: "24px 0 24px 0",
                boxShadow: `2.75px 2.75px 0 ${p.normal}`,
              }}
            >
              <div>
                <h3
                  className="text-[0.9375rem] font-extrabold mb-4 flex items-center gap-2"
                  style={{ color: p.dark }}
                >
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: p.normal }} />
                  شناسنامه دانش‌آموخته
                </h3>
                <dl className="grid gap-3">
                  {[
                    ["وضعیت شغلی فعلی", member.currentStatus || member.role],
                    ["نسل رکاد", member.gen],
                    ["بخش رکاد", persona.label],
                    ["حوزه تخصصی", member.field],
                    ["شهر فعالیت", member.city],
                    ["سال فارغ‌التحصیلی", member.year],
                    ["تعداد نمونه‌کارها", `${member.projects} پروژه`],
                    ["تعداد مقالات", `${member.posts} یادداشت`],
                  ].map(([k, v]) => (
                    <div
                      key={k}
                      className="flex justify-between items-baseline gap-3 text-[0.8125rem] pb-2.5"
                      style={{
                        borderBottom: `1px dashed ${p.normal}40`,
                      }}
                    >
                      <dt className="text-ink/65 whitespace-nowrap">{k}</dt>
                      <dd className="font-bold text-left text-ink">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* مهارت‌های کلیدی */}
              {member.skills && member.skills.length > 0 && (
                <div>
                  <h4 className="text-[0.8125rem] font-bold text-ink/80 mb-2.5">
                    مهارت‌های کلیدی:
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {member.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="text-[0.6875rem] font-bold px-2.5 py-1 rounded-md"
                        style={{
                          background: "#fff",
                          color: p.dark,
                          border: `1px solid ${p.normal}50`,
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* ابزارهای تخصصی */}
              {member.tools && (
                <div className="text-[0.8125rem] text-ink/75 pt-2" style={{ borderTop: `1px dashed ${p.normal}40` }}>
                  <span className="block mb-1 font-bold text-ink">ابزارهای مسلط:</span>
                  <span className="leading-relaxed">{member.tools}</span>
                </div>
              )}

              <Link
                href="/alumni"
                className="inline-flex items-center gap-1.5 mt-3 text-[0.8125rem] font-bold transition-colors hover:opacity-80"
                style={{ color: p.dark }}
              >
                <ChevronLeftIcon className="w-3 h-3 rotate-180" />
                بازگشت به همه دانش‌آموختگان
              </Link>
            </aside>
          </div>
        </Container>
      </section>

      {/* ════ نمونه‌کارها و پروژه‌های شاخص (پروموت شده) ════ */}
      {member.portfolio && member.portfolio.length > 0 && (
        <section
          dir="rtl"
          className="px-4 border-t bg-bg-neutral py-14 sm:py-16 sm:px-6 lg:px-8"
          style={{ borderColor: INK_LIGHT }}
        >
          <Container>
            <div className="flex flex-col justify-between gap-4 mb-8 sm:flex-row sm:items-end">
              <div>
                <span
                  className="text-[0.6875rem] font-bold tracking-[0.15em] block mb-2"
                  style={{ color: p.normal }}
                >
                  ◉ پرونده کاری و نمونه‌کارها
                </span>
                <h2 className="font-black text-[1.5rem] sm:text-[2rem] text-ink">
                  پروژه‌ها و دستاوردهای پیاده‌سازی شده
                </h2>
              </div>
              <p className="text-[0.8125rem] text-ink/60 max-w-sm">
                نمونه‌ای از محصولات، سامانه‌ها و پروژه‌های اجرا شده توسط {member.name.split(" ")[0]} در بازار کار و دوره رکاد.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {member.portfolio.map((proj, i) => (
                <article
                  key={i}
                  className="flex flex-col justify-between overflow-hidden bg-white"
                  style={{
                    border: `1.5px solid ${INK_LIGHT}`,
                    borderRadius: "24px 0 24px 0",
                    boxShadow: `2.75px 2.75px 0 ${p.normal}`,
                  }}
                >
                  <div
                    className="relative p-6 overflow-hidden"
                    style={{
                      background: p.light,
                      borderBottom: `1.5px solid ${p.normal}30`,
                    }}
                  >
                    <span
                      className="absolute top-4 left-4 text-[1.5rem] font-black opacity-25 select-none"
                      style={{ color: p.normal }}
                    >
                      #{String(i + 1).padStart(2, "0").replace(/[0-9]/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d])}
                    </span>
                    <span
                      className="inline-flex items-center gap-1 text-[0.6875rem] font-extrabold px-2.5 py-1 rounded-md mb-3"
                      style={{
                        background: "#fff",
                        color: p.dark,
                        border: `1px solid ${p.normal}40`,
                      }}
                    >
                      <ProjectIcon className="w-3.5 h-3.5" />
                      پروژه شاخص
                    </span>
                    <h3 className="font-extrabold text-[1.125rem] text-ink mb-1.5">
                      {proj.title}
                    </h3>
                    <p className="text-[0.75rem] font-bold" style={{ color: p.dark }}>
                      {proj.meta}
                    </p>
                  </div>

                  {proj.desc && (
                    <div className="flex flex-col justify-between flex-1 p-5">
                      <p className="text-[0.8125rem] text-ink/75 leading-[1.9]">
                        {proj.desc}
                      </p>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* ════ مقالات و یادداشت‌ها ════ */}
      {member.articles && member.articles.length > 0 && (
        <section dir="rtl" className="px-4 bg-white border-t py-14 sm:py-16 sm:px-6 lg:px-8" style={{ borderColor: INK_LIGHT }}>
          <Container>
            <SectTitle p={p}>مقالات و تجربیات مکتوب</SectTitle>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              {member.articles.map((art, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between gap-4 p-5 bg-white sm:p-6"
                  style={{
                    border: `1.5px solid ${INK_LIGHT}`,
                    borderRadius: "17px 0 17px 0",
                    boxShadow: `2px 2px 0 ${INK_LIGHT}`,
                  }}
                >
                  <div className="min-w-0">
                    <h4 className="font-bold text-[0.9375rem] text-ink mb-1">
                      {art.title}
                    </h4>
                    <p className="text-[0.75rem] text-ink/65 leading-relaxed">{art.excerpt}</p>
                  </div>
                  <span
                    aria-hidden="true"
                    className="grid flex-shrink-0 rounded-full w-9 h-9 place-items-center"
                    style={{
                      background: p.light,
                      border: `1.5px solid ${p.normal}`,
                      color: p.dark,
                    }}
                  >
                    <ChevronLeftIcon className="w-3.5 h-3.5" />
                  </span>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}

