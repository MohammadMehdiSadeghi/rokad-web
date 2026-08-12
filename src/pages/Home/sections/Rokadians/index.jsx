import Container from "../../../../layout/Container";

// ── داده‌ی سکشن «رکادیا» ─────────────────────────────────────────────
// مطابق اسکرین‌شات مرجع دسکتاپ: کارت اول بزرگ‌تر (featured)، عکس دانش‌آموز
// از بلوک فیروزه‌ای به بدنه سرریز می‌شود، بدنه خاکستری با بج و توضیح کوتاه.
const students = [
  {
      name: "امیرعلی شفاهی",
      role: "فریلنسر و برنامه‌نویس",
      photo: "/assets/Rokadians/student-1.png",
          desc: "توسعه‌دهنده و طراح وب",
        },
        {
          name: "امیرعلی شفاهی",
          role: "فریلنسر و برنامه‌نویس",
          photo: "/assets/Rokadians/student-1.png",
          desc: "توسعه‌دهنده و طراح وب",
        },
        {
          name: "امیرعلی شفاهی",
          role: "فریلنسر و برنامه‌نویس",
          photo: "/assets/Rokadians/student-1.png",
          desc: "طراح و توسعه‌دهنده‌ی محصولات دیجیتال و رابط‌های مدرن.",
        },
      ];

