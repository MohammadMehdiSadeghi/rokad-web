"use client";

import Link from "next/link";
import Container from "../../../../layout/Container";
import {
  ChevronLeftIcon,
  LinkedInIcon,
  InstagramIcon,
  TwitterIcon,
  GlobeIcon,
} from "../../../../common/Icons";

const sectionPattern = "/assets/Pattern/layout-pattern.png";
const patternGreen = "/assets/home/TeamTeaser/green.png";
const patternBlue = "/assets/home/TeamTeaser/blue.png";
const patternPink = "/assets/home/TeamTeaser/pink.png";
const patternYellow = "/assets/home/TeamTeaser/yellow.png";

/* =========================================================
   SOCIAL ICONS
========================================================= */

const socialLinks = [
  {
    label: "وبسایت",
    href: "https://arvan.me",
    Icon: GlobeIcon,
    bg: "bg-[#eef8f7]",
    border: "border-[#70b8e8]",
    fg: "text-[#58bdaf]",
  },
  {
    label: "توییتر",
    href: "https://twitter.com",
    Icon: TwitterIcon,
    bg: "bg-[#eef7ff]",
    border: "border-[#70b8e8]",
    fg: "text-[#0a78b5]",
  },
  {
    label: "اینستاگرام",
    href: "https://instagram.com",
    Icon: InstagramIcon,
    bg: "bg-[#fef1f5]",
    border: "border-[#f48fb1]",
    fg: "text-[#e0195b]",
  },
  {
    label: "لینکدین",
    href: "https://linkedin.com",
    Icon: LinkedInIcon,
    bg: "bg-[#eef7ff]",
    border: "border-[#70b8e8]",
    fg: "text-[#0a78b5]",
  },
];

/* =========================================================
   TEAM DATA
========================================================= */

const FEATURED = {
  name: "حامد آرون",
  role: "بنیان‌گذار",
  desc: "مدیرعامل و بنیان‌گذار رکاداسکول — کسی که ایده‌ی اولین هنرستان استارتاپی ایران را شکل داد.",
  image: "/assets/about/Team/arvan.png",
};

const MEMBERS = [
  {
    name: "مبینا فلاح",
    role: "معاون هنرستان دخترانه",
    tag: "هنرستان دخترانه",
    image: "/assets/about/Team/fallah.png",
    color: "#E0195B",
    bgLight: "bg-[#FEFAFB]",
    pattern: patternPink,
    imgClass: "translate-y-3.5 sm:translate-y-4 lg:translate-y-4.5 scale-[1.4]",
  },
  {
    name: "علیرضا عزیزپور",
    role: "مدیرعامل",
    tag: "مدیرعامل",
    image: "/assets/about/Team/azizpoor.png",
    color: "#58BDAF",
    bgLight: "bg-[#EEF8F7]",
    pattern: patternGreen,
    imgClass: "translate-y-3 sm:translate-y-3.5 lg:translate-y-4",
  },
  {
    name: "رویا دولت‌آبادی",
    role: "راهبر هنرستان دخترانه",
    tag: "هنرستان دخترانه",
    image: "/assets/about/Team/dolat-abadi.png",
    color: "#F8A41D",
    bgLight: "bg-[#FEF6E8]",
    pattern: patternYellow,
    imgClass: "translate-y-3 sm:translate-y-3.5 lg:translate-y-4",
  },
  {
    name: "امیرحسین امیریان",
    role: "راهبر هنرستان پسرانه",
    tag: "هنرستان پسرانه",
    image: "/assets/about/Team/amirian.png",
    color: "#202A5A",
    bgLight: "bg-[#F4F5FB]",
    pattern: patternBlue,
    patternOpacity: "opacity-20",
    imgClass: "translate-y-3 sm:translate-y-3.5 lg:translate-y-4",
  },
];

/* =========================================================
   MINI CARD — کارت‌های مربعی گرید ۲×۲
========================================================= */

