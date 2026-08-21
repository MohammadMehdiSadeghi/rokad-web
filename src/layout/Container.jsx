// src/layout/Container.jsx
//
// همه‌ی سکشن‌های صفحه باید عرض محتواشون رو از همین کامپوننت بگیرن.
//
// بر اساس دیزاین سیستم:
//   layout.canvas = 1440px
//   layout.container = 1200px
//   layout.gutter-outer = 120px (هر طرف)
//
// روی دسکتاپ (xl+): max-w-[1200px]
// روی lg: max-w-[1024px]
// روی sm/md: max-w-full (پدینگ از section والد)
const WIDTH_STEPS = "w-full max-w-[75rem]"; // 1200px

export default function Container({
  as: Tag = "div",
  className = "",
  children,
  ...rest
}) {
  return (
    <Tag className={`${WIDTH_STEPS} mx-auto ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
