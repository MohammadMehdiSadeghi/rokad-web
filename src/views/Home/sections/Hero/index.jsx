import Container from "../../../../layout/Container";

const patternBg = "/assets/DualSchool/Schools-Pattern.png";
const characterImg = "/assets/Hero/hero-character.png";

/* کلمات خط دوم با چرخش جزئی — امضای بصری برند */
const headlineLine2 = [
  { text: "از", deg: 3 },
  { text: "اینجا", deg: -2 },
  { text: "شروع", deg: 2 },
  { text: "میشه", deg: -3 },
  { text: "!", deg: 4 },
];

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden pt-20 pb-14 sm:pt-24 sm:pb-20 lg:pt-28 lg:pb-24 bg-white"
      dir="rtl"
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
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16">
          
          {/* ── ستون متن ── */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-right order-2 lg:order-1">
            
            {/* تیتر اصلی */}
            <h1 className="font-black text-[#292827] leading-[1.25] max-w-2xl">
              <span className="block text-[2.5rem] sm:text-[3.5rem] lg:text-[4.75rem]">
                آینده
              </span>
              <span className="mt-1 flex flex-wrap items-end justify-center lg:justify-start gap-x-2 text-[1.875rem] sm:text-[2.625rem] lg:text-[3.75rem] text-[#59BBAF]">
                {headlineLine2.map((w) => (
                  <span
                    key={w.text}
                    className="inline-block transition-transform duration-300 hover:scale-110"
                    style={{ transform: `rotate(${w.deg}deg)` }}
                  >
                    {w.text}
                  </span>
                ))}
              </span>
            </h1>

            {/* بج: اولین مدرسه استارتاپی ایران */}
            <div
              className="mt-6 inline-flex items-center gap-2 bg-white text-[#292827] font-bold text-lg sm:text-xl lg:text-2xl px-6 py-3.5 sm:px-7 sm:py-4 rounded-tl-none rounded-tr-[17px] rounded-br-none rounded-bl-[17px] border border-[#EAEAEA] transition-transform duration-200 hover:-translate-y-0.5"
              style={{ boxShadow: "2.75px 2.75px 0 #000000" }}
            >
              اولین مدرسه استارتاپی ایران
            </div>

            {/* دکمه‌ها */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-8">
              {/* دکمه اصلی */}
              <button className="h-12 sm:h-[3.375rem] px-7 sm:px-8 bg-[#202A5A] text-white font-bold text-sm sm:text-base rounded-[12px] transition-all duration-200 hover:bg-[#1D2651] active:scale-95 active:bg-[#1A2248]"
                style={{ boxShadow: "0 4px 12px rgba(32, 42, 90, 0.25)" }}
              >
                ثبت‌نام و رزرو مصاحبه
              </button>
              
              {/* دکمه ثانویه (رفع باگ خوانایی و تغییر به حالت Outline) */}
              <button className="h-12 sm:h-[3.375rem] px-7 sm:px-8 border-2 border-ink text-ink font-bold text-sm sm:text-base rounded-[12px] transition-all duration-200 hover:bg-[#E6F5F3] hover:border-[#E6F5F3] active:scale-95 active:bg-[#CCEAE6]">
                درخواست مشاوره
              </button>
            </div>
          </div>

          {/* ── ستون تصویر ── */}
          <div className="relative order-1 lg:order-2 flex justify-center">
            {/* باکس پس‌زمینه فیروزه‌ای چرخیده */}
            <div
              className="absolute inset-0 m-auto w-[82%] h-[82%] bg-[#59BBAF] rounded-[34px] rotate-3 transition-transform duration-300 hover:rotate-[5deg]"
              style={{ boxShadow: "6px 6px 0 #202A5A" }}
            />

            <div className="relative w-[72%] sm:w-[62%] lg:w-full max-w-md">
              {/* تصویر کاراکتر با افکت هاور */}
              <img
                src={characterImg}
                alt="منتور رکاد"
                className="relative z-10 w-full h-auto select-none pointer-events-none transition-transform duration-500 ease-out hover:scale-[1.03]"
              />

              {/* بج شناور */}
              <div
                className="absolute -bottom-3 -left-3 sm:-bottom-5 sm:-left-5 z-20 bg-white rounded-[17px] px-4 py-3 sm:px-5 sm:py-3.5 flex items-center gap-3 border border-[#EAEAEA] transition-transform duration-300 hover:scale-105"
                style={{ boxShadow: "2.75px 2.75px 0 #292827" }}
              >
                <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#EEF8F7] flex items-center justify-center text-base shrink-0">
                  🚀
                </span>
                <div>
                  <div className="font-bold text-[#292827] text-xs sm:text-sm whitespace-nowrap">
                    مسیر یادگیری فعال
                  </div>
                  <div className="text-[#292827]/60 text-[0.65rem] sm:text-xs font-bold">
                    همین امروز شروع کن
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </Container>
    </section>
  );
}