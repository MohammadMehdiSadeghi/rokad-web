import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import { ChevronLeftIcon, ChevronRightIcon } from "../Icons";

import "swiper/css";

import firstPerson from "../../assets/Honors/f1.png";
import secondPerson from "../../assets/Honors/s2.png";
import thirdPerson from "../../assets/Honors/t3.png";
import districtOfficial from "../../assets/Honors/مقام برتر ناحیه ابی.png";

import goldPattern from "../../assets/Honors/yellowTexture.png";
import silverPattern from "../../assets/Honors/grayTexture.png";
import bronzePattern from "../../assets/Honors/BronzeTexture.png";
import navyPattern from "../../assets/Honors/blueTexture.png";

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
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="py-20 px-6 relative overflow-hidden bg-white" dir="rtl">
      <div className="relative z-10 w-[80%] mx-auto">
        {/* ── هدر ── */}
        <div className="flex flex-row-reverse justify-between items-start md:items-center gap-6 mb-14 flex-wrap">
          <div className="flex items-center gap-6">
            <div className="relative">
              <div className="absolute top-[2px] left-[3px] w-full h-full bg-[#21295A] rounded-[0_8.65px_0_8.65px]"></div>
              <button
                type="button"
                ref={prevRef}
                aria-label="افتخار قبلی"
                className="relative w-12 h-12 flex items-center justify-center bg-[#F4F5FB] border-[2px] border-[#21295A] text-[#21295A] rounded-[0_8.65px_0_8.65px] transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
              >
                <ChevronRightIcon className="w-5 h-5" />
              </button>
            </div>
            <div className="relative">
              <div className="absolute top-[2px] left-[3px] w-full h-full bg-[#21295A] rounded-[0_8.65px_0_8.65px]"></div>
              <button
                type="button"
                ref={nextRef}
                aria-label="افتخار بعدی"
                className="relative w-12 h-12 flex items-center justify-center bg-[#F4F5FB] border-[2px] border-[#21295A] text-[#21295A] rounded-[0_8.65px_0_8.65px] transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
              >
                <ChevronLeftIcon className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="text-right">
            <h2 className="font-black text-[30px] sm:text-[40px] lg:text-[44px] leading-[1.35] mb-4">
              افتخاراتی که <span className="text-[#21295A]">با هم</span> ساختیم
            </h2>
            <p className="font-medium text-[#292827] text-[15px] sm:text-[16px] leading-[1.9] max-w-xl">
              هر مدال اینجا یه اسم یه دانش‌آموزه که یه چیزی رو از صفر ساخت و تا
              آخرش ایستاد.
            </p>
          </div>
        </div>

        {/* ── کاروسل ── */}
        <Swiper
          modules={[Navigation, A11y]}
          spaceBetween={24}
          dir="rtl"
          breakpoints={{
            0: { slidesPerView: 1.15, spaceBetween: 16 },
            640: { slidesPerView: 2.1, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
            1280: { slidesPerView: 3.5, spaceBetween: 28 },
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          className="!pb-6"
        >
          {honors.map((honor, i) => {
            const theme = THEME_MAP[honor.rank];
            const cardRotation = i % 2 === 0 ? 1.5 : -1.5;
            const badgeRotation = i % 2 === 0 ? -8 : 8;

            return (
              <SwiperSlide key={i} className="!h-auto mt-5 flex justify-center">
                <div
                  className="relative"
                  style={{ transform: `rotate(${cardRotation}deg)` }}
                >
                  <div className="relative mt-12 w-[350px] max-w-full h-[250px]">
                    {/* لایه سایه/آفست پشت کارت */}
                    <div
                      aria-hidden="true"
                      className="absolute top-[5px] left-[5px] w-full h-full rounded-[0_24px_0_24px]"
                      style={{ backgroundColor: theme.accent }}
                    />

                    {/* کارت اصلی */}
                    <div
                      className="relative z-10 w-full h-full bg-white border-[2px] rounded-[0_24px_0_24px] overflow-hidden"
                      style={{ borderColor: theme.accent }}
                    >
                      {/* پترن پس‌زمینه */}
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

                      {/* محتوا — meta / تایتل / دکمه، همه وسط‌چین و زیر هم */}
                      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center gap-4 px-7 py-8">
                        <p
                          className="text-[13px] leading-7 font-semibold"
                          style={{ color: theme.accent, opacity: 0.7 }}
                        >
                          {honor.meta}
                        </p>

                        <h4
                          className="font-black text-[22px] sm:text-[24px] leading-snug"
                          style={{ color: theme.accent }}
                        >
                          {honor.title}
                        </h4>

                        {/* ── دکمه: سایه مشکی، از هر طرف ۲px بیرون‌زده ── */}
                        <div className="relative inline-flex items-center justify-center mt-1">
                          {/* لایه سایه مشکی */}
                          <div className="absolute -inset-[2px] rounded-[9px] bg-black"></div>
                          {/* خود دکمه */}
                          <a
                            href="#"
                            className="relative z-10 inline-flex items-center justify-center text-white text-[14px] sm:text-[16px] font-bold px-4 sm:px-5 py-2.5 sm:py-3 rounded-[7px] border-[1.23px] whitespace-nowrap"
                            style={{
                              backgroundColor: theme.accent,
                              borderColor: theme.accent,
                            }}
                          >
                            {honor.ctaLabel}
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* بج مدال */}
                    <div
                      className="absolute -top-[52px] left-1/2 w-24 h-24 z-30"
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
    </section>
  );
}