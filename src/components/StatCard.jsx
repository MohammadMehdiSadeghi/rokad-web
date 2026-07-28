import yellowTexture from "../assets/Patterns/SchoolSelection/yellow.png";
import blueTexture from "../assets/Patterns/SchoolSelection/blue.png";
import pinkTexture from "../assets/Patterns/SchoolSelection/pink.png";
import greenTexture from "../assets/Patterns/SchoolSelection/green.png";

const THEMES = {
  orange: {
    rotate: "rotate-[2.5deg]",
    badgeRotate: "rotate-[3deg]",
    back: "bg-orange-alt",
    border: "border-orange-alt",
    text: "text-orange",
    badge: "border-orange text-orange",
    bg: "#FEF2DF",
    src: yellowTexture,
    opacity: 40,
  },
  navy: {
    rotate: "-rotate-[2deg]",
    badgeRotate: "-rotate-[2.5deg]",
    back: "bg-navy-alt",
    border: "border-navy",
    text: "text-navy-alt",
    badge: "border-navy-alt text-navy-alt",
    bg: "#DEDFE6",
    src: blueTexture,
    opacity: 30,
  },
  magenta: {
    rotate: "rotate-[2.5deg]",
    badgeRotate: "rotate-[3deg]",
    back: "bg-magenta",
    border: "border-magenta",
    text: "text-magenta-text",
    badge: "border-magenta-text text-magenta-text",
    bg: "#FADDE7",
    src: pinkTexture,
    opacity: 10,
  },
  teal: {
    rotate: "-rotate-[2deg]",
    badgeRotate: "-rotate-[2.5deg]",
    back: "bg-teal-alt",
    border: "border-teal",
    text: "text-teal-text",
    badge: "border-teal-text text-teal-text",
    bg: "#E6F5F3",
    src: greenTexture,
    opacity: 10,
  },
};

const DEFAULT_THEME = "teal";

export default function StatCard({ theme, label, value, caption = {} }) {
  // Guard: fall back to a known theme instead of crashing on a typo/undefined prop.
  const t = THEMES[theme] ?? THEMES[DEFAULT_THEME];

  if (!THEMES[theme] && theme !== undefined) {
    console.warn(
      `StatCard: unknown theme "${theme}", falling back to "${DEFAULT_THEME}".`,
    );
  }

  // Guard: caption is optional / partial — never crash on caption.strong / caption.rest.
  const { strong: captionStrong = "", rest: captionRest = "" } = caption;

  return (
    <div className={`relative ${t.rotate}`}>
      {/* Back Shadow Layer — offsets unified to px so they stay aligned
          regardless of root font-size (zoom / accessibility settings) */}
      <div
        className={`
          absolute
          top-2
          left-2
          -right-[5px]
          -bottom-[5px]
          rounded-tl-card-sm
          rounded-br-card-sm
          ${t.back}
        `}
      />

      {/* Main Card */}
      <div
        className={`
          relative
          z-10
          rounded-tl-card-sm
          rounded-br-card-sm
          border-[2px]
          ${t.border}
          px-5
          pt-6
          pb-6
          text-center
          overflow-visible
        `}
        style={{ backgroundColor: t.bg }}
      >
        <div className="absolute inset-0 rounded-tl-card-sm rounded-br-card-sm overflow-hidden pointer-events-none">
          {/* White overlay */}
          <div className="absolute inset-0 bg-white/85" />

          {/* Texture */}
          <img
            src={t.src}
            alt=""
            draggable={false}
            className={`
              absolute
              inset-0
              w-full
              h-full
              object-cover
              scale-150
              select-none
              opacity-${t.opacity}
            `}
          />
        </div>

        {/* Badge */}
        {label && (
          <span
            className={`
              relative
              z-20
              inline-block
              -mt-2
              mb-6
              bg-white
              border-[1px]
              rounded-xl
              px-4
              py-1.5
              whitespace-nowrap
              text-[16px]
              font-extrabold
              shadow-sm
              ${t.badgeRotate}
              ${t.badge}
            `}
          >
            {label}
          </span>
        )}

        {/* Number */}
        <div
          className={`
            relative
            z-20
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
        {(captionStrong || captionRest) && (
          <div className={`relative z-20 ${t.text}`}>
            {captionStrong && (
              <strong className="block mb-1 text-base font-black">
                {captionStrong}
              </strong>
            )}
            {captionRest && (
              <p className="text-sm leading-7 font-semibold">{captionRest}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
