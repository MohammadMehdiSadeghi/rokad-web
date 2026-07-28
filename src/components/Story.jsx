import yarnIllustration from "../assets/images/yarn-illustration.png";

const pills = [
  { label: "اکوسیستم استارتاپی", back: "bg-teal-alt", border: "border-teal", text: "text-teal-text" },
  { label: "بازار کار واقعی",     back: "bg-magenta",  border: "border-magenta", text: "text-magenta" },
  { label: "هنرستان رسمی",        back: "bg-navy-alt", border: "border-navy-alt", text: "text-navy-alt" },
];

export default function Story() {
  return (
    <section className="py-[88px] px-6 bg-bg-lavender">
      <div className="max-w-content mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center">

        {/* ── Right column: text (RTL → renders on right) ── */}
        <div>
          <h2 className="font-black text-[32px] sm:text-[40px] lg:text-[46px] leading-[1.35] mb-5">
            چرا <span className="text-teal-wordmark">رکاد</span> به مدرسه معمولی نیست؟
          </h2>

          <p className="text-[14px] sm:text-[15px] leading-[2] text-navy/70 max-w-[460px] mb-8">
            ما هنرستان رو با اکوسیستم استارتاپی و بازار کار واقعی ترکیب کردیم. اینجا فقط کتاب
            نمی‌خونی؛ روی چالش‌های واقعی کار می‌کنی، با منتورهای متخصص همراهی می‌شی و توی
            محیطی امن، جرأت شکست خوردن و دوباره پاشدن رو یاد می‌گیری.
          </p>

          {/* Pills */}
          <div className="flex flex-wrap gap-3 mb-9">
            {pills.map((p) => (
              <span key={p.label} className="relative inline-block">
                {/* shadow layer */}
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
            {/* Arrow icon (RTL: points left = "forward") */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
              <path
                d="M5 12h14M12 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            ادامه داستان رکاد
          </a>
        </div>

        {/* ── Left column: illustration (RTL → renders on left) ── */}
        <div className="relative flex items-center justify-center">
          <img
            src={yarnIllustration}
            alt="تصویر چنگال با ماکارونی — نماد تفاوت رکاد"
            loading="lazy"
            className="w-full max-w-[520px] h-auto object-contain"
          />

          {/* Floating tag — bottom-right of illustration */}
          <span
            className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6
                       bg-[#f9f3e3] border-2 border-[#f4c76a]
                       font-bold text-[13px] text-[#8a6a00]
                       rounded-[10px] px-4 py-2
                       rotate-[-2deg]
                       shadow-sm"
          >
            رکاد یعنی متفاوت بودن...
          </span>
        </div>

      </div>
    </section>
  );
}
