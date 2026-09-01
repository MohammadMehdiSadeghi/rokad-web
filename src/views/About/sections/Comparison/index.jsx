import Container from "../../../../layout/Container";

// ── پترن هندسی بسیار کم‌رنگ پس‌زمینه — سطوح چندضلعی بزرگ ──
function BackgroundPattern() {
  return (
    <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full pointer-events-none select-none">
      {/* چندضلعی‌های بزرگ کم‌رنگ */}
      <path d="M-40 80 L260 -60 L520 40 L360 300 L-60 260 Z" fill="#1F2937" opacity="0.04" />
      <path d="M1100 -100 L1420 40 L1280 320 L980 220 L1020 40 Z" fill="#1F2937" opacity="0.04" />
      <path d="M240 560 L520 440 L720 640 L560 860 L180 780 Z" fill="#1F2937" opacity="0.035" />
      <path d="M980 520 L1280 420 L1450 620 L1320 840 L900 760 Z" fill="#1F2937" opacity="0.03" />
      <path d="M60 480 L300 380 L400 560 L220 720 Z" fill="#55BDB5" opacity="0.05" />
      <path d="M1080 180 L1340 100 L1400 300 L1200 400 Z" fill="#E9145A" opacity="0.04" />
      {/* خطوط مورب */}
      <line x1="720" y1="-20" x2="860" y2="900" stroke="#1F2937" strokeWidth="2" opacity="0.04" />
      <line x1="60" y1="140" x2="380" y2="180" stroke="#1F2937" strokeWidth="2" opacity="0.04" />
      <line x1="1180" y1="700" x2="1500" y2="660" stroke="#1F2937" strokeWidth="2" opacity="0.04" />
    </svg>
  );
}

function CheckIcon({ className, style }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} style={style}>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
      <path d="M8 12.5l2.5 2.5 5.5-5.5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CrossIcon({ className, style }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} style={style}>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
      <path d="M15 9l-6 6M9 9l6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

// ── داده کارت راست (مدارس معمولی — Accent/صورتی) ──
const regularItems = [
  "مهارت‌های نرم فقط اسمی — نه به شکل تمرینی",
  "آموزش تئوری، بدون تجربه واقعی از دنیای کار",
  "یادگیری انفرادی و رقابتی",
  "ارتباط با صنعت و بازار کار: صفر",
];
const regularOutcome = "دیپلم، بدون پروژه واقعی";

// ── داده کارت چپ (هنرستان استارتاپی رکاد — Primary/تیل) ──
const rokadItems = [
  "پروژه‌های واقعی از روز اول — یادگیری با انجام‌دادن",
  "یادگیری تیمی و مبتنی بر جامعه — بچه‌ها با هم بزرگ می‌شن",
  "مهارت‌های نرم توی رویداد، بوت‌کمپ و کوچینگ واقعی",
  "ارتباط مستقیم با اکوسیستم استارتاپی و منتورهای مجرب",
];
const rokadOutcome = "دیپلم + مسیر شغلی روشن + پورتفولیو";

const TEAL = { main: "#55BDB5", deep: "#3A9E96", bg: "#EEF9F8", itemBg: "#E3F4F2", dark: "#1F4E4A" };
const PINK = { main: "#E9145A", deep: "#C60036", bg: "#FCE8EF", itemBg: "#FADCE7", dark: "#8A0E38" };

