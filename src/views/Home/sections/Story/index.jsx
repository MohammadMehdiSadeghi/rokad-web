import Container from "../../../../layout/Container";

const yarnIllustration = "/assets/home/Story/yarn-illustration.png";
const vectorIcon = "/assets/home/Story/Vector.svg";



export default function Story() {
  return (
    <section id="about" className="py-[4rem] sm:py-[5rem] lg:py-[6rem] w-full px-4 sm:px-6 lg:px-8 bg-[#F6F6F6]">
      {/* تغییر lg به xl برای رفع باگ در سایز 1024px */}
      <Container className="grid grid-cols-1 xl:grid-cols-[1.1fr_0.9fr] gap-8 sm:gap-16 xl:gap-40 items-center">
        {/* ── ستون راست: تصویر ── */}
        <div className="relative flex items-start justify-center xl:justify-start -mt-2">
          <div className="relative w-full max-w-[26.25rem] sm:max-w-[30rem] xl:max-w-[35rem]">
            <img
              src={yarnIllustration}
              alt="تصویر چنگال با ماکارونی — نماد تفاوت رکاد"
              loading="lazy"
              className="w-full h-auto object-contain drop-shadow-2xl -translate-x-[4%] -translate-y-[2%]"
            />


          </div>
        </div>

        {/* ── ستون چپ: متن ── */}
        <div className="max-w-full xl:max-w-[31.25rem]">
          <h2 className="font-black text-[1.5rem] sm:text-[2.25rem] lg:text-[3.3125rem] leading-[1.3] sm:leading-[1.35] mb-[1.5rem] sm:mb-[2rem]">
            <span className="inline-block rotate-3">چرا</span>{" "}
            <span className="inline-block text-teal-wordmark -rotate-3">
              رکاد
            </span>{" "}
            <span className="inline-block rotate-3">یه</span>{" "}
            <span className="inline-block -rotate-3">مدرسه</span>{" "}
            <span className="inline-block rotate-3">معمولی</span>{" "}
            <span className="inline-block -rotate-3">نیست؟</span>
          </h2>
          <p className="text-[1rem] sm:text-[1.0625rem] lg:text-[1.125rem] leading-[1.6] sm:leading-[1.7] text-navy/70 max-w-full xl:max-w-[28.75rem] mb-[1.5rem] sm:mb-[2rem]">
            ما هنرستان رو با اکوسیستم استارتاپی و بازار کار واقعی ترکیب کردیم.
            اینجا فقط کتاب نمی‌خونی؛ روی چالش‌های واقعی کار می‌کنی، با منتورهای
            متخصص همراهی می‌شی و توی محیطی امن، جرأت شکست خوردن و دوباره پاشدن
            رو یاد می‌گیری.
          </p>

          {/* CTA Button */}
          <div className="flex justify-start items-center w-full mb-[1.5rem] sm:mb-[2rem]">
            <span className="relative inline-block rotate-[2deg] hover:rotate-0 transition-transform duration-300">
              <span className="absolute inset-0 translate-x-[0.1875rem] translate-y-[0.1875rem] rounded-[1rem] [corner-shape:squircle] bg-teal-alt" />
              <span className="relative flex items-center gap-1.5 bg-[#E4F4F2] border-2 border-teal rounded-[0.9375rem] [corner-shape:squircle] px-3 sm:px-5 py-1.5 sm:py-2.5 font-bold text-[0.9375rem] text-teal-text cursor-pointer whitespace-nowrap
                transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-md">
                <span>ادامه داستان رکاد</span>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </span>
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}