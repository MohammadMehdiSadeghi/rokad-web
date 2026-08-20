import Container from "../../../../layout/Container";

const logo = "/assets/Shared/Logos/logo.png";

const branches = [
  {
    id: "college",
    href: "#college",
    title: "کالج رکاد",
    description:
      "مسیر یادگیری ساختاریافته با اساتید مسلط و پروژه‌های واقعی — جایی که پایه‌های مهارت شکل می‌گیرد.",
    brand: "amber",
  },
  {
    id: "accelerator",
    href: "#accelerator",
    title: "شتاب‌دهنده رکاد",
    description:
      "از ایده تا محصول قابل عرضه؛ منتورشیپ تخصصی، سرمایه‌ی اولیه و دسترسی به شبکه‌ای از سرمایه‌گذاران رکاد.",
    brand: "teal",
  },
  {
    id: "cafe",
    href: "#cafe",
    title: "کافه کارآفرینی رکاد",
    description:
      "محل ملاقات ایده‌ها؛ رویدادها، گفت‌وگو با کارآفرینان و شبکه‌سازی روزمره در یک فضای گرم و پویا.",
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
      className={`rounded-2xl border-2 ${compact ? "px-6 py-5" : "px-8 py-6"}`}
      style={{ borderColor: c.border, background: c.cardBg }}
    >
      <a
        href={branch.href}
        className="inline-block rounded-lg px-3.5 py-1.5 text-xs font-bold text-white mb-3 transition-opacity hover:opacity-90"
        style={{ background: c.badgeBg }}
      >
        مشاهده بیشتر
      </a>
      <h3 className={`${compact ? "text-lg" : "text-xl lg:text-2xl"} font-black text-ink mb-2 leading-snug`}>
        {branch.title}
      </h3>
      <p
        className="text-sm font-medium leading-[1.8]"
        style={{ color: c.text }}
      >
        {branch.description}
      </p>
    </div>
  );
}

export default function Ecosystem() {
  // درصد ارتفاع (روی ۰ تا ۱۰۰) هر کارت برای رسم خط‌های خط‌چین در حالت دسکتاپ
  const yPositions = [16, 50, 84];
  const hubY = 50;

  return (
    <section id="ecosystem" className="relative py-20 lg:py-28 bg-white overflow-hidden" dir="rtl">
      <Container className="relative z-10">
        {/* Heading */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl lg:text-[42px] font-extrablack leading-[1.2] tracking-tight text-ink mb-4">
            <span className="text-teal-600">اکوسیستم</span> رکاد
          </h2>
          <p className="text-base lg:text-lg font-medium leading-relaxed text-ink-700 max-w-2xl mx-auto">
            سه‌گانه‌ای که مسیر رشد را کامل می‌کند؛ از یادگیری تا کارآفرینی و تا
            شتاب‌گرفتن ایده‌ها — همه در یک زیست‌بوم به‌هم‌پیوسته.
          </p>
        </div>

        {/* دسکتاپ: هاب + کارت‌ها + خط‌های اتصال */}
        <div className="hidden lg:block relative max-w-[1180px] mx-auto min-h-[560px]">
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
              className="w-full h-full rounded-full flex items-center justify-center shadow-[0_20px_45px_-15px_rgba(52,126,117,0.55)]"
              style={{
                background:
                  "radial-gradient(circle at 30% 25%, #7ED3C6 0%, #58BDAF 45%, #347E75 100%)",
              }}
            >
              <svg
                viewBox="0 0 40 60"
                className="w-16 h-24"
                fill="none"
                stroke="#fff"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M 24 4 L 6 34 L 18 34 L 14 56 L 34 24 L 20 24 Z" />
              </svg>
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