// Schools.jsx — سکشن «رکاد رو از نزدیک ببینی؟» (درباره ما)
import Container from "../../../../layout/Container";
import SchoolCard from "./SchoolCard";

const boyIllustration = "/assets/about/Schools/boy-illustration.png";
const girlIllustration = "/assets/about/Schools/girl-illustration.svg";
const boysCardPattern = "/assets/about/Schools/SchoolSelection-Boys.png";
const girlsCardPattern = "/assets/about/Schools/SchoolSelection-Girls.png";
const patternBg = "/assets/about/Schools/Schools-Pattern.png";

export default function AboutSchools() {
  return (
    <section className="relative bg-white w-full py-[3.5rem] sm:py-[4.5rem] lg:py-[5rem] px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* ── Background Pattern Layer ── */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]">
        <img src={patternBg} alt="" aria-hidden="true" className="w-full h-full object-cover opacity-60" />
      </div>

      <Container className="relative z-10">
        {/* ── تیتر سکشن ── */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <h2 className="font-black text-[1.5rem] sm:text-[2.25rem] lg:text-[3.3125rem] leading-[1.3] mb-4 sm:mb-6">
            <span className="inline-block -rotate-2 text-navy-alt">می‌خوای</span>{" "}
            <span className="inline-block rotate-1">از</span>{" "}
            <span className="inline-block -rotate-1">نزدیک</span>{" "}
            <span className="inline-block rotate-2 text-teal">رکاد</span>{" "}
            <span className="inline-block -rotate-1">رو</span>{" "}
            <span className="inline-block rotate-1 text-navy-alt">ببینی؟</span>
          </h2>
        </div>

        {/* ── Grid — دقیقاً مثل DualSchool صفحه اصلی ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1.5rem] lg:gap-[2rem]">
          <div className="mx-auto w-full md:w-[96%] xl:w-[93%] h-full">
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
          <div className="mx-auto w-full md:w-[96%] xl:w-[93%] h-full">
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