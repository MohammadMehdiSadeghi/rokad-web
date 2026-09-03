import BlogSingle from "../../../src/views/BlogSingle";
import BlogPostBasic from "../../../src/views/BlogPostBasic";
import fallbackBlogs from "../../../src/lib/fallback/blog";

const slugify = (s) => s.replace(/[؟?!.:،؛]/g, "").replace(/\s+/g, "-").trim();

export function generateStaticParams() {
  const slugs = fallbackBlogs.map((p) => ({ slug: p.slug || slugify(p.title) }));
  return [{ slug: "rokad-events-recap" }, ...slugs];
}

export default function BlogPostPage({ params }) {
  const slug = params.slug;
  // مقاله اصلی (پرچم‌دار) — کامپوننت کامل
  if (slug === "rokad-events-recap") {
    return <BlogSingle />;
  }
  // بقیه پست‌ها — نمای ساده
  const post = fallbackBlogs.find((p) => (p.slug || slugify(p.title)) === slug);
  if (post) {
    return <BlogPostBasic post={{ ...post, slug }} />;
  }
  return <BlogPostBasic post={{ title: "مقاله یافت نشد", body: "", slug }} />;
}
