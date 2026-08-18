const yellowTexture = "/public/assets/StatCard/yellow.png";
const blueTexture = "/public/assets/StatCard/blue.png";
const pinkTexture = "/public/assets/StatCard/pink.png"; // عکس پترن قرمز/مژنتایی را اینجا بگذارید
const greenTexture = "/public/assets/StatCard/green.png"; // عکس پترن فیروزه‌ای/سبز را اینجا بگذارید

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
    opacity: 80,
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
    opacity: 50,
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
    opacity: 100, 
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
    opacity: 150, 
  },
};

const DEFAULT_THEME = "teal";

export default function StatCard({ theme, label, value, caption = {} }) {
  const t = THEMES[theme] ?? THEMES[DEFAULT_THEME];

  if (!THEMES[theme] && theme !== undefined) {
    console.warn(
      `StatCard: unknown theme "${theme}", falling back to "${DEFAULT_THEME}".`,
    );
  }

  const { strong: captionStrong = "", rest: captionRest = "" } = caption;

  // کلاس ردیوس نامتقارن: چپ‌بالا و راست‌پایین 48px، بقیه صفر
  const shapeClass = "rounded-tl-[2rem] rounded-br-[2rem] rounded-tr-none rounded-bl-none [corner-shape:squircle]";

  return (
    <div className={`relative ${t.rotate} h-full`}>
      {/* Back Shadow Layer */}
      <div
        className={`
          absolute
          top-2
          left-2
          -right-[0.25rem]
          -bottom-[0.25rem]
          ${shapeClass}
          ${t.back}
        `}
      />

      {/* Main Card */}
      <div
        className={`
          relative
          z-10
          h-full
          flex
          flex-col
          items-center
          ${shapeClass}
          border-[0.1875rem]
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
        {/* Texture Layer */}
        <div className={`absolute inset-0 ${shapeClass} overflow-hidden pointer-events-none`}>
          <img
            src={t.src}
            alt=""
            draggable={false}
            className="absolute inset-0 w-full h-full object-cover scale-125 select-none"
            style={{ opacity: t.opacity / 100 }}
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
              border-[0.0625rem]
              rounded-xl
              [corner-shape:squircle]
              px-2
              py-0.5
              lg:px-4
              lg:py-1.5
              whitespace-nowrap
              text-[0.5625rem]
              xs:text-[0.625rem]
              lg:text-[1rem]
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
            text-[2.125rem]
            xs:text-[2.375rem]
            lg:text-[4.5rem]
            leading-none
            font-black
            ${t.text}
          `}
        >
          {value}
        </div>

        {/* Caption */}
        {(captionStrong || captionRest) && (
          <div className={`relative z-20 ${t.text} mt-auto`}>
            {captionStrong && (
              <strong className="block mb-0.5 lg:mb-1 text-[0.625rem] xs:text-[0.6875rem] lg:text-base font-black">
                {captionStrong}
              </strong>
            )}
            {captionRest && (
              <p className="text-[0.5625rem] xs:text-[0.625rem] lg:text-sm leading-4 xs:leading-5 lg:leading-7 font-semibold">
                {captionRest}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}