function MiniCard({ member }) {
  return (
    <div className="relative">
      {/* سایه سخت */}
      <div
        aria-hidden="true"
        className="absolute inset-0 translate-x-[0.25rem] translate-y-[0.25rem] rounded-[0_1.25rem_0_1.25rem] [corner-shape:squircle] bg-navy"
      />

      {/* کارت اصلی */}
      <article className="relative bg-white border-2 border-navy rounded-[0_1.25rem_0_1.25rem] [corner-shape:squircle] overflow-hidden flex flex-col justify-between h-full">
        <div>
          {/* عکس پرسنل */}
          <div
            className="relative h-[9.25rem] sm:h-[10.25rem] lg:h-[11.25rem] overflow-hidden flex items-end justify-center"
            style={{ backgroundColor: member.color }}
          >
            <img
              src={member.pattern}
              alt=""
              draggable="false"
              className={`absolute inset-0 w-full h-full object-cover ${member.patternOpacity || "opacity-40"} select-none`}
            />
            <span className="absolute top-2 right-2 z-20 text-[0.5625rem] sm:text-[0.625rem] font-bold text-white bg-black/35 backdrop-blur-sm px-2 py-0.5 rounded-full border border-white/20">
              {member.tag}
            </span>
            <img
              src={member.image}
              alt={member.name}
              loading="lazy"
              draggable="false"
              className={`relative z-10 h-[9rem] sm:h-[10rem] lg:h-[11rem] w-auto object-contain object-bottom ${member.imgClass || "translate-y-2 sm:translate-y-2.5 lg:translate-y-3 scale-[1.25]"}`}
            />
          </div>

          {/* نام و سمت */}
          <div className="p-2.5 sm:p-3 text-center">
            <h4 className="font-black text-[0.875rem] sm:text-[0.9375rem] text-navy mb-0.5">
              {member.name}
            </h4>
            <p className="text-[0.6875rem] sm:text-[0.75rem] font-semibold text-navy/60">
              {member.role}
            </p>
          </div>
        </div>

        {/* فوتر سوشال */}
        <div className="px-3 py-1.5 border-t border-dashed border-navy/15 flex items-center justify-center gap-1.5 bg-[#FAFAFA]">
          {socialLinks.slice(0, 3).map(({ label, href, Icon, bg, border, fg }, i) => (
            <a
              key={i}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center justify-center w-5 h-5 ${bg} border ${border} ${fg} rounded-[0.25rem] shrink-0 transition-transform hover:-translate-y-0.5`}
            >
              <Icon className="w-3 h-3" />
            </a>
          ))}
        </div>
      </article>
    </div>
  );
}

/* =========================================================
   MAIN SECTION — چیدمان مربعی اصلی (Featured + 2x2 Grid)
========================================================= */

export default function TeamTeaser() {
  return (
    <section
      id="team-teaser"
      dir="rtl"
      className="relative overflow-hidden bg-white py-6 sm:py-8 lg:py-10 w-full"
    >
      {/* ── Background Pattern Layer ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-50 rotate-180 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]"
      >
        <img
          src={sectionPattern}
          alt=""
          draggable="false"
          className="w-full h-full object-cover select-none"
        />
      </div>

      <Container className="relative z-10">
        {/* ── هدر سکشن ── */}
        <div className="flex items-center justify-between gap-3 mb-4 sm:mb-8 lg:mb-[4rem]">
          <h2 className="font-black text-[1.25rem] xs:text-[1.375rem] sm:text-[2.25rem] lg:text-[3.3125rem] leading-[1.2] text-navy flex items-center gap-x-2">
            <span>عوامل</span>
            <span className="text-magenta rotate-[-2deg] inline-block">
              رکاد
            </span>
          </h2>

          <Link
            href="/factors"
            className="relative inline-flex items-center justify-center rotate-[-1.55deg] hover:rotate-0 transition-all duration-300 flex-shrink-0 group"
          >
            <span
              aria-hidden="true"
              className="absolute top-[0.125rem] left-[0.125rem] w-full h-full rounded-[0_0.75rem_0_0.75rem] [corner-shape:squircle] bg-[#21295A]"
            />
            <span className="relative z-10 inline-flex items-center gap-2 bg-white border-[0.125rem] border-[#21295A] text-[#21295A] font-extrabold text-xs xs:text-sm sm:text-base px-3.5 xs:px-4 sm:px-6 py-2 sm:py-2.5 rounded-[0_0.75rem_0_0.75rem] [corner-shape:squircle] whitespace-nowrap cursor-pointer [background-image:linear-gradient(to_right,#21295A,#21295A)] bg-no-repeat [background-size:0%_100%] hover:[background-size:100%_100%] hover:text-white transition-all duration-300 ease-out">
              <span>مشاهده همه</span>
              <ChevronLeftIcon className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
            </span>
          </Link>
        </div>

        {/* ── گرید اصلی: Featured (راست) + ۲×۲ Grid (چپ) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.3fr] gap-5 sm:gap-6 items-stretch">
          {/* ════ Featured — بنیان‌گذار (راست در RTL) ════ */}
          <div className="relative">
            {/* نشان امضای رکاد */}
            <span className="absolute -top-2.5 right-3 z-30 bg-[#F8A41D] text-navy border-2 border-navy rounded-[0_0.625rem_0_0.625rem] [corner-shape:squircle] px-3 py-1 font-black text-[0.75rem] rotate-[-2deg] shadow-[2px_2px_0_0_#202A5A]">
              امضای رکاد
            </span>

            {/* سایه پشتی */}
            <div
              aria-hidden="true"
              className="absolute inset-0 translate-x-[0.35rem] translate-y-[0.35rem] rounded-[0_1.5rem_0_1.5rem] [corner-shape:squircle] bg-navy"
            />

            {/* کارت اصلی */}
            <article className="relative bg-white border-2 border-navy rounded-[0_1.5rem_0_1.5rem] [corner-shape:squircle] overflow-hidden flex flex-col justify-between h-full">
              {/* عکس بزرگ */}
              <div className="relative bg-[#58bdaf] h-[19.5rem] sm:h-[22rem] lg:h-[24.5rem] overflow-hidden flex items-end justify-center">
                <img
                  src={patternGreen}
                  alt=""
                  draggable="false"
                  className="absolute inset-0 w-full h-full object-cover opacity-40 select-none"
                />
                <img
                  src={FEATURED.image}
                  alt={FEATURED.name}
                  loading="lazy"
                  draggable="false"
                  className="relative z-10 h-[18.5rem] sm:h-[21rem] lg:h-[23.5rem] w-auto object-contain object-bottom translate-y-9 sm:translate-y-11 lg:translate-y-14 scale-[1.2]"
                />
              </div>

              {/* اطلاعات */}
              <div className="p-4 sm:p-5 bg-white flex flex-col justify-between flex-1">
                <div>
                  <span className="inline-flex items-center gap-1.5 bg-[#58bdaf] text-white px-3 py-0.5 rounded-full text-[0.6875rem] font-black mb-1.5 border border-navy/20 shadow-[1.5px_1.5px_0_0_#202A5A]">
                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
                    {FEATURED.role}
                  </span>
                  <h3 className="text-[1.25rem] sm:text-[1.375rem] font-black text-navy mb-1">
                    {FEATURED.name}
                  </h3>
                  <p className="text-[0.8125rem] font-medium text-navy/70 leading-[1.7] line-clamp-2">
                    {FEATURED.desc}
                  </p>
                </div>

                {/* شبکه‌های اجتماعی */}
                <div className="flex items-center gap-2 pt-3 mt-3 border-t border-dashed border-navy/15">
                  {socialLinks.map(({ label, href, Icon, bg, border, fg }, i) => (
                    <a
                      key={i}
                      href={href}
                      aria-label={label}
                      target="_blank"
                      rel="noreferrer"
                      className={`inline-flex items-center justify-center w-6 h-6 ${bg} border ${border} ${fg} rounded-[0.35rem] shrink-0 transition-transform hover:-translate-y-0.5`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </a>
                  ))}
                </div>
              </div>
            </article>
          </div>

          {/* ════ Mini Grid — ۲×۲ (چپ در RTL) ════ */}
          <div className="grid grid-cols-2 gap-3.5 sm:gap-4 lg:gap-4">
            {MEMBERS.map((member) => (
              <MiniCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}