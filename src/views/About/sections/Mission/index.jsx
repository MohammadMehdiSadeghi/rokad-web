import Container from "../../../../layout/Container";

const patternBg = "/assets/Pattern/layout-pattern.png";
const cardPattern = "/assets/about/StatsSection/TrustSection-Pattern.png";

const missions = [
  {
    theme: "magenta",
    title: "اکوسیستم استارتاپی نوجوونا",
    body: "یه اکوسیستم زنده که نوجوونا توش فرصت تجربه‌کردن و شکست خوردن رو داشته باشن و بر اساس استعدادها و توانمندی‌هاشون، رشد کنن و توی مسیر کارآفرینی هدایت بشن.",
    rotation: "rotate-[1deg]",
  },
  {
    theme: "teal",
    title: "پرورش نوجوونای ارزش‌آفرین",
    body: "توی رکاد به نوجوونا کمک می‌کنیم آینده روشنی برای خودشون طراحی کنن؛ سریع‌تر توی مسیر رشد قرار بگیرن، توی دنیای نوجوونی وارد اکوسیستم استارتاپی بشن و به آدم‌های ارزش‌آفرین تبدیل بشن.",
    rotation: "rotate-[-1deg]",
  },
];

const THEME_MAP = {
  magenta: { bg: "bg-magenta", shadowBg: "bg-[#21295A]" },
  teal: { bg: "bg-teal", shadowBg: "bg-[#21295A]" },
};

const squircle = "rounded-tr-[2rem] rounded-bl-[2rem] rounded-tl-none rounded-br-none [corner-shape:squircle]";

export default function AboutMission() {
  return (
    <section className="relative py-[4rem] sm:py-[5rem] lg:py-[6rem] w-full px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]">
        <img src={patternBg} alt="" aria-hidden="true" className="w-full h-full object-cover opacity-50" />
      </div>

      <Container className="relative z-10">
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <h2 className="font-black text-[1.5rem] sm:text-[2.25rem] lg:text-[3.3125rem] leading-[1.3] mb-4 sm:mb-6">
            <span className="inline-block rotate-1 text-teal">ماموریت</span>{" "}
            <span className="inline-block -rotate-1 text-ink">و</span>{" "}
            <span className="inline-block rotate-1 text-magenta">چشم‌انداز</span>{" "}
            <span className="inline-block -rotate-1 text-ink">رکاد</span>
          </h2>
          <p className="text-[0.875rem] sm:text-[1rem] lg:text-[1.125rem] text-ink/60 max-w-xl mx-auto leading-[1.8]">
            دوتا جمله که پشت هر تصمیم توی رکاده، اگه اینا رو بفهمی، رکاد رو فهمیدی.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {missions.map((m) => {
            const t = THEME_MAP[m.theme];
            return (
              <div key={m.title} className={`relative ${m.rotation} transition-all duration-500 hover:rotate-0 hover:-translate-y-1`}>
                {/* شدو مشکی سخت — زیر کارت */}
                <div className={`absolute top-[0.25rem] left-[0.25rem] w-full h-full ${t.shadowBg} ${squircle} opacity-100`} />
                {/* خود کارت */}
                <div className={`relative z-10 ${t.bg} border-2 border-black ${squircle} p-6 sm:p-8 lg:p-10 min-h-[16rem] sm:min-h-[18rem] lg:min-h-[20rem] flex flex-col justify-between overflow-hidden`}>
                  {/* پترن */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <img src={cardPattern} alt="" aria-hidden="true" className="w-full h-full object-cover opacity-20 mix-blend-overlay" />
                  </div>
                  <div className="relative z-10 flex flex-col gap-4 sm:gap-5">
                    <h3 className="font-black text-[1.25rem] sm:text-[1.625rem] lg:text-[1.875rem] leading-[1.3] text-white">{m.title}</h3>
                    <p className="text-[0.875rem] sm:text-[1rem] leading-[1.8] text-white/85">{m.body}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}