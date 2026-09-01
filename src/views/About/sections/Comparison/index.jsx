import Container from "../../../../layout/Container";

// ── پترن هندسی محو پس‌زمینه — Polygon نامنظم، خیلی کم‌رنگ ──
function BackgroundPattern() {
  return (
    <svg
      viewBox="0 0 1440 800"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full pointer-events-none select-none"
    >
      <g fill="#1F2937" opacity="0.05">
        <path d="M-80,120 L160,40 L320,180 L120,260 Z" />
        <path d="M1150,-40 L1330,60 L1260,220 L1080,120 Z" />
        <path d="M900,620 L1100,560 L1180,720 L980,780 Z" />
        <path d="M60,640 L220,580 L280,740 L120,800 Z" />
        <path d="M520,-60 L680,0 L620,160 L460,100 Z" />
        <path d="M1380,480 L1480,540 L1420,680 L1320,620 Z" />
      </g>
      <g fill="#55BDB5" opacity="0.06">
        <path d="M-40,420 L140,360 L220,520 L40,580 Z" />
        <path d="M1240,280 L1400,220 L1480,380 L1320,440 Z" />
      </g>
      <g fill="#E9145A" opacity="0.05">
        <path d="M760,-20 L920,40 L860,200 L700,140 Z" />
        <path d="M300,300 L440,260 L500,400 L360,440 Z" />
      </g>
    </svg>
  );
}

function CheckIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
      <path d="M8 12.5l2.5 2.5 5.5-5.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CrossIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
      <path d="M15 9l-6 6M9 9l6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

const rokadChecks = [
  { text: "پروژه‌های واقعی از روز اول — یادگیری با انجام‌دادن" },
  { text: "یادگیری تیمی و مبتنی بر جامعه — بچه‌ها با هم بزرگ می‌شن" },
  { text: "مهارت‌های نرم توی رویداد، بوت‌کمپ و کوچینگ واقعی" },
  { text: "ارتباط مستقیم با اکوسیستم استارتاپی و منتورهای مجرب" },
  { text: "خروجی: دیپلم + مسیر شغلی روشن + پورتفولیو", highlight: true },
];

const regularChecks = [
  { text: "مهارت‌های نرم فقط اسمی — نه به شکل تمرینی", cross: true },
  { text: "آموزش تئوری، بدون تجربه واقعی از دنیای کار", cross: true },
  { text: "یادگیری انفرادی و رقابتی", cross: true },
  { text: "ارتباط با صنعت و بازار کار: صفر", cross: true },
  { text: "خروجی: دیپلم، بدون پروژه واقعی", cross: true, highlight: true },
];

const TEAL = { main: "#55BDB5", deep: "#3A9E96", bg: "#EEF9F8", itemBg: "#D4EDEA", dark: "#1F4E4A" };
const PINK = { main: "#E9145A", deep: "#C60036", bg: "#FCE8EF", itemBg: "#F5CDDB", dark: "#8A0E38" };

const squircle = "rounded-tl-[2rem] rounded-br-[2rem] rounded-tr-none rounded-bl-none [corner-shape:squircle]";

function ComparisonCard({ title, subtitle, items, color }) {
  return (
    <div className="relative h-full">
      {/* شدو تیره — استیکری */}
      <div
        aria-hidden="true"
        className={`absolute top-[5px] left-[5px] w-full h-full bg-[#292827] ${squircle}`}
      />
      {/* خود کارت */}
      <div
        className={`relative z-10 h-full ${squircle} overflow-hidden flex flex-col`}
        style={{ backgroundColor: color.bg, border: "3px solid", borderColor: color.main }}
      >
        {/* هدر کارت — بج + تیتر */}
        <div className="px-5 sm:px-8 pt-6 sm:pt-8 pb-4 sm:pb-5">
          {/* بج استیکری */}
          <div
            className="inline-flex items-center px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-[0.5rem] mb-4 sm:mb-5"
            style={{
              backgroundColor: color.main,
              border: "2px solid #292827",
              boxShadow: "2px 2px 0 0 rgba(41,40,39,0.9)",
            }}
          >
            <span className="text-white font-extrabold text-[0.75rem] sm:text-[0.875rem] whitespace-nowrap">
              {subtitle}
            </span>
          </div>
          <h3 className="font-black text-[1.125rem] sm:text-[1.5rem] lg:text-[1.75rem] leading-[1.3] text-[#292827]">
            {title}
          </h3>
        </div>

        {/* آیتم‌های لیست */}
        <div className="px-4 sm:px-6 pb-6 sm:pb-8 flex flex-col gap-2.5 sm:gap-3 flex-1">
          {items.map((item, i) => {
            const isObj = typeof item === "object";
            const text = isObj ? item.text : item;
            const isCross = isObj && item.cross;
            const isHighlight = isObj && item.highlight;
            return (
              <div
                key={i}
                className={`flex items-start gap-3 rounded-[0.875rem] px-3.5 sm:px-4 py-3 sm:py-3.5 ${
                  isHighlight ? "border-2" : ""
                }`}
                style={{
                  backgroundColor: color.itemBg,
                  borderColor: isHighlight ? color.main : "transparent",
                }}
              >
                {isCross ? (
                  <CrossIcon className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-0.5" style={{ color: color.main }} />
                ) : (
                  <CheckIcon className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-0.5" style={{ color: color.main }} />
                )}
                <span
                  className={`text-[0.875rem] sm:text-[1rem] leading-[1.7] ${
                    isHighlight ? "font-extrabold" : "font-medium"
                  }`}
                  style={{ color: isHighlight ? color.dark : "#3F3F3F" }}
                >
                  {text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function AboutComparison() {
  return (
    <section className="relative py-[4rem] sm:py-[5rem] lg:py-[6rem] w-full px-4 sm:px-6 lg:px-8 bg-[#FAFAFA] overflow-hidden">
      {/* پترن هندسی محو */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <BackgroundPattern />
      </div>

      <Container className="relative z-10">
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <h2 className="font-black text-[1.5rem] sm:text-[2.25rem] lg:text-[3.3125rem] leading-[1.3] mb-4 sm:mb-6 text-[#292827]">
            <span className="inline-block rotate-1 text-[#55BDB5]">تفاوت</span>{" "}
            <span className="inline-block -rotate-1">رکاد</span>{" "}
            <span className="inline-block rotate-1">با</span>{" "}
            <span className="inline-block -rotate-1 text-[#E9145A]">بقیه</span>{" "}
            <span className="inline-block rotate-1">دقیقاً</span>{" "}
            <span className="inline-block -rotate-1">چیه؟</span>
          </h2>
          <p className="text-[0.875rem] sm:text-[1rem] lg:text-[1.125rem] text-[#6B7280] max-w-xl mx-auto leading-[1.8]">
            اگه دو تا مدرسه از بیرون شبیه هم به نظر برسن، معنیش این نیست شبیه هم کار می‌کنن.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 max-w-5xl mx-auto">
          <div className="md:rotate-[0.5deg]">
                      <ComparisonCard title="تمرکز روی مسیر شغلی و مهارت" subtitle="هنرستان استارتاپی رکاد" items={rokadChecks} color={TEAL} />
                    </div>
                    <div className="md:rotate-[-0.5deg]">
                      <ComparisonCard title="تمرکز روی کنکور و درس" subtitle="مدرسه معمولی" items={regularChecks} color={PINK} />
                    </div>
        </div>
      </Container>
    </section>
  );
}