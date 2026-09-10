import Container from "../../../../layout/Container";

// ── رنگ‌های دقیق فیگما ──
const TEAL = {
  main: "#59BBAF",
  bg: "#EEF8F7",
  itemBg: "#CCEAE6",
  deep: "#50A89E",
  badgeText: "#EEF8F7",
};
const PINK = {
  main: "#E0195B",
  bg: "#FCE8EF",
  itemBg: "#F5B8CC",
  deep: "#E40141",
  badgeText: "#FCE8EF",
};

// ── پترن پس‌زمینه — همان پترن استاندارد اکثر سکشن‌ها ──
const sectionPattern = "/assets/Pattern/layout-pattern.png";

function BackgroundPattern() {
  return (
    <img
      src={sectionPattern}
      alt=""
      aria-hidden="true"
      draggable="false"
      className="w-full h-full object-cover opacity-30 select-none"
    />
  );
}

// ── آیکون تیک (سبز) — فیگما: 16×20, fill #50A89E ──
function CheckIcon({ style }) {
  return (
    <svg viewBox="0 0 16 20" fill="none" className="flex-shrink-0" style={style}>
      <path
        d="M2 10.5L6.5 15L14 4"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ── آیکون ضربدر (صورتی) — فیگما: 12×12, stroke #E40141, strokeWidth ~4 ──
function CrossIcon({ style }) {
  return (
    <svg viewBox="0 0 12 12" fill="none" className="flex-shrink-0" style={style}>
      <path d="M2 2l8 8M10 2l-8 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

// ── داده‌ها ──
const regularItems = [
  "مهارت‌های نرم فقط اسمی | نه به شکل تمرینی",
  "آموزش تئوری، بدون تجربه واقعی از دنیه کار",
  "یادگیری انفرادی و رقابتی",
  "ارتباط با صنعت و بازار کار: صفر",
];
const regularOutcome = "خروجی: دیپلم، بدون پروژه واقعی";

const rokadItems = [
  "پروژه‌های واقعی از روز اول | یادگیری با انجام‌دادن",
  "یادگیری تیمی و مبتنی بر جامعه | بچه‌ها با هم بزرگ می‌شن",
  "مهارت‌های نرم توی رویداد، بوت‌کمپ و کوچینگ واقعی",
  "ارتباط مستقیم با اکوسیستم استارتاپی و منتورهای مجرب",
];
const rokadOutcome = "خروجی: دیپلم + مسیر شغلی روشن + پورتفولیو";

// ── کارت مقایسه ──
function ComparisonCard({ badge, title, titleAccent, items, outcome, color, tilt, isPink }) {
  return (
    <div className={`relative h-full ${tilt}`}>
      {/* ── سایه هارد — فیگما: DROP_SHADOW 5px 5px 0 blur:0 ── */}
      <div
        aria-hidden="true"
        className="absolute top-[5px] left-[5px] w-full h-full"
        style={{ backgroundColor: color.main, borderRadius: "3px 0 30px 0" }}
      />

      {/* ── خود کارت ── */}
      <div
        className="relative z-10 h-full flex flex-col overflow-visible p-5 sm:p-[26px] lg:p-[34px]"
        style={{
          backgroundColor: color.bg,
          border: "3px solid",
          borderColor: color.main,
          borderRadius: "3px 0 30px 0",
          gap: "10px",
        }}
      >
        {/* ── بج — عرض به اندازه محتوا ── */}
        <div
          className="relative z-20"
          style={{
            display: "inline-flex",
            width: "fit-content",
            backgroundColor: color.main,
            color: color.badgeText,
            border: "1.5px solid #292827",
            borderRadius: "9px",
            padding: "4px 12px",
            boxShadow: "2px 2px 0 0 #292827",
            fontWeight: 700,
            fontSize: "clamp(11px, 1.5vw, 14px)",
            lineHeight: "1.9",
            whiteSpace: "nowrap",
            fontFamily: "IRANSansX, sans-serif",
          }}
        >
          {badge}
        </div>

        {/* ── عنوان — یک‌خطی در دسکتاپ، چندخطی در موبایل ── */}
        <h3
          className="relative z-10 text-right whitespace-normal sm:whitespace-nowrap"
          style={{
            fontSize: "clamp(20px, 3.5vw, 39px)",
            fontWeight: 900,
            lineHeight: "1.6",
            color: "#292827",
            fontFamily: "IRANSansX, sans-serif",
          }}
        >
          <span>{title} </span>
          <span style={{ color: color.main }}>{titleAccent}</span>
        </h3>

        {/* ── لیست آیتم‌ها ── */}
        <div className="relative z-10 flex flex-col flex-1" style={{ gap: "10px" }}>
          {items.map((text, i) => (
            <div
              key={i}
              className="inline-flex items-start sm:items-center self-start max-w-full"
              style={{
                backgroundColor: color.itemBg,
                borderRadius: "7.3px",
                gap: isPink ? "12px" : "10px",
                padding: isPink ? "7px 10px" : "7px 12px",
              }}
            >
              {isPink ? (
                <CrossIcon style={{ color: color.deep, width: "12px", height: "12px" }} className="flex-shrink-0 mt-1 sm:mt-0" />
              ) : (
                <CheckIcon style={{ color: color.deep, width: "14px", height: "16px" }} className="flex-shrink-0 mt-1 sm:mt-0" />
              )}
              <span
                className="text-[13px] sm:text-[14px] lg:text-[16px] leading-[1.7] sm:leading-[1.86]"
                style={{
                  fontWeight: 600,
                  color: "#292827",
                  fontFamily: "IRANSansX, sans-serif",
                }}
              >
                {text}
              </span>
            </div>
          ))}

          {/* ── ردیف خروجی ── */}
          <div
            className="flex items-start sm:items-center max-w-full"
            style={{
              backgroundColor: color.itemBg,
              borderRadius: "7.3px",
              gap: isPink ? "12px" : "10px",
              padding: isPink ? "7px 10px" : "7px 12px",
            }}
          >
            {isPink ? (
              <CrossIcon style={{ color: color.deep, width: "12px", height: "12px" }} className="flex-shrink-0 mt-1 sm:mt-0" />
            ) : (
              <CheckIcon style={{ color: color.deep, width: "16px", height: "20px" }} className="flex-shrink-0 mt-1 sm:mt-0" />
            )}
            <span
              className="text-[13px] sm:text-[16px] lg:text-[18.26px] leading-[1.7] sm:leading-[1.86]"
              style={{
                fontWeight: 600,
                color: "#292827",
                fontFamily: "IRANSansX, sans-serif",
              }}
            >
              <strong style={{ fontWeight: 800 }}>خروجی: </strong>
              {outcome.replace("خروجی: ", "")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── کلمات عنوان با چرخش دقیق فیگما ──
const headingWords = [
  { text: "چیه؟", color: "#292827", rotate: "-2.5deg" },
  { text: "دقیقاً", color: "#292827", rotate: "2.5deg" },
  { text: "بقیه", color: "#E0195B", rotate: "-2.5deg" },
  { text: "با", color: "#292827", rotate: "2.5deg" },
  { text: "رکاد", color: "#292827", rotate: "-2.5deg" },
  { text: "تفاوت", color: "#59BBAF", rotate: "2.5deg" },
];

export default function AboutComparison() {
  return (
    <section
      className="relative w-full bg-white overflow-hidden py-[4rem] sm:py-[5rem] lg:py-[7.375rem] px-4 sm:px-6 lg:px-8"
    >
      {/* ── پترن هندسی پس‌زمینه ── */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <BackgroundPattern />
      </div>

      <Container className="relative z-10">
        {/* ── هدر: عنوان + زیرعنوان — فیگما: فاصله 76px تا کارت‌ها ── */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-[76px]">
          {/* ── عنوان — فیگما: IRANSansX weight 900, size 61px, line-height 190% ── */}
          <h2
            className="mb-3 sm:mb-4"
            style={{
              fontSize: "clamp(32px, 5vw, 61px)",
              fontWeight: 900,
              lineHeight: "1.9",
              fontFamily: "IRANSansX, sans-serif",
            }}
          >
            {headingWords.map((w, i) => (
              <span
                key={i}
                className="inline-block"
                style={{
                  color: w.color,
                  transform: `rotate(${w.rotate})`,
                  marginLeft: "0.25em",
                }}
              >
                {w.text}
              </span>
            ))}
          </h2>

          {/* ── زیرعنوان — فیگما: weight 500, size 16px, line-height 190%, color black ── */}
          <p
            className="max-w-xl mx-auto"
            style={{
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: "1.9",
              color: "#000",
              fontFamily: "IRANSansX, sans-serif",
            }}
          >
            اگه دو تا مدرسه از بیرون شبیه هم به نظر برسن، معنیش این نیست که
            شبیه هم کار می‌کنن.
          </p>
        </div>

        {/* ── کارت‌ها — RTL: اول راست (pink)، دوم چپ (teal)
             فیگما: pink 461px, teal 581px, gap 45px
             نسبت pink/teal ≈ 0.79 ── */}
        <div className="grid grid-cols-1 md:grid-cols-[0.79fr_1fr] gap-6 md:gap-[45px] max-w-5xl mx-auto items-start">
          {/* راست در RTL = مدارس معمولی (صورتی) */}
          <ComparisonCard
            badge="مدارس معمولی"
            title="تمرکز روی"
            titleAccent="کنکور و درس"
            items={regularItems}
            outcome={regularOutcome}
            color={PINK}
            tilt="md:rotate-[2deg]"
            isPink={true}
          />
          {/* چپ در RTL = رکاد (سبز) */}
          <ComparisonCard
            badge="هنرستان استارتاپی رکاد"
            title="تمرکز روی"
            titleAccent="مسیر شغلی و مهارت"
            items={rokadItems}
            outcome={rokadOutcome}
            color={TEAL}
            tilt="md:-rotate-[2deg]"
            isPink={false}
          />
        </div>
      </Container>
    </section>
  );
}
