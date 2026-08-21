import Container from "../../../../layout/Container";

// اصلاح مسیر عکس‌ها (حذف کلمه public)
const imgBoy = "/assets/finalCTA/Cta-Boys-Vector.png";
const imgGirl = "/assets/finalCTA/Cta-Girls-Vector.png";
const pattern = "/assets/unassigned/pattern-boxes.png";

export default function FinalCTA() {
  return (
    <section
      className="relative overflow-hidden bg-teal pt-[4rem] sm:pt-[5rem] lg:pt-[6rem] pb-0 px-4 sm:px-6 lg:px-8"
      dir="rtl"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img
          src={pattern}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover scale-125 select-none opacity-100"
        />
      </div>

      <Container className="relative z-20">
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-8 lg:gap-4">
          {/* Girl Image (سمت چپ در دسکتاپ) */}
          <div className="hidden sm:flex shrink-0 pointer-events-none select-none sm:w-[20%] lg:w-[26%] justify-center">
            <img
              src={imgGirl}
              alt=""
              aria-hidden="true"
              className="h-[12rem] sm:h-[16rem] lg:h-[25rem] xl:h-[31.25rem] w-auto object-contain object-bottom"
            />
          </div>

          {/* Text Content (وسط) */}
          <div className="flex flex-col items-center text-center w-full sm:w-[60%] lg:w-[48%] mb-6 sm:mb-8 lg:mb-12">
            <h2 className="font-black text-[2rem] sm:text-[3rem] lg:text-[4.8125rem] xl:text-[4.8125rem] leading-[1.2] text-white mb-[1.5rem] sm:mb-[2rem] flex flex-wrap justify-center gap-x-2">
              <span className="inline-block rotate-[3deg]">برای</span>
              <span className="inline-block rotate-[-3deg]">ساختن</span>
              <span className="inline-block rotate-[3deg]">آینده</span>
              <span className="inline-block rotate-[-3deg]">همین</span>
              <span className="inline-block rotate-[3deg]">امروز</span>
              <span className="inline-block rotate-[-3deg]">اقدام</span>
              <span className="inline-block rotate-[3deg]">کن</span>
            </h2>

            <p className="text-[1rem] sm:text-[1.0625rem] lg:text-[1.125rem] font-semibold leading-[1.7] text-white max-w-[33.75rem] mb-[1.5rem] sm:mb-[2rem] lg:mb-[2.5rem]">
              مصاحبه‌ی رایگان و تعیین سطح برای همه‌ی متقاضی‌ها. کافیه فرم رو پر
              کنی، بقیه‌ش با ماست.
            </p>

            {/* دکمه */}
            <a
              href="#"
              className="inline-flex items-center justify-center w-full sm:w-auto min-w-[13rem] sm:min-w-[18rem] h-[3.5rem] sm:h-[4rem] lg:h-[4.5rem] 
              px-8 sm:px-10 bg-[#292827] text-white font-extrabold text-[0.9375rem] sm:text-[1.125rem] lg:text-[1.25rem] rounded-[0.75rem] sm:rounded-[1rem] [corner-shape:squircle]
              hover:opacity-90 transition-opacity duration-300 cursor-pointer"
            >
              تکمیل فرم پیش‌ثبت‌نام
            </a>
          </div>

          {/* Boy Image (سمت راست در دسکتاپ) */}
          <div className="hidden sm:flex shrink-0 pointer-events-none select-none sm:w-[20%] lg:w-[26%] justify-center">
            <img
              src={imgBoy}
              alt=""
              aria-hidden="true"
              className="h-[12rem] sm:h-[16rem] lg:h-[25rem] xl:h-[31.25rem] w-auto object-contain object-bottom"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}