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
      className="relative bg-white w-full snap-start py-[3.5rem] sm:py-[4.5rem] lg:py-[5rem] px-4 sm:px-6 lg:px-8 overflow-hidden flex flex-col justify-center"
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

        {/* Grid — گپ طبق DESIGN.md (1.5rem/2rem) و کارت‌ها نزدیک‌تر */}
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