import texture from "../assets/images/Group 1000006377.png";

const THEMES = {
  orange: {
    rotate: "rotate-[2.5deg]",
    badgeRotate: "rotate-[3deg]",
    back: "bg-orange-alt",
    front: "bg-orange-50 border-orange-alt",
    text: "text-orange",
    badge: "border-orange text-orange",
  },

  navy: {
    rotate: "-rotate-[2deg]",
    badgeRotate: "-rotate-[2.5deg]",
    back: "bg-navy-alt",
    front: "bg-lavender border-navy",
    text: "text-navy-alt",
    badge: "border-navy-alt text-navy-alt",
  },

  magenta: {
    rotate: "rotate-[2.5deg]",
    badgeRotate: "rotate-[3deg]",
    back: "bg-magenta",
    front: "bg-blush border-magenta",
    text: "text-magenta-text",
    badge: "border-magenta-text text-magenta-text",
  },

  teal: {
    rotate: "-rotate-[2deg]",
    badgeRotate: "-rotate-[2.5deg]",
    back: "bg-teal-alt",
    front: "bg-teal-50 border-teal",
    text: "text-teal-text",
    badge: "border-teal-text text-teal-text",
  },
};

export default function StatCard({ theme, label, value, caption }) {
  const t = THEMES[theme];

  return (
    <div className={`relative ${t.rotate}`}>
      {/* Back Shadow Layer */}
      <div
        className={`
          absolute
          inset-0
          translate-x-[7px]
          translate-y-[7px]
          rounded-tl-card-sm
          rounded-br-card-sm
          ${t.back}
        `}
      />

      {/* Main Card */}
      <div
        className={`
          relative
          rounded-tl-card-sm
          rounded-br-card-sm
          border-[3px]
          ${t.front}
          px-5
          pt-9
          pb-7
          text-center
          overflow-visible
        `}
      >
        <div className="absolute inset-0 rounded-tl-card-sm rounded-br-card-sm overflow-hidden pointer-events-none">
          {/* White overlay */}
          <div className="absolute inset-0 bg-white/85" />

          {/* Texture */}
          <img
            src={texture}
            alt=""
            draggable={false}
            className="
              absolute
              inset-0
              w-full
              h-full
              object-cover
              scale-150
              select-none
            "
          />
        </div>

        {/* Badge */}
        <span
          className={`
            relative
            z-20
            inline-block
            -mt-2
            mb-8
            bg-white
            border-2
            rounded-xl
            px-4
            py-1.5
            whitespace-nowrap
            text-sm
            font-extrabold
            shadow-sm
            ${t.badgeRotate}
            ${t.badge}
          `}
        >
          {label}
        </span>

        {/* Number */}
        <div
          className={`
            relative
            z-10
            mb-4
            text-[72px]
            leading-none
            font-black
            ${t.text}
          `}
        >
          {value}
        </div>

        {/* Caption */}
        <div
          className={`
            relative
            z-10
            ${t.text}
          `}
        >
          <strong className="block mb-1 text-base font-black">
            {caption.strong}
          </strong>

          <p className="text-sm leading-7 font-semibold">{caption.rest}</p>
        </div>
      </div>
    </div>
  );
}
