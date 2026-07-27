import PillarCard from "./PillarCard.jsx";
import { UserIcon } from "./icons.jsx";

// NOTE (see design-spec §4.7 / §15.3 and README): in the source Figma file
// all 8 cards in this row share identical placeholder copy. Replace the
// `title`/`body` below with real per-card content before shipping — the
// component/markup is ready either way. `featured: true` marks the single
// card the source file renders with a highlighted (teal) fill.
const cards = [
  { title: "مسیر رشد شخصی‌سازی‌شده", body: "استعدادسنجی دقیق و طراحی نقشه‌ی راهی که فقط مال توئه؛ نه یه مسیر یکسان برای همه." },
  { title: "مسیر رشد شخصی‌سازی‌شده", body: "استعدادسنجی دقیق و طراحی نقشه‌ی راهی که فقط مال توئه؛ نه یه مسیر یکسان برای همه.", featured: true },
  { title: "مسیر رشد شخصی‌سازی‌شده", body: "استعدادسنجی دقیق و طراحی نقشه‌ی راهی که فقط مال توئه؛ نه یه مسیر یکسان برای همه." },
  { title: "مسیر رشد شخصی‌سازی‌شده", body: "استعدادسنجی دقیق و طراحی نقشه‌ی راهی که فقط مال توئه؛ نه یه مسیر یکسان برای همه." },
  { title: "مسیر رشد شخصی‌سازی‌شده", body: "استعدادسنجی دقیق و طراحی نقشه‌ی راهی که فقط مال توئه؛ نه یه مسیر یکسان برای همه." },
  { title: "مسیر رشد شخصی‌سازی‌شده", body: "استعدادسنجی دقیق و طراحی نقشه‌ی راهی که فقط مال توئه؛ نه یه مسیر یکسان برای همه." },
  { title: "مسیر رشد شخصی‌سازی‌شده", body: "استعدادسنجی دقیق و طراحی نقشه‌ی راهی که فقط مال توئه؛ نه یه مسیر یکسان برای همه." },
  { title: "مسیر رشد شخصی‌سازی‌شده", body: "استعدادسنجی دقیق و طراحی نقشه‌ی راهی که فقط مال توئه؛ نه یه مسیر یکسان برای همه." },
];

export default function Ecosystem() {
  return (
    <section className="py-24 px-6 text-white relative overflow-hidden bg-[radial-gradient(circle_at_30%_20%,#1c2c60,#101a3f_65%)]">
      <h2 className="text-center font-black text-[28px] sm:text-4xl lg:text-[44px] mb-4">
        یه اکوسیستم کامل برای رشد
      </h2>
      <p className="text-center font-semibold text-base leading-[1.8] text-white/75 max-w-[640px] mx-auto mb-14">
        از استعدادسنجی تا اولین شغلت، تمام گام‌های مسیر با پشتیبانی متخصصان
        طی می‌شه.
      </p>
      <div className="max-w-content mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-[2]">
        {cards.map((c, i) => (
          <PillarCard
            key={i}
            icon={<UserIcon />}
            title={c.title}
            body={c.body}
            variant={c.featured ? "featured" : "dark"}
          />
        ))}
      </div>
    </section>
  );
}
