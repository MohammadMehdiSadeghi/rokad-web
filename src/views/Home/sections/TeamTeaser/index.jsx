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
   TEAM DATA — عوامل رکاد (چیدمان جدید: هیرو افقی بنیان‌گذار + ۴ ستون تیم)
========================================================= */

const FOUNDER = {
  name: "حامد آرون",
  role: "بنیان‌گذار",
  desc: "مدیرعامل و بنیان‌گذار رکاداسکول — کسی که ایده‌ی اولین هنرستان استارتاپی ایران را شکل داد و مسیر آموزش کارآفرینانه را برای نوجوانان کشور باز کرد.",
  image: "/assets/about/Team/arvan.png",
  stats: [
    { num: "۱۲+", label: "سال تجربه" },
    { num: "۵", label: "شخصیت برند" },
    { num: "۱۰۰۰+", label: "هنرجو" },
  ],
  socials: [
    { label: "وبسایت", href: "#", Icon: GlobeIcon },
    { label: "توییتر", href: "#", Icon: TwitterIcon },
    { label: "اینستاگرام", href: "#", Icon: InstagramIcon },
    { label: "لینکدین", href: "#", Icon: LinkedInIcon },
  ],
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
    shadowColor: "#E0195B",
  },
  {
    name: "علیرضا عزیزپور",
    role: "مدیرعامل",
    tag: "مدیرعامل",
    image: "/assets/about/Team/azizpoor.png",
    color: "#58BDAF",
    bgLight: "bg-[#EEF8F7]",
    pattern: patternGreen,
    shadowColor: "#58BDAF",
  },
  {
    name: "رویا دولت‌آبادی",
    role: "راهبر هنرستان دخترانه",
    tag: "هنرستان دخترانه",
    image: "/assets/about/Team/dolat-abadi.png",
    color: "#F8A41D",
    bgLight: "bg-[#FEF6E8]",
    pattern: patternYellow,
    shadowColor: "#F8A41D",
  },
  {
    name: "امیرحسین امیریان",
    role: "راهبر هنرستان پسرانه",
    tag: "هنرستان پسرانه",
    image: "/assets/about/Team/amirian.png",
    color: "#202A5A",
    bgLight: "bg-[#F4F5FB]",
    pattern: patternBlue,
    shadowColor: "#202A5A",
  },
];

