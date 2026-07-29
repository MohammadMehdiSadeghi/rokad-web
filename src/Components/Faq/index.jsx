import { useState } from "react";
import { ChevronDownIcon, PlusIcon, ArrowIcon, SwirlArrowIcon } from "../Icons";
// همون پترن لوزی‌شکلی که در بخش اکوسیستم استفاده شده — برای یکدست بودن
// بافت‌ها در کل سایت، دقیقاً همین فایل رو اینجا هم استفاده می‌کنیم.
import faqPattern from "../../assets/Shared/Patterns/Ecosystem-Pattern.png";

const faqs = [
  {
    question: "آیا رکاد یک هنرستان رسمی مورد تایید آموزش و پرورش است؟",
    answer:
      "رکاد یه هنرستان رسمیه؛ دانش‌آموز مدرک رسمی می‌گیره و مسیر کنکور و دانشگاه (از جمله کاردانی و کارشناسی مرتبط) کاملاً بازه. فرق ما اینه که در کنار درس، یه مهارت درآمدزا هم یاد می‌گیره.",
    tilt: -1,
  },
  {
    question: "آیا دانش آموزان می‌توانند در کنکور شرکت کنند؟",
    answer:
      "بله، دانش‌آموزان رکاد مانند سایر هنرستان‌ها می‌توانند در کنکور شرکت کنند.",
    tilt: 1,
  },
  {
    question: "هزینه‌ی تحصیل در رکاد چقدر است و چه امکانات مالی وجود دارد؟",
    answer:
      "هزینه‌ی تحصیل و امکانات مالی بر اساس شعبه و رشته متفاوت است؛ برای اطلاعات دقیق با ما در ارتباط باشید.",
    tilt: -0.8,
  },
  {
    question: "ورود به بازار کار پس از فارغ‌التحصیلی چگونه تضمین می‌شود؟",
    answer:
      "از طریق اکوسیستم استارتاپی، کارآموزی و شبکه‌ی منتورهای رکاد، مسیر ورود به بازار کار هموار می‌شود.",
    tilt: 1.2,
  },
  {
    question: "محیط مدرسه از نظر امنیتی و روانی چگونه است؟",
    answer:
      "محیط رکاد امن، حمایتگر و با نظارت مستمر مشاوران و منتورهای مجرب است.",
    tilt: -1,
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? -1 : i));

  return (
    <section className="relative overflow-hidden bg-[#dcefec] py-20 px-6" dir="rtl">
      {/* ── بافت پس‌زمینه‌ی کل سکشن (همون پترن Ecosystem، کم‌رنگ) ── */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img
          src={faqPattern}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-[15%]"
        />
      </div>

      <div className="relative z-10 w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* ── ستون راست: عنوان + توضیح + کارت کوچینگ ── */}
        <div className="lg:pt-4">
          <h2 className="font-black text-[28px] sm:text-[36px] lg:text-[42px] leading-[1.35] text-navy mb-6">
            دغدغه‌ی آینده و <span className="text-magenta">شغل</span>
            <br />
            فرزندتون رو دارید؟
          </h2>

          <p className="text-sm sm:text-base leading-[1.9] text-ink/70 mb-9 max-w-[520px]">
            انتخاب مدرسه یعنی انتخاب آینده. اینجا صادقانه، مستقیم و بدون
            تعارف، به سوالات بی‌نهایت شما درباره‌ی کنکور، مدرک رسمی و
            آینده‌ی شغلی پاسخ می‌دیم؛ چون باور داریم راهِ درست، از شفافیت
            می‌گذره.
          </p>

          {/* ── کارت دریافت کوچینگ تخصصی (سایه‌ی سخت مثل سایر کارت‌های سایت) ── */}
          <div className="relative">
            <div className="absolute top-2 left-2 w-full h-full rounded-[28px] bg-navy" />
            <div className="relative z-10 rounded-[28px] bg-teal p-6 sm:p-7 min-h-[176px] overflow-hidden">
              {/* بافت لوزی‌شکل داخل کارت */}
              <div className="absolute inset-0 pointer-events-none">
                <img
                  src={faqPattern}
                  alt=""
                  aria-hidden="true"
                  className="w-full h-full object-cover opacity-[22%]"
                />
              </div>

              {/* متن: عنوان + توضیح، محدود به عرض راست کارت */}
              <div className="relative z-10 max-w-[68%] sm:max-w-[64%]">
                <h3 className="font-black text-lg sm:text-xl text-navy mb-2">
                  دریافت کوچینگ تخصصی
                </h3>
                <p className="text-xs sm:text-[13px] leading-[1.9] text-navy/75">
                  می‌توانید یک جلسه‌ی مشاوره‌ی رایگان با تیم متخصصان ما
                  رزرو کنید و درباره‌ی مسیر فرزندتون بطور اختصاصی صحبت
                  کنید.
                </p>
              </div>

              {/* فلش پیچ‌دار تزئینی — از زیر متن به سمت دکمه می‌خزد */}
              <SwirlArrowIcon className="hidden sm:block absolute z-10 right-[30%] bottom-14 w-16 h-14 text-navy/70" />

              {/* دکمه‌ی CTA — گوشه‌ی پایین-چپ کارت */}
              <div className="absolute z-10 left-5 bottom-5 sm:left-6 sm:bottom-6">
                <div className="relative">
                  <div className="absolute top-1 left-1 w-full h-full rounded-full bg-black/20" />
                  <a
                    href="#"
                    className="relative z-10 inline-flex items-center gap-2 bg-navy text-white text-sm font-bold px-5 py-3 rounded-full whitespace-nowrap transition-transform duration-300 hover:-translate-x-1"
                  >
                    رزرو جلسه‌ی مشاوره
                    <ArrowIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── ستون چپ: آکاردئون سوالات متداول ── */}
        <div className="space-y-5">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={item.question}
                className="relative transition-transform duration-300"
                style={{ transform: `rotate(${item.tilt}deg)` }}
              >
                {/* لایه‌ی سایه‌ی سخت (افست‌شده، بدون بلور) — دقیقاً مثل PillarCard/StatCard */}
                <div className="absolute top-[5px] left-[5px] w-full h-full rounded-2xl bg-ink" />

                <div
                  className={`relative z-10 rounded-2xl border-2 border-ink transition-colors duration-200 ${
                    isOpen ? "bg-teal text-white" : "bg-white text-ink"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center gap-4 px-5 py-4 text-right"
                  >
                    <span className="w-9 h-9 rounded-[10px] bg-ink text-white flex items-center justify-center flex-shrink-0">
                      {isOpen ? (
                        <ChevronDownIcon className="w-4 h-4" />
                      ) : (
                        <PlusIcon className="w-4 h-4" />
                      )}
                    </span>
                    <span className="font-bold text-sm sm:text-[15px] leading-7">
                      {item.question}
                    </span>
                  </button>

                  {isOpen && (
                    <p className="px-5 pb-5 pr-[68px] text-sm leading-7 text-white/90">
                      {item.answer}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}