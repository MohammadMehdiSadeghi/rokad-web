import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay } from "swiper/modules";
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
      className="pt-[132px] pb-10 sm:pb-16 md:pb-20 px-3 sm:px-6 relative bg-white overflow-hidden"
      dir="rtl"
    >
      {/* ── پس‌زمینه‌ی پترن ── */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.08]">
        <img
          src={navyPattern}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <style>{`
        .honors-swiper {
          overflow: visible !important;
        }
        .honors-swiper .swiper-wrapper {
          overflow: visible !important;
        }
        .honors-swiper .swiper-slide {
          overflow: visible;
          height: auto;
          z-index: 1;
        }
        .honors-swiper .card-inner-wrap {
          transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.6s ease;
          opacity: 0;
          transform: scale(0.62);
          pointer-events: none;
        }
        .honors-swiper .swiper-slide-active {
          z-index: 30 !important;
        }
        .honors-swiper .swiper-slide-active .card-inner-wrap {
          transform: scale(1.3) translateX(0) translateY(-6px) rotate(0deg);
          opacity: 1;
          z-index: 30;
          pointer-events: auto;
        }
        .honors-swiper .swiper-slide-prev {
          z-index: 10 !important;
        }
        .honors-swiper .swiper-slide-prev .card-inner-wrap {
          transform: scale(0.92) translateX(calc(-103% + 190px)) translateY(8px) rotate(5deg);
          opacity: 0.72;
          z-index: 10;
          pointer-events: auto;
        }
        .honors-swiper .swiper-slide-next {
          z-index: 10 !important;
        }
        .honors-swiper .swiper-slide-next .card-inner-wrap {
          transform: scale(0.92) translateX(calc(103% - 190px)) translateY(8px) rotate(-6deg);
          opacity: 0.72;
          z-index: 10;
          pointer-events: auto;
        }
      `}</style>

      <Container className="relative z-10">
        {/* ── هدر ─ـ */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 sm:gap-6 mb-[40px] text-right">
          <div className="max-w-[90%] sm:max-w-none">
            <h2 className="font-black text-[20px] xs:text-[22px] sm:text-[34px] lg:text-[44px] leading-[1.35] mb-[45px]">
              افتخاراتی که <span className="text-[#21295A]">با هم</span> ساختیم
            </h2>
            <p className="font-medium text-[#292827] text-[12px] sm:text-[16px] leading-[1.8] sm:leading-[1.9] max-w-sm sm:max-w-xl">
              هر مدال اینجا یه اسم یه دانش‌آموزه که یه چیزی رو از صفر ساخت و تا
              آخرش ایستاد.
            </p>
          </div>

          {/* دکمه همه افتخارات با انیمیشن fill از چپ به راست */}
          <div className="relative inline-flex items-center justify-center self-start md:self-auto rotate-[-1.55deg] hover:rotate-0 transition-all duration-300">
            <div className="absolute top-[2px] left-[2px] w-full h-full rounded-[0_13.12px_0_13.12px] [corner-shape:squircle] bg-[#21295A]"></div>
            <a
              href="#"
              className="relative z-10 bg-white border-[2px] border-[#21295A] text-[#21295A] font-extrabold text-sm sm:text-base px-6 py-3 rounded-[0_13.12px_0_13.12px] [corner-shape:squircle] whitespace-nowrap cursor-pointer flex-shrink-0
              [background-image:linear-gradient(to_right,#21295A,#21295A)] bg-no-repeat [background-size:0%_100%] hover:[background-size:100%_100%] hover:text-white transition-all duration-300 ease-out"
            >
              همه افتخارات
            </a>
          </div>
        </div>

        {/* ── کاروسل ── */}
        <div className="relative w-full pt-40 sm:pt-44 pb-12 sm:pb-16 overflow-visible">
          {/* دکمه بعدی (RTL: چپ) */}
          <div className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 z-30 flex-shrink-0">
            <div className="absolute top-[2px] left-[3px] w-full h-full bg-[#21295A] rounded-[0_12.65px_0_12.65px] [corner-shape:squircle]"></div>
            <button
              type="button"
              aria-label="افتخار بعدی"
              onClick={() => swiperRef.current?.slideNext()}
              className="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#F4F5FB] border-[2px] border-[#21295A] text-[#21295A] rounded-[0_12.65px_0_12.65px] [corner-shape:squircle] transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            >
              <ChevronLeftIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          <div className="w-full px-14 sm:px-20 md:px-24 lg:px-28 [overflow-x:clip] [overflow-y:visible]">
            <Swiper
              modules={[A11y, Autoplay]}
              centeredSlides={true}
              loop={true}
              loopAdditionalSlides={20}        // افزایش چشمگیر برای چرخش بی‌نهایت
              initialSlide={0}
              slidesPerView={1}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              spaceBetween={16}
              speed={600}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              className="honors-swiper !overflow-visible !pt-10 !pb-12"
            >
              {honors.map((honor, i) => {
                const theme = THEME_MAP[honor.rank];
                const badgeRotation = i % 2 === 0 ? -6 : 6;

                return (
                  <SwiperSlide key={i} className="!h-auto overflow-visible">
                    <div className="p-2 sm:p-3 lg:p-4 overflow-visible">
                      <div className="card-inner-wrap">
                        <div className="relative max-w-[340px] xs:max-w-[360px] sm:max-w-[380px] lg:max-w-[400px] xl:max-w-[460px] mx-auto">
                          {/* لایه سایه */}
                          <div
                            aria-hidden="true"
                            className="absolute top-[2px] left-[2px] sm:top-[3px] sm:left-[3px] w-full h-full rounded-[0_32px_0_32px] [corner-shape:squircle]"
                            style={{ backgroundColor: theme.accent }}
                          />

                          {/* کارت اصلی */}
                          <div
                            className="relative z-10 w-full bg-white border-[2px] rounded-[0_32px_0_32px] [corner-shape:squircle] overflow-hidden"
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

                            <div className="relative z-20 min-h-[200px] flex flex-col items-center justify-center text-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-8 sm:py-10">
                              <p
                                className="text-[9px] sm:text-[11px] lg:text-[12px] leading-5 sm:leading-6 font-semibold"
                                style={{ color: theme.accent, opacity: 0.7 }}
                              >
                                {honor.meta}
                              </p>

                              <h4
                                className="font-black text-[12px] sm:text-[16px] lg:text-[18px] xl:text-[20px] leading-snug"
                                style={{ color: theme.accent }}
                              >
                                {honor.title}
                              </h4>

                              {/* دکمه CTA - اضافه شدن rotate -1 */}
                              <div className="relative inline-flex items-center justify-center mt-1 sm:mt-2 -rotate-1 hover:rotate-0 transition-transform duration-300">
                                <div className="absolute top-[1px] left-[1px] sm:top-[1px] sm:left-[1px] w-full h-full rounded-[11px] sm:rounded-[12px] [corner-shape:squircle] bg-black"></div>
                                <a
                                  href="#"
                                  className="relative z-10 inline-flex items-center justify-center text-white text-[9px] sm:text-[12px] lg:text-[13px] font-bold px-3 sm:px-4 py-1 sm:py-2 rounded-[11px] sm:rounded-[12px] [corner-shape:squircle] border border-black whitespace-nowrap"
                                  style={{ backgroundColor: theme.accent }}
                                >
                                  {honor.ctaLabel}
                                </a>
                              </div>
                            </div>
                          </div>

                          {/* بج مدال */}
                          <div
                            className="absolute -top-8 sm:-top-12 left-1/2 w-12 h-12 sm:w-20 sm:h-20 z-30"
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
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>

          {/* دکمه قبلی (RTL: راست) */}
          <div className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 z-30 flex-shrink-0">
            <div className="absolute top-[2px] left-[3px] w-full h-full bg-[#21295A] rounded-[0_12.65px_0_12.65px] [corner-shape:squircle]"></div>
            <button
              type="button"
              aria-label="افتخار قبلی"
              onClick={() => swiperRef.current?.slidePrev()}
              className="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#F4F5FB] border-[2px] border-[#21295A] text-[#21295A] rounded-[0_12.65px_0_12.65px] [corner-shape:squircle] transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            >
              <ChevronRightIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}