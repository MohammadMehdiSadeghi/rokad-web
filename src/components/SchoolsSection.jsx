import girlIllustration from '../assets/images/girl-illustration.png'
import boyIllustration from '../assets/images/boy-illustration.png'

const SCHOOLS = [
  {
    key: 'girls',
    title: 'هنرستان دخترانه رکاد',
    address: 'مشهد | فراز عباس‌آباد ۳۳',
    bullets: ['شبکه و نیروگذاری', 'متن آموزشی رشته دخترانه'],
    cta: 'پیش‌ثبت‌نام دخترانه',
    illustration: girlIllustration,
    bg: 'bg-gradient-to-bl from-magenta to-magenta-dark',
  },
  {
    key: 'boys',
    title: 'هنرستان پسرانه رکاد',
    address: 'مشهد | فراز عباس‌آباد ۳۳',
    bullets: ['توسعه و توسعه بازارکار اینترنتی', 'تجربه محتوای چندرشته‌ای'],
    cta: 'پیش‌ثبت‌نام پسرانه',
    illustration: boyIllustration,
    bg: 'bg-gradient-to-bl from-navy-light to-navy',
  },
]

export default function SchoolsSection() {
  return (
    <section id="schools" className="container-page py-10 md:py-14">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
        {SCHOOLS.map((school) => (
          <div
            key={school.key}
            className={`relative overflow-hidden rounded-3xl px-7 pt-8 pb-0 ${school.bg}`}
          >
            <div className="absolute inset-0 bg-diamond-pattern opacity-30" aria-hidden="true" />

            <div className="relative flex flex-col gap-6 md:flex-row md:items-end">
              <div className="flex-1 pb-8">
                <h3 className="text-xl font-extrabold text-white md:text-2xl">
                  {school.title}
                </h3>
                <p className="mt-2 text-xs text-white/75">{school.address}</p>

                <ul className="mt-5 space-y-2.5">
                  {school.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-center gap-2 text-xs text-white/90 md:text-sm"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/80" />
                      {b}
                    </li>
                  ))}
                </ul>

                <a
                  href={`#${school.key}-register`}
                  className="mt-6 inline-block rounded-lg bg-white px-5 py-3 text-xs font-bold text-ink transition-transform hover:-translate-y-0.5 md:text-sm"
                >
                  {school.cta}
                </a>
              </div>

              <div className="flex shrink-0 justify-center md:w-40">
                <img
                  src={school.illustration}
                  alt={school.title}
                  className="h-auto w-[150px] object-contain object-bottom md:w-[170px]"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
