import Container from "../../../../layout/Container";

// اصلاح مسیر عکس‌ها (حذف کلمه public)
const imgBoy = "/assets/finalCTA/Cta-Boys-Vector.png";
const imgGirl = "/assets/finalCTA/Cta-Girls-Vector.png";
const pattern = "/assets/unassigned/pattern-boxes.png";

export default function FinalCTA() {
  return (
    <section
      // حذف pb برای چسبیدن کامل کاراکترها به پایین
      className="relative overflow-hidden bg-teal pt-[70px] pb-0 px-4 sm:px-6"
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
          <div className="hidden lg:flex shrink-0 pointer-events-none select-none w-[26%] justify-center">
            <img
              src={imgGirl}
              alt=""
              aria-hidden="true"
              className="h-[400px] xl:h-[500px] w-auto object-contain object-bottom"
            />
          </div>

          {/* Text Content (وسط) */}
          <div className="flex flex-col items-center text-center w-full lg:w-[48%] mb-10 lg:mb-12">
            <h2 className="font-black text-[28px] xs:text-[34px] sm:text-[44px] lg:text-[60px] xl:text-[72px] leading-[1.4] text-white mb-6 sm:mb-7 flex flex-wrap justify-center gap-x-2">
              <span className="inline-block rotate-[3deg]">برای</span>
              <span className="inline-block rotate-[-3deg]">ساختن</span>
              <span className="inline-block rotate-[3deg]">آینده</span>
              <span className="inline-block rotate-[-3deg]">همین</span>
              <span className="inline-block rotate-[3deg]">امروز</span>
              <span className="inline-block rotate-[-3deg]">اقدام</span>
              <span className="inline-block rotate-[3deg]">کن</span>
            </h2>

            <p className="text-[14px] sm:text-[20px] lg:text-[22px] font-semibold leading-[1.9] text-white max-w-[540px] mb-8 sm:mb-10">
              مصاحبه‌ی رایگان و تعیین سطح برای همه‌ی متقاضی‌ها. کافیه فرم رو پر
              کنی، بقیه‌ش با ماست.
            </p>

            {/* دو دکمه با استایل کارت و corner-shape */}
            <div className="flex items-center justify-center flex-wrap gap-4 sm:gap-6 w-full">
              {/* دکمه سمت راست (تکمیل فرم پیش‌ثبت‌نام) */}
              <div className="relative inline-flex items-center justify-center rotate-[1.5deg] transition-all duration-300 hover:rotate-0">
                {/* خود دکمه */}
                <a
                  href="#"
                  className="relative z-10 inline-flex items-center justify-center w-full sm:w-auto min-w-[200px] sm:min-w-[240px] h-[56px] sm:h-[64px] 
                  px-6 bg-[#292827] text-white font-extrabold text-[14px] sm:text-[18px] rounded-[16px] [corner-shape:squircle]
                  hover:opacity-90 transition-opacity duration-300 cursor-pointer"
                >
                  تکمیل فرم پیش‌ثبت‌نام
                </a>
              </div>

              {/* دکمه سمت چپ (RokadSchool.ir) */}
              <div className="relative inline-flex items-center justify-center -rotate-[1.5deg] transition-all duration-300 hover:rotate-0">
                {/* لایه پشتی سرمه‌ای */}                {/* خود دکمه */}
                <a
                  href="#"
                  className="relative z-10 inline-flex items-center justify-center w-full sm:w-auto min-w-[200px] sm:min-w-[240px] h-[56px] sm:h-[64px] 
                  px-6 bg-white text-[#292827] font-extrabold text-[14px] sm:text-[18px] rounded-[16px] [corner-shape:squircle]
                  hover:opacity-90 transition-opacity duration-300 cursor-pointer"
                >
                  RokadSchool.ir
                </a>
              </div>
            </div>
          </div>

          {/* Boy Image (سمت راست در دسکتاپ) */}
          <div className="hidden lg:flex shrink-0 pointer-events-none select-none w-[26%] justify-center">
            <img
              src={imgBoy}
              alt=""
              aria-hidden="true"
              className="h-[400px] xl:h-[500px] w-auto object-contain object-bottom"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
