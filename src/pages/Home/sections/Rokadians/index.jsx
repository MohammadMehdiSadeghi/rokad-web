import Container from "../../../../layout/Container";

// ── داده‌ی سکشن «رکادیا» ─────────────────────────────────────────────
// مطابق طرح فیگما (اسکرین‌شات «دانش اموختگان»): اسم و شغل روی هر سه کارت
// یکسان و پلیس‌هولدر است (داده‌ی موقت طراح). عکس دانش‌آموز هم فعلاً یک‌تاست.
const students = [
  {
    name: "امیرعلی شفاهی",
    role: "فریلنسر و برنامه‌نویس",
    photo: "/assets/Rokadians/student-1.png",
  },
  {
    name: "امیرعلی شفاهی",
    role: "فریلنسر و برنامه‌نویس",
    photo: "/assets/Rokadians/student-1.png",
  },
  {
    name: "امیرعلی شفاهی",
    role: "فریلنسر و برنامه‌نویس",
    photo: "/assets/Rokadians/student-1.png",
  },
];

export default function Rokadians() {
  return (
    <section
      id="rokadians"
      dir="rtl"
      className="relative overflow-hidden bg-white pt-[80px] sm:pt-[100px] lg:pt-[132px] pb-10 sm:pb-16 md:pb-20 px-3 sm:px-6"
    >
      <Container className="relative z-10">
        {/* ── هدر وسط‌چین ── */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-black text-[22px] xs:text-[24px] sm:text-[34px] lg:text-[44px] leading-[1.35]">
            ببین رکادی‌ها الان <span className="text-teal-wordmark">کجان</span>؟
          </h2>
          <p className="font-medium text-[#292827] text-[13px] sm:text-[16px] leading-[1.9] sm:leading-[2] max-w-xl mx-auto mt-4 sm:mt-6">
            فارغ‌التحصیلان ما در بهترین رشته‌های فنی به‌عنوان بنیان‌گذار
            استارتاپ‌های کشور و خودشون فعال هستن.
          </p>
        </div>

        {/* ── ردیف: کارت‌های رکادیا (راست) + آمار (چپ) ── */}
        <div className="flex flex-col lg:flex-row lg:items-stretch gap-10 lg:gap-8 mt-10 sm:mt-14 lg:mt-16">
          {/* کارت‌ها */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-5">
            {students.map((student, i) => (
              <div key={i} className="relative">
                <div className="relative h-full bg-[#F6F6F6] rounded-[0_20px_0_20px] overflow-hidden">
                  {/* بلوک فیروزه‌ای بالا (گرادیان + عکس دانش‌آموز) */}
                  <div className="relative h-[130px] sm:h-[150px] lg:h-[165px] bg-gradient-to-l from-[#4DB8AA] via-[#8FD5C9] to-[#EDF9F5]">
                    <img
                      src={student.photo}
                      alt={student.name}
                      className="absolute inset-y-0 right-0 w-[55%] h-full object-cover object-top"
                    />
                  </div>
                  {/* بدنه‌ی خاکستری */}
                  <div className="px-5 sm:px-6 py-6 sm:py-8 text-center">
                    <h4 className="font-black text-[15px] sm:text-[17px] lg:text-[19px] text-[#292827]">
                      {student.name}
                    </h4>
                    <p className="text-[12px] sm:text-[13px] text-[#292827]/70 mt-1.5 leading-6 sm:leading-7">
                      {student.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* بلوک آمار (سمت چپ در طرح) */}
          <div className="lg:w-[250px] xl:w-[270px] flex-shrink-0 flex flex-col justify-between gap-8 lg:gap-10 text-left">
            <div>
              <p className="font-black text-[56px] sm:text-[64px] lg:text-[68px] leading-none text-[#21295A]">
                +۳۵۵
              </p>
              <p className="font-black text-[18px] sm:text-[20px] text-[#21295A] mt-3">
                دانش‌آموز
              </p>
              <p className="font-medium text-[14px] sm:text-[15px] text-[#21295A]/70 mt-1.5">
                در مسیر ساختن آینده
              </p>
            </div>

            <a
              href="#"
              className="self-start inline-flex items-center bg-white border-[2px] border-[#21295A] text-[#21295A] font-extrabold text-sm sm:text-base px-6 py-3 rounded-[0_9.12px_0_9.12px] rotate-[-1.55deg] hover:rotate-0 transition-transform duration-300 whitespace-nowrap cursor-pointer"
            >
              مشاهده همه
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
