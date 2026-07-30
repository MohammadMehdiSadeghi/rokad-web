import patternBg from "../../assets/Hero/Hero-Pattern.png"; // مسیر فایل پترن خود را اینجا بدهید

export default function Hero() {
  return (
    <section className="pt-9 pb-20 sm:pb-24" dir="rtl">
      <div
        className="absolute inset-0 w-full h-full z-0 pointer-events-none 
                [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] 
                [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]"
      >
        <img
          src={patternBg || ""}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-70 rotate-180"
        />
      </div>
      <div className="w-[80%] mx-auto relative">
        {/* ── کانتینر اصلی با بک‌گراند سبزآبی ── */}
        <div className="bg-[#57BCAF] rounded-[36px] relative overflow-hidden min-h-[600px] flex flex-col justify-between">
          {/* ── لایه پترن پس‌زمینه ── */}

          {/* ── متن اصلی هیرو ── */}
          <div className="relative z-10 px-8 sm:px-14 pt-14 sm:pt-20 text-right">
            <h1 className="font-extrabold text-white text-4xl sm:text-6xl leading-[1.35]">
              آینده
              <br />
              از اینجا شروع میشه !
            </h1>
            <p className="font-extrabold text-[#21295A] text-2xl sm:text-3xl mt-8 sm:mt-10">
              اولین هنرستان استارتاپ ایران ...
            </p>
          </div>

          {/* ── نوار پایین (سفید + سرمه‌ای) ── */}
          <div className="relative z-10 w-[35%] rounded-t-3xl bg-white flex items-stretch">
            {/* بخش سرمه‌ای (سمت راست در نمای RTL) */}
            <div
              className="bg-[#21295A] flex-1 py-6 px-6 sm:px-10 flex items-center justify-center"
              style={{ clipPath: "polygon(12% 0, 100% 0, 100% 100%, 0% 100%)" }}
            >
              <a
                href="#"
                className="font-extrabold text-base sm:text-lg text-white whitespace-nowrap cursor-pointer transition-opacity hover:opacity-80"
              >
                ثبت‌نام و رزرو مصاحبه
              </a>
            </div>

            {/* بخش سفید (سمت چپ در نمای RTL) */}
            <div className="py-6 border-b-2 border-r-0 border-[#21295A] px-6 sm:px-10 flex items-center justify-center">
              <button className="font-extrabold  text-base sm:text-lg text-[#21295A] whitespace-nowrap cursor-pointer transition-opacity hover:opacity-80">
                درخواست مشاوره
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
