"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Container from "../../layout/Container";
import { useEnrollment } from "../../lib/EnrollmentContext";
import {
  ChevronLeftIcon,
  LinkedInIcon,
} from "../../common/Icons";
import {
  alumni,
  featuredProjects,
  hiringCompanies,
  alumniTestimonials,
} from "./data";

/* =========================================================
   صفحه گرید کلاسیک دانش‌آموختگان رکاد (Classic Alumni Grid)
   - ورود اولیه مشروط به انتخاب شعبه (دخترانه / پسرانه) است.
   - محتوا و دانش‌آموختگان کاملاً تفکیک‌شده و بدون تداخل هستند.
   - کارت‌ها دقیقاً به سبک کلاسیک رکاد (پترن بالایی، آواتار مدور همپوشان،
     اطلاعات، برچسب تخصص، فوتر لینکدین و شدوی سخت دائمی).
========================================================= */

function initials(name) {
  const parts = name.split(" ");
  return (parts[0]?.[0] ?? "") + "." + (parts[1]?.[0] ?? "");
}

const patternPink = "/assets/home/TeamTeaser/pink.png";
const patternGreen = "/assets/home/TeamTeaser/green.png";

const GENERATIONS = [
  { id: "all", label: "همه نسل‌ها" },
  { id: "8", label: "نسل هشتم" },
  { id: "7", label: "نسل هفتم (۱۴۰۳)" },
  { id: "6", label: "نسل ششم (۱۴۰۲)" },
  { id: "5", label: "نسل پنجم (۱۴۰۱)" },
  { id: "4", label: "نسل چهارم (۱۴۰۰)" },
  { id: "3", label: "نسل سوم (۱۳۹۹)" },
  { id: "2", label: "نسل دوم (۱۳۹۸)" },
];

/* تبدیل هر فرمت gen («نسل ۷»، «نسل هفتم»، «نسل دوم»، ...) به شماره نسل
   تا فیلتر مستقل از فرمت متن داده‌ها درست کار کنه */
const FA_DIGITS = "۰۱۲۳۴۵۶۷۸۹";
const GEN_WORDS = {
  اول: 1,
  دوم: 2,
  سوم: 3,
  چهارم: 4,
  پنجم: 5,
  ششم: 6,
  هفتم: 7,
  هشتم: 8,
  نهم: 9,
  دهم: 10,
};

function genNumber(gen) {
  if (!gen) return null;
  // عدد فارسی یا انگلیسی داخل رشته (مثل «نسل ۷» یا «نسل پنجم · پسرانه»)
  for (const ch of gen) {
    if (/[0-9]/.test(ch)) return Number(ch);
    const faIdx = FA_DIGITS.indexOf(ch);
    if (faIdx > 0) return faIdx;
  }
  // عدد به حروف (مثل «نسل دوم»)
  for (const [word, num] of Object.entries(GEN_WORDS)) {
    if (gen.includes(word)) return num;
  }
  return null;
}

