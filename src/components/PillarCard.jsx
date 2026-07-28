// Pillar card — "torn paper" / sticky-note style matching the Figma design.
// Each card has:
//   • White background with a slight rotate and a gray shadow-offset layer
//   • Index number top-right (faint)
//   • Colored icon box top-left (RTL: top-right in visual)
//   • Title + body text

export default function PillarCard({ index, icon, iconBg, title, body, variant = "light" }) {
  // variant "dark" / "featured" used by Ecosystem section — keep support
  const isDark = variant === "dark" || variant === "featured";
  const featured = variant === "featured";

  if (isDark) {
    // Ecosystem dark cards — simpler style
    const cardCls = featured
      ? "bg-teal border-teal"
      : "bg-white/[0.06] border-white/[0.12]";
    const iconBgCls = featured ? "bg-white/25" : "bg-white/15";
    const titleCls = "text-white";
    const bodyCls = featured ? "text-white/90" : "text-white/70";
    return (
      <article className={`relative border rounded-[20px] p-6 sm:p-7 ${cardCls}`}>
        {index && (
          <span className="absolute top-5 left-5 font-extrabold text-2xl text-white/20">{index}</span>
        )}
        <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${iconBgCls}`}>
          <span className="w-6 h-6 text-white">{icon}</span>
        </div>
        <h4 className={`font-extrabold text-[17px] mb-2.5 ${titleCls}`}>{title}</h4>
        <p className={`text-sm leading-[1.8] ${bodyCls}`}>{body}</p>
      </article>
    );
  }

  // ── Light "paper" style (Pillars section) ──
  return (
    <div className="relative">
      {/* Shadow / offset layer */}
      <div className="absolute inset-0 translate-x-[6px] translate-y-[6px] rounded-[18px] bg-gray-200/70" />

      {/* Card */}
      <article className="relative bg-white border-2 border-gray-200 rounded-[18px] p-6 sm:p-7">
        {/* Index — top-left (RTL visual: top-left = trailing edge) */}
        {index && (
          <span className="absolute top-5 left-5 font-black text-[22px] text-ink/15 leading-none">
            {index}
          </span>
        )}

        {/* Icon box */}
        <div
          className={`w-11 h-11 rounded-[12px] flex items-center justify-center mb-5 ${iconBg || "bg-navy"}`}
        >
          <span className="w-6 h-6 text-white">{icon}</span>
        </div>

        <h4 className="font-black text-[18px] sm:text-[20px] text-ink mb-3 leading-snug">{title}</h4>
        <p className="text-[13px] sm:text-[14px] leading-[1.85] text-ink/60">{body}</p>
      </article>
    </div>
  );
}
