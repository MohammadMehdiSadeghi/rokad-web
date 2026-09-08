const yellowTexture = "/assets/home/StatCard/yellow.png";
const blueTexture = "/assets/home/StatCard/blue.png";
const pinkTexture = "/assets/home/StatCard/pink.png";
const greenTexture = "/assets/home/StatCard/green.png";

const THEMES = {
  orange: {
    back: "bg-orange-alt",
    border: "border-orange-alt",
    text: "text-orange",
    bg: "#FEF7EC",  
    src: yellowTexture,
    opacity: 100,
  },
  navy: {
    back: "bg-navy-alt",
    border: "border-navy",
    text: "text-navy-alt",
    bg: "#F4F5FB",
    src: blueTexture,
    opacity: 40,
  },
  magenta: {
    back: "bg-magenta",
    border: "border-magenta",
    text: "text-magenta-text",
    bg: "#FEFAFB",
    src: pinkTexture,
    opacity: 100, 
  },
  teal: {
    back: "bg-teal-alt",
    border: "border-teal",
    text: "text-teal-text",
    bg: "#F2FAF9",
    src: greenTexture,
    opacity: 100, 
  },
};

const DEFAULT_THEME = "teal";

export default function StatCard({ theme, label, value, caption = {}, rotationLg = 0 }) {
  const t = THEMES[theme] ?? THEMES[DEFAULT_THEME];
  const { strong: captionStrong = "" } = caption;

  // ردیوس نامتقارن استیکری: چپ‌بالا و راست‌پایین
  const shapeClass = "rounded-tl-[1.5rem] rounded-br-[1.5rem] sm:rounded-tl-[2rem] sm:rounded-br-[2rem] rounded-tr-none rounded-bl-none [corner-shape:squircle]";

  return (
    <div
      className="relative w-full h-full [transform:rotate(var(--rotation-sm))] lg:[transform:rotate(var(--rotation-lg))]"
      style={{
        "--rotation-sm": `${rotationLg / 4}deg`,
        "--rotation-lg": `${rotationLg}deg`,
      }}
    >
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
      <article
        className={`
          relative
          z-10
          h-full
          w-full
          flex
          flex-col
          items-center
          justify-center
          ${shapeClass}
          border-[0.1875rem]
          ${t.border}
          px-4
          py-4
          sm:px-4
          sm:py-5
          lg:px-5
          lg:py-6
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

        {/* Number - display/stat (بدون بج برای فشردگی و زیبایی ابعاد) */}
        <div
          className={`relative
            z-20
            text-[2.5rem]
            sm:text-[2.75rem]
            lg:text-[3.5rem]
            leading-none
            font-black
            ${t.text}
          `}
        >
          {value}
        </div>

        {/* Caption */}
        {(captionStrong || label) && (
          <div className={`relative z-20 ${t.text} mt-2 sm:mt-2.5`}>
            <strong className="block text-[0.875rem] sm:text-[0.9375rem] lg:text-[1rem] font-black leading-snug">
              {captionStrong || label}
            </strong>
          </div>
        )}
      </article>
    </div>
  );
}