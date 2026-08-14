// PillarCard.jsx
export default function PillarCard({
  index,
  icon,
  iconBg,
  title,
  body,
  variant = "light",
  rotation = 0,
}) {
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
  const cornerRadius = "rounded-[0_32px_0_32px] [corner-shape:squircle]";
  const iconRadius = "rounded-[10.98px_0_10.98px_0] [corner-shape:squircle]";

  return (
    // اضافه شدن h-full برای پر کردن ارتفاع سطر گرید
    <div className="relative h-full" style={{ transform: `rotate(${rotation}deg)` }}>
      {/* Shadow / offset layer */}
      <div
        className={`absolute top-[4.8px] left-[4.8px] w-full h-full bg-[#292827] ${cornerRadius}`}
      />

      {/* Card - اضافه شدن h-full و flex flex-col */}
      <article
        className={`relative z-10 h-full flex flex-col bg-[#F6F6F6] border-[2px] border-[#292827] ${cornerRadius} px-4 sm:px-6 py-4 sm:py-7`}
      >
        {/* Index */}
        {index && (
          <span className="absolute top-3 sm:top-5 left-3 sm:left-5 font-black text-[14px] sm:text-[32px] text-[#0000001f] leading-none">
            {index}
          </span>
        )}

        {/* Icon box */}
        <div
          className={`w-8 h-8 sm:w-11 sm:h-11 flex items-center justify-center mb-2 sm:mb-5 border-[1.5px] border-[#292827] ${iconRadius} p-[4px] sm:p-[7.2px] ${iconBg || "bg-[#292827]"} mt-0`}
        >
          <span className="w-full h-full text-white flex items-center justify-center">
            {icon}
          </span>
        </div>

        {/* Title */}
        <h4 className="font-black text-[14px] sm:text-[20px] text-ink mb-1.5 sm:mb-3 leading-snug">
          {title}
        </h4>
        
        {/* Body */}
        <p className="text-[14px] sm:text-[14px] leading-[1.8] text-ink/60">
          {body}
        </p>
      </article>
    </div>
  );
}