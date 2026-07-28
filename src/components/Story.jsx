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
    <section className="py-20 md:py-24 px-6 bg-[#F3F3F1] overflow-hidden">
      <div className="max-w-content mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-center">
        
        {/* ── ستون راست: متن ── */}
        <div className="relative z-10">
          <h2 className="font-black text-[28px] sm:text-[36px] lg:text-[44px] leading-[1.4] mb-6 text-navy">
            چرا <span className="text-teal-wordmark">رکاد</span> یه مدرسه معمولی
            نیست؟
          </h2>

          <p className="text-[15px] sm:text-base leading-[1.9] text-navy/70 max-w-[480px] mb-10">
            ما هنرستان رو با اکوسیستم استارتاپی و بازار کار واقعی ترکیب کردیم.
            اینجا فقط کتاب نمی‌خونی؛ روی چالش‌های واقعی کار می‌کنی، با منتورهای
            متخصص همراهی می‌شی و توی محیطی امن، جرأت شکست خوردن و دوباره پاشدن
            رو یاد می‌گیری.
          </p>

          {/* Pills */}
          <div className="flex flex-wrap gap-4 mb-12">
            {pills.map((p) => (
              <span key={p.label} className="relative inline-block group">
                {/* shadow layer */}
                <span
                  className={`absolute inset-0 translate-x-[-5px] translate-y-[5px] rounded-[10px] transition-all duration-300 ${p.back} group-hover:translate-x-[-2px] group-hover:translate-y-[2px]`}
                />
                {/* front layer */}
                <span
                  className={`relative block bg-white border-2 rounded-[10px] px-5 py-2.5 font-bold text-sm ${p.border} ${p.text} transition-all duration-300 group-hover:translate-x-[-3px] group-hover:translate-y-[3px]`}
                >
                  {p.label}
                </span>
              </span>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#"
            className="inline-flex items-center gap-3 bg-teal text-white font-extrabold text-[15px] rounded-[14px] px-8 py-4 transition-all duration-300 hover:bg-teal-dark hover:shadow-lg hover:shadow-teal/30 hover:-translate-y-0.5"
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

        {/* ── ستون چپ: تصویر ── */}
        <div className="relative flex items-center justify-center lg:justify-end -mt-4 lg:-mt-2">
          {/* کانتینر ریسپانسیو برای نگهداری تصویر و برچسب */}
          <div className="relative w-full max-w-[560px]">
            <img
              src={yarnIllustration}
              alt="تصویر چنگال با ماکارونی — نماد تفاوت رکاد"
              loading="lazy"
              className="w-full h-auto object-contain drop-shadow-2xl translate-x-[-2%] lg:translate-x-[4%] -translate-y-[2%]"
            />

            {/* برچسب شناور */}
            <span
              className="absolute bottom-[18%] right-[5%] sm:bottom-[20%] sm:right-[8%]
                         bg-[#f9f3e3] border-2 border-[#f4c76a]
                         font-bold text-[13px] text-[#8a6a00]
                         rounded-[12px] px-5 py-2.5
                         rotate-[-4deg]
                         shadow-[0_8px_20px_rgba(0,0,0,0.08)]
                         whitespace-nowrap
                         transition-transform duration-300 hover:rotate-0"
            >
              رکاد یعنی متفاوت بودن...
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}