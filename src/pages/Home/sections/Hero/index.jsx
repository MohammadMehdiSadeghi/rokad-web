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
    <section className="pt-9 pb-20 sm:pb-24 relative" dir="rtl">
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
          className="w-full h-full object-cover opacity-70 rotate-180"
        />
      </div>

      <Container className="relative z-10">
        {/* کارت اصلی — نسبت 1200/510 = 2.35 از فیگما */}
        <div className="relative overflow-hidden rounded-[36px] bg-[#58BDAF] shadow-soft w-full aspect-[1200/510]">
          {/* پترن داخل کارت با اپسیتی 0.24 مطابق فیگما */}
          <img
            src={patternBg}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover opacity-25"
          />

          {/* ── شخصیت (500×781): x:50px از چپ (4.2%)، y:42px از بالا (8.2%)، h:153% ── */}
          <img
            src={characterImg}
            alt="منتور رکاد"
            className="absolute left-[4.2%] top-[8.2%] h-[153%] w-auto select-none pointer-events-none"
            style={{ maxWidth: "none" }}
          />

          {/* ── تیتر: خط اول y45 کارت (8.8%)، خط دوم y136 (91px پایین‌تر) ── */}
          <div className="absolute right-[3.9%] top-[12.7%] w-[50%] z-20">
            {/* خط اول: "آینده" rotate(2deg) */}
            <div
              className="font-black text-white text-4xl sm:text-5xl xl:text-[59.4px] leading-[1.15] whitespace-nowrap"
              style={{ transform: "rotate(2deg)" }}
            >
              آینده
            </div>
            {/* خط دوم: کلمات خطی، فاصله از خط اول در فیگما = 91px */}
            <div
              className="mt-[34px] flex flex-wrap items-end gap-x-[6px] font-black text-white text-4xl sm:text-5xl xl:text-[59.4px] leading-[1.53]"
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

          {/* ── دکمه‌ها: از بالا 277px (54.3%)؛ سفید راست (47px)، سرمه‌ای بعدش با gap 16px ── */}
          <div className="absolute right-[3.9%] top-[54.3%] z-20 flex flex-wrap items-center gap-4">
            <button
              className="w-[199px] h-[70px] bg-white text-[#21295A] font-extrabold text-xl2 rounded-[10px] cursor-pointer transition-all hover:shadow-lg hover:-translate-y-0.5 whitespace-nowrap flex items-center justify-center"
              style={{ transform: "rotate(1.5deg)" }}
            >
              درخواست مشاوره
            </button>
            <button
              className="w-[231px] h-[71px] bg-[#21295A] text-white font-extrabold text-xl2 rounded-[10px] cursor-pointer transition-all hover:shadow-lg hover:-translate-y-0.5 whitespace-nowrap flex items-center justify-center"
              style={{ transform: "rotate(-1.5deg)" }}
            >
              ثبت‌نام و رزرو مصاحبه
            </button>
          </div>

          {/* ── پنل اعتماد: 635×201، 7px از راست (0.6%)، 5px از پایین (1%) ── */}
          <div className="absolute bottom-[1%] right-[0.6%] z-10 w-[53%]">
            <div className="absolute translate-x-[6px] translate-y-[5px] right-0 top-0 w-full h-full rounded-br-[36px] bg-[#4EB9AB]" />
            <div className="relative rounded-br-[36px] bg-[#E9F6F4] overflow-hidden">
              <img
                src={patternBg}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover opacity-15"
              />
              <p className="relative font-black text-[#4AB7AA] text-[22px] sm:text-[30px] xl:text-[38px] leading-[1.35] whitespace-nowrap px-5 sm:px-8 py-4 sm:py-6">
                اولین هنرستان استارتاپی ایران ...
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}