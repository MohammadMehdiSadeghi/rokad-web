import Container from "../../../../layout/Container";

const patternBg = "/assets/Pattern/layout-pattern.png";

function CheckIcon({ className }) {
  return (<svg viewBox="0 0 24 24" fill="none" className={className}><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" /><path d="M8 12.5l2.5 2.5 5.5-5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>);
}

function CrossIcon({ className }) {
  return (<svg viewBox="0 0 24 24" fill="none" className={className}><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" /><path d="M15 9l-6 6M9 9l6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>);
}

const rokadChecks = [
  { text: "پروژه‌های واقعی از روز اول — یادگیری با انجام‌دادن" },
  { text: "یادگیری تیمی و مبتنی بر جامعه — بچه‌ها با هم بزرگ می‌شن" },
  { text: "مهارت‌های نرم توی رویداد، بوت‌کمپ و کوچینگ واقعی" },
  { text: "ارتباط مستقیم با اکوسیستم استارتاپی و منتورهای مجرب" },
  { text: "خروجی: دیپلم + مسیر شغلی روشن + پورتفولیو", highlight: true },
];

const regularChecks = [
  { text: "مهارت‌های نرم فقط اسمی — نه به شکل تمرینی", cross: true },
  { text: "آموزش تئوری، بدون تجربه واقعی از دنیای کار", cross: true },
  { text: "یادگیری انفرادی و رقابتی", cross: true },
  { text: "ارتباط با صنعت و بازار کار: صفر", cross: true },
  { text: "خروجی: دیپلم، بدون پروژه واقعی", cross: true, highlight: true },
];

function ComparisonCard({ title, subtitle, items, borderColor, titleBg, titleColor, accentColor }) {
  return (
    <div className="relative h-full">
      <div className="absolute top-[0.25rem] left-[0.25rem] w-full h-full bg-[#292827] rounded-[1.25rem] sm:rounded-[2rem] lg:rounded-[2.5rem] [corner-shape:squircle]" />
      <div className={`relative z-10 h-full bg-white border-[0.125rem] ${borderColor} rounded-[1.25rem] sm:rounded-[2rem] lg:rounded-[2.5rem] [corner-shape:squircle] overflow-hidden`}>
        <div className={`px-5 sm:px-8 py-5 sm:py-7 ${titleBg}`}>
          <span className={`inline-block px-3 sm:px-4 py-1 sm:py-1.5 ${titleBg} border ${borderColor} rounded-[0.5rem] [corner-shape:squircle] text-[0.75rem] sm:text-[0.875rem] font-bold ${titleColor} mb-3 sm:mb-4`}>{subtitle}</span>
          <h3 className={`font-black text-[1.125rem] sm:text-[1.5rem] lg:text-[1.75rem] leading-[1.3] ${accentColor}`}>{title}</h3>
        </div>
        <div className="px-5 sm:px-8 py-5 sm:py-7 flex flex-col gap-3 sm:gap-4">
          {items.map((item, i) => {
            const isObj = typeof item === "object";
            const text = isObj ? item.text : item;
            const isCross = isObj && item.cross;
            const isHighlight = isObj && item.highlight;
            return (
              <div key={i} className={`flex items-start gap-3 ${isHighlight ? "mt-2" : ""}`}>
                {isCross ? (
                  <CrossIcon className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-0.5 text-[#C60036]" />
                ) : (
                  <CheckIcon className={`w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-0.5 ${accentColor}`} />
                )}
                <span className={`text-[0.875rem] sm:text-[1rem] leading-[1.7] ${isHighlight ? `font-bold ${accentColor}` : isCross ? "text-ink/60" : "text-ink/80"}`}>{text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function AboutComparison() {
  return (
    <section className="relative py-[4rem] sm:py-[5rem] lg:py-[6rem] w-full px-4 sm:px-6 lg:px-8 bg-[#F6F6F6] overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]">
        <img src={patternBg} alt="" aria-hidden="true" className="w-full h-full object-cover opacity-40" />
      </div>
      <Container className="relative z-10">
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <h2 className="font-black text-[1.5rem] sm:text-[2.25rem] lg:text-[3.3125rem] leading-[1.3] mb-4 sm:mb-6">
            <span className="inline-block rotate-1">تفاوت</span>{" "}
            <span className="inline-block -rotate-1 text-teal">رکاد</span>{" "}
            <span className="inline-block rotate-1">با</span>{" "}
            <span className="inline-block -rotate-1 text-magenta">بقیه</span>{" "}
            <span className="inline-block rotate-1">دقیقاً</span>{" "}
            <span className="inline-block -rotate-1">چیه؟</span>
          </h2>
          <p className="text-[0.875rem] sm:text-[1rem] lg:text-[1.125rem] text-ink/60 max-w-xl mx-auto leading-[1.8]">
            اگه دو تا مدرسه از بیرون شبیه هم به نظر برسن، معنیش این نیست شبیه هم کار می‌کنن.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          <ComparisonCard title="تمرکز روی مسیر شغلی و مهارت" subtitle="هنرستان استارتاپی رکاد" items={rokadChecks} borderColor="border-teal" titleBg="bg-[#E9F6F4]" titleColor="text-teal-text" accentColor="text-teal" />
          <ComparisonCard title="تمرکز روی کنکور و درس" subtitle="مدرسه معمولی" items={regularChecks} borderColor="border-magenta" titleBg="bg-[#FEF0F4]" titleColor="text-magenta-text" accentColor="text-[#C60036]" />
        </div>
      </Container>
    </section>
  );
}
