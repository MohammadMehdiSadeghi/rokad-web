import Container from "../../../../layout/Container";

const patternBg = "/assets/about/Team/patterngreen.png";
const imgDir = "/assets/about/Team";
const patternTeal = "/assets/about/Team/patterngreen.png";
const patternNavy = "/assets/about/Team/Patternblue.png";
const patternMagenta = "/assets/about/Team/Patternpink.png";

// ۸ عضو تیم — رنگ بالای کارت (Frame 1000006467) دقیقاً از فیگما
const teamMembers = [
  {
    name: "حامد آرون",
    role: "مدیرعامل و بنیانگذار رکاد",
    badge: "بنیانگذار",
    img: `${imgDir}/hamed.webp`,
    color: "#59BBAF",
    pattern: patternTeal,
  },
  {
    name: "علیرضا عزیزپور",
    role: "راهبر ارشد / مدیرعامل رکاد",
    badge: "مدیرعامل",
    img: `${imgDir}/alireza.webp`,
    color: "#59BBAF",
    pattern: patternTeal,
  },
  {
    name: "امیرحسین امیریان",
    role: "راهبر هنرستان پسرانه رکاد",
    badge: "راهبر",
    img: `${imgDir}/amirhossein.webp`,
    color: "#202A5A",
    pattern: patternNavy,
  },
  {
    name: "سعید افضلی",
    role: "دستیار اجرایی مدارس رکاد",
    badge: "دستیار اجرایی",
    img: `${imgDir}/saied.webp`,
    color: "#202A5A",
    pattern: patternNavy,
  },
  {
    name: "عماد پورحسنی",
    role: "معاون هنرستان پسرانه رکاد",
    badge: "معاون",
    img: `${imgDir}/emad.webp`,
    color: "#202A5A",
    pattern: patternNavy,
  },
  {
    name: "محمد کمالی",
    role: "مدیرعامل و بنیانگذار",
    badge: "بنیانگذار",
    img: null,
    color: "#E0195B",
    pattern: patternMagenta,
  },
  {
    name: "رویا دولت‌آبادی",
    role: "راهبر هنرستان دخترانه رکاد",
    badge: "راهبر",
    img: `${imgDir}/roya.webp`,
    color: "#E0195B",
    pattern: patternMagenta,
  },
  {
    name: "مبینا فلاح",
    role: "معاون هنرستان دخترانه رکاد",
    badge: "معاون",
    img: `${imgDir}/mobina.webp`,
    color: "#E0195B",
    pattern: patternMagenta,
  },
];

// رنگ تیره‌تر برای بوردر/شدو بج (از فیگما)
function darker(hex) {
  const c = parseInt(hex.slice(1), 16);
  const r = Math.max(0, ((c >> 16) & 255) - 40);
  const g = Math.max(0, ((c >> 8) & 255) - 40);
  const b = Math.max(0, (c & 255) - 40);
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
}

function TeamCard({ member, index }) {
  return (
    <div className="relative">
      {/* شدو 4px سخت — DROP(4,4) از فیگما */}
      <div
        aria-hidden="true"
        className="absolute top-[0.25rem] left-[0.25rem] w-full h-full"
        style={{ backgroundColor: "#292827", borderRadius: "25px 0 25px 0" }}
      />
      {/* خود کارت — bg #EAEAE9 از فیگما */}
      <div
        className="relative z-10 flex flex-col overflow-hidden bg-[#EAEAE9]"
        style={{
          border: "2px solid #292827",
          borderRadius: "25px 0 25px 0",
        }}
      >
        {/* بالای کارت — پسزمینه رنگی + پترن + عکس */}
        <div
          className="relative w-full aspect-[281/250] overflow-hidden"
          style={{
            backgroundColor: member.color,
            borderBottom: "2px solid #292827",
          }}
        >
          <img
                      src={member.pattern}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover opacity-70 select-none"
                    />
          {member.img ? (
            <img
              src={member.img}
              alt={member.name}
              className="relative z-10 w-full h-full object-cover object-top"
            />
          ) : (
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              <span className="text-white font-black text-[4rem] leading-none select-none">
                {member.name.charAt(0)}
              </span>
            </div>
          )}
        </div>

        {/* پایین کارت */}
        <div className="p-4 sm:p-5 flex flex-col gap-1.5">
          <h3 className="font-extrabold text-[1.25rem] sm:text-[1.375rem] text-[#292827] text-right">
            {member.name}
          </h3>
          <p className="text-[0.85rem] sm:text-[0.9375rem] font-medium text-[#292827]/80 text-right leading-[1.5]">
            {member.role}
          </p>

          {/* خط جداکننده */}
          <div className="w-full h-px bg-[#292827]/20 my-1.5" />

          {/* ردیف پایین: آیکون‌ها + بج */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="w-[25px] h-[25px] flex items-center justify-center text-[0.6rem] text-white/70"
                  style={{
                    backgroundColor: member.color,
                    border: `1px solid ${darker(member.color)}`,
                    borderRadius: "4.6px 0 4.6px 0",
                    boxShadow: "1px 1px 0 0 " + darker(member.color),
                  }}
                >
                  ✦
                </span>
              ))}
            </div>
            <span
              className="inline-flex items-center text-[0.7rem] font-bold text-white whitespace-nowrap"
              style={{
                backgroundColor: member.color,
                border: `1px solid ${darker(member.color)}`,
                borderRadius: "6px 0 6px 0",
                padding: "1px 11px",
                boxShadow: "1px 1px 0 0 " + darker(member.color),
              }}
            >
              {member.badge}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AboutTeam() {
  return (
    <section className="relative py-[4rem] sm:py-[5rem] lg:py-[6rem] w-full px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">

          <Container className="relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-black text-[2.5rem] sm:text-[3rem] lg:text-[3.8125rem] leading-[1.2] mb-4 text-[#292827]">
            <span>آدم‌هایی</span> <span className="text-[#202A5A]">که</span>{" "}
            <span>هرروز</span> <span className="text-[#59BBAF]">رکاد</span>{" "}
            <span>رو</span> <span className="text-[#E0195B]">می‌سازن</span>
          </h2>
          <p className="text-[0.875rem] sm:text-[1rem] text-black max-w-2xl mx-auto leading-[1.8]">
            پشت هر رویداد، هر جلسه و هر پروژه، یه تیم پرانرژی هست. با چند نفر از
            این آدم‌ها آشنا شو.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-7 max-w-6xl mx-auto">
          {teamMembers.map((m, i) => (
            <TeamCard key={m.name} member={m} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
