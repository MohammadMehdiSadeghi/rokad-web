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
    <section className="relative py-[3rem] sm:py-[4rem] lg:py-[5rem] w-full px-4 sm:px-6 overflow-hidden bg-white">
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
      <h2 className="relative z-10 mb-[2rem] sm:mb-[2.5rem] lg:mb-[3rem] text-center text-[1.25rem] sm:text-[1.75rem] lg:text-[2.75rem] xl:text-[3.4375rem] font-black">
        <span className="inline-block rotate-1 text-black">
          {" "}
          رکاد در یک نگاه،{" "}
        </span>
        <span className="inline-block -rotate-3 text-teal">با اعتماد</span>
      </h2>

      {/* 
        استفاده از Grid برای چیدمان ۲ در ۲ در موبایل و لپ‌تاپ، و ۴ ستون فقط در مانیتورهای بزرگ (xl) 
        [grid-auto-rows:1fr] باعث میشه تمام کارت‌ها ارتفاع برابر داشته باشند 
      */}
      <Container className="relative z-10 grid grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 xl:gap-8 [grid-auto-rows:1fr]">
        {stats.map((s) => (
          // h-full به wrapper داده شده تا ارتفاع فریمی که گرید تعیین کرده رو پر کنه
          <div key={s.label} className="h-full">
            <StatCard {...s} />
          </div>
        ))}
      </Container>
    </section>
  );
}