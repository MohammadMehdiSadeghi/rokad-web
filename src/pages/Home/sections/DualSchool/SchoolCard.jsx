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
      <span className="absolute left-0.5 top-0.5 w-[0.4375rem] h-[0.4375rem] rounded-full bg-white/75" />
    </span>
  );
}

export default function SchoolCard({ theme, category, title, meta, chips, ctaLabel, illustration, pattern }) {
  const t = THEMES[theme];

  return (
    <div
      className={`${t.rotate} relative transition-all duration-500 ease-out hover:rotate-0 hover:-translate-y-1.5`}
    >
      {/* کارت اصلی */}
      <div
        className={`relative ${t.bg} text-white p-5 sm:p-8 lg:p-10 overflow-hidden min-h-[20rem] sm:min-h-[18rem] lg:min-h-[22rem] flex flex-col border-2 border-white/10 rounded-[1.5rem] sm:rounded-[2.75rem] lg:rounded-[3.25rem] [corner-shape:squircle] transition-all duration-500 hover:shadow-2xl`}
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
                                    className="pointer-events-none select-none absolute bottom-0 left-0 w-[85%] max-w-[14rem] sm:w-[55%] sm:max-w-[13.75rem] lg:max-w-[16.25rem] h-auto opacity-95 z-[1]"
                                  />
                                )}

                        {/* Text Container - تغییر h-full به flex-1 برای اشغال کامل ارتفاع کارت */}
                                        <div className="relative z-10 flex flex-col justify-between flex-1 max-w-full sm:max-w-[70%] ml-0 sm:ml-auto">
          
          {/* ۱. گروه بالا: تایتل، متا، و چیپ‌ها */}
          <div>
            {/* Title */}
              <h3 className="font-black text-[1.5rem] sm:text-[2rem] lg:text-[2rem] mb-1 sm:mb-2 leading-tight">
                {title}
              </h3>
            
              {/* Meta */}
              <p className="text-[0.9375rem] sm:text-[1rem] opacity-80 mb-3 sm:mb-4">{meta}</p>

              {/* Chips */}
              <div className="flex flex-col items-start gap-1 sm:gap-1.5">
                {chips.map((chip) => (
                  <span
                    key={chip}
                    className="-rotate-2 flex items-center gap-2 bg-white/[0.15] font-semibold text-[0.9375rem] xs:text-[0.9375rem] sm:text-[0.9375rem] rounded-chip px-2.5 py-1 sm:px-3.5 sm:py-2"
                  >
                    <DotBullet />
                    {chip}
                  </span>
                ))}
              </div>
          </div>

          {/* ۲. گروه پایین: دکمه (به پایین‌ترین نقطه کارت می‌رود) */}
          <a
            href="#"
            className={`self-start rotate-[1.5deg] bg-white font-extrabold text-[0.9375rem] sm:text-[0.9375rem] lg:text-[0.9375rem] rounded-[0.5rem] px-5 sm:px-7 py-2.5 sm:py-3 ${t.ctaText} transition-transform duration-300 hover:scale-105 hover:rotate-0`}
          >
            {ctaLabel}
          </a>
        </div>
      </div>
    </div>
  );
}