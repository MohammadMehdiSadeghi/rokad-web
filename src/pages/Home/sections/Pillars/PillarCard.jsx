// PillarCard.jsx
export default function PillarCard({
  index,
  icon,
  iconBg,
  title,
  body,
  variant = "light",
  rotationLg = 0,
}) {
  const isDark = variant === "dark" || variant === "featured";

  if (isDark) {
    const cardCls = featured
      ? "bg-teal border-teal"
      : "bg-white/[0.06] border-white/[0.12]";
    const iconBgCls = featured ? "bg-white/25" : "bg-white/15";
    const titleCls = "text-white";
    const bodyCls = featured ? "text-white/90" : "text-white/70";
    return (
      <article
        className={`relative border rounded-[1.25rem] p-6 sm:p-7 ${cardCls}`}
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
        <h4 className={`font-extrabold text-[1.0625rem] mb-2.5 ${titleCls}`}>
          {title}
        </h4>
        <p className={`text-sm leading-[1.8] ${bodyCls}`}>{body}</p>
      </article>
    );
  }

  // ── Light "paper" style (Pillars section) ──
  const cornerRadius = "rounded-[0_2rem_0_2rem] [corner-shape:squircle]";
  const iconRadius = "rounded-[0.68625rem_0_0.68625rem_0] [corner-shape:squircle]";

  return (
    // h-full برای پر کردن ارتفاع سطر گرید؛ روتیشن فقط روی دسکتاپ (lg+)
    <div
      className="relative h-full lg:[transform:rotate(var(--rotation-lg))]"
      style={{ "--rotation-lg": `${rotationLg}deg` }}
    >
      {/* Shadow / offset layer */}
      <div
        className={`absolute top-[0.3rem] left-[0.3rem] w-full h-full bg-[#292827] ${cornerRadius}`}
      />

      {/* Card */}
      <article
        className={`relative z-10 h-full flex flex-col bg-[#F6F6F6] border-[0.125rem] border-[#292827] ${cornerRadius} px-5 py-5 sm:px-6 sm:py-7 min-h-[10rem] sm:min-h-[12rem] lg:min-h-[14rem]`}
      >
        {/* Index */}
        {index && (
          <span className="absolute top-3 sm:top-5 left-3 sm:left-5 font-black text-[0.875rem] sm:text-[2rem] text-[#0000001f] leading-none">
            {index}
          </span>
        )}

        {/* Icon box */}
        <div
          className={`w-8 h-8 sm:w-11 sm:h-11 flex items-center justify-center mb-2 sm:mb-5 border-[0.09375rem] border-[#292827] ${iconRadius} p-[0.25rem] sm:p-[0.45rem] ${iconBg || "bg-[#292827]"} mt-0`}
        >
          <span className="w-full h-full text-white flex items-center justify-center">
            {icon}
          </span>
        </div>

        {/* Title */}
        <h4 className="font-black text-[1.125rem] sm:text-[1.375rem] lg:text-[1.5rem] text-ink mb-2 sm:mb-3 leading-snug">
          {title}
        </h4>

        {/* Body */}
        <p className="text-[0.9375rem] sm:text-[1rem] leading-[1.7] text-ink/60">
          {body}
        </p>
      </article>
    </div>
  );
}
