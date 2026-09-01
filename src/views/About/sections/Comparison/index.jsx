import Container from "../../../../layout/Container";

// ── پترن هندسی کم‌رنگ پس‌زمینه (دقیقاً از فیگما) ──
function BackgroundPattern() {
  return (
    <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full pointer-events-none select-none">
      <path d="M-40 80 L260 -60 L520 40 L360 300 L-60 260 Z" fill="#1F2937" opacity="0.04" />
      <path d="M1100 -100 L1420 40 L1280 320 L980 220 L1020 40 Z" fill="#1F2937" opacity="0.04" />
      <path d="M240 560 L520 440 L720 640 L560 860 L180 780 Z" fill="#1F2937" opacity="0.035" />
      <path d="M980 520 L1280 420 L1450 620 L1320 840 L900 760 Z" fill="#1F2937" opacity="0.03" />
      <path d="M60 480 L300 380 L400 560 L220 720 Z" fill="#55BDB5" opacity="0.05" />
      <path d="M1080 180 L1340 100 L1400 300 L1200 400 Z" fill="#E9145A" opacity="0.04" />
      <line x1="720" y1="-20" x2="860" y2="900" stroke="#1F2937" strokeWidth="2" opacity="0.04" />
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
  "مهارت‌های نرم فقط اسمی | نه به شکل تمرینی",
  "آموزش تئوری، بدون تجربه واقعی از دنیای کار",
  "یادگیری انفرادی و رقابتی",
  "ارتباط با صنعت و بازار کار: صفر",
];
const regularOutcome = "خروجی: دیپلم، بدون پروژه واقعی";

// ── داده کارت چپ (هنرستان استارتاپی رکاد — Primary/تیل) ──
const rokadItems = [
  "پروژه‌های واقعی از روز اول | یادگیری با انجام‌دادن",
  "یادگیری تیمی و مبتنی بر جامعه | بچه‌ها با هم بزرگ می‌شن",
  "مهارت‌های نرم توی رویداد، بوت‌کمپ و کوچینگ واقعی",
  "ارتباط مستقیم با اکوسیستم استارتاپی و منتورهای مجرب",
];
const rokadOutcome = "خروجی: دیپلم + مسیر شغلی روشن + پورتفولیو";

// رنگ‌های دقیق فیگما
const TEAL = { main: "#59BBAF", bg: "#EEF8F7", itemBg: "#CCEAE6", deep: "#50A89E", badgeText: "#EEF8F7" };
const PINK = { main: "#E0195B", bg: "#FCE8EF", itemBg: "#F5B8CC", deep: "#E40141", badgeText: "#FCE8EF" };

function ComparisonCard({ badge, title, titleAccent, items, outcome, color, tilt }) {
  return (
    <div className={`relative h-full ${tilt}`}>
      {/* شدو همرنگ کارت (DROP 5px سخت از فیگما) */}
      <div
        aria-hidden="true"
        className="absolute top-[0.3125rem] left-[0.3125rem] w-full h-full"
        style={{ backgroundColor: color.main, borderRadius: "3px 0 30px 0" }}
      />
      {/* خود کارت — پس‌زمینه تینت رنگی (نه سفید) */}
      <div
        className="relative z-10 h-full flex flex-col overflow-visible p-[34px]"
        style={{
          backgroundColor: color.bg,
          border: "3px solid",
          borderColor: color.main,
          borderRadius: "3px 0 30px 0",
        }}
      >
        {/* هدر — بج pill + عنوان */}
        <div className="relative pb-4 sm:pb-5">
          {/* بج در گوشه بالا-راست — overlap روی لبه */}
          <div className="absolute -top-8 right-0">
            <span
              className="inline-flex items-center whitespace-nowrap font-bold text-[1.25rem]"
              style={{
                backgroundColor: color.main,
                color: color.badgeText,
                border: "2px solid #292827",
                borderRadius: "9px",
                padding: "3px 12px",
                boxShadow: "2px 2px 0 0 rgba(41,40,39,0.9)",
              }}
            >
              {badge}
            </span>
          </div>
          <h3 className="font-black text-[2rem] sm:text-[2.4375rem] leading-[1.3] text-right pt-5">
            <span className="text-[#292827]">{title}</span>{" "}
            <span style={{ color: color.main }}>{titleAccent}</span>
          </h3>
        </div>

        {/* لیست آیتم‌ها */}
        <div className="flex flex-col gap-2.5 sm:gap-3 flex-1">
          {items.map((text, i) => (
            <div
              key={i}
              className="flex items-start gap-2.5 sm:gap-3 py-[7px] px-2.5 sm:px-3"
              style={{ backgroundColor: color.itemBg, borderRadius: "7.3px" }}
            >
              {color === PINK ? (
                <CrossIcon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5" style={{ color: color.deep }} />
              ) : (
                <CheckIcon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5" style={{ color: color.deep }} />
              )}
              <span className="text-[0.9375rem] sm:text-[1.14rem] leading-[1.6] font-semibold text-[#292827]">
                {text}
              </span>
            </div>
          ))}
          {/* ردیف خروجی */}
          <div
            className="flex items-start gap-2.5 sm:gap-3 py-[7px] px-2.5 sm:px-3"
            style={{ backgroundColor: color.itemBg, borderRadius: "7.3px" }}
          >
            {color === PINK ? (
              <CrossIcon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5" style={{ color: color.deep }} />
            ) : (
              <CheckIcon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5" style={{ color: color.deep }} />
            )}
            <span className="text-[0.9375rem] sm:text-[1.14rem] leading-[1.6] text-[#292827]">
              <strong className="font-extrabold">خروجی: </strong>
              {outcome.replace("خروجی: ", "")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AboutComparison() {
  return (
    <section className="relative py-[4rem] sm:py-[5rem] lg:py-[6rem] w-full px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      {/* پترن هندسی کم‌رنگ — پشت همه */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <BackgroundPattern />
      </div>

      <Container className="relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="font-black text-[2.5rem] sm:text-[3rem] lg:text-[3.8125rem] leading-[1.2] mb-4 sm:mb-5 text-[#292827]">
            <span className="text-[#59BBAF]">تفاوت</span>{" "}
            <span>رکاد</span>{" "}
            <span>با</span>{" "}
            <span className="text-[#E0195B]">بقیه</span>{" "}
            <span>دقیقاً</span>{" "}
            <span>چیه؟</span>
          </h2>
          <p className="text-[0.875rem] sm:text-[1rem] text-black max-w-xl mx-auto leading-[1.8]">
            اگه دو تا مدرسه از بیرون شبیه هم به نظر برسن، معنیش این نیست که شبیه هم کار می‌کنن.
          </p>
        </div>

        {/* در RTL: اولی (راست) = مدارس معمولی، دومی (چپ) = رکاد */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 max-w-5xl mx-auto">
          <ComparisonCard
            badge="مدارس معمولی"
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
