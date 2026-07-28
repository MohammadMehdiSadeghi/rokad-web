  import heroMentor from "../assets/images/hero-illustration.png";
  import texture from "../assets/images/Group 1000006377.png";

  export default function Hero() {
    return (
      <section className="pt-9 pb-20 sm:pb-24" dir="rtl">
        <div className="max-w-content mx-auto relative">
          <div
            className="rounded-[28px] sm:rounded-[32px] overflow-hidden relative flex flex-col"
            style={{ background: "linear-gradient(135deg, #5ec8bb, #3db8a8)" }}
          >
            {/* Texture overlay */}
            <img
              src={texture}
              alt=""
              aria-hidden="true"
              className="select-none pointer-events-none absolute inset-0 w-full h-full object-cover z-0"
              style={{ opacity: 1, transform: "scale(1.5)" }}
            />

            {/* ── Body: copy + illustration ── */}
            <div className="relative z-[1] flex flex-col lg:flex-row items-stretch flex-1 min-h-[280px] sm:min-h-[340px] lg:min-h-[380px]">

              {/* Copy — right side */}
              <div className="lg:w-[55%] flex flex-col justify-center px-6 sm:px-10 lg:pl-6 lg:pr-14 pt-10 pb-6 lg:py-12 text-right">
                <h1
                  className="font-black text-white leading-[1.25] mb-5"
                  style={{ fontSize: "clamp(32px, 5vw, 58px)" }}
                >
                  آینـده
                  <br />
                  از اینجا شروع میشه !
                </h1>
                <p
                  className="font-bold leading-relaxed"
                  style={{
                    fontSize: "clamp(16px, 2.2vw, 24px)",
                    color: "#1a2d5a",
                  }}
                >
                  اولین هنرستان استارتاپی ایران ...
                </p>
              </div>

              {/* Illustration — left side */}
              <div className="lg:w-[45%] relative flex items-end justify-center lg:justify-end overflow-hidden">
                <img
                  src={heroMentor}
                  alt="تصویر یک مربی نشسته با پوشه در دست"
                  loading="lazy"
                  className="w-full max-w-[340px] lg:max-w-none lg:w-[90%] object-contain object-bottom block"
                  style={{ maxHeight: "400px" }}
                />
              </div>
            </div>

            {/* ── Bottom CTA bar ── */}
            <div className="relative z-[1] flex flex-row overflow-hidden" style={{ minHeight: "64px" }}>
              {/* Right pill: ثبت‌نام — navy bg, white text */}
              <div
                className="flex items-center justify-center flex-1 px-6 py-4 cursor-pointer transition-opacity hover:opacity-90"
                style={{ background: "#1a2d5a" }}
              >
                <span className="font-extrabold text-white text-base sm:text-lg whitespace-nowrap">
                  ثبت‌نام و رزرو مصاحبه
                </span>
              </div>

              {/* Left pill: درخواست مشاوره — white bg, dark text */}
              <div
                className="flex items-center justify-center flex-1 px-6 py-4 cursor-pointer transition-colors hover:bg-gray-50"
                style={{
                  background: "#ffffff",
                  clipPath: "polygon(5% 0%, 100% 0%, 100% 100%, 0% 100%)",
                }}
              >
                <span className="font-extrabold text-base sm:text-lg whitespace-nowrap" style={{ color: "#1a2d5a" }}>
                  درخواست مشاوره
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }