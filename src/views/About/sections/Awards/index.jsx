import Container from "../../../../layout/Container";

const patternBg = "/assets/Pattern/layout-pattern.png";

// آیکون چک‌مارک داخل دایره (مطابق فیگما)
function CheckIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M1.5 6.5L4.5 9.5L12 2"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const awards = [
  { color: "bg-[#E0195B]", text: "برگزاری لیگ ملی کسب‌وکار نوجوانان ایران با حمایت اتاق بازرگانی ایران | بهمن ۱۳۹۸" },
  { color: "bg-[#58BDAF]", text: "طراحی و برگزاری دو دوره فرهنگستان نوآوری و کارآفرینی نوجوانان در اتاق بازرگانی استان" },
  { color: "bg-[#202A5A]", text: "انتخاب رکاد به‌عنوان سفیر کارآفرینی توسط اداره کل تعاون، کار و رفاه اجتماعی استان" },
  { color: "bg-[#F5A623]", text: "تقدیر شده در هفته جهانی کارآفرینی از سوی استانداری خراسان رضوی | آبان ۱۳۹۷" },
  { color: "bg-[#58BDAF]", text: "تأسیس اولین هنرستان استارتاپی پسرانه ایران در مشهد | ۱۳۹۸" },
];

export default function AboutAwardsSection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none select-none">
        <img src={patternBg} alt="" aria-hidden="true" draggable="false" className="w-full h-full object-cover opacity-30" />
      </div>
      <Container>
        <h2 className="font-black text-[2.5rem] sm:text-[3rem] lg:text-[3.8125rem] leading-[1.2] mb-10 text-center">
          <span className="inline-block">۹</span>{" "}
          <span className="inline-block">سال</span>{" "}
          <span className="inline-block text-[rgb(223,148,26)]">رد</span>{" "}
          <span className="inline-block">پای</span>{" "}
          <span className="inline-block text-teal">رکاد</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 max-w-5xl mx-auto">
          {[0, 1].map((col) => (
            <div key={col} className="space-y-5 sm:space-y-6">
              {awards.map((item, i) => (
                <div key={col + "-" + i} className="flex items-start gap-3 sm:gap-4">
                  <div className={`w-8 h-8 rounded-full ${item.color} flex items-center justify-center flex-shrink-0`}>
                    <CheckIcon className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-[0.9375rem] sm:text-[1rem] lg:text-[1.125rem] text-[#292827] leading-[1.7] flex-1 text-right">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
