import Container from "../../../../layout/Container";

// آیکون مدال/نشان شبیه به دیزاین
function AwardBadgeIcon({ className = "w-4 h-4 text-white" }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* قلاب/حلقه بالای مدال */}
      <path d="M7.5 2C7.5 1.45 7.95 1 8.5 1h3c.55 0 1 .45 1 1v2.5h-5V2z" />
      {/* حلقه و مدال دایره‌ای */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 4.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zm0 3.25a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
      />
    </svg>
  );
}

// ۵ مورد اصلی رد پای رکاد
const baseAwards = [
  {
    color: "#E0195B",
    text: "برگزاری لیگ ملی کسب‌وکار نوجوانان ایران با حمایت اتاق بازرگانی ایران | بهمن ۱۳۹۸",
  },
  {
    color: "#58BDAF",
    text: "طراحی و برگزاری دو دوره فرهنگستان نوآوری و کارآفرینی نوجوانان در اتاق بازرگانی استان",
  },
  {
    color: "#202A5A",
    text: "انتخاب رکاد به‌عنوان سفیرکارآفرینی توسط اداره کل تعاون، کار و رفاه اجتماعی استان",
  },
  {
    color: "#F5A623",
    text: "تقدیر شده در هفته جهانی کارآفرینی از سوی استانداری خراسان رضوی | آبان ۱۳۹۷",
  },
  {
    color: "#58BDAF",
    text: "تأسیس اولین هنرستان استارتاپی پسرانه ایران در مشهد | ۱۳۹۸",
  },
];

// دو ستون راست و چپ مطابق عکس طرح
const rightColumnAwards = [...baseAwards];
const leftColumnAwards = [...baseAwards];

export default function AboutAwards() {
  return (
    <section className="relative py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white" dir="rtl">
      <Container>
        {/* ── تیتر سکشن: ۹ سال رد پای رکاد ── */}
        <h2 className="font-black text-[2rem] sm:text-[2.75rem] lg:text-[3.25rem] leading-[1.3] mb-12 sm:mb-16 text-center">
          <span className="text-[#292827]">۹ سال </span>
          <span className="text-[#DF941A]">رد </span>
          <span className="text-[#292827]">پای </span>
          <span className="text-[#58BDAF]">رکاد</span>
        </h2>

        {/* ── گرید ۲ ستونه مطابق طرح (ستون راست و ستون چپ) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 xl:gap-x-20 gap-y-6 sm:gap-y-8 max-w-5xl mx-auto">
          {/* ستون راست */}
          <div className="flex flex-col gap-6 sm:gap-8">
            {rightColumnAwards.map((item, i) => (
              <div key={`r-${i}`} className="flex items-start gap-3.5">
                {/* آیکون گرد رنگی با نشان مدال */}
                <div
                  className="w-8 h-8 sm:w-9 sm:h-9 flex-shrink-0 rounded-[9px] sm:rounded-[10px] flex items-center justify-center mt-0.5 border border-black/10 shadow-[0_1.5px_0_rgba(0,0,0,0.12)]"
                  style={{ backgroundColor: item.color }}
                >
                  <AwardBadgeIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white" />
                </div>

                {/* متن آیتم */}
                <p className="text-[0.875rem] sm:text-[0.9375rem] lg:text-[1rem] font-bold text-[#292827] leading-[1.8] sm:leading-[1.85] text-right">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* ستون چپ */}
          <div className="flex flex-col gap-6 sm:gap-8">
            {leftColumnAwards.map((item, i) => (
              <div key={`l-${i}`} className="flex items-start gap-3.5">
                {/* آیکون گرد رنگی با نشان مدال */}
                <div
                  className="w-8 h-8 sm:w-9 sm:h-9 flex-shrink-0 rounded-[9px] sm:rounded-[10px] flex items-center justify-center mt-0.5 border border-black/10 shadow-[0_1.5px_0_rgba(0,0,0,0.12)]"
                  style={{ backgroundColor: item.color }}
                >
                  <AwardBadgeIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white" />
                </div>

                {/* متن آیتم */}
                <p className="text-[0.875rem] sm:text-[0.9375rem] lg:text-[1rem] font-bold text-[#292827] leading-[1.8] sm:leading-[1.85] text-right">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}