import Container from "../../../../layout/Container";

const patternBg = "/assets/Hero/Hero-Pattern.png";
const characterImg = "/assets/Hero/hero-character.png";

const headlineWords = [
  { text: "جایی", deg: 2 },
  { text: "که", deg: -1.5 },
  { text: "نوجوون", deg: 1.5 },
  { text: "فقط", deg: -2 },
  { text: "یاد", deg: 3 },
  { text: "نمی‌گیره،", deg: -1.5 },
];

const badges = [
  { label: "اولین هنرستان استارتاپی ایران", icon: "🏫" },
  { label: "۷+ راکدی", icon: "🚀" },
  { label: "٪۷۵ نرخ اشتغال", icon: "📊" },
];

export default function AboutHero() {
  return (
    <section className="relative py-[4rem] sm:py-[5rem] lg:py-[6rem] w-full px-4 sm:px-6 lg:px-8 bg-[#E9F6F4] overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]">
        <img src={patternBg} alt="" aria-hidden="true" className="w-full h-full object-cover opacity-40" />
      </div>

      <Container className="relative z-10">
        <nav className="mb-6 sm:mb-8 lg:mb-10">
          <ol className="flex items-center gap-2 text-sm sm:text-base text-ink/60">
            <li><a href="/" className="hover:text-teal transition-colors">خانه</a></li>
            <li aria-hidden="true">/</li>
            <li className="text-ink font-semibold">درباره رکاد</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="font-black text-[1.75rem] sm:text-[2.5rem] lg:text-[3.5rem] xl:text-[4rem] leading-[1.2] mb-6 sm:mb-8">
              <span className="flex flex-wrap gap-x-2 sm:gap-x-3">
                {headlineWords.map((w) => (
                  <span key={w.text} className="inline-block" style={{ transform: `rotate(${w.deg}deg)` }}>{w.text}</span>
                ))}
              </span>
              <span className="block mt-2 sm:mt-3">
                <span className="inline-block text-teal" style={{ transform: "rotate(2deg)" }}>می‌سازه.</span>
              </span>
            </h1>

            <p className="text-[0.9375rem] sm:text-[1.0625rem] lg:text-[1.125rem] leading-[1.8] text-ink/70 max-w-xl mb-8 sm:mb-10">
              رکاد یه مدرسه معمولی نیست؛ یه اکوسیستمه که ۹ ساله داره نوجوونا رو
              آماده می‌کنه برای دنیای واقعی کار و زندگی.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-10">
              {badges.map((b) => (
                <span key={b.label} className="inline-flex items-center gap-2 bg-white/80 border border-teal/20 rounded-[0.875rem] [corner-shape:squircle] px-4 py-2 text-[0.8125rem] sm:text-[0.875rem] font-semibold text-ink/80">
                  <span>{b.icon}</span>{b.label}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 sm:gap-4">
              <a href="#" className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3.5 bg-[#21295A] text-white font-extrabold text-[0.875rem] sm:text-[1rem] rounded-[0.625rem] [corner-shape:squircle] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg" style={{ transform: "rotate(-1.5deg)" }}>پیش‌ثبت‌نام کن</a>
              <a href="#story" className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3.5 bg-white text-[#21295A] border-2 border-[#21295A] font-extrabold text-[0.875rem] sm:text-[1rem] rounded-[0.625rem] [corner-shape:squircle] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg" style={{ transform: "rotate(1.5deg)" }}>داستانمون رو بخون</a>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[20rem] sm:max-w-[26rem] lg:max-w-[32rem]">
              <img src={characterImg} alt="کاراکترهای رکاد" className="w-full h-auto object-contain select-none pointer-events-none" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
