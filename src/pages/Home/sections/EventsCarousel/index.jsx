import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import Container from "../../../../layout/Container";
import { ChevronLeftIcon, ChevronRightIcon, ArrowIcon } from "../../../../common/Icons";

import "swiper/css";

const patternBg = "/assets/Events/Event-Pattern.png";
const eventPic = "/assets/Events/event-pic.png";

const events = [
  {
    index: "۰۱",
    theme: "boys",
    category: "استارتاپ ویکند",
    title: "دوئل استارتاپی پاییزه",
    meta: "مشهد | ۱۴۰۲/۱۲/۰۳",
    body: "اینجا ایده‌های خام رو با طراحی، دلایل و افکار اولویت‌بندی‌شده تا محصولی که به بازار می‌رسونیم تبدیل می‌کنیم.",
    ctaLabel: "داستان رویداد رو ببین",
    image: eventPic,
  },
  {
    index: "۰۲",
    theme: "girls",
    category: "رویداد استارتاپی",
    title: "عنوان رویداد بعدی",
    meta: "مشهد | تاریخ رویداد",
    body: "توضیحات این رویداد رو اینجا جایگزین کن.",
    ctaLabel: "داستان رویداد رو ببین",
    image: eventPic,
  },
  {
    index: "۰۳",
    theme: "boys",
    category: "رویداد استارتاپی",
    title: "عنوان رویداد بعدی",
    meta: "مشهد | تاریخ رویداد",
    body: "توضیحات این رویداد رو اینجا جایگزین کن.",
    ctaLabel: "داستان رویداد رو ببین",
    image: eventPic,
  },
];

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

  return (
      <section className="pt-[3rem] sm:pt-[4rem] lg:pt-[5rem] pb-[3rem] sm:pb-[4rem] lg:pb-[5rem] px-4 sm:px-6 relative overflow-hidden bg-white">
        {/* 1. لایه پترن پس‌زمینه */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <img
            src={patternBg}
            aria-hidden="true"
            className="w-full h-full object-cover opacity-80"
          />
        </div>

        <Container className="relative z-10">
        
          {/* ── هدر: تایتل و دکمه‌های ناوبری ── */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-[2rem] sm:mb-[2.5rem] lg:mb-[3rem]">
            <div>
              <h2 className="font-black text-[1.25rem] sm:text-[1.75rem] lg:text-[2.5rem] xl:text-[3.3125rem] leading-[1.35] mb-3 sm:mb-4">
                جایی که ایده‌ها<span className="text-magenta"> جون می‌گیرن</span>
              </h2>
              <p className="font-medium text-[#292827] text-[0.8125rem] sm:text-[1rem] leading-[1.9] max-w-xl mb-[2rem] sm:mb-[3rem] lg:mb-[4rem]">
                رویدادهایی که دانش‌آموزها توش از ایده تا اجرا رو با دست خودشون طی می‌کنن.
              </p>
            </div>

            {/* دکمه‌های ناوبری (فقط در lg به بالا) */}
            <div className="hidden lg:flex items-center gap-4 lg:gap-6 self-center lg:self-auto">
              {/* دکمه قبلی */}
              <div className="relative">
                <div className="absolute top-[0.125rem] left-[0.1875rem] w-full h-full bg-[#21295A] rounded-[0_0.84375rem_0_0.84375rem] [corner-shape:squircle]"></div>
                <button
                  type="button"
                  ref={prevRef}
                  aria-label="رویداد قبلی"
                  className="relative w-12 h-12 flex items-center justify-center bg-[#F4F5FB] border-[0.125rem] border-[#21295A] text-[#21295A] rounded-[0_0.84375rem_0_0.84375rem] [corner-shape:squircle] transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                >
                  <ChevronRightIcon className="w-5 h-5" />
                </button>
              </div>
            
              {/* دکمه بعدی */}
              <div className="relative">
                <div className="absolute top-[0.125rem] left-[0.1875rem] w-full h-full bg-[#21295A] rounded-[0_0.84375rem_0_0.84375rem] [corner-shape:squircle]"></div>
                <button
                  type="button"
                  ref={nextRef}
                  aria-label="رویداد بعدی"
                  className="relative w-12 h-12 flex items-center justify-center bg-[#F4F5FB] border-[0.125rem] border-[#21295A] text-[#21295A] rounded-[0_0.84375rem_0_0.84375rem] [corner-shape:squircle] transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                >
                  <ChevronLeftIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

        {/* ── کاروسل Swiper ── */}
        <div className="relative">
          <Swiper
            modules={[Navigation, A11y]}
            spaceBetween={50}
            slidesPerView={1}
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

                    {/* کارت اصلی - افزایش شدید ارتفاع به 700px در موبایل و 560px در دسکتاپ */}
                    <div className={`relative bg-white border-[0.140625rem] ${theme.borderColor} rounded-[0_2.75rem_0_2.75rem] [corner-shape:squircle] overflow-hidden flex flex-col-reverse lg:grid lg:grid-cols-[40%_60%] min-h-[43.75rem] lg:min-h-[35rem]`}>
                      
                      {/* کارت اطلاعات رویداد (سمت راست در دسکتاپ / پایین در موبایل) */}
                      <div className={`relative ${theme.cardBg} p-5 sm:p-8 lg:p-10 flex flex-col justify-between flex-1 lg:flex-none overflow-hidden`}>
                        
                        {/* بخش بالا: متون و بَج */}
                        <div className="relative z-10 flex flex-col gap-5 sm:gap-8">
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
                            <span className={`font-black text-[2.5rem] sm:text-[4.5rem] ${theme.indexColor} leading-none`}>
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
                            <h3 className={`font-black text-[1.5rem] sm:text-[2.25rem] leading-tight flex flex-wrap justify-start gap-x-2 ${theme.titleColor}`}>
                              {titleWords.map((word, idx) => (
                                <span 
                                  key={idx} 
                                  className={`inline-block ${idx % 2 === 0 ? '-rotate-3' : 'rotate-1'}`}
                                >
                                  {word}
                                </span>
                              ))}
                            </h3>
                            <p className={`font-semibold text-[0.8125rem] sm:text-[1rem] leading-7 sm:leading-8 line-clamp-4 sm:line-clamp-none ${theme.bodyColor}`}>
                              {event.body}
                            </p>
                          </div>
                        </div>

                        {/* بخش پایین: دکمه (همیشه در پایین کارت) */}
                        <div className="relative z-10 flex justify-center mt-6">
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
                      <div className="relative w-full h-[23.75rem] sm:h-[28.125rem] lg:h-auto overflow-hidden bg-gray-100">
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

        {/* ── نوار پیشرفت (Progress Bar) ── */}
        <div className="w-[7.5rem] mx-auto h-1.5 bg-[#EDECEC] rounded-full overflow-hidden mt-[3.75rem]">
          <div 
            className="h-full bg-[#333230] transition-all duration-500 ease-out rounded-full"
            style={{ width: `${((activeIndex + 1) / events.length) * 100}%` }}
          />
        </div>

      </Container>
    </section>
  );
}