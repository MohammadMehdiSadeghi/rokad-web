import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import Container from "../../../../layout/Container";
import { ChevronLeftIcon, ChevronRightIcon, ArrowIcon } from "../../../../common/Icons";

// استایل‌های پایه swiper
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
      // فاصله ۶۵ پیکسل از بالا — موبایل فشرده‌تر
      <section className="pt-12 sm:pt-14 lg:pt-[65px] pb-14 sm:pb-20 px-4 sm:px-6 relative overflow-hidden bg-white">
        {/* 1. لایه پترن پس‌زمینه */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <img
            src={patternBg}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover opacity-80"
          />
        </div>

        <Container className="relative z-10">
        
          {/* ── هدر: تایتل و دکمه‌های ناوبری ── */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 md:mb-[80px]">
            <div>
              {/* موبایل 20px (فیگما)، دسکتاپ 42px */}
              <h2 className="font-black text-[22px] xs:text-[24px] sm:text-[38px] lg:text-[42px] leading-[1.35] mb-4 md:mb-[35px]">
                جایی که ایده‌ها<span className="text-magenta"> جون می‌گیرن</span>
              </h2>
              <p className="font-medium text-[#292827] text-[12px] xs:text-[13px] sm:text-[16px] leading-[1.9] max-w-xl">
                رویدادهایی که دانش‌آموزها توش از ایده تا اجرا رو با دست خودشون طی می‌کنن.
              </p>
            </div>

            {/* 2, 3, 4. دکمه‌های ناوبری با استایل کارت (لایه پشتی، بوردر و ردیوس) */}
            <div className="flex items-center gap-4 md:gap-6 self-center md:self-auto">
              {/* دکمه قبلی */}
              <div className="relative">
                <div className="absolute top-[2px] left-[3px] w-full h-full bg-[#21295A] rounded-[0_8.65px_0_8.65px]"></div>
                <button
                  type="button"
                  ref={prevRef}
                  aria-label="رویداد قبلی"
                  className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#F4F5FB] border-[2px] border-[#21295A] text-[#21295A] rounded-[0_8.65px_0_8.65px] transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                >
                  <ChevronRightIcon className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </div>
            
              {/* دکمه بعدی */}
              <div className="relative">
                <div className="absolute top-[2px] left-[3px] w-full h-full bg-[#21295A] rounded-[0_8.65px_0_8.65px]"></div>
                <button
                  type="button"
                  ref={nextRef}
                  aria-label="رویداد بعدی"
                  className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#F4F5FB] border-[2px] border-[#21295A] text-[#21295A] rounded-[0_8.65px_0_8.65px] transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                >
                  <ChevronLeftIcon className="w-4 h-4 md:w-5 md:h-5" />
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
                      className={`absolute top-[4px] left-[7px] w-full h-full ${theme.solidColor} rounded-[0_29px_0_29px]`} 
                    />

                    {/* کارت اصلی */}
                    <div className={`relative bg-white border-[2.25px] ${theme.borderColor} rounded-[0_29px_0_29px] overflow-hidden grid grid-cols-1 lg:grid-cols-[40%_60%]`}>
                      
                      {/* کارت اطلاعات رویداد (سمت راست) — موبایل فشرده (فیگما 346×181) */}
                                            <div className={`relative ${theme.cardBg} p-4 sm:p-12 flex flex-col justify-center overflow-hidden`}>
                        
                                              <div className="relative z-10 flex flex-col gap-3 sm:gap-6 h-full text-right justify-between py-2 sm:py-4">
                          
                                                {/* ردیف اول: عنوان/تاریخ (راست) و عدد (چپ) در یک خط */}
                                                <div className="flex justify-between items-start w-full">
                                                  <div className="flex flex-col items-start">
                                                    <span className={`font-black text-[11px] xs:text-[12px] sm:text-[14.97px] ${theme.accentText}`}>
                                                      {event.category}
                                                    </span>
                                                    <span className={`font-medium text-[9px] xs:text-[10px] sm:text-[11.9px] mt-0.5 sm:mt-1 ${theme.metaColor}`}>
                                                      {event.meta}
                                                    </span>
                                                  </div>
                                                  <span className={`font-black text-[30px] xs:text-[34px] sm:text-[60px] ${theme.indexColor} leading-none`}>
                                                    {event.index}
                                                  </span>
                                                </div>

                                                {/* بَج بزرگ‌تر همراه با لایه پشتی */}
                                                <div className="relative self-start">
                                                  <div 
                                                    className={`absolute top-[3px] left-[3px] w-full h-full ${theme.badgeOffset} rounded-[4px] pointer-events-none`}
                                                  ></div>
                                                  <div className={`relative ${theme.badgeBg} border-[1px] ${theme.badgeBorder} ${theme.badgeText} rounded-[4px] px-2.5 xs:px-3 sm:px-5 py-1 xs:py-1.5 sm:py-2.5 text-[9px] xs:text-[10px] sm:text-base font-bold`}>
                                                    ساخت محصول واقعی
                                                  </div>
                                                </div>

                                                {/* تایتل (موبایل 18px، دسکتاپ 32px) */}
                                                <h3 className={`font-black text-[18px] xs:text-[20px] sm:text-[32px] leading-tight mb-1 sm:mb-3 flex flex-wrap justify-start gap-x-2 ${theme.titleColor}`}>
                                                  {titleWords.map((word, idx) => (
                                                    <span 
                                                      key={idx} 
                                                      className={`inline-block ${idx % 2 === 0 ? '-rotate-3' : 'rotate-1'}`}
                                                    >
                                                      {word}
                                                    </span>
                                                  ))}
                                                </h3>

                                                {/* ساب‌تایتل (13px, 600) */}
                                                <p className={`font-semibold text-[10px] xs:text-[11px] sm:text-[13px] leading-6 sm:leading-7 mb-2 sm:mb-6 line-clamp-3 sm:line-clamp-none ${theme.bodyColor}`}>
                                                  {event.body}
                                                </p>

                                                {/* دکمه داخل کارت (وسط‌چین) */}
                                                <a
                                                  href="#"
                                                  className={`self-center inline-flex items-center gap-2 ${theme.btnBg} text-white text-[10px] xs:text-[11px] sm:text-sm font-bold px-3.5 xs:px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-all duration-300 hover:-translate-x-1`}
                                                >
                                                  {event.ctaLabel}
                                                  <ArrowIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                                                </a>
                                              </div>
                                            </div>

                                            {/* تصویر رویداد (سمت چپ) — موبایل کوتاه */}
                                            <div className="relative min-h-[130px] xs:min-h-[150px] sm:min-h-[200px] lg:min-h-[440px] bg-gray-100">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover"
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
        {/* فاصله ۲۰ پیکسل اسلایدر تا نوار پیشرفت */}
        <div className="w-[120px] mx-auto h-1.5 bg-[#EDECEC] rounded-full overflow-hidden mt-[20px]">
          <div 
            className="h-full bg-[#333230] transition-all duration-500 ease-out rounded-full"
            style={{ width: `${((activeIndex + 1) / events.length) * 100}%` }}
          />
        </div>

      </Container>
    </section>
  );
}