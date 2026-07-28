import { UserIcon } from "./icons.jsx";

const cards = [
  {
    title: "مسیر رشد شخصی‌سازی‌شده",
    body: "استعدادسنجی دقیق و طراحی نقشه‌ی راهی که فقط مال توئه؛ نه به مسیر یکسان برای همه.",
    tilt: -1.5,
  },
  {
    title: "مسیر رشد شخصی‌سازی‌شده",
    body: "استعدادسنجی دقیق و طراحی نقشه‌ی راهی که فقط مال توئه؛ نه به مسیر یکسان برای همه.",
    featured: true,
    tilt: 1.2,
  },
  {
    title: "مسیر رشد شخصی‌سازی‌شده",
    body: "استعدادسنجی دقیق و طراحی نقشه‌ی راهی که فقط مال توئه؛ نه به مسیر یکسان برای همه.",
    tilt: -1,
  },
  {
    title: "مسیر رشد شخصی‌سازی‌شده",
    body: "استعدادسنجی دقیق و طراحی نقشه‌ی راهی که فقط مال توئه؛ نه به مسیر یکسان برای همه.",
    tilt: 1.5,
  },
  {
    title: "مسیر رشد شخصی‌سازی‌شده",
    body: "استعدادسنجی دقیق و طراحی نقشه‌ی راهی که فقط مال توئه؛ نه به مسیر یکسان برای همه.",
    tilt: 1,
  },
  {
    title: "مسیر رشد شخصی‌سازی‌شده",
    body: "استعدادسنجی دقیق و طراحی نقشه‌ی راهی که فقط مال توئه؛ نه به مسیر یکسان برای همه.",
    tilt: -1.2,
  },
  {
    title: "مسیر رشد شخصی‌سازی‌شده",
    body: "استعدادسنجی دقیق و طراحی نقشه‌ی راهی که فقط مال توئه؛ نه به مسیر یکسان برای همه.",
    tilt: 1.5,
  },
  {
    title: "مسیر رشد شخصی‌سازی‌شده",
    body: "استعدادسنجی دقیق و طراحی نقشه‌ی راهی که فقط مال توئه؛ نه به مسیر یکسان برای همه.",
    tilt: -1,
  },
];

function EcoCard({ title, body, featured, tilt }) {
  return (
    <article
      style={{ "--tilt": `${tilt}deg` }}
      className={`
        group p-6 flex flex-col gap-4
        backdrop-blur-[19.06px] rotate-[var(--tilt)] hover:rotate-0
        transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
        hover:-translate-y-1.5 hover:shadow-[0_15px_40px_-5px_rgba(89,187,175,0.25)]
        
        bg-[#FFFFFF12] hover:bg-[#59BBAF]
        border-[1.32px] border-[#59BBAF] hover:border-[#FFFFFF]
        rounded-[0_13.54px_0_13.54px]
      `}
    >
      {/* Icon */}
      <div
        className={`
          w-10 h-10 flex items-center justify-center flex-shrink-0
          transition-colors duration-500
          rounded-[5.02px_0_5.02px_0]
          bg-[#58BDAF] group-hover:bg-[#202A5A]
        `}
      >
        <span className={`w-5 h-5 text-[#0e1633] group-hover:text-white transition-colors duration-300`}>
          <UserIcon />
        </span>
      </div>

      {/* Text */}
      <div>
        <h4 className="font-black text-[17px] sm:text-[18px] text-white mb-2 leading-snug transition-colors duration-300">
          {title}
        </h4>
        <p className="text-[13px] leading-[1.85] text-white/60 group-hover:text-white/90 transition-colors duration-300">
          {body}
        </p>
      </div>
    </article>
  );
}

export default function Ecosystem() {
  return (
    <section
      className="py-24 px-6 relative overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 30% 20%, #1c2c60 0%, #0e1633 60%, #0b1228 100%)",
      }}
    >
      {/* Subtle decorative blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-20 -right-20 w-[420px] h-[420px] rounded-full bg-teal/10 blur-[90px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-navy/40 blur-[70px]" />
      </div>

      {/* Heading */}
      <h2 className="relative z-10 text-center font-black text-[28px] sm:text-[38px] lg:text-[46px] leading-[1.3] text-white mb-4">
        یه <span className="text-teal">اکوسیستم کامل</span> برای رشد
      </h2>
      <p className="relative z-10 text-center font-medium text-[14px] sm:text-[16px] leading-[1.9] text-white/60 max-w-[520px] mx-auto mb-16">
        از استعدادسنجی تا اولین شغلت، تمام گام‌های مسیر با پشتیبانی متخصصان طی
        می‌شه.
      </p>

      {/* Grid */}
      <div className="relative z-10 max-w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {cards.map((c, i) => (
          <EcoCard key={i} {...c} />
        ))}
      </div>
    </section>
  );
}