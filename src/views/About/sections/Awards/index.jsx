import Container from "../../../../layout/Container";

/* =========================================================
   اینفوگرافیک — تایم‌لاین/چک‌لیست مسیر رکاد
   سفید، RTL، بج بیضی صورتی بالا، تیتر راست‌چین،
   دو ستون ۵ تایی: آیکون دایره‌ای رنگی راست + متن تیتر + تاریخ خاکستری
   (چیدمان مطابق تصویر ارسالی — آیتم‌های تکراری عمداً حفظ شده‌اند)
========================================================= */

/* ── ۱۰ ردیف — ۵ اول ستون راست، ۵ دوم ستون چپ ── */
const milestones = [
  {
    text: "تأسیس اولین هنرستان استارتاپی پسرانه ایران در مشهد",
    date: "۱۳۹۸",
    color: "#009966", // سبز
    shadow: "#006644",
    icon: "school",
  },
  {
    text: "تقدیر شده در هفته جهانی کارآفرینی از سوی استانداری خراسان رضوی",
    date: "آبان ۱۳۹۷",
    color: "#F8A41D", // نارنجی
    shadow: "#BA7B16",
    icon: "medal",
  },
  {
    text: "انتخاب رکاد به‌عنوان سفیر کارآفرینی توسط اداره کل تعاون، کار و رفاه اجتماعی استان",
    date: "",
    color: "#E0195B", // قرمز/صورتی سازمانی
    shadow: "#4E0920",
    icon: "users",
  },
  {
    text: "برگزاری لیگ ملی کسب‌وکار نوجوانان ایران با حمایت اتاق بازرگانی ایران",
    date: "بهمن ۱۳۹۸",
    color: "#652D90", // بنفش
    shadow: "#231032",
    icon: "trophy",
  },
  {
    text: "طراحی و برگزاری دو دوره فرهنگستان نوآوری و کارآفرینی نوجوانان در اتاق بازرگانی استان",
    date: "",
    color: "#F5A623", // زرد/کهربایی
    shadow: "#B0780E",
    icon: "certificate",
  },
  {
    text: "برگزاری لیگ ملی کسب‌وکار نوجوانان ایران با حمایت اتاق بازرگانی ایران",
    date: "بهمن ۱۳۹۸",
    color: "#652D90", // بنفش
    shadow: "#231032",
    icon: "trophy",
  },
  {
    text: "طراحی و برگزاری دو دوره فرهنگستان نوآوری و کارآفرینی نوجوانان در اتاق بازرگانی استان",
    date: "",
    color: "#F5A623", // زرد/کهربایی
    shadow: "#B0780E",
    icon: "certificate",
  },
  {
    text: "انتخاب رکاد به‌عنوان سفیر کارآفرینی توسط اداره کل تعاون، کار و رفاه اجتماعی استان",
    date: "",
    color: "#E0195B", // قرمز/صورتی سازمانی
    shadow: "#4E0920",
    icon: "users",
  },
  {
    text: "تقدیر شده در هفته جهانی کارآفرینی از سوی استانداری خراسان رضوی",
    date: "آبان ۱۳۹۷",
    color: "#F8A41D", // نارنجی
    shadow: "#BA7B16",
    icon: "medal",
  },
  {
    text: "تأسیس اولین هنرستان استارتاپی پسرانه ایران در مشهد",
    date: "۱۳۹۸",
    color: "#009966", // سبز
    shadow: "#006644",
    icon: "school",
  },
];