export default function TeamTeaser() {
  return (
    <section
      id="team-teaser"
      dir="rtl"
      className="relative overflow-hidden bg-white pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 w-full"
    >
      {/* ── Background Pattern Layer ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-60 rotate-180 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]"
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
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10 sm:mb-12">
          <div>
            <span className="inline-flex items-center gap-2 bg-[#E4F4F2] border-2 border-teal rounded-full px-4 py-1.5 text-[0.8125rem] font-bold text-teal-text mb-3 shadow-[2px_2px_0_0_#58BDAF]">
              <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
              تیم مدیریت و راهبری رُکاداسکول
            </span>
            <h2 className="font-black text-[2rem] sm:text-[2.75rem] lg:text-[3.25rem] leading-[1.25] text-navy flex items-center gap-x-2.5">
              <span>عوامل</span>
              <span className="text-magenta rotate-[-2deg] inline-block">
                رکاد
              </span>
            </h2>
          </div>

          <Link
            href="/factors"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-white text-navy border-2 border-navy text-[0.875rem] font-black rounded-[0.75rem] [corner-shape:squircle] shadow-[3px_3px_0_0_#202A5A] hover:bg-[#F8FAF9] transition-all"
          >
            <span>مشاهده همه عوامل</span>
            <ChevronLeftIcon className="w-4 h-4" />
          </Link>
        </div>

        {/* ═════════════════════════════════════════════════════════
            ۱. کارت افقی عریض بنیان‌گذار (Horizontal Founder Card)
        ═════════════════════════════════════════════════════════ */}
        <div className="relative mb-8 sm:mb-10">
          {/* سایه سخت زیرین */}
          <div
            aria-hidden="true"
            className="absolute inset-0 translate-x-[0.35rem] translate-y-[0.35rem] rounded-[0_2rem_0_2rem] [corner-shape:squircle] bg-teal"
          />

          {/* کارت اصلی */}
          <article className="relative bg-white border-2 border-navy rounded-[0_2rem_0_2rem] [corner-shape:squircle] overflow-hidden grid grid-cols-1 lg:grid-cols-[1.1fr_1.3fr] min-h-[360px]">
            {/* ستون تصویر بنیان‌گذار (راست در RTL) */}
            <div className="relative bg-[#58bdaf] overflow-hidden min-h-[280px] sm:min-h-[340px] flex items-end justify-center">
              {/* پترن پس‌زمینه */}
              <img
                src={patternGreen}
                alt=""
                draggable="false"
                className="absolute inset-0 w-full h-full object-cover opacity-40 select-none"
              />

              {/* نشان امضای رکاد */}
              <span className="absolute top-4 right-4 z-20 bg-[#F8A41D] text-navy border-2 border-navy rounded-[0_0.75rem_0_0.75rem] [corner-shape:squircle] px-3.5 py-1.5 font-black text-[0.8125rem] rotate-[-3deg] shadow-[3px_3px_0_0_#202A5A]">
                امضای رُکاد
              </span>

              {/* عکس حامد آرون */}
              <img
                src={FOUNDER.image}
                alt={FOUNDER.name}
                loading="lazy"
                draggable="false"
                className="relative z-10 h-[260px] sm:h-[320px] lg:h-[360px] w-auto object-contain object-bottom translate-y-2"
              />
            </div>

            {/* ستون اطلاعات (چپ در RTL) */}
            <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-white">
              <div>
                <span className="inline-flex items-center gap-2 bg-[#58bdaf] text-white px-4 py-1 rounded-full text-[0.75rem] font-black mb-4 border border-navy/20 shadow-[2px_2px_0_0_#202A5A]">
                  <span className="w-2 h-2 rounded-full bg-white" />
                  {FOUNDER.role}
                </span>

                <h3 className="font-black text-[1.75rem] sm:text-[2.25rem] text-navy mb-3">
                  {FOUNDER.name}
                </h3>

                <p className="text-[0.9375rem] sm:text-[1rem] leading-[1.9] text-navy/75 mb-6 max-w-xl">
                  {FOUNDER.desc}
                </p>
              </div>

              <div>
                {/* نوار آمار و تجربه */}
                <div className="flex items-center gap-6 sm:gap-8 pt-4 border-t-2 border-dashed border-navy/15 mb-5">
                  {FOUNDER.stats.map((st, i) => (
                    <div key={i} className="flex flex-col">
                      <strong className="font-black text-[1.375rem] sm:text-[1.625rem] text-teal-text leading-none mb-1">
                        {st.num}
                      </strong>
                      <span className="text-[0.75rem] font-bold text-navy/60">
                        {st.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* شبکه‌های اجتماعی */}
                <div className="flex items-center gap-2">
                  {FOUNDER.socials.map(({ label, href, Icon }, i) => (
                    <a
                      key={i}
                      href={href}
                      aria-label={label}
                      className="inline-flex items-center justify-center w-9 h-9 bg-white border-2 border-navy rounded-[0.5rem] [corner-shape:squircle] text-navy shadow-[2px_2px_0_0_#202A5A] hover:bg-teal hover:text-white transition-colors"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* ═════════════════════════════════════════════════════════
            ۲. ردیف ۴ ستونه اعضای تیم (4-Across Members Grid)
        ═════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {MEMBERS.map((member, i) => (
            <div key={i} className="relative">
              {/* سایه سخت */}
              <div
                aria-hidden="true"
                className="absolute inset-0 translate-x-[0.25rem] translate-y-[0.25rem] rounded-[0_1.5rem_0_1.5rem] [corner-shape:squircle]"
                style={{ backgroundColor: member.shadowColor }}
              />

              {/* کارت عضو */}
              <article className="relative bg-white border-2 border-navy rounded-[0_1.5rem_0_1.5rem] [corner-shape:squircle] overflow-hidden flex flex-col justify-between h-full">
                <div>
                  {/* بخش تصویر */}
                  <div
                    className="relative h-[180px] sm:h-[200px] overflow-hidden flex items-end justify-center"
                    style={{ backgroundColor: member.color }}
                  >
                    {/* پترن رنگی */}
                    <img
                      src={member.pattern}
                      alt=""
                      draggable="false"
                      className="absolute inset-0 w-full h-full object-cover opacity-40 select-none"
                    />

                    {/* برچسب گوشه */}
                    <span className="absolute top-3 right-3 z-20 text-[0.6875rem] font-bold text-white bg-black/35 backdrop-blur-sm px-2.5 py-0.5 rounded-full border border-white/20">
                      {member.tag}
                    </span>

                    {/* عکس پرسنل */}
                    <img
                      src={member.image}
                      alt={member.name}
                      loading="lazy"
                      draggable="false"
                      className="relative z-10 h-[170px] sm:h-[190px] w-auto object-contain object-bottom translate-y-1"
                    />
                  </div>

                  {/* بخش مشخصات */}
                  <div className="p-4 sm:p-5 text-center">
                    <h4 className="font-black text-[1.0625rem] text-navy mb-1">
                      {member.name}
                    </h4>
                    <p className="text-[0.8125rem] font-semibold text-navy/60">
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* فوتر و آیکون‌ها */}
                <div className="px-4 py-3 border-t border-dashed border-navy/15 flex items-center justify-center gap-2">
                  <a
                    href="#"
                    aria-label="توییتر"
                    className="inline-flex items-center justify-center w-7 h-7 bg-white border border-navy rounded-[0.4rem] text-navy hover:bg-navy hover:text-white transition-colors"
                  >
                    <TwitterIcon className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="#"
                    aria-label="لینکدین"
                    className="inline-flex items-center justify-center w-7 h-7 bg-white border border-navy rounded-[0.4rem] text-navy hover:bg-navy hover:text-white transition-colors"
                  >
                    <LinkedInIcon className="w-3.5 h-3.5" />
                  </a>
                </div>
              </article>
            </div>
          ))}
        </div>

        {/* ── دکمه مشاهده همه در موبایل ── */}
        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/factors"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-navy border-2 border-navy text-[0.875rem] font-black rounded-[0.75rem] [corner-shape:squircle] shadow-[3px_3px_0_0_#202A5A]"
          >
            <span>مشاهده همه عوامل</span>
            <ChevronLeftIcon className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}