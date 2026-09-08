"use client";

import { useState } from "react";
import Container from "../../layout/Container";
import {
  FOUNDER_STAFF,
  MANAGEMENT_STAFF,
  BOYS_STAFF,
  GIRLS_STAFF,
  getInitials,
} from "./data";

/* =========================================================
   کامپوننت کارت استیکری استاندارد (Sticker Card)
========================================================= */
function StickerCard({
  member,
  school = "male",
  index = 0,
  isFeatured = false,
}) {
  const [imgError, setImgError] = useState(false);

  // تنظیم رنگ‌ها و سایه‌ها متناسب با نوع دسته‌بندی
  const themeConfig = {
    founder: {
      border: "border-[#202A5A]",
      shadow: "shadow-[7px_7px_0_0_#59BBAF] hover:shadow-[11px_11px_0_0_#59BBAF]",
      avatarBg: "bg-[#59BBAF]",
      avatarBorder: "border-[#202A5A]",
      roleBg: "bg-[#59BBAF]",
      badgeBorder: "border-[#202A5A]",
      badgeText: "text-[#202A5A]",
      dashedBorder: "border-[#59BBAF]/40",
    },
    management: {
      border: "border-[#202A5A]",
      shadow: "shadow-[6px_6px_0_0_#59BBAF] hover:shadow-[10px_10px_0_0_#59BBAF]",
      avatarBg: "bg-[#59BBAF]",
      avatarBorder: "border-[#202A5A]",
      roleBg: "bg-[#202A5A]",
      badgeBorder: "border-[#59BBAF]",
      badgeText: "text-[#202A5A]",
      dashedBorder: "border-[#59BBAF]/40",
    },
    male: {
      border: "border-[#202A5A]",
      shadow: "shadow-[6px_6px_0_0_#202A5A] hover:shadow-[10px_10px_0_0_#202A5A]",
      avatarBg: "bg-[#202A5A]",
      avatarBorder: "border-[#202A5A]",
      roleBg: "bg-[#202A5A]",
      badgeBorder: "border-[#202A5A]",
      badgeText: "text-[#202A5A]",
      dashedBorder: "border-[#202A5A]/30",
    },
    female: {
      border: "border-[#E0195B]",
      shadow: "shadow-[6px_6px_0_0_#E0195B] hover:shadow-[10px_10px_0_0_#E0195B]",
      avatarBg: "bg-[#E0195B]",
      avatarBorder: "border-[#E0195B]",
      roleBg: "bg-[#E0195B]",
      badgeBorder: "border-[#E0195B]",
      badgeText: "text-[#E0195B]",
      dashedBorder: "border-[#E0195B]/30",
    },
  };

  const theme = themeConfig[school] || themeConfig.male;

  // تناوب زوایای چرخش ملایم استیکرها
  const tiltStyle =
    index % 3 === 0
      ? "-rotate-[1.5deg]"
      : index % 3 === 1
      ? "rotate-[1.2deg]"
      : "rotate-0";

  const imageSrc =
    !imgError && (member.img || member.fallbackImg)
      ? member.img || member.fallbackImg
      : null;

  return (
    <div
      className={`group relative bg-white border-[3px] ${theme.border} rounded-[1.75rem] p-5 sm:p-6 text-center transition-all duration-200 cursor-pointer ${theme.shadow} ${tiltStyle} hover:rotate-0 hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0_0_#202A5A] flex flex-col justify-between ${
        isFeatured ? "max-w-md mx-auto w-full" : ""
      }`}
    >
      {/* ── نشان بالای استیکر (Badge) ── */}
      <span
        className={`absolute -top-3.5 left-3.5 sm:left-4 z-20 bg-white px-3.5 py-1 border-[2.5px] ${theme.badgeBorder} ${theme.badgeText} rounded-full text-[0.6875rem] sm:text-[0.75rem] font-black -rotate-4 shadow-[1.5px_1.5px_0_0_#202A5A] select-none`}
      >
        {member.tag || member.badge || "عوامل رکاد"}
      </span>

      <div>
        {/* ── آواتار دایره‌ای تمیز ── */}
        <div className="relative mx-auto mb-3.5 w-24 h-24">
          <div
            className={`w-24 h-24 rounded-full flex items-center justify-center text-white text-[1.625rem] font-black border-[3px] border-[#202A5A] overflow-hidden ${theme.avatarBg} shadow-[2px_2px_0_0_#202A5A]`}
          >
            {imageSrc ? (
              <img
                src={imageSrc}
                alt={member.name}
                loading="lazy"
                onError={() => setImgError(true)}
                className="w-full h-full object-cover object-top"
              />
            ) : (
              <span className="select-none tracking-wider">
                {getInitials(member.name)}
              </span>
            )}
          </div>
        </div>

        {/* ── نام و سمت ── */}
        <h3 className="text-[1.0625rem] sm:text-[1.1875rem] font-black text-[#202A5A] mb-1.5">
          {member.name}
        </h3>

        <div className="mb-3">
          <span
            className={`inline-block text-white px-3.5 py-0.5 rounded-full text-[0.6875rem] sm:text-[0.75rem] font-black ${theme.roleBg} border border-[#202A5A]/20 shadow-[1px_1px_0_0_#202A5A]`}
          >
            {member.role}
          </span>
        </div>

        {/* ── بیوگرافی و توضیحات ── */}
        <p
          className={`text-[0.75rem] sm:text-[0.8125rem] text-[#202A5A]/80 leading-[1.8] pt-2.5 border-t-2 border-dashed ${theme.dashedBorder}`}
        >
          {member.bio}
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   صفحه اصلی عوامل رُکاد
========================================================= */
export default function FactorsPage() {
  const [activeTab, setActiveTab] = useState("all");

  const totalCount =
    FOUNDER_STAFF.length +
    MANAGEMENT_STAFF.length +
    BOYS_STAFF.length +
    GIRLS_STAFF.length;

  return (
    <div className="min-h-screen bg-[#fefdf8] text-[#202A5A] pb-16 sm:pb-24">
      {/* ══════════════════════════════════════════════
          هدر کمیک و استیکری صفحه
      ══════════════════════════════════════════════ */}
      <header className="relative pt-12 sm:pt-16 pb-8 sm:pb-12 text-center px-4 overflow-hidden">
        {/* پترن پس‌زمینه محو */}
        <div
          aria-hidden="true"
          className="absolute inset-0 w-full h-full opacity-30 pointer-events-none [mask-image:linear-gradient(to_bottom,black_20%,transparent)]"
        >
          <img
            src="/assets/Pattern/layout-pattern.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <Container className="relative z-10">
          {/* نشان کوچک بالای تیتر */}
          <div className="inline-block mb-3">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#F8A41D] text-[#202A5A] border-2 border-[#202A5A] rounded-full text-[0.8125rem] font-black rotate-2 shadow-[2px_2px_0_0_#202A5A]">
              ✦ عوامل رُکاد ✦
            </span>
          </div>

          {/* تیتر استیکری کادردار */}
          <div>
            <h1 className="inline-block bg-white border-[3px] border-[#202A5A] px-6 sm:px-10 py-3 rounded-2xl text-[1.625rem] sm:text-[2.25rem] lg:text-[2.75rem] font-black text-[#202A5A] -rotate-1 shadow-[6px_6px_0_0_#59BBAF]">
              معلمانی که یادت می‌مونن!
            </h1>
          </div>

          {/* زیرتیتر */}
          <p className="mt-5 text-[0.875rem] sm:text-[1.0625rem] font-semibold text-[#202A5A]/80 max-w-xl mx-auto leading-relaxed">
            تیم رُکاد با انرژی و انگیزه، مسیر یادگیری رو شیرین می‌کنه.
          </p>

          {/* ── تب‌های دسته‌بندی سریع ── */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8">
            <button
              type="button"
              onClick={() => setActiveTab("all")}
              className={`px-4 sm:px-5 py-2 rounded-full text-[0.8125rem] sm:text-[0.875rem] font-black border-2 border-[#202A5A] transition-all cursor-pointer ${
                activeTab === "all"
                  ? "bg-[#202A5A] text-white shadow-[3px_3px_0_0_#59BBAF] -translate-y-0.5"
                  : "bg-white text-[#202A5A] hover:bg-[#F4F5FB]"
              }`}
            >
              همه کادر ({totalCount})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("founder")}
              className={`px-4 sm:px-5 py-2 rounded-full text-[0.8125rem] sm:text-[0.875rem] font-black border-2 border-[#202A5A] transition-all cursor-pointer ${
                activeTab === "founder"
                  ? "bg-[#F8A41D] text-[#202A5A] shadow-[3px_3px_0_0_#202A5A] -translate-y-0.5"
                  : "bg-white text-[#202A5A] hover:bg-[#FEF6E8]"
              }`}
            >
              بنیان‌گذار (آقای آرون)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("management")}
              className={`px-4 sm:px-5 py-2 rounded-full text-[0.8125rem] sm:text-[0.875rem] font-black border-2 border-[#202A5A] transition-all cursor-pointer ${
                activeTab === "management"
                  ? "bg-[#59BBAF] text-white shadow-[3px_3px_0_0_#202A5A] -translate-y-0.5"
                  : "bg-white text-[#202A5A] hover:bg-[#EEF8F7]"
              }`}
            >
              مدیریت ارشد ({MANAGEMENT_STAFF.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("male")}
              className={`px-4 sm:px-5 py-2 rounded-full text-[0.8125rem] sm:text-[0.875rem] font-black border-2 border-[#202A5A] transition-all cursor-pointer ${
                activeTab === "male"
                  ? "bg-[#202A5A] text-white shadow-[3px_3px_0_0_#F8A41D] -translate-y-0.5"
                  : "bg-white text-[#202A5A] hover:bg-[#F4F5FB]"
              }`}
            >
              مدرسه پسرانه ({BOYS_STAFF.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("female")}
              className={`px-4 sm:px-5 py-2 rounded-full text-[0.8125rem] sm:text-[0.875rem] font-black border-2 border-[#E0195B] transition-all cursor-pointer ${
                activeTab === "female"
                  ? "bg-[#E0195B] text-white shadow-[3px_3px_0_0_#202A5A] -translate-y-0.5"
                  : "bg-white text-[#E0195B] hover:bg-[#FEFAFB]"
              }`}
            >
              مدرسه دخترانه ({GIRLS_STAFF.length})
            </button>
          </div>
        </Container>
      </header>

      {/* ══════════════════════════════════════════════
          محتوای اصلی و سکشن‌ها
      ══════════════════════════════════════════════ */}
      <Container className="mt-4 sm:mt-6 space-y-12 sm:space-y-16">
        {/* ════ ۱. سکشن اختصاصی بنیان‌گذار (آقای آرون تنها) ════ */}
        {(activeTab === "all" || activeTab === "founder") && (
          <section className="scroll-mt-24">
            {/* هدر سکشن بنیان‌گذار */}
            <div className="flex items-center gap-3 mb-6 pb-3 border-b-2 border-[#202A5A]/15">
              <span className="w-3.5 h-3.5 rounded-full bg-[#F8A41D] border-2 border-[#202A5A] inline-block shadow-[1px_1px_0_0_#202A5A]" />
              <h2 className="text-[1.25rem] sm:text-[1.5rem] font-black text-[#202A5A]">
                بنیان‌گذار و ایده‌پرداز رُکاد
              </h2>
              <span className="mr-auto inline-block bg-white px-3 py-1 rounded-full text-[0.75rem] sm:text-[0.8125rem] font-black border-2 border-[#202A5A] text-[#202A5A] shadow-[2px_2px_0_0_#F8A41D]">
                امضای رُکاد
              </span>
            </div>

            {/* کارت اختصاصی حامد آرون */}
            <div className="flex justify-center pt-2 px-1">
              {FOUNDER_STAFF.map((staff, idx) => (
                <StickerCard
                  key={staff.name}
                  member={staff}
                  school="founder"
                  index={idx}
                  isFeatured={true}
                />
              ))}
            </div>
          </section>
        )}

        {/* ════ ۲. سکشن مدیریت و راهبری ارشد (عزیزپور و کمالی) ════ */}
        {(activeTab === "all" || activeTab === "management") && (
          <section className="scroll-mt-24">
            {/* هدر سکشن مدیریت ارشد */}
            <div className="flex items-center gap-3 mb-6 pb-3 border-b-2 border-[#202A5A]/15">
              <span className="w-3.5 h-3.5 rounded-full bg-[#59BBAF] border-2 border-[#202A5A] inline-block shadow-[1px_1px_0_0_#202A5A]" />
              <h2 className="text-[1.25rem] sm:text-[1.5rem] font-black text-[#202A5A]">
                مدیریت و راهبری اجرایی
              </h2>
              <span className="mr-auto inline-block bg-white px-3 py-1 rounded-full text-[0.75rem] sm:text-[0.8125rem] font-black border-2 border-[#202A5A] text-[#202A5A] shadow-[2px_2px_0_0_#59BBAF]">
                {MANAGEMENT_STAFF.length} نفر
              </span>
            </div>

            {/* گرید استیکرهای عزیزپور و کمالی */}
            <div className="grid grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto gap-8 sm:gap-7 pt-2 px-1">
              {MANAGEMENT_STAFF.map((staff, idx) => (
                <StickerCard
                  key={staff.name}
                  member={staff}
                  school="management"
                  index={idx}
                />
              ))}
            </div>
          </section>
        )}

        {/* ════ ۳. سکشن مدرسه پسرانه رُکاد ════ */}
        {(activeTab === "all" || activeTab === "male") && (
          <section className="scroll-mt-24">
            {/* هدر سکشن پسرانه */}
            <div className="flex items-center gap-3 mb-6 pb-3 border-b-2 border-[#202A5A]/15">
              <span className="w-3.5 h-3.5 rounded-full bg-[#202A5A] border-2 border-[#202A5A] inline-block shadow-[1px_1px_0_0_#F8A41D]" />
              <h2 className="text-[1.25rem] sm:text-[1.5rem] font-black text-[#202A5A]">
                مدرسه پسرانه رُکاد
              </h2>
              <span className="mr-auto inline-block bg-white px-3 py-1 rounded-full text-[0.75rem] sm:text-[0.8125rem] font-black border-2 border-[#202A5A] text-[#202A5A] shadow-[2px_2px_0_0_#202A5A]">
                {BOYS_STAFF.length} نفر
              </span>
            </div>

            {/* گرید استیکرهای پسرانه */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-7 pt-2 px-1">
              {BOYS_STAFF.map((staff, idx) => (
                <StickerCard
                  key={staff.name}
                  member={staff}
                  school="male"
                  index={idx}
                />
              ))}
            </div>
          </section>
        )}

        {/* ════ ۴. سکشن مدرسه دخترانه رُکاد ════ */}
        {(activeTab === "all" || activeTab === "female") && (
          <section className="scroll-mt-24">
            {/* هدر سکشن دخترانه */}
            <div className="flex items-center gap-3 mb-6 pb-3 border-b-2 border-[#E0195B]/20">
              <span className="w-3.5 h-3.5 rounded-full bg-[#E0195B] border-2 border-[#202A5A] inline-block shadow-[1px_1px_0_0_#E0195B]" />
              <h2 className="text-[1.25rem] sm:text-[1.5rem] font-black text-[#202A5A]">
                مدرسه دخترانه رُکاد
              </h2>
              <span className="mr-auto inline-block bg-white px-3 py-1 rounded-full text-[0.75rem] sm:text-[0.8125rem] font-black border-2 border-[#E0195B] text-[#E0195B] shadow-[2px_2px_0_0_#E0195B]">
                {GIRLS_STAFF.length} نفر
              </span>
            </div>

            {/* گرید استیکرهای دخترانه */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-7 pt-2 px-1">
              {GIRLS_STAFF.map((staff, idx) => (
                <StickerCard
                  key={staff.name}
                  member={staff}
                  school="female"
                  index={idx}
                />
              ))}
            </div>
          </section>
        )}
      </Container>
    </div>
  );
}
