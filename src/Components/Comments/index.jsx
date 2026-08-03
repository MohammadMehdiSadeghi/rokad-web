import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import { ChevronLeftIcon, ChevronRightIcon } from "../Icons";
import commentsPattern from "../../assets/Shared/Patterns/Ecosystem-Pattern.png";

import "swiper/css";

const comments = [
  {
    id: 1,
    theme: "navy",
    text: "این یک متن تستی برای کامنت اول است. ساختار کارت‌ها در اینجا قرار می‌گیرد تا بررسی کنیم.",
    name: "آرتین امیری",
    role: "جپ",
  },
  {
    id: 2,
    theme: "pink",
    text: "این یک متن تستی برای کامنت دوم است. ساختار کارت‌ها در اینجا قرار می‌گیرد تا بررسی کنیم.",
    name: "سارا رضایی",
    role: "جپ",
  },
  {
    id: 3,
    theme: "teal",
    text: "این یک متن تستی برای کامنت سوم است. ساختار کارت‌ها در اینجا قرار می‌گیرد تا بررسی کنیم.",
    name: "محمد کریمی",
    role: "جپ",
  },
  {
    id: 4,
    theme: "teal",
    text: "این یک متن تستی برای کامنت سوم است. ساختار کارت‌ها در اینجا قرار می‌گیرد تا بررسی کنیم.",
    name: "محمد کریمی",
    role: "جپ",
  },
  {
    id: 5,
    theme: "teal",
    text: "این یک متن تستی برای کامنت سوم است. ساختار کارت‌ها در اینجا قرار می‌گیرد تا بررسی کنیم.",
    name: "محمد کریمی",
    role: "جپ",
  },
  {
    id: 6,
    theme: "teal",
    text: "این یک متن تستی برای کامنت سوم است. ساختار کارت‌ها در اینجا قرار می‌گیرد تا بررسی کنیم.",
    name: "محمد کریمی",
    role: "جپ",
  },
];

// تابع استخراج حروف اول نام و فامیل
const getInitials = (name) => {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 0) return "";
  const first = parts[0].charAt(0);
  const second = parts.length > 1 ? parts[1].charAt(0) : "";
  return second ? `${first}.${second}` : first;
};

const THEME_MAP = {
  navy: {
    borderColor: "border-[#21295A]",
    solidColor: "bg-[#21295A]",
    nameColor: "text-[#21295A]",
    quoteColor: "text-[#21295A]",
  },
  pink: {
    borderColor: "border-[#E0195B]",
    solidColor: "bg-[#E0195B]",
    nameColor: "text-[#E0195B]",
    quoteColor: "text-[#E0195B]",
  },
  teal: {
    borderColor: "border-[#58BDAF]",
    solidColor: "bg-[#58BDAF]",
    nameColor: "text-[#58BDAF]",
    quoteColor: "text-[#58BDAF]",
  },
};

