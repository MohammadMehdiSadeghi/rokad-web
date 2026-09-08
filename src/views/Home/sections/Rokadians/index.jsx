"use client";

import Link from "next/link";
import Container from "../../../../layout/Container";
import useRokadData from "../../../../lib/useRokadData";
import { fetchStudents } from "../../../../lib/api";
import fallbackStudents from "../../../../lib/fallback/students";

const sectionPattern = "/assets/Pattern/layout-pattern.png";

/* =========================================================
   CARD
========================================================= */

// موبایل: همون نسبت پرتره‌ی دسکتاپ (عرض/ارتفاع ≈ 0.70) با مقیاس کمی
// بزرگ‌تر — ۱۵×۲۱.۲۵rem؛ اجزای داخلی هم به همان نسبت تنظیم شده‌اند.
const CARD_SIZE =
  "w-[15rem] min-w-[15rem] h-[21.25rem] sm:w-[21rem] sm:min-w-[21rem] sm:h-[24rem] md:w-[23rem] md:min-w-[23rem] md:h-[25rem] lg:w-[14.0625rem] lg:min-w-0 lg:h-[20rem] 2xl:w-[15.75rem] 2xl:h-[22.375rem]";

const HEADER_SIZE =
  "h-[7.875rem] sm:h-[7.75rem] md:h-[8rem] lg:h-[7.5rem] 2xl:h-[8.375rem]";

const AVATAR_WRAP_POS =
  "top-[4.875rem] sm:top-[4.45rem] md:top-[4.6rem] lg:top-[3.75rem] 2xl:top-[4.1875rem]";

const AVATAR_SIZE =
  "w-[6rem] h-[6rem] sm:w-[6.25rem] sm:h-[6.25rem] md:w-[6.5rem] md:h-[6.5rem] lg:w-[5.625rem] lg:h-[5.625rem] 2xl:w-[6.3125rem] 2xl:h-[6.3125rem]";

const CARD_CONTENT_PAD =
  "px-4 pt-[3.5rem] pb-4 sm:px-6 sm:pt-[4rem] md:px-7 md:pt-[4.25rem] lg:px-3 lg:pt-[3.3125rem] lg:pb-4 2xl:pt-[3.75rem]";

const NAME_SIZE =
  "text-[1rem] sm:text-[1.1rem] md:text-[1.15rem] lg:text-[1rem] 2xl:text-[1.125rem]";

const DESC_SIZE =
  "text-[0.75rem] sm:text-[0.8rem] md:text-[0.82rem] lg:text-[0.75rem] 2xl:text-[0.8125rem] max-w-[12.5rem] sm:max-w-[17rem] md:max-w-[18rem]";

const BADGE_SIZE =
  "text-[0.625rem] sm:text-[0.675rem] md:text-[0.7rem] lg:text-[0.625rem] 2xl:text-[0.6875rem] px-[0.875rem] py-[0.3125rem] lg:px-[0.8125rem] lg:py-[0.25rem]";

const FOOTER_ICON_SIZE =
  "w-[1.2rem] h-[1.2rem] sm:w-[1.25rem] sm:h-[1.25rem] lg:w-[1.25rem] lg:h-[1.25rem]";

const FOOTER_EXP_SIZE =
  "text-[0.58rem] sm:text-[0.61rem] md:text-[0.63rem] lg:text-[0.625rem] 2xl:text-[0.6875rem]";

/* =========================================================
   LINKEDIN
========================================================= */

function LinkedinIcon() {
  return (
    <span
      className={`inline-flex items-center justify-center ${FOOTER_ICON_SIZE} bg-[#eef7ff] border border-[#70b8e8] text-[#0a78b5] rounded-[0.2rem] shrink-0`}
    >
      <svg
        width="55%"
        height="55%"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M6.5 8.5H3V21h3.5V8.5ZM4.75 3C3.65 3 3 3.72 3 4.65S3.65 6.3 4.72 6.3h.03c1.1 0 1.75-.73 1.75-1.65C6.47 3.72 5.83 3 4.75 3ZM21 13.85c0-3.77-2.01-5.52-4.7-5.52-2.16 0-3.13 1.19-3.67 2.02V8.5H9.13V21h3.5v-6.97c0-1.84.35-3.62 2.63-3.62 2.25 0 2.28 2.1 2.28 3.74V21H21v-7.15Z" />
      </svg>
    </span>
  );
}

/* =========================================================
   STACK CARD — فقط دسکتاپ
========================================================= */

