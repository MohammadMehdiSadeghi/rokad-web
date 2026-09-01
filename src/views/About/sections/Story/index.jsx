import Container from "../../../../layout/Container";

const patternBg = "/assets/Pattern/layout-pattern.png";

const milestones = [
  {
    year: "۱۳۹۵",
    label: "سال شروع",
    titleParts: [
      { text: "مسئله‌ای که ", color: "text-[#21295A]" },
      { text: "رکاد", color: "text-teal" },
      { text: " براش ساخته شد", color: "text-[#21295A]" },
    ],
    body: "مهم‌ترین چیزی که مؤسسه آموزشی و شتاب‌دهی رکاد بهش می‌پردازه، فراهم‌سازی بستری برای رشد و پرورش نوجوونای ارزش‌آفرینه. رکاد از سال ۱۳۹۵ شروع کرد به کار متفاوت؛ به جای اینکه فقط مثل بقیه مدارس درس بده، تصمیم گرفت روی مخاطب نوجوان تمرکز کنه — با هدف استعدادیابی، رشد و تربیت نیروی انسانی مولد در اکوسیستم استارتاپی و صنایع خلاق و دانش‌بنیان. استارتاپ یا شرکت نوپا، کسب‌وکاریه که با هدف ارائه‌ی محصول یا خدمت جدید، عموماً حول تکنولوژی شکل می‌گیره و پتانسیل رشد بالایی داره. حالا با از بین رفتن مشاغل سنتی، آینده‌ی کسب‌وکارها متعلق به استارتاپ‌هاست. رکاد اومد که نوجوونا رو زودتر آماده‌ی همین بکنه.",
    textColor: "text-teal",
    lightBg: "bg-teal/10",
    dotColor: "border-teal",
    lineColor: "#58BDAF",
  },
  {
    year: "۱۳۹۸",
    label: "سال تأسیس هنرستان",
    titleParts: [
      { text: "تأسیس ", color: "text-[#21295A]" },
      { text: "اولین", color: "text-magenta" },
      { text: " هنرستان استارتاپی ایران", color: "text-[#21295A]" },
    ],
    body: "نقطه‌ی عطف رکاد بود: تأسیس اولین هنرستان استارتاپی ایران در مشهد. اما این فقط یه اسم نبود؛ یه تعهد بود. تعهد به اینکه دانش‌آموز رکاد نه فقط به دیپلم، بلکه به مسیر شغلی روشن برسه. امروز با گذشت ۶ سال، این مدرسه نرخ اشتغال بیش از ۷۵٪ رو بین دانش‌آموختگانش ثبت کرده. از مهر ۱۴۰۱ هم دبیرستان دخترانه رکاد در مشهد راه‌اندازی شد و دخترها هم به این اکوسیستم اضافه شدن. حالا هر دو هنرستان دخترانه و پسرانه، به صورت موازی، همین مسیر رو ادامه می‌دن.",
    textColor: "text-magenta",
    lightBg: "bg-magenta/10",
    dotColor: "border-magenta",
    lineColor: "#E0195B",
  },
  {
      year: "امروز",
      label: "سالی که ادامه‌داره",
      titleParts: [
        { text: "یه اکوسیستم،", color: "text-orange" },
        { text: " نه فقط یه مدرسه", color: "text-[#21295A]" },
      ],
      body: "امروز رکاد یه اکوسیستم زنده‌ست که توش استارتاپ ویکندها، کالج تابستانه، فرهنگستان نوآوری و استودیو نوآوری دیجیتال کنار هم کار می‌کنن. +۲۲۰۰ نوجوان رکادی، ۳۱ استارتاپ ویکند، +۵۶ رویداد و همایش کارآفرینانه، و ۵ شهر میزبان — همه‌ی این‌ها بخشی از تصویره که هر روز داره کامل‌تر می‌شه. هدف ما ساده‌ست: نوجوان با دیپلم عادی از دبیرستان بیرون نیاد، بلکه با چند پروژه‌ی واقعی، تجربه‌ی کار تیمی، و ذهنیت استارتاپی.",
      textColor: "text-orange",
      lightBg: "bg-orange/10",
      dotColor: "border-orange",
      lineColor: "#F5A623",
    },
];

