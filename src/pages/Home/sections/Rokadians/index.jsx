import Container from "../../../../layout/Container";

const students = [
  {
    name: "امیرعلی شفاهی",
    desc: "توسعه‌دهنده و طراح وب",
  },
  {
    name: "امیرعلی شفاهی",
    desc: "فریلنسر و برنامه‌نویس",
  },
  {
    name: "امیرعلی شفاهی",
    desc: "طراح و توسعه‌دهنده‌ی محصولات دیجیتال",
  },
];

// ── نشان_small (پازلی کارت) ──
function CardBadge() {
  return (
    <div className="relative z-10 grid h-[14px] w-[30px] place-items-center rounded-[3px] border border-[#8F8F8F]/70 text-[#8F8F8F]">
      <svg
        className="h-[10px] w-[24px]"
        viewBox="0 0 28 12"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      >
        <rect x="1.5" y="1.5" width="25" height="9" rx="1.5" />
        <circle cx="7" cy="6" r="2.4" fill="currentColor" stroke="none" />
        <path d="M12.5 4.2h8M12.5 7.6h8M22.5 4.2h3M22.5 7.6h3" strokeWidth="1.3" />
      </svg>
    </div>
  );
}

// ── کارت دانش‌آموز ──
function StudentCard({ student }) {
  return (
    <div className="relative w-full bg-white rounded-[0_24px_0_24px] overflow-hidden shadow-md border border-gray-100/50 flex flex-col">
      {/* هدر فیروزه‌ای */}
      <div className="relative h-[120px] bg-gradient-to-l from-[#59BEAF] to-[#5EBFB1]"></div>

      {/* آواتار مرکزی (قرار گرفته روی مرز هدر و بدنه) */}
      <img
        src="/assets/Rokadians/Ellipse 83.png"
        alt={student.name}
        className="absolute top-[60px] left-1/2 -translate-x-1/2 h-[90px] w-[90px] rounded-full object-cover border-4 border-white shadow-sm"
      />

      {/* بدنه کارت */}
      <div className="flex-1 flex flex-col items-center px-5 pt-14 pb-4 text-center">
        <h4 className="font-black text-[17px] leading-[1.28] text-[#292827]">
          {student.name}
        </h4>
        {/* رنگ متن توضیحات فیروزه‌ای شد */}
        <p className="text-[13px] text-[#4DB8A8] font-medium mt-2 leading-[1.5]">
          {student.desc}
        </p>

        {/* دکمه درباره من */}
        <button className="mt-5 px-5 py-1.5 border-2 border-[#5EBFB1] text-[#5EBFB1] text-[12px] font-bold rounded-[0_8px_0_8px] hover:bg-[#5EBFB1] hover:text-white transition-colors">
          درباره من
        </button>
      </div>

      {/* فوتر کارت شامل لینکدین و نشان پازلی */}
      <div className="flex items-center justify-between px-5 pb-4 pt-2 border-t border-gray-100/50 mt-auto">
        <div className="text-[#8F8F8F] hover:text-[#0A66C2] cursor-pointer transition-colors">
          {/* آیکون لینکدین */}
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </div>
        <CardBadge />
      </div>
    </div>
  );
}

export default function Rokadians() {
  return (
    <section
      id="rokadians"
      dir="rtl"
      className="relative overflow-hidden bg-[#F7F7F7] pt-[80px] sm:pt-[100px] lg:pt-[70px] pb-16 sm:pb-24 lg:pb-[100px] px-3 sm:px-6 lg:px-0"
    >
      <Container className="relative z-10">
        <div className="w-full lg:w-[85%] lg:mx-auto">
          {/* ── هدر وسط‌چین ── */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-[60px]">
            <h2 className="font-black text-[22px] xs:text-[24px] sm:text-[34px] lg:text-[40px] leading-[1.35]">
              ببین رکادی‌ها الان <span className="text-[#5EBFB1]">کجان</span>؟
            </h2>
            <p className="font-medium text-[#292827] text-[13px] sm:text-[16px] lg:text-[15px] lg:leading-[1.85] sm:leading-[2] max-w-xl lg:max-w-[450px] mx-auto mt-4 sm:mt-6">
              فارغ‌التحصیلان ما در بهترین رشته‌های فنی به‌عنوان بنیان‌گذار
              استارتاپ‌های کشور و خودشون فعال هستن.
            </p>
          </div>

          {/* ── ردیف اصلی: کارت‌ها (راست) + آمار (چپ) ── */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-12">
            
            {/* کارت‌ها — چیده شده به صورت ستونی (سمت راست در طرح RTL) */}
            <div className="lg:w-[70%] flex flex-col sm:grid sm:grid-cols-3 gap-6 order-2 lg:order-1">
              {students.map((student, i) => (
                <StudentCard key={i} student={student} />
              ))}
            </div>

            {/* بلوک آمار (سمت چپ در طرح RTL) */}
            <div className="lg:w-[30%] flex-shrink-0 flex flex-col justify-center text-right lg:text-right lg:pr-[30px] order-1 lg:order-2">
              <div>
                <p className="font-black font-[1000] text-[42px] sm:text-[52px] lg:text-[64px] leading-[1.05] text-[#21295A]">
                  +۳۵۵
                </p>
                <p className="font-black text-[16px] sm:text-[18px] lg:text-[24px] text-[#21295A] mt-[10px]">
                  دانش‌آموز
                </p>
                <p className="font-medium text-[13px] sm:text-[14px] lg:text-[13px] text-[#21295A]/70 mt-[8px]">
                  در مسیر ساختن آینده
                </p>
              </div>

              <a
                href="#"
                className="inline-flex items-center bg-white border-[2px] border-[#21295A] text-[#21295A] font-extrabold text-[14px] px-8 py-3 rounded-[0_9.12px_0_9.12px] rotate-[-1.55deg] hover:rotate-0 transition-transform duration-300 whitespace-nowrap cursor-pointer mt-8 self-start"
              >
                مشاهده نمونه‌کارها
              </a>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}