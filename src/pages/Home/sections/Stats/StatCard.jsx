const yellowTexture = "/assets/StatCard/yellow.png";
const blueTexture = "/assets/StatCard/blue.png";
const pinkTexture = "/assets/StatCard/pink.png";
const greenTexture = "/assets/StatCard/green.png";

const THEMES = {
  orange: {
    rotate: "rotate-[2.5deg]",
    badgeRotate: "rotate-[3deg]",
    back: "bg-orange-alt",
    border: "border-orange-alt",
    text: "text-orange",
    badge: "border-orange text-orange",
    bg: "#FEF7EC",
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
    bg: "#F4F5FB",
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
    bg: "#FEFAFB",
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
    bg: "#F2FAF9",
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
          -right-[4px]
          -bottom-[4px]
          rounded-tl-card-sm
          rounded-br-card-sm
          ${t.back}
        `}
      />

      {/* Main Card — موبایل: کارت فشرده (فیگما 157×130 با عدد 35px)؛ دسکتاپ: 370×400 با عدد 72px */}
            <div
              className={`
                relative
                z-10
                rounded-tl-card-sm
                rounded-br-card-sm
                border-[2px]
                ${t.border}
                px-3
                xs:px-4
                pt-3
                xs:pt-5
                pb-3
                xs:pb-5
                lg:px-5
                lg:pt-6
                lg:pb-6
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
                    scale-125
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
                    -mt-1
                    mb-2
                    xs:mb-3
                    lg:-mt-2
                    lg:mb-6
                    bg-white
                    border-[1px]
                    rounded-xl
                    px-2
                    py-0.5
                    lg:px-4
                    lg:py-1.5
                    whitespace-nowrap
                    text-[9px]
                    xs:text-[10px]
                    lg:text-[16px]
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
                  mb-1.5
                  xs:mb-2
                  lg:mb-4
                  text-[34px]
                  xs:text-[38px]
                  lg:text-[72px]
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
                    <strong className="block mb-0.5 lg:mb-1 text-[10px] xs:text-[11px] lg:text-base font-black">
                      {captionStrong}
                    </strong>
                  )}
                  {captionRest && (
                    <p className="text-[9px] xs:text-[10px] lg:text-sm leading-4 xs:leading-5 lg:leading-7 font-semibold">
                      {captionRest}
                    </p>
                  )}
                </div>
              )}
            </div>
    </div>
  );
}
