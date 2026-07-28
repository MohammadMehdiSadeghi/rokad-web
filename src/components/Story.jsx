import yarnIllustration from "../assets/images/yarn-illustration.png";

const pills = [
  {
    label: "هنرستان رسمی",
    back: "bg-teal-alt",
    border: "border-teal",
    text: "text-teal-text",
  },
  {
    label: "بازار کار واقعی",
    back: "bg-magenta",
    border: "border-magenta",
    text: "text-magenta",
  },
  {
    label: "اکوسیستم استارتاپی",
    back: "bg-navy-alt",
    border: "border-navy-alt",
    text: "text-navy-alt",
  },
];

export default function Story() {
  return (
    <section className="py-[88px] px-6 bg-[#F3F3F1]">
      {/* نسبت ستون‌ها طوری تنظیم شده که تصویر سمت راست (عریض‌تر) و متن سمت چپ قرار گیرد */}
      <div className="max-w-content mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
        
        {/* ── ستون راست: تصویر ── */}
        {/* در حالت RTL، اولین المان به صورت پیش‌فرض سمت راست می‌آید */}
        <div className="relative flex items-start justify-center lg:justify-start -mt-2">
          <div className="relative w-full max-w-[560px]">
            <img
              src={yarnIllustration}
              alt="تصویر چنگال با ماکارونی — نماد تفاوت رکاد"
              loading="lazy"
              // تصویر کمی به سمت چپ شیفت داده شده تا به لبه راست نچسبد
              className="w-full h-auto object-contain drop-shadow-2xl -translate-x-[4%] -translate-y-[2%]"
            />

            {/* برچسب شناور با زاویه دقیق -3 درجه */}
            <span
              className="absolute bottom-[24%] right-[14%]
                         bg-[#f9f3e3] border-2 border-[#f4c76a]
                         font-bold text-[13px] text-[#8a6a00]
                         rounded-[10px] px-4 py-2
                         rotate-[-3deg]
                         shadow-sm whitespace-nowrap"
            >
              رکاد یعنی متفاوت بودن...
            </span>
          </div>
        </div>

        {/* ── ستون چپ: متن ── */}
        <div>
          <h2 className="font-black text-[32px] sm:text-[40px] lg:text-[46px] leading-[1.35] mb-5">
            چرا <span className="text-teal-wordmark">رکاد</span> یه مدرسه معمولی
            نیست؟
          </h2>

          <p className="text-[14px] sm:text-[15px] leading-[2] text-navy/70 max-w-[460px] mb-8">
            ما هنرستان رو با اکوسیستم استارتاپی و بازار کار واقعی ترکیب کردیم.
            اینجا فقط کتاب نمی‌خونی؛ روی چالش‌های واقعی کار می‌کنی، با منتورهای
            متخصص همراهی می‌شی و توی محیطی امن، جرأت شکست خوردن و دوباره پاشدن
            رو یاد می‌گیری.
          </p>

          {/* Pills با زاویه و سایه دقیق استیکری */}
          <div className="flex flex-wrap gap-3 mb-9">
            {pills.map((p) => (
              <span key={p.label} className="relative inline-block">
                {/* shadow layer - زاویه 45 درجه به سمت پایین و چپ */}
                <span
                  className={`absolute inset-0 translate-x-[-4px] translate-y-[4px] rounded-[10px] ${p.back}`}
                />
                {/* front layer */}
                <span
                  className={`relative block bg-white border-2 rounded-[10px] px-5 py-2.5 font-bold text-sm ${p.border} ${p.text}`}
                >
                  {p.label}
                </span>
              </span>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#"
            className="inline-flex items-center gap-3 bg-teal text-white font-extrabold text-[15px] rounded-[12px] px-7 py-4 transition-opacity hover:opacity-90"
          >
            ادامه داستان رکاد
            {/* آیکون رعد/زیگزاگ */}
            <svg
              width="16"
              height="20"
              viewBox="0 0 16 20"
              fill="none"
              className="flex-shrink-0"
            >
              <path d="M9 1L1 11h5.5L6 19l8-11H8.5L9 1z" fill="currentColor" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}