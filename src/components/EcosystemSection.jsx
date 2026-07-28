const CARDS_DATA = [
  {
    title: "برنامه‌ریزی استراتژیک",
    desc: "تدوین نقشه راه جامع برای رشد پایدار و موفقیت کسب‌وکار شما.",
  },
  {
    title: "خدمات مشاوره تخصصی",
    desc: "بهره‌گیری از مشاوران مجرب برای حل چالش‌های مسیر کارآفرینی.",
  },
  {
    title: "تحلیل بازار و رقبا",
    desc: "شناخت دقیق بازار و پیدایش فرصت‌های طلایی برای توسعه.",
  },
  {
    title: "مدیریت مالی و سرمایه",
    desc: "برنامه‌ریزی مالی دقیق و راهنمایی برای جذب سرمایه‌گذاران.",
  },
  {
    title: "بازاریابی و فروش",
    desc: "استراتژی‌های نوین برای جذب موثر مشتریان و افزایش فروش.",
  },
  {
    title: "توسعه محصول و نوآوری",
    desc: "بهبود مستمر محصولات برای ایجاد مزیت رقابتی در بازار.",
  },
  {
    title: "تیم‌سازی و منابع انسانی",
    desc: "استخدام و تربیت نیروی کار کارآمد و متخصص در کنار شما.",
  },
  {
    title: "پشتیبانی حقوقی و قراردادها",
    desc: "راهنمایی در امور حقوقی و تدوین قراردادهای تجاری استاندارد.",
  },
];

const CARDS = CARDS_DATA.map((item, i) => ({
  ...item,
  id: i,
  // در عکس، کارت اول از ردیف دوم (ایندکس 4) رنگی است
  highlighted: i === 4,
}));

function PersonIcon({ className }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M5 20c0-3.5 3.1-6 7-6s7 2.5 7 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function EcosystemSection() {
  return (
    <section id="cooperation" className="bg-navy py-14 md:py-20">
      <div className="container-page">
        <h2 className="text-2xl font-extrabold text-white md:text-3xl">
          سازمان پشتیبانی کسب‌وکارهای نوپا
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-8 text-white/60 md:text-[15px]">
          از اولین ایده تا توسعه و رشد بازار، تمام گام‌های مسیر با پشتیبانی
          متخصصان طی میشه.
        </p>

        <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((card) => (
            <div
              key={card.id}
              className={`rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 ${
                card.highlighted
                  ? "border-teal bg-teal shadow-lg shadow-teal/20"
                  : "border-white/10 bg-navy-card"
              }`}
            >
              <span
                className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                  card.highlighted
                    ? "bg-white/20 text-white"
                    : "bg-teal/10 text-teal"
                }`}
              >
                <PersonIcon />
              </span>
              <h3
                className={`mt-4 text-sm font-extrabold md:text-[15px] ${
                  card.highlighted ? "text-white" : "text-white"
                }`}
              >
                {card.title}
              </h3>
              <p
                className={`mt-2 text-[11px] leading-6 md:text-xs ${
                  card.highlighted ? "text-white/90" : "text-white/50"
                }`}
              >
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
