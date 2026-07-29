import { useState } from "react";
import { ChevronDownIcon, PlusIcon, ArrowIcon } from "../Icons";

// TODO: swap in the real answer copy for each item — these are placeholders.
const faqs = [
  {
    question: "آیا رکاد یک هنرستان رسمی مورد تایید آموزش و پرورش است؟",
    answer:
      "بله، رکاد یک هنرستان رسمی و مورد تایید آموزش و پرورش است و دانش‌آموزان طبق مقررات وزارت آموزش و پرورش، مدرک رسمی دریافت می‌کنند.",
  },
  {
    question: "آیا دانش آموزان می‌توانند در کنکور شرکت کنند؟",
    answer: "بله، دانش‌آموزان رکاد مانند سایر هنرستان‌ها می‌توانند در کنکور شرکت کنند.",
  },
  {
    question: "هزینه‌ی تحصیل در رکاد چقدر است و چه امکاناتی وجود دارد؟",
    answer: "هزینه‌ی تحصیل و امکانات بر اساس شعبه و رشته متفاوت است؛ برای اطلاعات دقیق با ما در ارتباط باشید.",
  },
  {
    question: "ورود به بازار کار از فارغ‌التحصیلی چگونه تضمین می‌شود؟",
    answer: "از طریق اکوسیستم استارتاپی، کارآموزی و شبکه‌ی منتورهای رکاد، مسیر ورود به بازار کار هموار می‌شود.",
  },
  {
    question: "محیط مدرسه از نظر امنیتی و روانی چگونه است؟",
    answer: "محیط رکاد امن، حمایتگر و با نظارت مستمر مشاوران و منتورهای مجرب است.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? -1 : i));

  return (
    <section className="py-20 px-6 bg-white">
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* ── ستون راست: عنوان + کارت کوچینگ ── */}
        <div className="lg:pt-4">
          <h2 className="font-black text-[28px] sm:text-[36px] lg:text-[40px] leading-[1.4] mb-10">
            <span className="inline-block rotate-2">دغدغه‌ی آینده و</span>{" "}
            <span className="inline-block -rotate-2 text-magenta">شغل</span>{" "}
            <span className="inline-block rotate-2">فرزندتون رو دارید؟</span>
          </h2>

          <div className="rounded-[24px] border-2 border-teal bg-[#F0FAF8] p-6 sm:p-8">
            <h3 className="font-black text-lg sm:text-xl text-teal-text mb-3">
              دریافت کوچینگ تخصصی
            </h3>
            <p className="text-sm sm:text-[15px] leading-[1.9] text-ink/70 mb-6">
              می‌توانید یک مشاوره رایگان با یکی از متخصصان ما رزرو کنید و بهترین
              مسیر رو برای فرزندتان انتخاب کنید.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-navy text-white text-sm font-bold px-5 py-3 rounded-lg transition-transform duration-300 hover:-translate-x-1"
            >
              رزرو جلسه مشاوره
              <ArrowIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* ── ستون چپ: آکاردئون سوالات متداول ── */}
        <div className="rounded-[28px] bg-bg-mint p-4 sm:p-6 space-y-3">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={item.question}
                className={`rounded-2xl border transition-colors duration-200 ${
                  isOpen
                    ? "bg-teal border-teal text-white"
                    : "bg-white border-gray-100 text-ink"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center gap-4 px-5 py-4 text-right"
                >
                  <span
                    className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${
                      isOpen ? "bg-white/20 text-white" : "bg-bg-mint text-teal-text"
                    }`}
                  >
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
