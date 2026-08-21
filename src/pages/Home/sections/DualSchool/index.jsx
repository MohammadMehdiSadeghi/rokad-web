// DualSchool.jsx
import Container from "../../../../layout/Container";
import SchoolCard from "./SchoolCard";

const boyIllustration = "/assets/DualSchool/boy-illustration.png";
const girlIllustration = "/assets/DualSchool/girl-illustration.svg";
const boysCardPattern = "/assets/DualSchool/SchoolSelection-Boys.png";
const girlsCardPattern = "/assets/DualSchool/SchoolSelection-Girls.png";
const patternBg = "/assets/DualSchool/Schools-Pattern.png";

export default function DualSchool() {
  return (
    <section
      id="schools"
      className="relative bg-white w-full snap-start py-[4rem] sm:py-[5rem] lg:py-[6rem] px-4 sm:px-6 lg:px-8 overflow-hidden flex flex-col justify-center"
    >
      {/* ── Background Pattern Layer ── */}
      <div
        className="absolute inset-0 w-full h-full z-0 pointer-events-none 
                [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] 
                [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]"
      >
        <img
          src={patternBg}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-70"
        />
      </div>

      <Container className="relative z-10">
        {/* Title - heading/section: 53px در دسکتاپ */}
        <h2 className="text-center font-black text-[1.5rem] sm:text-[2.25rem] lg:text-[3.3125rem] text-[#292827] mb-[1.5rem] sm:mb-[2rem] lg:mb-[1.5rem] leading-[1.3] sm:leading-[1.4] flex flex-wrap justify-center items-center gap-x-2 sm:gap-x-3">
          <span className="text-magenta inline-block rotate-3">دخترونه</span>
          <span className="inline-block -rotate-3">یا</span>
          <span className="text-navy-alt inline-block rotate-3">پسرونه</span>
          <span className="inline-block -rotate-3">، رکاد</span>
          <span className="inline-block -rotate-3"> مسیرته</span>
        </h2>

        {/* Subtitle - body/lead: 18px */}
        <p className="text-center font-semibold text-[1rem] sm:text-[1.0625rem] lg:text-[1.125rem] leading-[1.7] text-[#292827] max-w-[32.5rem] mx-auto mb-[4rem] sm:mb-[4rem] lg:mb-[4rem]">
          هر دو شعبه با محیطی امن، منتورهای مجرب و اکوسیستم اختصاصی. فقط کافیه
          مسیر خودت رو انتخاب کنی.
        </p>

        {/* Grid - card-gap: 24px (space.6) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1.5rem]">
                  <SchoolCard
                    theme="boys"
                    category="مدرسه پسرانه"
                    title="هنرستان‌پسرانه‌"
                    meta="مشهد | فرامرز عباسی ۳۳"
                    chips={["شبکه و نرم‌افزار"]}
                    ctaLabel="پیش‌ثبت‌نام"
                    illustration={boyIllustration}
                    pattern={boysCardPattern}
                  />
                  <SchoolCard
                    theme="girls"
                    category="مدرسه دخترانه"
                    title="هنرستان‌دخترانه‌"
                    meta="مشهد | فرامرز عباسی ۵۴"
                    chips={["شبکه و نرم‌افزار"]}
                    ctaLabel="پیش‌ثبت‌نام"
                    illustration={girlIllustration}
                    pattern={girlsCardPattern}
                  />
                </div>
      </Container>
    </section>
  );
}