import Container from "../../../../layout/Container";

const logo = "/assets/Shared/Logos/logo.png";
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
      "از ایده تا محصول قابل عرضه؛ منتورشیپ تخصصی، سرمایه‌ی اولیه و دسترسی به شبکه‌ای از سرمایه‌گذاران رکاد.",
    stat: "+۳۰",
    statLabel: "تیم شتاب گرفته",
    brand: "teal",
  },
  {
    id: "cafe",
    href: "#cafe",
    title: "کافه کارآفرینی رکاد",
    description:
      "محل ملاقات ایده‌ها؛ رویدادها، گفت‌وگو با کارآفرینان و شبکه‌سازی روزمره در یک فضای گرم و پویا.",
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

// چیدمان کارت — یکسان در همه‌ی سایزها (موبایل و دسکتاپ):
// ردیف هدر با عنوان راست‌چین و دکمه‌ی «بیشتر بدانید» سمت چپ در همون
// ردیف، توضیحات زیرش راست‌چین. سایه و ردیوس ثابت برای همه سایزها؛
// فقط سایز فونت/پدینگ با breakpoint کم و زیاد می‌شه.
function BranchCard({ branch }) {
  const c = BRAND_CONFIG[branch.brand];

  // دکمه مطابق متریال دیزاین ۳ (ارتفاع 40px، متن 14px/medium،
  // سایه‌ی نرم لایه‌ای فقط روی هاور) با رنگ برند همان کارت
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
      className="border-2 relative px-5 py-5 sm:px-8 sm:py-6 lg:max-w-[527px]"
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

export default function Ecosystem() {
  // درصد ارتفاع (روی ۰ تا ۱۰۰) هر کارت برای رسم خط‌های خط‌چین در حالت دسکتاپ
  const yPositions = [16, 50, 84];
  const hubY = 50;

  return (
    <section
      id="ecosystem"
      className="relative py-[4rem] sm:py-[5rem] lg:py-[6rem] px-4 sm:px-6 lg:px-8 bg-white overflow-hidden"
      dir="rtl"
    >
      {/* ── Background Pattern Layer — همون ماسک گرادیانی هیرو/دوئال‌اسکول:
          بالا و پایین سکشن محو میشه که لبه‌ها بریده به نظر نرسن ── */}
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
        {/* Heading — هر کلمه گره مستقل با چرخش خودش (زبان طراحی سایت)؛
            وزن واقعی 950 چون font-extrablack به‌صورت یتیلیتی وجود ندارد */}
        <div className="text-center mb-[1.5rem] sm:mb-[2rem] lg:mb-[4rem]">
          <h2
            className="text-[1.5rem] sm:text-[2.25rem] lg:text-[3.3125rem] leading-[1.3] sm:leading-[1.2] text-ink mb-[1.5rem]"
            style={{ fontWeight: 950 }}
          >
            <span className="inline-block text-teal rotate-3">اکوسیستم</span>{" "}
            <span className="inline-block -rotate-2">رکاد</span>
          </h2>
          <p className="text-[1rem] sm:text-[1.0625rem] lg:text-[1.125rem] font-medium leading-[1.7] text-ink-700 max-w-2xl mx-auto">
            سه‌گانه‌ای که مسیر رشد را کامل می‌کند؛ از یادگیری تا کارآفرینی و تا
            شتاب‌گرفتن ایده‌ها — همه در یک زیست‌بوم به‌هم‌پیوسته.
          </p>
        </div>

        {/* دسکتاپ: هاب + کارت‌ها + خط‌های اتصال.
            کل خوشه یک بلوک با ابعاد پیکسلی ثابت است: ستون کارت‌ها (527px)
            + فاصله (56px) + هاب (200px) = 783px مجموعاً. چون ابعاد ثابته
            (نه responsive/max-w که باعث نامتقارنی می‌شد)، با flex
            justify-center روی والد، این بلوک همیشه دقیقاً وسط سکشن
            می‌شینه، صرف‌نظر از عرض مانیتور یا لپ‌تاپ */}
        <div className="hidden lg:flex justify-center">
          <div className="relative" style={{ width: 827, height: 560 }}>
            {/* خط‌های خط‌چین — مختصات پیکسلی دقیق، هماهنگ با ابعاد بلوک بالا.
                خط وسط منحنی ملایم (بزیر) و خط‌های بالا/پایین یه کمان
                دایره‌ای (نه نیم‌دایره‌ی کامل، بلکه بازتر و ملایم‌تر) */}
            <svg
              className="absolute inset-0 pointer-events-none"
              width="827"
              height="560"
              viewBox="0 0 827 560"
              aria-hidden="true"
            >
              {branches.map((b, i) => {
                const c = BRAND_CONFIG[b.brand];
                const y = (yPositions[i] / 100) * 560;
                const hubCenterY = (hubY / 100) * 560; // 280
                const colRight = 527; // لبه‌ی راست ستون کارت‌ها
                const hubCenterX = 527 + 100 + 100; // = 727 (مرکز هاب)

                // خط وسط: همون منحنی نرم قبلی (تقریبا افقیه)
                if (i === 1) {
                  const c1x = colRight + (hubCenterX - colRight) * 0.35;
                  const c2x = colRight + (hubCenterX - colRight) * 0.75;
                  return (
                    <path
                      key={b.id}
                      d={`M ${colRight} ${y} C ${c1x} ${y}, ${c2x} ${(y + hubCenterY) / 2}, ${hubCenterX} ${hubCenterY}`}
                      stroke={c.line}
                      strokeWidth="2"
                      strokeDasharray="10 8"
                      fill="none"
                    />
                  );
                }

                // خط‌های بالا و پایین: کمان ملایم‌تر از نیم‌دایره‌ی کامل.
                // ARC_FACTOR شعاع رو بزرگ‌تر از حالت مینیمم (نصف فاصله)
                // می‌کنه؛ هرچی بزرگ‌تر باشه قوس بازتر/ملایم‌تر می‌شه.
                const dx = hubCenterX - colRight;
                const dy = hubCenterY - y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const ARC_FACTOR = 1.3; // 1 = نیم‌دایره‌ی کامل، بزرگ‌تر = ملایم‌تر
                const r = (dist / 2) * ARC_FACTOR;
                const sweepFlag = i === 0 ? 1 : 0;
                return (
                  <path
                    key={b.id}
                    d={`M ${colRight} ${y} A ${r} ${r} 0 0 ${sweepFlag} ${hubCenterX} ${hubCenterY}`}
                    stroke={c.line}
                    strokeWidth="2"
                    strokeDasharray="10 8"
                    fill="none"
                  />
                );
              })}
            </svg>

            {/* ستون کارت‌ها — عرض ثابت 527px، سمت چپ بلوک */}
            <div
              className="absolute left-0 top-0 flex flex-col justify-between h-full"
              style={{ width: 527 }}
            >
              {branches.map((branch) => (
                <BranchCard key={branch.id} branch={branch} />
              ))}
            </div>

            {/* هاب — عرض ثابت 200px، سمت راست بلوک */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[200px] h-[200px]">
              <div
                className="w-full h-full rounded-full flex items-center justify-center overflow-hidden"
                style={{
                  background:
                    "radial-gradient(circle at 30% 25%, #7ED3C6 0%, #58BDAF 45%, #347E75 100%)",
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
        </div>

        {/* موبایل/تبلت: همون کارتِ دسکتاپ (همون چیدمان، سایه و ردیوس)
            فقط بدون هاب و خط‌ها، با پدینگ/فونت کوچک‌تر */}
        <div className="flex flex-col gap-4 lg:hidden">
          {branches.map((branch) => (
            <BranchCard key={branch.id} branch={branch} />
          ))}
        </div>
      </Container>
    </section>
  );
}
