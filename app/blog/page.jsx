import Link from "next/link";
import Container from "../../src/layout/Container";
import fallbackBlogs from "../../src/lib/fallback/blog";

const patternBg = "/assets/Pattern/layout-pattern.png";

// slugify فارسی از عنوان
const slugify = (s) =>
  s
    .replace(/[؟?!.:،؛]/g, "")
    .replace(/\s+/g, "-")
    .trim();

export const metadata = {
  title: "وبلاگ رکاد | همه مقالات",
  description: "مقالات، راهنماها و داستان‌های واقعی از اکوسیستم استارتاپی و آموزش کارآفرینی رکاد.",
};

export default function BlogIndexPage() {
  const posts = fallbackBlogs.map((p) => ({
    ...p,
    slug: p.slug || slugify(p.title),
  }));
  const allPosts = [
    {
      id: "featured",
      slug: "rokad-events-recap",
      title: "از ایده تا محصول: سه روایت از رویدادهای استارتاپی رکاد",
      body: "گزارش کامل رویدادهای رکاد ۳۰، ۳۱ و رکاپ ۴؛ سه تجربه واقعی از تیم‌سازی، ایده‌پردازی و ساخت محصول توسط دانش‌آموزان اولین هنرستان استارتاپی ایران.",
      date: "مهر ۱۴۰۵",
      image: "/assets/home/Blogs/blog-card-cover.png",
    },
    ...posts,
  ];

  return (
    <section className="relative py-[4rem] sm:py-[5rem] lg:py-[6rem] w-full px-4 sm:px-6 lg:px-8 bg-white overflow-hidden" dir="rtl">
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]">
        <img src={patternBg} alt="" aria-hidden="true" className="w-full h-full object-cover opacity-60 bg-center" />
      </div>

      <Container className="relative z-10">
        {/* هدر */}
        <div className="relative flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4 sm:gap-6 mb-[2rem] sm:mb-[2.5rem] lg:mb-[3rem]">
          <h2 className="text-center sm:text-right font-black text-[1.5rem] sm:text-[2.25rem] lg:text-[3.3125rem] leading-[1.3] text-ink flex flex-wrap justify-center sm:justify-start items-center gap-x-2 gap-y-1">
            <span className="inline-block rotate-3 text-ink">تازه‌های</span>{" "}
            <span className="inline-block -rotate-3 text-navy">اکوسیستم</span>{" "}
            <span className="inline-block rotate-3 text-ink">و</span>{" "}
            <span className="inline-block rotate-3 text-magenta">آموزش</span>
          </h2>
        </div>

        {/* گرید */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1.5rem] sm:gap-[2rem]">
          {allPosts.map((post, index) => {
            const rotation = index % 2 === 0 ? -1 : 1;
            return (
              <div
                key={post.slug}
                className="relative w-full transition-transform duration-500 ease-out hover:rotate-0"
                style={{ transform: `rotate(${rotation}deg)` }}
              >
                <div
                  aria-hidden="true"
                  className="absolute top-[0.25rem] left-[0.25rem] w-full h-full bg-[#292827] rounded-[1.875rem_0_1.875rem_0] [corner-shape:squircle]"
                />
                <Link
                  href={`/blog/${post.slug}`}
                  className="relative z-10 flex flex-col bg-white border-[0.125rem] border-[#292827] rounded-[1.875rem_0_1.875rem_0] [corner-shape:squircle] overflow-hidden h-[25.625rem] group"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-[10.625rem] sm:h-[11.875rem] object-cover border-b-[0.125rem] border-[#292827] group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="flex-1 flex flex-col justify-between p-5 sm:p-6 overflow-hidden">
                    <div>
                      <span className="inline-block bg-[#21295A] text-white text-[0.6875rem] font-bold px-2.5 py-1 rounded-[0.375rem] mb-2.5">{post.date}</span>
                      <h4 className="font-black text-[1rem] sm:text-[1.0625rem] text-ink mb-2.5 leading-snug">{post.title}</h4>
                      <p className="text-[0.8125rem] leading-[1.85] text-ink/60 line-clamp-2">{post.body}</p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 mt-4 text-[0.8125rem] font-extrabold text-teal-text group-hover:text-teal transition-colors">
                      خواندن مقاله
                    </span>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
