"use client";
import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay } from "swiper/modules";
import Container from "../../../../layout/Container";
import { ChevronLeftIcon, ChevronRightIcon } from "../../../../common/Icons";
import "swiper/css";

const patternBg = "/assets/Pattern/layout-pattern.png";

const founders = [
  {
    id: 1,
    name: "مدیرعامل مؤسسه آموزشی و شتاب‌دهی رکاد",
    credentials: [
      "کارشناسی ارشد کارآفرینی",
      "مشاور مدیرکل آموزش و پرورش خراسان رضوی",
      "معاون آموزش متوسطه ناحیه ۲ مشهد",
      "معاون پژوهش و برنامه‌ریزی ناحیه ۲ مشهد",
      "مجری و گوینده سابق صداوسیمای خراسان رضوی",
      "مشاور جوان رئیس اداره ناحیه ۲",
      "پیشکسوت رویدادهای استارتاپی نوجوانان",
      "مدرس مهارت‌های نرم برای نوجوانان",
    ],
  },
  {
    id: 2,
    name: "مشاور آموزشی و برنامه‌ریزی",
    credentials: [
      "کارشناسی ارشد آموزش کارآفرینی",
      "معاون آموزش متوسطه ناحیه ۲ مشهد",
      "مشاور جوان رئیس اداره ناحیه ۲",
      "مدرس دانشگاه فردوسی مشهد",
      "پیشنهاددهنده رویدادهای استارتاپی نوجوونان",
      "همکار مؤسس رکاد از ابتدا",
    ],
  },
];

export default function AboutFounder() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative py-[4rem] sm:py-[5rem] lg:py-[6rem] w-full px-4 sm:px-6 lg:px-8 bg-[#E4F4F2] overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]">
        <img src={patternBg} alt="" aria-hidden="true" className="w-full h-full object-cover opacity-60" />
      </div>

      <Container className="relative z-10">
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <h2 className="font-black text-[1.5rem] sm:text-[2.25rem] lg:text-[3.3125rem] leading-[1.3] mb-4 sm:mb-6">
            <span className="inline-block rotate-1">آدمی</span>{" "}
            <span className="inline-block -rotate-1">که</span>{" "}
            <span className="inline-block rotate-1 text-teal">رکاد</span>{" "}
            <span className="inline-block -rotate-1">رو</span>{" "}
            <span className="inline-block rotate-1 text-magenta">ساخت</span>
          </h2>
        </div>

        <div className="relative w-full">
          <div className="absolute top-1/2 -translate-y-1/2 left-0 sm:left-2 z-30 hidden lg:block">
            <button type="button" aria-label="اسلاید بعدی" onClick={() => swiperRef.current?.slideNext()} className="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white border-[0.125rem] border-[#292827] text-[#292827] rounded-[0_0.84375rem_0_0.84375rem] [corner-shape:squircle] transition-all duration-300 hover:-translate-y-0.5 cursor-pointer">
              <ChevronLeftIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 right-0 sm:right-2 z-30 hidden lg:block">
            <button type="button" aria-label="اسلاید قبلی" onClick={() => swiperRef.current?.slidePrev()} className="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white border-[0.125rem] border-[#292827] text-[#292827] rounded-[0_0.84375rem_0_0.84375rem] [corner-shape:squircle] transition-all duration-300 hover:-translate-y-0.5 cursor-pointer">
              <ChevronRightIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          <div className="px-2 sm:px-4 lg:px-12">
            <Swiper
              modules={[A11y, Autoplay]}
              centeredSlides={true}
              loop={true}
              dir="rtl"
              slidesPerView={1}
              spaceBetween={16}
              speed={500}
              onSwiper={(swiper) => { swiperRef.current = swiper; }}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              breakpoints={{ 320: { slidesPerView: 1.05, spaceBetween: 8 }, 768: { slidesPerView: 1.3, spaceBetween: 16 }, 1024: { slidesPerView: 1.5, spaceBetween: 24 }, 1280: { slidesPerView: 1.8, spaceBetween: 32 } }}
              autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }}
              className="!overflow-visible"
            >
              {founders.map((f) => (
                <SwiperSlide key={f.id} className="!h-auto">
                  <div className="p-2 sm:p-3">
                    <div className="absolute top-[0.25rem] left-[0.25rem] w-full h-full bg-[#21295A] rounded-[1.5rem] sm:rounded-[2.5rem] lg:rounded-[3rem] [corner-shape:squircle]" />
                                        <div className="relative z-10 bg-[#F4F5FB] border-[0.125rem] border-[#21295A] rounded-[1.5rem] sm:rounded-[2.5rem] lg:rounded-[3rem] [corner-shape:squircle] overflow-hidden">
                      <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        <img src={patternBg} alt="" aria-hidden="true" className="w-full h-full object-cover opacity-10" />
                      </div>
                      <div className="relative z-10 p-6 sm:p-8 lg:p-10">
                        <h3 className="font-black text-[1.25rem] sm:text-[1.5rem] lg:text-[1.875rem] text-[#21295A] leading-[1.3] mb-6 sm:mb-8">{f.name}</h3>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                                  {f.credentials.map((cred, i) => (
                                                    <div key={i} className="flex items-start gap-2 sm:gap-3">
                                                      <span className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#21295A]/10 flex items-center justify-center mt-0.5">
                                                        <svg viewBox="0 0 24 24" fill="none" className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-teal"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                                      </span>
                                                      <span className="text-[0.8125rem] sm:text-[0.875rem] lg:text-[0.9375rem] text-[#21295A]/80 leading-[1.7]">{cred}</span>
                                                    </div>
                                                  ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="flex justify-center mt-6 sm:mt-8 gap-2">
            {founders.map((_, i) => (
              <button key={i} onClick={() => swiperRef.current?.slideToLoop(i)} className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${activeIndex === i ? "bg-[#21295A] scale-110" : "bg-[#21295A]/20"}`} aria-label={`اسلاید ${i + 1}`} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
