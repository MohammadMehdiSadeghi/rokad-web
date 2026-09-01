import Container from "../../../../layout/Container";

const cardPattern = "/assets/about/StatsSection/TrustSection-Pattern.png";

// پالت سکشن — دقیقاً طبق توضیحات
const THEMES = {
  teal: { main: "#55BDB5" },
  navy: { main: "#293660" },
  orange: { main: "#FFA91B" },
  magenta: { main: "#EA145A" },
};

const pillars = [
  {
    index: "۰۱",
    title: "یادگیری با انجام‌دادن",
    body: "نظریه یه جایی داره، ولی توی رکاد بچه‌ها روی پروژه‌های واقعی کار می‌کنن و توی فرایند حل مسئله، مفاهیم رو به‌صورت عملی یاد می‌گیرن.",
    theme: "teal",
  },
  {
    index: "۰۲",
    title: "کار تیمی واقعی",
    body: "دانش‌آموز به‌عنوان یه تیم در جهت حل مسئله و پیشرفت در یادگیری همکاری می‌کنه؛ نه به‌صورت انفرادی و رقابتی.",
    theme: "navy",
  },
  {
    index: "۰۳",
    title: "مهارت‌های نرم و سخت",
    body: "نه فقط برنامه‌نویسی و طراحی، بلکه خودشناسی، تفکر انتقادی و کار تیمی — همه‌ی مهارت‌های نرمی که فردا لازمشون داره.",
    theme: "orange",
  },
  {
    index: "۰۴",
    title: "همراهی با کوچینگ",
    body: "دانش‌آموز توی مسیر توسعه فردی با ابزار کوچینگ و تجربه‌نگاری به‌صورت مستمر همراهی می‌شه؛ نه یه بار در سال.",
    theme: "magenta",
  },
];

// ── آیکون‌ها — ساده، متناسب با رنگ کارت ──
function Icon({ theme, className }) {
  const stroke = THEMES[theme].main;
  const common = {
    fill: "none",
    stroke,
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  switch (theme) {
    case "teal":
      return (
        <svg viewBox="0 0 24 24" className={className} {...common}>
          <path d="M3 9l9-6 9 6v9a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
          <path d="M9 21V12h6v9" />
        </svg>
      );
    case "navy":
      return (
        <svg viewBox="0 0 24 24" className={className} {...common}>
          <circle cx="9" cy="7" r="3" />
          <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
          <circle cx="17" cy="8" r="2.5" />
          <path d="M14.5 20c0-2.3 1.7-4 3.5-4s3.5 1.7 3.5 4" />
        </svg>
      );
    case "orange":
      return (
        <svg viewBox="0 0 24 24" className={className} {...common}>
          <path d="M12 2a7 7 0 00-7 7c0 2.6 1.5 4.6 3.5 5.6L12 22l3.5-7.4C17.5 13.6 19 11.6 19 9a7 7 0 00-7-7z" />
          <path d="M9 9h.01M15 9h.01M10 12h4" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className={className} {...common}>
          <path d="M12 5c-2-7-10-4-10 2.5C2 13 12 20 12 20s10-7 10-12.5C22 1 14-2 12 5z" />
          <path d="M8 13l2.5 2.5L16 10" />
        </svg>
      );
  }
}

const squircle = "rounded-tl-[2rem] rounded-br-[2rem] rounded-tr-none rounded-bl-none [corner-shape:squircle]";

export default function AboutPillars() {
  return (
    <section className="relative py-[4rem] sm:py-[5rem] lg:py-[6rem] px-4 sm:px-6 lg:px-8 bg-[#EDF6F5] overflow-hidden">
      <Container className="relative z-10">
        {/* ── تیتر — مشکی/ذغالی با کلمه تأکیدی فیروزه‌ای ── */}
        <h2 className="text-center font-black text-[1.5rem] sm:text-[2.25rem] lg:text-[3.3125rem] leading-[1.2] mb-[1rem] sm:mb-[1.5rem]">
          <span className="inline-block rotate-1">چهار</span>{" "}
          <span className="inline-block -rotate-1 text-teal">ستون</span>{" "}
          <span className="inline-block rotate-1">که</span>{" "}
          <span className="inline-block -rotate-1 text-navy-alt">رکاد</span>{" "}
          <span className="inline-block rotate-1">روش</span>{" "}
          <span className="inline-block -rotate-1">بنا</span>{" "}
          <span className="inline-block rotate-1">شده</span>
        </h2>

        <p className="text-center font-semibold text-[0.875rem] sm:text-[1rem] lg:text-[1.09375rem] leading-[1.7] text-[#6B7280] max-w-[42rem] mx-auto mb-[2rem] sm:mb-[2.5rem] lg:mb-[3rem]">
          این چهار ارزش پشت هر تصمیم و هر برنامه رکاده — از انتخاب معلم تا طراحی رویداد.
        </p>

        {/* ── گرید کارت‌ها ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {pillars.map((p) => {
            const theme = THEMES[p.theme];
            return (
              <div key={p.index} className="relative w-full h-full">
                {/* لایه شدو تیره — حالت استیکری */}
                <div
                  aria-hidden="true"
                  className={`absolute top-[5px] left-[5px] w-full h-full bg-[#292827] ${squircle}`}
                />
                {/* خود کارت */}
                <div
                  className={`relative z-10 w-full h-full ${squircle} flex flex-col items-start justify-start text-right p-6 sm:p-7 min-h-[15rem] sm:min-h-[17rem] lg:min-h-[19rem] overflow-hidden`}
                  style={{
                    backgroundColor: theme.main,
                    border: "3px solid #292827",
                  }}
                >
                  {/* پترن — همون دو سکشن بالا (TrustSection-Pattern) */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <img
                      src={cardPattern}
                      alt=""
                      aria-hidden="true"
                      className="w-full h-full object-cover opacity-20 mix-blend-overlay select-none"
                    />
                  </div>

                  {/* ردیف بالا: آیکون (راست) + شماره (چپ) */}
                  <div className="relative z-10 flex items-start justify-between w-full mb-5 sm:mb-6">
                    {/* باکس آیکون — سفید + بوردر تیره + شدو کوچک */}
                    <div
                      className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-[0.625rem] bg-white"
                      style={{
                        border: "1.5px solid #292827",
                        boxShadow: "2px 2px 0 0 rgba(41,40,39,0.85)",
                      }}
                    >
                      <Icon theme={p.theme} className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <span className="font-black text-[1.25rem] sm:text-[1.5rem] text-white/70 leading-none">
                      {p.index}
                    </span>
                  </div>

                  {/* تایتل */}
                  <h4 className="relative z-10 font-black text-[1.0625rem] sm:text-[1.25rem] leading-snug text-white mb-3 sm:mb-4">
                    {p.title}
                  </h4>

                  {/* بدنه */}
                  <p className="relative z-10 text-[0.8125rem] sm:text-[0.875rem] leading-[1.8] text-white/90">
                    {p.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}