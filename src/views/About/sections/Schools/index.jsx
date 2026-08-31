import Container from "../../../../layout/Container";

const patternBg = "/assets/Pattern/layout-pattern.png";
const boySchoolImg = "/assets/DualSchool/SchoolSelection-Boys.png";
const girlSchoolImg = "/assets/DualSchool/SchoolSelection-Girls.png";

const schools = [
  {
    id: "boys",
    kind: "مدرسه‌ی پسرانه",
    title: "هنرستان پسرانه رکاد",
    address: "مشهد | فرامرز عباسی ۳۳",
    fields: ["تولید و توسعه پایگاه اینترنتی", "تولید محتوای چندرسانه‌ای"],
    img: boySchoolImg,
    accent: "teal",
  },
  {
    id: "girls",
    kind: "مدرسه‌ی دخترانه",
    title: "هنرستان دخترانه رکاد",
    address: "مشهد | فرامرز عباسی ۵۴",
    fields: ["شبکه و نرم‌افزار", "تولید محتوای چندرسانه‌ای"],
    img: girlSchoolImg,
    accent: "magenta",
  },
];

export default function AboutSchools() {
  return (
    <section className="relative py-[4rem] sm:py-[5rem] lg:py-[6rem] w-full px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]">
        <img src={patternBg} alt="" aria-hidden="true" className="w-full h-full object-cover opacity-50" />
      </div>

      <Container className="relative z-10">
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <h2 className="font-black text-[1.5rem] sm:text-[2.25rem] lg:text-[3.3125rem] leading-[1.3] mb-4 sm:mb-6">
            <span className="inline-block rotate-1 text-teal">رکاد</span>{" "}
            <span className="inline-block -rotate-1">رو</span>{" "}
            <span className="inline-block rotate-1">از</span>{" "}
            <span className="inline-block -rotate-1 text-magenta">نزدیک</span>{" "}
            <span className="inline-block rotate-1">ببینی؟</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 max-w-[60rem] mx-auto">
          {schools.map((s) => (
            <div key={s.id} className="relative">
              <div className="absolute top-[0.25rem] left-[0.25rem] w-full h-full bg-[#292827] rounded-[1.25rem] sm:rounded-[2rem] lg:rounded-[2.5rem] [corner-shape:squircle]" />
              <div className="relative z-10 bg-white border-2 border-[#292827] rounded-[1.25rem] sm:rounded-[2rem] lg:rounded-[2.5rem] [corner-shape:squircle] overflow-hidden">
                <div className="h-44 sm:h-52 lg:h-60 overflow-hidden bg-[#E9F6F4]">
                  <img src={s.img} alt="" aria-hidden="true" className="w-full h-full object-cover" />
                </div>
                <div className="p-5 sm:p-6 lg:p-8 text-center">
                  <span className={`inline-block px-3 py-1 rounded-full text-[0.75rem] sm:text-[0.8125rem] font-bold mb-3 ${s.accent === "teal" ? "bg-teal/10 text-teal-text" : "bg-magenta/10 text-magenta-text"}`}>
                    {s.kind}
                  </span>
                  <h3 className="font-black text-[1.25rem] sm:text-[1.5rem] lg:text-[1.75rem] text-[#292827] mb-2">{s.title}</h3>
                  <p className="text-[0.875rem] sm:text-[0.9375rem] text-ink/50 mb-4">{s.address}</p>
                  <div className="flex flex-wrap justify-center gap-2 mb-5 sm:mb-6">
                    {s.fields.map((f) => (
                      <span key={f} className="px-3 py-1 bg-[#F6F6F6] border border-ink/10 rounded-[0.5rem] [corner-shape:squircle] text-[0.75rem] sm:text-[0.8125rem] text-ink/70 font-medium">{f}</span>
                    ))}
                  </div>
                  <a href="#" className="inline-flex items-center justify-center w-full px-6 py-3 bg-[#21295A] text-white font-extrabold text-[0.875rem] sm:text-[1rem] rounded-[0.625rem] [corner-shape:squircle] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                    پیش‌ثبت‌نام {s.id === "boys" ? "پسرانه" : "دخترانه"}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}