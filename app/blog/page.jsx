import Link from "next/link";
import Container from "../../src/layout/Container";
import fallbackBlogs from "../../src/lib/fallback/blog";

// ─── تبدیل رقم به فارسی ───
const faNum = (s) => String(s).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);

// ─── حروف اول نویسنده (مثلاً «تیم رکاد» → «ت.ر») ───
const initialsOf = (name) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join(".");

// ─── ۵ پرسونای بلاگ (رنگ‌ها از دیزاین سیستم رکاد) ───
const PERSONAS = [
  {
    id: "eco",
    shadow: "#2e7068",
    label: "اکوسیستم",
    emoji: "🌿",
    color: "#58bdaf",
    tint: "#f2faf9",
    gradA: "linear-gradient(135deg, #7ed3c6 0%, #58bdaf 100%)",
    gradB: "linear-gradient(135deg, #58bdaf 0%, #2e7068 100%)",
    theme: "قصه‌ی ساخته‌شدن",
    rest: "یک اکوسیستم",
    desc: "از رویدادها تا شبکه‌سازی، از کافه تا شعبه‌های جدید — چیزی که رکاد رو رکاد کرده.",
  },
  {
    id: "male",
    shadow: "#0f1430",
    label: "هنرجویان",
    emoji: "🔵",
    color: "#21295a",
    tint: "#f4f5fb",
    gradA: "linear-gradient(135deg, #3b4b8f 0%, #21295a 100%)",
    gradB: "linear-gradient(135deg, #21295a 0%, #0f1430 100%)",
    theme: "مسیر",
    rest: "فنی و شغلی",
    desc: "راهنمای کاربردی برای هنرجویانی که تازه وارد مسیر یادگیری و بازار کار شدن.",
  },
  {
    id: "female",
    shadow: "#a81344",
    label: "دخترها",
    emoji: "🌸",
    color: "#e0195b",
    tint: "#fefafb",
    gradA: "linear-gradient(135deg, #e699b5 0%, #e0195b 100%)",
    gradB: "linear-gradient(135deg, #e0195b 0%, #a81344 100%)",
    theme: "دخترانِ",
    rest: "اکوسیستم",
    desc: "فرصت‌ها، چالش‌ها و روایت‌های اختصاصی از فضای رکاد برای دخترها.",
  },
  {
    id: "college",
    shadow: "#a8641a",
    label: "کالج",
    emoji: "🟠",
    color: "#f4971f",
    tint: "#fef6e8",
    gradA: "linear-gradient(135deg, #ffd641 0%, #f4971f 100%)",
    gradB: "linear-gradient(135deg, #f4971f 0%, #a8641a 100%)",
    theme: "دانشگاه",
    rest: "یا هنرستان؟",
    desc: "تصمیم‌های سرنوشت‌ساز درباره‌ی مسیر تحصیلی — بدون تعصب، فقط داستان‌های واقعی.",
  },
  {
    id: "club",
    shadow: "#2b1236",
    label: "کلوپ",
    emoji: "🟣",
    color: "#4f215a",
    tint: "#f3eef7",
    gradA: "linear-gradient(135deg, #8654b3 0%, #4f215a 100%)",
    gradB: "linear-gradient(135deg, #4f215a 0%, #2b1236 100%)",
    theme: "درونِ",
    rest: "کلوپ‌ها",
    desc: "گزارش‌ها و مصاحبه‌های تخصصی از کلوپ‌های موضوعی رکاد.",
  },
];

// ─── مقاله‌ی برگزیده (پرسونای اکوسیستم) ───
const FEATURED = {
  id: "featured",
  slug: "rokad-events-recap",
  persona: "eco",
  icon: "🏆",
  tag: "برگزیده",
  title: "از ایده تا محصول: سه روایت از رویدادهای استارتاپی رکاد",
  body: "گزارش کامل رویدادهای رکاد ۳۰، ۳۱ و رکاپ ۴؛ سه تجربه واقعی از تیم‌سازی، ایده‌پردازی و ساخت محصول.",
  date: "مهر ۱۴۰۵",
  readTime: "۱۲ دقیقه",
  author: "تیم محتوای رکاد",
};