export default function AlumniPage() {
  const { openEnrollment } = useEnrollment();
  // مقدار پیش‌فرض null تا کاربر ابتدا شعبه را انتخاب کند
  const [selectedBranch, setSelectedBranch] = useState(null); // null | "female" | "male"
  const [genFilter, setGenFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // فیلتر دانش‌آموختگان منحصراً بر اساس شعبه انتخابی + فیلتر نسل و جستجو
  const filteredAlumni = useMemo(() => {
    if (!selectedBranch) return [];
    return alumni.filter((m) => {
      const matchBranch = m.gender === selectedBranch;
      const matchGen =
        genFilter === "all" ? true : genNumber(m.gen) === Number(genFilter);
      const matchSearch =
        !searchQuery.trim() ||
        m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.field.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.city.toLowerCase().includes(searchQuery.toLowerCase());
      return matchBranch && matchGen && matchSearch;
    });
  }, [selectedBranch, genFilter, searchQuery]);

  // پروژه‌های برتر مربوط به شعبه
  const filteredProjects = useMemo(() => {
    if (!selectedBranch) return [];
    return featuredProjects.filter((p) => p.gender === selectedBranch);
  }, [selectedBranch]);

  // نقل‌قول‌های مربوط به شعبه
  const filteredTestimonials = useMemo(() => {
    if (!selectedBranch) return [];
    return alumniTestimonials.filter((t) => t.gender === selectedBranch);
  }, [selectedBranch]);

  const counts = useMemo(() => {
    return {
      female: alumni.filter((a) => a.gender === "female").length,
      male: alumni.filter((a) => a.gender === "male").length,
    };
  }, []);

  // مشخصات بصری بر اساس شعبه (رنگ‌های استاندارد و بدون گرادیان: دختر = صورتی #E0195B، پسر = سبز #59bbaf)
  const isFemale = selectedBranch === "female";
  const branchColor = isFemale ? "#E0195B" : "#59bbaf";
  const branchBgLight = isFemale ? "#FEFAFB" : "#EEF8F7";
  const branchPattern = isFemale ? patternPink : patternGreen;

  return (
    <div dir="rtl" className="w-full bg-white overflow-hidden">
      {/* ═════════════════════════════════════════════════════════
          ۱. هیرو و کارت‌های انتخاب شعبه (Branch Gatekeeper)
      ═════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-white pt-10 sm:pt-14 lg:pt-16 pb-10 sm:pb-14 w-full">
        {/* لایه پترن پس‌زمینه با گرادیان ماسک عمیق‌تر */}
        <div
          aria-hidden="true"
          className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-60 rotate-180 [mask-image:linear-gradient(to_bottom,transparent_0%,black_30%,black_70%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_30%,black_70%,transparent_100%)]"
        >
          <img
            src="/assets/Pattern/layout-pattern.png"
            alt=""
            draggable="false"
            className="w-full h-full object-cover select-none"

          loading="lazy"
          decoding="async"
          />
        </div>

        <Container className="relative z-10 text-center">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 bg-[#E4F4F2] border-2 border-teal rounded-full px-4 sm:px-5 py-1.5 mb-4 shadow-[2px_2px_0_0_#59bbaf]">
            <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
            <span className="text-[0.8125rem] sm:text-[0.875rem] font-bold text-teal-text">
              جامعه متخصصان و فارغ‌التحصیلان رکاداسکول
            </span>
          </div>

          {/* Main Title */}
          <h1 className="font-black text-[2rem] sm:text-[2.75rem] lg:text-[3.25rem] leading-[1.3] text-navy mb-4 flex flex-wrap justify-center items-center gap-x-2.5">
            <span>ببین </span>
            <span className="text-[#202a5a]">رکادی‌ها</span>
            <span>الان </span>
            <span className="text-teal-wordmark">کجان؟</span>
          </h1>

          {/* Subtitle */}
          <p className="font-medium text-[0.9375rem] sm:text-[1.0625rem] leading-[1.85] text-navy/70 max-w-2xl mx-auto mb-8 sm:mb-10 lg:mb-[4rem]">
            برای مشاهده سوابق، پروژه‌ها و مسیر شغلی فارغ‌التحصیلان، ابتدا شعبه
            مورد نظر خود را انتخاب فرمایید:
          </p>

          {/* ═════════════════════════════════════════════════════════
              ۲. دو کارت بزرگ انتخاب شعبه (دخترانه / پسرانه) با شدوی ثابت
          ═════════════════════════════════════════════════════════ */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {/* کارت هنرستان دخترانه */}
              <button
                type="button"
                onClick={() => {
                  setSelectedBranch("female");
                  setGenFilter("all");
                  setSearchQuery("");
                }}
                className={`relative text-right p-6 sm:p-7 rounded-[0_1.75rem_0_1.75rem] [corner-shape:squircle] border-2 cursor-pointer overflow-hidden transition-colors ${
                  selectedBranch === "female"
                    ? "bg-[#FEFAFB] border-[#E0195B] shadow-[5px_5px_0_0_#E0195B]"
                    : "bg-white border-[#E0195B] shadow-[5px_5px_0_0_#E0195B]"
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 rounded-[0_1rem_0_1rem] [corner-shape:squircle] flex items-center justify-center transition-colors ${
                        selectedBranch === "female"
                          ? "bg-[#E0195B] text-white"
                          : "bg-[#FCE8EF] text-[#E0195B]"
                      }`}
                    >
                      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2l2.4 7.2h7.6l-6.2 4.5 2.4 7.3-6.2-4.5-6.2 4.5 2.4-7.3-6.2-4.5h7.6z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-black text-[1.25rem] text-[#E0195B]">
                        هنرستان دخترانه رکاد
                      </h3>
                      <span className="text-[0.8125rem] font-bold text-navy/50">
                        {counts.female} دانش‌آموخته
                      </span>
                    </div>
                  </div>

                  <span
                    className={`text-[0.75rem] font-black px-3 py-1 rounded-full border transition-all ${
                      selectedBranch === "female"
                        ? "bg-[#E0195B] text-white border-[#E0195B]"
                        : "bg-[#FCE8EF] text-[#E0195B] border-[#E0195B]/30"
                    }`}
                  >
                    {selectedBranch === "female" ? "✓ در حال نمایش" : "انتخاب شعبه"}
                  </span>
                </div>
                <p className="text-[0.8125rem] leading-[1.8] text-navy/75">
                  مشاهده پروفایل و رزومه فارغ‌التحصیلان دختر در حوزه‌های طراحی محصول، هوش مصنوعی، فرانت‌اند و مدیریت پروژه.
                </p>
              </button>

              {/* کارت هنرستان پسرانه */}
              <button
                type="button"
                onClick={() => {
                  setSelectedBranch("male");
                  setGenFilter("all");
                  setSearchQuery("");
                }}
                className={`relative text-right p-6 sm:p-7 rounded-[0_1.75rem_0_1.75rem] [corner-shape:squircle] border-2 cursor-pointer overflow-hidden transition-colors ${
                  selectedBranch === "male"
                    ? "bg-[#EEF8F7] border-[#59bbaf] shadow-[5px_5px_0_0_#59bbaf]"
                    : "bg-white border-[#59bbaf] shadow-[5px_5px_0_0_#59bbaf]"
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 rounded-[0_1rem_0_1rem] [corner-shape:squircle] flex items-center justify-center transition-colors ${
                        selectedBranch === "male"
                          ? "bg-[#59bbaf] text-white"
                          : "bg-[#EEF8F7] text-[#59bbaf]"
                      }`}
                    >
                      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="currentColor" opacity="0.3" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-black text-[1.25rem] text-[#59bbaf]">
                        هنرستان پسرانه رکاد
                      </h3>
                      <span className="text-[0.8125rem] font-bold text-navy/50">
                        {counts.male} دانش‌آموخته
                      </span>
                    </div>
                  </div>

                  <span
                    className={`text-[0.75rem] font-black px-3 py-1 rounded-full border transition-all ${
                      selectedBranch === "male"
                        ? "bg-[#59bbaf] text-white border-[#59bbaf]"
                        : "bg-[#EEF8F7] text-[#59bbaf] border-[#59bbaf]/30"
                    }`}
                  >
                    {selectedBranch === "male" ? "✓ در حال نمایش" : "انتخاب شعبه"}
                  </span>
                </div>
                <p className="text-[0.8125rem] leading-[1.8] text-navy/75">
                  مشاهده پروفایل و رزومه فارغ‌التحصیلان پسر در حوزه‌های نرم‌افزار، زیرساخت و DevOps، برنامه‌نویسی موبایل و کارآفرینی.
                </p>
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* ═════════════════════════════════════════════════════════
          حالت ۱: قبل از انتخاب شعبه (نمایش راهنمای انتخاب)
      ═════════════════════════════════════════════════════════ */}
      {!selectedBranch ? (
        <section className="py-16 sm:py-20 bg-[#F8FAF9] border-t border-navy/10 text-center">
          <Container className="max-w-xl mx-auto">
            <div className="w-14 h-14 rounded-full bg-white border-2 border-navy flex items-center justify-center text-teal mx-auto mb-4 shadow-[3px_3px_0_0_#202A5A]">
              <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 19V5M5 12l7-7 7 7" />
              </svg>
            </div>
            <h2 className="font-black text-[1.25rem] sm:text-[1.5rem] text-navy mb-2">
              یکی از دو کارت بالا را انتخاب کنید
            </h2>
            <p className="text-[0.875rem] leading-[1.85] text-navy/60">
              برای مشاهده اختصاصی مشخصات و رزومه‌های هر بخش، لطفاً روی کارت
              «هنرستان دخترانه» یا «هنرستان پسرانه» کلیک کنید تا گرید کامل بارگذاری شود.
            </p>
          </Container>
        </section>
      ) : (
        /* ═════════════════════════════════════════════════════════
           حالت ۲: پس از انتخاب شعبه (گرید کلاسیک رکاد)
        ═════════════════════════════════════════════════════════ */
        <>
          {/* ── بخش گرید کلاسیک دانش‌آموختگان ── */}
          <section id="alumni-grid" className="py-10 sm:py-14 lg:py-16 bg-[#F8FAF9] border-t border-navy/10">
            <Container>
              {/* هدر بخش و دکمه سوییچ سریع */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-5 border-b border-navy/10">
                <div>
                  <span
                    className="text-[0.8125rem] font-black px-3.5 py-1 rounded-full text-white inline-block mb-2 shadow-[2px_2px_0_0_#202A5A]"
                    style={{ backgroundColor: branchColor }}
                  >
                    {isFemale ? "هنرستان دخترانه رکاد" : "هنرستان پسرانه رکاد"}
                  </span>
                  <h2 className="font-black text-[1.5rem] sm:text-[2rem] text-navy">
                    گرید دانش‌آموختگان {isFemale ? "دختر" : "پسر"}
                  </h2>
                </div>

                {/* دکمه تغییر به شعبه دیگر */}
                <button
                  type="button"
                  onClick={() => {
                    setSelectedBranch(isFemale ? "male" : "female");
                    setGenFilter("all");
                    setSearchQuery("");
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white text-navy border-2 border-navy text-[0.8125rem] font-bold rounded-[0.625rem] [corner-shape:squircle] shadow-[3px_3px_0_0_#202A5A] cursor-pointer"
                >
                  <span>سوییچ به {isFemale ? "هنرستان پسرانه" : "هنرستان دخترانه"}</span>
                  <ChevronLeftIcon className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* نوار فیلتر و جستجو */}
              <div className="bg-white border-2 border-navy rounded-[0_1.5rem_0_1.5rem] [corner-shape:squircle] p-4 sm:p-6 shadow-[4px_4px_0_0_#202A5A] mb-10">
                {/* جستجو + خلاصه تعداد */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pb-4 border-b border-navy/10">
                  <div className="relative flex-1 max-w-md">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="جستجو در نام، تخصص، شهر یا مهارت..."
                      className="w-full pl-4 pr-10 py-2 bg-[#F8FAF9] border-2 border-navy/20 rounded-[0.625rem] text-[0.8125rem] font-bold text-navy focus:outline-none focus:border-navy"
                    />
                    <svg viewBox="0 0 24 24" className="w-4 h-4 text-navy/40 absolute right-3.5 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                  </div>

                  <div className="text-[0.8125rem] font-bold text-navy/60">
                    نمایش <strong className="text-navy">{filteredAlumni.length}</strong> نفر از {isFemale ? counts.female : counts.male} دانش‌آموخته
                  </div>
                </div>

                {/* ردیف فیلتر نسل‌ها */}
                <div className="flex flex-wrap items-center gap-2 pt-4">
                  <span className="text-[0.8125rem] font-black text-navy whitespace-nowrap ml-2">
                    فیلتر نسل:
                  </span>
                  {GENERATIONS.map((g) => {
                    const active = genFilter === g.id;
                    return (
                      <button
                        key={g.id}
                        type="button"
                        onClick={() => setGenFilter(g.id)}
                        className={`px-3 py-1 rounded-full text-[0.75rem] font-bold border transition-all cursor-pointer ${
                          active
                            ? "bg-navy text-white border-navy shadow-[2px_2px_0_0_#202A5A]"
                            : "bg-[#F8FAF9] text-navy/70 border-navy/20 hover:border-navy"
                        }`}
                      >
                        {g.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* ═════════════════════════════════════════════════════
                  گرید کارت‌های کلاسیک رکاد (Classic Rokad Cards)
              ═════════════════════════════════════════════════════ */}
              {filteredAlumni.length === 0 ? (
                <div className="bg-white border-2 border-dashed border-navy/20 rounded-[0_2rem_0_2rem] p-10 text-center my-8">
                  <div className="w-12 h-12 rounded-full bg-[#F4F5FB] border border-navy/20 flex items-center justify-center text-navy/40 mx-auto mb-3">
                    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                  </div>
                  <h3 className="font-black text-[1.125rem] text-navy mb-2">
                    دانش‌آموخته‌ای با این مشخصات یافت نشد
                  </h3>
                  <p className="text-[0.8125rem] text-navy/60 mb-4">
                    می‌توانید فیلتر نسل را ریست یا متن جستجو را تغییر دهید.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setGenFilter("all");
                      setSearchQuery("");
                    }}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-navy text-white text-[0.8125rem] font-bold rounded-full shadow-[2px_2px_0_0_#202A5A] cursor-pointer"
                  >
                    بازنشانی فیلترها
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
                  {filteredAlumni.map((member, idx) => {
                    const tagBg = isFemale ? "bg-[#FCE8EF]" : "bg-[#E9EAEF]";
                    const tagColor = isFemale ? "text-[#E0195B]" : "text-[#202a5a]";

                    return (
                      <div key={member.slug} className="relative">
                        {/* لایه زیرین سایه سخت دائمی */}
                        <div
                          aria-hidden="true"
                          className="absolute inset-0 translate-x-[0.3rem] translate-y-[0.3rem] rounded-[0_1.5rem_0_1.5rem] [corner-shape:squircle]"
                          style={{ backgroundColor: branchColor }}
                        />

                        {/* کارت اصلی کلاسیک رکاد */}
                        <article className="relative bg-white rounded-[0_1.5rem_0_1.5rem] [corner-shape:squircle] overflow-hidden border-2 border-navy flex flex-col justify-between h-full">
                          {/* هدر گرافیکی کارت با رنگ تخت و پترن همرنگ رکاد */}
                          <div
                            className="relative w-full h-[5.5rem] shrink-0 overflow-hidden"
                            style={{ backgroundColor: branchColor }}
                          >
                            <img
                              src={branchPattern}
                              alt=""
                              aria-hidden="true"
                              draggable="false"
                              className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none opacity-40"

          loading="lazy"
          decoding="async"
          />

                            {/* تگ نسل در گوشه */}
                            <span className="absolute top-2.5 right-3 z-20 text-[0.6875rem] font-black px-2.5 py-0.5 rounded-full bg-white text-navy border border-navy/20 shadow-[1.5px_1.5px_0_0_#202A5A]">
                              {member.gen} · {isFemale ? "دخترانه" : "پسرانه"}
                            </span>
                          </div>

                          {/* آواتار مدور همپوشان */}
                          <div className="relative -mt-9 mx-auto z-[20] flex justify-center">
                            <div
                              className="w-[4.5rem] h-[4.5rem] rounded-full border-2 border-navy flex items-center justify-center font-black text-base shadow-[2.5px_2.5px_0_0_#202A5A] transition-transform"
                              style={{ backgroundColor: branchBgLight, color: branchColor }}
                            >
                              {initials(member.name)}
                            </div>
                          </div>

                          {/* بدنه محتوا */}
                          <div className="p-4 sm:p-5 text-center flex-1 flex flex-col items-center">
                            <h3 className="font-black text-[1.1875rem] text-navy mb-0.5">
                              {member.name}
                            </h3>
                            <p className="text-[0.75rem] font-extrabold text-teal-text mb-2 line-clamp-1">
                              {member.role}
                            </p>

                            <p className="text-[0.8125rem] text-navy/70 leading-[1.75] line-clamp-3 mb-4 flex-1">
                              «{member.quote}»
                            </p>

                            {/* برچسب تخصص */}
                            <div className="relative inline-flex items-center justify-center shrink-0 mb-1">
                              <span className="text-[0.6875rem] font-black px-3 py-1 rounded-[0_0.5rem_0_0.5rem] border border-navy bg-[#F8FAF9] text-navy shadow-[1.5px_1.5px_0_0_#202A5A]">
                                {member.field}
                              </span>
                            </div>
                          </div>

                          {/* فوتر کارت */}
                          <div className="border-t border-dashed border-navy/15 pt-3 pb-3 px-4 flex items-center justify-between text-[0.75rem] text-navy/60 bg-[#FAFAFA]">
                            <div className="flex items-center gap-1.5">
                              {member.linkedIn ? (
                                <a
                                  href={member.linkedIn}
                                  target="_blank"
                                  rel="noreferrer noopener"
                                  aria-label="لینکدین"
                                  className="w-6 h-6 rounded-[0.3rem] border border-navy bg-white flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-colors"
                                >
                                  <LinkedInIcon className="w-3.5 h-3.5" />
                                </a>
                              ) : null}
                              <span className="text-[0.6875rem] font-bold text-navy/50">
                                {member.city} · {member.year}
                              </span>
                            </div>

                            <Link
                              href={`/alumni/${member.slug}`}
                              className="inline-flex items-center gap-1 font-black text-navy hover:text-teal-text transition-colors text-[0.75rem]"
                            >
                              <span>پروفایل و رزومه</span>
                              <ChevronLeftIcon className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        </article>
                      </div>
                    );
                  })}
                </div>
              )}
            </Container>
          </section>

          {/* ── پروژه‌های برتر مربوط به شعبه ── */}
          {filteredProjects.length > 0 && (
            <section className="py-12 sm:py-16 bg-white border-t border-navy/10">
              <Container>
                <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
                  <span
                    className="text-[0.8125rem] font-extrabold mb-2 inline-block"
                    style={{ color: branchColor }}
                  >
                    دستاوردهای عملی {isFemale ? "دانش‌آموزان دختر" : "دانش‌آموزان پسر"}
                  </span>
                  <h2 className="font-black text-[1.625rem] sm:text-[2.125rem] lg:text-[2.5rem] leading-[1.3] text-navy mb-2">
                    پروژه‌های شاخص این شعبه
                  </h2>
                  <p className="text-[0.875rem] sm:text-[0.9375rem] leading-[1.8] text-navy/70">
                    محصولاتی که از پروژه‌های کلاسی رکاد متولد شدند و امروز در اشل صنعتی فعال هستند.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {filteredProjects.map((p, i) => (
                    <div key={i} className="relative">
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 translate-x-[0.3rem] translate-y-[0.3rem] rounded-[0_1.5rem_0_1.5rem] [corner-shape:squircle]"
                        style={{ backgroundColor: p.color }}
                      />
                      <div className="relative bg-white border-2 border-navy rounded-[0_1.5rem_0_1.5rem] [corner-shape:squircle] p-5 sm:p-6 flex flex-col justify-between h-full">
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <span
                              className="text-[0.6875rem] font-black px-2.5 py-0.5 rounded-full text-white"
                              style={{ backgroundColor: p.color }}
                            >
                              {p.tag}
                            </span>
                            <span className="text-[0.75rem] font-bold text-navy/50">
                              {p.gen}
                            </span>
                          </div>

                          <h3 className="font-black text-[1.1875rem] text-navy mb-1.5">
                            {p.title}
                          </h3>
                          <div className="text-[0.8125rem] font-extrabold text-teal-text mb-3">
                            سازنده: {p.creator}
                          </div>

                          <div className="inline-flex items-center gap-1.5 bg-[#F4F5FB] border border-navy/15 rounded-lg px-2.5 py-1 text-[0.75rem] font-bold text-navy mb-3">
                            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-teal" fill="none" stroke="currentColor" strokeWidth="2.5">
                              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                              <polyline points="17 6 23 6 23 12" />
                            </svg>
                            <span>{p.stats}</span>
                          </div>

                          <p className="text-[0.8125rem] text-navy/70 leading-[1.8] mb-5">
                            {p.desc}
                          </p>
                        </div>

                        <div className="pt-3 border-t border-navy/10 flex items-center justify-between text-[0.75rem] font-bold text-navy">
                          <span>حوزه: {p.category}</span>
                          <span className="text-teal-text font-black">
                            محصول فعال ←
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Container>
            </section>
          )}

          {/* ── شرکت‌های میزبان با شدوی ثابت ── */}
          <section className="py-12 sm:py-16 bg-[#F8FAF9] border-t border-navy/10">
            <Container>
              <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
                <span className="text-[0.8125rem] font-extrabold text-teal-text mb-2 inline-block">
                  شبکه شغلی
                </span>
                <h2 className="font-black text-[1.625rem] sm:text-[2.125rem] lg:text-[2.5rem] leading-[1.3] text-navy mb-2">
                  دانش‌آموختگان رکاد در کدام شرکت‌ها هستند؟
                </h2>
                <p className="text-[0.875rem] leading-[1.8] text-navy/70">
                  معتبرترین استارتاپ‌های پیشروی کشور میزبان متخصصان آموزش‌دیده در رکاد هستند.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {hiringCompanies.map((c, i) => (
                  <div
                    key={i}
                    className="bg-white border-2 border-navy rounded-[0_1.25rem_0_1.25rem] [corner-shape:squircle] p-4 text-center shadow-[3px_3px_0_0_#202A5A]"
                  >
                    <div
                      className="w-10 h-10 rounded-full mx-auto mb-2 flex items-center justify-center font-black text-sm text-white"
                      style={{ backgroundColor: c.color }}
                    >
                      {c.name[0]}
                    </div>
                    <h4 className="font-black text-[0.9375rem] text-navy mb-0.5">
                      {c.name}
                    </h4>
                    <p className="text-[0.6875rem] text-navy/60 leading-tight mb-2">
                      {c.role}
                    </p>
                    <span className="inline-block text-[0.6875rem] font-black px-2 py-0.5 rounded-full bg-[#F8FAF9] border border-navy/10 text-teal-text">
                      {c.count}
                    </span>
                  </div>
                ))}
              </div>
            </Container>
          </section>

          {/* ── نقل‌قول‌های شاخص شعبه با شدوی ثابت ── */}
          {filteredTestimonials.length > 0 && (
            <section className="py-12 sm:py-16 lg:py-20 bg-white border-t border-navy/10">
              <Container>
                <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
                  <span
                    className="text-[0.8125rem] font-extrabold mb-2 inline-block"
                    style={{ color: branchColor }}
                  >
                    روایت تجربه
                  </span>
                  <h2 className="font-black text-[1.625rem] sm:text-[2.125rem] lg:text-[2.5rem] leading-[1.3] text-navy mb-2">
                    نظرات فارغ‌التحصیلان {isFemale ? "هنرستان دخترانه" : "هنرستان پسرانه"}
                  </h2>
                  <p className="text-[0.875rem] leading-[1.8] text-navy/70">
                    تجربه حضور در دوره‌ها و اینکه چطور رکاد مسیر شغلی‌شان را دگرگون کرد.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {filteredTestimonials.map((t, i) => (
                    <div key={i} className="relative">
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 translate-x-[0.25rem] translate-y-[0.25rem] rounded-[0_1.5rem_0_1.5rem] [corner-shape:squircle]"
                        style={{ backgroundColor: branchColor }}
                      />
                      <div className="relative bg-white border-2 border-navy rounded-[0_1.5rem_0_1.5rem] [corner-shape:squircle] p-5 sm:p-6 flex flex-col justify-between h-full">
                        <div>
                          <div className="flex items-center gap-3 mb-3">
                            <div
                              className="w-11 h-11 rounded-full border-2 flex items-center justify-center font-black text-xs text-white"
                              style={{ backgroundColor: branchColor, borderColor: branchColor }}
                            >
                              {t.avatarText}
                            </div>
                            <div>
                              <h4 className="font-black text-[1rem] text-navy">
                                {t.name}
                              </h4>
                              <span className="text-[0.75rem] font-bold text-navy/50">
                                {t.role}
                              </span>
                            </div>
                          </div>

                          <blockquote className="text-[0.8125rem] leading-[1.9] text-navy/80 mb-3">
                            «{t.quote}»
                          </blockquote>
                        </div>

                        <div className="pt-3 border-t border-navy/10 flex items-center justify-between text-[0.75rem] font-extrabold text-navy/60">
                          <span>{t.gen}</span>
                          <span>{t.company}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Container>
            </section>
          )}
        </>
      )}

      {/* ═════════════════════════════════════════════════════════
          دعوت به اقدام پایانی (Final CTA) با شدوی ثابت
      ═════════════════════════════════════════════════════════ */}
      <section className="py-12 sm:py-16 lg:py-20 bg-teal text-white text-center relative overflow-hidden">
        <Container className="relative z-10 max-w-3xl mx-auto">
          <h2 className="font-black text-[1.875rem] sm:text-[2.5rem] lg:text-[3rem] leading-[1.3] text-white mb-4 flex flex-wrap justify-center items-center gap-x-2">
            <span>می‌خوای </span>
            <span>جزو نسل بعدی </span>
            <span>رکادی‌ها </span>
            <span>باشی؟</span>
          </h2>
          <p className="text-[0.875rem] sm:text-[1rem] leading-[1.85] text-white/90 max-w-2xl mx-auto mb-8">
            پیش‌ثبت‌نام و تعیین‌سطح هنرستان دخترانه و پسرانه استارتاپی رکاد برای
            سال تحصیلی جدید آغاز شده. کافیه فرم پیش‌ثبت‌نام رو تکمیل کنی تا باهات تماس بگیریم.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3.5">
            <button
              type="button"
              onClick={openEnrollment}
              className="inline-flex items-center justify-center min-w-[12rem] sm:min-w-[13rem] h-[3.25rem] px-6 bg-navy text-white font-black text-[0.9375rem] rounded-[0.75rem] [corner-shape:squircle] shadow-[3px_3px_0_0_#ffffff] cursor-pointer"
            >
              تکمیل فرم پیش‌ثبت‌نام
            </button>
            <Link
              href="/about"
              className="inline-flex items-center justify-center min-w-[10rem] sm:min-w-[11rem] h-[3.25rem] px-5 bg-white text-navy font-black text-[0.875rem] rounded-[0.75rem] [corner-shape:squircle] shadow-[3px_3px_0_0_#202A5A]"
            >
              درباره رکاد بیشتر بدانید
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
