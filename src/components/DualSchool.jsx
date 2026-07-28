// DualSchool.jsx
import SchoolCard from "./SchoolCard.jsx";
import boyIllustration from "../assets/images/boy-illustration.png";
import girlIllustration from "../assets/images/girl-illustration.svg";

export default function DualSchool() {
  return (
    <section className="py-20 px-6">
      {/* اعمال قانون 80% عرض */}
      <div className="w-[80%] mx-auto">
        <h2 className="text-center font-black text-[28px] sm:text-4xl lg:text-[44px] mb-4">
          <span className="text-teal-wordmark">رکاد</span>{" "}
          <span className="text-magenta">دخترونه</span> یا{" "}
          <span className="text-navy-alt">پسرونه</span>، مسیرته
        </h2>
        <p className="text-center font-semibold text-[17px] leading-[1.7] text-navy max-w-[520px] mx-auto mb-14">
          هر دو شعبه با محیطی امن، منتورهای مجرب و اکوسیستم اختصاصی. فقط کافیه
          مسیر خودت رو انتخاب کنی.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/*
            Order matters: under dir="rtl" the first grid item lands in the
            right-hand column. Source screenshot shows the boys' (navy)
            card on the right and the girls' (pink) card on the left, so
            boys goes first here.
          */}
          <SchoolCard
            theme="boys"
            category="مدرسه‌پسرانه"
            title="هنرستان‌پسرانه‌رکاد"
            meta="مشهد | فرامرز عباسی ۳۳"
            chips={["تولید و توسعه پایگاه اینترنتی", "تولید محتوای چندرسانه‌ای"]}
            ctaLabel="پیش‌ثبت‌نام پسرانه"
            illustration={boyIllustration}
          />
          <SchoolCard
            theme="girls"
            category="مدرسه‌دخترانه"
            title="هنرستان‌دخترانه‌رکاد"
            meta="مشهد | فرامرز عباسی 54"
            chips={["شبکه و نرم‌افزار", "متن تستی رشته دخترانه"]}
            ctaLabel="پیش‌ثبت‌نام دخترانه"
            illustration={girlIllustration}
          />
        </div>
      </div>
    </section>
  );
}