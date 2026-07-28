// DualSchool.jsx
import SchoolCard from "./SchoolCard.jsx";
import boyIllustration from "../assets/images/boy-illustration.png";
import girlIllustration from "../assets/images/girl-illustration.svg";
import boysCardPattern from "../assets/Patterns/SchoolSelection/SchoolSelction-Boys.png";
import girlsCardPattern from "../assets/Patterns/SchoolSelection/SchoolSelection-Girls.png";

export default function DualSchool() {
  return (
    <section className="py-20 px-6">
      {/* اعمال قانون 80% عرض */}
      <div className="w-[80%] mx-auto">
        
        {/* Title - 53px, 900, #292827 */}
        {/* flex-wrap برای اینکه چرخش‌ها به هم نریزند */}
        <h2 className="text-center font-black text-[53px] text-[#292827] mb-4 leading-[1.4] flex flex-wrap justify-center items-center gap-x-3">
          <span className="text-magenta inline-block rotate-3">دخترونه</span>
          <span className="inline-block -rotate-3">یا</span>
          <span className="text-navy-alt inline-block rotate-3">پسرونه</span>
          <span className="inline-block -rotate-3">، رکاد</span>
          <span className="inline-block -rotate-3"> مسیرته</span>
        </h2>

        {/* Subtitle - 18px, 600, #292827 */}
        <p className="text-center font-semibold text-[18px] leading-[1.7] text-[#292827] max-w-[520px] mx-auto mb-14">
          هر دو شعبه با محیطی امن، منتورهای مجرب و اکوسیستم اختصاصی. فقط کافیه
          مسیر خودت رو انتخاب کنی.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SchoolCard
            theme="boys"
            category="مدرسه‌پسرانه"
            title="هنرستان‌پسرانه‌رکاد"
            meta="مشهد | فرامرز عباسی ۳۳"
            chips={["تولید و توسعه پایگاه اینترنتی", "تولید محتوای چندرسانه‌ای"]}
            ctaLabel="پیش‌ثبت‌نام پسرانه"
            illustration={boyIllustration}
            pattern={boysCardPattern} 
          />
          <SchoolCard
            theme="girls"
            category="مدرسه‌دخترانه"
            title="هنرستان‌دخترانه‌رکاد"
            meta="مشهد | فرامرز عباسی 54"
            chips={["شبکه و نرم‌افزار", "متن تستی رشته دخترانه"]}
            ctaLabel="پیش‌ثبت‌نام دخترانه"
            illustration={girlIllustration}
            pattern={girlsCardPattern} 
          />
        </div>
      </div>
    </section>
  );
}