import Container from "../../../../layout/Container";

const patternBg = "/assets/about/StatsSection/TrustSection-Pattern.png";
const YELLOW_TEXTURE = "/assets/about/StatCard/yellow.png";
const BLUE_TEXTURE = "/assets/about/StatCard/blue.png";
const PINK_TEXTURE = "/assets/about/StatCard/pink.png";
const GREEN_TEXTURE = "/assets/about/StatCard/green.png";

const THEMES = {
  orange: { back: "bg-orange-alt", border: "border-orange", text: "text-orange", bg: "#FEF7EC", src: YELLOW_TEXTURE, opacity: 80 },
  navy: { back: "bg-navy-alt", border: "border-navy", text: "text-navy-alt", bg: "#F4F5FB", src: BLUE_TEXTURE, opacity: 50 },
  magenta: { back: "bg-magenta", border: "border-magenta", text: "text-magenta-text", bg: "#FEFAFB", src: PINK_TEXTURE, opacity: 100 },
  teal: { back: "bg-teal-alt", border: "border-teal", text: "text-teal-text", bg: "#F2FAF9", src: GREEN_TEXTURE, opacity: 150 },
};

// ترتیب دقیق فیگما (RTL): +۲۲۰۰ تیل، +۱۵۰ مگنتا، ٪۷۵ نارنجی، ۳۱ سرمه‌ای
// ۳ ردیف × ۴ ستون = ۱۲ کارت
const baseStats = [
  { theme: "teal", value: "۲۲۰۰+", label: "نوجوان رکادی در سراسر کشور" },
  { theme: "magenta", value: "۱۵۰+", label: "دانش‌آموز دختر و پسر" },
  { theme: "orange", value: "٪۷۵", label: "نرخ اشتغال فارغ‌التحصیلان" },
  { theme: "navy", value: "۳۱", label: "استارتاپ ویکند" },
];

// ۳ ردیف: هر ردیف تکرار همون ۴ آمار با چرخش رنگ مورب
const stats = [
  ...baseStats.map((s, i) => ({ ...s, key: `r1-${i}` })),
  ...baseStats.map((s, i) => ({ ...s, key: `r2-${i}` })),
  ...baseStats.map((s, i) => ({ ...s, key: `r3-${i}` })),
];

const shapeClass = "rounded-tl-[2rem] rounded-br-[2rem] rounded-tr-none rounded-bl-none [corner-shape:squircle]";

function StatCard({ theme, value, label }) {
  const t = THEMES[theme] ?? THEMES.teal;
  return (
    <div className="relative h-full">
      <div className={`absolute top-2 left-2 -right-[0.25rem] -bottom-[0.25rem] ${shapeClass} ${t.back}`} />
      <div className={`relative z-10 h-full flex flex-col items-center justify-center ${shapeClass} border-[0.1875rem] ${t.border} px-3 xs:px-4 pt-3 xs:pt-5 pb-3 xs:pb-5 lg:px-5 lg:pt-6 lg:pb-6 text-center overflow-visible`} style={{ backgroundColor: t.bg }}>
        <div className={`absolute inset-0 ${shapeClass} overflow-hidden pointer-events-none`}>
          <img src={t.src} alt="" draggable={false} className="absolute inset-0 w-full h-full object-cover scale-125 select-none" style={{ opacity: t.opacity / 100 }} />
        </div>
        <div className={`relative z-20 mb-2 xs:mb-3 lg:mb-4 text-[2.75rem] xs:text-[3rem] lg:text-[4.375rem] leading-none font-black ${t.text}`}>{value}</div>
        <div className={`relative z-20 ${t.text}`}>
          <strong className="block text-[0.8125rem] xs:text-[0.875rem] lg:text-[1rem] font-black">{label}</strong>
        </div>
      </div>
    </div>
  );
}

export default function AboutStats() {
  return (
    <section className="relative py-[4rem] sm:py-[5rem] lg:py-[6rem] w-full px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]">
        <img src={patternBg} alt="" aria-hidden="true" className="w-full h-full object-cover opacity-60 bg-center" />
      </div>
      <h2 className="relative z-10 mb-[1.5rem] sm:mb-[2rem] text-center text-[1.5rem] sm:text-[2.25rem] lg:text-[3.3125rem] leading-[1.3] sm:leading-[1.25] lg:leading-[1.2]" style={{ fontWeight: 950 }}>
        <span className="inline-block rotate-1">۹ سال</span>{" "}
        <span className="inline-block -rotate-1 text-teal">تلاش،</span>{" "}
        <span className="inline-block rotate-1">در</span>{" "}
        <span className="inline-block -rotate-1 text-navy-alt">یه</span>{" "}
        <span className="inline-block rotate-1">نگاه</span>
      </h2>
      <p className="relative z-10 text-center text-[0.875rem] sm:text-[1rem] text-ink/50 mb-8 sm:mb-10 max-w-lg mx-auto">اعداد همه چیز رو نمی‌گن، ولی این‌ها رو باید بدونی:</p>
      <Container className="relative z-10 grid grid-cols-2 xl:grid-cols-4 gap-[1.25rem] sm:gap-[2rem] [grid-auto-rows:1fr]">
        {stats.map((s) => (
          <div key={s.key} className="h-full"><StatCard {...s} /></div>
        ))}
      </Container>
    </section>
  );
}