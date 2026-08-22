import Container from "../../../../layout/Container";
import StatCard from "./StatCard";

const patternBg = "/assets/StatCard/TrustSection-Pattern.png";

const stats = [
  {
    theme: "teal",
    label: "نرخ اشتغال",
    value: "٪۷۶",
    caption: {
      strong: "دانش‌آموختگان شاغل و درآمدزا",
      rest: "در سال اول پس از فارغ‌التحصیلی",
    },
  },
  {
    theme: "magenta",
    label: "رویداد استارتاپی",
    value: "۳۰+",
    caption: {
      strong: "رویداد استارتاپی دانش‌آموزی",
      rest: "در سال اول پس از فارغ‌التحصیلی",
    },
  },
  {
    theme: "navy",
    label: "جامعه فعال",
    value: "۲۵۰+",
    caption: { strong: "دانش‌آموز فعال در دو شعبه", rest: "دخترانه و پسرانه" },
  },
  {
    theme: "orange",
    label: "شبکه رکاد",
    value: "۲",
    caption: {
      strong: "شعبه‌ی مجزای هنرستانی",
      rest: "با فضای اختصاصی برای هر جنسیت",
    },
  },
];

export default function Stats() {
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

      {/* heading/section: 53px در دسکتاپ */}
      <h2 className="relative z-10 mb-[1.5rem] text-center text-[1.5rem] sm:text-[2.25rem] lg:text-[3.3125rem] font-black leading-tight tracking-tight">
        <span className="inline-block rotate-1 text-black">{" "}رکاد در یک نگاه،{" "}</span>
        <span className="inline-block -rotate-3 text-teal">با اعتماد</span>
      </h2>

      {/* grid ۲×۲ موبایل، ۴ ستون در xl؛ card-gap 24px */}
      <Container className="relative z-10 grid grid-cols-2 xl:grid-cols-4 gap-[1rem] sm:gap-[1.5rem] [grid-auto-rows:1fr]">
        {stats.map((s) => (
          <div key={s.label} className="h-full">
            <StatCard {...s} />
          </div>
        ))}
      </Container>
    </section>
  );
}
