"use client";
import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import Container from "../../../../layout/Container";
import { ChevronLeftIcon, ChevronRightIcon, ArrowIcon } from "../../../../common/Icons";
import useRokadData from "../../../../lib/useRokadData";
import { fetchEvents } from "../../../../lib/api";
import fallbackEvents from "../../../../lib/fallback/events";

import "swiper/css";

const patternBg = "/assets/home/Events/Event-Pattern.png";


const THEME_MAP = {
  boys: {
    cardBg: "bg-[#F4F5FB]",
    accentText: "text-[#21295A]",
    metaColor: "text-[#21295A]/50",
    btnBg: "bg-[#21295A] hover:bg-[#15244a]",
    solidColor: "bg-[#21295A]",
    borderColor: "border-[#21295A]",
    indexColor: "text-[#D7DBF1]",
    titleColor: "text-[#202A5A]",
    bodyColor: "text-[#202A5A]/70",
    badgeBg: "bg-[#F4F5FB]",
    badgeBorder: "border-[#202A5A]",
    badgeText: "text-[#202A5A]",
    badgeOffset: "bg-[#202A5A]",
  },
  girls: {
    cardBg: "bg-[#FEFAFB]",
    accentText: "text-[#E0195B]",
    metaColor: "text-[#E0195B]/50",
    btnBg: "bg-[#E0195B] hover:bg-[#c0154d]",
    solidColor: "bg-[#E0195B]",
    borderColor: "border-[#E0195B]",
    indexColor: "text-[#FAD9E4]",
    titleColor: "text-[#E0195B]",
    bodyColor: "text-[#E0195B]/70",
    badgeBg: "bg-[#FEFAFB]",
    badgeBorder: "border-[#E0195B]",
    badgeText: "text-[#E0195B]",
    badgeOffset: "bg-[#E0195B]",
  },
};

