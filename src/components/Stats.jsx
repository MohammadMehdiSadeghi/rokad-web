import StatCard from "./StatCard.jsx";

const stats = [
  {
    theme: "orange",
    label: "شبکه رکاد",
    value: "2",
    caption: { strong: "شعبه‌ی مجزای هنرستانی", rest: "با فضای اختصاصی برای هر جنسیت" },
  },
  {
    theme: "navy",
    label: "جامعه فعال",
    value: "+250",
    caption: { strong: "دانش‌آموز فعال در دو شعبه", rest: "دخترانه و پسرانه" },
  },
  {
    theme: "magenta",
    label: "رویداد استارتاپی",
    value: "+30",
    caption: { strong: "رویداد استارتاپی دانش‌آموزی", rest: "در سال اول پس از فارغ‌التحصیلی" },
  },
  {
    theme: "teal",
    label: "نرخ اشتغال",
    value: "٪76",
    caption: { strong: "دانش‌آموختگان شاغل و درآمدزا", rest: "در سال اول پس از فارغ‌التحصیلی" },
  },
];

export default function Stats() {
  return (
    <section className="py-20 px-6">
      <h2 className="text-center font-black text-[26px] sm:text-4xl mb-14">
        رکاد در یک نگاه، <span className="inline-block -rotate-2 text-teal">با اعتماد</span>
      </h2>
      <div className="max-w-content mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
        {stats.map((s) => (
          <StatCard key={s.label} {...s} />
        ))}
      </div>
    </section>
  );
}
