import Container from "../../../../layout/Container";

const patternBg = "/assets/Pattern/layout-pattern.png";

const pillars = [
  {
    index: "۰۱",
    title: "یادگیری با انجام‌دادن",
    body: "نظریه یه جایی داره، ولی توی رکاد بچه‌ها روی پروژه‌های واقعی کار می‌کنن و توی فرایند حل مسئله، مفاهیم رو به‌صورت عملی یاد می‌گیرن.",
    iconBg: "bg-teal",
    rotation: "-rotate-[1.5deg]",
  },
  {
    index: "۰۲",
    title: "کار تیمی واقعی",
    body: "دانش‌آموز به‌عنوان یه تیم در جهت حل مسئله و پیشرفت در یادگیری همکاری می‌کنه؛ نه به‌صورت انفرادی و رقابتی.",
    iconBg: "bg-magenta",
    rotation: "rotate-[1.5deg]",
  },
  {
    index: "۰۳",
    title: "مهارت‌های نرم و سخت",
    body: "نه فقط برنامه‌نویسی و طراحی، بلکه خودشناسی، تفکر انتقادی و کار تیمی — همه‌ی مهارت‌های نرمی که فردا لازمشون داره.",
    iconBg: "bg-navy",
    rotation: "-rotate-[1.5deg]",
  },
  {
    index: "۰۴",
    title: "همراهی با کوچینگ",
    body: "دانش‌آموز توی مسیر توسعه فردی با ابزار کوچینگ و تجربه‌نگاری به‌صورت مستمر همراهی می‌شه؛ نه یه بار در سال.",
    iconBg: "bg-orange",
    rotation: "rotate-[1.5deg]",
  },
];

function PuzzleIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M4 7h3a1 1 0 011 1v3a1 1 0 001 1h0a1 1 0 001-1V7h3a1 1 0 011 1v3a1 1 0 01-1 1h-1v3a1 1 0 01-1 1H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M14 14v3a1 1 0 001 1h3a1 1 0 001-1v-3a1 1 0 00-1-1h-3a1 1 0 00-1 1z" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function UsersIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="9" cy="7" r="3" stroke="currentColor" strokeWidth="2" />
      <circle cx="17" cy="8" r="2.5" stroke="currentColor" strokeWidth="2" />
      <path d="M3 19c0-3 2.7-5 6-5s6 2 6 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M14 19c0-2 1.8-3.5 4-3.5s4 1.5 4 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function BrainIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 2a7 7 0 00-7 7c0 2.5 1.5 4.5 3.5 5.5L12 22l3.5-7.5C17.5 13.5 19 11.5 19 9a7 7 0 00-7-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 9h.01M15 9h.01M10 12h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function HeartIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 6C10-1 2 1 2 7c0 5 10 11 10 11s10-6 10-11c0-6-8-8-10-1z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 14l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const icons = [PuzzleIcon, UsersIcon, BrainIcon, HeartIcon];

export default function AboutPillars() {
  return (
    <section className="relative py-[4rem] sm:py-[5rem] lg:py-[6rem] px-4 sm:px-6 lg:px-8 bg-[#F6F6F6] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]">
        <img src={patternBg} alt="" aria-hidden="true" draggable="false" className="w-full h-full object-cover opacity-30 select-none" />
      </div>

      <Container className="relative z-10">
        {/* ── Header: تیتر + زیرتیتر ── */}
        <h2 className="text-center font-black text-[1.5rem] sm:text-[2.25rem] lg:text-[3.325rem] leading-[1.2] mb-[1rem] sm:mb-[1.5rem] flex flex-wrap justify-center items-center gap-x-2 sm:gap-x-3">
          <span className="inline-block" style={{ transform: "rotate(-1.5deg)" }}>چهار</span>
                    <span className="inline-block text-teal" style={{ transform: "rotate(0deg)" }}>ستون</span>
                    <span className="inline-block" style={{ transform: "rotate(1.5deg)" }}>که</span>
                    <span className="inline-block text-navy-alt" style={{ transform: "rotate(2deg)" }}>رکاد</span>
                    <span className="inline-block" style={{ transform: "rotate(-1.5deg)" }}>روش</span>
                    <span className="inline-block" style={{ transform: "rotate(2deg)" }}>بنا</span>
                    <span className="inline-block" style={{ transform: "rotate(0deg)" }}>شده</span>
        </h2>

        <p className="text-center font-semibold text-[0.875rem] sm:text-[1rem] lg:text-[1.09375rem] leading-[1.7] text-[#777777] max-w-[42rem] mx-auto mb-[2rem] sm:mb-[2.5rem] lg:mb-[3rem]">
          این چهار ارزش پشت هر تصمیم و هر برنامه رکاده — از انتخاب معلم تا طراحی رویداد.
        </p>

        {/* ── گرید کارت‌ها ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, i) => {
            const Icon = icons[i];
            return (
              <div
                key={p.index}
                className={`relative w-full h-full transition-transform duration-300 hover:rotate-0 hover:scale-105 ${p.rotation}`}
              >
                {/* لایه سایه (پشتی) — تکنیک دولایه آفست */}
                <div
                  aria-hidden="true"
                  className="absolute top-[3px] left-[3px] w-full h-full bg-[#292827] rounded-[0_2rem_0_2rem] [corner-shape:squircle]"
                />

                {/* لایه اصلی کارت (جلویی) */}
                <div className="relative z-10 w-full h-full bg-white border-2 border-[#292827] rounded-[0_2rem_0_2rem] [corner-shape:squircle] flex flex-col items-center text-center p-6 sm:p-8 min-h-[14rem] sm:min-h-[16rem] lg:min-h-[18rem]">
                  {/* ردیف بالا: شماره (راست) + آیکون (چپ) */}
                  <div className="flex items-start justify-between w-full mb-5 sm:mb-6 lg:mb-7">
                    <span className="font-black text-[1.25rem] sm:text-[1.5rem] lg:text-[1.75rem] text-[#D1D1D1] leading-none">
                      {p.index}
                    </span>
                    <div className={`w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 flex items-center justify-center rounded-[0.625rem] [corner-shape:squircle] ${p.iconBg}`}>
                      <span className="w-5 h-5 text-white flex items-center justify-center">
                        <Icon className="w-full h-full" />
                      </span>
                    </div>
                  </div>

                  {/* تایتل */}
                  <h4 className="font-black text-[1rem] sm:text-[1.125rem] lg:text-[1.25rem] text-[#292827] mb-3 sm:mb-4 leading-snug">
                    {p.title}
                  </h4>

                  {/* بدنه */}
                  <p className="text-[0.75rem] sm:text-[0.8125rem] lg:text-[0.875rem] leading-[1.8] text-[#777777] mt-auto">
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
