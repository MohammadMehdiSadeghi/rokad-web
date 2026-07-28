import heroMentor from "../assets/images/hero-illustration.png";
import AvatarStack from "./AvatarStack.jsx";

export default function Hero() {
  return (
    <section className="pt-9 pb-16">
      <div className="max-w-content mx-auto rounded-[32px] overflow-hidden relative bg-gradient-to-br from-[#132049] via-[#1c2c60] to-[#16224d] grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] items-center min-h-[510px]">
        <div className="order-2 lg:order-1 flex justify-center lg:justify-end items-end h-full px-6 lg:pr-6 lg:pl-0">
          <img
            src={heroMentor}
            alt="تصویر یک مربی نشسته با پوشه در دست"
            loading="lazy"
            className="max-h-[360px] lg:max-h-[480px] w-auto object-contain"
          />
        </div>

        <div className="order-1 lg:order-2 relative z-[2] px-6 sm:px-10 lg:pr-14 lg:pl-6 py-12 lg:py-16">
          <h1 className="font-black text-white text-[28px] sm:text-4xl lg:text-5xl leading-[1.25] mb-7">
            <span className="inline-block rotate-2">آینـده</span>{" "}
            <span className="inline-block -rotate-[1.5deg]">از اینجا</span>{" "}
            <span className="inline-block rotate-1">شروع میشه!</span>
          </h1>

          <div className="flex flex-wrap gap-4 mb-7">
            <a
              href="#"
              className="inline-flex items-center whitespace-nowrap -rotate-[1.5deg] rounded-pill-lg bg-navy px-6 py-[17px] text-lg font-extrabold text-white transition-colors hover:bg-[#182050]"
            >
              ثبت‌نام و رزرو مصاحبه
            </a>
            <a
              href="#"
              className="inline-flex items-center whitespace-nowrap rotate-[1.5deg] rounded-pill-lg bg-white px-6 py-[17px] text-lg font-extrabold text-navy transition-colors hover:bg-[#eef0f8]"
            >
              درخواست مشاوره
            </a>
          </div>

          <AvatarStack label="به جمع بیش از ۲۵۰ دانش‌آموز رکاد ملحق شو" />

          <div className="relative inline-block -rotate-[0.5deg]">
            <div className="absolute inset-1.5 -right-1.5 border-[5px] border-teal-alt rounded-t-2xl" />
            <div className="relative bg-[rgba(180,180,180,0.22)] border-[5px] border-teal rounded-t-2xl px-6 sm:px-8 py-4 flex gap-2.5 flex-wrap">
              {["اولین", "مدرسه", "استارتاپی", "ایران!"].map((word, i) => (
                <span
                  key={word}
                  className={`inline-block font-extrabold text-2xl2 text-teal-text ${
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
