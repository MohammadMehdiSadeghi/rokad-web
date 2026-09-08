"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Container from "../../layout/Container";
import { useEnrollment } from "../../lib/EnrollmentContext";
import {
  ChevronLeftIcon,
} from "../../common/Icons";
import {
  PERSONAS,
  alumni,
  featuredProjects,
  hiringCompanies,
  alumniTestimonials,
} from "./data";

/* =========================================================
   صفحه گرید تفکیک‌شده دانش‌آموختگان رُکاد (Alumni Grid)
   - تا زمان انتخاب شعبه (دخترانه یا پسرانه) محتوا نمایش داده نمی‌شود.
   - دانش‌آموختگان دختر و پسر هرگز با هم قاطی نمی‌شوند.
   - استایل‌ها ۱۰۰٪ منطبق بر دیزاین‌سیستم رُکاد (سایه سخت، squircle، فونت IRANSansX).
========================================================= */

function initials(name) {
  const parts = name.split(" ");
  return (parts[0]?.[0] ?? "") + "." + (parts[1]?.[0] ?? "");
}

const GENERATIONS = [
  { id: "all", label: "همه نسل‌ها" },
  { id: "نسل ۷", label: "نسل هفتم (۱۴۰۳)" },
  { id: "نسل ۶", label: "نسل ششم (۱۴۰۲)" },
  { id: "نسل ۵", label: "نسل پنجم (۱۴۰۱)" },
  { id: "نسل ۴", label: "نسل چهارم (۱۴۰۰)" },
  { id: "نسل ۳", label: "نسل سوم (۱۳۹۹)" },
  { id: "نسل ۲", label: "نسل دوم (۱۳۹۸)" },
];

