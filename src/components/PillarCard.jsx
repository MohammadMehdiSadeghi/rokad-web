export default function PillarCard({ index, icon, title, body, variant = "light" }) {
  const isDark = variant === "dark" || variant === "featured";
  const featured = variant === "featured";

  const cardClasses = featured
    ? "bg-teal border-teal"
    : isDark
    ? "bg-white/[0.06] border-white/[0.12]"
    : "bg-bg-lavender border-transparent";

  const iconBg = featured ? "bg-white/25" : isDark ? "bg-white/15" : "bg-navy-alt";
  const titleColor = isDark ? "text-white" : "text-ink";
  const bodyColor = featured ? "text-white/90" : isDark ? "text-white/70" : "text-[#4b5170]";

  return (
    <article className={`relative border rounded-[20px] p-6 sm:p-7 ${cardClasses}`}>
      {index && (
        <span className="absolute top-5 right-6 font-extrabold text-2xl text-navy/[0.18]">
          {index}
        </span>
      )}
      <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${iconBg}`}>
        <span className="w-6 h-6">{icon}</span>
      </div>
      <h4 className={`font-extrabold text-[17px] mb-2.5 ${titleColor}`}>{title}</h4>
      <p className={`text-sm leading-[1.8] ${bodyColor}`}>{body}</p>
    </article>
  );
}
