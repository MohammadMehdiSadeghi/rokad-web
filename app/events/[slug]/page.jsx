import EventsSingle from "../../../src/views/EventsSingle";

const slugify = (s) =>
  encodeURIComponent(String(s || "").trim().replace(/\s+/g, "-"));

export function generateStaticParams() {
  return [
    { slug: "rokad-events-recap" },
    { slug: "event" },
    { slug: "event-1" },
  ];
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  if (slug === "rokad-events-recap") {
    return {
      title: "از ایده تا محصول: سه روایت از رویدادهای استارتاپی رکاد | رویدادهای رکاد",
      description:
        "گزارش کامل رویدادهای استارتاپی رکاد — رکاد ۳۰، رکاد ۳۱ و رکاپ ۴.",
    };
  }
  return { title: "رویداد | رکاد" };
}

export default async function Page({ params }) {
  const { slug } = await params;
  // فعلاً همه اسلاگ‌ها گزارش کامل رکاد رو نشون می‌دن تا محتوای جدید اضافه بشه
  return <EventsSingle />;
}