function ComparisonCard({ badge, title, titleAccent, items, outcome, color, tilt }) {
  return (
    <div className={`relative h-full ${tilt}`}>
      {/* لایه دوم باریک (Offset Border) — حس Depth بدون شدو سنگین */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          border: "2px solid",
          borderColor: color.main,
          borderRadius: "0 2.5rem 0.875rem 0.875rem",
          transform: "translate(6px, 6px)",
          opacity: 0.35,
        }}
      />
      {/* خود کارت */}
      <div
        className="relative z-10 h-full flex flex-col overflow-visible bg-white"
        style={{
          border: "3px solid",
          borderColor: color.main,
          borderRadius: "0 2.5rem 0.875rem 0.875rem",
        }}
      >
        {/* هدر — بج مستطیلی با گوشه گرد + عنوان */}
        <div className="relative px-5 sm:px-7 pt-7 sm:pt-9 pb-5 sm:pb-6">
          {/* بج در گوشه بالا-راست — روی لبه کارت Overlap */}
          <div className="absolute -top-3.5 right-4 sm:right-6">
            <span
              className="inline-flex items-center px-4 sm:px-5 py-1.5 sm:py-2 rounded-[0.75rem] text-white font-bold text-[0.75rem] sm:text-[0.8125rem] whitespace-nowrap"
              style={{
                backgroundColor: color.main,
                border: "2px solid #292827",
              }}
            >
              {badge}
            </span>
          </div>
          <h3 className="font-black text-[1.25rem] sm:text-[1.5rem] lg:text-[1.75rem] leading-[1.35] mt-3 sm:mt-4 text-right">
            <span className="text-[#292827]">{title}</span>{" "}
            <span style={{ color: color.main }}>{titleAccent}</span>
          </h3>
        </div>

        {/* لیست آیتم‌ها */}
        <div className="px-4 sm:px-6 pb-6 sm:pb-8 flex flex-col gap-2.5 sm:gap-3 flex-1">
          {items.map((text, i) => (
            <div
              key={i}
              className="flex items-start gap-3 rounded-[0.875rem] px-3.5 sm:px-4 py-3 sm:py-3.5"
              style={{ backgroundColor: color.itemBg }}
            >
              {color === PINK ? (
                <CrossIcon className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-0.5" style={{ color: color.main }} />
              ) : (
                <CheckIcon className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-0.5" style={{ color: color.main }} />
              )}
              <span className="text-[0.875rem] sm:text-[0.9375rem] leading-[1.7] font-medium" style={{ color: "#3F3F3F" }}>
                {text}
              </span>
            </div>
          ))}
          {/* ردیف خروجی */}
          <div
            className="flex items-start gap-3 rounded-[0.875rem] px-3.5 sm:px-4 py-3 sm:py-3.5"
            style={{ backgroundColor: color.itemBg, border: "2px solid", borderColor: color.main }}
          >
            {color === PINK ? (
              <CrossIcon className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-0.5" style={{ color: color.main }} />
            ) : (
              <CheckIcon className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-0.5" style={{ color: color.main }} />
            )}
            <span className="text-[0.875rem] sm:text-[0.9375rem] leading-[1.7]" style={{ color: "#3F3F3F" }}>
              <strong className="font-extrabold" style={{ color: color.dark }}>خروجی: </strong>
              {outcome}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AboutComparison() {
  return (
    <section className="relative py-[4rem] sm:py-[5rem] lg:py-[6rem] w-full px-4 sm:px-6 lg:px-8 bg-[#FAFAFA] overflow-hidden">
      {/* پترن هندسی کم‌رنگ — پشت همه */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <BackgroundPattern />
      </div>

      <Container className="relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="font-black text-[1.5rem] sm:text-[2.25rem] lg:text-[3.3125rem] leading-[1.3] mb-4 sm:mb-5 text-[#292827]">
            <span className="text-[#55BDB5]">تفاوت</span>{" "}
            <span className="text-[#E9145A]">رکاد</span>{" "}
            <span>با</span>{" "}
            <span>بقیه</span>{" "}
            <span>دقیقاً</span>{" "}
            <span>چیه؟</span>
          </h2>
          <p className="text-[0.875rem] sm:text-[1rem] lg:text-[1.125rem] text-[#6B7280] max-w-xl mx-auto leading-[1.8]">
            اگه دو تا مدرسه از بیرون شبیه هم به نظر برسن، معنیش این نیست که شبیه هم کار می‌کنن.
          </p>
        </div>

        {/* در RTL: اولی (راست) = مدارس معمولی، دومی (چپ) = رکاد */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 max-w-5xl mx-auto">
          <ComparisonCard
            badge="مدرسه معمولی"
            title="تمرکز روی"
            titleAccent="کنکور و درس"
            items={regularItems}
            outcome={regularOutcome}
            color={PINK}
            tilt="md:-rotate-[0.5deg]"
          />
          <ComparisonCard
            badge="هنرستان استارتاپی رکاد"
            title="تمرکز روی"
            titleAccent="مسیر شغلی و مهارت"
            items={rokadItems}
            outcome={rokadOutcome}
            color={TEAL}
            tilt="md:rotate-[0.5deg]"
          />
        </div>
      </Container>
    </section>
  );
}
