"use client";

import Container from "../../../../layout/Container";
import StatCard from "./StatCard";
import useRokadData from "../../../../lib/useRokadData";
import { fetchStats } from "../../../../lib/api";

const patternBg = "/assets/home/StatCard/TrustSection-Pattern.png";

// آمار fallback (اعداد ثابت قبلی وقتی API در دسترس نیست)
const fallbackStats = [
  {
    theme: "teal",
    label: "نرخ اشتغال",
    value: "٪۷۶",
    caption: { strong: "دانش‌آموختگان شاغل و درآمدزا" },
  },
  {
    theme: "magenta",
    label: "رویداد استارتاپی",
    value: "۳۰+",
    caption: { strong: "رویداد استارتاپی دانش‌آموزی" },
  },
  {
    theme: "navy",
    label: "جامعه فعال",
    value: "۲۵۰+",
    caption: { strong: "دانش‌آموز فعال در دو شعبه" },
  },
  {
    theme: "orange",
    label: "شبکه رکاد",
    value: "۲",
    caption: { strong: "شعبه‌ی مجزای هنرستانی" },
  },
];

export default function Stats() {
  const stats = useRokadData(fetchStats, fallbackStats);

  return (
    <section className="relative pt-[3.5rem] sm:pt-[4.5rem] lg:pt-[6rem] pb-[1.5rem] sm:pb-[2.5rem] lg:pb-[3.5rem] w-full overflow-hidden bg-white">
      {/* لایه پترن پس‌زمینه */}
      <div
        className="absolute inset-0 w-full h-full z-0 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]"
      >
        <img
          src={patternBg}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-20 bg-center"
        />
      </div>

      {/* heading/section طبق DESIGN.md: 24/36/53.2px، وزن 950،
          لاین‌هایت 1.3/1.25/1.2، بدون tracking (فارسی) */}
      <h2
        className="relative z-10 mb-8 sm:mb-[4rem] text-center text-[1.5rem] sm:text-[2.25rem] lg:text-[3.3125rem] leading-[1.3] sm:leading-[1.25] lg:leading-[1.2]"
        style={{ fontWeight: 950 }}
      >
        <span className="inline-block rotate-1 text-black">{" "}رکاد در یک نگاه،{" "}</span>
        <span className="inline-block -rotate-3 text-teal">با اعتماد</span>
      </h2>

      {/* grid ۱ ستون موبایل (مستطیل فول‌عرض)، ۲ ستون تبلت، ۴ ستون دسکتاپ */}
      <Container className="relative z-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 xl:gap-8 [grid-auto-rows:1fr]">
        {stats.map((s, i) => {
          const fromLeft = stats.length - 1 - i;
          const rotationLg = fromLeft % 2 === 0 ? -2 : 2;
          return (
            <div key={s.label || i} className="w-full h-full">
              <StatCard {...s} rotationLg={rotationLg} />
            </div>
          );
        })}
      </Container>
    </section>
  );
}