function StackCard({ layer, rotation }) {
  return (
    <div
      aria-hidden="true"
      className={`absolute top-0 left-0 ${CARD_SIZE} bg-white border-[0.125rem] border-[#292827] rounded-[0_0.875rem_0_0.875rem] overflow-hidden pointer-events-none`}
      style={{
        transform: `translateX(-${layer * 0.55}rem) rotate(${rotation}deg)`,
        transformOrigin: "center center",
      }}
    >
      <div
        className={`relative w-full ${HEADER_SIZE} bg-gradient-to-l from-[#59bbaf] to-[#58bdaf] overflow-hidden`}
      >
        <img
          src="/assets/home/Rokadians/Frame 1000006407.png"
          alt=""
          draggable="false"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      <div className="absolute left-2 right-2 bottom-10 border-t border-dashed border-[#292827]/20" />

      <div className="absolute left-2.5 bottom-2.5 flex gap-1">
        <span
          className={`${FOOTER_ICON_SIZE} border border-[#70b8e8]/40 rounded-[0.125rem]`}
        />
        <span
          className={`${FOOTER_ICON_SIZE} border border-[#70b8e8]/40 rounded-[0.125rem]`}
        />
        <span
          className={`${FOOTER_ICON_SIZE} border border-[#70b8e8]/40 rounded-[0.125rem]`}
        />
      </div>
    </div>
  );
}

/* =========================================================
   STUDENT CARD
========================================================= */