/* ── آیکون‌های مینیمال داخل دایره ── */
function MilestoneIcon({ name }) {
  const s = {
    fill: "none",
    stroke: "white",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  switch (name) {
    case "medal": // جایزه
      return (
        <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7" {...s}>
          <circle cx="12" cy="14" r="6" />
          <path d="M9 9L7 3M15 9l2-6" />
          <path d="M12 11.5l1 2h-2l1-2z" fill="white" />
        </svg>
      );
    case "school": // مدرسه/ساختمان
      return (
        <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7" {...s}>
          <path d="M3 21h18" />
          <path d="M5 21V9l7-5 7 5v12" />
          <path d="M10 21v-5h4v5" />
          <path d="M9 11h.01M15 11h.01" />
        </svg>
      );
    case "trophy": // جام
      return (
        <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7" {...s}>
          <path d="M8 21h8M12 17v4" />
          <path d="M7 4h10v6a5 5 0 0 1-10 0V4z" fill="white" fillOpacity="0.15" />
          <path d="M7 6H4a3 3 0 0 0 3 4M17 6h3a3 3 0 0 1-3 4" />
        </svg>
      );
    case "certificate": // گواهی
      return (
        <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7" {...s}>
          <rect x="4" y="4" width="16" height="12" rx="1.5" />
          <path d="M7 8h6M7 11h4" />
          <circle cx="15.5" cy="17.5" r="2.5" fill="white" fillOpacity="0.2" />
          <path d="M14 19.5l-.5 3 2-1.2 2 1.2-.5-3" />
        </svg>
      );
    case "users": // تیم/گروه
      return (
        <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7" {...s}>
          <circle cx="9" cy="7" r="3" />
          <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
          <circle cx="17" cy="8" r="2.5" />
          <path d="M15 14.5c2.8 0 6 1.8 6 5.5" />
        </svg>
      );
    default: // growth — نمودار رشد
      return (
        <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7" {...s}>
          <path d="M3 3v18h18" />
          <path d="M7 15l4-5 3 3 5-7" />
          <path d="M16 6h3v3" />
        </svg>
      );
  }
}

export default function AboutAwards() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <Container>
        {/* ── بج بیضی صورتی — جای نام برند، گوشه بالا ── */}
        <div className="flex justify-start mb-6">
          <span
            className="inline-flex items-center text-white text-[0.75rem] font-black tracking-wide"
            style={{
              background: "#E0195B",
              borderRadius: "999px",
              padding: "8px 22px",
              boxShadow: "2.75px 2.75px 0 #4E0920",
            }}
          >
            رُکاداسکول
          </span>
        </div>

        {/* ── تیتر اصلی — درشت، بولد، سمت راست ── */}
        <h2 className="font-black text-[2rem] sm:text-[2.75rem] lg:text-[3.5rem] leading-[1.25] text-right text-[#292827] mb-3">
          ۹ سال <span className="text-teal">ردپای</span>{" "}
          <span className="text-[#E0195B]">رُکاد</span>
        </h2>
        <p className="text-right text-[0.875rem] sm:text-[1rem] text-[#292827]/60 leading-[1.8] max-w-2xl mb-12 sm:mb-14">
          از یک کلاس کوچک تا اکوسیستمی کامل — هر ایستگاه با یک نشان رنگی.
        </p>

        {/* ── ردیف‌ها — دو ستون ۵ تایی (RTL: ستون راست اول) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 lg:gap-x-20 gap-y-9">
          {[milestones.slice(0, 5), milestones.slice(5)].map((column, c) => (
            <ul key={c} className="space-y-9 sm:space-y-10">
              {column.map((m, r) => {
                const i = c * 5 + r
                return (
                  <li key={i} className="flex items-center gap-4 sm:gap-5">
                    {/* آیکون دایره‌ای رنگی — سمت راست */}
                    <span
                      className="relative z-10 flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center"
                      style={{
                        background: m.color,
                        border: "2.5px solid #fff",
                        boxShadow: `0 0 0 1.5px ${m.color}, 2.75px 2.75px 0 ${m.shadow}`,
                      }}
                    >
                      <MilestoneIcon name={m.icon} />
                    </span>

                    {/* متن: تیتر + تاریخ خاکستری */}
                    <div className="min-w-0">
                      <p className="font-bold text-[0.9375rem] sm:text-[1rem] leading-[1.7] text-[#292827] text-right">
                        {m.text}
                        {m.date && (
                          <>
                            {" | "}
                            <span className="font-medium text-[#292827]/50">
                              {m.date}
                            </span>
                          </>
                        )}
                      </p>
                    </div>
                  </li>
                )
              })}
            </ul>
          ))}
        </div>
      </Container>
    </section>
  );
}
