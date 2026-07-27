export default function Hero() {
  return (
    <section className="pt-9 pb-16">
      <div className="max-w-content mx-auto rounded-[32px] overflow-hidden relative bg-[#E9F5EC] grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] items-center min-h-[510px]">
        
        {/* 1. تسکچر (پس‌زمینه) - src را اینجا قرار بده */}
        <img
          src=""
          alt=""
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        />

        <div className="order-2 lg:order-1 relative z-10 flex justify-center lg:justify-end items-end h-full px-6 lg:pr-6 lg:pl-0">
          {/* 2. آدمک (مربی) - src را اینجا قرار بده */}
          <img
            src=""
            alt="تصویر یک مربی نشسته با پوشه در دست"
            loading="lazy"
            className="max-h-[360px] lg:max-h-[480px] w-auto object-contain drop-shadow-xl"
          />
        </div>

        <div className="order-1 lg:order-2 relative z-10 px-6 sm:px-10 lg:pr-14 lg:pl-6 py-12 lg:py-16">
          <h1 className="font-black text-[#1A3C34] text-[28px] sm:text-4xl lg:text-5xl leading-[1.25] mb-7">
            <span className="inline-block rotate-2">آینـده</span>{" "}
            <span className="inline-block -rotate-[1.5deg]">از اینجا</span>{" "}
            <span className="inline-block rotate-1">شروع میشه!</span>
          </h1>

          <div className="flex flex-wrap gap-4 mb-7">
            <a
              href="#"
              className="inline-flex items-center whitespace-nowrap -rotate-[1.5deg] rounded-pill-lg bg-[#E63946] px-6 py-[17px] text-lg font-extrabold text-white transition-colors hover:bg-[#d12d39] shadow-lg"
            >
              ثبت‌نام و رزرو مصاحبه
            </a>
            <a
              href="#"
              className="inline-flex items-center whitespace-nowrap rotate-[1.5deg] rounded-pill-lg bg-white px-6 py-[17px] text-lg font-extrabold text-[#1A3C34] transition-colors hover:bg-gray-50 border-2 border-[#1A3C34]"
            >
              درخواست مشاوره
            </a>
          </div>

          <div className="relative inline-block -rotate-[0.5deg]">
            <div className="absolute inset-1.5 -right-1.5 border-[5px] border-[#E63946] rounded-t-2xl" />
            <div className="relative bg-white border-[5px] border-[#1A3C34] rounded-t-2xl px-6 sm:px-8 py-4 flex gap-2.5 flex-wrap shadow-md">
              {["اولین", "مدرسه", "استارتاپی", "ایران!"].map((word, i) => (
                <span
                  key={word}
                  className={`inline-block font-extrabold text-2xl2 text-[#1A3C34] ${
                    i % 2 === 0 ? "-rotate-3" : "rotate-2"
                  }`}
                >
                  {word}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}