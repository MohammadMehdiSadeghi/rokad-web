import SchoolCard from "./SchoolCard.jsx";

export default function DualSchool() {
  return (
    <section className="py-20 px-6">
      <h2 className="text-center font-black text-[28px] sm:text-4xl lg:text-[44px] mb-4">
        <span className="text-teal-wordmark">رکاد</span>{" "}
        <span className="text-magenta">دخترونه</span> یا{" "}
        <span className="text-navy-alt">پسرونه</span>، مسیرته
      </h2>
      <p className="text-center font-semibold text-[17px] leading-[1.7] text-navy max-w-[520px] mx-auto mb-14">
        هر دو شعبه با محیطی امن، منتورهای مجرب و اکوسیستم اختصاصی. فقط کافیه
        مسیر خودت رو انتخاب کنی.
      </p>

      <div className="max-w-content mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        <SchoolCard
          theme="girls"
          category="مدرسه‌دخترانه"
          title="هنرستان‌دخترانه‌رکاد"
          meta="مشهد | فرامرز عباسی 54"
          chips={["شبکه و نرم‌افزار", "متن تستی رشته دخترانه"]}
          ctaLabel="پیش‌ثبت‌نام دخترانه"
        />
        <SchoolCard
          theme="boys"
          category="مدرسه‌پسرانه"
          title="هنرستان‌پسرانه‌رکاد"
          meta="مشهد | فرامرز عباسی ۳۳"
          chips={["تولید و توسعه پایگاه اینترنتی", "تولید محتوای چندرسانه‌ای"]}
          ctaLabel="پیش‌ثبت‌نام پسرانه"
        />
      </div>
    </section>
  );
}
