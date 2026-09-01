import Container from "../../../../layout/Container";

const patternBg = "/assets/Pattern/layout-pattern.webp";
const imgDir = "/assets/about/Team";

// ۸ عضو تیم — عکس از فیگما (محمد کمالی عکس نداشت → آواتار)
const teamMembers = [
  { name: "حامد آرون", role: "مدیرعامل و بنیانگذار رکاد", badge: "بنیانگذار", img: `${imgDir}/hamed.webp`, blob: "#44C0B2", badgeBg: "#D9F2EE", badgeText: "#1F7A72" },
  { name: "علیرضا عزیزپور", role: "راهبر ارشد / مدیرعامل رکاد", badge: "مدیرعامل", img: `${imgDir}/alireza.webp`, blob: "#4CB6AA", badgeBg: "#D9F2EE", badgeText: "#1F7A72" },
  { name: "امیرحسین امیریان", role: "راهبر هنرستان پسرانه رکاد", badge: "راهبر", img: `${imgDir}/amirhossein.webp`, blob: "#293660", badgeBg: "#E4E7F0", badgeText: "#293660" },
  { name: "سعید افضلی", role: "دستیار اجرایی مدارس رکاد", badge: "دستیار اجرایی", img: `${imgDir}/saied.webp`, blob: "#202A5A", badgeBg: "#E4E7F0", badgeText: "#293660" },
  { name: "عماد پورحسنی", role: "معاون هنرستان پسرانه رکاد", badge: "معاون", img: `${imgDir}/emad.webp`, blob: "#202A5A", badgeBg: "#E4E7F0", badgeText: "#293660" },
  { name: "محمد کمالی", role: "راهبر هنرستان دخترانه رکاد", badge: "راهبر", img: null, blob: "#DE1D5D", badgeBg: "#FADCE7", badgeText: "#B0134A" },
  { name: "رویا دولت‌آبادی", role: "معاون هنرستان دخترانه رکاد", badge: "معاون", img: `${imgDir}/roya.webp`, blob: "#E0195B", badgeBg: "#FADCE7", badgeText: "#B0134A" },
  { name: "مبینا فلاح", role: "مدیرعامل و بنیانگذار", badge: "بنیانگذار", img: `${imgDir}/mobina.webp`, blob: "#44C0B2", badgeBg: "#D9F2EE", badgeText: "#1F7A72" },
];

const squircle = "rounded-tl-[1.5rem] rounded-br-[1.5rem] rounded-tr-none rounded-bl-none [corner-shape:squircle]";

export default function AboutTeam() {
  return (
    <section className="relative py-[4rem] sm:py-[5rem] lg:py-[6rem] w-full px-4 sm:px-6 lg:px-8 bg-[#F6F6F6] overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]">
        <img src={patternBg} alt="" aria-hidden="true" className="w-full h-full object-cover opacity-50" />
      </div>

      <Container className="relative z-10">
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <h2 className="font-black text-[1.5rem] sm:text-[2.25rem] lg:text-[3.3125rem] leading-[1.3] mb-4 sm:mb-6 text-[#292827]">
            <span className="inline-block rotate-1">آدم‌هایی</span>{" "}
            <span className="inline-block -rotate-1 text-navy-alt">که</span>{" "}
            <span className="inline-block rotate-1">هر روز</span>{" "}
            <span className="inline-block -rotate-1 text-teal">رکاد</span>{" "}
            <span className="inline-block rotate-1">رو</span>{" "}
            <span className="inline-block -rotate-1 text-magenta">می‌سازن</span>
          </h2>
          <p className="text-[0.875rem] sm:text-[1rem] lg:text-[1.125rem] text-[#6B7280] max-w-2xl mx-auto leading-[1.8]">
            پشت هر رویداد، هر جلسه و هر پروژه، یه تیم پرانرژی هست. با چند نفر از این آدم‌ها آشنا شو.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-7 lg:gap-8">
          {teamMembers.map((m, i) => (
            <div key={m.name} className="relative">
              {/* شدو تیره — استیکری */}
              <div
                aria-hidden="true"
                className={`absolute top-[5px] left-[5px] w-full h-full bg-[#292827] ${squircle}`}
              />
              {/* کارت */}
              <div
                className={`relative z-10 h-full ${squircle} bg-white border-2 border-[#292827] flex flex-col items-center text-center px-3 sm:px-4 pt-6 sm:pt-8 pb-5 sm:pb-6 overflow-hidden`}
              >
                {/* عکس با بلاپ رنگی پشتش */}
                <div className="relative mb-4 sm:mb-5">
                  {/* بلاپ رنگی */}
                  <div
                    aria-hidden="true"
                    className="absolute top-2 left-1/2 -translate-x-1/2 w-[5.5rem] h-[5.5rem] sm:w-[6.5rem] sm:h-[6.5rem] lg:w-[7rem] lg:h-[7rem] rounded-[2rem] [corner-shape:squircle] rotate-12"
                    style={{ backgroundColor: m.blob, opacity: 0.25 }}
                  />
                  {/* عکس یا آواتار */}
                  {m.img ? (
                    <img
                      src={m.img}
                      alt={m.name}
                      loading="lazy"
                      draggable={false}
                      className="relative z-10 w-[4.5rem] h-[4.5rem] sm:w-[5.25rem] sm:h-[5.25rem] lg:w-[5.75rem] lg:h-[5.75rem] rounded-full object-cover border-2 border-[#292827] select-none"
                    />
                  ) : (
                    <div className="relative z-10 w-[4.5rem] h-[4.5rem] sm:w-[5.25rem] sm:h-[5.25rem] lg:w-[5.75rem] lg:h-[5.75rem] rounded-full bg-[#E8EAF2] border-2 border-[#292827] flex items-center justify-center">
                      <span className="font-black text-[1.5rem] sm:text-[1.75rem] text-[#6B7280]">
                        {m.name.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>

                <h3 className="font-black text-[0.9375rem] sm:text-[1.0625rem] lg:text-[1.125rem] text-[#292827] leading-snug mb-1">
                  {m.name}
                </h3>
                <p className="text-[0.75rem] sm:text-[0.8125rem] text-[#6B7280] leading-snug mb-3 sm:mb-4">
                  {m.role}
                </p>

                {/* بج */}
                <span
                  className="inline-block px-3 py-1 text-[0.6875rem] sm:text-[0.75rem] font-extrabold rounded-[0.5rem] [corner-shape:squircle] border"
                  style={{
                    backgroundColor: m.badgeBg,
                    color: m.badgeText,
                    borderColor: m.badgeText,
                  }}
                >
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