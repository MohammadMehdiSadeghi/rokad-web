import Container from "../../../../layout/Container";

const patternBg = "/assets/Pattern/layout-pattern.png";

const awards = [
  { num: "۱", color: "bg-[#E0195B]", text: "برگزاری لیگ ملی کسب‌وکار نوجوانان ایران با حمایت اتاق بازرگانی ایران | بهمن ۱۳۹۸" },
  { num: "۲", color: "bg-[#58BDAF]", text: "طراحی و برگزاری دو دوره فرهنگستان نوآوری و کارآفرینی نوجوانان در اتاق بازرگانی استان" },
  { num: "۳", color: "bg-[#202A5A]", text: "انتخاب رکاد به‌عنوان سفیر کارآفرینی توسط اداره کل تعاون، کار و رفاه اجتماعی استان" },
  { num: "۴", color: "bg-[#F5A623]", text: "تقدیر شده در هفته جهانی کارآفرینی از سوی استانداری خراسان رضوی | آبان ۱۳۹۷" },
  { num: "۵", color: "bg-[#58BDAF]", text: "تأسیس اولین هنرستان استارتاپی پسرانه ایران در مشهد | ۱۳۹۸" },
];

export default function AboutAwards() {
  return (
    <section className="relative w-full py-[4rem] sm:py-[5rem] lg:py-[6rem] px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={patternBg} alt="" aria-hidden="true" draggable="false" className="w-full h-full object-cover opacity-30 select-none" />
      </div>
      <Container>
        <div className="relative z-10 text-center mb-[2.5rem] sm:mb-[3rem]">
          <h2 className="font-black text-[1.5rem] sm:text-[2.25rem] lg:text-[3rem] leading-[1.3] mb-4">
            <span className="inline-block">۹</span>{" "}
            <span className="inline-block">سال</span>{" "}
            <span className="inline-block text-[rgb(223,148,26)]">رد</span>{" "}
            <span className="inline-block">پای</span>{" "}
            <span className="inline-block text-teal">رکاد</span>
          </h2>
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16 gap-y-4 sm:gap-y-5 max-w-4xl mx-auto">
          {awards.map((a) => (
            <div key={a.num} className="flex items-start gap-3 sm:gap-4">
              <span className={`flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full ${a.color} text-white text-[0.8125rem] sm:text-[0.9375rem] font-bold`}>
                {a.num}
              </span>
              <p className="text-[0.8125rem] sm:text-[0.9375rem] text-[#292827] leading-[1.7] text-right">
                {a.text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