export default function AboutStory() {
  return (
    <section
      id="story"
      className="relative py-[4rem] sm:py-[5rem] lg:py-[6rem] w-full px-4 sm:px-6 lg:px-8 bg-white overflow-hidden"
    >
      {/* ── Background Pattern ── */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]">
        <img src={patternBg} alt="" aria-hidden="true" className="w-full h-full object-cover opacity-50" />
      </div>

      <Container className="relative z-10">
        {/* ── تیتر: از ۱۳۹۵ تا امروز ── */}
        <h2 className="text-center font-black text-[1.5rem] sm:text-[2.25rem] lg:text-[3.3125rem] leading-[1.3] mb-4 sm:mb-6">
                  <span className="inline-block rotate-1">از</span>{" "}
                  <span className="inline-block text-teal -rotate-1">۱۳۹۵</span>{" "}
                  <span className="inline-block rotate-1">تا</span>{" "}
                  <span className="inline-block text-magenta -rotate-1">امروز</span>
                </h2>

        <p className="text-center text-[0.875rem] sm:text-[1rem] lg:text-[1.125rem] text-ink/60 max-w-2xl mx-auto leading-[1.8] mb-12 sm:mb-16 lg:mb-20">
          داستانی که با یه سؤال ساده شروع شد: چرا نوجوونا باید تا آخر
          دبیرستان صبر کنن تا با دنیای واقعی روبه‌رو بشن؟
        </p>

        {/* ── تایم‌لاین ۳ ستونه: سال | خطچین | متن ── */}
                <div className="relative max-w-[60rem] mx-auto">
                  {milestones.map((m, i) => (
                    <div key={m.year} className="relative grid grid-cols-[auto_auto_1fr] items-start gap-4 sm:gap-6 lg:gap-8">

                      {/* ستون ۱: عدد سال + متن — سمت راست */}
                      <div className="flex flex-col items-end flex-shrink-0 w-20 sm:w-28 lg:w-36 text-left">
                        <span className="text-[2.5rem] sm:text-[4rem] lg:text-[5rem] leading-none font-black whitespace-nowrap">
                          <span className={m.textColor}>{m.year}</span>
                        </span>
                        <span className={`mt-2 sm:mt-3 text-[0.875rem] sm:text-[1rem] font-bold ${m.textColor}`}>
                          {m.label}
                        </span>
                      </div>

                      {/* ستون ۲: دایره + خطچین پیوسته تا انتهای ردیف — وسط */}
                      <div className="flex flex-col items-center flex-shrink-0 w-6 sm:w-8 self-stretch">
                        <div className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white border-[0.1875rem] ${m.dotColor} z-10`} />
                        <div className="w-[0.125rem] flex-1"
                          style={{
                            backgroundImage: `repeating-linear-gradient(to bottom, ${m.lineColor} 0 12px, transparent 12px 20px)`,
                          }}
                        />
                      </div>

                      {/* ستون ۳: محتوای متنی — سمت چپ (پدینگ پایین اینجا تا خط وصل بمونه) */}
                      <div className="pt-2 pb-12 sm:pb-16 lg:pb-20">
                        <h3 className="font-black text-[1.375rem] sm:text-[1.875rem] lg:text-[2.125rem] leading-[1.3] mb-3 sm:mb-4 text-[#21295A]">
                          {m.titleParts.map((p, i) => (
                            <span key={i} className={p.color}>
                              {p.text}
                            </span>
                          ))}
                        </h3>
                        <p className="text-[0.875rem] sm:text-[1rem] leading-[1.9] text-ink/70 max-w-xl">
                          {m.body}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
      </Container>
    </section>
  );
}