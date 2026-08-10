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
    value: "+۳۰",
    caption: {
      strong: "رویداد استارتاپی دانش‌آموزی",
      rest: "در سال اول پس از فارغ‌التحصیلی",
    },
  },
  {
    theme: "navy",
    label: "جامعه فعال",
    value: "+۲۵۰",
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
    <section className="relative w-full px-4 sm:px-6 py-14 sm:py-20 overflow-hidden bg-white">
      {/* ── لایه پترن پس‌زمینه ── */}
      <div
        className="absolute inset-0 w-full h-full z-0 pointer-events-none 
                [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] 
                [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]"
      >
        <img
          src={patternBg}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-70 bg-center"
        />
      </div>

      {/* محتوای سکشن — موبایل: 20px (فیگما)، دسکتاپ 55px */}
      <h2 className="relative z-10 mb-10 sm:mb-14 text-center text-[22px] xs:text-[24px] sm:text-[32px] lg:text-[55px] font-black">
        <span className="inline-block rotate-1 text-black">
          {" "}
          رکاد در یک نگاه،{" "}
        </span>
        <span className="inline-block -rotate-3 text-teal">با اعتماد</span>
      </h2>

      <Container className="relative z-10 flex flex-wrap justify-between gap-y-8 sm:gap-y-10">
        {stats.map((s) => (
          <div key={s.label} className="w-[48%] lg:w-[23%]">
            <StatCard {...s} />
          </div>
        ))}
      </Container>
    </section>
  );
}