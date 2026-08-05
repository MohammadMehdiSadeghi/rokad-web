// src/layout/Container.jsx
//
// همه‌ی سکشن‌های صفحه باید عرض محتواشون رو از همین کامپوننت بگیرن، نه اینکه
// هر کامپوننت جدا خودش یه "w-full mx-auto" بذاره (باگ قبلی پروژه همین بود؛
// کلاس‌های w-full / max-w-full هیچ محدودیت واقعی‌ای اعمال نمی‌کردن).
//
// قانون: روی دسکتاپ (lg به بالا) عرض محتوا دقیقاً ۸۰٪ از پدر خودشه.
// روی موبایل و تبلت ۸۰٪ خیلی تنگه (حاشیه‌های خیلی بزرگ)، برای همین
// پله‌پله بازتر می‌شه تا در سایزهای کوچیک هم محتوا فضای مناسب داشته باشه.
const WIDTH_STEPS = "w-[92%] xs:w-[90%] sm:w-[88%] md:w-[85%] lg:w-4/5";

export default function Container({
  as: Tag = "div",
  className = "",
  children,
  ...rest
}) {
  return (
    <Tag className={`mx-auto ${WIDTH_STEPS} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
