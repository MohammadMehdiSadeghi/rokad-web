// src/layout/Container.jsx
//
// همه‌ی سکشن‌های صفحه باید عرض محتواشون رو از همین کامپوننت بگیرن.
//
// بر اساس دیزاین سیستم:
//   layout.canvas = 1440px
//   layout.container = 1200px
//   layout.gutter-outer = 120px (هر طرف)
//
// روی mobile: w-[95%] (عرض ۹۵٪ صفحه گوشی)
// روی دسکتاپ (xl+): max-w-[1200px]
// روی lg: max-w-[1024px]
const WIDTH_STEPS = "w-full max-w-[75rem] mx-auto px-4 sm:px-6 lg:px-8"; // 1200px با گاترهای استاندارد

export default function Container({
  as: Tag = "div",
  className = "",
  children,
  ...rest
}) {
  return (
    <Tag className={`${WIDTH_STEPS} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
