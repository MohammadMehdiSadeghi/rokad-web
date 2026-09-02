import Container from "../../../../layout/Container";

const patternBg = "/assets/Pattern/layout-pattern.png";

// آیکون مدال/نشان
function MedalIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* دایره بیرونی مدال */}
      <circle cx="16" cy="14" r="8" stroke="white" strokeWidth="2.5" fill="white" fillOpacity="0.15" />
      {/* خطوط بالا (حلقه مدال) */}
      <path d="M12 4L16 8L20 4" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* ستاره داخل */}
      <polygon
        points="16,10 17.5,13 21,13.5 18.5,16 19,19.5 16,18 13,19.5 13.5,16 11,13.5 14.5,13"
        fill="white"
      />
    </svg>
  );
}

const awards = [
  { color: "#E0195B", shadow: "#B0003E", text: "برگزاری لیگ ملی کسب‌وکار نوجوانان ایران با حمایت اتاق بازرگانی ایران | بهمن ۱۳۹۸" },
  { color: "#58BDAF", shadow: "#3A9E96", text: "طراحی و برگزاری دو دوره فرهنگستان نوآوری و کارآفرینی نوجوانان در اتاق بازرگانی استان" },
  { color: "#202A5A", shadow: "#0D1636", text: "انتخاب رکاد به‌عنوان سفیر کارآفرینی توسط اداره کل تعاون، کار و رفاه اجتماعی استان" },
  { color: "#F5A623", shadow: "#C4810E", text: "تقدیر شده در هفته جهانی کارآفرینی از سوی استانداری خراسان رضوی | آبان ۱۳۹۷" },
  { color: "#58BDAF", shadow: "#3A9E96", text: "تأسیس اولین هنرستان استارتاپی پسرانه ایران در مشهد | ۱۳۹۸" },
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

        <div className="relative max-w-3xl mx-auto">
          {/* خط عمودی */}
          <div className="absolute right-[2.5rem] sm:right-[3rem] top-0 bottom-0 w-[3px] bg-[#202A5A] rounded-full"></div>

          <div className="space-y-8 sm:space-y-10">
            {awards.map((item, i) => (
              <div key={i} className="relative flex items-start gap-5 sm:gap-6">
                {/* آیکون مربع گرد رنگی */}
                <div
                  className="relative w-[4.5rem] h-[4.5rem] sm:w-[5rem] sm:h-[5rem] flex-shrink-0 rounded-[16px_0_16px_0] [corner-shape:squircle] flex items-center justify-center z-10"
                  style={{
                    backgroundColor: item.color,
                    boxShadow: `4px 4px 0 0 ${item.shadow}`,
                  }}
                >
                  <MedalIcon className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>

                {/* متن */}
                <div className="flex-1 pt-2 sm:pt-3">
                  <p className="text-[0.9375rem] sm:text-[1rem] lg:text-[1.125rem] text-[#292827] leading-[1.7] text-right">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}