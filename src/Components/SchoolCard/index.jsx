// SchoolCard.jsx
const THEMES = {
  boys: {
    rotate: "rotate-1",
    bg: "bg-navy-alt",
    ctaText: "text-navy-alt",
  },
  girls: {
    rotate: "-rotate-1",
    bg: "bg-magenta",
    ctaText: "text-magenta",
  },
};

function DotBullet() {
  return (
    <span className="relative w-3 h-3 flex-shrink-0">
      <span className="absolute inset-0 rounded-full bg-white/60" />
      <span className="absolute left-0.5 top-0.5 w-[7px] h-[7px] rounded-full bg-white/75" />
    </span>
  );
}

export default function SchoolCard({ theme, category, title, meta, chips, ctaLabel, illustration, pattern }) {
  const t = THEMES[theme];

  return (
    <div
      className={`${t.bg} ${t.rotate} rounded-card-lg text-white p-5 sm:p-8 lg:p-10 relative overflow-hidden min-h-[300px] sm:min-h-[340px] lg:min-h-[380px] flex flex-col transition-all duration-500 ease-out hover:rotate-0 hover:-translate-y-1.5 hover:shadow-2xl`}
    >
      {/* ── Background Pattern (لایه پترن) ── */}
      {/* عکس پترن اینجا رندر میشه. opacity و blend-mode تنظیم شده که با کارت ترکیب بشه */}
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

      {/* Illustration - سمت چپ (z-index تغییر کرد تا روی پترن قرار بگیره) */}
      {illustration && (
        <img
          src={illustration}
          alt=""
          aria-hidden="true"
          className="pointer-events-none select-none absolute bottom-0 left-0 w-[48%] max-w-[170px] sm:w-[55%] sm:max-w-[230px] lg:max-w-[280px] h-auto opacity-95 z-[1]"
        />
      )}

      {/* Text Container - سمت راست */}
      <div className="relative z-10 flex flex-col h-full max-w-[68%] sm:max-w-[68%] lg:max-w-[70%] ml-auto">


        {/* Title */}
        <h3 className="font-black text-[26px] xs:text-[29px] sm:text-[36px] lg:text-[43px] mb-2 leading-tight">
          {title}
        </h3>
        <p className="text-[13px] sm:text-sm opacity-80 mb-4 sm:mb-6">{meta}</p>

        {/* Chips */}
        <div className="flex flex-col items-start gap-2 sm:gap-2.5 mb-auto">
          {chips.map((chip) => (
            <span
              key={chip}
              className="-rotate-2 flex items-center gap-2 bg-white/[0.15] font-semibold text-[12px] sm:text-[13px] rounded-chip px-3 sm:px-3.5 py-1.5 sm:py-2"
            >
              <DotBullet />
              {chip}
            </span>
          ))}
        </div>

        {/* Button */}
        <a
          href="#"
          className={`self-start rotate-[1.5deg] mt-5 sm:mt-6 bg-white font-extrabold text-[14px] sm:text-[15px] rounded-[8px] px-4 sm:px-5 py-2.5 sm:py-3 ${t.ctaText} transition-transform duration-300 hover:scale-105 hover:rotate-0`}
        >
          {ctaLabel}
        </a>
      </div>
    </div>
  );
}