export default function EventsCarousel() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // دیتای داینامیک از بک‌اند؛ اگه API در دسترس نبود، fallback نمایش داده می‌شه
  const events = useRokadData(fetchEvents, fallbackEvents);

  // ── هم‌ارتفاع‌سازی کارت‌ها ──
  const cardRefs = useRef([]);
  const [cardHeight, setCardHeight] = useState(0);

  useEffect(() => {
    const measure = () => {
      const heights = cardRefs.current.map((el) => el?.offsetHeight || 0);
      const max = Math.max(...heights, 0);
      if (max > 0) setCardHeight(max);
    };
    const t = setTimeout(measure, 150);
    const onLoad = () => setTimeout(measure, 0);
    window.addEventListener("load", onLoad);
    window.addEventListener("resize", measure);
    return () => {
      clearTimeout(t);
      window.removeEventListener("load", onLoad);
      window.removeEventListener("resize", measure);
    };
  }, [events]);

  return (
      <section className="pt-[2rem] sm:pt-[3rem] lg:pt-[2rem] xl:pt-[3rem] pb-[2rem] sm:pb-[3rem] lg:pb-[2rem] xl:pb-[3rem] px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white">
        {/* 1. لایه پترن پس‌زمینه — همون ماسک گرادیانی هیرو/دوئال‌اسکول:
            بالا و پایین سکشن محو میشه که لبه‌ها بریده به نظر نرسن */}
        <div
          className="absolute inset-0 w-full h-full z-0 pointer-events-none
                  [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]
                  [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]"
        >
          <img
            src={patternBg}
            aria-hidden="true"
            draggable="false"
            className="w-full h-full object-cover opacity-60 rotate-180 select-none"
          />
        </div>

        <Container className="relative z-10">
        
          {/* ── هدر: تایتل و توضیحات ── */}
          <div className="mb-[2rem] sm:mb-[2.5rem] lg:mb-[1.5rem] xl:mb-[3rem]">
            <h2 className="font-black text-[1.5rem] sm:text-[2.25rem] lg:text-[2.5rem] xl:text-[3.3125rem] leading-[1.3] mb-[1.5rem] sm:mb-[2rem] lg:mb-[0.75rem] xl:mb-[2rem]">
              جایی که ایده‌ها<span className="text-magenta"> جون می‌گیرن</span>
            </h2>
            <p className="font-medium text-[#292827] text-[1rem] sm:text-[1.0625rem] lg:text-[1rem] xl:text-[1.125rem] leading-[1.7] max-w-xl mb-[1.5rem] sm:mb-[2rem] lg:mb-[1rem] xl:mb-[2rem]">
              رویدادهایی که دانش‌آموزها توش از ایده تا اجرا رو با دست خودشون طی می‌کنن.
            </p>
          </div>

        {/* ── کاروسل Swiper ── */}
        <div className="relative">
          <Swiper
            modules={[Navigation, A11y]}
            slidesPerView={1}
            spaceBetween={20}
            centeredSlides={true}
            breakpoints={{
              // تبلت: کارت کوچیک‌تر و وسط‌چین
              768: { slidesPerView: 1.15, spaceBetween: 24 },
              1024: { slidesPerView: 1, spaceBetween: 50 },
            }}
            dir="rtl"
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="!overflow-visible"
          >
            {events.map((event, i) => {
              const theme = THEME_MAP[event.theme];
              const rotation = i % 2 === 0 ? -1 : 1;
              const titleWords = event.title.split(" ");

              return (
                <SwiperSlide key={i} className="!h-auto">
                  <div className="relative" style={{ transform: `rotate(${rotation}deg)` }}>
                    
                    {/* لایه زیرین اصلی کارت */}
                    <div 
                      aria-hidden="true" 
                      className={`absolute top-[0.25rem] left-[0.4375rem] w-full h-full ${theme.solidColor} rounded-[0_2.75rem_0_2.75rem] [corner-shape:squircle]`} 
                    />

                    {/* کارت اصلی */}
                    <div
                      ref={(el) => (cardRefs.current[i] = el)}
                      className={`relative bg-white border-[0.140625rem] ${theme.borderColor} rounded-[0_2.75rem_0_2.75rem] [corner-shape:squircle] overflow-hidden flex flex-col-reverse lg:grid lg:grid-cols-[40%_60%] min-h-[16rem] sm:min-h-[16rem] md:min-h-[14rem] lg:min-h-[16.75rem] xl:min-h-[20rem]`}
                      style={{ minHeight: cardHeight || undefined }}
                    >
                      
                      {/* کارت اطلاعات رویداد (سمت راست در دسکتاپ / پایین در موبایل) */}
                      <div className={`relative ${theme.cardBg} p-4 sm:p-6 md:p-5 lg:p-6 xl:p-10 flex flex-col justify-between flex-1 lg:flex-none overflow-hidden`}>
                        
                        {/* بخش بالا: متون و بَج */}
                        <div className="relative z-10 flex flex-col gap-5 sm:gap-8 lg:gap-3 xl:gap-8">
                          {/* ردیف اول: عنوان/تاریخ و عدد */}
                          <div className="flex justify-between items-start w-full">
                            <div className="flex flex-col items-start">
                              <span className={`font-black text-[0.875rem] sm:text-[1rem] ${theme.accentText}`}>
                                {event.category}
                              </span>
                              <span className={`font-medium text-[0.6875rem] sm:text-[0.8125rem] mt-1.5 ${theme.metaColor}`}>
                                {event.meta}
                              </span>
                            </div>
                            <span className={`font-black text-[2.5rem] sm:text-[4.5rem] lg:text-[3.25rem] xl:text-[4.5rem] ${theme.indexColor} leading-none`}>
                              {event.index}
                            </span>
                          </div>

                          {/* بَج */}
                          <div className="relative self-start">
                            <div 
                              className={`absolute top-[0.1875rem] left-[0.1875rem] w-full h-full ${theme.badgeOffset} rounded-[0.875rem] [corner-shape:squircle] pointer-events-none`}
                            ></div>
                            <div className={`relative ${theme.badgeBg} border-[0.0625rem] ${theme.badgeBorder} ${theme.badgeText} rounded-[0.875rem] [corner-shape:squircle] px-4 sm:px-6 py-2 sm:py-3 text-[0.75rem] sm:text-base font-bold`}>
                              ساخت محصول واقعی
                            </div>
                          </div>

                          {/* تایتل و ساب‌تایتل */}
                          <div className="flex flex-col gap-3 sm:gap-4">
                            <h3 className={`font-black text-[1.25rem] sm:text-[1.75rem] md:text-[1.5rem] lg:text-[2.25rem] leading-tight flex flex-wrap justify-start gap-x-2 ${theme.titleColor}`}>
                              {titleWords.map((word, idx) => (
                                <span 
                                  key={idx} 
                                  className={`inline-block ${idx % 2 === 0 ? '-rotate-3' : 'rotate-1'}`}
                                >
                                  {word}
                                </span>
                              ))}
                            </h3>
                            <p className={`font-semibold text-[0.75rem] sm:text-[0.875rem] md:text-[0.8125rem] lg:text-[1rem] leading-6 sm:leading-7 lg:leading-7 line-clamp-4 sm:line-clamp-none lg:line-clamp-2 xl:line-clamp-none ${theme.bodyColor}`}>
                              {event.body}
                            </p>
                          </div>
                        </div>

                        {/* بخش پایین: دکمه (همیشه در پایین کارت) */}
                        <div className="relative z-10 flex justify-center mt-6 lg:mt-2">
                          <a
                            href="#"
                            className={`inline-flex items-center gap-2 ${theme.btnBg} text-white text-[0.8125rem] sm:text-base font-bold px-6 sm:px-8 py-3 sm:py-3.5 rounded-[0.875rem] [corner-shape:squircle] transition-all duration-300 hover:-translate-x-1`}
                          >
                            {event.ctaLabel}
                            <ArrowIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                          </a>
                        </div>
                      </div>

                      {/* تصویر رویداد (سمت چپ در دسکتاپ / بالا در موبایل) */}
                      {/* افزایش ارتفاع عکس در موبایل برای هماهنگی با ارتفاع کل کارت */}
                      <div className="relative w-full h-[10rem] sm:h-[11rem] md:h-[10rem] lg:h-auto overflow-hidden bg-gray-100">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="absolute inset-0 w-full h-full object-cover object-top"
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        {/* ── کنترل‌ها: نوار پیشرفت (وسط) + دکمه‌های ناوبری (راست) ── */}
        <div className="relative mt-4 sm:mt-6 lg:mt-12 xl:mt-[3.75rem]">

          {/* نوار پیشرفت — همیشه وسط */}
          <div className="flex items-center justify-center h-8 sm:h-10 lg:h-12">
            <div className="w-[7.5rem] h-1.5 bg-[#EDECEC] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#333230] transition-all duration-500 ease-out rounded-full"
                style={{ width: `${((activeIndex + 1) / events.length) * 100}%` }}
              />
            </div>
          </div>

          {/* دکمه‌های ناوبری — راست (فقط lg به بالا) */}
          <div className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 items-center gap-3 sm:gap-4">
            {/* دکمه قبلی */}
            <div className="relative">
              <div className="absolute top-[0.125rem] left-[0.1875rem] w-full h-full bg-[#21295A] rounded-[0_0.84375rem_0_0.84375rem] [corner-shape:squircle]"></div>
              <button
                type="button"
                ref={prevRef}
                aria-label="رویداد قبلی"
                className="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#F4F5FB] border-[0.125rem] border-[#21295A] text-[#21295A] rounded-[0_0.84375rem_0_0.84375rem] [corner-shape:squircle] transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
              >
                <ChevronRightIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* دکمه بعدی */}
            <div className="relative">
              <div className="absolute top-[0.125rem] left-[0.1875rem] w-full h-full bg-[#21295A] rounded-[0_0.84375rem_0_0.84375rem] [corner-shape:squircle]"></div>
              <button
                type="button"
                ref={nextRef}
                aria-label="رویداد بعدی"
                className="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#F4F5FB] border-[0.125rem] border-[#21295A] text-[#21295A] rounded-[0_0.84375rem_0_0.84375rem] [corner-shape:squircle] transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
              >
                <ChevronLeftIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>
        </div>

      </Container>
    </section>
  );
}