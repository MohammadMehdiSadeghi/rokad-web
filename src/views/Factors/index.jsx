"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "../../layout/Container";
import {
  FOUNDER_STAFF,
  MANAGEMENT_STAFF,
  LEADERS_STAFF,
  DEPUTIES_BOYS,
  DEPUTIES_GIRLS,
  MENTORS_BOYS,
  MENTORS_GIRLS,
  getInitials,
  darker,
} from "./data";
import { GlobeIcon } from "../../common/Icons";

/* =========================================================
   کارت امضای رکاد (Signature Rokad Card)
   - گوشه‌های نامتقارن رکاد (squircle / 0_1.5rem_0_1.5rem)
   - لایه سایه سخت زیرین (Hard Drop Shadow)
   - هدر رنگی با پترن هندسی و عکس کات‌اوت
   - فوتر امضای رکاد با ۳ چیپ ✦ و نشان اختصاصی
========================================================= */
function RokadCard({ member, isFeatured = false }) {
  const [imgError, setImgError] = useState(false);

  const imageSrc =
    !imgError && (member.img || member.fallbackImg)
      ? member.img || member.fallbackImg
      : null;

  const darkBorder = darker(member.color);

  return (
    <div className={`relative h-full flex flex-col ${isFeatured ? "max-w-md mx-auto w-full" : ""}`}>
      {/* ── لایه سایه سخت زیرین ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 translate-x-[0.25rem] translate-y-[0.25rem] rounded-[0_1.5rem_0_1.5rem] [corner-shape:squircle] bg-[#202A5A]"
      />

      {/* ── بدنه اصلی کارت ── */}
      <article className="relative z-10 bg-white border-2 border-[#202A5A] rounded-[0_1.5rem_0_1.5rem] [corner-shape:squircle] overflow-hidden flex flex-col justify-between h-full transition-transform duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5">
        <div>
          {/* بالای کارت: رنگ تم + پترن + عکس */}
          <div
            className="relative w-full h-[10.5rem] sm:h-[11.5rem] overflow-hidden flex items-end justify-center"
            style={{
              backgroundColor: member.color,
              borderBottom: "2px solid #202A5A",
            }}
          >
            {/* پترن پس‌زمینه */}
            {member.pattern && (
              <img
                src={member.pattern}
                alt=""
                draggable="false"
                className="absolute inset-0 w-full h-full object-cover opacity-40 select-none pointer-events-none"
              />
            )}

            {/* نشان تگ گوشه بالا */}
            <span
              className="absolute top-2.5 right-3 z-20 text-[0.6875rem] font-black px-3 py-0.5 rounded-[0_0.5rem_0_0.5rem] [corner-shape:squircle] bg-white text-[#202A5A] border border-[#202A5A] shadow-[1.5px_1.5px_0_0_#202A5A] select-none"
            >
              {member.tag || "عوامل رکاد"}
            </span>

            {/* عکس یا حروف اول */}
            {imageSrc ? (
              <img
                src={imageSrc}
                alt={member.name}
                loading="lazy"
                draggable="false"
                onError={() => setImgError(true)}
                className="relative z-10 h-[9.75rem] sm:h-[10.75rem] w-auto object-contain object-bottom translate-y-1 scale-105"
              />
            ) : (
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <span className="text-white font-black text-[3.5rem] leading-none select-none tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)]">
                  {getInitials(member.name)}
                </span>
              </div>
            )}
          </div>

          {/* اطلاعات متن */}
          <div className="p-4 sm:p-5 text-right">
            <h3 className="font-black text-[1.125rem] sm:text-[1.2rem] text-[#202A5A] mb-1">
              {member.name}
            </h3>
            <p className="text-[0.75rem] sm:text-[0.8125rem] font-bold text-[#202A5A]/75 leading-relaxed mb-3">
              {member.role}
            </p>

            {member.bio && (
              <p className="text-[0.75rem] sm:text-[0.8125rem] text-[#202A5A]/70 leading-[1.75] line-clamp-3">
                {member.bio}
              </p>
            )}
          </div>
        </div>

        {/* فوتر کارت: ۳ ستاره چیپ + بج پایانی */}
        <div className="p-4 sm:p-5 pt-0">
          <div className="w-full h-px bg-[#202A5A]/15 mb-3" />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="w-[20px] h-[20px] flex items-center justify-center text-[0.55rem] text-white rounded-[0_4px_0_4px] select-none"
                  style={{
                    backgroundColor: member.color,
                    border: `1px solid ${darkBorder}`,
                    boxShadow: `1px 1px 0 0 ${darkBorder}`,
                  }}
                >
                  ✦
                </span>
              ))}
            </div>

            <span
              className="text-[0.6875rem] font-black text-white px-2.5 py-0.5 rounded-[0_6px_0_6px] select-none"
              style={{
                backgroundColor: member.color,
                border: `1px solid ${darkBorder}`,
                boxShadow: `1px 1px 0 0 ${darkBorder}`,
              }}
            >
              {member.tag}
            </span>
          </div>
        </div>
      </article>
    </div>
  );
}

