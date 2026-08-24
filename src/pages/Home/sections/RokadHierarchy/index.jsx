import Container from "../../../../layout/Container";

const ecosystemPattern = "/assets/Pattern/layout-pattern.png";

const branches = [
  {
    id: "college",
    href: "#college",
    title: "کالج رکاد",
    description:
      "مسیر یادگیری ساختاریافته با اساتید مسلط و پروژه‌های واقعی — جایی که پایه‌های مهارت شکل می‌گیرد.",
    stat: "+۲۵۰",
    statLabel: "دانش‌پذیر فعال",
    brand: "amber",
  },
  {
    id: "accelerator",
    href: "#accelerator",
    title: "شتاب‌دهنده رکاد",
    description:
      "از ایده تا محصول قابل عرضه; منتورشیپ تخصصی, سرمایه‌ی اولیه و دسترسی به شبکه‌ای از سرمایه‌گذاران رکاد.",
    stat: "+۳۰",
    statLabel: "تیم شتاب گرفته",
    brand: "teal",
  },
  {
    id: "cafe",
    href: "#cafe",
    title: "کافه کارآفرینی رکاد",
    description:
      "محل ملاقات ایده‌ها; رویدادها, گفت‌وگو با کارآفرینان و شبکه‌سازی روزمره در یک فضای گرم و پویا.",
    stat: "+۱۲۰",
    statLabel: "رویداد برگزار شده",
    brand: "violet",
  },
];

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

function BranchCard({ branch }) {
  const c = BRAND_CONFIG[branch.brand];
  const ctaButton = (
    <a
      href={branch.href}
      className="inline-flex h-10 flex-shrink-0 items-center justify-center rounded-xl px-6 text-sm font-medium text-white
                 transition-[box-shadow,filter] duration-200
                 hover:brightness-110 hover:shadow-[0_1px_2px_rgba(0,0,0,0.3),0_1px_3px_1px_rgba(0,0,0,0.15)]
                 focus-visible:outline-none focus-visible:shadow-[0_1px_2px_rgba(0,0,0,0.3),0_1px_3px_1px_rgba(0,0,0,0.15)]"
      style={{ background: c.badgeBg }}
    >
      بیشتر بدانید
    </a>
  );

  return (
    <div
      className="border-2 relative h-full px-5 py-5 sm:px-8 sm:py-6"
      style={{
        borderColor: c.border,
        background: c.cardBg,
        boxShadow: "6px 8px 0 0 var(--shadow-col)",
        "--shadow-col": c.border,
        borderRadius: "0 12px 0 12px",
      }}
    >
      <div className="flex items-start justify-between gap-4">
        <h3
          className="text-lg sm:text-xl lg:text-2xl leading-snug"
          style={{ color: c.border, fontWeight: 950 }}
        >
          {branch.title}
        </h3>
        {ctaButton}
      </div>
      <p
        className="mt-2 sm:mt-3 text-sm font-medium leading-[1.8] text-right"
        style={{ color: c.border }}
      >
        {branch.description}
      </p>
    </div>
  );
}

export default function RokadHierarchy() {
  return (
    <section
      id="rokad-hierarchy"
      className="relative py-[4rem] sm:py-[5rem] lg:py-[6rem] px-4 sm:px-6 lg:px-8 bg-white overflow-hidden"
      dir="rtl"
    >
      {/* ── Background Pattern Layer ── */}
      <div
        className="absolute inset-0 w-full h-full z-0 pointer-events-none
                [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]
                [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]"
      >
        <img
          src={ecosystemPattern}
          alt=""
          aria-hidden="true"
          draggable="false"
          className="w-full h-full object-cover opacity-50 select-none"
        />
      </div>

      <Container className="relative z-10">
        {/* دسکتاپ: چارت سازمانی — دایره بالا وسط، سه کارت کنار هم پایین،
            شاخه‌های خط‌چین از دایره به هر کارت */}
        <div className="hidden lg:block">
          {/* هاب — بالا وسط؛ z-10 تا سرِ خط‌ها زیر دایره پنهان بشن */}
          <div className="relative z-10 flex justify-center">
            <div
              className="w-[12.5rem] h-[12.5rem] rounded-full flex items-center justify-center overflow-hidden"
              style={{
                background:
                  "radial-gradient(circle at 30% 25%, #7ED3C6 0%, #58BDAF 45%, #347E75 100%)",
                boxShadow: "6px 8px 0 0 #347E75",
                border: "3px solid #347E75",
              }}
            >
              <span
                className="font-black text-center text-white text-[1.375rem] leading-[1.4] px-5"
                style={{ fontFamily: "'IRANSansX', Tahoma, sans-serif", fontWeight: 950 }}
              >
                اکوسیستم رکاد
              </span>
            </div>
          </div>

          {/* باند اتصال — قوس‌های نرمِ خط‌چین از پایین دایره تا سرِ هر کارت
              (مرکز کارت‌ها در گرید ۳ستونی: راست ۸۳.۳٪ / وسط ۵۰٪ / چپ ۱۶.۷٪) */}
          <svg
            className="block w-full h-[7rem] -mt-6"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {branches.map((b, i) => {
              const c = BRAND_CONFIG[b.brand];
              const x = [83.333, 50, 16.666][i];
              return (
                <path
                  key={b.id}
                  d={`M 50 0 C ${x} 25, ${x} 70, ${x} 100`}
                  stroke={c.line}
                  strokeWidth="2"
                  strokeDasharray="10 8"
                  strokeLinecap="round"
                  fill="none"
                  vectorEffect="non-scaling-stroke"
                />
              );
            })}
          </svg>

          {/* کارت‌ها — سه‌تا کنار هم */}
          <div className="grid grid-cols-3 gap-[2rem] items-stretch">
            {branches.map((branch) => (
              <BranchCard key={branch.id} branch={branch} />
            ))}
          </div>
        </div>

        {/* موبایل/تبلت */}
        <div className="flex flex-col gap-4 lg:hidden">
          {branches.map((branch) => (
            <BranchCard key={branch.id} branch={branch} />
          ))}
        </div>
      </Container>
    </section>
  );
}
