const THEMES = {
  orange: {
    rotate: "rotate-[2.5deg]",
    back: "bg-orange-alt",
    front: "bg-bg-neutral border-orange-alt",
    text: "text-orange",
    badgeBorder: "border-orange text-orange",
  },
  navy: {
    rotate: "-rotate-2",
    back: "bg-navy-alt",
    front: "bg-bg-lavender border-navy",
    text: "text-navy-alt",
    badgeBorder: "border-navy-alt text-navy-alt",
  },
  magenta: {
    rotate: "rotate-[2.5deg]",
    back: "bg-magenta",
    front: "bg-bg-blush border-magenta",
    text: "text-magenta",
    badgeBorder: "border-magenta-text text-magenta-text",
  },
  teal: {
    rotate: "-rotate-2",
    back: "bg-teal-alt",
    front: "bg-bg-mint border-teal",
    text: "text-teal-text",
    badgeBorder: "border-teal-text-alt text-teal-text-alt",
  },
};

export default function StatCard({ theme, label, value, caption }) {
  const t = THEMES[theme];

  return (
    <div className={`relative ${t.rotate}`}>
      <div className={`absolute inset-1.5 -right-1.5 -bottom-1.5 rounded-tl-card-sm rounded-br-card-sm ${t.back}`} />
      <div
        className={`relative border-2 rounded-tl-card-sm rounded-br-card-sm px-4 py-6 pb-7 text-center overflow-hidden ${t.front}`}
      >
        <span
          className={`inline-block bg-white font-bold text-sm rounded-badge border px-3.5 py-1.5 mb-4 ${t.badgeBorder}`}
        >
          {label}
        </span>
        <div className={`font-black text-5xl leading-none mb-3.5 ${t.text}`}>{value}</div>
        <p className={`text-sm leading-relaxed font-semibold ${t.text}`}>
          <strong className="block font-black mb-0.5">{caption.strong}</strong>
          {caption.rest}
        </p>
      </div>
    </div>
  );
}