/* =========================================================
   کارت اختصاصی بنیان‌گذار (Featured Founder Card)
========================================================= */
function FounderCard({ member }) {
  const darkBorder = darker(member.color);

  return (
    <div className="relative max-w-2xl mx-auto w-full">
      {/* نشان امضای رکاد بالای کارت */}
      <span className="absolute -top-3 right-4 z-30 bg-[#F8A41D] text-[#202A5A] border-2 border-[#202A5A] rounded-[0_0.625rem_0_0.625rem] [corner-shape:squircle] px-3.5 py-1 font-black text-[0.75rem] sm:text-[0.8125rem] rotate-[-2deg] shadow-[2px_2px_0_0_#202A5A]">
        امضای رکاد
      </span>

      {/* لایه سایه سخت زیرین */}
      <div
        aria-hidden="true"
        className="absolute inset-0 translate-x-[0.35rem] translate-y-[0.35rem] rounded-[0_1.5rem_0_1.5rem] [corner-shape:squircle] bg-[#202A5A]"
      />

      {/* بدنه کارت افقی/عمودی بنیان‌گذار */}
      <article className="relative z-10 bg-white border-2 border-[#202A5A] rounded-[0_1.5rem_0_1.5rem] [corner-shape:squircle] overflow-hidden flex flex-col sm:flex-row justify-between transition-transform duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5">
        {/* سمت تصویر: پترن سبز + پرتره بزرگ */}
        <div className="relative sm:w-[42%] bg-[#59BBAF] min-h-[14rem] sm:min-h-[16rem] overflow-hidden flex items-end justify-center border-b-2 sm:border-b-0 sm:border-l-2 border-[#202A5A]">
          <img
            src={member.pattern}
            alt=""
            draggable="false"
            className="absolute inset-0 w-full h-full object-cover opacity-40 select-none pointer-events-none"
          />
          <img
            src={member.img}
            alt={member.name}
            loading="lazy"
            draggable="false"
            className="relative z-10 h-[13rem] sm:h-[15rem] w-auto object-contain object-bottom translate-y-3 scale-110"
          />
        </div>

        {/* سمت توضیحات و بیوگرافی */}
        <div className="sm:w-[58%] p-5 sm:p-6 flex flex-col justify-between">
          <div>
            <span
              className="inline-block text-[0.6875rem] font-black text-white px-3 py-0.5 rounded-[0_6px_0_6px] mb-2"
              style={{
                backgroundColor: member.color,
                border: `1px solid ${darkBorder}`,
                boxShadow: `1px 1px 0 0 ${darkBorder}`,
              }}
            >
              {member.tag}
            </span>

            <h3 className="font-black text-[1.375rem] sm:text-[1.5rem] text-[#202A5A] mb-1">
              {member.name}
            </h3>

            <p className="text-[0.8125rem] sm:text-[0.875rem] font-bold text-[#202A5A]/80 mb-3">
              {member.role}
            </p>

            <p className="text-[0.8125rem] text-[#202A5A]/75 leading-[1.8] mb-4">
              {member.bio}
            </p>
          </div>

          <div>
            <div className="w-full h-px bg-[#202A5A]/15 my-3" />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="w-[22px] h-[22px] flex items-center justify-center text-[0.6rem] text-white rounded-[0_4px_0_4px]"
                    style={{
                      backgroundColor: member.color,
                      border: `1px solid ${darkBorder}`,
                      boxShadow: `1px 1px 0 0 ${darkBorder}`,
                    }}
                  >
                    ✦
                  </span>
                ))}
              </div>

              {member.website && (
                <a
                  href={member.website}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-[0.75rem] font-black text-[#202A5A] bg-[#EEF8F7] border border-[#59BBAF] px-3 py-1 rounded-[0_6px_0_6px] shadow-[1.5px_1.5px_0_0_#202A5A] hover:bg-[#59BBAF] hover:text-white transition-all"
                >
                  <GlobeIcon className="w-3.5 h-3.5" />
                  <span>وب‌سایت شخصی</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

/* =========================================================
   ردیف دو ستونه ۴ کارتی (راست پسرانه، چپ دخترانه با فاصله)
   - ۴ کارت در هر ردیف روی دسکتاپ (۲ راست پسرانه + فاصله + ۲ چپ دخترانه)
========================================================= */
function GenderSplitSection({ boysList, girlsList, sectionTitle, badgeText }) {
  return (
    <section className="scroll-mt-24">
      {/* تیتر سکشن */}
      <div className="flex items-center gap-3 mb-6 pb-3 border-b-2 border-[#202A5A]/15">
        <span className="w-3.5 h-3.5 rounded-full bg-[#59BBAF] border-2 border-[#202A5A] inline-block shadow-[1px_1px_0_0_#202A5A]" />
        <h2 className="font-black text-[1.25rem] xs:text-[1.375rem] sm:text-[2.25rem] lg:text-[2.75rem] text-[#202A5A]">
          {sectionTitle}
        </h2>
        {badgeText && (
          <span className="mr-auto inline-block bg-white px-3 py-1 rounded-[0_0.5rem_0_0.5rem] [corner-shape:squircle] text-[0.75rem] sm:text-[0.8125rem] font-black border-2 border-[#202A5A] text-[#202A5A] shadow-[2px_2px_0_0_#59BBAF]">
            {badgeText}
          </span>
        )}
      </div>

      {/* ستون‌های تفکیک‌شده: راست پسرانه (۲ کارت) | فاصله | چپ دخترانه (۲ کارت) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-12 pt-2 px-1">
        {/* ── بخش راست: هنرستان پسرانه ── */}
        <div className="flex flex-col">
          {/* هدر ستون پسرانه */}
          <div className="flex items-center gap-2 mb-4 pb-2 border-b border-dashed border-[#202A5A]/20">
            <span className="w-2.5 h-2.5 rounded-full bg-[#202A5A] inline-block" />
            <h3 className="font-black text-[0.9375rem] sm:text-[1rem] text-[#202A5A]">
              هنرستان پسرانه
            </h3>
            <span className="mr-auto text-[0.6875rem] font-black bg-[#202A5A] text-white px-2 py-0.5 rounded-[0_4px_0_4px]">
              {boysList.length} نفر
            </span>
          </div>

          {/* گرید ۲ کارتی پسرانه */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 flex-1">
            {boysList.map((member) => (
              <RokadCard key={member.name} member={member} />
            ))}
          </div>
        </div>

        {/* ── بخش چپ: هنرستان دخترانه ── */}
        <div className="flex flex-col">
          {/* هدر ستون دخترانه */}
          <div className="flex items-center gap-2 mb-4 pb-2 border-b border-dashed border-[#E0195B]/30">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E0195B] inline-block" />
            <h3 className="font-black text-[0.9375rem] sm:text-[1rem] text-[#E0195B]">
              هنرستان دخترانه
            </h3>
            <span className="mr-auto text-[0.6875rem] font-black bg-[#E0195B] text-white px-2 py-0.5 rounded-[0_4px_0_4px]">
              {girlsList.length} نفر
            </span>
          </div>

          {/* گرید ۲ کارتی دخترانه */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 flex-1">
            {girlsList.map((member) => (
              <RokadCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   صفحه اصلی عوامل رکاد
========================================================= */
export default function FactorsPage() {
  const [activeTab, setActiveTab] = useState("all");

  const totalCount =
    FOUNDER_STAFF.length +
    MANAGEMENT_STAFF.length +
    LEADERS_STAFF.length +
    DEPUTIES_BOYS.length +
    DEPUTIES_GIRLS.length +
    MENTORS_BOYS.length +
    MENTORS_GIRLS.length;

  return (
    <div className="min-h-screen bg-white text-[#202A5A] pb-16 sm:pb-24" dir="rtl">
      {/* ══════════════════════════════════════════════
          هدر سکشن عوامل با استایل امضای رکاد
      ══════════════════════════════════════════════ */}
      <header className="relative pt-12 sm:pt-16 pb-8 sm:pb-12 text-center px-4 overflow-hidden">
        {/* پترن پس‌زمینه محو */}
        <div
          aria-hidden="true"
          className="absolute inset-0 w-full h-full opacity-40 pointer-events-none rotate-180 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]"
        >
          <img
            src="/assets/Pattern/layout-pattern.png"
            alt=""
            draggable="false"
            className="w-full h-full object-cover select-none"
          />
        </div>

        <Container className="relative z-10">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 bg-[#EEF8F7] border-2 border-[#59BBAF] rounded-full px-4 sm:px-5 py-1.5 mb-4 shadow-[2px_2px_0_0_#59BBAF]">
            <span className="w-2 h-2 rounded-full bg-[#59BBAF] animate-pulse" />
            <span className="text-[0.8125rem] sm:text-[0.875rem] font-black text-[#202A5A]">
              کادر و عوامل انسانی رکاداسکول
            </span>
          </div>

          {/* تیتر اصلی */}
          <h1 className="font-black text-[2rem] sm:text-[2.75rem] lg:text-[3.25rem] text-[#202A5A] leading-[1.25] mb-4 sm:mb-8">
            عوامل <span className="text-[#59BBAF]">رکاد</span>
          </h1>

          {/* زیرتیتر */}
          <p className="text-[0.875rem] sm:text-[1.0625rem] font-semibold text-[#202A5A]/70 max-w-2xl mx-auto leading-relaxed">
            هر پروژه یک قصه دارد، پشت هر قصه یک تیم — این آدم‌ها هستند که هرروز رکاد را می‌سازند؛ از ایده‌پردازی و مدیریت تا راهبری، معاونت و منتورینگ تخصصی.
          </p>

          {/* ── تب‌های دسته‌بندی ── */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8">
            <button
              type="button"
              onClick={() => setActiveTab("all")}
              className={`px-4 sm:px-5 py-2 rounded-[0_0.75rem_0_0.75rem] [corner-shape:squircle] text-[0.8125rem] sm:text-[0.875rem] font-black border-2 border-[#202A5A] transition-all cursor-pointer ${
                activeTab === "all"
                  ? "bg-[#202A5A] text-white shadow-[3px_3px_0_0_#59BBAF] -translate-y-0.5"
                  : "bg-white text-[#202A5A] hover:bg-[#F4F5FB]"
              }`}
            >
              همه کادر ({totalCount})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("management")}
              className={`px-4 sm:px-5 py-2 rounded-[0_0.75rem_0_0.75rem] [corner-shape:squircle] text-[0.8125rem] sm:text-[0.875rem] font-black border-2 border-[#202A5A] transition-all cursor-pointer ${
                activeTab === "management"
                  ? "bg-[#59BBAF] text-white shadow-[3px_3px_0_0_#202A5A] -translate-y-0.5"
                  : "bg-white text-[#202A5A] hover:bg-[#EEF8F7]"
              }`}
            >
              بنیان‌گذار و مدیریت ارشد ({MANAGEMENT_STAFF.length + LEADERS_STAFF.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("deputies")}
              className={`px-4 sm:px-5 py-2 rounded-[0_0.75rem_0_0.75rem] [corner-shape:squircle] text-[0.8125rem] sm:text-[0.875rem] font-black border-2 border-[#202A5A] transition-all cursor-pointer ${
                activeTab === "deputies"
                  ? "bg-[#202A5A] text-white shadow-[3px_3px_0_0_#F8A41D] -translate-y-0.5"
                  : "bg-white text-[#202A5A] hover:bg-[#F4F5FB]"
              }`}
            >
              معاونان و دستیاران ({DEPUTIES_BOYS.length + DEPUTIES_GIRLS.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("mentors")}
              className={`px-4 sm:px-5 py-2 rounded-[0_0.75rem_0_0.75rem] [corner-shape:squircle] text-[0.8125rem] sm:text-[0.875rem] font-black border-2 border-[#E0195B] transition-all cursor-pointer ${
                activeTab === "mentors"
                  ? "bg-[#E0195B] text-white shadow-[3px_3px_0_0_#202A5A] -translate-y-0.5"
                  : "bg-white text-[#E0195B] hover:bg-[#FEFAFB]"
              }`}
            >
              مربیان و منتورها ({MENTORS_BOYS.length + MENTORS_GIRLS.length})
            </button>
          </div>
        </Container>
      </header>

      {/* ══════════════════════════════════════════════
          محتوای اصلی و سکشن‌ها به ترتیب درخواستی
      ══════════════════════════════════════════════ */}
      <Container className="mt-4 sm:mt-6 space-y-16 sm:space-y-24">
        {/* ════ ۱. بنیان‌گذار (مهندس آرون) و مدیریت ارشد ════ */}
        {(activeTab === "all" || activeTab === "management") && (
          <section className="scroll-mt-24 space-y-10">
            {/* بنیان‌گذار */}
            <div>
              <div className="flex items-center gap-3 mb-6 pb-3 border-b-2 border-[#202A5A]/15">
                <span className="w-3.5 h-3.5 rounded-full bg-[#F8A41D] border-2 border-[#202A5A] inline-block shadow-[1px_1px_0_0_#202A5A]" />
                <h2 className="font-black text-[1.25rem] xs:text-[1.375rem] sm:text-[2.25rem] lg:text-[2.75rem] text-[#202A5A]">
                  بنیان‌گذار و ایده‌پرداز رکاد
                </h2>
                <span className="mr-auto inline-block bg-white px-3 py-1 rounded-[0_0.5rem_0_0.5rem] [corner-shape:squircle] text-[0.75rem] sm:text-[0.8125rem] font-black border-2 border-[#202A5A] text-[#202A5A] shadow-[2px_2px_0_0_#F8A41D]">
                  امضای رکاد
                </span>
              </div>

              <div className="pt-2 px-1">
                {FOUNDER_STAFF.map((staff) => (
                  <FounderCard key={staff.name} member={staff} />
                ))}
              </div>
            </div>

            {/* مدیریت ارشد + راهبران — ترکیب‌شده طبق درخواست کارفرما:
                امیریان، عزیزپور، کمالی، دولت‌آبادی */}
            <div>
              <div className="flex items-center gap-3 mb-6 pb-3 border-b-2 border-[#202A5A]/15">
                <span className="w-3.5 h-3.5 rounded-full bg-[#59BBAF] border-2 border-[#202A5A] inline-block shadow-[1px_1px_0_0_#202A5A]" />
                <h2 className="font-black text-[1.25rem] xs:text-[1.375rem] sm:text-[2.25rem] lg:text-[2.75rem] text-[#202A5A]">
                  مدیریت و راهبری اجرایی
                </h2>
                <span className="mr-auto inline-block bg-white px-3 py-1 rounded-[0_0.5rem_0_0.5rem] [corner-shape:squircle] text-[0.75rem] sm:text-[0.8125rem] font-black border-2 border-[#202A5A] text-[#202A5A] shadow-[2px_2px_0_0_#59BBAF]">
                  {MANAGEMENT_STAFF.length + LEADERS_STAFF.length} نفر
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto gap-6 sm:gap-7 pt-2 px-1">
                {/* ترتیب: راهبر پسرانه → مدیرعامل → هم‌بنیان‌گذار → راهبر دخترانه */}
                {[
                  LEADERS_STAFF.find((s) => s.name === "امیرحسین امیریان"),
                  MANAGEMENT_STAFF.find((s) => s.name === "علیرضا عزیزپور"),
                  MANAGEMENT_STAFF.find((s) => s.name === "محمد کمالی"),
                  LEADERS_STAFF.find((s) => s.name === "رویا دولت‌آبادی"),
                ]
                  .filter(Boolean)
                  .map((staff) => (
                    <RokadCard key={staff.name} member={staff} />
                  ))}
              </div>
            </div>
          </section>
        )}

        {/* ════ ۳. معاونان و دستیاران (۴ کارت در هر ردیف، ۲ راست پسرانه، ۲ چپ دخترانه) ════ */}
        {(activeTab === "all" || activeTab === "deputies") && (
          <GenderSplitSection
            boysList={DEPUTIES_BOYS}
            girlsList={DEPUTIES_GIRLS}
            sectionTitle="معاونان و دستیاران"
            badgeText={`${DEPUTIES_BOYS.length + DEPUTIES_GIRLS.length} نفر`}
          />
        )}

        {/* ════ ۴. مربیان و منتورها (۴ کارت در هر ردیف، ۲ راست پسرانه، ۲ چپ دخترانه) ════ */}
        {(activeTab === "all" || activeTab === "mentors") && (
          <GenderSplitSection
            boysList={MENTORS_BOYS}
            girlsList={MENTORS_GIRLS}
            sectionTitle="مربیان و منتورها"
            badgeText={`${MENTORS_BOYS.length + MENTORS_GIRLS.length} نفر`}
          />
        )}
      </Container>
    </div>
  );
}
