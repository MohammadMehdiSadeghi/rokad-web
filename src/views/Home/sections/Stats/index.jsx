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
    <section className="relative py-[4rem] sm:py-[5rem] lg:py-[6rem] w-full px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">
      {/* لایه پترن پس‌زمینه */}
      <div
        className="absolute inset-0 w-full h-full z-0 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]"
      >
        <img
          src={patternBg}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-60 bg-center"
        />
      </div>

      {/* heading/section طبق DESIGN.md: 24/36/53.2px، وزن 950،
          لاین‌هایت 1.3/1.25/1.2، بدون tracking (فارسی) */}
      <h2
        className="relative z-10 mb-[1.5rem] sm:mb-[2rem] text-center text-[1.5rem] sm:text-[2.25rem] lg:text-[3.3125rem] leading-[1.3] sm:leading-[1.25] lg:leading-[1.2]"
        style={{ fontWeight: 950 }}
      >
        <span className="inline-block rotate-1 text-black">{" "}رکاد در یک نگاه،{" "}</span>
        <span className="inline-block -rotate-3 text-teal">با اعتماد</span>
      </h2>

      {/* grid ۲×۲ موبایل، ۴ ستون در xl؛ card-gap 24px */}
      <Container className="relative z-10 grid grid-cols-2 xl:grid-cols-4 gap-[1.25rem] sm:gap-[2rem] [grid-auto-rows:1fr]">
        {stats.map((s) => (
          <div key={s.label} className="h-full">
            <StatCard {...s} />
          </div>
        ))}
      </Container>
    </section>
  );
}
