import yarnIllustration from "../assets/images/yarn-illustration.png";

const pills = [
  {
    label: "اکوسیستم استارتاپی",
    back: "bg-navy-alt",
    border: "border-navy-alt",
    text: "text-navy-alt",
    rotate: "rotate-[2deg]", // کج ملایم به سمت چپ
  },
  {
    label: "بازار کار واقعی",
    back: "bg-magenta",
    border: "border-magenta",
    text: "text-magenta",
    rotate: "rotate-[-2deg]", // کج به سمت راست
  },
  ,
  {
    label: "هنرستان رسمی",
    back: "bg-teal-alt",
    border: "border-teal",
    text: "text-teal-text",
    rotate: "rotate-[2deg]", // کج به سمت چپ
  },
];

export default function Story() {
  return (
    <section className="py-[88px] px-6 bg-[#F3F3F1]">
      <div className="max-w-content mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
        {/* ── ستون راست: تصویر ── */}
        <div className="relative flex items-start justify-center lg:justify-start -mt-2">
          <div className="relative w-full max-w-[560px]">
            <img
              src={yarnIllustration}
              alt="تصویر چنگال با ماکارونی — نماد تفاوت رکاد"
              loading="lazy"
              className="w-full h-auto object-contain drop-shadow-2xl -translate-x-[4%] -translate-y-[2%]"
            />

            {/* برچسب شناور روی عکس (کج -3 درجه) */}
            <span
              className="absolute bottom-[24%] right-[14%]
             bg-[#FFD700] 
             font-bold text-[13px] text-black
             rounded-[10px] px-5 py-2"
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

          {/* Pills با زاویه کج برای متن‌ها و سایه استیکری */}
          <div className="flex flex-wrap gap-4 mb-9">
            {pills.map((p) => (
              <span
                key={p.label}
                className={`relative inline-block ${p.rotate}`}
              >
                {/* لایه سایه پشت استیکر */}
                <span
                  className={`absolute inset-0 translate-x-[4px] translate-y-[4px] rounded-[10px] ${p.back}`}
                />
                {/* لایه اصلی و متن استیکر */}
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
            className="
    inline-flex
    items-center
    justify-center
    gap-3
    w-[240px]
    h-[52px]
    bg-[#61C4BC]
    text-white
    font-extrabold
    text-[18px]
    rounded-tl-none
    rounded-br-none
    rounded-tr-[10px]
    rounded-bl-[10px]
    hover:brightness-95
    transition-all
    
  "
          >
            <span>ادامه داستان رکاد</span>

            <svg width="18" height="22" viewBox="0 0 18 22" fill="none">
              <path
                d="M10.5 1L3 11H8L7 21L15 9H10L10.5 1Z"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
