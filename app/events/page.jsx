import Link from "next/link";
import Container from "../../src/layout/Container";
import fallbackEvents from "../../src/lib/fallback/events";

export const metadata = {
  title: "ایونت‌های رکاد",
  description: "رویدادها و رویدادهای استارتاپی هنرستان استارتاپی رکاد.",
};

const slugify = (s) =>
  encodeURIComponent(String(s || "").trim().replace(/\s+/g, "-"));

const themeMap = {
  boys: { bg: "#F4F5FB", text: "#202A5A", accent: "#21295A" },
  girls: { bg: "#FEFAFB", text: "#E0195B", accent: "#E0195B" },
};

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      {/* پترن پس‌زمینه */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 opacity-[0.35]"
        style={{
          backgroundImage: "url(/assets/Pattern/layout-pattern.png)",
          backgroundSize: "22rem",
        }}
      />

      <Container className="relative z-10 py-16 sm:py-20">
        {/* هدر */}
        <div className="mb-12 text-center">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border-2 border-ink bg-teal px-5 py-1.5 text-[0.8125rem] font-black text-white shadow-[3px_3px_0_0_#292827] -rotate-1">
            ✦ رویدادهای رکاد
          </span>
          <h1 className="text-[2rem] sm:text-[2.75rem] font-black leading-[1.35] text-ink">
            ایونت‌های{" "}
            <span className="inline-block text-teal -rotate-2">استارتاپی</span>{" "}
            <span className="inline-block text-magenta rotate-1">رکاد</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-[1rem] font-bold leading-[2] text-ink/60">
            هر رویداد یه تجربه‌ی واقعی از ایده تا محصول — گزارش کامل هر کدوم رو
            اینجا بخون.
          </p>
        </div>

        {/* کارت‌ها */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {fallbackEvents.map((ev, i) => {
            const t = themeMap[ev.theme] || themeMap.boys;
            return (
              <Link
                key={i}
                href={
                  i === 0
                    ? "/events/rokad-events-recap"
                    : `/events/${slugify(ev.title)}`
                }
                className="group relative block rounded-[0_1.5rem_0_1.5rem] border-2 border-ink bg-white shadow-[4px_4px_0_0_#292827] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[6px_6px_0_0_#292827]"
              >
                {/* نوار رنگی بالا */}
                <div
                  className="h-2.5 w-full rounded-t-[0_1.5rem_0_0]"
                  style={{ backgroundColor: t.accent }}
                />
                <div className="p-6" style={{ backgroundColor: t.bg }}>
                  <div className="mb-3 flex items-center justify-between">
                    <span
                      className="inline-flex rounded-[0_0.625rem_0_0.625rem] border-2 px-3.5 py-1 text-[0.75rem] font-black"
                      style={{ borderColor: t.accent, color: t.text, backgroundColor: "#fff" }}
                    >
                      {ev.category}
                    </span>
                    <span
                      className="text-[2.5rem] font-black leading-none opacity-30 select-none"
                      style={{ color: t.accent }}
                    >
                      {ev.index}
                    </span>
                  </div>
                  <h2
                    className="mb-2 text-[1.25rem] font-black leading-[1.6]"
                    style={{ color: t.text }}
                  >
                    {ev.title}
                  </h2>
                  <p className="mb-4 text-[0.875rem] font-bold" style={{ color: t.accent }}>
                    {ev.meta}
                  </p>
                  <p className="text-[0.9375rem] leading-[1.9] text-ink/70">
                    {ev.body}
                  </p>
                  <span
                    className="mt-5 inline-flex items-center gap-1.5 text-[0.875rem] font-black"
                    style={{ color: t.accent }}
                  >
                    خواندن گزارش
                    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:-translate-x-1">
                      <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </main>
  );
}
