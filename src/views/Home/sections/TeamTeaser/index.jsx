"use client";

import Container from "../../../../layout/Container";
import { ChevronLeftIcon, LinkedInIcon, InstagramIcon, TwitterIcon, GlobeIcon } from "../../../../common/Icons";

const sectionPattern = "/assets/Pattern/layout-pattern.png";

// پترن‌های رنگی (مطابق Stats)
const patternBlue = "/assets/home/StatCard/blue.png";
const patternGreen = "/assets/home/StatCard/green.png";
const patternPink = "/assets/home/StatCard/pink.png";
const patternYellow = "/assets/home/StatCard/yellow.png";

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
    pattern: patternBlue,
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
    pattern: patternGreen,
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
    pattern: patternPink,
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
    pattern: patternYellow,
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
   SOCIAL ICONS — آیکون‌های شبکه‌های اجتماعی
========================================================= */

const socialLinks = [
  { label: "لینکدین", href: "#", Icon: LinkedInIcon, bg: "bg-[#eef7ff]", border: "border-[#70b8e8]", fg: "text-[#0a78b5]" },
  { label: "اینستاگرام", href: "#", Icon: InstagramIcon, bg: "bg-[#fdf1f6]", border: "border-[#e77cb0]", fg: "text-[#d62976]" },
  { label: "توییتر", href: "#", Icon: TwitterIcon, bg: "bg-[#eef8fd]", border: "border-[#77c8f0]", fg: "text-[#1da1f2]" },
  { label: "وبسایت", href: "#", Icon: GlobeIcon, bg: "bg-[#eef1f8]", border: "border-[#9aa4c8]", fg: "text-[#21295a]" },
];

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
        {/* عکس — پترن رنگی پشت، عکس متناسب با ابعاد خودش */}
        <div className={`relative h-[11.5rem] sm:h-[13rem] overflow-hidden ${theme.photoBg}`}>
          <img
            src={theme.pattern}
            alt=""
            draggable="false"
            className="absolute inset-0 w-full h-full object-cover select-none opacity-50"
          />
          <img
            src={member.image}
            alt={member.name}
            loading="lazy"
            draggable="false"
            className="absolute inset-x-0 bottom-0 z-10 w-full h-full object-contain object-bottom"
          />
        </div>

        {/* اطلاعات */}
        <div className="p-3 sm:p-4 bg-white">
          <h4 className="text-center font-black text-[0.9375rem] sm:text-[1.0625rem] leading-[1.4] text-[#292827] whitespace-nowrap">
            {member.name}
          </h4>
          <p className="text-center text-[0.75rem] font-semibold text-[#777777] leading-[1.5] mt-1 mb-2.5">
            {member.role}
          </p>

          <div className="flex justify-start gap-1.5 pt-2.5 border-t-[0.125rem] border-dashed border-[#292827]/20">
            {socialLinks.slice(0, 3).map(({ label, href, Icon, bg, border, fg }, i) => (
              <a
                key={i}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center justify-center w-[1.2rem] h-[1.2rem] sm:w-[1.25rem] sm:h-[1.25rem] ${bg} border ${border} ${fg} rounded-[0.2rem] shrink-0 transition-transform hover:-translate-y-0.5`}
              >
                <Icon className="w-[55%] h-[55%]" />
              </a>
            ))}
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
      {/* ── Background Pattern Layer ── */}
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
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1.6fr] gap-8 lg:gap-10 items-start">
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
              <div className="relative z-10 bg-[#58bdaf] border-[0.15625rem] border-[#292827] rounded-[0_1.75rem_0_1.75rem] [corner-shape:squircle] overflow-hidden">
                {/* عکس بزرگ — پترن فیروزه‌ای پشت، عکس متناسب با ابعاد خودش */}
                <div className="relative h-[19.8125rem] sm:h-[25.8125rem] lg:h-[30.8125rem] overflow-hidden">
                                  <img
                                    src={patternGreen}
                                    alt=""
                                    draggable="false"
                                    className="absolute inset-0 w-full h-full object-cover select-none opacity-50"
                                  />
                                  <img
                                    src={FEATURED.image}
                                    alt={FEATURED.name}
                                    loading="lazy"
                                    draggable="false"
                                    className="absolute inset-x-0 bottom-0 z-10 w-full h-full object-contain object-bottom"
                                  />
                                </div>

                {/* اطلاعات */}
                <div className="p-5 sm:p-6 bg-white">
                  <span className="inline-block bg-[#347e75] text-white px-3.5 py-1 rounded-full text-[0.6875rem] font-extrabold mb-2.5">
                    {FEATURED.role}
                  </span>
                  <h3 className="text-[1.375rem] sm:text-[1.625rem] font-black text-[#292827] leading-[1.3] mb-1">
                    {FEATURED.name}
                  </h3>
                  <p className="text-[0.8125rem] font-semibold text-[#777777] leading-[1.75]">
                    {FEATURED.desc}
                  </p>

                  {/* شبکه‌های اجتماعی — پایین کارت، راست */}
                  <div className="flex justify-start gap-2 mt-4 pt-3.5 border-t-[0.125rem] border-dashed border-[#292827]/20">
                    {socialLinks.map(({ label, href, Icon, bg, border, fg }, i) => (
                      <a
                        key={i}
                        href={href}
                        aria-label={label}
                        target="_blank"
                        rel="noreferrer"
                        className={`inline-flex items-center justify-center w-[1.5rem] h-[1.5rem] sm:w-[1.6rem] sm:h-[1.6rem] ${bg} border ${border} ${fg} rounded-[0.25rem] shrink-0 transition-transform hover:-translate-y-0.5`}
                      >
                        <Icon className="w-[55%] h-[55%]" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ════ Mini Grid — ۲×۲ ════ */}
          <div className="order-2">
            <div className="grid grid-cols-2 gap-8 sm:gap-10">
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
          </div>
        </div>

        {/* CTA — مشاهده همه عوامل (وسط‌چین، هم‌اندازه متن) */}
        <div className="mt-8 lg:mt-10 text-center">
          <a
            href="#"
            className="relative inline-flex items-center justify-center gap-2 -rotate-1 hover:rotate-0 hover:-translate-y-1 transition-all duration-300 bg-white border-[0.125rem] border-[#21295a] text-[#21295a] font-black text-[0.9375rem] sm:text-[1rem] px-5 py-2 rounded-[0_0.625rem_0_0.625rem] [corner-shape:squircle] shadow-[4px_4px_0_#21295a] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0_#21295a] hover:shadow-[6px_6px_0_#21295a] whitespace-nowrap"
          >
            مشاهده همه عوامل
            <ChevronLeftIcon className="w-4 h-4" />
          </a>
        </div>
      </Container>
    </section>
  );
}