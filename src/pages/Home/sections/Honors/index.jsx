import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y } from "swiper/modules";
import Container from "../../../../layout/Container";
import { ChevronLeftIcon, ChevronRightIcon } from "../../../../common/Icons";

import "swiper/css";

const firstPerson = "/assets/Honors/f1.png";
const secondPerson = "/assets/Honors/s2.png";
const thirdPerson = "/assets/Honors/t3.png";
const districtOfficial = "/assets/Honors/district-honor-badge.png";

const goldPattern = "/assets/Honors/yellowTexture.png";
const silverPattern = "/assets/Honors/grayTexture.png";
const bronzePattern = "/assets/Honors/BronzeTexture.png";
const navyPattern = "/assets/Honors/blueTexture.png";

const honors = [
  {
    rank: "first",
    badge: firstPerson,
    title: "مقام اول جشنواره‌ی فردا",
    meta: "رتبه‌ی استانی و کشوری در بخش وب و نرم‌افزار",
    ctaLabel: "مشاهده منتخبین",
  },
  {
    rank: "second",
    badge: secondPerson,
    title: "مقام برتر جشنواره‌ی خوارزمی",
    meta: "رتبه‌ی استانی و کشوری در بخش وب و نرم‌افزار",
    ctaLabel: "مشاهده منتخبین",
  },
  {
    rank: "third",
    badge: thirdPerson,
    title: "مقام برتر جشنواره‌ی خوارزمی",
    meta: "رتبه‌ی استانی و کشوری در بخش وب و نرم‌افزار",
    ctaLabel: "مشاهده منتخبین",
  },
  {
    rank: "district",
    badge: districtOfficial,
    title: "مقام برتر جشنواره",
    meta: "نشان افتخار",
    ctaLabel: "مشاهده منتخبین",
  },
];

const THEME_MAP = {
  first: { accent: "#F8A41D", tint: "#FFFDFA", pattern: goldPattern },
  second: { accent: "#525252", tint: "#F2F2F2", pattern: silverPattern },
  third: { accent: "#A56216", tint: "#FEFDFA", pattern: bronzePattern },
  district: { accent: "#21295A", tint: "#F4F5FB", pattern: navyPattern },
};

