import Container from "../../../../layout/Container";

const patternBg = "/assets/Pattern/layout-pattern.png";

const milestones = [
  {
    year: "۱۳۹۵",
    label: "سال شروع",
    title: "مسئله‌ای که رکاد براش ساخته شد",
    body: "همین‌جا بود که مؤسسه آموزشی و شتاب‌دهی رکاد پایه‌گذاری شد. رؤیای پرورش نوجوونان ارزش‌آفرین، رکاد از سال ۱۳۹۵ شروع کرد به کار کردن.",
    rotation: "rotate-[2deg]",
    accentColor: "text-teal",
  },
  {
    year: "۱۳۹۸",
    label: "سال تأسیس هنرستان",
    title: "تأسیس اولین هنرستان استارتاپی ایران",
    body: "سال ۱۳۹۸ نقطه عطف رکاد بود: تأسیس اولین هنرستان استارتاپی ایران در مشهد. امروز با گذشت ۶ سال، این مدرسه نرخ اشتغال بیش از ۷۵٪ رو بین دانش‌آموختگانش ثبت کرده.",
    rotation: "-rotate-[2deg]",
    accentColor: "text-magenta",
  },
  {
    year: "امروز",
    label: "سالی که ادامه داره",
    title: "یه اکوسیستم، نه فقط یه مدرسه",
    body: "امروز رکاد به اکوسیستم زنده‌ای تبدیل شده که توش استارتاپ‌ها، بوت‌کمپ‌ها و استودیو نوآوری دیجیتال چیده کنار هم کار می‌کنن.",
    rotation: "rotate-[1.5deg]",
    accentColor: "text-orange",
  },
];

export default function AboutStory() {
  return (
    <section id="story" className="relative py-[4rem] sm:py-[5rem] lg:py-[6rem] w-full px-4 sm:px-6 lg:px-8 bg-[#F6F6F6] overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]">
        <img src={patternBg} alt="" aria-hidden="true" className="w-full h-full object-cover opacity-50" />
      </div>

      <Container className="relative z-10">
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <h2 className="font-black text-[1.5rem] sm:text-[2.25rem] lg:text-[3.3125rem] leading-[1.3] mb-4 sm:mb-6">
            <span className="inline-block rotate-1">از</span>{" "}
            <span className="inline-block text-teal -rotate-1">۱۳۹۵</span>{" "}
            <span className="inline-block rotate-1">تا</span>{" "}
            <span className="inline-block -rotate-1 text-magenta">امروز</span>
          </h2>
          <p className="text-[0.875rem] sm:text-[1rem] lg:text-[1.125rem] text-ink/60 max-w-2xl mx-auto leading-[1.8]">
            داستانی که با یک سؤال ساده شروع شد؛ چرا نوجوونا باید تا آخر
            دبیرستان صبر کنن که با دنیای واقعی روبه‌رو بشن؟
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 -translate-x-[0.0625rem] top-0 bottom-0 w-[0.125rem] bg-ink/10" />
          <div className="flex flex-col gap-10 sm:gap-14 lg:gap-16">
            {milestones.map((m, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={m.year} className={`relative flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-12 ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                  <div className={`flex-1 ${isEven ? "lg:text-right" : "lg:text-left"}`}>
                    <div className={`inline-block mb-4 ${m.rotation}`}>
                      <span className="relative inline-block">
                        <span className="absolute inset-0 translate-x-[0.125rem] translate-y-[0.125rem] bg-ink/10 rounded-[0.75rem] [corner-shape:squircle]" />
                        <span className="relative bg-[#FFD641] border-[0.09375rem] border-ink rounded-[0.75rem] [corner-shape:squircle] px-4 sm:px-6 py-1.5 sm:py-2 font-black text-[1.25rem] sm:text-[1.75rem] text-ink">{m.year}</span>
                      </span>
                    </div>
                    <p className="text-[0.75rem] sm:text-[0.8125rem] text-ink/50 font-medium mb-2">{m.label}</p>
                    <h3 className={`font-black text-[1.125rem] sm:text-[1.5rem] lg:text-[1.75rem] leading-[1.3] mb-3 sm:mb-4 ${m.accentColor}`}>{m.title}</h3>
                    <p className="text-[0.875rem] sm:text-[1rem] leading-[1.8] text-ink/70 max-w-xl">{m.body}</p>
                  </div>
                  <div className="hidden lg:flex items-center justify-center w-4 h-4 flex-shrink-0">
                    <div className="w-3.5 h-3.5 rounded-full bg-white border-[0.1875rem] border-teal" />
                  </div>
                  <div className="hidden lg:block flex-1" />
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
