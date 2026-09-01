"use client";
import Container from "../../../../layout/Container";

const patternBg = "/assets/Pattern/layout-pattern.png";

const teamMembers = [
  { name: "حامد آرون", role: "مدیرعامل و بنیانگذار رکاد", badge: "بنیانگذار" },
  { name: "علیرضا عزیزپور", role: "راهبر ارشد / مدیرعامل رکاد", badge: "مدیرعامل" },
  { name: "امیرحسین امیریان", role: "راهبر هنرستان پسرانه رکاد", badge: "راهبر" },
  { name: "سعید افضلی", role: "دستیار اجرایی مدارس رکاد", badge: "دستیار اجرایی" },
  { name: "عماد پورحسنی", role: "معاون هنرستان پسرانه رکاد", badge: "معاون" },
  { name: "محمد کمالی", role: "راهبر هنرستان دخترانه رکاد", badge: "راهبر" },
  { name: "رویا دولت‌آبادی", role: "معاون هنرستان دخترانه رکاد", badge: "معاون" },
  { name: "مبینا فلاح", role: "مدیرعامل و بنیانگذار", badge: "بنیانگذار" },
];

export default function AboutTeam() {
  return (
    <section className="relative py-[4rem] sm:py-[5rem] lg:py-[6rem] w-full px-4 sm:px-6 lg:px-8 bg-[#F6F6F6] overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]">
        <img src={patternBg} alt="" aria-hidden="true" className="w-full h-full object-cover opacity-50" />
      </div>

      <Container className="relative z-10">
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <h2 className="font-black text-[1.5rem] sm:text-[2.25rem] lg:text-[3.3125rem] leading-[1.3] mb-4 sm:mb-6">
            <span className="inline-block rotate-1">آدم‌هایی</span>{" "}
            <span className="inline-block -rotate-1 text-navy-alt">که</span>{" "}
            <span className="inline-block rotate-1">هر روز</span>{" "}
            <span className="inline-block -rotate-1 text-teal">رکاد</span>{" "}
            <span className="inline-block rotate-1">رو</span>{" "}
            <span className="inline-block -rotate-1 text-magenta">می‌سازن</span>
          </h2>
          <p className="text-[0.875rem] sm:text-[1rem] lg:text-[1.125rem] text-ink/60 max-w-2xl mx-auto leading-[1.8]">
            پشت هر رویداد، هر جلسه و هر پروژه، یه تیم پرانرژی هست. با چند نفر از این آدم‌ها آشنا شو.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {teamMembers.map((m, i) => (
            <div key={m.name} className="relative">
              <div className="absolute top-[0.1875rem] left-[0.1875rem] w-full h-full bg-[#292827] rounded-[1rem] sm:rounded-[1.25rem] lg:rounded-[1.5rem] [corner-shape:squircle]" />
              <div className="relative z-10 bg-white border-2 border-[#292827] rounded-[1rem] sm:rounded-[1.25rem] lg:rounded-[1.5rem] [corner-shape:squircle] p-4 sm:p-5 lg:p-6 text-center">
                {/* Avatar placeholder */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mx-auto mb-3 sm:mb-4 bg-teal/20 rounded-full flex items-center justify-center">
                  <span className="font-black text-[1.25rem] sm:text-[1.5rem] lg:text-[1.75rem] text-teal">{m.name.charAt(0)}</span>
                </div>
                <h3 className="font-black text-[0.875rem] sm:text-[1rem] lg:text-[1.125rem] text-[#292827] leading-snug mb-1">{m.name}</h3>
                <p className="text-[0.75rem] sm:text-[0.8125rem] text-ink/60 leading-snug">{m.role}</p>
                <span className="inline-block mt-2 sm:mt-3 px-2.5 py-0.5 bg-[#292827] text-white text-[0.625rem] sm:text-[0.6875rem] font-bold rounded-[0.3125rem] [corner-shape:squircle]">
                  {m.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}