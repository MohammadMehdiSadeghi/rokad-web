import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// حذف Navigation ماژول چون نیازی به آن نداریم
import { A11y, Autoplay } from "swiper/modules";
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
  // رفرنس برای گرفتن نمونه Swiper
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 overflow-hidden bg-[#E4F4F2]">
      <style>{`
        .comments-swiper .swiper-slide {
          overflow: visible;
          height: auto;
          z-index: 1;
        }
        .comments-swiper .card-inner-wrap {
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s ease;
          opacity: 0;
          transform: scale(0.8);
          pointer-events: none;
        }
        .comments-swiper .swiper-slide-active {
          z-index: 20 !important;
        }
        .comments-swiper .swiper-slide-active .card-inner-wrap {
          transform: scale(1.2) translateX(0) rotate(0deg);
          opacity: 1;
          z-index: 20;
          pointer-events: auto;
        }
        .comments-swiper .swiper-slide-prev,
        .comments-swiper .swiper-slide-next {
          z-index: 10 !important;
        }
        .comments-swiper .swiper-slide-prev .card-inner-wrap {
          transform: scale(0.85) translateX(calc(-100% + 50px)) rotate(3deg);
          opacity: 0.7;
          z-index: 10;
          pointer-events: auto;
        }
        .comments-swiper .swiper-slide-next .card-inner-wrap {
          transform: scale(0.85) translateX(calc(100% - 50px)) rotate(-4deg);
          opacity: 0.7;
          z-index: 10;
          pointer-events: auto;
        }
      `}</style>

      <div className="absolute inset-0 pointer-events-none z-0">
        <img
          src={commentsPattern}
          alt=""
          className="absolute inset-0 w-full h-full object-cover scale-125 select-none opacity-30"
        />
      </div>

      <div className="relative z-10 w-[80%] mx-auto">
        {/* ── هدر سکشن ─ـ */}
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
          
          {/* دکمه سمت راست (اسلاید قبلی در RTL) */}
          <div className="relative flex-shrink-0 z-30">
            <div className="absolute top-[1.5px] left-[2px] sm:top-[2px] sm:left-[3px] w-full h-full bg-[#292827] rounded-[0_6px_0_6px] sm:rounded-[0_8.65px_0_8.65px]"></div>
            <button
              type="button"
              aria-label="کامت قبلی"
              // فراخوانی دستی تابع قبلی
              onClick={() => swiperRef.current?.slidePrev()}
              className="relative w-9 h-9 sm:w-12 sm:h-12 flex items-center justify-center bg-white border-[1.5px] sm:border-[2px] border-[#292827] text-[#292827] rounded-[0_6px_0_6px] sm:rounded-[0_8.65px_0_8.65px] transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            >
              <ChevronRightIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          <div className="flex-1 w-full relative z-10 py-10 sm:py-12 lg:py-14 px-1 sm:px-2 overflow-hidden">
            <Swiper
              modules={[A11y, Autoplay]}
              centeredSlides={true}
              loop={true}
              dir="rtl"
              // گرفتن نمونه Swiper در زمان آماده شدن
              onSwiper={(swiper) => { swiperRef.current = swiper; }}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              slidesPerView={1}
              spaceBetween={0}
              speed={500}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              className="comments-swiper !py-6"
            >
              {comments.map((comment) => {
                const theme = THEME_MAP[comment.theme];

                return (
                  <SwiperSlide key={comment.id} className="!h-auto">
                    <div className="p-2 sm:p-3 lg:p-4">
                      <div className="card-inner-wrap">
                        <div className="relative max-w-[300px] sm:max-w-[350px] lg:max-w-[450px] mx-auto">
                          
                          {/* لایه پشتی کارت */}
                          <div
                            aria-hidden="true"
                            className={`absolute top-[2px] left-[3px] sm:top-[3px] sm:left-[5px] w-full h-full ${theme.solidColor} rounded-[0_14px_0_14px] sm:rounded-[0_18.06px_0_18.06px]`}
                          ></div>

                          {/* کارت اصلی */}
                          <div
                            className={`relative z-10 bg-white border-[1.5px] sm:border-[2.01px] ${theme.borderColor} rounded-[0_14px_0_14px] sm:rounded-[0_18.06px_0_18.06px] p-4 sm:p-5 lg:p-6 min-h-[200px] sm:min-h-[230px] lg:min-h-[250px] flex flex-col`}
                          >
                            <span
                              className={`text-3xl sm:text-4xl font-black mb-1 sm:mb-2 ${theme.quoteColor}`}
                            >
                              ”
                            </span>

                            <p className="text-[13px] sm:text-[14px] lg:text-[15px] leading-6 sm:leading-7 text-[#292827] flex-grow">
                              {comment.text}
                            </p>

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

          {/* دکمه سمت چپ (اسلاید بعدی در RTL) */}
          <div className="relative flex-shrink-0 z-30">
            <div className="absolute top-[1.5px] left-[2px] sm:top-[2px] sm:left-[3px] w-full h-full bg-[#292827] rounded-[0_6px_0_6px] sm:rounded-[0_8.65px_0_8.65px]"></div>
            <button
              type="button"
              aria-label="کامت بعدی"
              // فراخوانی دستی تابع بعدی
              onClick={() => swiperRef.current?.slideNext()}
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