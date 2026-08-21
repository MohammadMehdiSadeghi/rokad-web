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
      className="relative bg-white w-full snap-start pt-[3rem] sm:pt-[4rem] lg:pt-[5rem] pb-[3rem] sm:pb-[4rem] px-4 sm:px-6 overflow-hidden flex flex-col justify-center"
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
        {/* Title */}
        <h2 className="text-center font-black text-[1.25rem] sm:text-[1.75rem] lg:text-[2.75rem] xl:text-[3.3125rem] text-[#292827] mb-3 sm:mb-4 lg:mb-6 leading-[1.4] sm:leading-[1.5] flex flex-wrap justify-center items-center gap-x-2 sm:gap-x-3">
          <span className="text-magenta inline-block rotate-3">دخترونه</span>
          <span className="inline-block -rotate-3">یا</span>
          <span className="text-navy-alt inline-block rotate-3">پسرونه</span>
          <span className="inline-block -rotate-3">، رکاد</span>
          <span className="inline-block -rotate-3"> مسیرته</span>
        </h2>

        {/* Subtitle - فاصله تا کارت‌ها دقیقاً 60px شد */}
        <p className="text-center font-semibold text-[0.875rem] sm:text-[1rem] lg:text-[1.125rem] leading-[1.7] text-[#292827] max-w-[32.5rem] mx-auto mb-[2rem] sm:mb-[2.5rem] lg:mb-[3rem]">
          هر دو شعبه با محیطی امن، منتورهای مجرب و اکوسیستم اختصاصی. فقط کافیه
          مسیر خودت رو انتخاب کنی.
        </p>

        {/* Grid - کاهش gap در سایز lg (1024px) به 8 و افزایش در xl (1280px) به 12 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 xl:gap-12">
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