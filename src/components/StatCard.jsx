import texture from "../assets/images/Group 1000006377.png";

const THEMES = {
  orange: {
    rotate: "rotate-[2.5deg]",
    badgeRotate: "-rotate-[7deg]",
    back: "bg-orange-alt",
    front: "bg-bg-neutral border-orange-alt",
    text: "text-orange",
    badgeBorder: "border-orange text-orange",
  },
  navy: {
    rotate: "-rotate-2",
    badgeRotate: "rotate-[6deg]",
    back: "bg-navy-alt",
    front: "bg-bg-lavender border-navy",
    text: "text-navy-alt",
    badgeBorder: "border-navy-alt text-navy-alt",
  },
  magenta: {
    rotate: "rotate-[2.5deg]",
    badgeRotate: "-rotate-[6deg]",
    back: "bg-magenta",
    front: "bg-bg-blush border-magenta",
    text: "text-magenta",
    badgeBorder: "border-magenta-text text-magenta-text",
  },
  teal: {
    rotate: "-rotate-2",
    badgeRotate: "rotate-[7deg]",
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
      <div
        className={`absolute inset-1.5 -right-1.5 -bottom-1.5 rounded-tl-card-sm rounded-br-card-sm ${t.back}`}
      />
      <div
        className={`relative border-2 rounded-tl-card-sm rounded-br-card-sm px-4 pt-9 pb-7 text-center ${t.front}`}
      >
        {/* Low-opacity decorative blob bleeding from the corner — see
            design-spec §7. Purely atmospheric, sits behind the text. Clipped
            in its own wrapper (rather than on the card itself) so the badge
            below can overlap/poke past the card's top border. */}
        <div className="absolute inset-0 rounded-tl-card-sm rounded-br-card-sm overflow-hidden pointer-events-none">
          {/* Texture overlay */}
          <img
            src={texture}
            alt=""
            className="select-none absolute w-full h-full object-cover"
            style={{
              opacity: 1,
              transform: "scale(1.5)",
            }}
          />
        </div>
        <span
          className={`absolute -top-4 left-1/2 -translate-x-1/2 inline-block whitespace-nowrap bg-white font-bold text-sm-alt rounded-badge border px-3.5 py-1.5 ${t.badgeRotate} ${t.badgeBorder}`}
        >
          {label}
        </span>
        <div
          className={`relative font-black text-6xl2 leading-none mb-3.5 ${t.text}`}
        >
          {value}
        </div>
        <p
          className={`relative text-2xs leading-relaxed font-semibold ${t.text}`}
        >
          <strong className="block font-black mb-0.5">{caption.strong}</strong>
          {caption.rest}
        </p>
      </div>
    </div>
  );
}
