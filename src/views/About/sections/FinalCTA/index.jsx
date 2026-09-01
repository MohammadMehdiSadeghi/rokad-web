"use client";

import Container from "../../../../layout/Container";
import { useEnrollment } from "../../../../lib/EnrollmentContext";

const imgBoy = "/assets/about/FinalCTA/Cta-Boys-Vector.png";
const imgGirl = "/assets/about/FinalCTA/Cta-Girls-Vector.png";
const pattern = "/assets/unassigned/pattern-boxes.png";

export default function AboutFinalCTA() {
  const { openEnrollment } = useEnrollment();

  return (
    <section
      className="relative overflow-hidden bg-teal pt-[1rem] sm:pt-[1.5rem] lg:pt-[1.5rem] pb-0 px-4 sm:px-6 lg:px-8"
      dir="rtl"
    >
      {/* Background Pattern — فقط دسکتاپ */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
        <img
          src={pattern}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover scale-125 select-none opacity-100"
        />
      </div>

      <Container className="relative z-20">
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-8 lg:gap-4">
          {/* Girl Image */}
          <div className="hidden lg:flex shrink-0 pointer-events-none select-none lg:w-[26%] justify-center items-center">
            <img
              src={imgGirl}
              alt=""
              aria-hidden="true"
              className="h-[18rem] lg:h-[20rem] xl:h-[24rem] w-auto object-contain"
            />
          </div>

          {/* Text Content */}
          <div className="flex flex-col items-center text-center w-full lg:w-[48%] mb-[2rem] sm:mb-[2.5rem] lg:mb-10">
            <h2
              className="text-[2rem] sm:text-[3rem] lg:text-[4.8125rem] xl:text-[4.8125rem] leading-[1.5] sm:leading-[1.5] lg:leading-[1.6] text-white mb-[0.5rem] sm:mb-[0.75rem] flex flex-wrap justify-center gap-x-2 gap-y-3 sm:gap-y-2"
              style={{ fontWeight: 950 }}
            >
              <span className="inline-block rotate-[3deg]">برای</span>
              <span className="inline-block rotate-[-3deg]">ساختن</span>
              <span className="inline-block rotate-[3deg]">آینده</span>
              <span className="inline-block rotate-[-3deg]">همین</span>
              <span className="inline-block rotate-[3deg]">امروز</span>
              <span className="inline-block rotate-[-3deg]">اقدام</span>
              <span className="inline-block rotate-[3deg]">کن</span>
            </h2>

            <p className="text-[1rem] sm:text-[1.0625rem] lg:text-[1.125rem] font-semibold leading-[1.6] text-white max-w-[33.75rem] mb-[1.5rem] sm:mb-[2rem] lg:mb-[2.5rem]">
              مصاحبه‌ی رایگان و تعیین سطح برای همه‌ی متقاضی‌ها. کافیه فرم رو پر
              کنی، بقیه‌ش با ماست.
            </p>

            {/* دکمه */}
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); openEnrollment(); }}
              className="inline-flex items-center justify-center w-full sm:w-auto max-w-[90%] sm:max-w-none min-w-[10rem] sm:min-w-[14rem] lg:min-w-[16rem] h-[3rem] sm:h-[3.5rem] lg:h-[4rem]
                          px-5 sm:px-7 lg:px-8 bg-navy text-white font-extrabold text-[0.875rem] sm:text-[1rem] lg:text-[1.125rem] rounded-[0.625rem] sm:rounded-[0.75rem] lg:rounded-[1rem] [corner-shape:squircle]
                          hover:bg-navy-alt transition-colors duration-300 cursor-pointer"
            >
              تکمیل فرم پیش‌ثبت‌نام
            </a>
          </div>

          {/* Boy Image */}
          <div className="hidden lg:flex shrink-0 pointer-events-none select-none lg:w-[26%] justify-center items-center">
            <img
              src={imgBoy}
              alt=""
              aria-hidden="true"
              className="h-[18rem] lg:h-[20rem] xl:h-[24rem] w-auto object-contain"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}