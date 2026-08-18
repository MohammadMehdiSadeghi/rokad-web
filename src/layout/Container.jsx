// src/layout/Container.jsx
//
// همه‌ی سکشن‌های صفحه باید عرض محتواشون رو از همین کامپوننت بگیرن.
//
// روی دسکتاپ (lg+): max-w-7xl = 80rem (1280px) که محتوا رو در وسط صفحه
// با حاشیه‌ی مناسب نگه می‌داره. روی موبایل و تبلت از padding
// بخش والد استفاده می‌شه و عرض ۱۰۰٪ رو حفظ می‌کنیم.
const WIDTH_STEPS = "w-full max-w-7xl";

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
