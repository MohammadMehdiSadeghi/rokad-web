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
      className={`${t.bg} ${t.rotate} rounded-card-lg text-white p-8 sm:p-10 relative overflow-hidden min-h-[380px] flex flex-col transition-all duration-500 ease-out hover:rotate-0 hover:-translate-y-1.5 hover:shadow-2xl`}
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
          className="pointer-events-none select-none absolute bottom-0 left-0 w-[55%] max-w-[280px] h-auto opacity-95 z-[1]"
        />
      )}

      {/* Text Container - سمت راست */}
      <div className="relative z-10 flex flex-col h-full max-w-[75%] sm:max-w-[70%] ml-auto">
        {/* Badge */}
        <span className="self-start rotate-2 bg-white/[0.17] border border-white font-bold text-sm rounded-[8px] px-3.5 py-2 mb-5">
          {category}
        </span>

        {/* Title */}
        <h3 className="font-black text-[43px] mb-2 leading-tight">{title}</h3>
        <p className="text-sm opacity-80 mb-6">{meta}</p>

        {/* Chips */}
        <div className="flex flex-col items-start gap-2.5 mb-auto">
          {chips.map((chip) => (
            <span
              key={chip}
              className="-rotate-2 flex items-center gap-2 bg-white/[0.15] font-semibold text-[13px] rounded-chip px-3.5 py-2"
            >
              <DotBullet />
              {chip}
            </span>
          ))}
        </div>

        {/* Button */}
        <a
          href="#"
          className={`self-start rotate-[1.5deg] mt-6 bg-white font-extrabold text-[15px] rounded-[8px] px-5 py-3 ${t.ctaText} transition-transform duration-300 hover:scale-105 hover:rotate-0`}
        >
          {ctaLabel}
        </a>
      </div>
    </div>
  );
}