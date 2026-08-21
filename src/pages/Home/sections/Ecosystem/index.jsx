import Container from "../../../../layout/Container";

const logo = "/assets/Shared/Logos/logo.png";

const branches = [
  {
    id: "college",
    href: "#college",
    title: "کالج رکاد",
    description: "مسیر یادگیری ساختاریافته با اساتید مسلط و پروژه‌های واقعی — جایی که پایه‌های مهارت شکل می‌گیرد.",
    stat: "+۲۵۰",
    statLabel: "دانش‌پذیر فعال",
    brand: "amber",
  },
  {
    id: "accelerator",
    href: "#accelerator",
    title: "شتاب‌دهنده رکاد",
    description: "از ایده تا محصول قابل عرضه؛ منتورشیپ تخصصی، سرمایه‌ی اولیه و دسترسی به شبکه‌ای از سرمایه‌گذاران رکاد.",
    stat: "+۳۰",
    statLabel: "تیم شتاب گرفته",
    brand: "teal",
  },
  {
    id: "cafe",
    href: "#cafe",
    title: "کافه کارآفرینی رکاد",
    description: "محل ملاقات ایده‌ها؛ رویدادها، گفت‌وگو با کارآفرینان و شبکه‌سازی روزمره در یک فضای گرم و پویا.",
    stat: "+۱۲۰",
    statLabel: "رویداد برگزار شده",
    brand: "violet",
  },
];

// رنگ‌های هر برند به‌صورت مستقیم (بنفش هنوز توی tailwind.config.js
// به‌صورت اسکیل تعریف نشده، برای همین از hex مستقیم استفاده شده تا
// نیازی به دستکاری config نباشه)
const BRAND_CONFIG = {
  amber: {
    border: "#F8A41D",
    badgeBg: "#F8A41D",
    text: "#E49007",
    cardBg: "#FFFCF6",
    line: "#F8A41D",
  },
  teal: {
    border: "#347E75",
    badgeBg: "#347E75",
    text: "#347E75",
    cardBg: "#FFFFFF",
    line: "#347E75",
  },
  violet: {
    border: "#5B3E9E",
    badgeBg: "#7C4DBF",
    text: "#5B3E9E",
    cardBg: "#FBFAFE",
    line: "#7C4DBF",
  },
};

function BranchCard({ branch, compact = false }) {
  const c = BRAND_CONFIG[branch.brand];
  return (
    <div
      className={`border-2 relative ${compact ? "px-6 py-5" : "px-8 py-6"}`}
      style={{ borderColor: c.border, background: c.cardBg, boxShadow: "6px 8px 0 0 var(--shadow-col)", "--shadow-col": c.border, borderRadius: "0 12px 0 12px" }}
    >
      {/* Badge */}
      <span
        className="inline-block px-3.5 py-1.5 text-xs font-bold text-white mb-3 rounded-md"
        style={{ background: c.badgeBg }}
      >
        {branch.title}
      </span>
      {/* Title */}
      <h3 className={`${compact ? "text-lg" : "text-xl lg:text-2xl"} font-black text-ink mb-2 leading-snug`}>
        {branch.title}
      </h3>
      {/* Description */}
      <p
        className="text-sm font-medium leading-[1.8]"
        style={{ color: c.text }}
      >
        {branch.description}
      </p>
      {/* Stat */}
      {branch.stat && (
        <div className="absolute left-6 bottom-4 flex items-baseline gap-2">
          <span className="font-extrablack text-[26px] leading-none" style={{ color: c.border }}>
            {branch.stat}
          </span>
          <span className="text-xs font-bold text-ink-500">{branch.statLabel}</span>
        </div>
      )}
    </div>
  );
}

export default function Ecosystem() {
  // درصد ارتفاع (روی ۰ تا ۱۰۰) هر کارت برای رسم خط‌های خط‌چین در حالت دسکتاپ
  const yPositions = [16, 50, 84];
  const hubY = 50;

  return (
    <section id="ecosystem" className="relative py-[4rem] sm:py-[5rem] lg:py-[6rem] bg-white overflow-hidden" dir="rtl">
      <Container className="relative z-10">
        {/* Heading */}
        <div className="text-center mb-[1.5rem] sm:mb-[2rem] lg:mb-[4rem]">
          <h2 className="text-[1.5rem] sm:text-[2.25rem] lg:text-[3.3125rem] font-extrablack leading-[1.3] sm:leading-[1.2] tracking-tight text-ink mb-[1.5rem]">
            <span className="text-teal-600">اکوسیستم</span> رکاد
          </h2>
          <p className="text-[1rem] sm:text-[1.0625rem] lg:text-[1.125rem] font-medium leading-[1.7] text-ink-700 max-w-2xl mx-auto">
            سه‌گانه‌ای که مسیر رشد را کامل می‌کند؛ از یادگیری تا کارآفرینی و تا
            شتاب‌گرفتن ایده‌ها — همه در یک زیست‌بوم به‌هم‌پیوسته.
          </p>
        </div>

        {/* دسکتاپ: هاب + کارت‌ها + خط‌های اتصال */}          <div className="hidden lg:block relative max-w-[75rem] mx-auto min-h-[560px]">
          {/* خط‌های خط‌چین */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {branches.map((b, i) => {
              const c = BRAND_CONFIG[b.brand];
              const y = yPositions[i];
              return (
                <path
                  key={b.id}
                  d={`M 78 ${y} C 84 ${y}, 88 ${(y + hubY) / 2}, 92 ${hubY}`}
                  stroke={c.line}
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  fill="none"
                  vectorEffect="non-scaling-stroke"
                />
              );
            })}
          </svg>

          {/* ستون کارت‌ها (سمت راست فضا برای هاب رزرو شده) */}
          <div className="flex flex-col justify-between h-full gap-10 pr-[240px]">
            {branches.map((branch) => (
              <BranchCard key={branch.id} branch={branch} />
            ))}
          </div>

          {/* هاب */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[200px] h-[200px]">
            <div
              className="w-full h-full rounded-full flex items-center justify-center overflow-hidden"
              style={{
                background: "radial-gradient(circle at 30% 25%, #7ED3C6 0%, #58BDAF 45%, #347E75 100%)",
                boxShadow: "6px 8px 0 0 #347E75",
                border: "3px solid #347E75",
              }}
            >
              <img
                src="/assets/Ecosystem/Group.png"
                alt="اکوسیستم رکاد"
                className="w-16 h-24 object-contain brightness-0 invert"
              />
            </div>
          </div>
        </div>

        {/* موبایل/تبلت: کارت‌های ساده زیر هم بدون هاب و خط‌ها */}
        <div className="flex flex-col gap-6 lg:hidden">
          {branches.map((branch) => (
            <BranchCard key={branch.id} branch={branch} compact />
          ))}
        </div>
      </Container>
    </section>
  );
}