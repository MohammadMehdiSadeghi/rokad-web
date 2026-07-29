import heroPic from "../../assets/Hero/Hero_pic.png";

export default function Hero() {
  return (
    <section className="pt-9 pb-20 sm:pb-24" dir="rtl">
      <div className="w-[80%] mx-auto relative">
        {/* ── کانتینر اصلی با بک‌گراند سرمه‌ای ── */}
        <div className="bg-[#21295A] rounded-[36px] relative overflow-hidden min-h-[600px] flex flex-col justify-end">
          {/* ───────────────────────────────────────────────── */}
          {/* جایگذاری عکس هیرو: عکس خود را در تگ زیر قرار دهید */}
          {/* ───────────────────────────────────────────────── */}
          <div className="absolute top-0 left-0 w-full h-[80%] z-0 pointer-events-none">
            <img
              src={heroPic}
              alt="Hero Illustration"
              className="w-full h-full object-cover overflow-visible"
            />
          </div>

          {/* ── کانتینر دکمه‌ها ── */}
          {/* عرض ۵۰ درصد و در سمت راست (چپ در آرایه RTL) قرار دارد */}
          <div className="relative z-10 w-1/2 ml-auto p-6 sm:p-8 mb-4 flex items-end justify-start gap-4">
            {/* لینک ثبت‌نام و رزرو مصاحبه */}
            <a
              href="#"
              className="font-extrabold text-base sm:text-lg text-white whitespace-nowrap cursor-pointer transition-opacity hover:opacity-80 pb-1"
            >
              ثبت‌نام و رزرو مصاحبه
            </a>

            {/* دکمه درخواست مشاوره (سفید با بوردر پایین و ردیوس مشابه هیرو) */}
            <button
              className="bg-[#FFFFFF] text-[#21295A] font-extrabold text-base sm:text-lg whitespace-nowrap px-6 py-3 cursor-pointer transition-all hover:bg-gray-100 border-b-4 border-[#21295A] rounded-[28px]"
            >
              درخواست مشاوره
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
