const FEATURES = [
  {
    number: '۰۱',
    title: 'مسیر رشد شخصی‌سازی‌شده',
    desc: 'هر دانش‌آموز مسیر شخصی خودش رو داره؛ طراحی محتوا بر اساس همون مسیر انجام میشه تا هر چی نیاز داره رو یاد بگیره.',
    chip: 'bg-teal/10 text-teal-deep',
  },
  {
    number: '۰۲',
    title: 'یادگیری مستقل‌محور',
    desc: 'دانش‌آموزها یاد می‌گیرن خودشون مسیر یادگیری‌شون رو بسازن و مسئولیت پیشرفت خودشون رو به عهده بگیرن.',
    chip: 'bg-magenta/10 text-magenta',
  },
  {
    number: '۰۳',
    title: 'یادگیری مشارکتی',
    desc: 'کار روی پروژه‌های گروهی و تبادل تجربه با هم‌گروهی‌ها، بخش جدایی‌ناپذیر از فرآیند یادگیری در رکاده.',
    chip: 'bg-navy/10 text-navy',
  },
  {
    number: '۰۴',
    title: 'آموزش پروژه‌محور',
    desc: 'به جای حفظ کردن مطالب تئوری، دانش‌آموزها روی پروژه‌های واقعی و کاربردی مهارت‌هاشون رو تقویت می‌کنن.',
    chip: 'bg-orange/10 text-orange',
  },
]

function FeatureIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M5 20c0-3.5 3.1-6 7-6s7 2.5 7 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default function FamilyTrustSection() {
  return (
    <section id="counseling" className="bg-[#F7F9FB] py-14 md:py-20">
      <div className="container-page">
        <h2 className="text-center text-2xl font-extrabold text-ink md:text-[1.75rem]">
          چرا <span className="text-teal-deep">خانواده‌ها</span> به ما{' '}
          <span className="text-magenta">اعتماد</span> می‌کنن
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-8 text-muted">
          هر دانش‌آموز یک مسیر شخصی داره. سیستم آموزشی ما بر اساس چهار ستون
          طراحی شده تا بهترین نسخه از خودش بشه.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
          {FEATURES.map((f) => (
            <div
              key={f.number}
              className="rounded-2xl bg-white p-5 shadow-card transition-shadow hover:shadow-card-hover md:p-6"
            >
              <div className="flex items-center justify-between">
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-lg ${f.chip}`}
                >
                  <FeatureIcon />
                </span>
                <span className="text-xs font-bold text-muted/70">
                  {f.number}
                </span>
              </div>
              <h3 className="mt-4 text-sm font-extrabold text-ink md:text-base">
                {f.title}
              </h3>
              <p className="mt-2 text-[11px] leading-6 text-muted md:text-xs">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
