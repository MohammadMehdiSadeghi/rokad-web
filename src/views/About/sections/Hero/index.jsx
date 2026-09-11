"use client";
import Container from "../../../../layout/Container";
import { useEnrollment } from "../../../../lib/EnrollmentContext";

const patternBg = "/assets/Pattern/layout-pattern.png";
const characterImg = "/assets/about/Hero/hero-character.png";

const headlineWords = [
  { text: "جایی", deg: 2, color: "text-ink" },
  { text: "که", deg: -1.5, color: "text-ink" },
  { text: "نوجوون", deg: 1.5, color: "text-teal" },
  { text: "فقط", deg: -2, color: "text-ink" },
  { text: "یاد", deg: 3, color: "text-ink" },
  { text: "نمی‌گیره،", deg: -1.5, color: "text-ink" },
];

const badges = [
  { label: "اولین هنرستان استارتاپی ایران", color: "bg-teal" },
  { label: "۲۲۰۰+ رکادی", color: "bg-magenta" },
  { label: "٪۷۵ نرخ اشتغال", color: "bg-orange" },
];

export default function AboutHero() {
  const { openEnrollment } = useEnrollment();
  return (
    <section className="relative max-h-[100svh] lg:h-[100svh] w-full px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 lg:pt-10 pb-8 sm:pb-10 lg:pb-12 bg-white overflow-hidden flex flex-col justify-start">
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]">
        <img src={patternBg} alt="" aria-hidden="true" draggable="false" className="w-full h-full object-cover opacity-30 select-none" />
      </div>

      <Container className="relative z-10 w-full min-h-0">
        {/* ── بریدکرامب ── */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal/10 rounded-[0.5rem] mb-4 sm:mb-6 lg:mb-8">
          <a href="/" className="text-[0.875rem] font-medium text-teal hover:text-teal-text transition-colors">خانه</a>
          <span className="text-[0.875rem] text-ink/30">|</span>
          <span className="text-[0.875rem] font-semibold text-ink/60">درباره رکاد</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center min-h-0">
          {/* متنها — سمت راست (RTL) */}
          <div className="order-2 lg:order-1 min-h-0">
            <h1 className="font-black text-[1.5rem] sm:text-[2.25rem] lg:text-[3.25rem] xl:text-[3.75rem] leading-[1.2] mb-4 sm:mb-6 lg:mb-8">
              <span className="flex flex-wrap gap-x-2 sm:gap-x-3">
                {headlineWords.map((w) => (
                  <span key={w.text} className={`inline-block ${w.color}`} style={{ transform: `rotate(${w.deg}deg)` }}>{w.text}</span>
                ))}
              </span>
              <span className="block mt-1.5 sm:mt-2 lg:mt-3">
                <span className="inline-block text-magenta" style={{ transform: "rotate(-5deg)" }}>می‌سازه.</span>
              </span>
            </h1>

            <p className="text-[0.875rem] sm:text-[1rem] lg:text-[1.0625rem] leading-[1.75] text-ink/70 max-w-xl mb-5 sm:mb-7 lg:mb-9">
              رکاد یه مدرسه‌ی معمولی نیست؛ یه اکوسیستمه که ۹ ساله داره نوجوونا رو
              آماده می‌کنه برای دنیایی که هنوز ساخته نشده. ما اولین هنرستان
              استارتاپی ایرانیم و از سال ۱۳۹۵، همراه با ۲۲۰۰+ نوجوان کارآفرین.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-5">
              {/* پیش‌ثبت‌نام کن */}
              <button
                type="button"
                onClick={openEnrollment}
                className="inline-flex items-center justify-center px-5 sm:px-8 py-2.5 sm:py-3.5 bg-teal/10 border-[0.1875rem] border-teal text-teal font-extrabold text-[0.875rem] sm:text-[1rem] rounded-[0_0.84375rem_0_0.84375rem] [corner-shape:squircle] shadow-[2px_3px_0_0_rgba(89,187,175,0.9)] transition-all duration-300 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_2px_0_0_rgba(89,187,175,0.9)]"
              >
                پیش‌ثبت‌نام کن
              </button>
              {/* داستانمون رو بخون */}
              <a
                href="#story"
                className="inline-flex items-center justify-center px-5 sm:px-8 py-2.5 sm:py-3.5 bg-[#202a5a]/10 border-[0.1875rem] border-[#202a5a] text-[#202a5a] font-extrabold text-[0.875rem] sm:text-[1rem] rounded-[0_0.84375rem_0_0.84375rem] [corner-shape:squircle] shadow-[2px_3px_0_0_rgba(32,42,90,0.9)] transition-all duration-300 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_2px_0_0_rgba(32,42,90,0.9)]"
              >
                داستانمون رو بخون
              </a>
            </div>
          </div>

          {/* تصویر شخصیت‌ها + بج‌ها — سمت چپ (RTL) */}
          <div className="order-1 lg:order-2 flex flex-col items-center justify-center min-h-0">
            {/* تصویر داخل کادر — ارتفاع با vh محدود شده تا هرگز از صفحه نزده بیرون */}
            <div className="relative w-full flex justify-center min-h-0 mb-3 sm:mb-5 lg:mb-7">
              <img
                src={characterImg}
                alt="کاراکترهای رکاد"
                className="h-auto max-h-[19vh] sm:max-h-[26vh] lg:max-h-[58svh] w-auto max-w-full object-contain select-none pointer-events-none"
              />
            </div>

            {/* بج‌های آمار — بوردر مشکی + پس‌زمینه رنگ تیره‌تر + ردیوس +۱px */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {badges.map((b, i) => {
                const rot = i % 2 === 0 ? 1 : -1;
                return (
                  <span
                    key={b.label}
                    className={`${b.color} border border-black text-white text-[0.6875rem] sm:text-[0.8125rem] lg:text-[0.875rem] font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-[0.4375rem] shadow-[2px_2px_0_0_rgba(0,0,0,0.9)]`}
                    style={{ transform: `rotate(${rot}deg)` }}
                  >
                    {b.label}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
