import { useState, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { A11y, Autoplay } from "swiper/modules";

import Container from "../../../../layout/Container";

import { ChevronLeftIcon, ChevronRightIcon } from "../../../../common/Icons";

import "swiper/css";

const commentsPattern = "/public/assets/Pattern/layout-pattern.png";

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
    <section className="relative w-full pt-[70px] pb-[70px] px-4 sm:px-6 bg-[#E4F4F2] overflow-x-clip">
      <style>{`
        .comments-swiper .swiper-slide {
          overflow: visible;
          height: auto;
          z-index: 1;
        }
        .comments-swiper .card-inner-wrap {
          transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.5s ease;
          opacity: 0; /* تغییر اوپاسیتی به 0 تا کارت‌های اضافی دیده نشوند */
          transform: scale(0.62);
          pointer-events: none;
        }
        .comments-swiper .swiper-slide-active {
          z-index: 30 !important;
        }
        .comments-swiper .swiper-slide-active .card-inner-wrap {
          transform: scale(1.3) translateX(0) translateY(-6px) rotate(0deg);
          opacity: 1;
          z-index: 30;
          pointer-events: auto;
        }
        .comments-swiper .swiper-slide-prev {
          z-index: 10 !important;
        }
        .comments-swiper .swiper-slide-prev .card-inner-wrap {
          transform: scale(0.92) translateX(calc(-103% + 190px)) translateY(8px) rotate(5deg);
          opacity: 0.72;
          z-index: 10;
          pointer-events: auto;
        }
        .comments-swiper .swiper-slide-next {
          z-index: 10 !important;
        }
        .comments-swiper .swiper-slide-next .card-inner-wrap {
          transform: scale(0.92) translateX(calc(103% - 190px)) translateY(8px) rotate(-6deg);
          opacity: 0.72;
          z-index: 10;
          pointer-events: auto;
        }
      `}</style>

      {/* ── لایه پترن اصلاح شده با background-image ── */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `url(${commentsPattern})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 100,
        }}
      ></div>

      <Container className="relative z-10">
        {/* ── هدر سکشن ── */}
        <h2 className="font-black text-[22px] xs:text-[26px] sm:text-[34px] lg:text-[53px] leading-[1.6] sm:leading-[1.5] text-[#292827] mb-0 flex flex-wrap justify-center items-center gap-x-2 sm:gap-x-3 gap-y-1 px-2">
          <span className="inline-block -rotate-3">از</span>
          <span className="inline-block rotate-3">زبون</span>
          <span className="inline-block -rotate-3">کسایی</span>
          <span className="inline-block rotate-3">که</span>
          <span className="inline-block -rotate-3 text-teal">تجربه</span>
          <span className="inline-block rotate-3 text-teal">کردن</span>
        </h2>

        {/* ── پکیج کاروسل و دکمه‌های ناوبری ── */}
        <div className="relative w-full pt-[60px] pb-12 sm:pb-16 overflow-visible">
          {/* دکمه سمت راست (مخفی در موبایل و تبلت) */}
          <div className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 z-30 flex-shrink-0 hidden md:block">
            <div className="absolute top-[1.5px] left-[2px] sm:top-[2px] sm:left-[3px] w-full h-full bg-[#292827] rounded-[0_6px_0_6px] sm:rounded-[0_13.65px_0_13.65px] [corner-shape:squircle]"></div>
            <button
              type="button"
              aria-label="کامت بعدی"
              onClick={() => swiperRef.current?.slideNext()}
              className="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white border-[1.5px] sm:border-[2px] border-[#292827] text-[#292827] rounded-[0_6px_0_6px] sm:rounded-[0_13.65px_0_13.65px] [corner-shape:squircle] transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            >
              <ChevronLeftIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* اضافه شدن overflow-x-clip برای بریدن کارت‌های اضافی در لبه‌ها */}
          <div className="w-full px-14 sm:px-20 md:px-24 lg:px-28  [overflow-x:clip] [overflow-y:visible]">
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
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              className="comments-swiper !pt-10 !pb-12"
            >
              {comments.map((comment) => {
                const theme = THEME_MAP[comment.theme];

                return (
                  <SwiperSlide
                    key={comment.id}
                    className="!h-auto overflow-visible"
                  >
                    <div className="p-2 sm:p-3 lg:p-4 overflow-visible">
                      <div className="card-inner-wrap">
                        <div className="relative max-w-[300px] sm:max-w-[350px] lg:max-w-[450px] mx-auto">
                          {/* لایه پشتی کارت */}
                          <div
                            aria-hidden="true"
                            className={`absolute top-[2px] left-[2px] sm:top-[3px] sm:left-[4px] w-full h-full ${theme.solidColor} rounded-[0_22px_0_22px] sm:rounded-[40px_0_40px_0] [corner-shape:squircle]`}
                          ></div>

                          {/* کارت اصلی */}
                          <div
                            className={`relative z-10 bg-white border-[1.5px] sm:border-[2.01px] ${theme.borderColor} rounded-[0_22px_0_22px] sm:rounded-[40px_0_40px_0] [corner-shape:squircle] p-4 sm:p-5 lg:p-6 min-h-[200px] sm:min-h-[230px] lg:min-h-[250px] flex flex-col`}
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
                                {/* لایه پشتی آواتار */}
                                <div className="absolute top-[1px] left-[1px] w-full h-full bg-[#292827] rounded-[9.83px_0_9.83px_0] [corner-shape:squircle]"></div>

                                {/* لایه اصلی آواتار */}
                                <div
                                  className={`relative w-9 h-9 sm:w-10 sm:h-10 rounded-[9.83px_0_9.83px_0] [corner-shape:squircle] border-[0.05px] border-[#292827] ${theme.solidColor} flex items-center justify-center`}
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

          {/* دکمه سمت چپ (مخفی در موبایل و تبلت) */}
          <div className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 z-30 flex-shrink-0 hidden md:block">
            <div className="absolute top-[1.5px] left-[2px] sm:top-[2px] sm:left-[3px] w-full h-full bg-[#292827] rounded-[0_6px_0_6px] sm:rounded-[0_13.65px_0_13.65px] [corner-shape:squircle]"></div>
            <button
              type="button"
              aria-label="کامت قبلی"
              onClick={() => swiperRef.current?.slidePrev()}
              className="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white border-[1.5px] sm:border-[2px] border-[#292827] text-[#292827] rounded-[0_6px_0_6px] sm:rounded-[0_13.65px_0_13.65px] [corner-shape:squircle] transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            >
              <ChevronRightIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}