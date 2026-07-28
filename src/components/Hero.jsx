import heroMentor from "../assets/images/hero-illustration.png";

export default function Hero() {
  return (
    <section className="pt-9 pb-20 sm:pb-24">
      <div className="max-w-content mx-auto relative">
        <div
          className="rounded-[28px] sm:rounded-[32px] overflow-hidden relative bg-gradient-to-br from-[#63c4b6] to-[#4bb5a7]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, rgba(255,255,255,0.08) 0 1px, transparent 1px 28px), repeating-linear-gradient(-45deg, rgba(255,255,255,0.08) 0 1px, transparent 1px 28px), linear-gradient(135deg, #63c4b6, #4bb5a7)",
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] items-end pb-14 sm:pb-16">
            {/* Illustration */}
            <div className="order-2 lg:order-1 flex justify-center lg:justify-start items-end pt-6 lg:pt-10 px-6 lg:pl-8">
              <img
                src={heroMentor}
                alt="تصویر یک مربی نشسته با پوشه در دست"
                loading="lazy"
                className="max-h-[280px] sm:max-h-[340px] lg:max-h-[380px] w-auto object-contain"
              />
            </div>

            {/* Copy */}
            <div className="order-1 lg:order-2 relative z-[2] px-6 sm:px-10 lg:pr-12 lg:pl-6 pt-10 lg:pt-12">
              <h1 className="font-black text-white text-[30px] sm:text-4xl lg:text-[44px] leading-[1.3] mb-6 text-center lg:text-right">
                آینـده
                <br />
                از اینجا شروع میشه !
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
            </div>
          </div>
        </div>

        {/* Trust ribbon — a small rounded-top "tab" that hugs the left
            edge of the card and shrinks to fit its own text (not a
            full-width bar), matching the reference screenshot. It's a
            sibling of the (overflow-hidden) card rather than a child of
            it, so the card's rounded corners never clip it. */}
        <div className="relative w-fit mr-auto ml-6 sm:ml-10 bg-[rgba(180,180,180,0.22)] border-[5px] border-teal rounded-t-2xl px-6 sm:px-8 py-4 flex gap-2.5 flex-wrap">
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
    </section>
  );
}
