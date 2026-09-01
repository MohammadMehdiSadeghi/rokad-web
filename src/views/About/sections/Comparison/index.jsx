import Container from "../../../../layout/Container";

// ── پترن لوزی (Diamond/Rhombus) کم‌رنگ پس‌زمینه ──
function BackgroundPattern() {
  const diamonds = [
    [60, 120, 70], [180, 60, 45], [330, 140, 60], [480, 70, 40],
    [640, 150, 75], [820, 60, 50], [960, 130, 65], [1120, 80, 45],
    [1300, 150, 70], [1400, 60, 40], [140, 500, 55], [420, 620, 70],
    [700, 560, 45], [980, 650, 65], [1250, 540, 50], [50, 740, 40],
  ];
  return (
    <svg viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full pointer-events-none select-none">
      {diamonds.map(([cx, cy, s], i) => (
        <rect key={i} x={cx - s / 2} y={cy - s / 2} width={s} height={s} rx={4}
          transform={`rotate(45 ${cx} ${cy})`} fill="#1F2937" opacity="0.05" />
      ))}
      <rect x={860} y={-20} width={90} height={90} rx={5} transform="rotate(45 905 -20)" fill="#55BDB5" opacity="0.06" />
      <rect x={210} y={330} width={80} height={80} rx={5} transform="rotate(45 250 330)" fill="#E9145A" opacity="0.05" />
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

// ── داده کارت راست (رکاد — Primary) ──
const rokadItems = [
  "پروژه‌های واقعی از روز اول — یادگیری با انجام‌دادن",
  "یادگیری تیمی و مبتنی بر جامعه — بچه‌ها با هم بزرگ می‌شن",
  "مهارت‌های نرم توی رویداد، بوت‌کمپ و کوچینگ واقعی",
  "ارتباط مستقیم با اکوسیستم استارتاپی و منتورهای مجرب",
];
const rokadOutcome = "دیپلم + مسیر شغلی روشن + پورتفولیو";

// ── داده کارت چپ (مدارس معمولی — Accent) ──
const regularItems = [
  "مهارت‌های نرم فقط اسمی — نه به شکل تمرینی",
  "آموزش تئوری، بدون تجربه واقعی از دنیای کار",
  "یادگیری انفرادی و رقابتی",
  "ارتباط با صنعت و بازار کار: صفر",
];
const regularOutcome = "دیپلم، بدون پروژه واقعی";

const TEAL = { main: "#55BDB5", deep: "#3A9E96", bg: "#EEF9F8", itemBg: "#E3F4F2", dark: "#1F4E4A" };
const PINK = { main: "#E9145A", deep: "#C60036", bg: "#FCE8EF", itemBg: "#FADCE7", dark: "#8A0E38" };

function ComparisonCard({ badge, title, titleAccent, items, outcome, color }) {
  return (
    <div className="relative h-full">
      {/* شدو نرم — Elevation */}
      <div aria-hidden="true" className="absolute top-[5px] left-[5px] w-full h-full bg-[#292827]/15 rounded-tl-[2.5rem] rounded-br-[2.5rem] rounded-tr-[0.75rem] rounded-bl-[0.75rem]" />
      {/* خود کارت */}
      <div
        className="relative z-10 h-full overflow-visible flex flex-col rounded-tl-[2.5rem] rounded-br-[2.5rem] rounded-tr-[0.75rem] rounded-bl-[0.75rem] bg-white"
        style={{ border: "3px solid", borderColor: color.main }}
      >
        {/* هدر — بج pill + عنوان */}
        <div className="relative px-5 sm:px-8 pt-7 sm:pt-9 pb-5 sm:pb-6">
          {/* بج pill که روی گوشه بالا-راست کارت overlap می‌شه */}
          <div className="absolute -top-3.5 right-5 sm:right-8">
            <span
              className="inline-flex items-center px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-white font-extrabold text-[0.75rem] sm:text-[0.875rem] whitespace-nowrap"
              style={{
                backgroundColor: color.main,
                border: "2px solid #292827",
                boxShadow: "2px 2px 0 0 rgba(41,40,39,0.85)",
              }}
            >
              {badge}
            </span>
          </div>
          <h3 className="font-black text-[1.25rem] sm:text-[1.625rem] lg:text-[1.875rem] leading-[1.35] text-[#292827] mt-3 sm:mt-4">
            <span className="text-[#292827]">{title}</span>{" "}
            <span style={{ color: color.main }}>{titleAccent}</span>
          </h3>
        </div>

        {/* لیست آیتم‌ها */}
        <div className="px-4 sm:px-6 pb-6 sm:pb-8 flex flex-col gap-2.5 sm:gap-3 flex-1">
          {items.map((text, i) => (
            <div key={i} className="flex items-start gap-3 rounded-[0.875rem] px-3.5 sm:px-4 py-3 sm:py-3.5" style={{ backgroundColor: color.itemBg }}>
              {color === PINK ? (
                <CrossIcon className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-0.5" style={{ color: color.main }} />
              ) : (
                <CheckIcon className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-0.5" style={{ color: color.main }} />
              )}
              <span className="text-[0.875rem] sm:text-[1rem] leading-[1.7] font-medium" style={{ color: "#3F3F3F" }}>
                {text}
              </span>
            </div>
          ))}
          {/* ردیف خروجی */}
          <div className="flex items-start gap-3 rounded-[0.875rem] px-3.5 sm:px-4 py-3 sm:py-3.5 border-2" style={{ backgroundColor: color.itemBg, borderColor: color.main }}>
            {color === PINK ? (
              <CrossIcon className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-0.5" style={{ color: color.main }} />
            ) : (
              <CheckIcon className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-0.5" style={{ color: color.main }} />
            )}
            <span className="text-[0.875rem] sm:text-[1rem] leading-[1.7]" style={{ color: "#3F3F3F" }}>
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
      {/* پترن لوزی کم‌رنگ */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <BackgroundPattern />
      </div>

      <Container className="relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="font-black text-[1.5rem] sm:text-[2.25rem] lg:text-[3.3125rem] leading-[1.3] mb-4 sm:mb-5 text-[#292827]">
            <span>تفاوت</span>{" "}
            <span className="text-[#55BDB5]">رکاد</span>{" "}
            <span>با</span>{" "}
            <span className="text-[#E9145A]">بقیه</span>{" "}
            <span>دقیقاً</span>{" "}
            <span>چیه؟</span>
          </h2>
          <p className="text-[0.875rem] sm:text-[1rem] lg:text-[1.125rem] text-[#6B7280] max-w-xl mx-auto leading-[1.8]">
            اگه دو تا مدرسه از بیرون شبیه هم به نظر برسن، معنیش این نیست شبیه هم کار می‌کنن.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-9 lg:gap-12 max-w-5xl mx-auto">
          <ComparisonCard
            badge="هنرستان استارتاپی رکاد"
            title="تمرکز روی"
            titleAccent="مسیر شغلی و مهارت"
            items={rokadItems}
            outcome={rokadOutcome}
            color={TEAL}
          />
          <ComparisonCard
            badge="مدرسه معمولی"
            title="تمرکز روی"
            titleAccent="کنکور و درس"
            items={regularItems}
            outcome={regularOutcome}
            color={PINK}
          />
        </div>
      </Container>
    </section>
  );
}
