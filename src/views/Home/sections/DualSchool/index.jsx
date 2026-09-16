// DualSchool.jsx
import Container from "../../../../layout/Container";
import SchoolCard from "./SchoolCard";

const boyIllustration = "/assets/home/DualSchool/boy-illustration.png";
const girlIllustration = "/assets/home/DualSchool/girl-illustration.svg";
const boysCardPattern = "/assets/home/DualSchool/SchoolSelection-Boys.png";
const girlsCardPattern = "/assets/home/DualSchool/SchoolSelection-Girls.png";
const patternBg = "/assets/home/DualSchool/Schools-Pattern.png";

export default function DualSchool() {
  return (
    <section
      id="schools"
      className="relative bg-white w-full snap-start pt-[1.5rem] sm:pt-[2.5rem] lg:pt-[3.5rem] pb-[3.5rem] sm:pb-[4.5rem] lg:pb-[5.5rem] overflow-hidden flex flex-col justify-center"
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
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      <Container className="relative z-10">
        {/* هدینگ فقط برای سئو — بصری حذف شده و فقط کارت‌ها نمایش داده می‌شن */}
        <h2 className="sr-only">
          دخترونه یا پسرونه؟ هنرستان‌های دخترانه و پسرانه رکاد در مشهد
        </h2>

        {/* Grid — کارت‌های واکنش‌گرا و هم‌تراز */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-stretch">
          <div className="w-full h-full">
            <SchoolCard
              theme="boys"
              category="مدرسه پسرانه"
              title="هنرستان‌ پسرانه‌"
              meta="مشهد | فرامرز عباسی ۳۳"
              chips={["شبکه و نرم افزار رایانه"]}
              ctaLabel="پیش‌ثبت‌نام"
              illustration={boyIllustration}
              pattern={boysCardPattern}
              seoText="هنرستان پسرانه رکاد در مشهد، رشته شبکه و نرم‌افزار رایانه با آموزش پروژه‌محور، منتورهای متخصص و اکوسیستم استارتاپی — پیش‌ثبت‌نام باز است."
            />
          </div>
          <div className="w-full h-full">
            <SchoolCard
              theme="girls"
              category="مدرسه دخترانه"
              title="هنرستان‌ دخترانه‌"
              meta="مشهد | فرامرز عباسی ۵۴"
              chips={["شبکه و نرم افزار رایانه"]}
              ctaLabel="پیش‌ثبت‌نام"
              illustration={girlIllustration}
              pattern={girlsCardPattern}
              seoText="هنرستان دخترانه رکاد در مشهد، رشته شبکه و نرم‌افزار رایانه با آموزش پروژه‌محور، منتورهای متخصص و اکوسیستم استارتاپی — پیش‌ثبت‌نام باز است."
            />
          </div>
        </div>
      </Container>
    </section>
  );
}