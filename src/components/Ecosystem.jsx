import { UserIcon } from "./icons.jsx";

const cards = [
  { title: "مسیر رشد شخصی‌سازی‌شده", body: "استعدادسنجی دقیق و طراحی نقشه‌ی راهی که فقط مال توئه؛ نه به مسیر یکسان برای همه." },
  { title: "مسیر رشد شخصی‌سازی‌شده", body: "استعدادسنجی دقیق و طراحی نقشه‌ی راهی که فقط مال توئه؛ نه به مسیر یکسان برای همه.", featured: true },
  { title: "مسیر رشد شخصی‌سازی‌شده", body: "استعدادسنجی دقیق و طراحی نقشه‌ی راهی که فقط مال توئه؛ نه به مسیر یکسان برای همه." },
  { title: "مسیر رشد شخصی‌سازی‌شده", body: "استعدادسنجی دقیق و طراحی نقشه‌ی راهی که فقط مال توئه؛ نه به مسیر یکسان برای همه." },
  { title: "مسیر رشد شخصی‌سازی‌شده", body: "استعدادسنجی دقیق و طراحی نقشه‌ی راهی که فقط مال توئه؛ نه به مسیر یکسان برای همه." },
  { title: "مسیر رشد شخصی‌سازی‌شده", body: "استعدادسنجی دقیق و طراحی نقشه‌ی راهی که فقط مال توئه؛ نه به مسیر یکسان برای همه." },
  { title: "مسیر رشد شخصی‌سازی‌شده", body: "استعدادسنجی دقیق و طراحی نقشه‌ی راهی که فقط مال توئه؛ نه به مسیر یکسان برای همه." },
  { title: "مسیر رشد شخصی‌سازی‌شده", body: "استعدادسنجی دقیق و طراحی نقشه‌ی راهی که فقط مال توئه؛ نه به مسیر یکسان برای همه." },
];

function EcoCard({ title, body, featured }) {
  return (
    <article
      className={`
        rounded-[18px] p-6 border flex flex-col gap-4
        ${featured
          ? "bg-teal border-teal"
          : "bg-white/[0.07] border-white/[0.15]"
        }
      `}
    >
      {/* Icon */}
      <div
        className={`
          w-10 h-10 rounded-[10px] flex items-center justify-center flex-shrink-0
          ${featured ? "bg-white/30" : "bg-white/15"}
        `}
      >
        <span className="w-5 h-5 text-white">
          <UserIcon />
        </span>
      </div>

      {/* Text */}
      <div>
        <h4 className="font-black text-[17px] sm:text-[18px] text-white mb-2 leading-snug">
          {title}
        </h4>
        <p className={`text-[13px] leading-[1.85] ${featured ? "text-white/90" : "text-white/60"}`}>
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
        background: "radial-gradient(ellipse at 30% 20%, #1c2c60 0%, #0e1633 60%, #0b1228 100%)",
      }}
    >
      {/* Subtle decorative blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-[420px] h-[420px] rounded-full bg-teal/10 blur-[90px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-navy/40 blur-[70px]" />
      </div>

      {/* Heading */}
      <h2 className="relative text-center font-black text-[28px] sm:text-[38px] lg:text-[46px] leading-[1.3] text-white mb-4">
        یه{" "}
        <span className="text-teal">اکوسیستم کامل</span>{" "}
        برای رشد
      </h2>
      <p className="relative text-center font-medium text-[14px] sm:text-[16px] leading-[1.9] text-white/60 max-w-[520px] mx-auto mb-16">
        از استعدادسنجی تا اولین شغلت، تمام گام‌های مسیر با پشتیبانی متخصصان طی می‌شه.
      </p>

      {/* Grid — 4 cols, 2 rows = 8 cards */}
      <div className="relative max-w-content mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {cards.map((c, i) => (
          <EcoCard key={i} {...c} />
        ))}
      </div>
    </section>
  );
}
