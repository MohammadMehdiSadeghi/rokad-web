// src/lib/fallback/awards.js
// winners — ساختار مطابق awardWinnerMapper در lib/api.js
// (name, role, gen, avatar) تا سکشن برنده‌ها با دیتای نمونه هم کار کنه
const fallbackAwards = [
  {
    rank: "first",
    title: "مقام اول جشنواره‌ی فردا",
    meta: "رتبه‌ی استانی و کشوری در بخش وب و نرم‌افزار",
    badge: "/assets/home/Honors/f1.png",
    winners: [
      { name: "مریم رضایی", role: "طراح محصول", gen: "نسل ۷", avatar: "/assets/home/Rokadians/Ellipse 83.png" },
      { name: "امیرحسین تهرانی", role: "توسعه‌دهنده فرانت‌اند", gen: "نسل ۶", avatar: "/assets/home/Rokadians/Ellipse 83.png" },
      { name: "هستی موسوی", role: "محقق هوش مصنوعی", gen: "نسل ۸", avatar: "/assets/home/Rokadians/Ellipse 83.png" },
    ],
  },
  {
    rank: "second",
    title: "مقام برتر جشنواره‌ی خوارزمی",
    meta: "رتبه‌ی استانی و کشوری در بخش وب و نرم‌افزار",
    badge: "/assets/home/Honors/s2.png",
    winners: [
      { name: "علی مرادی", role: "بنیان‌گذار کارنو", gen: "نسل ۵", avatar: "/assets/home/Rokadians/Ellipse 83.png" },
      { name: "سارا احمدی", role: "طراح رابط کاربری", gen: "نسل ۷", avatar: "/assets/home/Rokadians/Ellipse 83.png" },
    ],
  },
  {
    rank: "third",
    title: "مقام برتر جشنواره‌ی خوارزمی",
    meta: "رتبه‌ی استانی و کشوری در بخش وب و نرم‌افزار",
    badge: "/assets/home/Honors/t3.png",
    winners: [
      { name: "پارسا رستمی", role: "برنامه‌نویس موبایل", gen: "نسل ۶", avatar: "/assets/home/Rokadians/Ellipse 83.png" },
      { name: "ریحانه کریمی", role: "بنیان‌گذار گلرنگ", gen: "نسل ۸", avatar: "/assets/home/Rokadians/Ellipse 83.png" },
      { name: "مهدی یوسفی", role: "مهندس DevOps", gen: "نسل ۴", avatar: "/assets/home/Rokadians/Ellipse 83.png" },
    ],
  },
  {
    rank: "district",
    title: "مقام برتر جشنواره",
    meta: "نشان افتخار",
    badge: "/assets/home/Honors/district-honor-badge.png",
    winners: [
      { name: "نگار صادقی", role: "مدیر رشد", gen: "نسل ۵", avatar: "/assets/home/Rokadians/Ellipse 83.png" },
      { name: "پوریا رحمانی", role: "هنرمند تعاملی", gen: "نسل ۹", avatar: "/assets/home/Rokadians/Ellipse 83.png" },
    ],
  },
];

export default fallbackAwards;