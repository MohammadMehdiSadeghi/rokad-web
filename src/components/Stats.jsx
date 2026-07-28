import StatCard from "./StatCard.jsx";

// Order matters: with the grid set to dir="rtl", the first array item
// lands in the *rightmost* grid column. This order is written so the
// rendered result matches the source screenshot's left-to-right order
// exactly: شبکه رکاد · جامعه فعال · رویداد استارتاپی · نرخ اشتغال
// (left → right), i.e. نرخ اشتغال is rightmost → goes first here.
const stats = [
  {
    theme: "teal",
    label: "نرخ اشتغال",
    value: "٪۷۶",
    caption: { strong: "دانش‌آموختگان شاغل و درآمدزا", rest: "در سال اول پس از فارغ‌التحصیلی" },
  },
  {
    theme: "magenta",
    label: "رویداد استارتاپی",
    value: "+۳۰",
    caption: { strong: "رویداد استارتاپی دانش‌آموزی", rest: "در سال اول پس از فارغ‌التحصیلی" },
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
    caption: { strong: "شعبه‌ی مجزای هنرستانی", rest: "با فضای اختصاصی برای هر جنسیت" },
  },
];

export default function Stats() {
  return (
<section className="w-full px-6 py-20">
  <h2 className="mb-14 text-center text-[24px] font-black sm:text-[53px]">
    رکاد در یک نگاه،{" "}
    <span className="inline-block -rotate-2 text-teal">
      با اعتماد
    </span>
  </h2>

  <div className="mx-auto flex w-[80%] flex-wrap justify-between gap-y-10">
    {stats.map((s) => (
      <div
        key={s.label}
        className="w-full sm:w-[48%] lg:w-[23%]"
      >
        <StatCard {...s} />
      </div>
    ))}
  </div>
</section>
  );
}
