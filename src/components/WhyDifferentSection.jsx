import yarnIllustration from '../assets/images/yarn-illustration.png'

const PILLS = ['هنرستان رسمی', 'بازارکار واقعی', 'اکوسیستم استارتاپی']

export default function WhyDifferentSection() {
  return (
    <section id="about" className="container-page py-14 md:py-20">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-8">
        {/* Text content */}
        <div>
          <h2 className="text-2xl font-extrabold leading-relaxed text-ink md:text-[1.9rem]">
            چرا <span className="text-teal-deep">رکاد</span> به مدرسه معمولی
            نیست؟
          </h2>
          <p className="mt-5 text-sm leading-8 text-muted md:text-[15px]">
            ما هنرستان رو با اکوسیستم واقعی بازارکار ترکیب کردیم؛ اینجا فقط
            کتاب نمی‌خونی.
            <br />
            روی چالش‌های واقعی کار می‌کنی، با متخصص‌های صنعتی می‌سنجی و توی
            محیطی امن، جرات شکست خوردن و دوباره تلاش کردن رو یاد می‌گیری.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            {PILLS.map((pill) => (
              <span
                key={pill}
                className="rounded-full border border-teal/40 bg-teal/5 px-4 py-2 text-xs font-semibold text-teal-deep md:text-sm"
              >
                {pill}
              </span>
            ))}
          </div>

          <a
            href="#story"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-navy px-6 py-3.5 text-sm font-bold text-white transition-transform hover:-translate-y-0.5"
          >
            ادامه داستان رکاد
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 6l-6 6 6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        {/* Illustration */}
        <div className="relative flex justify-center md:justify-end">
          <img
            src={yarnIllustration}
            alt="رکاد یعنی متفاوت بودن"
            className="w-full max-w-[420px] object-contain"
          />
          <div className="absolute -top-2 left-2 rounded-2xl bg-white px-4 py-2 text-xs font-semibold text-ink shadow-card md:text-sm">
            رکاد یعنی متفاوت بودن...
          </div>
        </div>
      </div>
    </section>
  )
}
