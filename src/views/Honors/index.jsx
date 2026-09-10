/* =========================================================
   صفحه آرشیو افتخارات — هر افتخار یک سکشن مستقل
   ---------------------------------------------------------
   - بنر افقی افتخار سمت راست، ~۳۰-۴۰٪ عرض (clamp با min/max)
     ترتیب RTL: مدال ← مقام ← توضیح
   - زیر هر بنر، گرید کارت دانش‌آموزان برنده (۳ ستون دسکتاپ)
   - سکشن‌های متناوب: سفید / tintِ رنگ همان رتبه
   - اندازه‌ها همه با min/max یکسان (clamp + auto-rows-fr)
   - برخلاف صفحه اصلی، اینجا اسلایدر نیست و مودالی هم وجود
     ندارد — همه‌چیز همین‌جا دیده می‌شود.
   - دیتا: /api/award?populate=winners + fallback نمونه
========================================================= */
"use client";

import Container from "../../layout/Container";
import useRokadData from "../../lib/useRokadData";
import { fetchAwards } from "../../lib/api";
import fallbackAwards from "../../lib/fallback/awards";

/* ---------- تکسچر پترن هر رتبه (همان maps اسلایدر اصلی) ---------- */
const goldPattern = "/assets/home/Honors/yellowTexture.png";
const silverPattern = "/assets/home/Honors/grayTexture.png";
const bronzePattern = "/assets/home/Honors/BronzeTexture.png";
const navyPattern = "/assets/home/Honors/blueTexture.png";

const THEME_MAP = {
  first: { accent: "#F8A41D", tint: "#FEF6E8", textOn: "#57390A", pattern: goldPattern },
  second: { accent: "#525252", tint: "#F2F2F2", textOn: "#FFFFFF", pattern: silverPattern },
  third: { accent: "#A56216", tint: "#FEF3E8", textOn: "#FFFFFF", pattern: bronzePattern },
  district: { accent: "#202a5a", tint: "#F4F5FB", textOn: "#FFFFFF", pattern: navyPattern },
};
const DEFAULT_THEME = THEME_MAP.first;

/* عرض بنر افتخار: ~۳۶٪ از کانتینر، با کف و سقف ثابت */
const BANNER_WIDTH = "clamp(20rem, 36%, 28rem)";

/* رقم فارسی */
const toFa = (n) => String(n).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);

/* حروف اول نام — مثل کارت‌های دانش‌آموختگان */
function initials(name) {
  const parts = String(name || "").trim().split(" ");
  return (parts[0]?.[0] ?? "") + "." + (parts[1]?.[0] ?? "");
}

