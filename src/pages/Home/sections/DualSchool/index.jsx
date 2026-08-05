// DualSchool.jsx
import Container from "../../../../layout/Container";
import SchoolCard from "./SchoolCard";

const boyIllustration = "/assets/DualSchool/boy-illustration.png";
const girlIllustration = "/assets/DualSchool/girl-illustration.svg";
const boysCardPattern = "/assets/DualSchool/SchoolSelection-Boys.png";
const girlsCardPattern = "/assets/DualSchool/SchoolSelection-Girls.png";
// پترن پس‌زمینه‌ی کل سکشن
const patternBg = "/assets/DualSchool/Schools-Pattern.png";

export default function DualSchool() {
  return (
    <section
      id="schools"
      className="relative bg-white pt-[90px] pb-14 sm:pb-20 px-4 sm:px-6 overflow-hidden"
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
        {/* Title - 53px, 900, #292827 */}
        <h2 className="text-center font-black text-[30px] xs:text-[34px] sm:text-[42px] lg:text-[53px] text-[#292827] mb-4 leading-[1.5] sm:leading-[1.4] flex flex-wrap justify-center items-center gap-x-2 sm:gap-x-3">
          <span className="text-magenta inline-block rotate-3">دخترونه</span>
          <span className="inline-block -rotate-3">یا</span>
          <span className="text-navy-alt inline-block rotate-3">پسرونه</span>
          <span className="inline-block -rotate-3">، رکاد</span>
          <span className="inline-block -rotate-3"> مسیرته</span>
        </h2>

        {/* Subtitle - 18px, 600, #292827 */}
        <p className="text-center font-semibold text-[14px] sm:text-[18px] leading-[1.7] text-[#292827] max-w-[520px] mx-auto mb-[133px]">
          هر دو شعبه با محیطی امن، منتورهای مجرب و اکوسیستم اختصاصی. فقط کافیه
          مسیر خودت رو انتخاب کنی.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <SchoolCard
            theme="boys"
            title="هنرستان‌پسرانه‌"
            meta="مشهد | فرامرز عباسی ۳۳"
            chips={["شبکه و نرم‌افزار"]}
            ctaLabel="پیش‌ثبت‌نام"
            illustration={boyIllustration}
            pattern={boysCardPattern}
          />
          <SchoolCard
            theme="girls"
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