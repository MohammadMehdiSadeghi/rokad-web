// SchoolCard.jsx (کپی از Home/sections/DualSchool)
const THEMES = {
  boys: {
    rotate: "rotate-1",
    bg: "bg-navy-alt",
    ctaText: "text-navy-alt",
    fill: "#202A5A",
  },
  girls: {
    rotate: "-rotate-1",
    bg: "bg-magenta",
    ctaText: "text-magenta",
    fill: "#E0195B",
  },
};

function DotBullet() {
  return (
    <span className="relative w-3 h-3 flex-shrink-0">
      <span className="absolute inset-0 rounded-full bg-white/60" />
      <span className="absolute left-0.5 top-0.5 w-[0.4375rem] h-[0.4375rem] rounded-full bg-white/75" />
    </span>
  );
}

export default function SchoolCard({ theme, category, title, meta, chips, ctaLabel, illustration, pattern, seoText }) {
  const t = THEMES[theme];

  return (
    <div
      className={`${t.rotate} relative h-full transition-all duration-500 ease-out hover:rotate-0 hover:-translate-y-1.5`}
    >
      {/* کارت اصلی — h-full تا دو کارت هم‌ارتفاع بمونن و فضای خالی هم‌تراز بشه */}
      <div
        className={`relative ${t.bg} text-white p-5 sm:p-8 lg:p-10 overflow-hidden h-full min-h-[20rem] sm:min-h-[18rem] lg:min-h-[22rem] flex flex-col border-2 border-white/10 rounded-[1.5rem] sm:rounded-[2.75rem] lg:rounded-[3.25rem] [corner-shape:squircle] transition-all duration-500 hover:shadow-2xl`}
      >
        {/* ── Background Pattern ── */}
        {pattern && (
          <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
            <img
              src={pattern}
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover opacity-[80%] mix-blend-overlay"
            />
          </div>
        )}

        {/* Illustration */}
        {illustration && (
          <img
            src={illustration}
            alt=""
            aria-hidden="true"
            className="pointer-events-none select-none absolute bottom-0 left-0 h-[16rem] sm:h-[15rem] lg:h-[17rem] w-auto opacity-95 z-[1]"
          />
        )}

        {/* Text Container — توزیع مساوی فضا بین همه‌ی آیتم‌ها */}
        <div className="relative z-10 flex flex-col justify-between flex-1 max-w-full sm:max-w-[70%] ml-0 sm:ml-auto">
          {/* Title */}
          <h3 className="font-black text-[1.625rem] sm:text-[2.125rem] lg:text-[2.25rem] leading-tight">
            {title}
          </h3>

          {/* Chips — رشته */}
          <div className="flex flex-col items-start gap-1 sm:gap-1.5">
            {chips.map((chip) => (
              <span
                key={chip}
                className="-rotate-2 flex items-center gap-2 bg-white/[0.15] font-semibold text-[1rem] sm:text-[1.0625rem] rounded-chip px-2.5 py-1 sm:px-3.5 sm:py-2"
              >
                <DotBullet />
                {chip}
              </span>
            ))}
          </div>

          {/* Meta */}
          <p className="text-[1rem] sm:text-[1.0625rem] opacity-80">{meta}</p>

          {/* متن توضیح برای سئو — مخفی */}
          {seoText && <p className="sr-only">{seoText}</p>}

          {/* دکمه */}
          <div className="relative inline-flex items-center justify-center self-start rotate-[-1.55deg] hover:rotate-0 transition-all duration-300 flex-shrink-0">
            <div
              aria-hidden="true"
              className={`absolute top-[0.125rem] left-[0.125rem] w-full h-full rounded-[0_0.75rem_0_0.75rem] [corner-shape:squircle] ${t.bg}`}
            />
            <a
              href="#"
              className={`relative z-10 bg-white border-2 border-[color:var(--btn-fill)] font-extrabold text-xs xs:text-sm sm:text-base rounded-[0_0.75rem_0_0.75rem] [corner-shape:squircle] px-3.5 xs:px-4 sm:px-6 py-2 sm:py-2.5 ${t.ctaText} whitespace-nowrap [background-image:linear-gradient(to_right,var(--btn-fill),var(--btn-fill))] bg-no-repeat [background-size:0%_100%] hover:[background-size:100%_100%] hover:text-white transition-all duration-300 ease-out`}
              style={{ "--btn-fill": t.fill }}
            >
              {ctaLabel}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}