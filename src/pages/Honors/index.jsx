import Container from "../../layout/Container";
import HonorsCarousel from "../Home/sections/Honors";

// روت اختصاصی /honors — همون سکشن افتخارات صفحه‌ی اصلی رو با یه مقدمه‌ی
// مخصوص صفحه نشون می‌ده. اگه بعداً محتوای بیشتری (آرشیو کامل افتخارات،
// فیلتر بر اساس سال و ...) اضافه شد، جاش همینجاست.
export default function HonorsPage() {
  return (
    <>
      <section className="pt-14 sm:pt-20 pb-4 sm:pb-6 bg-white" dir="rtl">
        <Container className="text-center">
          <h1 className="font-black text-[1.75rem] sm:text-[2.625rem] lg:text-[3.25rem] leading-[1.35] text-ink mb-4">
            آرشیو <span className="text-navy-alt">افتخارات</span> رکاد
          </h1>
          <p className="font-medium text-[0.875rem] sm:text-[1.0625rem] leading-[1.9] text-ink/60 max-w-2xl mx-auto">
            هر مدال روی این صفحه یعنی یه دانش‌آموز که از صفر شروع کرد و ایستاد
            تا آخرش. این‌جا مرور کاملی از مقام‌ها و جشنواره‌هایی هست که
            دانش‌آموزهای رکاد توش درخشیدن.
          </p>
        </Container>
      </section>

      <HonorsCarousel />
    </>
  );
}