// ── نشان کوچک پایین کارت (مطابق طرح: مستطیل خاکستری ~۳۰×۱۴ با آیکون داخلی) ──
function CardBadge() {
  return (
    <div className="relative z-10 mx-auto mt-3 grid h-[14px] w-[30px] place-items-center rounded-[3px] border border-[#8F8F8F]/70 text-[#8F8F8F] lg:translate-x-[18px]">
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
function StudentCard({ student, featured = false }) {
  return (
    <div className="relative h-full bg-[#F6F6F6] rounded-[0_20px_0_20px] overflow-hidden border border-[#CFCFCF] border-t-[3px] border-t-[#5D6160] border-b-[3px] border-b-[#5C6260]">
          {/* الگوی خطوط عمودی — فقط کارت اول (سمت چپ بدنه) */}
      {featured && (
              <div
                              className="pointer-events-none absolute bottom-0 left-0 top-0 z-[1] w-[44%]"
                              style={{
                                                backgroundImage:
                                                  "repeating-linear-gradient(to right, rgba(0,0,0,0.14) 0px, rgba(0,0,0,0.14) 2px, transparent 2px, transparent 23px)",
                                                backgroundPosition: "36px 0",
                                              }}
                            />
            )}
      {/* گرادیان ملایم پایین بدنه — فقط کارت اول */}
      {featured && (
        <div className="pointer-events-none absolute bottom-0 left-0 z-[2] h-[15%] w-[55%] bg-[linear-gradient(to_top,#9A9A9A_0%,#D0D0D0_45%,rgba(208,208,208,0)_100%)]" />
      )}

      {/* بلوک فیروزه‌ای بالا — کارت اول گرادیان، بقیه یکنواخت (مطابق طرح) */}
      <div
        className={`relative h-[130px] sm:h-[140px] lg:h-[69px] ${
          featured
                      ? "bg-[linear-gradient(to_left,#59BEAF_0%,#A8DCD2_78%,#F2FBFA_100%)]"
                      : "bg-[#5EBFB1]"
        }`}
      >
        <img
          src={student.photo}
          alt={student.name}
          className={`absolute top-[51%] h-[116%] object-cover object-top ${
                      featured ? "right-[14%] w-[32%]" : "right-[21%] w-[53%]"
                    }`}
        />
      </div>

      {/* بدنه‌ی خاکستری */}
            <div className={`relative px-4 pb-2 sm:pb-4 pt-10 sm:pt-12 lg:pt-[19px] text-center ${featured ? "lg:h-[151px]" : ""}`}>
              <h4 className="font-black font-[1000] text-[15px] sm:text-[16px] lg:text-[16px] leading-[1.28] text-[#292827]">
                {student.name}
              </h4>
              <p className="text-[11px] sm:text-[12px] lg:text-[9px] text-[#292827]/70 mt-2 leading-[1.25]">
                {student.role}
              </p>

        {/* نشان کوچک */}
        <CardBadge />

        {/* توضیح کوتاه (+ لینک آبی برای کارت‌های کوچک) */}
        <p className={`relative z-10 mt-2 max-w-[42ch] text-[10px] lg:text-[10px] font-medium leading-[1.4] text-[#292827]/60 ${featured ? "lg:mr-[13%] lg:ml-[24%] lg:text-right" : "mx-auto max-w-[30ch]"}`}>
          {student.desc}
        </p>
        {!featured && (
          <a
            href="#"
            className="relative z-10 mt-1.5 inline-flex items-center gap-0.5 text-[10px] lg:text-[10px] font-bold text-[#5C90A0]"
          >
            مشاهده نمونه‌کارها
            <svg
              className="h-2.5 w-2.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}

export default function Rokadians() {
  return (
    <section
      id="rokadians"
      dir="rtl"
      className="relative overflow-hidden bg-white pt-[80px] sm:pt-[100px] lg:pt-[46px] pb-10 sm:pb-16 lg:pb-[67px] px-3 sm:px-6 lg:px-0"
    >
      <Container className="relative z-10">
        <div className="w-full lg:w-[81.6%] lg:mx-auto">
        {/* ── هدر وسط‌چین ── */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-black text-[22px] xs:text-[24px] sm:text-[34px] lg:text-[38px] lg:leading-[1.15] leading-[1.35]">
            ببین رکادی‌ها الان <span className="text-teal-wordmark">کجان</span>؟
          </h2>
          <p className="font-medium text-[#292827] text-[13px] sm:text-[16px] lg:text-[13px] lg:leading-[1.85] leading-[1.9] sm:leading-[2] max-w-xl lg:max-w-[395px] mx-auto mt-4 sm:mt-6 lg:mt-[24px]">
            فارغ‌التحصیلان ما در بهترین رشته‌های فنی به‌عنوان بنیان‌گذار
            استارتاپ‌های کشور و خودشون فعال هستن.
          </p>
        </div>

        {/* ── ردیف: کارت‌های رکادیا (راست) + آمار (چپ) ── */}
        <div className="flex flex-col lg:flex-row lg:items-stretch gap-10 lg:gap-0 mt-10 sm:mt-14 lg:mt-[36px]">
          {/* کارت‌ها — کارت اول بزرگ‌تر (نسبت ۱٫۶۵ : ۱ : ۱ مطابق طرح) */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1.65fr] gap-2.5 sm:gap-4 lg:gap-2">
            {students.map((student, i) => (
                          <StudentCard key={i} student={student} featured={i === students.length - 1} />
                        ))}
          </div>

          {/* بلوک آمار (سمت چپ در طرح) */}
          <div className="lg:w-[26.1%] flex-shrink-0 flex flex-col justify-center gap-2 sm:gap-3 text-left lg:pt-[14px] lg:pl-[24px]">
            <div>
              <p className="font-black font-[1000] text-[32px] sm:text-[40px] lg:text-[46px] leading-[1.05] text-[#21295A]">
                +۳۵۵
              </p>
              <p className="font-black text-[14px] sm:text-[16px] lg:text-[22px] text-[#21295A] mt-[8px]">
                دانش‌آموز
              </p>
              <p className="font-medium text-[12px] sm:text-[14px] lg:text-[11px] text-[#21295A]/70 mt-[6px]">
                در مسیر ساختن آینده
              </p>
            </div>

            <a
              href="#"
              className="self-end mr-2 inline-flex items-center bg-white border-[2px] border-[#21295A] text-[#21295A] font-extrabold text-[13px] px-7 py-2.5 rounded-[0_9.12px_0_9.12px] rotate-[-1.55deg] hover:rotate-0 transition-transform duration-300 whitespace-nowrap cursor-pointer"
            >
              مشاهده همه
                          </a>
                        </div>
                      </div>
                      </div>
                    </Container>
                  </section>
                );
              }