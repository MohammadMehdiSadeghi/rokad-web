const CARD_TITLE = 'مسیر رشد شخصی‌سازی‌شده'
const CARD_DESC =
  'استعدادسنجی دقیق و طراحی نقشه راهی که فقط مال تو باشه؛ نه یه مسیر یکسان برای همه.'

const CARDS = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  highlighted: i === 1,
}))

function PersonIcon({ className }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
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

export default function EcosystemSection() {
  return (
    <section id="cooperation" className="bg-navy py-14 md:py-20">
      <div className="container-page">
        <h2 className="text-2xl font-extrabold text-white md:text-[1.9rem]">
          یه <span className="text-teal">اکوسیستم کامل</span> برای رشد
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-8 text-white/70 md:text-[15px]">
          از اولین استعدادسنجی تا اولین شغلت، تمام گام‌های مسیر با پشتیبانی
          متخصصان طی میشه.
        </p>

        <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((card) => (
            <div
              key={card.id}
              className={`rounded-2xl border p-5 transition-transform hover:-translate-y-1 ${
                card.highlighted
                  ? 'border-teal bg-teal'
                  : 'border-teal/30 bg-navy-card'
              }`}
            >
              <span
                className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                  card.highlighted
                    ? 'bg-white/20 text-white'
                    : 'bg-teal/15 text-teal'
                }`}
              >
                <PersonIcon />
              </span>
              <h3
                className={`mt-4 text-sm font-extrabold md:text-base ${
                  card.highlighted ? 'text-white' : 'text-white'
                }`}
              >
                {CARD_TITLE}
              </h3>
              <p
                className={`mt-2 text-[11px] leading-6 md:text-xs ${
                  card.highlighted ? 'text-white/90' : 'text-white/60'
                }`}
              >
                {CARD_DESC}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