export default function AlumniPage() {
  const { openEnrollment } = useEnrollment();
  // مقدار اولیه null است تا کاربر ابتدا یکی از دو شعبه را انتخاب کند
  const [selectedBranch, setSelectedBranch] = useState(null); // null | "female" | "male"
  const [genFilter, setGenFilter] = useState("all");
  const [personaFilter, setPersonaFilter] = useState("all");

  // فیلتر دانش‌آموختگان منحصراً بر اساس شعبه انتخابی
  const filteredAlumni = useMemo(() => {
    if (!selectedBranch) return [];
    return alumni.filter((m) => {
      const matchBranch = m.gender === selectedBranch;
      const matchGen =
        genFilter === "all"
          ? true
          : m.gen.includes(genFilter.replace("نسل ", "")) || m.gen === genFilter;
      const matchPersona =
        personaFilter === "all" ? true : m.persona === personaFilter;
      return matchBranch && matchGen && matchPersona;
    });
  }, [selectedBranch, genFilter, personaFilter]);

  // فیلتر پروژه‌های برتر مربوط به شعبه
  const filteredProjects = useMemo(() => {
    if (!selectedBranch) return [];
    return featuredProjects.filter((p) => p.gender === selectedBranch);
  }, [selectedBranch]);

  // فیلتر نقل‌قول‌های مربوط به شعبه
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

  // تم رنگی شاخص بر اساس شعبه انتخابی
  const isFemale = selectedBranch === "female";
  const branchColor = isFemale ? "#E0195B" : "#202A5A";
  const branchBgLight = isFemale ? "#FEFAFB" : "#F4F5FB";

  return (
    <div dir="rtl" className="w-full bg-white overflow-hidden">
      {/* ═════════════════════════════════════════════════════════
          ۱. هیرو سکشن و کارت‌های تفکیک شعبه (Branch Selector)
      ═════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-white pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 w-full">
        {/* لایه پترن پس‌زمینه با گرادیان ماسک استاندارد رکاد */}
        <div
          aria-hidden="true"
          className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-60 rotate-180 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]"
        >
          <img
            src="/assets/Pattern/layout-pattern.png"
            alt=""
            draggable="false"
            className="w-full h-full object-cover select-none"
          />
        </div>

        <Container className="relative z-10 text-center">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 bg-[#E4F4F2] border-2 border-teal rounded-full px-4 sm:px-5 py-1.5 mb-5 sm:mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-teal animate-pulse" />
            <span className="text-[0.8125rem] sm:text-[0.875rem] font-bold text-teal-text">
              جامعه متخصصان و فارغ‌التحصیلان رُکاداسکول
            </span>
          </div>

          {/* Main Title */}
          <h1 className="font-black text-[2rem] sm:text-[2.75rem] lg:text-[3.5rem] leading-[1.3] text-navy mb-5 sm:mb-6 flex flex-wrap justify-center items-center gap-x-2.5 sm:gap-x-3.5">
            <span className="inline-block rotate-[-2deg]">بانک</span>
            <span className="inline-block rotate-[2deg] text-teal-wordmark">
              دانش‌آموختگان
            </span>
            <span className="inline-block rotate-[-2deg]">رُکاد</span>
          </h1>

          {/* Subtitle */}
          <p className="font-medium text-[0.9375rem] sm:text-[1.0625rem] lg:text-[1.125rem] leading-[1.9] text-navy/70 max-w-2xl mx-auto mb-10 sm:mb-12">
            برای مشاهده رزومه، پروژه‌ها و مسیر شغلی فارغ‌التحصیلان، ابتدا شعبه
            مورد نظر خود را انتخاب کنید:
          </p>

          {/* ═════════════════════════════════════════════════════════
              ۲. دو کارت بزرگ انتخاب شعبه (دخترانه / پسرانه)
          ═════════════════════════════════════════════════════════ */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {/* کارت هنرستان دخترانه */}
              <button
                type="button"
                onClick={() => {
                  setSelectedBranch("female");
                  setGenFilter("all");
                  setPersonaFilter("all");
                }}
                className={`group relative text-right p-6 sm:p-8 rounded-[0_2rem_0_2rem] [corner-shape:squircle] border-2 transition-all duration-300 cursor-pointer overflow-hidden ${
                  selectedBranch === "female"
                    ? "bg-[#FEFAFB] border-[#E0195B] shadow-[6px_6px_0_0_#E0195B] -translate-y-1.5"
                    : "bg-white border-navy/20 hover:border-[#E0195B]/70 shadow-[4px_4px_0_0_rgba(32,42,90,0.1)] hover:-translate-y-1 hover:shadow-[5px_5px_0_0_#E0195B]"
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-14 h-14 rounded-[0_1rem_0_1rem] [corner-shape:squircle] flex items-center justify-center font-black text-2xl transition-colors ${
                        selectedBranch === "female"
                          ? "bg-[#E0195B] text-white"
                          : "bg-[#FCE8EF] text-[#E0195B] group-hover:bg-[#E0195B] group-hover:text-white"
                      }`}
                    >
                      ♀
                    </div>
                    <div>
                      <h3 className="font-black text-[1.375rem] text-[#E0195B]">
                        هنرستان دخترانه رُکاد
                      </h3>
                      <span className="text-[0.8125rem] font-bold text-navy/50">
                        {counts.female} دانش‌آموخته
                      </span>
                    </div>
                  </div>

                  <span
                    className={`text-[0.75rem] font-black px-3.5 py-1.5 rounded-full border transition-all ${
                      selectedBranch === "female"
                        ? "bg-[#E0195B] text-white border-[#E0195B] shadow-sm"
                        : "bg-[#FCE8EF] text-[#E0195B] border-[#E0195B]/30 group-hover:bg-[#E0195B] group-hover:text-white"
                    }`}
                  >
                    {selectedBranch === "female" ? "✓ در حال نمایش" : "انتخاب شعبه"}
                  </span>
                </div>
                <p className="text-[0.875rem] leading-[1.85] text-navy/75">
                  مشاهده پروفایل و رزومه فارغ‌التحصیلان دختر در حوزه‌های طراحی محصول، هوش مصنوعی، فرانت‌اند و مدیریت پروژه.
                </p>
              </button>

              {/* کارت هنرستان پسرانه */}
              <button
                type="button"
                onClick={() => {
                  setSelectedBranch("male");
                  setGenFilter("all");
                  setPersonaFilter("all");
                }}
                className={`group relative text-right p-6 sm:p-8 rounded-[0_2rem_0_2rem] [corner-shape:squircle] border-2 transition-all duration-300 cursor-pointer overflow-hidden ${
                  selectedBranch === "male"
                    ? "bg-[#F4F5FB] border-[#21295A] shadow-[6px_6px_0_0_#21295A] -translate-y-1.5"
                    : "bg-white border-navy/20 hover:border-[#21295A]/70 shadow-[4px_4px_0_0_rgba(32,42,90,0.1)] hover:-translate-y-1 hover:shadow-[5px_5px_0_0_#21295A]"
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-14 h-14 rounded-[0_1rem_0_1rem] [corner-shape:squircle] flex items-center justify-center font-black text-2xl transition-colors ${
                        selectedBranch === "male"
                          ? "bg-[#21295A] text-white"
                          : "bg-[#E9EAEF] text-[#21295A] group-hover:bg-[#21295A] group-hover:text-white"
                      }`}
                    >
                      ♂
                    </div>
                    <div>
                      <h3 className="font-black text-[1.375rem] text-[#21295A]">
                        هنرستان پسرانه رُکاد
                      </h3>
                      <span className="text-[0.8125rem] font-bold text-navy/50">
                        {counts.male} دانش‌آموخته
                      </span>
                    </div>
                  </div>

                  <span
                    className={`text-[0.75rem] font-black px-3.5 py-1.5 rounded-full border transition-all ${
                      selectedBranch === "male"
                        ? "bg-[#21295A] text-white border-[#21295A] shadow-sm"
                        : "bg-[#E9EAEF] text-[#21295A] border-[#21295A]/30 group-hover:bg-[#21295A] group-hover:text-white"
                    }`}
                  >
                    {selectedBranch === "male" ? "✓ در حال نمایش" : "انتخاب شعبه"}
                  </span>
                </div>
                <p className="text-[0.875rem] leading-[1.85] text-navy/75">
                  مشاهده پروفایل و رزومه فارغ‌التحصیلان پسر در حوزه‌های نرم‌افزار، زیرساخت و DevOps، برنامه‌نویسی موبایل و کارآفرینی.
                </p>
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* ═════════════════════════════════════════════════════════
          حالت ۱: قبل از انتخاب شعبه (عدم نمایش محتوا و نمایش راهنما)
      ═════════════════════════════════════════════════════════ */}
      {!selectedBranch ? (
        <section className="py-16 sm:py-24 bg-[#F8FAF9] border-t border-navy/10 text-center">
          <Container className="max-w-xl mx-auto">
            <div className="w-16 h-16 rounded-full bg-white border-2 border-navy/15 flex items-center justify-center text-3xl mx-auto mb-4 shadow-sm">
              👆
            </div>
            <h2 className="font-black text-[1.375rem] sm:text-[1.625rem] text-navy mb-3">
              یکی از دو کارت بالا را انتخاب کنید
            </h2>
            <p className="text-[0.9375rem] leading-[1.9] text-navy/60">
              برای حفظ تفکیک و مشاهده اختصاصی مشخصات هر شعبه، لطفاً روی کارت
              «هنرستان دخترانه» یا «هنرستان پسرانه» کلیک کنید تا بانک دانش‌آموختگان آن بخش بارگذاری شود.
            </p>
          </Container>
        </section>
      ) : (
        /* ═════════════════════════════════════════════════════════
           حالت ۲: پس از انتخاب شعبه (نمایش اختصاصی محتوای همان شعبه)
        ═════════════════════════════════════════════════════════ */
        <>
          {/* ── گرید دانش‌آموختگان شعبه انتخابی ── */}
          <section id="alumni-grid" className="py-12 sm:py-16 lg:py-20 bg-[#F8FAF9] border-t border-navy/10">
            <Container>
              {/* هدر بخش و دکمه سوییچ سریع */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-5 border-b border-navy/10">
                <div>
                  <span
                    className="text-[0.8125rem] font-black px-3 py-1 rounded-full text-white inline-block mb-2"
                    style={{ backgroundColor: branchColor }}
                  >
                    {isFemale ? "هنرستان دخترانه رُکاد" : "هنرستان پسرانه رُکاد"}
                  </span>
                  <h2 className="font-black text-[1.5rem] sm:text-[2rem] text-navy">
                    فهرست دانش‌آموختگان {isFemale ? "دختر" : "پسر"}
                  </h2>
                </div>

                {/* دکمه تغییر به شعبه دیگر */}
                <button
                  type="button"
                  onClick={() => {
                    setSelectedBranch(isFemale ? "male" : "female");
                    setGenFilter("all");
                    setPersonaFilter("all");
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white hover:bg-navy text-navy hover:text-white border-2 border-navy text-[0.8125rem] font-bold rounded-[0.75rem] [corner-shape:squircle] shadow-[2px_2px_0_0_#202A5A] transition-all cursor-pointer"
                >
                  <span>سوییچ به {isFemale ? "هنرستان پسرانه ♂" : "هنرستان دخترانه ♀"}</span>
                  <ChevronLeftIcon className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* نوار فیلتر دوگانه (نسل‌ها + حوزه‌ها) */}
              <div className="bg-white border-2 border-navy/15 rounded-[0_1.5rem_0_1.5rem] [corner-shape:squircle] p-5 sm:p-6 shadow-[3px_3px_0_0_rgba(32,42,90,0.06)] mb-10">
                {/* ردیف اول: فیلتر نسل‌ها */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-navy/10">
                  <div className="flex items-center gap-2">
                    <span className="text-[0.875rem] font-black text-navy whitespace-nowrap">
                      فیلتر نسل:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {GENERATIONS.map((g) => {
                        const active = genFilter === g.id;
                        return (
                          <button
                            key={g.id}
                            type="button"
                            onClick={() => setGenFilter(g.id)}
                            className={`px-3.5 py-1.5 rounded-full text-[0.8125rem] font-bold border transition-all cursor-pointer ${
                              active
                                ? "bg-navy text-white border-navy shadow-[2px_2px_0_0_#202A5A]"
                                : "bg-[#F8FAF9] text-navy/70 border-navy/15 hover:border-navy"
                            }`}
                          >
                            {g.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="text-[0.8125rem] font-bold text-navy/60">
                    نمایش <strong className="text-navy">{filteredAlumni.length}</strong> دانش‌آموخته
                  </div>
                </div>

                {/* ردیف دوم: فیلتر حوزه‌های تخصصی */}
                <div className="flex flex-wrap items-center gap-2 pt-4">
                  <span className="text-[0.8125rem] font-bold text-navy/60 ml-2">
                    حوزه تخصصی:
                  </span>
                  <button
                    type="button"
                    onClick={() => setPersonaFilter("all")}
                    className={`px-3 py-1 rounded-full text-[0.75rem] font-bold border transition-colors cursor-pointer ${
                      personaFilter === "all"
                        ? "text-white border-transparent shadow-[2px_2px_0_0_#202A5A]"
                        : "bg-white text-navy/70 border-navy/15 hover:border-navy"
                    }`}
                    style={{ backgroundColor: personaFilter === "all" ? branchColor : undefined }}
                  >
                    همه تخصص‌ها
                  </button>
                  {Object.keys(PERSONAS).map((pKey) => {
                    const p = PERSONAS[pKey];
                    const active = personaFilter === pKey;
                    return (
                      <button
                        key={pKey}
                        type="button"
                        onClick={() => setPersonaFilter(pKey)}
                        className={`px-3 py-1 rounded-full text-[0.75rem] font-bold border transition-colors cursor-pointer ${
                          active
                            ? "bg-navy text-white border-navy"
                            : "bg-white text-navy/70 border-navy/15 hover:border-navy"
                        }`}
                      >
                        {p.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* شبکه کارت‌های دانش‌آموختگان */}
              {filteredAlumni.length === 0 ? (
                <div className="bg-white border-2 border-dashed border-navy/20 rounded-[0_2rem_0_2rem] p-12 text-center my-8">
                  <div className="text-4xl mb-3">🔍</div>
                  <h3 className="font-black text-[1.25rem] text-navy mb-2">
                    دانش‌آموخته‌ای با این فیلترها در این بخش یافت نشد
                  </h3>
                  <p className="text-[0.875rem] text-navy/60 mb-5">
                    می‌تونی فیلتر نسل یا تخصص رو ریست کنی.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setGenFilter("all");
                      setPersonaFilter("all");
                    }}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-navy text-white text-[0.8125rem] font-bold rounded-full shadow-[2px_2px_0_0_#202A5A] cursor-pointer"
                  >
                    بازنشانی فیلترها
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
                  {filteredAlumni.map((member) => {
                    const p = PERSONAS[member.persona];
                    const tagBg = isFemale ? "bg-[#FCE8EF]" : "bg-[#E9EAEF]";
                    const tagColor = isFemale ? "text-[#E0195B]" : "text-[#21295A]";

                    return (
                      <div key={member.slug} className="group relative">
                        {/* لایه زیرین سایه سخت */}
                        <div
                          aria-hidden="true"
                          className="absolute inset-0 translate-x-[0.25rem] translate-y-[0.25rem] rounded-[0_1.75rem_0_1.75rem] [corner-shape:squircle]"
                          style={{ backgroundColor: branchColor }}
                        />

                        {/* کارت اصلی */}
                        <div className="relative bg-white rounded-[0_1.75rem_0_1.75rem] [corner-shape:squircle] border-2 border-navy p-6 sm:p-7 flex flex-col justify-between h-full transition-transform duration-300 group-hover:-translate-y-1">
                          <div>
                            {/* هدر کارت */}
                            <div className="flex items-center justify-between gap-2 mb-4">
                              <span
                                className={`text-[0.6875rem] font-black px-3 py-1 rounded-full ${tagBg} ${tagColor}`}
                              >
                                {member.gen} · {isFemale ? "دخترانه" : "پسرانه"}
                              </span>
                              <span className="text-[0.75rem] font-bold text-navy/50">
                                {member.field}
                              </span>
                            </div>

                            {/* آواتار و نام */}
                            <div className="flex items-center gap-3.5 mb-4">
                              <div
                                className="w-14 h-14 rounded-[0_1rem_0_1rem] [corner-shape:squircle] border-2 flex items-center justify-center font-black text-lg flex-shrink-0"
                                style={{
                                  borderColor: branchColor,
                                  backgroundColor: branchBgLight,
                                  color: branchColor,
                                }}
                              >
                                {initials(member.name)}
                              </div>
                              <div className="min-w-0">
                                <h3 className="font-black text-[1.1875rem] text-navy group-hover:text-teal transition-colors">
                                  {member.name}
                                </h3>
                                <p className="text-[0.8125rem] font-bold text-teal-text line-clamp-1">
                                  {member.role}
                                </p>
                              </div>
                            </div>

                            {/* نقل‌قول کوتاه */}
                            <p
                              className="text-[0.8125rem] text-navy/75 leading-[1.8] line-clamp-3 mb-5 pr-2 border-r-2"
                              style={{ borderColor: branchColor }}
                            >
                              «{member.quote}»
                            </p>
                          </div>

                          {/* فوتر کارت */}
                          <div>
                            <div className="border-t border-dashed border-navy/15 pt-3.5 mb-3 flex items-center justify-between text-[0.75rem] text-navy/60">
                              <span>شهر: <strong>{member.city}</strong></span>
                              <span>فارغ‌التحصیلی: <strong>{member.year}</strong></span>
                              <span>{member.projects} پروژه</span>
                            </div>

                            <Link
                              href={`/alumni/${member.slug}`}
                              className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 bg-[#F8FAF9] hover:bg-navy text-navy hover:text-white border-2 border-navy text-[0.8125rem] font-black rounded-[0.75rem] [corner-shape:squircle] transition-all duration-300"
                            >
                              <span>مشاهده رزومه و نمونه‌کارها</span>
                              <ChevronLeftIcon className="w-4 h-4" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </Container>
          </section>

          {/* ── پروژه‌های برتر مربوط به شعبه ── */}
          {filteredProjects.length > 0 && (
            <section className="py-14 sm:py-20 bg-white border-t border-navy/10">
              <Container>
                <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
                  <span
                    className="text-[0.8125rem] font-extrabold mb-2 inline-block"
                    style={{ color: branchColor }}
                  >
                    دستاوردهای عملی {isFemale ? "دانش‌آموزان دختر" : "دانش‌آموزان پسر"}
                  </span>
                  <h2 className="font-black text-[1.75rem] sm:text-[2.25rem] lg:text-[2.75rem] leading-[1.3] text-navy mb-3">
                    پروژه‌های شاخص این شعبه
                  </h2>
                  <p className="text-[0.875rem] sm:text-[1rem] leading-[1.8] text-navy/70">
                    محصولاتی که از پروژه‌های کلاسی رُکاد متولد شدند و امروز در اشل صنعتی فعال هستند.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
                  {filteredProjects.map((p, i) => (
                    <div key={i} className="relative group">
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 translate-x-[0.3rem] translate-y-[0.3rem] rounded-[0_1.75rem_0_1.75rem] [corner-shape:squircle]"
                        style={{ backgroundColor: p.color }}
                      />
                      <div className="relative bg-white border-2 border-navy rounded-[0_1.75rem_0_1.75rem] [corner-shape:squircle] p-6 sm:p-7 flex flex-col justify-between h-full transition-transform duration-300 group-hover:-translate-y-1">
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <span
                              className="text-[0.6875rem] font-black px-3 py-1 rounded-full text-white"
                              style={{ backgroundColor: p.color }}
                            >
                              {p.tag}
                            </span>
                            <span className="text-[0.75rem] font-bold text-navy/50">
                              {p.gen}
                            </span>
                          </div>

                          <h3 className="font-black text-[1.25rem] text-navy mb-2">
                            {p.title}
                          </h3>
                          <div className="text-[0.8125rem] font-extrabold text-teal-text mb-3">
                            سازنده: {p.creator}
                          </div>

                          <div className="inline-block bg-[#F4F5FB] border border-navy/15 rounded-lg px-3 py-1.5 text-[0.75rem] font-bold text-navy mb-4">
                            📈 {p.stats}
                          </div>

                          <p className="text-[0.8125rem] text-navy/70 leading-[1.9] mb-6">
                            {p.desc}
                          </p>
                        </div>

                        <div className="pt-4 border-t border-navy/10 flex items-center justify-between text-[0.8125rem] font-bold text-navy">
                          <span>حوزه: {p.category}</span>
                          <span className="text-teal-text group-hover:-translate-x-1 transition-transform">
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

          {/* ── شرکت‌های میزبان ── */}
          <section className="py-14 sm:py-20 bg-[#F8FAF9] border-t border-navy/10">
            <Container>
              <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
                <span className="text-[0.8125rem] font-extrabold text-teal-text mb-2 inline-block">
                  شبکه شغلی
                </span>
                <h2 className="font-black text-[1.75rem] sm:text-[2.25rem] lg:text-[2.75rem] leading-[1.3] text-navy mb-3">
                  دانش‌آموختگان رُکاد در کدام شرکت‌ها هستند؟
                </h2>
                <p className="text-[0.875rem] sm:text-[1rem] leading-[1.8] text-navy/70">
                  معتبرترین شرکت‌ها و استارتاپ‌های پیشروی کشور میزبان متخصصان آموزش‌دیده در رُکاد هستند.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
                {hiringCompanies.map((c, i) => (
                  <div
                    key={i}
                    className="bg-white border-2 border-navy/15 rounded-[0_1.25rem_0_1.25rem] [corner-shape:squircle] p-4 text-center transition-all duration-300 hover:border-navy hover:-translate-y-1 hover:shadow-[3px_3px_0_0_#202A5A]"
                  >
                    <div
                      className="w-10 h-10 rounded-full mx-auto mb-2 flex items-center justify-center font-black text-sm text-white"
                      style={{ backgroundColor: c.color }}
                    >
                      {c.name[0]}
                    </div>
                    <h4 className="font-black text-[1rem] text-navy mb-1">
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

          {/* ── نقل‌قول‌های شاخص شعبه ── */}
          {filteredTestimonials.length > 0 && (
            <section className="py-14 sm:py-20 lg:py-24 bg-white border-t border-navy/10">
              <Container>
                <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
                  <span
                    className="text-[0.8125rem] font-extrabold mb-2 inline-block"
                    style={{ color: branchColor }}
                  >
                    روایت تجربه
                  </span>
                  <h2 className="font-black text-[1.75rem] sm:text-[2.25rem] lg:text-[2.75rem] leading-[1.3] text-navy mb-3">
                    نظرات فارغ‌التحصیلان {isFemale ? "هنرستان دخترانه" : "هنرستان پسرانه"}
                  </h2>
                  <p className="text-[0.875rem] sm:text-[1rem] leading-[1.8] text-navy/70">
                    تجربه حضور در دوره‌ها و اینکه چطور رُکاد مسیر شغلی‌شان را دگرگون کرد.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
                  {filteredTestimonials.map((t, i) => (
                    <div key={i} className="relative group">
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 translate-x-[0.25rem] translate-y-[0.25rem] rounded-[0_1.5rem_0_1.5rem] [corner-shape:squircle]"
                        style={{ backgroundColor: branchColor }}
                      />
                      <div className="relative bg-white border-2 border-navy rounded-[0_1.5rem_0_1.5rem] [corner-shape:squircle] p-6 sm:p-7 flex flex-col justify-between h-full transition-transform duration-300 group-hover:-translate-y-1">
                        <div>
                          <div className="flex items-center gap-3.5 mb-4">
                            <div
                              className="w-12 h-12 rounded-full border-2 flex items-center justify-center font-black text-sm text-white"
                              style={{ backgroundColor: branchColor, borderColor: branchColor }}
                            >
                              {t.avatarText}
                            </div>
                            <div>
                              <h4 className="font-black text-[1.0625rem] text-navy">
                                {t.name}
                              </h4>
                              <span className="text-[0.75rem] font-bold text-navy/50">
                                {t.role}
                              </span>
                            </div>
                          </div>

                          <blockquote className="text-[0.875rem] leading-[2] text-navy/80 mb-4">
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
          دعوت به اقدام پایانی (Final CTA)
      ═════════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 lg:py-24 bg-teal text-white text-center relative overflow-hidden">
        <Container className="relative z-10 max-w-3xl mx-auto">
          <h2 className="font-black text-[2rem] sm:text-[2.75rem] lg:text-[3.25rem] leading-[1.3] text-white mb-5 flex flex-wrap justify-center items-center gap-x-2.5">
            <span className="inline-block rotate-[-2deg]">می‌خوای</span>
            <span className="inline-block rotate-[2deg]">جزو نسل بعدی</span>
            <span className="inline-block rotate-[-2deg]">رُکادی‌ها</span>
            <span className="inline-block rotate-[2deg]">باشی؟</span>
          </h2>
          <p className="text-[0.9375rem] sm:text-[1.0625rem] leading-[1.9] text-white/90 max-w-2xl mx-auto mb-8 sm:mb-10">
            پیش‌ثبت‌نام و تعیین‌سطح هنرستان دخترانه و پسرانه استارتاپی رُکاد برای
            سال تحصیلی جدید آغاز شده. کافیه فرم پیش‌ثبت‌نام رو تکمیل کنی تا باهات تماس بگیریم.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={openEnrollment}
              className="inline-flex items-center justify-center min-w-[12rem] sm:min-w-[14rem] h-[3.25rem] sm:h-[3.75rem] px-6 sm:px-8 bg-navy text-white font-black text-[1rem] rounded-[0.875rem] [corner-shape:squircle] shadow-[4px_4px_0_0_#ffffff] hover:-translate-y-1 transition-all cursor-pointer"
            >
              تکمیل فرم پیش‌ثبت‌نام
            </button>
            <Link
              href="/about"
              className="inline-flex items-center justify-center min-w-[10rem] sm:min-w-[12rem] h-[3.25rem] sm:h-[3.75rem] px-6 bg-white text-navy font-black text-[0.9375rem] rounded-[0.875rem] [corner-shape:squircle] shadow-[4px_4px_0_0_#202A5A] hover:-translate-y-1 transition-all"
            >
              درباره رُکاد بیشتر بدانید
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
