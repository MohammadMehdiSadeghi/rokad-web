import Container from "../../../../layout/Container";

const patternBg = "/assets/Pattern/layout-pattern.png";
const imgDir = "/assets/about/Team";

// ۸ عضو تیم — رنگ پس‌زمینه بالای هر کارت طبق فیگما
const teamMembers = [
  {
    name: "حامد آرون",
    role: "مدیرعامل و بنیان‌گذار رکاد",
    badge: "بنیان‌گذار",
    img: `${imgDir}/hamed.webp`,
    bg: "bg-[#44C0B2]", // تیل
  },
  {
    name: "علیرضا عزیزپور",
    role: "راهبر ارشد / مدیرعامل رکاد",
    badge: "مدیرعامل",
    img: `${imgDir}/alireza.webp`,
    bg: "bg-[#44C0B2]", // تیل
  },
  {
    name: "امیرحسین امیریان",
    role: "راهبر هنرستان پسرانه رکاد",
    badge: "راهبر",
    img: `${imgDir}/amirhossein.webp`,
    bg: "bg-[#202A5A]", // سرمه‌ای
  },
  {
    name: "سعید افضلی",
    role: "دستیار اجرایی مدارس رکاد",
    badge: "دستیار اجرایی",
    img: `${imgDir}/saied.webp`,
    bg: "bg-[#202A5A]", // سرمه‌ای
  },
  {
    name: "عماد پورحسنی",
    role: "معاون هنرستان پسرانه رکاد",
    badge: "معاون",
    img: `${imgDir}/emad.webp`,
    bg: "bg-[#202A5A]", // سرمه‌ای
  },
  {
    name: "محمد کمالی",
    role: "مدیرعامل و بنیان‌گذار",
    badge: "بنیان‌گذار",
    img: null,
    bg: "bg-[#E0195B]", // صورتی
  },
  {
    name: "رویا دولت‌آبادی",
    role: "راهبر هنرستان دخترانه رکاد",
    badge: "راهبر",
    img: `${imgDir}/roya.webp`,
    bg: "bg-[#E0195B]", // صورتی
  },
  {
    name: "مبینا فلاح",
    role: "معاون هنرستان دخترانه رکاد",
    badge: "معاون",
    img: `${imgDir}/mobina.webp`,
    bg: "bg-[#E0195B]", // صورتی
  },
];

// ۳ آیکون شبکه اجتماعی — مربع کوچک
const socialIcons = ["in", "be", "ig"];

export default function AboutTeam() {
  return (
    <section className="relative w-full py-[4rem] sm:py-[5rem] lg:py-[6rem] px-4 sm:px-6 lg:px-8 bg-[#F8FAF9] overflow-hidden">
      {/* پترن پس‌زمینه */}
      <div className="absolute inset-0 z-0">
        <img src={patternBg} alt="" aria-hidden="true" draggable="false" className="w-full h-full object-cover opacity-40 select-none" />
      </div>

      <Container>
        <div className="relative z-10 text-center mb-[2.5rem] sm:mb-[3rem]">
          <h2 className="font-black text-[1.5rem] sm:text-[2.25rem] lg:text-[3rem] leading-[1.3] mb-4">
            <span className="inline-block rotate-1">آدم‌هایی</span>{" "}
            <span className="inline-block -rotate-1 text-[#202A5A]">که</span>{" "}
            <span className="inline-block rotate-1">هر روز</span>{" "}
            <span className="inline-block -rotate-1 text-teal">رکاد</span>{" "}
            <span className="inline-block rotate-1">رو</span>{" "}
            <span className="inline-block -rotate-1 text-[#E0195B]">می‌سازن</span>
          </h2>
          <p className="text-[0.9375rem] sm:text-[1.0625rem] text-[#6B7280] leading-[1.8] max-w-xl mx-auto">
            پشت هر رویداد، هر جلسه و هر پروژه، یه تیم پرانرژی هست. با چند نفر از این آدم‌ها آشنا شو.
          </p>
        </div>

        <div className="relative z-10 grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {teamMembers.map((m) => (
            <div
              key={m.name}
              className="group relative flex flex-col bg-white border-2 border-[#292827] [corner-shape:squircle] rounded-[0_1.25rem_0_1.25rem] shadow-[5px_5px_0_0_#292827] overflow-hidden transition-transform duration-300 hover:-translate-y-1"
            >
              {/* بخش بالایی: پس‌زمینه رنگی + عکس */}
              <div className={`relative w-full aspect-[6/5] ${m.bg} flex items-end justify-center overflow-hidden`}>
                {m.img ? (
                  <img
                    src={m.img}
                    alt={m.name}
                    loading="lazy"
                    className="w-full h-full object-cover object-top select-none"
                  />
                ) : (
                  /* پترن هندسی برای کسی که عکس نداره */
                  <div className="absolute inset-0 opacity-30">
                    <svg viewBox="0 0 200 200" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                      <polygon points="0,0 90,10 60,80 10,60" fill="white" />
                      <polygon points="120,0 200,30 180,100 100,70" fill="white" />
                      <polygon points="30,120 120,100 140,180 40,200" fill="white" />
                      <polygon points="150,140 200,130 200,200 130,200" fill="white" />
                    </svg>
                  </div>
                )}
              </div>

              {/* بخش پایینی: باکس سفید */}
              <div className="flex flex-col flex-1 p-3 sm:p-4 bg-white">
                <h3 className="font-black text-[0.9375rem] sm:text-[1.0625rem] text-[#21295A] leading-[1.3] text-right">
                  {m.name}
                </h3>
                <p className="mt-1 text-[0.75rem] sm:text-[0.8125rem] text-[#9CA3AF] leading-[1.6] text-right">
                  {m.role}
                </p>

                {/* ردیف پایین: بج سمت راست + آیکون‌ها سمت چپ (طبق طرح) */}
                <div className="mt-3 pt-3 border-t border-dashed border-[#D1D1D1] flex items-center justify-between gap-2">
                  <span
                    className={`order-2 text-[0.6875rem] sm:text-[0.75rem] font-bold text-white px-2.5 py-1 rounded-[0_0.375rem_0_0.375rem] ${m.bg}`}
                  >
                    {m.badge}
                  </span>
                  <div className="order-1 flex items-center gap-1.5">
                    {socialIcons.map((ic) => (
                      <span
                        key={ic}
                        className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center bg-white border border-[#D1D1D1] rounded-[0.25rem] text-[0.5rem] text-[#9CA3AF] font-bold cursor-pointer hover:border-[#292827] hover:text-[#292827] transition-colors"
                      >
                        {ic === "in" ? "in" : ic === "be" ? "B" : "◈"}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}