export default function HonorsPage() {
  const allHonors = useRokadData(fetchAwards, fallbackAwards);

  return (
    <>
      {/* =====================================================
          مقدمه صفحه
      ====================================================== */}
      <section className="pt-14 sm:pt-20 pb-4 sm:pb-6 bg-white" dir="rtl">
        <Container className="text-center">
          <h1 className="font-black text-[1.75rem] sm:text-[2.625rem] lg:text-[3.25rem] leading-[1.35] text-ink mb-4">
            آرشیو <span className="text-navy-alt">افتخارات</span> رکاد
          </h1>
          <p className="font-medium text-[0.875rem] sm:text-[1.0625rem] leading-[1.9] text-ink/60 max-w-2xl mx-auto">
            هر مدال روی این صفحه یعنی یه دانش‌آموز که از صفر شروع کرد و ایستاد
            تا آخرش. این‌جا مرور کاملی از مقام‌ها و جشنواره‌هایی هست که
            دانش‌آموزهای رکاد توش درخشیدن.
          </p>
        </Container>
      </section>

      {/* =====================================================
          سکشن‌های مستقل — یکی برای هر افتخار
          پس‌زمینه متناوب: سفید / tint همان رتبه
      ====================================================== */}
      {allHonors.map((honor, i) => {
        const theme = THEME_MAP[honor.rank] ?? DEFAULT_THEME;
        const winners = honor.winners ?? [];
        const isTinted = i % 2 === 1;
        // تیلت متناوب خیلی ملایم روی بنر — مثل برچسب
        const tilt = i % 2 === 0 ? "rotate-[0.75deg]" : "-rotate-[0.75deg]";

        return (
          <section
            key={honor.id ?? i}
            id={`honor-${honor.id ?? i}`}
            className="relative w-full py-10 sm:py-12 lg:py-14"
            style={{ backgroundColor: isTinted ? theme.tint : "#FFFFFF" }}
            dir="rtl"
          >
            <Container>
              {/* ── بنر افقی افتخار — سمت راست، ~۳۶٪ عرض ── */}
              <div
                className={`${tilt} hover:rotate-0 transition-transform duration-300 relative w-full sm:mx-0 mx-auto min-h-[6.5rem] sm:min-h-[7.5rem] max-h-[11rem]`}
                style={{ width: BANNER_WIDTH, maxWidth: "100%" }}
              >
                {/* لایه سایه سخت — رنگ تم رتبه */}
                <div
                  aria-hidden="true"
                  className="absolute top-[0.125rem] left-[0.125rem] sm:top-[0.1875rem] sm:left-[0.1875rem] w-full h-full rounded-[0_1.5rem_0_1.5rem] [corner-shape:squircle]"
                  style={{ backgroundColor: theme.accent }}
                />

                {/* بدنه بنر — سفید روی tint، با پترن کم‌رنگ */}
                <div
                  className="relative z-10 w-full h-full bg-white border-[0.140625rem] rounded-[0_1.5rem_0_1.5rem] [corner-shape:squircle] overflow-hidden flex flex-row flex-wrap items-center gap-x-4 gap-y-2 px-4 sm:px-5 py-4"
                  style={{ borderColor: theme.accent }}
                >
                  {/* پترن پس‌زمینه بنر */}
                  <div className="absolute inset-0 pointer-events-none">
                    <img
                      src={theme.pattern}
                      alt=""
                      aria-hidden="true"
                      draggable="false"
                      className="absolute inset-0 w-full h-full object-cover scale-125 select-none opacity-[0.18]"

          loading="lazy"
          decoding="async"
          />
                  </div>

                  {/* ۱) مدال — راست‌ترین (اولین فرزند در RTL) */}
                  <div className="relative z-20 w-[4rem] h-[4rem] sm:w-[4.5rem] sm:h-[4.5rem] shrink-0 -rotate-3">
                    <img
                      src={honor.badge}
                      alt={honor.title}
                      draggable="false"
                      className="w-full h-full object-contain drop-shadow-md select-none"

          loading="lazy"
          decoding="async"
          />
                  </div>

                  {/* ۲) مقام */}
                  <h2
                    className="relative z-20 font-black text-[1.0625rem] sm:text-[1.25rem] lg:text-[1.375rem] leading-snug max-w-[15ch]"
                    style={{ color: theme.accent }}
                  >
                    {honor.title}
                  </h2>

                  {/* ۳) توضیح — چپ‌ترین */}
                  <p className="relative z-20 text-[0.75rem] sm:text-[0.8125rem] font-semibold leading-[1.7] text-ink/60 flex-1 min-w-[10rem]">
                    {honor.meta}
                  </p>
                </div>
              </div>

              {/* ── برندگان — زیر بنر، نه کنارش ── */}
              <div className="mt-8 sm:mt-9">
                {winners.length === 0 ? (
                  /* حالت خالی — همان زبان طراحی empty-state */
                  <div className="bg-white border-2 border-dashed border-navy/20 rounded-[0_1.5rem_0_1.5rem] [corner-shape:squircle] px-6 py-8 sm:py-10 text-center max-w-xl mx-auto sm:mx-0 sm:mr-0">
                    <h3 className="font-black text-[1rem] text-navy mb-1.5">
                      لیست منتخبین هنوز ثبت نشده
                    </h3>
                    <p className="text-[0.8125rem] text-navy/60 leading-7">
                      به‌محض وارد شدن اسامی برنده‌های این افتخار در پنل مدیریت،
                      همین‌جا نمایش داده می‌شه.
                    </p>
                  </div>
                ) : (
                  <>
                    {/* سربرگ کوچک برندگان */}
                    <div className="flex items-center gap-2.5 mb-4 sm:mb-5">
                      <span
                        className="w-2 h-2 rounded-full shrink-0"
                        style={{ backgroundColor: theme.accent }}
                      />
                      <h3 className="font-black text-[0.9375rem] sm:text-[1.0625rem] text-ink">
                        برندگان این افتخار
                      </h3>
                      <span
                        className="text-[0.6875rem] font-black px-2 py-0.5 rounded-full bg-white border"
                        style={{ borderColor: theme.accent, color: theme.accent }}
                      >
                        {toFa(winners.length)} نفر
                      </span>
                    </div>

                    {/* گرید کارت‌ها — ۱→۲→۳ ستون، ارتفاع یکسان */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 auto-rows-fr">
                      {winners.map((w, idx) => (
                        <div key={w.name + idx} className="relative">
                          {/* لایه زیرین سایه سخت — رنگ تم رتبه */}
                          <div
                            aria-hidden="true"
                            className="absolute inset-0 translate-x-[0.3rem] translate-y-[0.3rem] rounded-[0_1.5rem_0_1.5rem] [corner-shape:squircle]"
                            style={{ backgroundColor: theme.accent }}
                          />

                          {/* کارت کلاسیک رکاد — سبک صفحه دانش‌آموختگان */}
                          <article
                            className="relative bg-white rounded-[0_1.5rem_0_1.5rem] [corner-shape:squircle] overflow-hidden border-2 border-navy flex flex-col h-full min-h-[13.5rem] max-h-[16.5rem]"
                          >
                            {/* هدر گرافیکی رنگی + پترن */}
                            <div
                              className="relative w-full h-[4.5rem] shrink-0 overflow-hidden"
                              style={{ backgroundColor: theme.accent }}
                            >
                              <img
                                src={theme.pattern}
                                alt=""
                                aria-hidden="true"
                                draggable="false"
                                className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none opacity-40"

          loading="lazy"
          decoding="async"
          />
                              {w.gen && (
                                <span className="absolute top-2.5 right-3 z-20 text-[0.6875rem] font-black px-2.5 py-0.5 rounded-full bg-white text-navy border border-navy/20 shadow-[1.5px_1.5px_0_0_rgba(32,42,90,0.35)]">
                                  {w.gen}
                                </span>
                              )}
                            </div>

                            {/* آواتار مدور همپوشان */}
                            <div className="relative -mt-9 mx-auto z-[20] flex justify-center">
                              {w.avatar ? (
                                <img
                                  src={w.avatar}
                                  alt={w.name}
                                  className="w-[4.5rem] h-[4.5rem] rounded-full object-cover border-2 border-navy shadow-[2.5px_2.5px_0_0_rgba(32,42,90,0.35)]"

          loading="lazy"
          decoding="async"
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

                            {/* بدنه */}
                            <div className="px-4 pb-2 pt-1 text-center flex-1 flex flex-col items-center min-h-0">
                              <h4 className="font-black text-[1.0625rem] text-navy mb-0.5 line-clamp-1">
                                {w.name}
                              </h4>
                              {w.role && (
                                <p className="text-[0.75rem] font-extrabold text-teal-text mb-1.5 line-clamp-2">
                                  {w.role}
                                </p>
                              )}
                            </div>

                            {/* فوتر */}
                            <div className="border-t border-dashed border-navy/15 pt-2 pb-3 px-4 flex items-center justify-between text-[0.6875rem] font-bold text-navy/60 bg-[#FAFAFA] shrink-0">
                              <span>برنده این افتخار 🏅</span>
                              <span>{honor.rank === "district" ? "نشان افتخار" : "مقام جشنواره"}</span>
                            </div>
                          </article>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </Container>
          </section>
        );
      })}
    </>
  );
}