export default function HonorsCarousel() {
  const swiperRef = useRef(null);

  return (
    <section
      id="honors"
      className="pt-[132px] pb-10 sm:pb-16 md:pb-20 px-3 sm:px-6 relative overflow-hidden bg-white"
      dir="rtl"
    >
      <Container className="relative z-10">
        {/* ── هدر: تایتل (راست) + دکمه «همه افتخارات» ── */}
        {/* فاصله ۱۰۰ پیکسل متن پایین تا اسلایدر */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 sm:gap-6 mb-[100px] text-right">
          <div className="max-w-[90%] sm:max-w-none">
            {/* فاصله ۴۵ پیکسل تایتل تا متن پایین */}
            <h2 className="font-black text-[20px] xs:text-[22px] sm:text-[34px] lg:text-[44px] leading-[1.35] mb-[45px]">
              افتخاراتی که <span className="text-[#21295A]">با هم</span> ساختیم
            </h2>
            <p className="font-medium text-[#292827] text-[12px] sm:text-[16px] leading-[1.8] sm:leading-[1.9] max-w-sm sm:max-w-xl">
              هر مدال اینجا یه اسم یه دانش‌آموزه که یه چیزی رو از صفر ساخت و تا
              آخرش ایستاد.
            </p>
          </div>

          {/* دکمه همه افتخارات — جلوی تایتل */}
          <a
            href="#"
            className="self-start md:self-auto bg-white border-[2px] border-[#21295A] text-[#21295A] font-extrabold text-sm sm:text-base px-6 py-3 rounded-[0_9.12px_0_9.12px] rotate-[-1.55deg] hover:rotate-0 transition-transform duration-300 whitespace-nowrap cursor-pointer flex-shrink-0"
          >
            همه افتخارات
          </a>
        </div>

        {/* ── پکیج کاروسل و دکمه‌های ناوبری (مثل بلاگ) ── */}
        <div className="flex items-center justify-between gap-2 sm:gap-4 md:gap-6">
          {/* دکمه سمت راست (اسلاید قبلی در RTL) */}
          <div className="relative flex-shrink-0 z-30">
            <div className="absolute top-[2px] left-[2px] sm:top-[2px] sm:left-[3px] w-full h-full bg-[#21295A] rounded-[0_8.65px_0_8.65px]"></div>
            <button
              type="button"
              aria-label="افتخار قبلی"
              onClick={() => swiperRef.current?.slidePrev()}
              className="relative w-9 h-9 sm:w-12 sm:h-12 flex items-center justify-center bg-[#F4F5FB] border-[1.5px] sm:border-[2px] border-[#21295A] text-[#21295A] rounded-[0_8.65px_0_8.65px] transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            >
              <ChevronRightIcon className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* اسلایدر — کارت‌های لبه با ماسک گرادیانی آرام محو می‌شوند */}
                    <div
                      className="flex-1 w-full overflow-hidden
                        [mask-image:linear-gradient(to_left,transparent,black_6%,black_94%,transparent)]
                        [-webkit-mask-image:linear-gradient(to_left,transparent,black_6%,black_94%,transparent)]"
                    >
            <Swiper
              modules={[A11y]}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              spaceBetween={12}
              dir="rtl"
              loop={true}
              breakpoints={{
                0: { slidesPerView: 1.15, spaceBetween: 12 },
                420: { slidesPerView: 1.4, spaceBetween: 14 },
                640: { slidesPerView: 2.1, spaceBetween: 20 },
                900: { slidesPerView: 2.6, spaceBetween: 22 },
                1024: { slidesPerView: 3, spaceBetween: 24 },
                1280: { slidesPerView: 3.5, spaceBetween: 28 },
              }}
              className="!pb-4 sm:!pb-6"
            >
              {honors.map((honor, i) => {
                const theme = THEME_MAP[honor.rank];
                const cardRotation = i % 2 === 0 ? 1.2 : -1.2;
                const badgeRotation = i % 2 === 0 ? -6 : 6;

                return (
                  <SwiperSlide key={i} className="!h-auto mt-5 flex px-1 justify-center">
                    <div
                      className="relative w-full flex justify-center"
                      style={{ transform: `rotate(${cardRotation}deg)` }}
                    >
                      <div className="relative mt-8 sm:mt-12 w-full max-w-[260px] xs:max-w-[280px] sm:max-w-[320px] md:max-w-[350px] min-h-[230px] sm:min-h-[280px] md:min-h-[260px]">
                        {/* لایه سایه/آفست پشت کارت */}
                        <div
                          aria-hidden="true"
                          className="absolute top-[3px] left-[3px] sm:top-[5px] sm:left-[5px] w-full h-full rounded-[0_20px_0_20px] sm:rounded-[0_24px_0_24px]"
                          style={{ backgroundColor: theme.accent }}
                        />

                        {/* کارت اصلی */}
                        <div
                          className="relative z-10 w-full h-full bg-white border-[1.5px] sm:border-[2px] rounded-[0_20px_0_20px] sm:rounded-[0_24px_0_24px] overflow-hidden"
                          style={{ borderColor: theme.accent }}
                        >
                          <div className="absolute inset-0 pointer-events-none">
                            <div
                              className="absolute inset-0"
                              style={{ backgroundColor: theme.tint }}
                            />
                            <img
                              src={theme.pattern}
                              alt=""
                              draggable={false}
                              className="absolute inset-0 w-full h-full object-cover scale-125 select-none opacity-100"
                            />
                          </div>

                          <div className="relative z-20 h-full flex flex-col items-center justify-center text-center gap-2 sm:gap-3 px-3 sm:px-7 py-6 sm:py-8">
                            <p
                              className="text-[10px] sm:text-[13px] leading-5 sm:leading-7 font-semibold"
                              style={{ color: theme.accent, opacity: 0.7 }}
                            >
                              {honor.meta}
                            </p>

                            <h4
                              className="font-black text-[14px] sm:text-[20px] lg:text-[22px] leading-snug"
                              style={{ color: theme.accent }}
                            >
                              {honor.title}
                            </h4>

                            <div className="relative inline-flex items-center justify-center mt-1 sm:mt-2">
                              <div className="absolute top-[2px] left-[2px] sm:top-[3px] sm:left-[3px] w-full h-full rounded-[6px] sm:rounded-[7px] bg-black"></div>

                              <a
                                href="#"
                                className="relative z-10 inline-flex items-center justify-center text-white text-[10px] sm:text-[14px] font-bold px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-[6px] sm:rounded-[7px] border border-black whitespace-nowrap"
                                style={{ backgroundColor: theme.accent }}
                              >
                                {honor.ctaLabel}
                              </a>
                            </div>
                          </div>
                        </div>

                        {/* بج مدال */}
                        <div
                          className="absolute -top-6 sm:-top-10 left-1/2 w-12 h-12 sm:w-20 sm:h-20 z-30"
                          style={{
                            transform: `translateX(-50%) rotate(${badgeRotation}deg)`,
                          }}
                        >
                          <img
                            src={honor.badge}
                            alt={honor.title}
                            draggable={false}
                            className="w-full h-full object-contain drop-shadow-md select-none"
                          />
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
            <div className="absolute top-[2px] left-[2px] sm:top-[2px] sm:left-[3px] w-full h-full bg-[#21295A] rounded-[0_8.65px_0_8.65px]"></div>
            <button
              type="button"
              aria-label="افتخار بعدی"
              onClick={() => swiperRef.current?.slideNext()}
              className="relative w-9 h-9 sm:w-12 sm:h-12 flex items-center justify-center bg-[#F4F5FB] border-[1.5px] sm:border-[2px] border-[#21295A] text-[#21295A] rounded-[0_8.65px_0_8.65px] transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            >
              <ChevronLeftIcon className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}