"use client";
// لینک خنثی: تا وقتی URL واقعی مشخص نشده، href="#" باعث پرش به بالای صفحه و
// اضافه‌شدن # به آدرس نشود. وقتی href واقعی دادید، عادی کار می‌کند.
export default function InertLink({ href, children, ...rest }) {
  const dead = !href || href === "#";
  if (dead) {
    // بدون href اصلاً لینک نیست: نه پرش، نه # در URL
    return (
      <a aria-disabled="true" role="link" {...rest}>
        {children}
      </a>
    );
  }
  return (
    <a href={href} {...rest}>
      {children}
    </a>
  );
}
