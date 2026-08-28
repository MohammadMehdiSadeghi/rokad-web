import Container from "../../../../layout/Container";

const patternBg = "/assets/Hero/Hero-Pattern.png";
const characterImg = "/assets/Hero/hero-character.png";

/* کلمات خط دوم تیتر با چرخش دقیق از فیگما (درجه) */
const headlineLine2 = [
  { text: "از", deg: 3 },
  { text: "اینجا", deg: 3 },
  { text: "شروع", deg: -2 },
  { text: "میشه", deg: 2 },
  { text: "!", deg: 4 },
];

export default function Hero() {
  return (
    <section className="pt-1 sm:pt-2 lg:pt-2 pb-10 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 relative" dir="rtl">
      {/* پترن پس‌زمینه کل سکشن */}
      <div
        className="absolute inset-0 w-full h-full z-0 pointer-events-none
                [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]
                [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]"
      >
        <img
          src={patternBg}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-60 rotate-180"
        />
      </div>

      <Container className="relative z-10">
        {/* کارت اصلی */}
        <div className="relative overflow-hidden rounded-[0.875rem] sm:rounded-[1.25rem] lg:rounded-[2.25rem] bg-teal shadow-soft w-full aspect-[2.15] lg:aspect-[1200/510] max-h-[calc(100vh-6rem)]">
          {/* پترن داخل کارت */}
          <img
            src={patternBg}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover opacity-25"
          />

          {/* ── شخصیت (موبایل: نشسته، تمام‌قد چپ؛ دسکتاپ: 500×781 با h:153%) ── */}
          <img
            src={characterImg}
            alt="منتور رکاد"
            className="absolute left-[-4%] sm:left-[0%] lg:left-[4.2%] top-[2%] lg:top-[8.2%] h-[96%] sm:h-[104%] lg:h-[153%] w-auto select-none pointer-events-none"
            style={{ maxWidth: "none" }}
          />

          {/* ── تیتر: خط اول / خط دوم با کلمات کج (موبایل ~20px فیگما، دسکتاپ 59px) ── */}
          <div className="absolute right-[3%] sm:right-[4%] lg:right-[3.9%] top-[4%] sm:top-[7%] lg:top-[12.7%] w-[70%] lg:w-[50%] z-20">
                      {/* خط اول: "آینده" rotate(2deg) */}
                      <div
              className="font-black text-white text-[1.125rem] sm:text-[1.375rem] md:text-3xl lg:text-4xl xl:text-[4.8125rem] leading-[1.15] whitespace-nowrap"
                        style={{ transform: "rotate(2deg)" }}
                      >
                        آینده
                      </div>
                      {/* خط دوم: کلمات خطی، فاصله از خط اول در فیگما = 91px */}
                      <div
              className="mt-[0.25rem] sm:mt-[1.125rem] lg:mt-[2.125rem] flex flex-wrap items-end gap-x-[0.2rem] sm:gap-x-[0.375rem] font-black text-white text-[0.875rem] sm:text-[1.0625rem] md:text-3xl lg:text-4xl xl:text-[4.8125rem] leading-[1.4] lg:leading-[1.53]"
                      >
                        {headlineLine2.map((w) => (
                          <span
                            key={w.text}
                            className="inline-block whitespace-nowrap"
                            style={{ transform: `rotate(${w.deg}deg)` }}
                          >
                            {w.text}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* ── دکمه‌ها: موبایل پایین کارت (فیگما y≈206)، دسکتاپ top-[54.3%] ── */}
          <div className="absolute right-[3%] sm:right-[4%] lg:right-[3.9%] bottom-[6%] sm:bottom-[7%] lg:bottom-auto lg:top-[54.3%] z-20 flex flex-wrap items-center gap-1.5 sm:gap-3 lg:gap-4">
                      <button
              className="h-[2rem] sm:h-[2.875rem] lg:h-[4.375rem] px-2.5 sm:px-5 lg:w-[12.4375rem] lg:px-0 bg-white text-navy font-extrabold text-[0.625rem] sm:text-xs lg:text-xl2 rounded-[0.5rem] lg:rounded-[0.625rem] cursor-pointer transition-all hover:shadow-lg hover:-translate-y-0.5 whitespace-nowrap flex items-center justify-center"
                        style={{ transform: "rotate(1.5deg)" }}
                      >
                        درخواست مشاوره
                      </button>
                      <button
              className="h-[2rem] sm:h-[2.875rem] lg:h-[4.4375rem] px-2.5 sm:px-5 lg:w-[14.4375rem] lg:px-0 bg-navy text-white font-extrabold text-[0.625rem] sm:text-xs lg:text-xl2 rounded-[0.5rem] lg:rounded-[0.625rem] cursor-pointer transition-all hover:shadow-lg hover:-translate-y-0.5 whitespace-nowrap flex items-center justify-center"
                        style={{ transform: "rotate(-1.5deg)" }}
                      >
                        ثبت‌نام و رزرو مصاحبه
                      </button>
                    </div>

          {/* ── پنل اعتماد: ribbon ── */}
                    <div className="absolute bottom-[3%] lg:bottom-[1%] right-[2%] lg:right-[0.6%] top-[38%] lg:top-auto z-10 w-[52%] lg:w-[53%]">
                      <div className="absolute translate-x-[0.25rem] translate-y-[0.1875rem] lg:translate-x-[0.375rem] lg:translate-y-[0.3125rem] right-0 top-0 w-full h-full rounded-br-[0.875rem] sm:rounded-br-[1.25rem] lg:rounded-br-[2.25rem] bg-teal-alt" />
                      <div className="relative rounded-br-[0.875rem] sm:rounded-br-[1.25rem] lg:rounded-br-[2.25rem] bg-ecosystem-light overflow-hidden">
                        <img
                          src={patternBg}
                          alt=""
                          aria-hidden="true"
                          className="absolute inset-0 w-full h-full object-cover opacity-15"
                        />
              <p className="relative font-black text-navy lg:text-teal-wordmark text-[0.5rem] sm:text-[0.6875rem] sm:text-lg lg:text-[1.875rem] xl:text-[2.375rem] leading-[1.5] lg:leading-[1.35] whitespace-nowrap px-2 sm:px-5 lg:px-8 py-1 sm:py-3 lg:py-6">
                          اولین هنرستان استارتاپی ایران ...
                        </p>
                      </div>
                    </div>
        </div>
      </Container>
    </section>
  );
}