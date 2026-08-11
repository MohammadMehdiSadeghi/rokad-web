import Container from "../../../../layout/Container";
import { ChevronLeftIcon } from "../../../../common/Icons";

// ── داده‌ی سکشن «رکادیا» ──────────────────────────────────────────────
// نام و شغل‌ها از فیگما (نسخه‌ی فعلی دیزاین) استخراج شده؛ فعلاً پلیس‌هولدرند.
// در فیگما اسم «امیرعلی شفاهی» روی هر سه کارت تکرار شده (داده‌ی موقت طراح).
const students = [
  {
    name: "امیرعلی شفاهی",
    role: "بنیان‌گذار ۸ تا استارتاپ فناوری",
    avatarClass: "bg-teal",
  },
  {
    name: "آرتین امیری",
    role: "سطح ۲ بوت‌کمپ و عضو تیم استارتاپی",
    avatarClass: "bg-[#21295A]",
  },
  {
    name: "سارا رضایی",
    role: "فریلنسر و دیجیتال مارکتینگ",
    avatarClass: "bg-[#E0195B]",
  },
];

const getInitials = (name) => {
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.charAt(0) ?? "";
  const second = parts.length > 1 ? parts[1].charAt(0) : "";
  return second ? `${first}.${second}` : first;
};

export default function Rokadians() {
  return (
    <section
      id="rokadians"
      dir="rtl"
      className="relative overflow-hidden bg-white pt-[80px] sm:pt-[100px] lg:pt-[132px] pb-10 sm:pb-16 md:pb-20 px-3 sm:px-6"
    >
      <Container className="relative z-10">
        {/* ── هدر: تایتل (راست) + دکمه «مشاهده همه» (دسکتاپ) ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8 text-right">
          <div>
            <h2 className="font-black text-[20px] xs:text-[22px] sm:text-[34px] lg:text-[44px] leading-[1.35]">
              ببین <span className="text-teal-wordmark">رکادی‌ها</span> الان
              کجان؟
            </h2>
            <p className="font-medium text-[#292827] text-[12px] sm:text-[16px] leading-[1.8] sm:leading-[1.9] max-w-sm sm:max-w-xl mt-4 sm:mt-6">
              فارغ‌التحصیلان مدرسه‌ی ما به‌عنوان بنیان‌گذار استارتاپ‌های فنی و
              کسب‌وکار، شاغل و فعال هستن.
            </p>
          </div>

          <a
            href="#"
            className="hidden md:inline-flex self-start md:self-auto bg-white border-[2px] border-[#21295A] text-[#21295A] font-extrabold text-sm sm:text-base px-6 py-3 rounded-[0_9.12px_0_9.12px] rotate-[-1.55deg] hover:rotate-0 transition-transform duration-300 whitespace-nowrap cursor-pointer flex-shrink-0"
          >
            مشاهده همه
          </a>
        </div>

        {/* ── آمار موبایل/تبلت: +۳۵۵ دانش‌آموز در مسیر ساختن آینده ── */}
        <div className="relative lg:hidden mt-8 sm:mt-10">
          <div
            aria-hidden="true"
            className="absolute top-[4px] left-[4px] sm:top-[5px] sm:left-[6px] w-full h-full bg-[#21295A] rounded-[0_18px_0_18px]"
          ></div>
          <div className="relative z-10 bg-[#EDF9F5] border-[1.5px] sm:border-[2px] border-[#21295A] rounded-[0_18px_0_18px] px-6 py-6 sm:px-8 flex items-center gap-4 flex-wrap">
            <span className="font-black text-[44px] sm:text-[56px] leading-none text-teal-wordmark">
              +۳۵۵
            </span>
            <div className="pb-1">
              <p className="font-black text-[15px] sm:text-[17px] text-[#292827]">
                دانش‌آموز
              </p>
              <p className="text-[12px] sm:text-[13px] text-[#292827]/70 mt-0.5">
                در مسیر ساختن آینده
              </p>
            </div>
          </div>
        </div>

        {/* ── نوار گرادیان فیروزه‌ای (دسکتاپ) ── */}
        <div className="hidden lg:block relative mt-14 xl:mt-16 h-[110px] xl:h-[130px] w-full rounded-[0_20px_0_20px] bg-gradient-to-r from-[#EDF9F5] via-[#8FD5C9] to-[#4DB8AA]">
          {/* محو شدن کف نوار به سمت کارت‌ها */}
          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-[0_20px_0_20px] bg-gradient-to-t from-white via-transparent to-transparent"
          ></div>
        </div>

        {/* ── کارت‌های رکادیا (روی نوار گرادیان) ── */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7 lg:gap-9 -mt-12 lg:-mt-20 pt-4">
          {students.map((student, i) => (
            <div key={i} className="relative group">
              {/* لایه سایه/آفست پشت کارت */}
              <div
                aria-hidden="true"
                className="absolute top-[4px] left-[4px] sm:top-[5px] sm:left-[6px] w-full h-full bg-[#21295A] rounded-[0_20px_0_20px] sm:rounded-[0_24px_0_24px]"
              ></div>

              {/* کارت اصلی */}
              <div className="relative z-10 w-full h-full bg-[#F7F6F9] border-[1.5px] sm:border-[2px] border-[#21295A] rounded-[0_20px_0_20px] sm:rounded-[0_24px_0_24px] p-5 sm:p-7 flex flex-col gap-4 sm:gap-5 min-h-[200px] sm:min-h-[230px]">
                {/* آواتار با حروف اول نام */}
                <div className="relative w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0">
                  <div
                    aria-hidden="true"
                    className="absolute top-[2px] left-[2px] sm:top-[3px] sm:left-[3px] w-full h-full bg-[#292827] rounded-[8px_0_8px_0]"
                  ></div>
                  <div
                    className={`relative w-full h-full ${student.avatarClass} rounded-[8px_0_8px_0] border border-[#292827] flex items-center justify-center`}
                  >
                    <span className="font-black text-[13px] sm:text-[16px] text-white">
                      {getInitials(student.name)}
                    </span>
                  </div>
                </div>

                <div>
                  <h4 className="font-black text-[15px] sm:text-[18px] lg:text-[20px] text-[#292827]">
                    {student.name}
                  </h4>
                  <p className="text-[12px] sm:text-[13px] text-[#292827]/60 mt-1 sm:mt-1.5 leading-6 sm:leading-7">
                    {student.role}
                  </p>
                </div>

                <a
                  href="#"
                  className="mt-auto inline-flex items-center gap-1.5 text-teal-text font-bold text-[12px] sm:text-[13px] hover:gap-3 transition-all duration-300 cursor-pointer"
                >
                  مشاهده
                  <ChevronLeftIcon className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* ── دکمه «مشاهده همه» (موبایل) ── */}
        <a
          href="#"
          className="md:hidden mt-8 sm:mt-10 w-full flex items-center justify-center bg-white border-[2px] border-[#21295A] text-[#21295A] font-extrabold text-sm sm:text-base px-6 py-3 rounded-[0_9.12px_0_9.12px] rotate-[-1.55deg] hover:rotate-0 transition-transform duration-300 whitespace-nowrap cursor-pointer"
        >
          مشاهده همه
        </a>
      </Container>
    </section>
  );
}
