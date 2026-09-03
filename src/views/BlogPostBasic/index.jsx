"use client";
import Link from "next/link";
import Container from "../../layout/Container";
import { ChevronLeftIcon } from "../../common/Icons";

const patternBg = "/assets/Pattern/layout-pattern.png";

// رنگ‌های دیزاین سیستم رکاد
const tones = {
  teal: { text: "text-teal", bg: "#58bdaf" },
  magenta: { text: "text-magenta", bg: "#e0195b" },
  orange: { text: "text-orange", bg: "#f4971f" },
  navy: { text: "text-navy", bg: "#202a5a" },
};

export default function BlogPostBasic({ post }) {
  const isFeatured = post.slug === "rokad-events-recap";
  return (
    <main className="relative min-h-screen bg-white overflow-hidden" dir="rtl">
      {/* پس‌زمینه پترن */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
        <img src={patternBg} alt="" aria-hidden="true" className="w-full h-full object-cover opacity-60 bg-center" />
      </div>

      <Container className="relative z-10 py-[3rem] sm:py-[4rem]">
        {/* خرده‌نان */}
        <nav className="mb-8 flex flex-wrap items-center gap-2 text-[0.8125rem] font-bold text-ink/50" aria-label="مسیر">
          <Link href="/" className="hover:text-teal transition-colors">خانه</Link>
          <ChevronLeftIcon className="w-3.5 h-3.5 text-ink/30" />
          <Link href="/blog" className="hover:text-teal transition-colors">وبلاگ</Link>
          <ChevronLeftIcon className="w-3.5 h-3.5 text-ink/30" />
          <span className="text-ink/40">{post.title}</span>
        </nav>

        {/* هدر */}
        <header className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-[#292827] text-white text-[0.75rem] font-bold px-3 py-1.5 rounded-[0.375rem] mb-4">
            {post.date || "رکاد"}
          </span>
          <h1 className="font-black text-[1.75rem] sm:text-[2.25rem] lg:text-[3rem] leading-[1.3] text-ink mb-4">
            {post.title}
          </h1>
        </header>

        {/* کاور */}
        <div className="relative max-w-3xl mx-auto mt-8">
          <div aria-hidden="true" className="absolute top-[0.3125rem] left-[0.3125rem] w-full h-full bg-[#292827] rounded-[1.875rem_0_1.875rem_0] [corner-shape:squircle]" />
          <div className="relative z-10 overflow-hidden border-[0.125rem] border-[#292827] rounded-[1.875rem_0_1.875rem_0] [corner-shape:squircle]">
            <img src={post.image || "/assets/home/Blogs/blog-card-cover.png"} alt={post.title} className="w-full h-[15rem] sm:h-[22rem] object-cover" />
          </div>
        </div>

        {/* بدن */}
        <div className="relative max-w-3xl mx-auto mt-10">
          <p className="text-[1.0625rem] leading-[2] text-ink/75">{post.body}</p>
          <p className="text-[1rem] leading-[2] text-ink/60 mt-6">
            این مقاله هم‌اکنون در حال تکمیل است. برای مطالعه محتوای کامل، به سکشن بلاگ پیشنهاداتی از رکاد بازگردید.
          </p>
        </div>

        {/* CTA */}
        <div className="relative max-w-3xl mx-auto mt-14 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-[0_0.84375rem_0_0.84375rem] bg-white px-7 py-3.5 text-[1rem] font-black text-navy-alt border-2 border-ink shadow-[4px_4px_0_0_#292827] hover:-translate-y-1 hover:-rotate-1 transition-all"
          >
            بازگشت به همه مقالات
          </Link>
        </div>
      </Container>
    </main>
  );
}
