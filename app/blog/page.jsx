import BlogsView from "../../src/views/Blogs";
import { pageMeta } from "../../src/lib/seo";

export const metadata = pageMeta({
  title: "وبلاگ رکاد | مجلهٔ استارتاپی نوجوانان",
  description:
    "مقالات، راهنماها و داستان‌های واقعی از اکوسیستم استارتاپی رکاد — جست‌وجو، دسته‌بندی رنگی، پرخواننده‌ترین‌ها و نویسنده‌ها.",
  path: "/blog",
});

export default function BlogIndexPage() {
  return <BlogsView />;
}