export const metadata = {
  title: "وبلاگ رکاد | هر مقاله یک رنگ دارد",
  description:
    "مقالات، راهنماها و داستان‌های واقعی از اکوسیستم استارتاپی رکاد — در پنج دسته‌ی رنگی: اکوسیستم، هنرجویان، دخترها، کالج و کلوپ.",
};

// ─── الگوی نقطه‌ای (مشابه پترن سایت، بدون وابستگی به عکس) ───
function Dots({ color = "rgba(41,40,39,0.5)", opacity = 0.5, size = 22 }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0"
      style={{
        backgroundImage: `radial-gradient(circle, ${color} 1.2px, transparent 1.6px)`,
        backgroundSize: `${size}px ${size}px`,
        opacity,
        maskImage:
          "linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)",
      }}
    />
  );
}

// کلاس چرخش آماده (بدون inline-handler، مناسب کامپوننت سرور)
const PILL_ROT = ["-rotate-2", "rotate-2", "-rotate-1", "rotate-2", "-rotate-2"];
const CARD_ROT = ["-rotate-1", "rotate-1"];

export default function BlogIndexPage() {
  const posts = fallbackBlogs.map((p) => ({ ...p, slug: p.slug }));
  const byPersona = {};
  posts.forEach((p) => {
    (byPersona[p.persona] = byPersona[p.persona] || []).push(p);
  });

  // مقاله‌ی برگزیده اولِ پرسونای اکوسیستم است
  byPersona.eco = [FEATURED, ...(byPersona.eco || [])];

  return (
    <main className="bg-white overflow-hidden" dir="rtl">
      {/* ═══════════════════════ هیرو: هر مقاله یک رنگ دارد ═══════════════════════ */}
      <section id="blog-top" className="relative overflow-hidden bg-white">
        <Dots color="rgba(32,42,90,0.4)" opacity={0.35} size={26} />
        <Container className="relative z-10 pt-[2.5rem] sm:pt-[3.5rem]">
          <div className="mx-auto max-w-4xl text-center">
            {/* برچسب زرد */}
            <span className="mb-6 sm:mb-8 inline-block -rotate-2 rounded-full border-2 border-ink bg-[#ffd641] px-4 py-1.5 text-[0.8125rem] font-black text-ink shadow-[3px_3px_0_0_#c9a21b]">
              🎨 پنج پرسونا · پنج رنگ · پنج داستان
            </span>

            {/* تیتر چندرنگ */}
            <h1 className="font-black leading-[1.15] tracking-tight text-navy text-[2rem] sm:text-[3rem] lg:text-[4.25rem]">
              <span className="-rotate-2 mx-[0.08em] inline-block text-teal">هر</span>
              <span className="rotate-2 mx-[0.08em] inline-block text-navy">مقاله</span>
              <span className="-rotate-1 mx-[0.08em] inline-block text-magenta">یک</span>
              <span className="rotate-2 mx-[0.08em] inline-block text-orange">رنگ</span>
              <span className="-rotate-2 mx-[0.08em] inline-block text-[#4f215a]">دارد</span>
            </h1>

            {/* توضیح */}
            <p className="mx-auto mb-2 mt-5 max-w-xl text-[1rem] font-medium leading-8 text-ink/70 sm:text-[1.0625rem]">
              دسته‌بندی‌های محتوایی رکاد را با رنگِ خودش پیدا کن — از اکوسیستم تا کلوپ،
              هرجا که هستی برایت داستان داریم.
            </p>
          </div>
        </Container>

        {/* انتخاب‌گر پرسونا */}
        <Container className="relative z-10 pb-8 pt-8 sm:pb-10">
          <div
            id="blog-personas"
            className="grid scroll-mt-32 grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5"
          >
            {PERSONAS.map((p, i) => {
              const count = (byPersona[p.id] || []).length;
              return (
                <a
                  key={p.id}
                  href={`#persona-${p.id}`}
                  className={`group relative block rounded-[1.25rem_0_1.25rem_0] transition-transform duration-300 hover:-translate-y-1 hover:rotate-0 ${PILL_ROT[i % PILL_ROT.length]}`}
                >
                  {/* سایه‌ی سخت پشت */}
                  <span
                    aria-hidden="true"
                    className="absolute left-1 top-1 bottom-[-0.25rem] right-[-0.25rem] rounded-[1.25rem_0_1.25rem_0]"
                    style={{ background: p.color }}
                  />
                  <span className="relative z-10 flex flex-col items-center gap-1 rounded-[1.25rem_0_1.25rem_0] border-2 bg-white px-3 py-4 text-center transition-transform duration-300 group-hover:scale-[1.02]" style={{ borderColor: p.color }}>
                    <span className="text-[1.75rem] leading-none">{p.emoji}</span>
                    <span className="text-[0.9375rem] font-black text-ink">{p.label}</span>
                    <span className="text-[0.6875rem] font-bold text-ink/50">
                      {faNum(count)} مقاله
                    </span>
                  </span>
                </a>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ═══════════════════════ سکشن‌های پرسونا ═══════════════════════ */}
      {PERSONAS.map((p, pi) => {
        const group = byPersona[p.id] || [];
        return (
          <section
            key={p.id}
            id={`persona-${p.id}`}
            className="relative scroll-mt-32 overflow-hidden py-[3rem] sm:py-[4rem]"
            style={{ background: p.tint }}
          >
            <Dots color={p.color} opacity={pi === 0 ? 0.32 : 0.16} size={24} />
            <Container className="relative z-10">
              {/* هدر سکشن */}
              <div className="mb-12 flex flex-wrap items-end justify-between gap-x-6 gap-y-5 sm:mb-14">
                <div className="max-w-xl">
                  <span className="mb-4 inline-flex items-center gap-2 rounded-full border-2 border-ink bg-white px-3.5 py-1.5 text-[0.8125rem] font-extrabold text-ink">
                    <span
                      className="inline-block h-2.5 w-2.5 rounded-full"
                      style={{ background: p.color }}
                    />
                    {p.label}
                  </span>
                  <h2 className="font-black leading-tight text-ink text-[1.75rem] sm:text-[2.25rem] lg:text-[2.75rem]">
                    <span className="-rotate-1 inline-block" style={{ color: p.color }}>
                      {p.theme}
                    </span>{" "}
                    <span className="rotate-1 inline-block">{p.rest}</span>
                  </h2>
                  <p className="mt-3 max-w-md text-[0.9375rem] font-medium leading-7 text-ink/65">
                    {p.desc}
                  </p>
                </div>

                {/* CTA همه‌ی مقالات پرسونا */}
                <a
                  href="#blog-personas"
                  className="inline-flex shrink-0 -rotate-1 items-center gap-2 rounded-[0_0.625rem_0_0.625rem] border-2 px-5 py-2.5 text-[0.875rem] font-extrabold text-white transition-all hover:-translate-y-0.5 hover:rotate-0"
                  style={{ background: p.color, borderColor: p.shadow, boxShadow: `4px 4px 0 0 ${p.shadow}` }}
                >
                  همه‌ی {faNum(group.length)} مقاله
                  <span aria-hidden="true">←</span>
                </a>
              </div>

              {/* گرید کارت‌ها */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
                {group.map((post, i) => {
                  const rot = CARD_ROT[i % CARD_ROT.length];
                  const grad = i % 3 === 0 ? p.gradA : p.gradB;
                  return (
                    <div
                      key={post.slug}
                      className={`relative h-full transition-transform duration-300 hover:-translate-y-1 hover:rotate-0 ${rot}`}
                    >
                      {/* استیکر زیر کارت */}
                      <span
                        aria-hidden="true"
                        className="absolute left-[0.3rem] top-[0.3rem] bottom-[-0.3rem] right-[-0.3rem] rounded-[1.875rem_0_1.875rem_0] [corner-shape:squircle]"
                        style={{ background: p.shadow }}
                      />
                      <Link
                        href={`/blog/${post.slug}`}
                        className="relative z-10 flex h-full flex-col overflow-hidden rounded-[1.875rem_0_1.875rem_0] border-2 bg-white [corner-shape:squircle]"
                        style={{ borderColor: p.color }}
                      >
                        {/* سربرگ رنگی */}
                        <div
                          className="relative flex h-40 items-center justify-center overflow-hidden"
                          style={{ background: grad }}
                        >
                          {/* بج مقاله */}
                          {post.tag && (
                            <span className="absolute right-3 top-3 z-10 -rotate-2 rounded-full border-2 bg-white px-2.5 py-1 text-[0.625rem] font-black"
                              style={{ borderColor: p.color, boxShadow: `3px 3px 0 0 ${p.shadow}`, color: p.color }}>
                              {post.tag}
                            </span>
                          )}
                          {/* آیکون */}
                          <span className="relative z-[1] grid h-[3.9rem] w-[3.9rem] -rotate-3 place-items-center rounded-[0_0.75rem_0_0.75rem] border-2 bg-white text-[1.75rem] [corner-shape:squircle]"
                            style={{ borderColor: p.color, boxShadow: `4px 4px 0 0 ${p.shadow}` }}>
                            {post.icon}
                          </span>
                        </div>

                        {/* بدنه */}
                        <div className="flex flex-1 flex-col gap-2 p-5">
                          <h3 className="text-[1.0625rem] font-black leading-7 text-ink">
                            {post.title}
                          </h3>
                          <p className="line-clamp-2 text-[0.8125rem] font-medium leading-7 text-ink/60">
                            {post.body}
                          </p>

                          {/* پانوشت کارت */}
                          <div className="mt-auto flex items-center justify-between border-t-[1.5px] border-dashed border-ink/15 pt-3.5 text-[0.75rem] font-bold text-ink/60">
                            <span className="flex items-center gap-2">
                              <span
                                className="grid h-7 w-7 place-items-center rounded-full border-[1.5px] border-ink text-[0.625rem] font-black text-white"
                                style={{ background: p.color }}
                              >
                                {initialsOf(post.author)}
                              </span>
                              {post.author}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <span aria-hidden="true">⏱</span>
                              {post.readTime}
                            </span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </Container>
          </section>
        );
      })}

      {/* ═══════════════════════ CTA پایانی ═══════════════════════ */}
      <section className="relative overflow-hidden bg-navy py-[3.5rem] sm:py-[5rem]">
        <Dots color="rgba(88,189,175,0.55)" opacity={0.3} size={26} />
        <Container className="relative z-10 text-center">
          <h2 className="font-black leading-snug text-white text-[1.75rem] sm:text-[2.5rem] lg:text-[3rem]">
            پس <span className="-rotate-2 inline-block text-teal">رنگ</span>{" "}
            <span className="rotate-2 inline-block text-orange">قصه‌ی</span>{" "}
            <span className="-rotate-1 inline-block text-magenta">تو</span> چیه؟
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[1rem] font-medium leading-8 text-white/75">
            مقاله‌های رکاد را با رنگِ خودت مرور کن؛ دسته‌ای را انتخاب کن که به تو نزدیک‌تر است.
          </p>
          <a
            href="#blog-personas"
            className="mt-8 inline-flex -rotate-2 items-center gap-2 rounded-[0_0.625rem_0_0.625rem] border-2 border-ink bg-[#f4971f] px-7 py-3.5 text-[1rem] font-black text-ink shadow-[4px_4px_0_0_#a8641a] transition-all hover:-translate-y-1 hover:rotate-0"
          >
            انتخاب پرسونای من
          </a>
        </Container>
      </section>
    </main>
  );
}
