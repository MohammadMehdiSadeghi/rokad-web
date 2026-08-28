"use client";
import { useState, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { A11y, Autoplay } from "swiper/modules";

import Container from "../../../../layout/Container";

import { ChevronLeftIcon, ChevronRightIcon } from "../../../../common/Icons";

import "swiper/css";

const commentsPattern = "/assets/Pattern/layout-pattern.png";

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
    theme: "navy",
    text: "این یک متن تستی برای کامنت اول است. ساختار کارت‌ها در اینجا قرار می‌گیرد تا بررسی کنیم.",
    name: "آرتین امیری",
    role: "جپ",
  },
  {
    id: 5,
    theme: "pink",
    text: "این یک متن تستی برای کامنت دوم است. ساختار کارت‌ها در اینجا قرار می‌گیرد تا بررسی کنیم.",
    name: "سارا رضایی",
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
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative w-full pt-[5rem] sm:pt-[6rem] lg:pt-[8rem] pb-[5rem] sm:pb-[6rem] lg:pb-[8rem] px-4 sm:px-6 lg:px-8 bg-[#E4F4F2] overflow-hidden">
      <style>{`
        .comments-swiper .swiper-slide {
          overflow: visible;
          height: auto;
          z-index: 1;
        }
        .comments-swiper .card-inner-wrap {
          transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.5s ease;
          opacity: 0;
          transform: scale(0.62);
          pointer-events: none;
        }
        .comments-swiper .swiper-slide-active {
          z-index: 30 !important;
        }
        .comments-swiper .swiper-slide-active .card-inner-wrap {
          transform: scale(1.4, 1.3) translateY(-6px) rotate(0deg);
          opacity: 1;
          z-index: 30;
          pointer-events: auto;
        }
        .comments-swiper .swiper-slide-prev {
          z-index: 10 !important;
        }
        .comments-swiper .swiper-slide-prev .card-inner-wrap {
          transform: scale(0.92) translateY(8px) rotate(5deg);
          opacity: 0.72;
          filter: blur(3px);
          z-index: 10;
          pointer-events: auto;
        }
        .comments-swiper .swiper-slide-next {
          z-index: 10 !important;
        }
        .comments-swiper .swiper-slide-next .card-inner-wrap {
          transform: scale(0.92) translateY(8px) rotate(-6deg);
          opacity: 0.72;
          filter: blur(3px);
          z-index: 10;
          pointer-events: auto;
        }
        /* Tablet (md): smaller scale so cards do not clip */
        @media (min-width: 768px) and (max-width: 1023px) {
          .comments-swiper .swiper-slide-active .card-inner-wrap {
            transform: scale(1.22, 1.15) translateY(-4px) rotate(0deg);
          }
          .comments-swiper .swiper-slide-prev .card-inner-wrap {
            transform: scale(0.85) translateY(6px) rotate(5deg);
            opacity: 0.65;
            filter: blur(2px);
          }
          .comments-swiper .swiper-slide-next .card-inner-wrap {
            transform: scale(0.85) translateY(6px) rotate(-6deg);
            opacity: 0.65;
            filter: blur(2px);
          }
        }
        /* Mobile: کارت‌های ساده با چرخش متناوب ملایم (زبان استیکری سایت) */
        @media (max-width: 639px) {
          .comments-swiper .card-inner-wrap {
            opacity: 1 !important;
            transform: rotate(1.2deg) !important;
            pointer-events: auto !important;
          }
          .comments-swiper .swiper-slide:nth-child(even) .card-inner-wrap {
            transform: rotate(-1.2deg) !important;
          }
          .comments-swiper .swiper-slide {
            z-index: 1 !important;
          }
          .comments-swiper .swiper-slide-active {
            z-index: 1 !important;
          }
        }
      `}</style>

      {/* ── لایه پترن — همون ماسک گرادیانی هیرو/دوئال‌اسکول؛ روی
          پس‌زمینه‌ی مینتی (#E4F4F2) می‌شینه و لبه‌ی بالا/پایین محو میشه ── */}
      <div
        className="absolute inset-0 w-full h-full z-0 pointer-events-none
                [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]
                [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]"
      >
        <img
          src={commentsPattern}
          alt=""
          aria-hidden="true"
          draggable="false"
          className="w-full h-full object-cover opacity-70 select-none"
        />
      </div>

      <Container className="relative z-10">
        {/* ── هدر سکشن ── */}
        <h2 className="font-black text-[1.5rem] sm:text-[2.25rem] lg:text-[3.3125rem] leading-[1.3] sm:leading-[1.4] text-[#292827] mb-[1.5rem] sm:mb-[2rem] flex flex-wrap justify-center items-center gap-x-2 sm:gap-x-3 gap-y-1 px-2">
          <span className="inline-block -rotate-3">از</span>
          <span className="inline-block rotate-3">زبون</span>
          <span className="inline-block -rotate-3">کسایی</span>
          <span className="inline-block rotate-3">که</span>
          <span className="inline-block -rotate-3 text-teal">تجربه</span>
          <span className="inline-block rotate-3 text-teal">کردن</span>
        </h2>

        {/* ── کاروسل ── */}
        <div className="relative w-full pt-[1rem] sm:pt-[3rem] md:pt-[3.25rem] lg:pt-[3.75rem] pb-12 sm:pb-16 overflow-visible">
          {/* دکمه راست */}
          <div className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 z-30 flex-shrink-0 hidden lg:block">
            <div className="absolute top-[0.09375rem] left-[0.125rem] sm:top-[0.125rem] sm:left-[0.1875rem] w-full h-full bg-[#292827] rounded-[0_0.375rem_0_0.375rem] sm:rounded-[0_0.853125rem_0_0.853125rem] [corner-shape:squircle]"></div>
            <button
              type="button"
              aria-label="کامت بعدی"
              onClick={() => swiperRef.current?.slideNext()}
              className="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white border-[0.09375rem] sm:border-[0.125rem] border-[#292827] text-[#292827] rounded-[0_0.375rem_0_0.375rem] sm:rounded-[0_0.853125rem_0_0.853125rem] [corner-shape:squircle] transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
          </div>

          {/* کانتینر کاروسل — پدینگ ریسپانسیو */}
          <div className="w-full  px-2 sm:px-4 md:px-8 lg:px-12 xl:px-16 [overflow-x:clip] [overflow-y:visible]">
            <Swiper
              modules={[A11y, Autoplay]}
              centeredSlides={true}
              loop={true}
              dir="rtl"
              slidesPerView={1}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              spaceBetween={16}
              speed={500}
              breakpoints={{
                320: { slidesPerView: 1.05, spaceBetween: 8 },
                640: { slidesPerView: 1.5, spaceBetween: 12 },
                768: { slidesPerView: 2, spaceBetween: -10 },
                1024: { slidesPerView: 2.5, spaceBetween: 20 },
                1280: { slidesPerView: 3, spaceBetween: 24 },
              }}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              className="comments-swiper !pt-4 sm:!pt-10 lg:!pt-12 !pb-4 sm:!pb-6 lg:!pb-8"
            >
              {comments.map((comment) => {
                const theme = THEME_MAP[comment.theme];

                return (
                  <SwiperSlide
                    key={comment.id}
                    className="!h-auto overflow-visible"
                  >
                    <div className="p-1.5 sm:p-2 lg:p-3 overflow-visible">
                      <div className="card-inner-wrap">
                        {" "}
                        <div className="relative max-w-[19.5rem] sm:max-w-[20rem] md:max-w-[22rem] lg:max-w-[25rem] xl:max-w-[28.125rem] mx-auto">
                          {/* لایه پشتی کارت */}
                          <div
                            aria-hidden="true"
                            className={`absolute top-[0.125rem] left-[0.125rem] sm:top-[0.1875rem] sm:left-[0.25rem] w-full h-full ${theme.solidColor} rounded-[0_1.375rem_0_1.375rem] sm:rounded-[2.5rem_0_2.5rem_0] [corner-shape:squircle]`}
                          ></div>

                          {/* کارت اصلی */}
<<<<<<< HEAD
                                                    <div
                                                      className={`relative z-10 bg-white border-[0.09375rem] sm:border-[0.125rem] ${theme.borderColor} rounded-[0_1.375rem_0_1.375rem] sm:rounded-[2.5rem_0_2.5rem_0] [corner-shape:squircle] p-5 sm:p-6 lg:p-6 min-h-[8rem] sm:min-h-[9rem] md:min-h-[8rem] lg:min-h-[10rem] flex flex-col`}>
=======
                          <div
                            className={`relative z-10 bg-white border-[0.09375rem] sm:border-[0.125rem] ${theme.borderColor} rounded-[0_1.375rem_0_1.375rem] sm:rounded-[2.5rem_0_2.5rem_0] [corner-shape:squircle] p-5 sm:p-6 lg:p-6 min-h-[8rem] sm:min-h-[9rem] md:min-h-[8rem] lg:min-h-[10rem] flex flex-col`}>
                          >
>>>>>>> parent of 0e4630e (revert Header to original state (pre-px-width fix))
                            <span
                              className={`text-3xl sm:text-4xl font-black mb-1 sm:mb-2 ${theme.quoteColor}`}
                            >
                              "
                            </span>

                            <p className="text-[0.9375rem] sm:text-[1rem] lg:text-[0.9375rem] leading-7 sm:leading-7 text-[#292827] flex-grow">
                              {comment.text}
                            </p>

                            <div
                              className={`mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-dashed ${theme.borderColor} flex items-center gap-2 sm:gap-3`}
                            >
                              <div className="relative flex-shrink-0">
                                {/* لایه پشتی آواتار */}
                                <div className="absolute top-[0.0625rem] left-[0.0625rem] w-full h-full bg-[#292827] rounded-[0.614375rem_0_0.614375rem_0] [corner-shape:squircle]"></div>

                                {/* لایه اصلی آواتار */}
                                <div
                                  className={`relative w-9 h-9 sm:w-10 sm:h-10 rounded-[0.614375rem_0_0.614375rem_0] [corner-shape:squircle] border-[0.003125rem] border-[#292827] ${theme.solidColor} flex items-center justify-center`}
                                >
                                  <span className="font-black text-[0.75rem] sm:text-[0.875rem] text-white">
                                    {getInitials(comment.name)}
                                  </span>
                                </div>
                              </div>

                              <div className="flex flex-col">
                                <h4
                                  className={`font-black text-[0.9375rem] sm:text-[1rem] ${theme.nameColor}`}
                                >
                                  {comment.name}
                                </h4>
                                <p className="text-[0.75rem] sm:text-[0.75rem] text-gray-500 mt-0.5 sm:mt-1">
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

          {/* دکمه چپ */}
          <div className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 z-30 flex-shrink-0 hidden lg:block">
            <div className="absolute top-[0.09375rem] left-[0.125rem] sm:top-[0.125rem] sm:left-[0.1875rem] w-full h-full bg-[#292827] rounded-[0_0.375rem_0_0.375rem] sm:rounded-[0_0.853125rem_0_0.853125rem] [corner-shape:squircle]"></div>
            <button
              type="button"
              aria-label="کامت قبلی"
              onClick={() => swiperRef.current?.slidePrev()}
              className="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white border-[0.09375rem] sm:border-[0.125rem] border-[#292827] text-[#292827] rounded-[0_0.375rem_0_0.375rem] sm:rounded-[0_0.853125rem_0_0.853125rem] [corner-shape:squircle] transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* ── نوار پیشرفت (فقط در موبایل و تبلت) ── */}
        <div className="mt-2 flex justify-center md:hidden">
          <div className="w-[9.375rem] h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#292827] transition-all duration-500 ease-out rounded-full"
              style={{
                width: `${((activeIndex + 1) / comments.length) * 100}%`,
              }}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
