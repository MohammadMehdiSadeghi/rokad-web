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
        <h2 className="relative z-10 mb-[65px] sm:mb-14 text-center text-[22px] xs:text-[24px] sm:text-[32px] lg:text-[55px] font-black">
          <span className="inline-block rotate-1 text-black">
            {" "}
            رکاد در یک نگاه،{" "}
          </span>
          <span className="inline-block -rotate-3 text-teal">با اعتماد</span>
        </h2>

        {/* استفاده از Grid برای چیدمان ۲ در ۲ در موبایل و ۴ در دسکتاپ */}
        {/* [grid-auto-rows:1fr] باعث میشه تمام کارت‌ها ارتفاع برابر داشته باشند */}
        <Container className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 [grid-auto-rows:1fr]">
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