const pills = [
  { label: "هنرستان رسمی", back: "bg-navy-alt", border: "border-navy-alt", text: "text-navy-alt" },
  { label: "بازار کار واقعی", back: "bg-teal-alt", border: "border-teal", text: "text-teal-text" },
  { label: "اکوسیستم استاتاپی", back: "bg-magenta", border: "border-magenta", text: "text-magenta-text" },
  { label: "رکاد یعنی متفاوت بودن...", back: "bg-orange-alt", border: "border-orange", text: "text-orange" },
];

import yarnIllustration from "../assets/images/yarn-illustration.png";

export default function Story() {
  return (
    <section className="py-[88px] px-6 bg-bg-lavender">
      <div className="max-w-content mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <div>
          <h2 className="font-black text-[28px] sm:text-4xl lg:text-[46px] leading-[1.3] mb-5">
            چرا رکاد یه مدرسه معمولی نیست؟
          </h2>
          <p className="text-base leading-[1.9] text-navy max-w-[520px] mb-7">
            ما هنرستان رو با اکوسیستم استارتاپی و بازار کار واقعی ترکیب کردیم.
            اینجا فقط کتاب نمی‌خونی؛ روی چالش‌های واقعی کار می‌کنی، با
            منتورهای متخصص همراهی می‌شی و توی محیطی امن، جرأتِ شکست خوردن و
            دوباره پاشدن رو یاد می‌گیری.
          </p>

          <div className="flex flex-wrap gap-3 mb-7">
            {pills.map((p) => (
              <span key={p.label} className="relative inline-block">
                <span className={`absolute inset-1 -right-1 -bottom-1 rounded-[10px] ${p.back}`} />
                <span
                  className={`relative block bg-white border-2 rounded-[10px] px-[18px] py-2.5 font-bold text-sm ${p.border} ${p.text}`}
                >
                  {p.label}
                </span>
              </span>
            ))}
          </div>

          <a href="#" className="inline-flex items-center gap-2 font-extrabold text-[15px] text-teal-text">
            ادامه داستان رکاد
            <svg width="20" height="20" viewBox="0 0 24 24" className="rotate-180">
              <path
                d="M9 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        <div
          className="bg-white rounded-[32px] min-h-[280px] lg:min-h-[340px] flex items-center justify-center shadow-soft overflow-hidden"
        >
          <img
            src={yarnIllustration}
            alt="نشانگر تصویری از تفاوت رکاد با یک مدرسه معمولی"
            loading="lazy"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
