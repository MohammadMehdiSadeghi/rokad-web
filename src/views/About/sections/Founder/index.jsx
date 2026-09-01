import Container from "../../../../layout/Container";

const patternBg = "/assets/Pattern/layout-pattern.png";
const founderPhoto = "/assets/about/Founder/founder.png";

const credentials = [
  "کارشناسی ارشد کارآفرینی",
  "مشاور مدیرکل آموزش و پرورش خراسان رضوی",
  "معاون آموزش متوسطه ناحیه ۲ مشهد",
  "معاون پژوهش و برنامه‌ریزی ناحیه ۲ مشهد",
  "مجری و گوینده سابق صداوسیمای خراسان رضوی",
  "مشاور جوان رئیس اداره ناحیه ۲",
  "پیشکسوت رویدادهای استارتاپی نوجوانان",
  "مدرس مهارت‌های نرم برای نوجوانان",
];

export default function AboutFounder() {
  return (
    <section className="relative py-[4rem] sm:py-[5rem] lg:py-[6rem] w-full px-4 sm:px-6 lg:px-8 bg-[#E4F4F2] overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]">
        <img src={patternBg} alt="" aria-hidden="true" className="w-full h-full object-cover opacity-60" />
      </div>

      <Container className="relative z-10">
        {/* Title */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <h2 className="font-black text-[1.5rem] sm:text-[2.25rem] lg:text-[3.3125rem] leading-[1.3] mb-4 sm:mb-6">
            <span className="inline-block rotate-1">آدمی</span>{" "}
            <span className="inline-block -rotate-1">که</span>{" "}
            <span className="inline-block rotate-1 text-teal">رکاد</span>{" "}
            <span className="inline-block -rotate-1">رو</span>{" "}
            <span className="inline-block rotate-1 text-magenta">ساخت</span>
          </h2>
        </div>

        {/* Card */}
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Shadow / offset */}
          <div className="absolute top-[0.375rem] left-[0.375rem] w-full h-full bg-[#21295A] rounded-[1.5rem] sm:rounded-[2.5rem] lg:rounded-[3rem] [corner-shape:squircle]" />

          {/* Main card */}
          <div className="relative z-10 bg-[#F4F5FB] border-[0.125rem] border-[#21295A] rounded-[1.5rem] sm:rounded-[2.5rem] lg:rounded-[3rem] [corner-shape:squircle] overflow-hidden">
            {/* Pattern overlay */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <img src={patternBg} alt="" aria-hidden="true" className="w-full h-full object-cover opacity-10" />
            </div>

            {/* Content: flex row */}
            <div className="relative z-10 flex flex-col lg:flex-row">
              {/* Left: credentials + social */}
              <div className="flex-1 p-6 sm:p-8 lg:p-10 order-2 lg:order-1">
                <h3 className="font-black text-[1.25rem] sm:text-[1.5rem] lg:text-[1.875rem] text-[#21295A] leading-[1.3] mb-6 sm:mb-8">
                  مدیرعامل مؤسسه آموزشی و شتاب‌دهی رکاد
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {credentials.map((cred, i) => (
                    <div key={i} className="flex items-start gap-2 sm:gap-3">
                      <span className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#21295A]/10 flex items-center justify-center mt-0.5">
                        <svg viewBox="0 0 24 24" fill="none" className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-teal">
                          <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span className="text-[0.8125rem] sm:text-[0.875rem] lg:text-[0.9375rem] text-[#21295A]/80 leading-[1.7]">{cred}</span>
                    </div>
                  ))}
                </div>

                {/* Social links */}
                <div className="flex justify-center sm:justify-start gap-3 mt-6 sm:mt-8">
                  {[0, 1, 2, 3].map((i) => (
                    <a key={i} href="#" className="w-10 h-10 sm:w-12 sm:h-12 bg-[#21295A] rounded-[0.625rem] [corner-shape:squircle] flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                      <span className="text-white text-xs font-bold">&nbsp;</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Right: photo */}
              <div className="relative w-full lg:w-[40%] min-h-[250px] sm:min-h-[300px] lg:min-h-[420px] order-1 lg:order-2">
                <img
                  src={founderPhoto}
                  alt="مدیرعامل رکاد"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
