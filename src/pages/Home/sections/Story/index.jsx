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
    back: "bg-magenta",
    border: "border-magenta",
    text: "text-magenta",
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
    <section id="about" className="pt-14 sm:pt-16 lg:pt-[116px] pb-14 sm:pb-20 lg:pb-[88px] w-full px-4 sm:px-6 bg-[#F6F6F6]">
      {/* تغییر lg به xl برای رفع باگ در سایز 1024px */}
      <Container className="grid grid-cols-1 xl:grid-cols-[1.1fr_0.9fr] gap-8 sm:gap-16 xl:gap-40 items-center">
        {/* ── ستون راست: تصویر ── */}
        <div className="relative flex items-start justify-center xl:justify-start -mt-2">
          <div className="relative w-full max-w-[420px] sm:max-w-[480px] xl:max-w-[560px]">
            <img
              src={yarnIllustration}
              alt="تصویر چنگال با ماکارونی — نماد تفاوت رکاد"
              loading="lazy"
              className="w-full h-auto object-contain drop-shadow-2xl -translate-x-[4%] -translate-y-[2%]"
            />

            {/* برچسب شناور روی عکس (اضافه شدن squircle) */}
            <span
              className="absolute bottom-[10%] right-[12%] sm:right-[20%] inline-block rotate-3 bg-[#FFD641] border-2 border-black font-bold text-[11px] sm:text-[14px] text-black rounded-tl-[10px]
             rounded-tr-none rounded-br-[10px] rounded-bl-none [corner-shape:squircle] px-3 sm:px-5 py-1.5 sm:py-2 shadow-[3px_3px_0_0_#000] max-w-[62%] sm:max-w-none text-center leading-snug"
            >
              رکاد یعنی متفاوت بودن...
            </span>
          </div>
        </div>

        {/* ── ستون چپ: متن ── */}
        <div className="max-w-full xl:max-w-[500px]">
          <h2 className="font-black text-[24px] xs:text-[26px] sm:text-[40px] lg:text-[46px] leading-[1.4] sm:leading-[1.35] mb-4 sm:mb-5">
            <span className="inline-block rotate-3">چرا</span>{" "}
            <span className="inline-block text-teal-wordmark -rotate-3">
              رکاد
            </span>{" "}
            <span className="inline-block rotate-3">یه</span>{" "}
            <span className="inline-block -rotate-3">مدرسه</span>{" "}
            <span className="inline-block rotate-3">معمولی</span>{" "}
            <span className="inline-block -rotate-3">نیست؟</span>
          </h2>
          <p className="text-[12px] xs:text-[13px] sm:text-[15px] leading-[1.9] sm:leading-[2] text-navy/70 max-w-full xl:max-w-[460px] mb-[16px] sm:mb-[20px]">
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
                  className={`absolute inset-0 translate-x-[3px] translate-y-[3px] rounded-[16px] [corner-shape:squircle] ${p.back}`}
                />
                {/* لایه اصلی و متن استیکر (اضافه شدن squircle) */}
                <span
                  className={`relative block ${p.bg} border-2 rounded-[15px] [corner-shape:squircle] px-3 sm:px-5 py-1.5 sm:py-2.5 font-bold text-[11px] xs:text-[12px] sm:text-sm ${p.border} ${p.text}`}
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
              className="group inline-flex items-center justify-center gap-3 w-full max-w-[200px] sm:max-w-[170px] h-[42px] sm:h-[52px] bg-[#59BBAF] text-white font-extrabold text-[14px] sm:text-[18px]
              rounded-tr-none rounded-bl-none rounded-tl-[10px] rounded-br-[10px] [corner-shape:squircle]
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