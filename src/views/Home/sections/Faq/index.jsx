"use client";
import { useState } from "react";
import Container from "../../../../layout/Container";
import { ChevronDownIcon, PlusIcon, ArrowIcon, SwirlArrowIcon } from "../../../../common/Icons";

const faqPattern = "/assets/Shared/Patterns/Ecosystem-Pattern.png";
const faqPatternBoxs = "/assets/unassigned/pattern-boxes.png";
const faqPatternBoxStrong = "/assets/unassigned/pattern-boxes-strong.png";

const faqs = [
  {
    question: "آیا رکاد یک هنرستان رسمی مورد تایید آموزش و پرورش است؟",
    answer:
      "رکاد یه هنرستان رسمیه؛ دانش‌آموز مدرک رسمی می‌گیره و مسیر کنکور و دانشگاه (از جمله کاردانی و کارشناسی مرتبط) کاملاً بازه. فرق ما اینه که در کنار درس، یه مهارت درآمدزا هم یاد می‌گیره.",
  },
  {
    question: "آیا دانش آموزان می‌توانند در کنکور شرکت کنند؟",
    answer:
      "بله، دانش‌آموزان رکاد مانند سایر هنرستان‌ها می‌توانند در کنکور شرکت کنند.",
  },
  {
    question: "هزینه‌ی تحصیل در رکاد چقدر است و چه امکانات مالی وجود دارد؟",
    answer:
      "هزینه‌ی تحصیل و امکانات مالی بر اساس شعبه و رشته متفاوت است؛ برای اطلاعات دقیق با ما در ارتباط باشید.",
  },
  {
    question: "ورود به بازار کار پس از فارغ‌التحصیلی چگونه تضمین می‌شود؟",
    answer:
      "از طریق اکوسیستم استارتاپی، کارآموزی و شبکه‌ی منتورهای رکاد، مسیر ورود به بازار کار هموار می‌شود.",
  },
  {
    question: "محیط مدرسه از نظر امنیتی و روانی چگونه است؟",
    answer:
      "محیط رکاد امن، حمایتگر و با نظارت مستمر مشاوران و منتورهای مجرب است.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? -1 : i));

  return (
    <section
          id="counseling"
        className="relative overflow-hidden bg-[#E4F4F2] py-[4rem] sm:py-[5rem] lg:py-[6rem] w-full"
          dir="rtl"
        >
      {/* ── لایه پترن — همون ماسک گرادیانی هیرو/دوئال‌اسکول؛ روی
          پس‌زمینه‌ی مینتی (#E4F4F2) می‌شینه و لبه‌ی بالا/پایین محو میشه ── */}
      <div
        className="absolute inset-0 pointer-events-none z-0
                [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]
                [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]"
      >
        <img
          src={faqPattern}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover scale-125 select-none opacity-20"
        />
      </div>

      <Container className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-12 items-stretch">
        
        {/* ۱. ستون راست: تایتل و باکس مشاوره — باکس بعد از تیتر می‌آید (بالا) */}
        <div className="flex flex-col h-full lg:pt-2">
          {/* تایتل */}
          <div>
            <h2 className="font-black text-[1.25rem] sm:text-[2.25rem] lg:text-[3.3125rem] leading-[1.3] sm:leading-[1.4] text-navy mb-0 flex flex-wrap items-center gap-x-2">
              <span className="inline-block text-ink whitespace-nowrap" style={{ transform: "rotate(3deg)" }}>دغدغه‌ی</span>
              <span className="inline-block text-navy whitespace-nowrap" style={{ transform: "rotate(-3deg)" }}>آینده</span>
              <span className="inline-block text-ink whitespace-nowrap" style={{ transform: "rotate(-3deg)" }}>و</span>
              <span className="inline-block text-magenta whitespace-nowrap" style={{ transform: "rotate(-3deg)" }}>شغل</span>
              <span className="inline-block text-ink whitespace-nowrap" style={{ transform: "rotate(3deg)" }}>فرزندتون</span>
              <span className="inline-block text-ink whitespace-nowrap" style={{ transform: "rotate(-3deg)" }}>رو</span>
              <span className="inline-block text-ink whitespace-nowrap" style={{ transform: "rotate(3deg)" }}>دارید؟</span>
            </h2>

            {/* زیرنویس — بصری هاید شده ولی برای سئو توی DOM می‌مونه */}
            <p className="sr-only">
              انتخاب مدرسه یعنی انتخاب آینده. اینجا صادقانه، مستقیم و بدون تعارف،
              به سوالات بی‌نهایت شما درباره‌ی کنکور، مدرک رسمی و آینده‌ی شغلی پاسخ
              می‌دین؛ چون باور داریم راهِ درست، از شفافیت می‌گذره.
            </p>
          </div>

          {/* باکس مشاوره — بلافاصله بعد از تیتر */}
          <div className="relative rotate-2 mt-8 sm:mt-12 lg:mt-10">
            {/* لایه پشتی باکس مشاوره */}
            <div className="absolute top-2 left-2 w-full h-full rounded-tl-[2.5rem] rounded-br-[2.5rem] rounded-tr-none rounded-bl-none bg-ink [corner-shape:squircle]" />
            {/* لایه اصلی باکس مشاوره */}
            <div className="relative z-10 border-[0.21875rem] border-ink rounded-tl-[2.5rem] rounded-br-[2.5rem] rounded-tr-none rounded-bl-none bg-[#F8A41D] p-3 sm:p-7 min-h-[6.5rem] sm:min-h-[8rem] overflow-hidden [corner-shape:squircle]">
              <div className="absolute inset-0 pointer-events-none">
                <img
                  src={faqPatternBoxStrong}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover scale-125 select-none opacity-40"
                />
              </div>

              <div className="relative z-10 max-w-full sm:max-w-[64%]">
                {/* اضافه شدن whitespace-nowrap برای ماندن تایتل در یک خط */}
                <h3 className="font-black text-[1.0625rem] xs:text-[1.1875rem] sm:text-[1.6875rem] text-ink mb-1.5 sm:mb-2 whitespace-nowrap">
                  <span className="text-white">دریافت</span> مشاوره و هدایت تحصیلی{" "}
                  <span className="text-white">تخصصی</span>
                </h3>
                <p className="text-[0.6875rem] xs:text-[0.75rem] sm:text-[1rem] font-medium leading-[1.7] sm:leading-[1.9] text-ink">
                  می‌توانید یک جلسه‌ی مشاوره‌ی رایگان با تیم متخصصان ما رزرو
                  کنید و درباره‌ی مسیر فرزندتون بطور اختصاصی صحبت کنید.
                </p>
              </div>

              {/* دکمه با استایل جدید */}
              <div className="relative sm:absolute -rotate-3 hover:rotate-0 transition-transform duration-500 ease-out z-10 mt-4 sm:mt-0 sm:left-4 sm:bottom-6">
                <div className="relative group inline-flex items-center justify-center">
                  {/* لایه پشتی دکمه */}
                  <div className="absolute top-[0.125rem] left-[0.125rem] w-full h-full rounded-[0.9375rem] bg-white transition-colors duration-300 ease-out group-hover:bg-black [corner-shape:squircle]"></div>
                  {/* خود دکمه */}
                  <a
                    href="#"
                    className="relative z-10 inline-flex items-center justify-center bg-ink text-white text-[0.75rem] xs:text-[0.8125rem] sm:text-[1rem] font-bold px-3.5 sm:px-5 py-2 sm:py-3 rounded-[0.9375rem] border-[0.125rem] border-white group-hover:border-ink whitespace-nowrap transition-all duration-300 ease-out group-hover:bg-white group-hover:text-black group-hover:scale-[1.03] group-hover:shadow-lg active:scale-95 [corner-shape:squircle]"
                  >
                    رزرو تایم مشاوره
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ۲. ستون چپ: سوالات متداول */}
        <div className="space-y-2 sm:space-y-3 lg:pt-2">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.question} className="relative transition-transform duration-300">
                {/* لایه پشتی سوالات */}
                <div className="absolute top-[0.3125rem] left-[0.3125rem] w-full h-full rounded-tl-none rounded-br-none rounded-tr-[1.375rem] rounded-bl-[1.375rem] bg-ink [corner-shape:squircle]" />

                {/* لایه اصلی سوالات */}
                <div
                  className={`relative z-10 rounded-tl-none rounded-br-none rounded-tr-[1.375rem] rounded-bl-[1.375rem] border-2 border-ink overflow-hidden transition-colors duration-300 ${isOpen ? "bg-teal text-ink" : "bg-white text-ink"} [corner-shape:squircle]`}
                >
                  {isOpen && (
                    <div className="absolute inset-0 pointer-events-none">
                      <img
                        src={faqPatternBoxs}
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover scale-125 select-none"
                      />
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    className="relative z-10 w-full flex items-center justify-between gap-2 sm:gap-4 px-3 sm:px-5 py-2 sm:py-3 text-right"
                  >
                    <span className="font-extrabold text-[0.75rem] xs:text-[0.8125rem] sm:text-[1.125rem] leading-6 sm:leading-7">
                      {item.question}
                    </span>

                    <div className="relative flex-shrink-0">
                      {/* لایه پشتی آیکون */}
                      <div className="absolute top-[0.09375rem] left-[0.09375rem] rotate-1 w-full h-full bg-[#292827] rounded-[0_0.978125rem_0_0.978125rem] [corner-shape:squircle]"></div>
                      {/* لایه اصلی آیکون */}
                      <div
                        className={`relative w-8 h-8 sm:w-12 sm:h-12 flex rotate-1 items-center justify-center bg-[#3D3B3A] border-[0.125rem] border-[#292827] text-white rounded-[0_0.978125rem_0_0.978125rem] transition-all duration-300 hover:-translate-y-0.5 cursor-pointer ${isOpen ? "rotate-180" : "rotate-0"} [corner-shape:squircle]`}
                      >
                        {isOpen ? (
                          <ChevronDownIcon className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                        ) : (
                          <PlusIcon className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                        )}
                      </div>
                    </div>
                  </button>

                  {/* انیمیشن نرم باز شدن با CSS Grid */}
                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="relative z-10 px-3 sm:px-5 pb-2.5 sm:pb-4 text-[0.6875rem] xs:text-[0.75rem] sm:text-[1rem] font-medium leading-6 sm:leading-7 text-ink/90">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}