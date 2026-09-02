"use client";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay } from "swiper/modules";
import Container from "../../../../layout/Container";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "../../../../common/Icons";

import useRokadData from "../../../../lib/useRokadData";
import { fetchAwards } from "../../../../lib/api";
import fallbackAwards from "../../../../lib/fallback/awards";

import "swiper/css";

const goldPattern = "/assets/home/Honors/yellowTexture.png";
const silverPattern = "/assets/home/Honors/grayTexture.png";
const bronzePattern = "/assets/home/Honors/BronzeTexture.png";
const navyPattern = "/assets/home/Honors/blueTexture.png";

const sectionPattern = "/assets/Pattern/layout-pattern.png";

const THEME_MAP = {
  first: {
    accent: "#F8A41D",
    tint: "#FFFDFA",
    pattern: goldPattern,
  },

  second: {
    accent: "#525252",
    tint: "#F2F2F2",
    pattern: silverPattern,
  },

  third: {
    accent: "#A56216",
    tint: "#FEFDFA",
    pattern: bronzePattern,
  },

  district: {
    accent: "#21295A",
    tint: "#F4F5FB",
    pattern: navyPattern,
  },
};

export default function HonorsCarousel() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // دیتای داینامیک از بک‌اند؛ اگه API در دسترس نبود، fallback نمایش داده می‌شه
  const allHonors = useRokadData(fetchAwards, fallbackAwards);
  // سوییپر با loop:true و slidesPerView:3 برای لوپ نرم حداقل ۷-۸ اسلاید نیاز داره
  // (مثل دیزاین اصلی که ۷ تا داشت). اگه کمتر از ۶ تا باشه، کپی می‌کنیم
  const honors =
    allHonors.length < 6
      ? [...allHonors, ...allHonors, ...allHonors].slice(0, 8)
      : allHonors;

  return (
    <section
      id="honors"
      className="
        relative
        bg-white
        overflow-x-clip
        pt-[4rem]
        sm:pt-[5rem]
        lg:pt-[6rem]
        pb-[3rem]
        sm:pb-[4rem]
        lg:pb-[4rem]
        px-4
        sm:px-6
        lg:px-8
      "
      dir="rtl"
    >
      {/* =====================================================
          BACKGROUND PATTERN — همون ماسک گرادیانی هیرو/دوئال‌اسکول:
          بالا و پایین سکشن محو میشه که لبه‌ها بریده به نظر نرسن
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          pointer-events-none
          opacity-60
          rotate-180
          [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]
          [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]
        "
      >
        <img
          src={sectionPattern}
          alt=""
          aria-hidden="true"
          draggable="false"
          className="w-full h-full object-cover select-none"
        />
      </div>

      {/* =====================================================
          SWIPER STYLES
      ====================================================== */}

      <style>{`
              .honors-swiper .card-inner-wrap {
                transition:
                  transform 0.6s cubic-bezier(0.23, 1, 0.32, 1),
                  opacity 0.5s ease;
                opacity: 0.55;
                transform: scale(0.78);
              }

              .honors-swiper .swiper-slide-active {
                z-index: 30 !important;
              }

              .honors-swiper .swiper-slide-active .card-inner-wrap {
                transform: scale(1.08);
                opacity: 1;
                z-index: 30;
              }

              .honors-swiper .swiper-slide-prev,
              .honors-swiper .swiper-slide-next {
                z-index: 10 !important;
              }

              .honors-swiper .swiper-slide-prev .card-inner-wrap {
                transform: scale(0.78) rotate(5deg);
                opacity: 0.55;
                z-index: 10;
              }

              .honors-swiper .swiper-slide-next .card-inner-wrap {
                transform: scale(0.78) rotate(-6deg);
                opacity: 0.55;
                z-index: 10;
              }
            `}</style>

      <Container className="relative z-10">
        {/* =================================================
            HEADER
        ================================================== */}

        <div
          className="
            relative
            w-full
            flex
            flex-col
            items-center
            justify-center
            text-center
            gap-5
            sm:gap-6
            mb-[2rem]
            sm:mb-[2.5rem]
            lg:mb-[3rem]
          "
        >
          {/* Heading + Button Row */}

          <div
            className="
              w-full
              flex
              flex-col
              sm:flex-row
              items-center
              justify-between
              gap-4
              sm:gap-6
            "
          >
            {/* Left: Title + Subtitle */}
            <div className="flex-1 flex flex-col items-center sm:items-start">
              <h2
                className="
                  font-black
                  text-center
                  sm:text-right
                  text-[1.5rem]
                  sm:text-[2.25rem]
                  lg:text-[3.3125rem]
                  xl:text-[3.3125rem]
                  leading-tight
                "
              >
                افتخاراتی که{" "}
                <span className="text-[#21295A]">
                  با هم
                </span>{" "}
                ساختیم
              </h2>

              <p
                className="
                  mt-4
                  max-w-[20rem]
                  sm:max-w-[28rem]
                  lg:max-w-[36rem]
                  font-medium
                  text-[#292827]
                  text-[0.8125rem]
                  sm:text-[1rem]
                  lg:text-[1.125rem]
                  leading-normal
                  sm:leading-normal
                  text-center
                  sm:text-right
                "
              >
                هر مدال اینجا یه اسم یه دانش‌آموزه که یه چیزی رو
                از صفر ساخت و تا آخرش ایستاد.
              </p>
            </div>
         {/* Right: Button */}

            <div
              className="
                relative
                inline-flex
                items-center
                justify-center
                rotate-[-1.55deg]
                hover:rotate-0
                transition-all
                duration-300
                flex-shrink-0
              "
            >
            {/* Shadow */}

            <div
              aria-hidden="true"
              className="
                absolute
                top-[0.125rem]
                left-[0.125rem]
                w-full
                h-full
                rounded-[0_0.82rem_0_0.82rem]
                [corner-shape:squircle]
                bg-[#21295A]
              "
            />

            {/* Button */}

            <a
              href="#"
              className="
                relative
                z-10
                bg-white
                border-[0.125rem]
                border-[#21295A]
                text-[#21295A]
                font-extrabold
                text-sm
                sm:text-base
                px-6
                py-3
                rounded-[0_0.82rem_0_0.82rem]
                [corner-shape:squircle]
                whitespace-nowrap
                cursor-pointer
                flex-shrink-0
                [background-image:linear-gradient(to_right,#21295A,#21295A)]
                bg-no-repeat
                [background-size:0%_100%]
                hover:[background-size:100%_100%]
                hover:text-white
                transition-all
                duration-300
                ease-out
              "
            >
              همه افتخارات
            </a>
          </div>
          </div>
        </div>

        {/* =================================================
            CAROUSEL
        ================================================== */}

        <div
          className="
            relative
            w-full
            pt-6
            sm:pt-8
            lg:pt-10
            pb-6
            sm:pb-8
            overflow-visible
          "
        >
          {/* =================================================
              NEXT BUTTON - LEFT IN RTL
          ================================================== */}

          <div
            className="
              honors-nav-btn
              absolute
              top-1/2
              -translate-y-1/2
              left-2
              sm:left-4
              z-30
              flex-shrink-0
              hidden
              lg:flex
            "
          >
            <div
              aria-hidden="true"
              className="
                absolute
                top-[0.125rem]
                left-[0.1875rem]
                w-full
                h-full
                bg-[#292827]
                rounded-[0_0.540625rem_0_0.540625rem]
                sm:rounded-[0_0.790625rem_0_0.790625rem]
                [corner-shape:squircle]
              "
            />

            <button
              type="button"
              aria-label="افتخار بعدی"
              onClick={() => swiperRef.current?.slideNext()}
              className="
                relative
                w-10
                h-10
                sm:w-12
                sm:h-12
                flex
                items-center
                justify-center
                bg-white
                border-[0.125rem]
                border-[#292827]
                text-[#292827]
                rounded-[0_0.540625rem_0_0.540625rem]
                sm:rounded-[0_0.790625rem_0_0.790625rem]
                [corner-shape:squircle]
                transition-all
                duration-300
                hover:-translate-y-0.5
                cursor-pointer
              "
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
          </div>

          {/* =================================================
              SWIPER
          ================================================== */}

          <div
            className="
              w-full
              px-5
              sm:px-14
              md:px-20
              lg:px-32
              xl:px-24
              [overflow-x:clip]
              [overflow-y:visible]
            "
          >
            <Swiper
              modules={[A11y, Autoplay]}
              centeredSlides={true}
              loop={true}
              dir="rtl"
              initialSlide={2}
              slidesPerView={1.5}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              onSlideChange={(swiper) => {
                setActiveIndex(swiper.realIndex);
              }}
              spaceBetween={8}
              speed={500}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },

                1280: {
                  slidesPerView: 3,
                },
              }}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              className="honors-swiper !pt-16 sm:!pt-10 !pb-12"
            >
              {honors.map((honor, i) => {
                const theme = THEME_MAP[honor.rank];

                const badgeRotation =
                  i % 2 === 0 ? -6 : 6;

                return (
                  <SwiperSlide
                    key={i}
                    className="!h-auto overflow-visible"
                  >
                    <div
                      className="
                        p-2
                        sm:p-3
                        lg:p-4
                        overflow-visible
                      "
                    >
                      <div className="card-inner-wrap">

                        {/* Card Container */}

                        <div
                          className="
                            relative
                            max-w-[16rem]
                            sm:max-w-[21.25rem]
                            lg:max-w-[27rem]
                            xl:max-w-[28.75rem]
                            mx-auto
                          "
                        >
                          {/* Shadow */}

                          <div
                            aria-hidden="true"
                            className="
                              absolute
                              top-[0.125rem]
                              left-[0.125rem]
                              sm:top-[0.1875rem]
                              sm:left-[0.1875rem]
                              w-full
                              h-full
                              rounded-[0_2rem_0_2rem]
                              [corner-shape:squircle]
                            "
                            style={{
                              backgroundColor: theme.accent,
                            }}
                          />

                          {/* Main Card */}

                          <div
                            className="
                              relative
                              z-10
                              w-full
                              bg-white
                              border-[0.140625rem]
                              rounded-[0_2rem_0_2rem]
                              [corner-shape:squircle]
                              overflow-hidden
                            "
                            style={{
                              borderColor: theme.accent,
                            }}
                          >
                            {/* Background */}

                            <div
                              className="
                                absolute
                                inset-0
                                pointer-events-none
                              "
                            >
                              <div
                                className="absolute inset-0"
                                style={{
                                  backgroundColor: theme.tint,
                                }}
                              />

                              <img
                                src={theme.pattern}
                                alt=""
                                draggable={false}
                                className="
                                  absolute
                                  inset-0
                                  w-full
                                  h-full
                                  object-cover
                                  scale-125
                                  select-none
                                  opacity-100
                                "
                              />
                            </div>

                            {/* Card Content */}
                            {/* بج از بالا بیرون زده، پس:
                                - pt بالا فضای بج رو جبران می‌کنه
                                - pb پایین کمتر از قبل تا آخرین المان به حاشیه نچسبه
                                - gap داخلی بیشتر تا محتوا به‌هم نچسبه */}
                            <div
                              className="
                                relative
                                z-20
                                min-h-[10rem]
                                sm:min-h-[12.5rem]
                                flex
                                flex-col
                                items-center
                                justify-center
                                text-center
                                gap-2.5
                                sm:gap-3
                                px-3
                                sm:px-5
                                pt-8
                                sm:pt-10
                                lg:pt-12
                                pb-4
                                sm:pb-5
                              "
                            >
                              {/* Meta */}

                              <p
                                className="
                                  text-[0.625rem]
                                  sm:text-[0.6875rem]
                                  lg:text-[0.75rem]
                                  leading-5
                                  sm:leading-6
                                  font-semibold
                                "
                                style={{
                                  color: theme.accent,
                                  opacity: 0.7,
                                }}
                              >
                                {honor.meta}
                              </p>

                              {/* Title */}

                              <h4
                                className="
                                  font-black
                                  text-[0.8125rem]
                                  sm:text-[1rem]
                                  lg:text-[1.125rem]
                                  xl:text-[1.25rem]
                                  leading-snug
                                "
                                style={{
                                  color: theme.accent,
                                }}
                              >
                                {honor.title}
                              </h4>

                              {/* CTA */}

                              <div
                                className="
                                  relative
                                  inline-flex
                                  items-center
                                  justify-center
                                  mt-1
                                  sm:mt-2
                                  -rotate-1
                                  hover:rotate-0
                                  transition-transform
                                  duration-300
                                "
                              >
                                <div
                                  aria-hidden="true"
                                  className="
                                    absolute
                                    top-[0.0625rem]
                                    left-[0.0625rem]
                                    sm:top-[0.0625rem]
                                    sm:left-[0.0625rem]
                                    w-full
                                    h-full
                                    rounded-[0.6875rem]
                                    sm:rounded-[0.75rem]
                                    [corner-shape:squircle]
                                    bg-black
                                  "
                                />

                                <a
                                  href="#"
                                  className="
                                    relative
                                    z-10
                                    inline-flex
                                    items-center
                                    justify-center
                                    text-white
                                    text-[0.6875rem]
                                    sm:text-[0.75rem]
                                    lg:text-[0.8125rem]
                                    font-bold
                                    px-3
                                    sm:px-4
                                    py-1
                                    sm:py-2
                                    rounded-[0.6875rem]
                                    sm:rounded-[0.75rem]
                                    [corner-shape:squircle]
                                    border
                                    border-black
                                    whitespace-nowrap
                                  "
                                  style={{
                                    backgroundColor: theme.accent,
                                  }}
                                >
                                  {honor.ctaLabel}
                                </a>
                              </div>
                            </div>
                          </div>

                          {/* Medal Badge */}

                          <div
                            className="
                              absolute
                              -top-6
                              sm:-top-6
                              lg:-top-10
                              left-1/2
                              w-14
                              h-14
                              sm:w-16
                              sm:h-16
                              lg:w-20
                              lg:h-20
                              z-30
                            "
                            style={{
                              transform: `translateX(-50%) rotate(${badgeRotation}deg)`,
                            }}
                          >
                            <img
                              src={honor.badge}
                              alt={honor.title}
                              draggable={false}
                              className="
                                w-full
                                h-full
                                object-contain
                                drop-shadow-md
                                select-none
                              "
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

          {/* =================================================
              PREVIOUS BUTTON - RIGHT IN RTL
          ================================================== */}

          <div
            className="
              honors-nav-btn
              absolute
              top-1/2
              -translate-y-1/2
              right-2
              sm:right-4
              z-30
              flex-shrink-0
              hidden
              lg:flex
            "
          >
            <div
              aria-hidden="true"
              className="
                absolute
                top-[0.125rem]
                left-[0.1875rem]
                w-full
                h-full
                bg-[#292827]
                rounded-[0_0.540625rem_0_0.540625rem]
                sm:rounded-[0_0.790625rem_0_0.790625rem]
                [corner-shape:squircle]
              "
            />

            <button
              type="button"
              aria-label="افتخار قبلی"
              onClick={() => swiperRef.current?.slidePrev()}
              className="
                relative
                w-10
                h-10
                sm:w-12
                sm:h-12
                flex
                items-center
                justify-center
                bg-white
                border-[0.125rem]
                border-[#292827]
                text-[#292827]
                rounded-[0_0.540625rem_0_0.540625rem]
                sm:rounded-[0_0.790625rem_0_0.790625rem]
                [corner-shape:squircle]
                transition-all
                duration-300
                hover:-translate-y-0.5
                cursor-pointer
              "
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* =================================================
            MOBILE PROGRESS
        ================================================== */}

        <div className="mt-2 flex justify-center md:hidden">
          <div
            className="
              w-[9.375rem]
              h-1.5
              bg-[#EDECEC]
              rounded-full
              overflow-hidden
            "
          >
            <div
              className="
                h-full
                bg-[#333230]
                transition-all
                duration-500
                ease-out
                rounded-full
              "
              style={{
                width: `${((activeIndex + 1) / honors.length) * 100}%`,
              }}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}