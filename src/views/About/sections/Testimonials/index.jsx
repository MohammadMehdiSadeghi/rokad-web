"use client";
import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay } from "swiper/modules";
import Container from "../../../../layout/Container";
import { ChevronLeftIcon, ChevronRightIcon } from "../../../../common/Icons";
import "swiper/css";

const patternBg = "/assets/Pattern/layout-pattern.png";

const testimonials = [
  {
    id: 1,
    text: "پسرم قبل رکاد گیج و بی‌انگیزه بود. الان با اعتماد به نفس درباره‌ی پروژه‌های واقعی حرف می‌زنه و می‌دونه دقیقاً کجای مسیرشه. برای من به عنوان مادر، بزرگ‌ترین آرامش اینه که فرزندم مسیرش رو پیدا کرده.",
    name: "خانم رضوی",
    role: "مادر یکی از دانش‌آموزان",
    initials: "م.ر",
    theme: "teal",
  },
  {
    id: 2,
    text: "رکاد به نوجوونا یاد می‌ده که یاد بگیرن، تجربه کنن و شکست بخورن تا قوی‌تر بشن. این دقیقاً همون چیزیه که نظام آموزشی ما کمش داره.",
    name: "خانم احمدی",
    role: "مادر یکی از دانش‌آموزان",
    initials: "ف.ا",
    theme: "magenta",
  },
];

export default function AboutTestimonials() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative py-[4rem] sm:py-[5rem] lg:py-[6rem] w-full px-4 sm:px-6 lg:px-8 bg-[#F6F6F6] overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]">
        <img src={patternBg} alt="" aria-hidden="true" className="w-full h-full object-cover opacity-50" />
      </div>

      <Container className="relative z-10">
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <h2 className="font-black text-[1.5rem] sm:text-[2.25rem] lg:text-[3.3125rem] leading-[1.3] mb-4 sm:mb-6">
            <span className="inline-block rotate-1 text-teal">چیزی</span>{" "}
            <span className="inline-block -rotate-1">که</span>{" "}
            <span className="inline-block rotate-1 text-magenta">خودشون</span>{" "}
            <span className="inline-block -rotate-1">می‌گن</span>
          </h2>
          <p className="text-[0.875rem] sm:text-[1rem] lg:text-[1.125rem] text-ink/60 max-w-2xl mx-auto leading-[1.8]">
            دانش‌آموزها، خانواده‌ها و منتورها — هر کدوم از یه زاویه‌ی دیگه توی رکاد
          </p>
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
              autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
              className="!overflow-visible"
            >
              {testimonials.map((t) => (
                <SwiperSlide key={t.id} className="!h-auto">
                  <div className="p-2 sm:p-3">
                    <div className="absolute top-[0.25rem] left-[0.25rem] w-full h-full bg-[#292827] rounded-[1.5rem] sm:rounded-[2.5rem] lg:rounded-[3rem] [corner-shape:squircle]" />
                    <div className="relative z-10 bg-white border-[0.125rem] border-[#292827] rounded-[1.5rem] sm:rounded-[2.5rem] lg:rounded-[3rem] [corner-shape:squircle] p-6 sm:p-8 lg:p-10">
                      <div className="flex items-center gap-4 sm:gap-5 mb-5 sm:mb-6">
                        <div className="relative flex-shrink-0">
                          <div className="absolute top-[0.09375rem] left-[0.09375rem] w-full h-full bg-[#292827] rounded-[0.614375rem_0_0.614375rem_0] [corner-shape:squircle]" />
                          <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-[0.614375rem_0_0.614375rem_0] [corner-shape:squircle] bg-teal border border-[#292827] flex items-center justify-center">
                            <span className="font-black text-[1rem] sm:text-[1.125rem] text-white">{t.initials}</span>
                          </div>
                        </div>
                        <div>
                          <h3 className="font-black text-[1rem] sm:text-[1.125rem] text-[#292827]">{t.name}</h3>
                          <p className="text-[0.75rem] sm:text-[0.8125rem] text-ink/50 mt-0.5">{t.role}</p>
                        </div>
                      </div>
                      <p className="text-[0.9375rem] sm:text-[1.0625rem] leading-[1.9] text-ink/80">{t.text}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="flex justify-center mt-6 sm:mt-8 gap-2">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => swiperRef.current?.slideToLoop(i)} className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${activeIndex === i ? "bg-[#292827] scale-110" : "bg-[#292827]/20"}`} aria-label={`اسلاید ${i + 1}`} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}