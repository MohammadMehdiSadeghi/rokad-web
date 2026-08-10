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

      {/* Card (کارت اصلی روی لایه سیاه) — موبایل: 160×107 (فیگما)، دسکتاپ: 332×228 */}
            <article
              className={`relative z-10 min-h-[112px] xs:min-h-[120px] sm:min-h-[220px] bg-[#F6F6F6] border-[2px] border-[#292827] ${cornerRadius} px-2.5 xs:px-3 sm:px-6 py-3 xs:py-3.5 sm:py-7`}
            >
              {/* Index — top-left (فیگما موبایل: 17px) */}
              {index && (
                <span className="absolute top-2 xs:top-2.5 sm:top-5 left-2 xs:left-3 sm:left-5 font-black text-[14px] xs:text-[16px] sm:text-[32px] text-[#0000001f] leading-none">
                  {index}
                </span>
              )}

              {/* Icon box (فیگما موبایل: 23×23) */}
              <div
                className={`w-[22px] h-[22px] xs:w-6 xs:h-6 sm:w-11 sm:h-11 flex items-center justify-center mb-1.5 xs:mb-2 sm:mb-5 border-[1px] xs:border-[1.2px] sm:border-[1.2px] border-[#292827] ${iconRadius} p-[3px] xs:p-[4px] sm:p-[7.2px] ${iconBg || "bg-[#292827]"} mt-0`}
              >
                <span className="w-full h-full text-white flex items-center justify-center">
                  {icon}
                </span>
              </div>

              <h4 className="font-black text-[11px] xs:text-[11.5px] sm:text-[20px] text-ink mb-1 xs:mb-1.5 sm:mb-3 leading-snug xs:leading-[1.9] sm:whitespace-nowrap">
                {title}
              </h4>
              {/* خط دوم متن کوتاه در موبایل (مانند فیگما) */}
              <p className="text-[8.5px] xs:text-[9px] sm:text-[14px] leading-[1.6] xs:leading-[1.65] sm:leading-[1.85] text-ink/60 line-clamp-2">
                {body}
              </p>
            </article>
    </div>
  );
}
