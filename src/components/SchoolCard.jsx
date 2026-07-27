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

export default function SchoolCard({ theme, category, title, meta, chips, ctaLabel }) {
  const t = THEMES[theme];

  return (
    <div
      className={`${t.bg} ${t.rotate} rounded-card-lg text-white p-8 sm:p-10 relative overflow-hidden min-h-[380px] flex flex-col`}
    >
      <span className="self-start rotate-2 bg-white/[0.17] border border-white font-bold text-sm rounded-badge px-3.5 py-2 mb-5">
        {category}
      </span>

      <h3 className="font-black text-[26px] sm:text-[34px] mb-2">{title}</h3>
      <p className="text-sm opacity-80 mb-6">{meta}</p>

      <div className="flex flex-wrap gap-2.5 mb-auto">
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

      <a
        href="#"
        className={`self-start rotate-[1.5deg] mt-6 bg-white font-extrabold text-[15px] rounded-chip px-5 py-3 ${t.ctaText}`}
      >
        {ctaLabel}
      </a>
    </div>
  );
}
