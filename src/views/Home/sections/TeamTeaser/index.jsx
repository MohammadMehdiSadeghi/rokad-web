"use client";

import Container from "../../../../layout/Container";
import { ChevronLeftIcon } from "../../../../common/Icons";

const sectionPattern = "/assets/Pattern/layout-pattern.png";

/* =========================================================
   TEAM DATA — تصاویر واقعی عوامل از about/Team
========================================================= */

const FEATURED = {
  name: "حامد آرون",
  role: "بنیان‌گذار",
  desc: "مدیرعامل و بنیان‌گذار رکاداسکول — کسی که ایده‌ی اولین هنرستان استارتاپی ایران رو شکل داد.",
  quote: "«رکاد یک مدرسه نیست، یک اکوسیستمه.»",
  image: "/assets/about/Team/arvan.png",
  theme: "navy",
};

const MEMBERS = [
  {
    name: "علیرضا عزیزپور",
    role: "مدیرعامل",
    badge: "مدیرعامل",
    image: "/assets/about/Team/azizpoor.png",
    theme: "teal",
  },
  {
    name: "مبینا فلاح",
    role: "معاون هنرستان دخترانه",
    badge: "معاون",
    image: "/assets/about/Team/fallah.png",
    theme: "magenta",
  },
  {
    name: "امیرحسین امیریان",
    role: "راهبر هنرستان پسرانه",
    badge: "راهبر",
    image: "/assets/about/Team/amirian.png",
    theme: "navy",
  },
  {
    name: "رویا دولت‌آبادی",
    role: "راهبر هنرستان دخترانه",
    badge: "راهبر",
    image: "/assets/about/Team/dolat-abadi.png",
    theme: "orange",
  },
];

/* =========================================================
   THEMES — نگاشت تم → کلاس‌های استاتیک Tailwind
========================================================= */

const THEMES = {
  navy: {
    photoBg: "bg-[#21295a]",
    badgeBg: "bg-[#21295a]",
    badgeText: "text-white",
    nameColor: "text-[#292827]",
    quoteColor: "text-[#21295a]",
    pill1: "bg-[#21295a]",
    pill2: "bg-[#21295a]",
    pill3: "bg-[#e9eaef] border border-[#21295a]",
  },
  teal: {
    photoBg: "bg-[#58bdaf]",
    badgeBg: "bg-[#347e75]",
    badgeText: "text-white",
    nameColor: "text-[#292827]",
    quoteColor: "text-[#347e75]",
    pill1: "bg-[#58bdaf]",
    pill2: "bg-[#58bdaf]",
    pill3: "bg-[#eef8f7] border border-[#58bdaf]",
  },
  magenta: {
    photoBg: "bg-[#e0195b]",
    badgeBg: "bg-[#e0195b]",
    badgeText: "text-white",
    nameColor: "text-[#292827]",
    quoteColor: "text-[#e0195b]",
    pill1: "bg-[#e0195b]",
    pill2: "bg-[#e0195b]",
    pill3: "bg-[#fce8ef] border border-[#e0195b]",
  },
  orange: {
    photoBg: "bg-[#f4971f]",
    badgeBg: "bg-[#ba7b16]",
    badgeText: "text-white",
    nameColor: "text-[#292827]",
    quoteColor: "text-[#ba7b16]",
    pill1: "bg-[#f4971f]",
    pill2: "bg-[#f4971f]",
    pill3: "bg-[#fef6e8] border border-[#f4971f]",
  },
};

/* =========================================================
   MINI CARD — کارت کوچک (پرسنل توی گرید ۲×۲)
========================================================= */

