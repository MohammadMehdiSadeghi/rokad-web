import Container from "../../../../layout/Container";

const patternBg = "/assets/about/StatsSection/TrustSection-Pattern.png";
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

function ShieldCheckIcon({ className }) {
  return (
    <svg viewBox="0 0 21 21" fill="none" className={className}>
      <path d="M10.5 2.625l2.7 5.475 6.037.879-4.368 4.256 1.03 6.012L10.5 16.2l-5.399 2.837 1.03-6.012L1.763 8.98l6.037-.879L10.5 2.625z" fill="#21295A" />
      <path d="M7.875 10.5l1.75 1.75 3.5-3.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function AboutFounder() {
  return (
    <section className="relative py-[4rem] sm:py-[5rem] lg:py-[6rem] w-full px-4 sm:px-6 lg:px-8 bg-[#E4F4F2] overflow-hidden">

          <Container className="relative z-10">
        <div className="relative mx-auto max-w-6xl">
          {/* شدو سرمهای سخت 8px مطابق فیگما */}
          <div className="absolute top-[0.5rem] left-[0.5rem] w-full h-full bg-[#202A5A] rounded-tl-[2.1875rem] rounded-br-[2.1875rem] rounded-tr-none rounded-bl-none [corner-shape:squircle]" />

          {/* کارت اصلی — bg #E9EAEF از فیگما */}
          <div className="relative z-10 bg-[#E9EAEF] border-[0.125rem] border-[#202A5A] rounded-tl-[2.1875rem] rounded-br-[2.1875rem] rounded-tr-none rounded-bl-none [corner-shape:squircle] overflow-hidden">
            {/* Pattern overlay */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <img src={patternBg} alt="" aria-hidden="true" className="w-full h-full object-cover opacity-100" />
            </div>

            {/* Content: flex row (RTL) */}
            <div className="relative z-10 flex flex-col lg:flex-row">
              {/* Right: photo */}
              <div className="relative w-full lg:w-[38%] min-h-[250px] sm:min-h-[300px] lg:min-h-[400px]">
                <img src={founderPhoto} alt="مدیرعامل رکاد" className="absolute inset-0 w-full h-full object-cover object-top" />
              </div>

              {/* Left: credentials + social */}
              <div className="flex-1 p-5 sm:p-7 lg:p-9">
                {/* Title */}
                <h3 className="font-black text-[clamp(1.125rem,1.2vw+0.75rem,1.75rem)] text-[#202A5A] leading-[1.4] mb-6 sm:mb-8 whitespace-normal sm:whitespace-nowrap">
                  مدیرعامل مؤسسه آموزشی و شتاب‌دهی رکاد
                </h3>

                {/* Credentials grid */}
                <div className="flex flex-wrap gap-2.5 justify-start">
                  {credentials.map((cred, i) => (
                    <div
                      key={i}
                      className="inline-flex items-center gap-2.5 rounded-full px-3.5 sm:px-4 py-1.5 sm:py-2"
                      style={{ backgroundColor: "#BABDCC", borderRadius: "7.3px" }}
                    >
                      <ShieldCheckIcon className="w-5 h-5 sm:w-[1.3125rem] sm:h-[1.3125rem] flex-shrink-0" />
                      <span className="text-[0.8rem] sm:text-[0.85rem] lg:text-[0.9rem] text-[#202A5A] font-semibold leading-[1.6] whitespace-normal">{cred}</span>
                    </div>
                  ))}
                </div>

                {/* Social links */}
                <div className="flex justify-center gap-3 mt-6 sm:mt-8">
                  {socialLinks.map((link, i) => (
                    <a
                      key={i}
                      href={link.href}
                      aria-label={link.label}
                      className="w-10 h-10 sm:w-11 sm:h-11 bg-[#202A5A] rounded-[0_0.84375rem_0_0.84375rem] [corner-shape:squircle] flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
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
