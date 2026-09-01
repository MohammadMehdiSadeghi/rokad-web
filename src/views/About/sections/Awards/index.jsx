import Container from "../../../../layout/Container";

const patternBg = "/assets/Pattern/layout-pattern.png";

// ── آیکون چک‌مارک داخل آیتم (مطابق فیگما) ──
function CheckIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 14 12" fill="none" className={className}>
      <path
        d="M1.5 6.5L4.5 9.5L12 2"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ── داده جوایز — دقیقاً مطابق فیگما ──
const awards = [
  { color: "#E0195B", text: "برگزاری لیگ ملی کسب‌وکار نوجوانان ایران با حمایت اتاق بازرگانی ایران | بهمن ۱۳۹۸" },
  { color: "#58BDAF", text: "طراحی و برگزاری دو دوره فرهنگستان نوآوری و کارآفرینی نوجوانان در اتاق بازرگانی استان" },
  { color: "#202A5A", text: "انتخاب رکاد به‌عنوان سفیر کارآفرینی توسط اداره کل تعاون، کار و رفاه اجتماعی استان" },
  { color: "#F5A623", text: "تقدیر شده در هفته جهانی کارآفرینی از سوی استانداری خراسان رضوی | آبان ۱۳۹۷" },
  { color: "#58BDAF", text: "تأسیس اولین هنرستان استارتاپی پسرانه ایران در مشهد | ۱۳۹۸" },
];

// ── کلمات عنوان با چرخش و رنگ دقیق فیگما ──
const headingWords = [
  { text: "رکاد", color: "#58BDAF", rotate: "-2.5deg" },
  { text: "پای", color: "#292827", rotate: "2.5deg" },
  { text: "رد", color: "#DF941A", rotate: "-2.5deg" },
  { text: "سال", color: "#292827", rotate: "2.5deg" },
  { text: "۹", color: "#292827", rotate: "-2.5deg" },
];

export default function AboutAwardsSection() {
  return (
    <section className="relative py-[4rem] sm:py-[5rem] lg:py-[6rem] px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      {/* ── پترن پس‌زمینه ── */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <img
          src={patternBg}
          alt=""
          aria-hidden="true"
          draggable={false}
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <Container className="relative z-10">
        {/* ── عنوان — فیگما: هر کلمه چرخش و رنگ جداگانه ── */}
        <h2
          className="text-center mb-10 sm:mb-12 lg:mb-16"
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

        {/* ── لیست جوایز — ۲ ستونه در دسکتاپ ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 sm:gap-x-10 lg:gap-x-14 gap-y-5 sm:gap-y-6 max-w-5xl mx-auto">
          {awards.map((item, i) => (
            <div key={i} className="flex items-center gap-3 sm:gap-4">
              {/* ── آیکون — فیگما: rounded-square/squircle ── */}
              <div
                className="flex-shrink-0 flex items-center justify-center"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  backgroundColor: item.color,
                }}
              >
                <CheckIcon className="w-4 h-4" />
              </div>
              {/* ── متن ── */}
              <p
                className="text-[14px] sm:text-[16px] lg:text-[18px] text-[#292827] leading-[1.7] text-right"
                style={{ fontFamily: "IRANSansX, sans-serif" }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