function MiniCard({ member }) {
  const theme = THEMES[member.theme];

  return (
    <div className="relative w-full mx-auto">
      <div
        aria-hidden="true"
        className="absolute top-[0.3125rem] left-[0.3125rem] w-full h-full bg-[#292827] rounded-[0_1.25rem_0_1.25rem] [corner-shape:squircle]"
      />
      <div className="relative z-10 bg-white border-[0.125rem] border-[#292827] rounded-[0_1.25rem_0_1.25rem] [corner-shape:squircle] overflow-hidden">
        {/* عکس */}
        <div className={`relative h-[11.5rem] sm:h-[13rem] overflow-hidden ${theme.photoBg}`}>
          <img
            src={member.image}
            alt={member.name}
            loading="lazy"
            draggable="false"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-black/5" />
        </div>

        {/* اطلاعات */}
        <div className="p-3 sm:p-4 bg-white">
          <h4 className="text-center font-black text-[0.9375rem] sm:text-[1.0625rem] leading-[1.4] text-[#292827] whitespace-nowrap">
            {member.name}
          </h4>
          <p className="text-center text-[0.75rem] font-semibold text-[#777777] leading-[1.5] mt-1 mb-2.5">
            {member.role}
          </p>

          <div className="flex justify-between items-center pt-2.5 border-t-[0.125rem] border-dashed border-[#292827]/20">
            <div className="flex gap-1">
              <span className={`w-3.5 h-2.5 rounded-[2px_4px_2px_4px] ${theme.pill1}`} />
              <span className={`w-3.5 h-2.5 rounded-[2px_4px_2px_4px] ${theme.pill2}`} />
              <span className={`w-3.5 h-2.5 rounded-[2px_4px_2px_4px] ${theme.pill3}`} />
            </div>
            <span
              className={`px-2.5 py-1 rounded-full text-[0.625rem] font-extrabold ${theme.badgeBg} ${theme.badgeText}`}
            >
              {member.badge}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   MAIN SECTION — طرح T4: Featured + Mini Grid
========================================================= */

export default function TeamTeaser() {
  return (
    <section
      id="team-teaser"
      dir="rtl"
      className="relative overflow-hidden bg-white pt-[4rem] sm:pt-[5rem] lg:pt-[6.5rem] pb-[4rem] sm:pb-[5rem] lg:pb-[6.5rem] px-4 sm:px-6 lg:px-8"
    >
      {/* ── Background Pattern Layer — همون ماسک گرادیانی بقیه‌ی سکشن‌ها ── */}
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

      <Container className="relative z-10">
        {/* ── هدر ── */}
        <div className="max-w-[50rem] mb-10 lg:mb-12">
          <h2 className="flex flex-wrap items-center gap-x-2 sm:gap-x-3 gap-y-1 font-black text-[1.75rem] sm:text-[2.25rem] lg:text-[2.625rem] leading-[1.3] text-[#292827]">
            <span className="inline-block -rotate-3">آدم‌های</span>
            <span className="inline-block rotate-3 text-[#e0195b]">رُکاد</span>
          </h2>
          <p className="font-semibold text-[#777777] text-[0.875rem] sm:text-[0.9375rem] lg:text-[1.0625rem] leading-[1.9] mt-3 max-w-[34rem]">
            هر پروژه یک قصه داره، پشت هر قصه یک تیم — امروز با چهار نفر از این
            تیم آشنا شو.
          </p>
        </div>

        {/* ── گرید اصلی: Featured + Mini Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_2fr] gap-8 lg:gap-10 items-start lg:items-center">
          {/* ════ Featured — بنیان‌گذار (راست در RTL) ════ */}
          <div className="relative order-1">
            <div className="absolute -top-4 -right-3 sm:-right-4 z-20 bg-[#ffd641] text-[#292827] border-2 border-[#292827] rounded-[0_0.75rem_0_0.75rem] px-3 py-1.5 font-black text-[0.75rem] rotate-3 shadow-[3px_3px_0_#292827] whitespace-nowrap">
              امضای رُکاد
            </div>

            <div className="relative -rotate-1">
              {/* سایه‌ی پشتی */}
              <div
                aria-hidden="true"
                className="absolute top-[0.375rem] left-[0.375rem] w-full h-full bg-[#292827] rounded-[0_1.75rem_0_1.75rem] [corner-shape:squircle]"
              />
              <div className="relative z-10 bg-[#21295a] border-[0.15625rem] border-[#292827] rounded-[0_1.75rem_0_1.75rem] [corner-shape:squircle] overflow-hidden">
                {/* عکس بزرگ */}
                <div className="relative h-[17rem] sm:h-[19rem] lg:h-[21.25rem] overflow-hidden">
                  <img
                    src={FEATURED.image}
                    alt={FEATURED.name}
                    loading="lazy"
                    draggable="false"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-[#21295a]/10" />
                </div>

                {/* اطلاعات */}
                <div className="p-5 sm:p-6 bg-white">
                  <span className="inline-block bg-[#21295a] text-white px-3.5 py-1 rounded-full text-[0.6875rem] font-extrabold mb-2.5">
                    {FEATURED.role}
                  </span>
                  <h3 className="text-[1.375rem] sm:text-[1.625rem] font-black text-[#292827] leading-[1.3] mb-1">
                    {FEATURED.name}
                  </h3>
                  <p className="text-[0.8125rem] font-semibold text-[#777777] leading-[1.75]">
                    {FEATURED.desc}
                  </p>
                  <div className="flex justify-between items-center gap-3 mt-4 pt-3.5 border-t-[0.125rem] border-dashed border-[#292827]/20">
                    <span className="text-[0.8125rem] font-bold text-[#21295a] italic">
                      {FEATURED.quote}
                    </span>
                    <a
                      href="#"
                      className="inline-flex items-center gap-1.5 text-[0.8125rem] font-black text-[#21295a] shrink-0 hover:opacity-70 transition-opacity"
                    >
                      بیوگرافی
                      <ChevronLeftIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ════ Mini Grid — ۲×۲ ════ */}
          <div className="order-2">
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              {MEMBERS.map((member, i) => (
                <div
                  key={member.name}
                  className={[
                    i === 0 && "lg:-rotate-1",
                    i === 1 && "lg:rotate-[1.5deg]",
                    i === 2 && "lg:rotate-2 lg:mt-1",
                    i === 3 && "lg:-rotate-[1.5deg] lg:mt-1",
                  ].join(" ")}
                >
                  <MiniCard member={member} />
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8 lg:mt-10 text-center">
              <a
                href="#"
                className="relative inline-flex items-center justify-center gap-2.5 -rotate-1 hover:rotate-0 hover:-translate-y-1 transition-all duration-300 bg-[#21295a] text-white border-[0.125rem] border-[#292827] font-black text-[0.9375rem] sm:text-[1rem] px-7 py-3 rounded-[0_0.625rem_0_0.625rem] [corner-shape:squircle] shadow-[4px_4px_0_#292827] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0_#292827]"
              >
                دیدن ۲۸ نفر تیم
                <ChevronLeftIcon className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
