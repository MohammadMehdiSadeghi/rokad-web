import Container from "../../../../layout/Container";

const yarnIllustration = "/assets/Story/yarn-illustration.png";
const vectorIcon = "/assets/Story/Vector.svg";

const pills = [
  {
    label: "اکوسیستم استارتاپی",
    back: "bg-navy-alt",
    border: "border-navy-alt",
    text: "text-navy-alt",
    rotate: "rotate-[2deg]",
    bg: "bg-[#F4F5FB]",
  },
  {
    label: "بازار کار واقعی",
    back: "bg-purple",
    border: "border-purple",
    text: "text-purple",
    rotate: "rotate-[-2deg]",
    bg: "bg-[#FCE8EF]",
  },
  {
    label: "هنرستان رسمی",
    back: "bg-teal-alt",
    border: "border-teal",
    text: "text-teal-text",
    rotate: "rotate-[2deg]",
    bg: "bg-[#E4F4F2]",
  },
];

export default function Story() {
  return (
    <section id="about" className="pt-[5rem] sm:pt-[5.25rem] lg:pt-[5.625rem] pb-14 sm:pb-20 lg:pb-[5.5rem] w-full px-4 sm:px-6 bg-[#F6F6F6]">
      {/* تغییر lg به xl برای رفع باگ در سایز 1024px */}
      <Container className="grid grid-cols-1 xl:grid-cols-[1.1fr_0.9fr] gap-8 sm:gap-16 xl:gap-40 items-center">
        {/* ── ستون راست: تصویر ── */}
        <div className="relative flex items-start justify-center xl:justify-start -mt-2">
          <div className="relative w-full max-w-[26.25rem] sm:max-w-[30rem] xl:max-w-[35rem]">
            <img
              src={yarnIllustration}
              alt="تصویر چنگال با ماکارونی — نماد تفاوت رکاد"
              loading="lazy"
              className="w-full h-auto object-contain drop-shadow-2xl -translate-x-[4%] -translate-y-[2%]"
            />

            {/* برچسب شناور روی عکس (اضافه شدن squircle) */}
            <span
              className="absolute bottom-[10%] right-[12%] sm:right-[20%] inline-block rotate-3 bg-[#FFD641] border-2 border-black font-bold text-[0.6875rem] sm:text-[0.875rem] text-black rounded-tl-[0.625rem]
             rounded-tr-none rounded-br-[0.625rem] rounded-bl-none [corner-shape:squircle] px-3 sm:px-5 py-1.5 sm:py-2 shadow-[0.1875rem_0.1875rem_0_0_#000] max-w-[62%] sm:max-w-none text-center leading-snug"
            >
              رکاد یعنی متفاوت بودن...
            </span>
          </div>
        </div>

        {/* ── ستون چپ: متن ── */}
        <div className="max-w-full xl:max-w-[31.25rem]">
          <h2 className="font-black text-[1.5rem] xs:text-[1.625rem] sm:text-[2.5rem] lg:text-[2.875rem] leading-[1.4] sm:leading-[1.35] mb-4 sm:mb-5">
            <span className="inline-block rotate-3">چرا</span>{" "}
            <span className="inline-block text-teal-wordmark -rotate-3">
              رکاد
            </span>{" "}
            <span className="inline-block rotate-3">یه</span>{" "}
            <span className="inline-block -rotate-3">مدرسه</span>{" "}
            <span className="inline-block rotate-3">معمولی</span>{" "}
            <span className="inline-block -rotate-3">نیست؟</span>
          </h2>
          <p className="text-[0.75rem] xs:text-[0.8125rem] sm:text-[0.9375rem] leading-[1.9] sm:leading-[2] text-navy/70 max-w-full xl:max-w-[28.75rem] mb-[1rem] sm:mb-[1.25rem]">
            ما هنرستان رو با اکوسیستم استارتاپی و بازار کار واقعی ترکیب کردیم.
            اینجا فقط کتاب نمی‌خونی؛ روی چالش‌های واقعی کار می‌کنی، با منتورهای
            متخصص همراهی می‌شی و توی محیطی امن، جرأت شکست خوردن و دوباره پاشدن
            رو یاد می‌گیری.
          </p>

          {/* Pills با زاویه کج برای متن‌ها و سایه استیکری */}
          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-4 mb-7 sm:mb-9">
            {pills.map((p) => (
              <span
                key={p.label}
                className={`relative ${p.bg} inline-block ${p.rotate}`}
              >
                {/* لایه سایه پشت استیکر (اضافه شدن squircle) */}
                <span
                  className={`absolute inset-0 translate-x-[0.1875rem] translate-y-[0.1875rem] rounded-[1rem] [corner-shape:squircle] ${p.back}`}
                />
                {/* لایه اصلی و متن استیکر (اضافه شدن squircle) */}
                <span
                  className={`relative block ${p.bg} border-2 rounded-[0.9375rem] [corner-shape:squircle] px-3 sm:px-5 py-1.5 sm:py-2.5 font-bold text-[0.6875rem] xs:text-[0.75rem] sm:text-sm ${p.border} ${p.text}`}
                >
                  {p.label}
                </span>
              </span>
            ))}
          </div>

          {/* CTA (اضافه شدن squircle) */}
          <div className="flex justify-center xl:justify-center items-center w-full">
            <a
              href="#"
              className="group inline-flex items-center justify-center gap-3 w-full max-w-[12.5rem] sm:max-w-[10.625rem] h-[2.625rem] sm:h-[3.25rem] bg-[#59BBAF] text-white font-extrabold text-[0.875rem] sm:text-[1.125rem]
              rounded-tr-none rounded-bl-none rounded-tl-[0.625rem] rounded-br-[0.625rem] [corner-shape:squircle]
              border-2 border-[#D6EEEB]"
            >
              <span>ادامه داستان رکاد</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}