export default function Comments() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 overflow-hidden bg-[#E4F4F2]">
      {/*
        نکته مهم: افکت اسکیل/بلر/همپوشانی روی یک المان داخلی (card-inner-wrap)
        پیاده شده، نه روی خود .swiper-slide و نه با spaceBetween منفی.
        دلیل: spaceBetween منفی در حالت loop + dir="rtl" محاسبه‌ی
        centeredSlides خود Swiper رو به‌هم می‌زند و کل ردیف به یک طرف
        کشیده می‌شود. با این روش، محاسبات داخلی Swiper همیشه سالم
        می‌ماند و کارت وسط همیشه دقیقاً وسط قرار می‌گیرد؛ همپوشانی فقط
        یک افکت بصری روی مارجین داخلیه.
      */}
      <style>{`
        .comments-swiper .swiper-slide {
          overflow: visible;
        }
        .comments-swiper .card-inner-wrap {
          transition: transform 0.45s ease, filter 0.45s ease, opacity 0.45s ease, margin 0.45s ease;
          transform: scale(0.6);
          filter: blur(3px);
          opacity: 0.5;
          margin-inline: -22%;
          position: relative;
          z-index: 1;
        }
        .comments-swiper .swiper-slide-active .card-inner-wrap {
          transform: scale(1);
          filter: blur(0);
          opacity: 1;
          margin-inline: 0;
          z-index: 20;
        }
        @media (max-width: 639px) {
          .comments-swiper .card-inner-wrap {
            filter: blur(2px);
            transform: scale(0.65);
            margin-inline: -18%;
          }
        }
      `}</style>

      {/* پترن پس‌زمینه، هم‌سبک با سکشن FAQ */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img
          src={commentsPattern}
          alt=""
          className="absolute inset-0 w-full h-full object-cover scale-125 select-none opacity-30"
        />
      </div>

      {/* عرض ثابت 80% در همه‌ی سایزها */}
      <div className="relative z-10 w-[80%] mx-auto">
        {/* ── هدر سکشن ── */}
        <h2 className="font-black text-[22px] xs:text-[26px] sm:text-[34px] lg:text-[42px] leading-[1.6] sm:leading-[1.5] text-[#292827] mb-8 sm:mb-10 lg:mb-12 flex flex-wrap justify-center items-center gap-x-2 sm:gap-x-3 gap-y-1 px-2">
          <span className="inline-block -rotate-3">از</span>
          <span className="inline-block rotate-3">زبون</span>
          <span className="inline-block -rotate-3">کسایی</span>
          <span className="inline-block rotate-3">که</span>
          <span className="inline-block -rotate-3 text-teal">تجربه</span>
          <span className="inline-block rotate-3 text-teal">کردن</span>
        </h2>

        {/* ── پکیج کاروسل و دکمه‌های ناوبری ── */}
        <div className="flex items-center justify-between gap-2 sm:gap-4 md:gap-6">
          {/* دکمه سمت راست */}
          <div className="relative flex-shrink-0 z-30">
            <div className="absolute top-[1.5px] left-[2px] sm:top-[2px] sm:left-[3px] w-full h-full bg-[#292827] rounded-[0_6px_0_6px] sm:rounded-[0_8.65px_0_8.65px]"></div>
            <button
              type="button"
              ref={prevRef}
              aria-label="کامت قبلی"
              className="relative w-9 h-9 sm:w-12 sm:h-12 flex items-center justify-center bg-white border-[1.5px] sm:border-[2px] border-[#292827] text-[#292827] rounded-[0_6px_0_6px] sm:rounded-[0_8.65px_0_8.65px] transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            >
              <ChevronRightIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          {/*
            کاروسل Swiper
            overflow-hidden روی این محفظه نگه داشته شده تا هیچ‌چیزی
            زیر دکمه‌های کناری دیده نشه. spaceBetween حالا مثبت و
            عادیه تا centeredSlides درست کار کنه.
          */}
          <div className="flex-1 w-full relative z-10 py-10 
          sm:py-12 lg:py-14 px-1 sm:px-2 overflow-hidden">
            <Swiper
              modules={[Navigation, A11y]}
              centeredSlides={true}
              loop={true}
              dir="rtl"
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              breakpoints={{
                0: { slidesPerView: 1.4, spaceBetween: 12 },
                480: { slidesPerView: 1.5, spaceBetween: 16 },
                640: { slidesPerView: 1.6, spaceBetween: 20 },
                768: { slidesPerView: 1.7, spaceBetween: 24 },
                1024: { slidesPerView: 1.8, spaceBetween: 28 },
              }}
              className="comments-swiper !py-6"
            >
              {comments.map((comment, i) => {
                const theme = THEME_MAP[comment.theme];
                const isActive = i === activeIndex;
                const rotation = isActive ? 0 : i % 2 === 0 ? -1 : 1;

                return (
                  <SwiperSlide key={comment.id} className="!h-auto">
                    {/* پدینگ اضافه دور کارت تا لایه‌ی سایه و چرخش، به لبه‌ی اسلاید نچسبه و کات نشه */}
                    <div className="p-2 sm:p-3 lg:p-4">
                      {/* این wrapper مسئول افکت اسکیل/بلر/همپوشانیه؛ کاملاً بصری و مستقل از محاسبات Swiper */}
                      <div className="card-inner-wrap">
                        <div
                          className="relative transition-transform duration-300"
                          style={{ transform: `rotate(${rotation}deg)` }}
                        >
                          {/* لایه پشتی کارت */}
                          <div
                            aria-hidden="true"
                            className={`absolute top-[2px] left-[3px] sm:top-[3px] sm:left-[5px] w-full h-full ${theme.solidColor} rounded-[0_14px_0_14px] sm:rounded-[0_18.06px_0_18.06px]`}
                          ></div>

                          {/* کارت اصلی */}
                          <div
                            className={`relative z-10 bg-white border-[1.5px] sm:border-[2.01px] ${theme.borderColor} rounded-[0_14px_0_14px] sm:rounded-[0_18.06px_0_18.06px] p-4 sm:p-5 lg:p-6 min-h-[200px] sm:min-h-[230px] lg:min-h-[250px] flex flex-col`}
                          >
                            {/* علامت کوتیشن */}
                            <span
                              className={`text-3xl sm:text-4xl font-black mb-1 sm:mb-2 ${theme.quoteColor}`}
                            >
                              ”
                            </span>

                            {/* متن داخل کارت */}
                            <p className="text-[13px] sm:text-[14px] lg:text-[15px] leading-6 sm:leading-7 text-[#292827] flex-grow">
                              {comment.text}
                            </p>

                            {/* اطلاعات نویسنده و آواتار */}
                            <div
                              className={`mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-dashed ${theme.borderColor} flex items-center gap-2 sm:gap-3`}
                            >
                              <div className="relative flex-shrink-0">
                                <div className="absolute top-[1px] left-[2px] w-full h-full bg-[#292827] rounded-[5.83px_0_5.83px_0]"></div>
                                <div
                                  className={`relative w-9 h-9 sm:w-10 sm:h-10 rounded-[5.83px_0_5.83px_0] border-[0.05px] border-[#292827] ${theme.solidColor} flex items-center justify-center`}
                                >
                                  <span className="font-black text-[12px] sm:text-[14px] text-white">
                                    {getInitials(comment.name)}
                                  </span>
                                </div>
                              </div>

                              <div className="flex flex-col">
                                <h4
                                  className={`font-black text-[14px] sm:text-[16px] ${theme.nameColor}`}
                                >
                                  {comment.name}
                                </h4>
                                <p className="text-[11px] sm:text-[12px] text-gray-500 mt-0.5 sm:mt-1">
                                  {comment.role}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>

          {/* دکمه سمت چپ */}
          <div className="relative flex-shrink-0 z-30">
            <div className="absolute top-[1.5px] left-[2px] sm:top-[2px] sm:left-[3px] w-full h-full bg-[#292827] rounded-[0_6px_0_6px] sm:rounded-[0_8.65px_0_8.65px]"></div>
            <button
              type="button"
              ref={nextRef}
              aria-label="کامت بعدی"
              className="relative w-9 h-9 sm:w-12 sm:h-12 flex items-center justify-center bg-white border-[1.5px] sm:border-[2px] border-[#292827] text-[#292827] rounded-[0_6px_0_6px] sm:rounded-[0_8.65px_0_8.65px] transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            >
              <ChevronLeftIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}