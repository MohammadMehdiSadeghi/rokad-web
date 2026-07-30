import { useState } from "react";
import { ChevronDownIcon, PlusIcon, ArrowIcon, SwirlArrowIcon } from "../Icons";
import faqPattern from "../../assets/Shared/Patterns/Ecosystem-Pattern.png";
import faqPatternBoxs from "../../assets/_unassigned/Group 1000006377.png";

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
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? -1 : i));

  return (
    <section
      className="relative overflow-hidden bg-[#dcefec] py-14 sm:py-20 px-4 sm:px-6"
      dir="rtl"
    >
      <div className="absolute inset-0 pointer-events-none z-0">
        <img
          src={faqPattern}
          alt=""
          className="absolute inset-0 w-full h-full object-cover scale-125 select-none opacity-30"
        />
      </div>

      <div className="relative z-10 w-[92%] sm:w-[85%] lg:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24 xl:gap-36 items-start">
        {/* سمت راست: عنوان و باکس مشاوره */}
        <div className="lg:pt-4">
          <h2 className="font-black text-[28px] xs:text-[32px] sm:text-[44px] lg:text-[52px] leading-[1.5] sm:leading-[1.8] text-navy mb-5 sm:mb-6">
            <span
              className="inline-block text-ink"
              style={{ transform: "rotate(3deg)" }}
            >
              دغدغه‌ی
            </span>{" "}
            <span
              className="inline-block text-navy"
              style={{ transform: "rotate(-3deg)" }}
            >
              آینده
            </span>{" "}
            <span
              className="inline-block text-ink"
              style={{ transform: "rotate(-3deg)" }}
            >
              و
            </span>{" "}
            <span
              className="inline-block text-magenta"
              style={{ transform: "rotate(-3deg)" }}
            >
              شغل
            </span>
            <br />
            <span
              className="inline-block text-ink"
              style={{ transform: "rotate(3deg)" }}
            >
              فرزندتون
            </span>{" "}
            <span
              className="inline-block text-ink"
              style={{ transform: "rotate(-3deg)" }}
            >
              رو
            </span>{" "}
            <span
              className="inline-block text-ink"
              style={{ transform: "rotate(3deg)" }}
            >
              دارید؟
            </span>
          </h2>

          <p className="text-[15px] sm:text-[18px] font-semibold leading-[1.8] sm:leading-[1.9] text-ink mb-7 sm:mb-9">
            انتخاب مدرسه یعنی انتخاب آینده. اینجا صادقانه، مستقیم و بدون تعارف،
            به سوالات بی‌نهایت شما درباره‌ی کنکور، مدرک رسمی و آینده‌ی شغلی پاسخ
            می‌دین؛ چون باور داریم راهِ درست، از شفافیت می‌گذره.
          </p>

          <div className="relative rotate-2">
            <div className="absolute top-2 left-2 w-full h-full rounded-tl-[28px] rounded-br-[28px] rounded-tr-none rounded-bl-none bg-ink" />
            <div className="relative z-10 border-[3px] border-ink rounded-tl-[28px] rounded-br-[28px] rounded-tr-none rounded-bl-none bg-teal p-5 sm:p-7 min-h-[176px] overflow-hidden">
              <div className="absolute inset-0 pointer-events-none">
                <img
                  src={faqPatternBoxs}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover scale-125 select-none opacity-100"
                />
              </div>

              <div className="relative z-10 max-w-full sm:max-w-[64%]">
                <h3 className="font-black text-[22px] sm:text-[32px] text-ink mb-2">
                  <span className="text-white">دریافت</span> کوچینگ{" "}
                  <span className="text-white">تخصصی</span>
                </h3>
                <p className="text-[13px] sm:text-[16px] font-medium leading-[1.8] sm:leading-[1.9] text-ink">
                  می‌توانید یک جلسه‌ی مشاوره‌ی رایگان با تیم متخصصان ما رزرو
                  کنید و درباره‌ی مسیر فرزندتون بطور اختصاصی صحبت کنید.
                </p>
              </div>

              <div className="relative sm:absolute -rotate-3 hover:rotate-0 transition-transform duration-500 ease-out z-10 mt-5 sm:mt-0 sm:left-10 sm:bottom-6">
                <div className="relative group inline-flex items-center justify-center">
                  <div className="absolute inset-0 scale-105 rounded-[7px] transition-colors duration-300 ease-out group-hover:bg-black bg-white" />
                  <a
                    href="#"
                    className="relative z-10 inline-flex items-center justify-center bg-ink text-white text-[14px] sm:text-[16px] font-bold px-4 sm:px-5 py-2.5 sm:py-3 rounded-[7px] whitespace-nowrap transition-all duration-300 ease-out group-hover:bg-white group-hover:text-black group-hover:scale-[1.03] group-hover:shadow-lg active:scale-95"
                  >
                    رزرو جلسه‌ی مشاوره
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* سمت چپ: باکس‌های سوالات متداول */}
        <div className="space-y-4 sm:space-y-5 mt-4 lg:mt-10">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={item.question}
                className="relative transition-transform duration-300"
              >
                <div className="absolute top-[5px] left-[5px] w-full h-full rounded-tl-none rounded-br-none rounded-tr-[16px] rounded-bl-[16px] bg-ink" />

                <div
                  className={`relative z-10 rounded-tl-none rounded-br-none rounded-tr-[16px] rounded-bl-[16px] border-2 border-ink overflow-hidden transition-colors duration-200 ${
                    isOpen ? "bg-teal text-ink" : "bg-white text-ink"
                  }`}
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
                    className="relative z-10 w-full flex items-center justify-between gap-3 sm:gap-4 px-4 sm:px-5 py-3.5 sm:py-4 text-right"
                  >
                    <span className="font-extrabold text-[14px] sm:text-[18px] leading-6 sm:leading-7">
                      {item.question}
                    </span>

                    <div className="relative flex-shrink-0">
                      <div className="absolute top-[2px] left-[3px] w-full h-full bg-black rounded-[0_8.65px_0_8.65px]"></div>
                      <div
                        className="relative w-9 h-9 sm:w-12 sm:h-12 flex items-center justify-center bg-ink border-[2px] border-black text-white
                      rounded-[0_8.65px_0_8.65px] transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                      >
                        {isOpen ? (
                          <ChevronDownIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                        ) : (
                          <PlusIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                        )}
                      </div>
                    </div>
                  </button>

                  {isOpen && (
                    <p className="relative z-10 px-4 sm:px-5 pb-4 sm:pb-5 text-[13px] sm:text-[16px] font-medium leading-6 sm:leading-7 text-ink/90">
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