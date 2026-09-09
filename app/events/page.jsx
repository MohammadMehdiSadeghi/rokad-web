import Link from "next/link";
import Container from "../../src/layout/Container";
import fallbackEvents from "../../src/lib/fallback/events";

export const metadata = {
  title: "ایونت‌های رکاد",
  description: "رویدادهای استارتاپی هنرستان استارتاپی رکاد.",
};

const sectionPattern = "/assets/Pattern/layout-pattern.png";

/* رنگ‌ها از دیزاین‌سیستم رکاد:
   پسر: light #E9EAEF · normal #202A5A · dark #182044
   دختر: light #FCE8EF · normal #E0195B · dark #A81344 */
const themeMap = {
  boys: { bg: "#E9EAEF", text: "#202A5A", accent: "#202A5A", dark: "#182044", light: "#E9EAEF" },
  girls: { bg: "#FCE8EF", text: "#E0195B", accent: "#E0195B", dark: "#A81344", light: "#FCE8EF" },
};

export default function EventsPage() {
  return (
    <section
      dir="rtl"
      className="relative overflow-hidden bg-white py-[4rem] sm:py-[5rem] lg:py-[6rem] w-full"
    >
      {/* ── پترن پس‌زمینه — ماسک گرادیانی استاندارد بقیه سکشن‌ها ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-60
                [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]
                [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]"
      >
        <img
          src={sectionPattern}
          alt=""
          draggable="false"
          className="w-full h-full object-cover select-none"
        />
      </div>

      <Container className="relative z-10">
        {/* ════ هدر ════ */}
        <div className="text-center mb-8 sm:mb-8 lg:mb-[4rem]">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border-2 border-[#292827] bg-[#59BBAF] px-5 py-1.5 text-[0.8125rem] font-extrabold text-white shadow-[2.75px_2.75px_0_#292827] -rotate-2">
            رویدادهای رکاد
          </span>
          <h1 className="text-[2rem] sm:text-[2.75rem] lg:text-[3.25rem] font-black leading-[1.3] text-ink flex flex-wrap justify-center items-center gap-x-2.5 gap-y-1">
            <span className="inline-block rotate-[-1deg]">ایونت‌های</span>
            <span className="inline-block rotate-[1deg] text-[#59BBAF]">استارتاپی</span>
            <span className="inline-block rotate-[-1deg] text-[#E0195B]">رکاد</span>
          </h1>
          <p className="mx-auto mt-4 sm:mt-8 max-w-xl text-[0.9375rem] sm:text-[1.0625rem] font-medium leading-[1.9] text-ink/60">
            هر رویداد یه تجربه‌ی واقعی از ایده تا محصول — گزارش کامل هر کدوم رو
            اینجا بخون.
          </p>
        </div>

        {/* ════ کارت‌ها ════ */}
        <div className="grid grid-cols-1 gap-6 sm:gap-7 lg:grid-cols-3">
          {fallbackEvents.map((ev, i) => {
            const t = themeMap[ev.theme] || themeMap.boys;
            return (
              <Link
                key={i}
                href={ev.href || "/events"}
                className="group relative block rounded-[0_1.5rem_0_1.5rem] border-2 border-[#292827] bg-white shadow-[2.75px_2.75px_0_#292827] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[4px_5px_0_#292827]"
              >
                {/* نوار رنگی بالا */}
                <div
                  className="h-2.5 w-full"
                  style={{ backgroundColor: t.accent }}
                />

                <div className="p-5 sm:p-6" style={{ backgroundColor: t.bg }}>
                  <div className="mb-3 flex items-center justify-between">
                    <span
                      className="inline-flex rounded-[0_0.625rem_0_0.625rem] border-2 border-[#292827] px-3.5 py-1 text-[0.75rem] font-extrabold bg-white"
                      style={{ color: t.text }}
                    >
                      {ev.category}
                    </span>
                    <span
                      dir="ltr"
                      className="text-[2.25rem] font-black leading-none opacity-25 select-none"
                      style={{ color: t.accent }}
                    >
                      {ev.index}
                    </span>
                  </div>

                  <h2
                    className="mb-2 text-[1.125rem] sm:text-[1.25rem] font-black leading-[1.6]"
                    style={{ color: t.text }}
                  >
                    {ev.title}
                  </h2>

                  <p
                    className="mb-3 text-[0.8125rem] font-extrabold"
                    style={{ color: t.dark }}
                  >
                    {ev.meta}
                  </p>

                  <p className="text-[0.9375rem] leading-[1.9] text-ink/70">
                    {ev.body}
                  </p>

                  <span
                    className="mt-5 inline-flex items-center gap-1.5 text-[0.875rem] font-extrabold"
                    style={{ color: t.dark }}
                  >
                    خواندن گزارش
                    <svg
                      viewBox="0 0 24 24"
                      width="15"
                      height="15"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform duration-300 group-hover:-translate-x-1"
                    >
                      <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
