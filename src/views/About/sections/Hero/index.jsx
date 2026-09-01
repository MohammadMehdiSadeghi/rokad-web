import Container from "../../../../layout/Container";

const patternBg = "/assets/about/Hero/Hero-Pattern.png";
const characterImg = "/assets/about/Hero/hero-character.png";

const headlineWords = [
  { text: "جایی", deg: 2, color: "text-teal" },
  { text: "که", deg: -1.5, color: "text-teal" },
  { text: "نوجوون", deg: 1.5, color: "text-teal" },
  { text: "فقط", deg: -2, color: "text-ink" },
  { text: "یاد", deg: 3, color: "text-ink" },
  { text: "نمی‌گیره،", deg: -1.5, color: "text-ink" },
];

const badges = [
  { label: "اولین هنرستان استارتاپی ایران", color: "bg-teal/10", border: "border-teal", textColor: "text-teal" },
  { label: "۲۲۰۰+ رکادی", color: "bg-magenta/10", border: "border-magenta", textColor: "text-magenta" },
  { label: "٪۷۵ نرخ اشتغال", color: "bg-orange/10", border: "border-orange", textColor: "text-orange" },
];

export default function AboutHero() {
  return (
    <section className="relative py-[4rem] sm:py-[5rem] lg:py-[6rem] w-full px-4 sm:px-6 lg:px-8 bg-[#F6F6F6] overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]">
        <img src={patternBg} alt="" aria-hidden="true" className="w-full h-full object-cover opacity-40" />
      </div>

      <Container className="relative z-10">
        {/* ── بریدکرامب ── */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal/10 rounded-[0.5rem] mb-6 sm:mb-8 lg:mb-10">
          <a href="/" className="text-[0.875rem] font-medium text-teal hover:text-teal-text transition-colors">خانه</a>
          <span className="text-[0.875rem] text-ink/30">|</span>
          <span className="text-[0.875rem] font-semibold text-ink/60">درباره رکاد</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* متنها — سمت راست (RTL) */}
          <div className="order-2 lg:order-1">
            <h1 className="font-black text-[1.75rem] sm:text-[2.5rem] lg:text-[3.5rem] xl:text-[4rem] leading-[1.2] mb-6 sm:mb-8">
              <span className="flex flex-wrap gap-x-2 sm:gap-x-3">
                {headlineWords.map((w) => (
                  <span key={w.text} className={`inline-block ${w.color}`} style={{ transform: `rotate(${w.deg}deg)` }}>{w.text}</span>
                ))}
              </span>
              <span className="block mt-2 sm:mt-3">
                <span className="inline-block text-magenta" style={{ transform: "rotate(-5deg)" }}>می‌سازه.</span>
              </span>
            </h1>

            <p className="text-[0.9375rem] sm:text-[1.0625rem] lg:text-[1.125rem] leading-[1.8] text-ink/70 max-w-xl mb-8 sm:mb-10">
              رکاد یه مدرسه‌ی معمولی نیست؛ یه اکوسیستمه که ۹ ساله داره نوجوونا رو
              آماده می‌کنه برای دنیایی که هنوز ساخته نشده. ما اولین هنرستان
              استارتاپی ایرانیم و از سال ۱۳۹۵، همراه با ۲۲۰۰+ نوجوان کارآفرین.
            </p>

            <div className="flex flex-wrap gap-4 sm:gap-5">
              {/* پیش‌ثبت‌نام کن */}
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3.5 bg-teal/10 border-[0.1875rem] border-teal text-teal font-extrabold text-[0.875rem] sm:text-[1rem] rounded-[0.84375rem_0_0.84375rem_0] [corner-shape:squircle] shadow-[2px_3px_0_0_rgba(88,189,175,0.9)] transition-all duration-300 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_2px_0_0_rgba(88,189,175,0.9)]"
              >
                پیش‌ثبت‌نام کن
              </a>
              {/* داستانمون رو بخون */}
              <a
                href="#story"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3.5 bg-[#21295A]/10 border-[0.1875rem] border-[#21295A] text-[#21295A] font-extrabold text-[0.875rem] sm:text-[1rem] rounded-[0.84375rem_0_0.84375rem_0] [corner-shape:squircle] shadow-[2px_3px_0_0_rgba(33,41,90,0.9)] transition-all duration-300 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_2px_0_0_rgba(33,41,90,0.9)]"
              >
                داستانمون رو بخون
              </a>
            </div>
          </div>

          {/* تصویر شخصیت‌ها + بج‌ها — سمت چپ (RTL) */}
          <div className="order-1 lg:order-2 flex flex-col items-center">
            <div className="relative w-full max-w-[20rem] sm:max-w-[26rem] lg:max-w-[32rem] mb-6 sm:mb-8">
              <img src={characterImg} alt="کاراکترهای رکاد" className="w-full h-auto object-contain select-none pointer-events-none" />
            </div>

            {/* بج‌های آمار — شبیه دکمه‌ها: رنگی با طیف کم + ردیوس همه‌گرد + روتیت یکی‌درمیون + شدو مشکی */}
            <div className="flex flex-wrap justify-center gap-3">
              {badges.map((b, i) => {
                const rot = i % 2 === 0 ? 1 : -1;
                return (
                  <span
                    key={b.label}
                    className={`${b.color} ${b.border} border-[0.1875rem] ${b.textColor} text-[0.8125rem] sm:text-[0.875rem] font-semibold px-4 py-2 rounded-[0.375rem] shadow-[2px_3px_0_0_rgba(0,0,0,0.9)]`}
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