import BlogsView from "../../src/views/Blogs";

export const metadata = {
  title: "وبلاگ رکاد | مجلهٔ استارتاپی نوجوانان",
  description:
    "مقالات، راهنماها و داستان‌های واقعی از اکوسیستم استارتاپی رکاد — جست‌وجو، دسته‌بندی رنگی، پرخواننده‌ترین‌ها و نویسنده‌ها.",
};

export default function BlogIndexPage() {
  return <BlogsView />;
}
