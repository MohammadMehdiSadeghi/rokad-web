const STATS = [
  {
    label: 'شبکه رکاد',
    value: '۲',
    caption: 'شعبه‌ی مجزای هنرستانی برای هر جنسیت',
    accent: 'text-ink',
  },
  {
    label: 'جامعه فعال',
    value: '+۲۵۰',
    caption: 'دانش‌آموز فعال در سال گذشته و دوره‌ها',
    accent: 'text-magenta',
  },
  {
    label: 'رویداد استارتاپی',
    value: '+۳۰',
    caption: 'رویداد استارتاپی برگزار شده در سال اول فعالیت تحصیلی',
    accent: 'text-navy',
  },
  {
    label: 'نرخ اشتغال',
    value: '٪۷۶.۷',
    caption: 'دانش‌آموختگان شاغل و سرآمد در سال اول پس از فارغ‌التحصیلی',
    accent: 'text-teal-deep',
  },
]

export default function StatsSection() {
  return (
    <section id="honors" className="container-page py-12 md:py-16">
      <h2 className="text-center text-2xl font-extrabold text-ink md:text-[1.75rem]">
        <span className="text-teal-deep">رکاد</span> در یک نگاه، با اعتماد
      </h2>

      <div className="mt-9 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-card transition-shadow hover:shadow-card-hover md:p-6"
          >
            <p className="text-xs font-semibold text-muted md:text-sm">
              {stat.label}
            </p>
            <p className={`mt-3 text-3xl font-extrabold md:text-4xl ${stat.accent}`}>
              {stat.value}
            </p>
            <p className="mt-3 text-[11px] leading-6 text-muted md:text-xs">
              {stat.caption}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-14 text-center md:mt-16">
        <h3 className="text-xl font-extrabold leading-relaxed text-ink md:text-2xl">
          <span className="text-magenta">دخترونه</span> یا{' '}
          <span className="text-navy">پسرونه</span>، رکاد مسیرته
        </h3>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-8 text-muted">
          هر دو شعبه با محیط امن، منتورهای محرب و اکوسیستم اختصاصی.
          <br />
          فقط کافیه مسیر خودت رو انتخاب کنی.
        </p>
      </div>
    </section>
  )
}
