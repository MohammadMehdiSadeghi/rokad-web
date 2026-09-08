"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Container from "../../layout/Container";
import { useEnrollment } from "../../lib/EnrollmentContext";
import {
  ArrowIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  UserIcon,
} from "../../common/Icons";
import {
  PERSONAS,
  INK,
  INK_LIGHT,
  alumni,
  timelineGenerations,
  milestones,
  alumniStats,
  successStories,
  cityDistributions,
  momentsGallery,
} from "./data";

/* =========================================================
   صفحه جامع دانش‌آموختگان رُکاد (تایم‌لاین نسل‌ها + تفکیک شعب + گرید)
   استایل‌ها طبق زبان طراحی رُکاد (سایه‌های سخت، بوردرهای squircle، فونت IRANSansX)
========================================================= */

function initials(name) {
  const parts = name.split(" ");
  return (parts[0]?.[0] ?? "") + "." + (parts[1]?.[0] ?? "");
}

export default function AlumniPage() {
  const { openEnrollment } = useEnrollment();
  const [selectedBranch, setSelectedBranch] = useState("all"); // "all" | "female" | "male"
  const [personaFilter, setPersonaFilter] = useState("all");

  // فیلتر دانش‌آموختگان بر اساس جنسیت و پرسونا
  const filteredAlumni = useMemo(() => {
    return alumni.filter((m) => {
      const matchBranch =
        selectedBranch === "all" ? true : m.gender === selectedBranch;
      const matchPersona =
        personaFilter === "all" ? true : m.persona === personaFilter;
      return matchBranch && matchPersona;
    });
  }, [selectedBranch, personaFilter]);

  // فیلتر تایم‌لاین بر اساس شعبه انتخابی
  const filteredTimeline = useMemo(() => {
    if (selectedBranch === "all") return timelineGenerations;
    return timelineGenerations.filter((t) => t.gender === selectedBranch);
  }, [selectedBranch]);

  // فیلتر داستان‌های موفقیت بر اساس شعبه
  const filteredStories = useMemo(() => {
    if (selectedBranch === "all") return successStories;
    return successStories.filter((s) => s.gender === selectedBranch);
  }, [selectedBranch]);

  const counts = useMemo(() => {
    return {
      all: alumni.length,
      female: alumni.filter((a) => a.gender === "female").length,
      male: alumni.filter((a) => a.gender === "male").length,
    };
  }, []);

  return (
    <div dir="rtl" className="w-full bg-white overflow-hidden">
      {/* ═════════════════════════════════════════════════════════
          ۱. هیرو سکشن اصلی صفحه دانش‌آموختگان
      ═════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-white pt-12 sm:pt-16 lg:pt-20 pb-10 sm:pb-14 w-full">
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
              ۶ نسل متخصصین و کارآفرینان جوان · از ۱۳۹۸ تا امروز
            </span>
          </div>

          {/* Title */}
          <h1 className="font-black text-[2rem] sm:text-[2.75rem] lg:text-[3.5rem] leading-[1.3] text-navy mb-5 sm:mb-6 flex flex-wrap justify-center items-center gap-x-2.5 sm:gap-x-3.5">
            <span className="inline-block rotate-[-2deg]">مسیر</span>
            <span className="inline-block rotate-[2deg] text-teal-wordmark">
              دانش‌آموختگان
            </span>
            <span className="inline-block rotate-[-2deg]">رُکاداسکول</span>
          </h1>

          {/* Subtitle */}
          <p className="font-medium text-[0.9375rem] sm:text-[1.0625rem] lg:text-[1.125rem] leading-[1.9] text-navy/70 max-w-3xl mx-auto mb-10 sm:mb-12">
            هر نسل، جمعی از دانش‌آموزهای باانگیزه بودن که از ایده و چالش‌های کلاسی
            شروع کردن، محصول واقعی ساختن و امروز توی برترین شرکت‌ها و استارتاپ‌های
            ایران و جهان مشغول ساختن آینده هستن.
          </p>

          {/* ═════════════════════════════════════════════════════════
              ۲. دو کارت شاخص انتخاب شعبه (دخترانه / پسرانه)
          ═════════════════════════════════════════════════════════ */}
          <div className="max-w-4xl mx-auto mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {/* کارت هنرستان دخترانه */}
              <button
                type="button"
                onClick={() =>
                  setSelectedBranch(selectedBranch === "female" ? "all" : "female")
                }
                className={`group relative text-right p-6 sm:p-7 rounded-[0_2rem_0_2rem] [corner-shape:squircle] border-2 transition-all duration-300 cursor-pointer overflow-hidden ${
                  selectedBranch === "female"
                    ? "bg-[#FEFAFB] border-[#E0195B] shadow-[5px_5px_0_0_#E0195B] -translate-y-1"
                    : "bg-white border-navy/20 hover:border-[#E0195B]/60 shadow-[3px_3px_0_0_rgba(32,42,90,0.1)] hover:-translate-y-0.5"
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-12 h-12 rounded-[0_0.875rem_0_0.875rem] [corner-shape:squircle] flex items-center justify-center font-black text-xl transition-colors ${
                        selectedBranch === "female"
                          ? "bg-[#E0195B] text-white"
                          : "bg-[#FCE8EF] text-[#E0195B] group-hover:bg-[#E0195B] group-hover:text-white"
                      }`}
                    >
                      ♀
                    </div>
                    <div>
                      <h3 className="font-black text-[1.25rem] text-[#E0195B]">
                        هنرستان دخترانه رُکاد
                      </h3>
                      <span className="text-[0.75rem] font-bold text-navy/50">
                        {counts.female} فارغ‌التحصیل ثبت‌شده
                      </span>
                    </div>
                  </div>

                  <span
                    className={`text-[0.75rem] font-extrabold px-3 py-1 rounded-full border ${
                      selectedBranch === "female"
                        ? "bg-[#E0195B] text-white border-[#E0195B]"
                        : "bg-[#FCE8EF] text-[#E0195B] border-[#E0195B]/30"
                    }`}
                  >
                    {selectedBranch === "female" ? "✓ انتخاب‌شده" : "مشاهده دانش‌آموختگان"}
                  </span>
                </div>
                <p className="text-[0.875rem] leading-[1.8] text-navy/70">
                  فارغ‌التحصیلان بخش دخترانه در شاخه‌های طراحی محصول، هوش مصنوعی، توسعه وب و مدیریت پروژه.
                </p>
              </button>

              {/* کارت هنرستان پسرانه */}
              <button
                type="button"
                onClick={() =>
                  setSelectedBranch(selectedBranch === "male" ? "all" : "male")
                }
                className={`group relative text-right p-6 sm:p-7 rounded-[0_2rem_0_2rem] [corner-shape:squircle] border-2 transition-all duration-300 cursor-pointer overflow-hidden ${
                  selectedBranch === "male"
                    ? "bg-[#F4F5FB] border-[#21295A] shadow-[5px_5px_0_0_#21295A] -translate-y-1"
                    : "bg-white border-navy/20 hover:border-[#21295A]/60 shadow-[3px_3px_0_0_rgba(32,42,90,0.1)] hover:-translate-y-0.5"
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-12 h-12 rounded-[0_0.875rem_0_0.875rem] [corner-shape:squircle] flex items-center justify-center font-black text-xl transition-colors ${
                        selectedBranch === "male"
                          ? "bg-[#21295A] text-white"
                          : "bg-[#E9EAEF] text-[#21295A] group-hover:bg-[#21295A] group-hover:text-white"
                      }`}
                    >
                      ♂
                    </div>
                    <div>
                      <h3 className="font-black text-[1.25rem] text-[#21295A]">
                        هنرستان پسرانه رُکاد
                      </h3>
                      <span className="text-[0.75rem] font-bold text-navy/50">
                        {counts.male} فارغ‌التحصیل ثبت‌شده
                      </span>
                    </div>
                  </div>

                  <span
                    className={`text-[0.75rem] font-extrabold px-3 py-1 rounded-full border ${
                      selectedBranch === "male"
                        ? "bg-[#21295A] text-white border-[#21295A]"
                        : "bg-[#E9EAEF] text-[#21295A] border-[#21295A]/30"
                    }`}
                  >
                    {selectedBranch === "male" ? "✓ انتخاب‌شده" : "مشاهده دانش‌آموختگان"}
                  </span>
                </div>
                <p className="text-[0.875rem] leading-[1.8] text-navy/70">
                  فارغ‌التحصیلان بخش پسرانه در شاخه‌های نرم‌افزار، زیرساخت و DevOps، موبایل و استارتاپ‌ها.
                </p>
              </button>
            </div>

            {/* کلید پاک کردن فیلتر / مشاهده همه */}
            {selectedBranch !== "all" && (
              <div className="flex justify-center mt-4">
                <button
                  type="button"
                  onClick={() => setSelectedBranch("all")}
                  className="inline-flex items-center gap-1.5 text-[0.8125rem] font-bold text-navy/60 hover:text-teal transition-colors underline cursor-pointer"
                >
                  نمایش همه نسل‌ها و دانش‌آموختگان (حذف فیلتر شعبه)
                </button>
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* ═════════════════════════════════════════════════════════
          ۳. تایم‌لاین عمودی نسل‌های رُکاد (Vertical Timeline)
      ═════════════════════════════════════════════════════════ */}
      <section className="relative py-14 sm:py-20 lg:py-24 bg-[#F8FAF9] border-y border-navy/10">
        <Container>
          {/* هدر سکشن تایم‌لاین */}
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
            <span className="text-[0.8125rem] font-extrabold text-teal-text mb-2 inline-block">
              روایت پیوسته رشد
            </span>
            <h2 className="font-black text-[1.75rem] sm:text-[2.25rem] lg:text-[2.75rem] leading-[1.3] text-navy mb-4">
              تایم‌لاین <span className="text-teal-wordmark">نسل‌های</span> رُکاد
            </h2>
            <p className="text-[0.875rem] sm:text-[1rem] leading-[1.8] text-navy/70">
              از نسل اول تا نسل هفتم؛ هر دوره فارغ‌التحصیلان جدیدی با مهارت‌های عملی
              وارد اکوسیستم فناوری کشور شدند.
            </p>
          </div>

          {/* ریل تایم‌لاین */}
          <div className="relative max-w-4xl mx-auto">
            {/* خط مرکزی تایم‌لاین در دسکتاپ و سمت راست در موبایل */}
            <div className="absolute top-0 bottom-0 right-6 sm:right-1/2 -translate-x-1/2 w-1 bg-navy/15 rounded-full" />

            <div className="space-y-10 sm:space-y-14">
              {filteredTimeline.map((item, idx) => {
                const isLeft = idx % 2 === 1; // چپ در دسکتاپ
                const isFemale = item.gender === "female";
                const themeColor = isFemale ? "#E0195B" : "#21295A";
                const themeBg = isFemale ? "bg-[#FEFAFB]" : "bg-[#F4F5FB]";
                const themeBorder = isFemale ? "border-[#E0195B]" : "border-[#21295A]";
                const shadowColor = isFemale ? "#E0195B" : "#21295A";

                return (
                  <div
                    key={idx}
                    className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                      isLeft ? "sm:flex-row-reverse" : ""
                    }`}
                  >
                    {/* نود میانی سال / نسل */}
                    <div className="absolute right-0 sm:right-1/2 sm:translate-x-1/2 z-20 flex flex-col items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white border-[3px] shadow-md"
                      style={{ borderColor: themeColor }}
                    >
                      <span className="font-black text-[0.75rem] sm:text-[0.875rem] leading-none" style={{ color: themeColor }}>
                        {item.year}
                      </span>
                      <span className="text-[0.625rem] sm:text-[0.6875rem] font-bold text-navy/50 mt-0.5">
                        {item.gen}
                      </span>
                    </div>

                    {/* کارت فارغ‌التحصیل شاخص */}
                    <div
                      className={`w-full sm:w-[calc(50%-2.5rem)] pr-16 sm:pr-0 ${
                        isLeft ? "sm:pl-8" : "sm:pr-8"
                      }`}
                    >
                      <div className="relative group">
                        {/* لایه زیرین سایه سخت */}
                        <div
                          aria-hidden="true"
                          className="absolute inset-0 translate-x-[0.25rem] translate-y-[0.25rem] rounded-[0_1.5rem_0_1.5rem] [corner-shape:squircle]"
                          style={{ backgroundColor: shadowColor }}
                        />

                        {/* کارت اصلی */}
                        <div
                          className={`relative ${themeBg} border-2 ${themeBorder} rounded-[0_1.5rem_0_1.5rem] [corner-shape:squircle] p-5 sm:p-6 transition-transform duration-300 group-hover:-translate-y-1`}
                        >
                          <div className="flex items-start justify-between gap-3 mb-3">
                            <span
                              className="text-[0.6875rem] font-black px-2.5 py-1 rounded-full text-white"
                              style={{ backgroundColor: themeColor }}
                            >
                              {item.featured.school}
                            </span>
                            <span className="text-[0.75rem] font-bold text-navy/60">
                              جمعیت دوره: <strong className="text-navy">{item.count}</strong>
                            </span>
                          </div>

                          <div className="flex items-center gap-3.5 mb-3">
                            <div
                              className="w-12 h-12 rounded-full border-2 flex items-center justify-center font-black text-[0.875rem] flex-shrink-0"
                              style={{
                                borderColor: themeColor,
                                backgroundColor: isFemale ? "#FCE8EF" : "#E9EAEF",
                                color: themeColor,
                              }}
                            >
                              {initials(item.featured.name)}
                            </div>
                            <div>
                              <div className="text-[0.75rem] font-extrabold text-navy/50">
                                فارغ‌التحصیل شاخص دوره:
                              </div>
                              <h4 className="font-black text-[1.125rem] text-navy">
                                {item.featured.name}
                              </h4>
                              <div className="text-[0.8125rem] font-semibold text-teal-text">
                                {item.featured.role}
                              </div>
                            </div>
                          </div>

                          <p className="text-[0.8125rem] text-navy/70 leading-[1.8] mb-4">
                            {item.featured.desc}
                          </p>

                          <Link
                            href={`/alumni/${item.featured.slug}`}
                            className="inline-flex items-center gap-1.5 text-[0.8125rem] font-bold text-navy hover:text-teal transition-colors"
                          >
                            <span>مشاهده پروفایل کامل و پروژه‌ها</span>
                            <ChevronLeftIcon className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* ═════════════════════════════════════════════════════════
          ۴. خط رویدادها و نقاط عطف (Milestones)
      ═════════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 bg-white">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-[0.8125rem] font-extrabold text-teal-text mb-2 inline-block">
              رویدادهای سرنوشت‌ساز
            </span>
            <h2 className="font-black text-[1.75rem] sm:text-[2.25rem] lg:text-[2.75rem] leading-[1.3] text-navy mb-3">
              نقطه‌عطف‌های <span className="text-magenta">مسیر رُکاد</span>
            </h2>
            <p className="text-[0.875rem] sm:text-[1rem] leading-[1.8] text-navy/70">
              هر سال با یک جهش و توسعه زیرساختی همراه بود؛ از اولین کلاس تا گسترش
              استودیو و شبکه شغلی.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {milestones.map((m, i) => (
              <div key={i} className="relative group">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 translate-x-[0.2rem] translate-y-[0.2rem] rounded-[0_1.25rem_0_1.25rem] [corner-shape:squircle] bg-navy"
                />
                <div className="relative bg-white border-2 border-navy rounded-[0_1.25rem_0_1.25rem] [corner-shape:squircle] p-5 sm:p-6 transition-transform duration-300 group-hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="font-black text-[1.125rem] px-3 py-1 rounded-[0.5rem] text-white"
                      style={{ backgroundColor: m.dotColor }}
                    >
                      {m.year}
                    </span>
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: m.dotColor }} />
                  </div>
                  <h3 className="font-black text-[1.125rem] text-navy mb-2">
                    {m.title}
                  </h3>
                  <p className="text-[0.8125rem] text-navy/70 leading-[1.8]">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ═════════════════════════════════════════════════════════
          ۵. کارت‌های آمار کلی ۶ سال رُکاد (Big Stats)
      ═════════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 bg-[#F4F5FB] border-y border-navy/10">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-[0.8125rem] font-extrabold text-teal-text mb-2 inline-block">
              اثربخشی در مقیاس واقعی
            </span>
            <h2 className="font-black text-[1.75rem] sm:text-[2.25rem] lg:text-[2.75rem] leading-[1.3] text-navy mb-3">
              رُکاد در <span className="text-teal-wordmark">آینه اعداد</span>
            </h2>
            <p className="text-[0.875rem] sm:text-[1rem] leading-[1.8] text-navy/70">
              خروجی سال‌ها آموزش پروژه‌محور و هم‌افزایی اکوسیستم استارتاپی.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {alumniStats.map((st, i) => (
              <div key={i} className="relative group">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 translate-x-[0.25rem] translate-y-[0.25rem] rounded-[0_1.5rem_0_1.5rem] [corner-shape:squircle]"
                  style={{ backgroundColor: st.color }}
                />
                <div className="relative bg-white border-2 border-navy rounded-[0_1.5rem_0_1.5rem] [corner-shape:squircle] p-6 sm:p-7 text-right transition-transform duration-300 group-hover:-translate-y-1">
                  <span
                    className="inline-block text-[0.6875rem] font-black px-2.5 py-1 rounded-full mb-3"
                    style={{ backgroundColor: `${st.color}20`, color: st.color }}
                  >
                    {st.tag}
                  </span>
                  <div
                    className="font-black text-[2.5rem] sm:text-[3rem] leading-none mb-2"
                    style={{ color: st.color }}
                  >
                    {st.num}
                  </div>
                  <h3 className="font-extrabold text-[1rem] text-navy mb-1.5">
                    {st.label}
                  </h3>
                  <p className="text-[0.8125rem] text-navy/60 leading-[1.7]">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ═════════════════════════════════════════════════════════
          ۶. داستان‌های موفقیت شاخص (Success Stories)
      ═════════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 lg:py-24 bg-white">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-[0.8125rem] font-extrabold text-magenta-text mb-2 inline-block">
              از زبان خود بچه‌ها
            </span>
            <h2 className="font-black text-[1.75rem] sm:text-[2.25rem] lg:text-[2.75rem] leading-[1.3] text-navy mb-3">
              داستان <span className="text-magenta">موفقیت</span> دانش‌آموختگان
            </h2>
            <p className="text-[0.875rem] sm:text-[1rem] leading-[1.8] text-navy/70">
              هر دانش‌آموخته یک قصه منحصربه‌فرد از غلبه بر چالش‌ها و ساختن مسیر شخصی دارد.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredStories.map((story, i) => {
              const isFemale = story.gender === "female";
              const accentColor = isFemale ? "#E0195B" : "#202A5A";
              const tagBg = isFemale ? "bg-[#FCE8EF]" : "bg-[#E9EAEF]";

              return (
                <div key={i} className="relative group">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 translate-x-[0.3rem] translate-y-[0.3rem] rounded-[0_1.75rem_0_1.75rem] [corner-shape:squircle]"
                    style={{ backgroundColor: accentColor }}
                  />
                  <div className="relative bg-white border-2 border-navy rounded-[0_1.75rem_0_1.75rem] [corner-shape:squircle] p-6 sm:p-7 flex flex-col justify-between h-full transition-transform duration-300 group-hover:-translate-y-1">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span
                          className={`text-[0.6875rem] font-extrabold px-3 py-1 rounded-full ${tagBg}`}
                          style={{ color: accentColor }}
                        >
                          {story.gen}
                        </span>
                        <span className="text-[0.75rem] font-bold text-navy/40">
                          سال {story.year}
                        </span>
                      </div>

                      <div className="flex items-center gap-3.5 mb-5">
                        <div
                          className="w-14 h-14 rounded-full border-2 flex items-center justify-center font-black text-[1rem] flex-shrink-0"
                          style={{
                            borderColor: accentColor,
                            backgroundColor: isFemale ? "#FEFAFB" : "#F4F5FB",
                            color: accentColor,
                          }}
                        >
                          {story.avatarText}
                        </div>
                        <div>
                          <h3 className="font-black text-[1.1875rem] text-navy">
                            {story.name}
                          </h3>
                          <p className="text-[0.8125rem] font-bold text-teal-text">
                            {story.role}
                          </p>
                        </div>
                      </div>

                      <blockquote className="text-[0.875rem] leading-[2] text-navy/80 mb-6 relative pr-3 border-r-2"
                        style={{ borderColor: accentColor }}
                      >
                        «{story.quote}»
                      </blockquote>
                    </div>

                    <div className="pt-4 border-t border-navy/10 flex items-center justify-between">
                      <span className="text-[0.75rem] font-extrabold text-navy/60">
                        {story.company}
                      </span>
                      <Link
                        href={`/alumni/${story.slug}`}
                        className="inline-flex items-center gap-1 text-[0.8125rem] font-bold text-navy hover:text-teal transition-colors"
                      >
                        <span>پروفایل</span>
                        <ArrowIcon className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ═════════════════════════════════════════════════════════
          ۷. نقشه پراکندگی جغرافیایی (Map Distribution)
      ═════════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 bg-[#F8FAF9] border-y border-navy/10">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-[0.8125rem] font-extrabold text-teal-text mb-2 inline-block">
              شبکه سراسری متخصصان
            </span>
            <h2 className="font-black text-[1.75rem] sm:text-[2.25rem] lg:text-[2.75rem] leading-[1.3] text-navy mb-3">
              رُکادی‌ها <span className="text-teal-wordmark">کجای ایران</span> هستند؟
            </h2>
            <p className="text-[0.875rem] sm:text-[1rem] leading-[1.8] text-navy/70">
              دانش‌آموختگان رُکاد در بیش از ۱۵ شهر کشور و در شرکت‌های نوآور مشغول به فعالیت هستند.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8 items-center">
            {/* نقشه گرافیکی تعاملی */}
            <div className="relative bg-white border-2 border-navy rounded-[0_2rem_0_2rem] [corner-shape:squircle] p-6 sm:p-10 shadow-[4px_4px_0_0_#202A5A] overflow-hidden min-h-[360px] flex items-center justify-center">
              <svg viewBox="0 0 500 400" className="w-full h-auto max-h-[320px]" fill="none">
                <path
                  d="M 90 180 L 120 130 L 170 100 L 220 90 L 270 85 L 320 90 L 370 110 L 410 145 L 430 200 L 425 250 L 400 300 L 360 335 L 310 350 L 260 355 L 210 345 L 165 320 L 130 280 L 105 240 Z"
                  fill="#EEF8F7"
                  stroke="#58BDAF"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                />
                {/* خطوط بافت داخلی */}
                <path
                  d="M 120 130 L 220 90 M 270 85 L 370 110 M 170 100 L 310 350 M 410 145 L 260 355"
                  stroke="#58BDAF"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  opacity="0.3"
                />
              </svg>

              {/* پین‌های شهرها با پالس */}
              <div className="absolute top-[30%] right-[42%] flex flex-col items-center">
                <span className="w-4 h-4 rounded-full bg-teal border-2 border-white shadow animate-ping" />
                <span className="bg-navy text-white text-[0.6875rem] font-bold px-2 py-0.5 rounded-full mt-1">
                  تهران (۱۸۰ نفر)
                </span>
              </div>

              <div className="absolute top-[34%] right-[26%] flex flex-col items-center">
                <span className="w-3.5 h-3.5 rounded-full bg-magenta border-2 border-white shadow" />
                <span className="bg-navy text-white text-[0.6875rem] font-bold px-2 py-0.5 rounded-full mt-1">
                  مشهد (۵۴ نفر)
                </span>
              </div>

              <div className="absolute top-[52%] right-[48%] flex flex-col items-center">
                <span className="w-3.5 h-3.5 rounded-full bg-orange border-2 border-white shadow" />
                <span className="bg-navy text-white text-[0.6875rem] font-bold px-2 py-0.5 rounded-full mt-1">
                  اصفهان (۴۲ نفر)
                </span>
              </div>

              <div className="absolute top-[65%] right-[52%] flex flex-col items-center">
                <span className="w-3.5 h-3.5 rounded-full bg-teal border-2 border-white shadow" />
                <span className="bg-navy text-white text-[0.6875rem] font-bold px-2 py-0.5 rounded-full mt-1">
                  شیراز (۲۸ نفر)
                </span>
              </div>
            </div>

            {/* لیست شهرهای پرتراکم */}
            <div className="bg-white border-2 border-navy rounded-[0_2rem_0_2rem] [corner-shape:squircle] p-6 sm:p-7 shadow-[4px_4px_0_0_#202A5A]">
              <h3 className="font-black text-[1.125rem] text-navy mb-5 pb-3 border-b border-navy/10">
                شهرهای پرتراکم فارغ‌التحصیلان
              </h3>
              <div className="space-y-4">
                {cityDistributions.map((c, i) => (
                  <div key={i} className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 min-w-[75px]">
                      <span
                        className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: c.color }}
                      />
                      <span className="text-[0.875rem] font-extrabold text-navy">
                        {c.city}
                      </span>
                    </div>

                    <div className="flex-1 bg-navy/5 h-2.5 rounded-full overflow-hidden mx-2">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{
                          width: `${c.percent}%`,
                          backgroundColor: c.color,
                        }}
                      />
                    </div>

                    <span className="text-[0.875rem] font-black text-navy min-w-[45px] text-left">
                      {c.count} نفر
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ═════════════════════════════════════════════════════════
          ۸. لحظه‌های تصویری و پشت‌صحنه (Gallery & Moments)
      ═════════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 bg-navy text-white">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-[0.8125rem] font-extrabold text-teal mb-2 inline-block">
              قاب‌های به‌یادماندنی
            </span>
            <h2 className="font-black text-[1.75rem] sm:text-[2.25rem] lg:text-[2.75rem] leading-[1.3] text-white mb-3">
              پشت‌صحنه‌ی هر <span className="text-teal">نسل رُکاد</span>
            </h2>
            <p className="text-[0.875rem] sm:text-[1rem] leading-[1.8] text-white/70">
              تصاویری از جلسات کارگاهی، ارائه‌های دمو دی، کار تیمی و روزهای فارغ‌التحصیلی.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {momentsGallery.map((m, i) => (
              <div
                key={i}
                className="relative bg-white/5 border border-white/20 rounded-[0_1.5rem_0_1.5rem] [corner-shape:squircle] p-6 text-center transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 hover:border-teal"
              >
                <div className="text-4xl mb-4">{m.icon}</div>
                <h3 className="font-black text-[1.125rem] text-white mb-2">
                  {m.title}
                </h3>
                <p className="text-[0.8125rem] text-white/70 leading-[1.7]">
                  {m.meta}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ═════════════════════════════════════════════════════════
          ۹. گرید کامل و فیلترپذیر تمام دانش‌آموختگان (All Alumni Grid)
      ═════════════════════════════════════════════════════════ */}
      <section id="grid" className="py-14 sm:py-20 lg:py-24 bg-[#F8FAF9]">
        <Container>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 sm:mb-10 pb-6 border-b border-navy/10">
            <div>
              <h2 className="font-black text-[1.5rem] sm:text-[2rem] text-navy mb-1">
                بانک اطلاعات تمام دانش‌آموختگان
              </h2>
              <p className="text-[0.875rem] text-navy/60">
                {filteredAlumni.length} دانش‌آموخته با شرایط انتخابی
              </p>
            </div>

            {/* فیلتر پرسونا / حوزه تخصصی */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setPersonaFilter("all")}
                className={`px-3.5 py-1.5 rounded-full text-[0.8125rem] font-bold border transition-colors cursor-pointer ${
                  personaFilter === "all"
                    ? "bg-navy text-white border-navy"
                    : "bg-white text-navy/70 border-navy/20 hover:border-navy"
                }`}
              >
                همه حوزه‌ها
              </button>
              {Object.keys(PERSONAS).map((pKey) => {
                const p = PERSONAS[pKey];
                const active = personaFilter === pKey;
                return (
                  <button
                    key={pKey}
                    type="button"
                    onClick={() => setPersonaFilter(pKey)}
                    className={`px-3.5 py-1.5 rounded-full text-[0.8125rem] font-bold border transition-colors cursor-pointer ${
                      active
                        ? "bg-navy text-white border-navy"
                        : "bg-white text-navy/70 border-navy/20 hover:border-navy"
                    }`}
                  >
                    {p.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* گرید کارت‌ها */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {filteredAlumni.map((member) => {
              const p = PERSONAS[member.persona];
              const isFemale = member.gender === "female";
              const borderTheme = isFemale ? "#E0195B" : "#58BDAF";

              return (
                <Link
                  key={member.slug}
                  href={`/alumni/${member.slug}`}
                  className="group relative block bg-white rounded-[0_1.5rem_0_1.5rem] [corner-shape:squircle] border-2 border-navy p-6 transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 shadow-[3px_3px_0_0_#202A5A] hover:shadow-[5px_5px_0_0_#202A5A]"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="w-14 h-14 rounded-[0_1rem_0_1rem] [corner-shape:squircle] border-2 flex items-center justify-center font-black text-lg flex-shrink-0"
                      style={{
                        borderColor: borderTheme,
                        backgroundColor: isFemale ? "#FCE8EF" : "#EEF8F7",
                        color: borderTheme,
                      }}
                    >
                      {initials(member.name)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-black text-[1.125rem] text-navy mb-1 group-hover:text-teal transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-[0.8125rem] text-navy/70 leading-snug line-clamp-1 mb-2">
                        {member.role}
                      </p>
                      <span
                        className="inline-block text-[0.6875rem] font-bold px-2.5 py-0.5 rounded-full"
                        style={{
                          backgroundColor: isFemale ? "#FCE8EF" : "#EEF8F7",
                          color: borderTheme,
                        }}
                      >
                        {member.gen} · {p.label}
                      </span>
                    </div>
                  </div>

                  <div className="border-t border-dashed border-navy/15 pt-3 mb-3 flex justify-between text-[0.75rem] text-navy/60">
                    <span>فارغ‌التحصیلی: {member.year}</span>
                    <span>{member.city}</span>
                  </div>

                  <div className="flex items-center justify-between text-[0.75rem] font-extrabold text-teal-text">
                    <span>{member.projects} نمونه‌کار و پروژه</span>
                    <span className="inline-flex items-center gap-1 group-hover:-translate-x-1 transition-transform">
                      مشاهده رزومه
                      <ChevronLeftIcon className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ═════════════════════════════════════════════════════════
          ۱۰. دعوت به اقدام پایانی (Final CTA)
      ═════════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 lg:py-24 bg-teal text-white text-center relative overflow-hidden">
        <Container className="relative z-10 max-w-3xl mx-auto">
          <h2 className="font-black text-[2rem] sm:text-[2.75rem] lg:text-[3.25rem] leading-[1.3] text-white mb-5 flex flex-wrap justify-center items-center gap-x-2.5">
            <span className="inline-block rotate-[-2deg]">می‌خوای</span>
            <span className="inline-block rotate-[2deg]">نسل بعدی</span>
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