function StudentCard({ student, index, stacked }) {
  const rotation = index % 2 === 0 ? 1 : -1;

  return (
    <div
      className={`relative ${CARD_SIZE} flex-shrink-0 snap-center`}
      style={{
        transform: `rotate(${rotation}deg)`,
        transformOrigin: "center center",
      }}
    >
      {/* Stack فقط روی دسکتاپ */}
      {stacked && (
        <div
          aria-hidden="true"
          className={`hidden lg:block absolute top-0 left-0 ${CARD_SIZE} pointer-events-none z-[1]`}
        >
          <StackCard layer={5} rotation={1} />
          <StackCard layer={4} rotation={-1} />
          <StackCard layer={3} rotation={1} />
          <StackCard layer={2} rotation={-1} />
          <StackCard layer={1} rotation={1} />
        </div>
      )}

      {/* Shadow */}
      <div
        aria-hidden="true"
        className="absolute top-[0.3rem] left-[0.3rem] lg:top-[0.3125rem] lg:left-[0.3125rem] w-full h-full bg-[#292827] rounded-[0_1.25rem_0_1.25rem] lg:rounded-[0_0.875rem_0_0.875rem] z-[5]"
      />

      {/* Main Card */}
      <div className="relative z-[10] w-full h-full bg-white rounded-[0_1.25rem_0_1.25rem] lg:rounded-[0_0.875rem_0_0.875rem] overflow-hidden border-[0.125rem] border-[#292827] flex flex-col">
        {/* Header */}
        <div
          className={`relative w-full ${HEADER_SIZE} shrink-0 overflow-hidden bg-gradient-to-l from-[#59bbaf] to-[#58bdaf]`}
        >
          <img
            src="/assets/home/Rokadians/Frame 1000006407.png"
            alt=""
            aria-hidden="true"
            draggable="false"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
          />

          {/* subtle overlay */}
          <div className="absolute inset-0 bg-black/5" />
        </div>

        {/* Avatar */}
        <div
          className={`absolute ${AVATAR_WRAP_POS} left-1/2 -translate-x-1/2 z-[30]`}
        >
          {/* avatar shadow */}
          <div
            aria-hidden="true"
            className={`absolute top-[0.18rem] left-[0.18rem] ${AVATAR_SIZE} bg-[#292827] rounded-full`}
          />

          <img
            src={student.avatar || "/assets/home/Rokadians/Ellipse 83.png"}
            alt={student.name}
            className={`relative z-[10] ${AVATAR_SIZE} rounded-full object-cover border-[0.12rem] border-[#292827] bg-white`}
          />
        </div>

        {/* Content */}
        <div
          className={`flex-1 min-h-0 flex flex-col items-center ${CARD_CONTENT_PAD} text-center`}
        >
          <h4
            className={`font-black ${NAME_SIZE} leading-[1.3] text-[#292827] whitespace-nowrap`}
          >
            {student.name}
          </h4>

          <p
            className={`${DESC_SIZE} text-[#777777] font-medium mt-2 lg:mt-[5px] leading-[1.7] flex-1 pb-3 lg:pb-2.5`}
          >
            {student.desc}
          </p>

          {/* Badge */}
          <div className="relative inline-flex items-center justify-center shrink-0">
            <div
              aria-hidden="true"
              className="absolute top-[0.15rem] left-[0.15rem] w-full h-full bg-[#292827] rounded-[0_0.5rem_0_0.5rem]"
            />

            <button
              type="button"
              className={`relative z-10 ${BADGE_SIZE} bg-white border-[0.09375rem] border-[#292827] text-[#292827] font-bold rounded-[0_0.5rem_0_0.5rem] whitespace-nowrap hover:bg-[#292827] hover:text-white transition-colors`}
            >
              {student.experience || "نسل رکاد"}
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-auto shrink-0 border-t-[0.09375rem] border-dashed border-[#292827]/35">
          <div
            dir="ltr"
            className="flex items-center justify-between px-3 sm:px-4 lg:px-[0.625rem] pt-2.5 lg:pt-[0.5rem] pb-2.5 lg:pb-[0.5625rem]"
          >
            <div className="flex items-center gap-1">
              {(Array.isArray(student.socials) && student.socials.length
                ? student.socials
                : [{ type: "", link: "#" }]
              )
                .slice(0, 3)
                .map((social, si) => (
                  <a
                    key={si}
                    href={social.link || "#"}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.type || "شبکه اجتماعی"}
                  >
                    <LinkedinIcon />
                  </a>
                ))}
            </div>

            <span
              dir="rtl"
              className={`${FOOTER_EXP_SIZE} text-[#292827]/45 font-medium whitespace-nowrap`}
            >
              {student.experience}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   MAIN SECTION
========================================================= */

export default function Rokadians() {
  // دیتای داینامیک از بک‌اند؛ api.js آیتم‌های بدون تصویر رو فیلتر می‌کنه
  // و اگه API آفلاینه fallback (۳ کارت با تصویر) برمی‌گرده
  const allStudents = useRokadData(fetchStudents, fallbackStudents);
  // فقط ۳ کارت — کارت سوم state استک‌شده داره (مثل دیزاین اصلی)
  const students = allStudents.slice(0, 3);

  return (
    <section
      id="rokadians"
      dir="rtl"
      className="relative overflow-hidden bg-white pt-[2rem] sm:pt-[2.5rem] lg:pt-[2.5rem] pb-[3.5rem] sm:pb-[5rem] lg:pb-[6rem]"
    >
      {/* ── Background Pattern Layer — همون ماسک گرادیانی هیرو/دوئال‌اسکول ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-60 rotate-180
                [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]
                [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]"
      >
        <img
          src={sectionPattern}
          alt=""
          draggable="false"
          className="w-full h-full object-cover select-none"
        />
      </div>

      {/* Hide scrollbar */}
      <style>{`
        .rokadians-rail::-webkit-scrollbar {
          display: none;
        }

        .rokadians-rail {
          -ms-overflow-style: none;
          scrollbar-width: none;
          scroll-behavior: smooth;
        }
      `}</style>

      <Container className="relative z-10">
        <div className="w-full">
          {/* =================================================
              TITLE
          ================================================= */}

          <div className="text-center max-w-[50rem] mx-auto mb-4 sm:mb-6 lg:mb-10">
            <h2 className="font-black text-[1.375rem] xs:text-[1.5rem] sm:text-[2.25rem] lg:text-[3.3125rem] leading-[1.3] text-[#292827]">
              <span>ببین </span>
              <span className="text-[#21295A]">رکادی‌ها</span>{" "}
              <span>الان </span>
              <span className="text-[#4bb5a8]">کجان؟</span>
            </h2>

            {/* زیرنویس — بصری هاید شده ولی برای سئو توی DOM می‌مونه */}
            <p className="sr-only">
              فارغ‌التحصیلان ما در بهترین تیم‌های فنی کشور و به‌عنوان بنیان‌گذار
              استارتاپ‌های خودشون فعال هستن.
            </p>
          </div>

          {/* =================================================
              MAIN CONTENT — فاصله استاندارد بین ستون ۳۰۰+ و کارت‌ها
          ================================================= */}

          <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-14 xl:gap-20 2xl:gap-24">
            {/* =================================================
                CARDS AREA
            ================================================= */}

            <div className="relative w-full lg:flex-1 order-2 lg:order-1 overflow-visible">
              {/* =================================================
                  MOBILE STATS & CTA (Centered & Balanced Bar)
              ================================================= */}

              <div className="lg:hidden flex items-center justify-center gap-2.5 xs:gap-3.5 w-full max-w-[24.5rem] xs:max-w-[27rem] mx-auto mb-5 px-2">
                {/* کارت آمار */}
                <div className="flex-1 flex items-center justify-center gap-2 xs:gap-2.5 bg-white border-2 border-[#21295a] rounded-xl shadow-[2.5px_2.5px_0_#21295a] px-3 py-1.5 xs:px-4 xs:py-2 min-h-[2.85rem] xs:min-h-[3.15rem]">
                  <span
                    className="text-[1.375rem] xs:text-[1.5rem] leading-none text-[#21295a] tracking-tight"
                    style={{ fontWeight: 950 }}
                  >
                    ۳۰۰<span className="text-[#4bb5a8]">+</span>
                  </span>
                  <div className="flex flex-col text-right leading-tight">
                    <span
                      className="text-[0.75rem] xs:text-[0.8125rem] text-[#21295a]"
                      style={{ fontWeight: 950 }}
                    >
                      دانش‌آموز
                    </span>
                    <span className="text-[0.625rem] xs:text-[0.6875rem] font-bold text-[#21295a]/60 whitespace-nowrap">
                      در مسیر ساخت آینده
                    </span>
                  </div>
                </div>

                {/* دکمه مشاهده همه */}
                <Link
                  href="/alumni"
                  className="shrink-0 inline-flex items-center justify-center gap-1.5 bg-[#21295a] hover:bg-white text-white hover:text-[#21295a] border-2 border-[#21295a] font-black text-xs xs:text-[0.875rem] px-4 py-2 xs:px-5 xs:py-2.5 rounded-xl shadow-[2.5px_2.5px_0_#4bb5a8] hover:shadow-[2.5px_2.5px_0_#21295a] transition-all duration-200 active:scale-[0.98] whitespace-nowrap min-h-[2.85rem] xs:min-h-[3.15rem] group"
                >
                  <span>مشاهده همه</span>
                  <span className="inline-block transition-transform duration-200 group-hover:-translate-x-1 text-[#4bb5a8] group-hover:text-[#21295a] font-bold text-xs">
                    ←
                  </span>
                </Link>
              </div>

              {/* =================================================
                  MASK — محو شدن لبه‌ی ریل به رنگ پس‌زمینه (سفید)؛ فقط دسکتاپ
              ================================================= */}

              <div
                aria-hidden="true"
                className="hidden lg:block absolute -top-[1.5625rem] -bottom-[1.5625rem] left-[-12%] w-[112%] z-[30] pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to right, #ffffff 0%, rgba(255,255,255,0.95) 5%, rgba(255,255,255,0.55) 20%, rgba(255,255,255,0.2) 45%, rgba(255,255,255,0.05) 70%, rgba(255,255,255,0) 95%)",
                }}
              />

              {/* =================================================
                  CARD RAIL
              ================================================= */}

              <div className="rokadians-rail relative z-[10] flex flex-nowrap items-center justify-start gap-5 sm:gap-6 md:gap-8 lg:gap-[2.25rem] xl:gap-[2.5rem] 2xl:gap-[3rem] overflow-x-auto lg:overflow-visible snap-x snap-mandatory lg:snap-none py-2 sm:py-3 lg:py-0 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0 lg:pl-[0.3125rem] 2xl:pl-[0.5rem] pr-8 lg:pr-0">
                {students.map((student, index) => (
                  <StudentCard
                    key={index}
                    student={student}
                    index={index}
                    stacked={index === students.length - 1}
                  />
                ))}
              </div>

              {/* =================================================
                  MOBILE SWIPE HINT
              ================================================= */}

              <div className="lg:hidden flex items-center justify-center gap-2 mt-4">
                <span className="text-[0.7rem] sm:text-[0.75rem] font-bold text-[#292827]/45">
                  برای دیدن رکادی‌های بعدی بکش
                </span>

                <span className="text-[#4bb5a8] text-xl animate-pulse">←</span>
              </div>
            </div>

            {/* =================================================
                DESKTOP STATS
            ================================================= */}

            <div className="hidden lg:flex w-full lg:w-[17rem] xl:w-[19rem] 2xl:w-[21rem] flex-shrink-0 flex-col justify-center text-center lg:text-right order-2 lg:pt-8">
              <div className="rotate-[2deg] items-center justify-center flex flex-col mx-auto lg:mx-0">
                <p className="font-black text-[4rem] 2xl:text-[4.5rem] leading-[1] text-[#21295a]">
                  ۳۰۰+
                </p>

                <p className="font-black text-[1.5rem] 2xl:text-[1.6875rem] text-[#21295a] mt-2.5">
                  دانش‌آموز
                </p>

                <p className="font-bold text-[0.875rem] 2xl:text-[0.9375rem] text-[#21295a]/80 mt-2">
                  در مسیر ساخت آینده
                </p>

                <Link
                  href="/alumni"
                  className="relative inline-flex items-center justify-center -rotate-1 hover:rotate-0 hover:-translate-y-1 hover:shadow-[6px_7px_0_#21295a] transition-all duration-300 bg-white border-[0.125rem] border-[#21295a] text-[#21295a] font-black text-[1.125rem] 2xl:text-[1.25rem] px-5 py-2 rounded-[0_0.625rem_0_0.625rem] shadow-[4px_4px_0_#21295a] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0_#21295a] whitespace-nowrap mt-6 [corner-shape:squircle]"
                >
                  مشاهده همه
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
