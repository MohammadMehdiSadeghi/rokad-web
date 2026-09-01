import Container from "../../../../layout/Container";

// پالت سکشن — دقیقاً طبق توضیحات
const THEMES = {
  teal: { main: "#55BDB5", text: "text-white" },
  navy: { main: "#293660", text: "text-white" },
  orange: { main: "#FFA91B", text: "text-white" },
  magenta: { main: "#EA145A", text: "text-white" },
};

const pillars = [
  {
    index: "۰۱",
    title: "یادگیری با انجام‌دادن",
    body: "نظریه یه جایی داره، ولی توی رکاد بچه‌ها روی پروژه‌های واقعی کار می‌کنن و توی فرایند حل مسئله، مفاهیم رو به‌صورت عملی یاد می‌گیرن.",
    theme: "teal",
    rotation: "-rotate-[1.5deg]",
    variant: 0,
  },
  {
    index: "۰۲",
    title: "کار تیمی واقعی",
    body: "دانش‌آموز به‌عنوان یه تیم در جهت حل مسئله و پیشرفت در یادگیری همکاری می‌کنه؛ نه به‌صورت انفرادی و رقابتی.",
    theme: "navy",
    rotation: "rotate-[1.5deg]",
    variant: 1,
  },
  {
    index: "۰۳",
    title: "مهارت‌های نرم و سخت",
    body: "نه فقط برنامه‌نویسی و طراحی، بلکه خودشناسی، تفکر انتقادی و کار تیمی — همه‌ی مهارت‌های نرمی که فردا لازمشون داره.",
    theme: "orange",
    rotation: "-rotate-[1.5deg]",
    variant: 2,
  },
  {
    index: "۰۴",
    title: "همراهی با کوچینگ",
    body: "دانش‌آموز توی مسیر توسعه فردی با ابزار کوچینگ و تجربه‌نگاری به‌صورت مستمر همراهی می‌شه؛ نه یه بار در سال.",
    theme: "magenta",
    rotation: "rotate-[1.5deg]",
    variant: 3,
  },
];

// ── پترن هندسی پلیگونی — Flat/Vector، هر کارت چینش متفاوت ──
function PolyPattern({ color, variant }) {
  const shapes = [
    // variant 0 — مثلث‌های پراکنده بالا
    [
      "M-10,-20 L80,-10 L40,30 Z",
      "M340,-40 L420,-10 L380,40 Z",
      "M160,-60 L230,-30 L190,10 Z",
    ],
    // variant 1 — لوزی‌ها و ذوزنقه وسط
    [
      "M-20,120 L60,90 L100,160 L20,190 Z",
      "M320,90 L400,60 L440,130 L360,160 Z",
      "M150,200 L210,170 L240,230 L180,260 Z",
    ],
    // variant 2 — خطوط شکسته پایین
    [
      "M-30,280 L70,240 L120,300 L30,340 Z",
      "M300,240 L380,200 L420,260 L340,300 Z",
      "M130,320 L190,290 L220,350 L160,380 Z",
    ],
    // variant 3 — پلی‌گون‌های پراکنده چپ/راست
    [
      "M-40,60 L30,20 L70,80 L0,120 Z",
      "M360,180 L440,140 L480,200 L400,240 Z",
      "M-20,220 L60,190 L90,250 L10,280 Z",
    ],
  ][variant];

  return (
    <svg
      viewBox="0 0 420 320"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full pointer-events-none select-none"
    >
      {shapes.map((d, i) => (
        <path
          key={i}
          d={d}
          fill={color}
          opacity={i === 0 ? 0.18 : i === 1 ? 0.12 : 0.08}
        />
      ))}
    </svg>
  );
}

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
              <div
                key={p.index}
                className={`relative w-full h-full transition-transform duration-300 hover:rotate-0 hover:-translate-y-1 ${p.rotation}`}
              >
                {/* لایه شدو تیره — حالت استیکری */}
                <div
                  aria-hidden="true"
                  className={`absolute top-[5px] left-[5px] w-full h-full bg-[#292827] ${squircle}`}
                />
                {/* خود کارت */}
                <div
                  className={`relative z-10 w-full h-full ${squircle} flex flex-col items-center text-center p-6 sm:p-7 min-h-[15rem] sm:min-h-[17rem] lg:min-h-[19rem] overflow-hidden`}
                  style={{
                    backgroundColor: theme.main,
                    border: "3px solid #292827",
                  }}
                >
                  {/* پترن پلیگونی — در پس‌زمینه */}
                  <div className="absolute inset-0 pointer-events-none opacity-90">
                    <PolyPattern color={theme.main} variant={p.variant} />
                  </div>

                  {/* ردیف بالا: شماره (راست) + آیکون (چپ) */}
                  <div className="relative z-10 flex items-start justify-between w-full mb-5 sm:mb-6">
                    <span className="font-black text-[1.25rem] sm:text-[1.5rem] text-white/70 leading-none">
                      {p.index}
                    </span>
                    {/* باکس آیکون — سفید/بسیار روشن + بوردر تیره + شدو کوچک */}
                    <div
                      className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-[0.625rem] bg-white"
                      style={{
                        border: "1.5px solid #292827",
                        boxShadow: "2px 2px 0 0 rgba(41,40,39,0.85)",
                      }}
                    >
                      <Icon theme={p.theme} className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                  </div>

                  {/* تایتل */}
                  <h4 className="relative z-10 font-black text-[1.0625rem] sm:text-[1.25rem] leading-snug text-white mb-3 sm:mb-4">
                    {p.title}
                  </h4>

                  {/* بدنه */}
                  <p className="relative z-10 text-[0.8125rem] sm:text-[0.875rem] leading-[1.8] text-white/90 mt-auto">
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