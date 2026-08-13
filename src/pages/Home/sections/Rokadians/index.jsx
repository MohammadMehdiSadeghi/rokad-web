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
    desc: "7طراح و توسعه‌دهنده‌ی محصولات دیجیتال",
  },
];

function StudentCard({ student }) {
  return (
    <div className="relative w-[225px] flex-shrink-0">
      {/* سایه سخت پشت کارت */}
      <div aria-hidden="true" className="absolute top-[4px] left-[4px] sm:top-[5px] sm:left-[5px] w-full h-full bg-[#292827] rounded-[0_13px_0_13px]"></div>

      {/* کارت اصلی */}
      <div className="relative z-10 w-full h-[320px] bg-white rounded-[0_13px_0_13px] overflow-hidden border-[2px] border-[#292827] flex flex-col">
        
        {/* هدر فیروزه‌ای + لایه پترن */}
        <div className="relative h-[120px] bg-gradient-to3-l from-[#59bbaf] to-[#58bdaf] overflow-hidden">
          <img
            src="/public/assets/Rokadians/Frame 1000006407.png" 
            alt=""
            aria-hidden="true"
            draggable="false"
            className="absolute inset-0 w-full h-full object-cover opacity-100 pointer-events-none select-none"
          />
        </div>

        {/* آواتار مرکزی با سایه سخت */}
        <div className="absolute top-[60px] left-1/2 -translate-x-1/2 z-20">
          <div aria-hidden="true" className="absolute top-[3px] left-[3px] w-[90px] h-[90px] bg-[#292827] rounded-full"></div>
          <img
            src="/assets/Rokadians/Ellipse 83.png"
            alt={student.name}
            className="relative z-10 w-[90px] h-[90px] rounded-full object-cover"
          />
        </div>

        {/* بدنه کارت */}
        <div className="flex-1 flex flex-col items-center px-4 pt-14 pb-4 text-center">
          <h4 className="font-black text-[16px] leading-[1.28] text-[#292827]">{student.name}</h4>
          <p className="text-[12px] text-[#347e75] font-medium mt-2 leading-[1.5]">{student.desc}</p>
          
          {/* دکمه مشکی با سایه سخت */}
          <div className="relative inline-flex items-center justify-center mt-4">
            <div className="absolute top-[2px] left-[2px] w-full h-full bg-[#292827] rounded-[0_8px_0_8px]"></div>
            <button className="relative z-10 px-5 py-1.5 border-2 border-[#292827] text-[#292827] bg-white text-[11px] font-bold rounded-[0_8px_0_8px] hover:bg-[#292827] hover:text-white transition-colors">
              درباره من
            </button>
          </div>
        </div>

        {/* فوتر کارت - خط سخت */}
        <div className="mt-auto border-t-2 border-[#292827]">
          <div className="flex items-center justify-between px-4 pt-2.5 pb-3">
            
            {/* سه دکمه لینکدین */}
            <div className="flex items-center gap-1.5">
              <span className="inline-flex items-center justify-center w-5 h-5 bg-white border border-[#292827]/30 text-[#292827] text-[8px] font-bold rounded-[2px] cursor-pointer">in</span>
              <span className="inline-flex items-center justify-center w-5 h-5 bg-white border border-[#292827]/30 text-[#292827] text-[8px] font-bold rounded-[2px] cursor-pointer">in</span>
              <span className="inline-flex items-center justify-center w-5 h-5 bg-white border border-[#292827]/30 text-[#292827] text-[8px] font-bold rounded-[2px] cursor-pointer">in</span>
            </div>

            {/* متن تستی */}
            <span className="text-[10px] text-[#292827]/30 font-medium">متن تستی</span>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Rokadians() {
  return (
    <section id="rokadians" dir="rtl" className="relative overflow-hidden bg-[#f2faf9] pt-[80px] sm:pt-[100px] lg:pt-[70px] pb-16 sm:pb-24 lg:pb-[100px] px-3 sm:px-6 lg:px-0">
      <Container className="relative z-10">
        <div className="w-full lg:w-[85%] lg:mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-[60px]">
            <h2 className="font-black text-[22px] xs:text-[24px] sm:text-[34px] lg:text-[40px] leading-[1.35] text-[#292827]">
              ببین رکادی‌ها الان <span className="text-[#4bb5a8]">کجان</span>؟
            </h2>
            <p className="font-medium text-[#292827] text-[13px] sm:text-[16px] lg:text-[15px] lg:leading-[1.85]( sm:leading-[2] max-w-xl lg:max-w-[450px] mx-auto mt-4 sm:mt-6">
              فارغ‌التحصیلان ما در بهترین رشته‌های فنی به‌عنوان بنیان‌گذار استارتاپ‌های کشور و خودشون فعال هستن.
            </p>
          </div>
          
          {/* چیدمان اصلی */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-12">
            
            {/* کارت‌ها (حالا سمت راست در RTL) */}
            <div className="lg:w-[70%] flex flex-wrap justify-center gap-6 order-1 lg:order-1">
              {students.map((student, i) => (
                <StudentCard key={i} student={student} />
              ))}
            </div>

            {/* بلوک آمار (حالا سمت چپ در RTL) */}
            <div className="lg:w-[30%] flex-shrink-0 flex flex-col justify-center text-right lg:text-right lg:pl-[30px] order-2 lg:order-2">
              <div>
                <p className="font-black font-[1000] text-[42px] sm:text-[52px] lg:text-[64px] leading-[1.05] text-[#21295a]">+۳۵۵</p>
                <p className="font-black text-[16px] sm:text-[18px] lg:text-[24px] text-[#21295a] mt-[10px]">دانش‌آموز</p>
                <p className="font-medium text-[13px] sm:text-[14px] lg:text-[13px] text-[#21295a]/70 mt-[8px]">در مسیر ساختن آینده</p>
              </div>
              <a href="#" className="inline-flex items-center bg-white border-[2px] border-[#21295a] text-[#21295a] font-extrabold text-[14px] px-8 py-3 rounded-[0_9.12px_0_9.12px] rotate-[-1.55deg] hover:rotate-0 transition-transform duration-300 whitespace-nowrap cursor-pointer mt-8 self-start">
                مشاهده نمونه‌کارها
              </a>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}