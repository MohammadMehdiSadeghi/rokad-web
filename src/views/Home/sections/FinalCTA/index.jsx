"use client";

import Container from "../../../../layout/Container";
import { useEnrollment } from "../../../../lib/EnrollmentContext";

// اصلاح مسیر عکس‌ها (حذف کلمه public)
const imgBoy = "/assets/home/finalCTA/Cta-Boys-Vector.png";
const imgGirl = "/assets/home/finalCTA/Cta-Girls-Vector.png";
const pattern = "/assets/unassigned/pattern-boxes.png";
const mobileHero = "/assets/home/finalCTA/cta-mobile-hero.png";

export default function FinalCTA() {
  const { openEnrollment } = useEnrollment();

  return (
    <section
          className="relative overflow-hidden bg-teal min-h-[80vh] flex items-center px-4 sm:px-6 lg:px-8"
          dir="rtl"
        >
          {/* Background Pattern — همه سایزها */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <img
              src={pattern}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover scale-125 select-none opacity-100"
            />
          </div>

          {/* Girl Image — چسبیده به لبه پایین سکشن (فقط دسکتاپ) */}
                    <div className="hidden lg:block absolute bottom-0 right-[8%] pointer-events-none select-none z-10">
            <img
              src={imgGirl}
              alt=""
              aria-hidden="true"
              className="h-[20rem] lg:h-[26rem] xl:h-[30rem] w-auto object-contain"
            />
          </div>

          {/* Boy Image — چسبیده به لبه پایین سکشن (فقط دسکتاپ) */}
                    <div className="hidden lg:block absolute bottom-0 left-[8%] pointer-events-none select-none z-10">
            <img
              src={imgBoy}
              alt=""
              aria-hidden="true"
              className="h-[20rem] lg:h-[26rem] xl:h-[30rem] w-auto object-contain"
            />
          </div>

          {/* Mobile Hero Image — فقط زیر lg (موبایل و تبلت) */}
          <div className="lg:hidden absolute bottom-0 inset-x-0 flex justify-center pointer-events-none select-none z-10">
            <img
              src={mobileHero}
              alt=""
              aria-hidden="true"
              className="h-[7rem] sm:h-[10rem] w-auto object-contain"
            />
          </div>

          <Container className="relative z-20 w-full">
            <div className="flex flex-col lg:flex-row items-center lg:items-center justify-center gap-6 lg:gap-4">
              {/* Text Content */}
              <div className="flex flex-col items-center text-center w-full lg:w-[48%] self-center mb-0">
                <h2
                  className="text-[2.2rem] sm:text-[3rem] lg:text-[3.5rem] xl:text-[3.75rem] leading-[1.5] sm:leading-[1.5] lg:leading-[1.5] text-white mb-[0.5rem] sm:mb-[0.75rem] lg:mb-[1rem] flex flex-col items-center gap-y-1 sm:gap-y-2"
                  style={{ fontWeight: 950 }}
                >
                  <span className="flex flex-wrap justify-center gap-x-2 gap-y-1">
                    <span className="inline-block rotate-[3deg]">برای</span>
                    <span className="inline-block rotate-[-3deg]">ساختن</span>
                    <span className="inline-block rotate-[3deg]">آینده</span>
                  </span>
                  <span className="flex flex-wrap justify-center gap-x-2 gap-y-1">
                    <span className="inline-block rotate-[-3deg]">همین</span>
                    <span className="inline-block rotate-[3deg]">امروز</span>
                    <span className="inline-block rotate-[-3deg]">اقدام</span>
                    <span className="inline-block rotate-[3deg]">کن</span>
                  </span>
                </h2>

                {/* ساب‌تایتل */}
                <p className="text-[1rem] sm:text-[1.0625rem] lg:text-[1.125rem] font-semibold leading-[1.7] sm:leading-[1.7] text-white/90 max-w-[33.75rem] mb-[2rem] sm:mb-[2.5rem] lg:mb-[3rem]">
                  مصاحبه‌ی رایگان و تعیین سطح برای همه‌ی متقاضی‌ها. کافیه فرم رو
                  پر کنی، بقیه‌ش با ماست.
                </p>

                {/* دکمه */}
                <button
                  type="button"
                  onClick={openEnrollment}
                  className="inline-flex items-center justify-center w-full sm:w-auto max-w-[90%] sm:max-w-none min-w-[10rem] sm:min-w-[14rem] lg:min-w-[16rem] h-[3rem] sm:h-[3.5rem] lg:h-[4rem]
                              px-5 sm:px-7 lg:px-8 bg-ink text-white font-extrabold text-[0.875rem] sm:text-[1rem] lg:text-[1.125rem] rounded-[0.625rem] sm:rounded-[0.75rem] lg:rounded-[1rem] [corner-shape:squircle]
                              hover:bg-ink-faq transition-colors duration-300 cursor-pointer"
                >
                  تکمیل فرم پیش‌ثبت‌نام
                </button>
              </div>
            </div>
          </Container>
        </section>
  );
}