import BlogSingle from "../../../src/views/BlogSingle";

export const metadata = {
  title: "چطور یک نوجوان را عاشق کد کنیم؟ | وبلاگ رکاد",
  description:
    "راهنمای عملی معلم برنامه‌نویسی رکاد برای عاشق‌کردن نوجوان‌ها به کد — از اسکرچ تا پایتون، پروژه‌محور و بدون اجبار.",
  keywords: ["آموزش برنامه‌نویسی نوجوانان", "اسکرچ", "پایتون برای نوجوانان", "هنرستان استارتاپی رکاد"],
  openGraph: {
    title: "چطور یک نوجوان را عاشق کد کنیم؟ | وبلاگ رکاد",
    description:
      "راهنمای عملی برای عاشق‌کردن نوجوان‌ها به کد — از اسکرچ تا پایتون.",
    type: "article",
    locale: "fa_IR",
  },
};

export default function Page() {
  return <BlogSingle />;
}
