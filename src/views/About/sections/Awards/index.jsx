import Container from "../../../../layout/Container";

const patternBg = "/assets/Pattern/layout-pattern.png";

const achievements = [
  {
    year: "۱۳۹۸",
    text: "تأسیس اولین هنرستان استارتاپی پسرانه ایران در مشهد",
  },
  {
    year: "۱۳۹۷",
    text: "تقدیر شده در هفته جهانی کارآفرینی از سوی استانداری خراسان رضوی | آبان ۱۳۹۷",
  },
  {
    year: "",
    text: "انتخاب رکاد به‌عنوان سفیر کارآفرینی توسط اداره کل تعاون، کار و رفاه اجتماعی استان",
  },
  {
    year: "",
    text: "طراحی و برگزاری دو دوره فرهنگستان نوآوری و کارآفرینی نوجوانان در اتاق بازرگانی استان",
  },
  {
    year: "۱۳۹۸",
    text: "برگزاری لیگ ملی کسب‌وکار نوجوانان ایران با حمایت اتاق بازرگانی ایران | بهمن ۱۳۹۸",
  },
];

export default function AboutAwards() {
  return (
    <section className="relative py-[4rem] sm:py-[5rem] lg:py-[6rem] w-full px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]">
        <img src={patternBg} alt="" aria-hidden="true" className="w-full h-full object-cover opacity-50" />
      </div>

      <Container className="relative z-10">
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <h2 className="font-black text-[1.5rem] sm:text-[2.25rem] lg:text-[3.3125rem] leading-[1.3] mb-4 sm:mb-6">
            <span className="inline-block rotate-1 text-teal">۹ سال</span>{" "}
            <span className="inline-block -rotate-1">رد پای</span>{" "}
            <span className="inline-block rotate-1 text-magenta">رکاد</span>
          </h2>
        </div>

        <div className="relative max-w-[48rem] mx-auto">
          <div className="hidden md:block absolute right-1/2 translate-x-1/2 top-0 bottom-0 w-[0.125rem] bg-ink/10" />
          <div className="flex flex-col gap-6 sm:gap-8">
            {achievements.map((a, i) => (
              <div key={i} className={`relative flex items-center gap-4 sm:gap-6 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                <div className="hidden md:flex w-4 h-4 flex-shrink-0 absolute right-1/2 translate-x-1/2">
                  <div className="w-3.5 h-3.5 rounded-full bg-white border-[0.1875rem] border-teal" />
                </div>
                <div className={`flex-1 md:w-[calc(50%-2.5rem)] ${i % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                  <div className="relative inline-block">
                    <div className="absolute inset-0 translate-x-[0.125rem] translate-y-[0.125rem] bg-ink/10 rounded-[0.625rem] [corner-shape:squircle]" />
                    <div className="relative bg-white border-[0.09375rem] border-ink/20 rounded-[0.625rem] [corner-shape:squircle] px-4 sm:px-6 py-2.5 sm:py-3.5 font-medium text-[0.875rem] sm:text-[1rem] text-ink/80 shadow-sm">
                      <span className="font-black text-teal ml-2">{a.year}</span>
                      {a.text}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}