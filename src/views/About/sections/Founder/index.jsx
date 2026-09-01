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

const socialLinks = [
  { label: "لینکدین", href: "#" },
  { label: "اینستاگرام", href: "#" },
  { label: "توییتر", href: "#" },
  { label: "وبسایت", href: "#" },
];

export default function AboutFounder() {
  return (
    <section className="relative py-[4rem] sm:py-[5rem] lg:py-[6rem] w-full px-4 sm:px-6 lg:px-8 bg-[#E4F4F2] overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
        <img src={patternBg} alt="" aria-hidden="true" className="w-full h-full object-cover opacity-40 mix-blend-multiply" />
      </div>

      <Container className="relative z-10">
        {/* Card */}
        <div className="relative mx-auto max-w-6xl">
          {/* Shadow / offset */}
          <div className="absolute top-[0.375rem] left-[0.375rem] w-full h-full bg-[#21295A] rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[2.5rem] [corner-shape:squircle]" />

          {/* Main card */}
          <div className="relative z-10 bg-[#F0F1F8] border-[0.125rem] border-[#21295A] rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[2.5rem] [corner-shape:squircle] overflow-hidden">
            {/* Pattern overlay */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <img src={patternBg} alt="" aria-hidden="true" className="w-full h-full object-cover opacity-10" />
            </div>

            {/* Content: flex row (RTL - first child = right side) */}
            <div className="relative z-10 flex flex-col lg:flex-row">
              {/* Right (RTL): photo */}
              <div className="relative w-full lg:w-[38%] min-h-[250px] sm:min-h-[300px] lg:min-h-[400px]">
                <img
                  src={founderPhoto}
                  alt="مدیرعامل رکاد"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
              </div>

              {/* Left (RTL): credentials + social */}
              <div className="flex-1 p-5 sm:p-7 lg:p-9">
                {/* Title */}
                <h3 className="font-black text-[1.125rem] sm:text-[1.375rem] lg:text-[1.75rem] text-[#21295A] leading-[1.4] mb-6 sm:mb-8">
                  مدیرعامل مؤسسه آموزشی و شتاب‌دهی رکاد
                </h3>

                {/* Credentials grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                  {credentials.map((cred, i) => (
                                    <div
                                      key={i}
                                      className="flex items-center gap-2.5 bg-[#E6E4F2] rounded-full px-3.5 sm:px-4 py-1.5 sm:py-2 w-full"
                                    >
                                      <span className="flex-shrink-0 w-5 h-5 sm:w-5 sm:h-5 rounded-[0.3rem] bg-[#21295A] flex items-center justify-center">
                                        <svg viewBox="0 0 24 24" fill="none" className="w-3 h-3 sm:w-3 sm:h-3 text-white">
                                          <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                      </span>
                                      <span className="text-[0.8rem] sm:text-[0.85rem] lg:text-[0.9rem] text-[#21295A] font-medium leading-[1.6]">{cred}</span>
                                    </div>
                                  ))}
                                </div>

                {/* Social links - centered */}
                <div className="flex justify-center gap-3 mt-6 sm:mt-8">
                  {socialLinks.map((link, i) => (
                    <a
                      key={i}
                      href={link.href}
                      aria-label={link.label}
                      className="w-10 h-10 sm:w-11 sm:h-11 bg-[#21295A] rounded-[0.5rem] [corner-shape:squircle] flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                    >
                      <span className="text-white text-[0.7rem] font-bold">&nbsp;</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
