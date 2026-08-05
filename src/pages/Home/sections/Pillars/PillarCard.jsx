// Pillar card — "torn paper" / sticky-note style matching the Figma design.
// Only ever used inside Pillars, so it lives next to it.

export default function PillarCard({
  index,
  icon,
  iconBg,
  title,
  body,
  variant = "light",
  rotation = 0,
}) {
  // variant "dark" / "featured" kept for possible reuse elsewhere.
  const isDark = variant === "dark" || variant === "featured";
  const featured = variant === "featured";

  if (isDark) {
    const cardCls = featured
      ? "bg-teal border-teal"
      : "bg-white/[0.06] border-white/[0.12]";
    const iconBgCls = featured ? "bg-white/25" : "bg-white/15";
    const titleCls = "text-white";
    const bodyCls = featured ? "text-white/90" : "text-white/70";
    return (
      <article
        className={`relative border rounded-[20px] p-6 sm:p-7 ${cardCls}`}
      >
        {index && (
          <span className="absolute top-5 left-5 font-extrabold text-2xl text-white/20">
            {index}
          </span>
        )}
        <div
          className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${iconBgCls}`}
        >
          <span className="w-6 h-6 text-white">{icon}</span>
        </div>
        <h4 className={`font-extrabold text-[17px] mb-2.5 ${titleCls}`}>
          {title}
        </h4>
        <p className={`text-sm leading-[1.8] ${bodyCls}`}>{body}</p>
      </article>
    );
  }

  // ── Light "paper" style (Pillars section) ──

  // ردیوس اختصاصی کارت
  const cornerRadius = "rounded-[0_13.44px_0_13.44px]";

  // ردیوس اختصاصی آیکون
  const iconRadius = "rounded-[4.98px_0_4.98px_0]";

  return (
    // اعمال چرخش روی کل پکیج کارت
    <div className="relative " style={{ transform: `rotate(${rotation}deg)` }}>
      {/* Shadow / offset layer (لایه سیاه پشت کارت) */}
      <div
        className={`absolute top-[4.8px] left-[4.8px] w-full h-full bg-[#292827] ${cornerRadius}`}
      />

      {/* Card (کارت اصلی روی لایه سیاه) */}
      <article
        className={`relative z-10 min-h-[220px] bg-[#F6F6F6] border-[2px] border-[#292827] ${cornerRadius} px-5 sm:px-6 py-6 sm:py-7`}
      >
        {/* Index — top-left */}
        {index && (
          <span className="absolute top-5 left-5 font-black text-[32px] text-[#00000030] leading-none">
            {index}
          </span>
        )}

        {/* Icon box */}
        <div
          className={`w-11 h-11 flex items-center justify-center mb-5 border-[1.2px] border-[#292827] ${iconRadius} p-[7.2px] ${iconBg || "bg-[#292827]"}`}
        >
          <span className="w-full h-full text-white flex items-center justify-center">
            {icon}
          </span>
        </div>

        <h4 className="font-black text-[18px] sm:text-[20px] text-ink mb-3 leading-snug whitespace-nowrap">
          {title}
        </h4>
        {/* line-clamp-2 برای اطمینان از اینکه متن دقیقاً در دو خط جا می‌شود */}
        <p className="text-[13px] sm:text-[14px] leading-[1.85] text-ink/60 line-clamp-2">
          {body}
        </p>
      </article>
    </div>
  );
}
