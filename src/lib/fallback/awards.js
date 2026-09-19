// src/lib/fallback/awards.js
// ------------------------------------------------------------
// دیتای نمونهٔ افتخارات — ساختار سلسله‌مراتبی:
//   جشنواره  →  مقام  →  رشته
// هر رکورد یک «مقام در یک رشتهٔ یک جشنواره» است.
// فیلدهای festival و field اختیاری‌اند؛ اگر نباشن از title/meta
// استخراج می‌شن (تابع normalize در صفحهٔ افتخارات).
// ------------------------------------------------------------
const fallbackAwards = [
  /* ══════════ جشنوارهٔ فردا ══════════ */
  {
    id: "farda-first-prog",
    festival: "جشنواره‌ی فردا",
    field: "برنامه‌نویسی",
    rank: "first",
    title: "مقام اول کشوری",
    meta: "رتبه‌ی اول کشوری در بخش برنامه‌نویسی جشنواره‌ی فردا",
    badge: "/assets/home/Honors/f1.png",
    winners: [
      { name: "مریم رضایی", role: "طراح محصول", gen: "نسل ۷", avatar: "/assets/home/Rokadians/Ellipse 83.png" },
      { name: "امیرحسین تهرانی", role: "توسعه‌دهنده فرانت‌اند", gen: "نسل ۶", avatar: "/assets/home/Rokadians/Ellipse 83.png" },
      { name: "هستی موسوی", role: "محقق هوش مصنوعی", gen: "نسل ۸", avatar: "/assets/home/Rokadians/Ellipse 83.png" },
    ],
  },
  {
    id: "farda-first-graphic",
    festival: "جشنواره‌ی فردا",
    field: "گرافیک",
    rank: "first",
    title: "مقام اول کشوری",
    meta: "رتبه‌ی اول کشوری در بخش گرافیک جشنواره‌ی فردا",
    badge: "/assets/home/Honors/f1.png",
    winners: [
      { name: "نگار صادقی", role: "طراح گرافیک", gen: "نسل ۵", avatar: "/assets/home/Rokadians/Ellipse 83.png" },
      { name: "پوریا رحمانی", role: "هنرمند تعاملی", gen: "نسل ۹", avatar: "/assets/home/Rokadians/Ellipse 83.png" },
    ],
  },
  {
    id: "farda-second-prog",
    festival: "جشنواره‌ی فردا",
    field: "برنامه‌نویسی",
    rank: "second",
    title: "مقام دوم کشوری",
    meta: "رتبه‌ی دوم کشوری در بخش برنامه‌نویسی جشنواره‌ی فردا",
    badge: "/assets/home/Honors/s2.png",
    winners: [
      { name: "علی مرادی", role: "بنیان‌گذار کارنو", gen: "نسل ۵", avatar: "/assets/home/Rokadians/Ellipse 83.png" },
      { name: "سارا احمدی", role: "طراح رابط کاربری", gen: "نسل ۷", avatar: "/assets/home/Rokadians/Ellipse 83.png" },
    ],
  },
  {
    id: "farda-third-graphic",
    festival: "جشنواره‌ی فردا",
    field: "گرافیک",
    rank: "third",
    title: "مقام سوم کشوری",
    meta: "رتبه‌ی سوم کشوری در بخش گرافیک جشنواره‌ی فردا",
    badge: "/assets/home/Honors/t3.png",
    winners: [
      { name: "ریحانه کریمی", role: "بنیان‌گذار گلرنگ", gen: "نسل ۸", avatar: "/assets/home/Rokadians/Ellipse 83.png" },
    ],
  },

  /* ══════════ جشنوارهٔ خوارزمی ══════════ */
  {
    id: "kharazmi-first-web",
    festival: "جشنواره‌ی خوارزمی",
    field: "وب و نرم‌افزار",
    rank: "first",
    title: "مقام اول کشوری",
    meta: "رتبه‌ی اول کشوری در بخش وب و نرم‌افزار جشنواره‌ی خوارزمی",
    badge: "/assets/home/Honors/f1.png",
    winners: [
      { name: "مهدی یوسفی", role: "مهندس DevOps", gen: "نسل ۴", avatar: "/assets/home/Rokadians/Ellipse 83.png" },
      { name: "زهرا کاظمی", role: "برنامه‌نویس بک‌اند", gen: "نسل ۷", avatar: "/assets/home/Rokadians/Ellipse 83.png" },
    ],
  },
  {
    id: "kharazmi-second-ai",
    festival: "جشنواره‌ی خوارزمی",
    field: "هوش مصنوعی",
    rank: "second",
    title: "مقام دوم کشوری",
    meta: "رتبه‌ی دوم کشوری در بخش هوش مصنوعی جشنواره‌ی خوارزمی",
    badge: "/assets/home/Honors/s2.png",
    winners: [
      { name: "پارسا رستمی", role: "برنامه‌نویس موبایل", gen: "نسل ۶", avatar: "/assets/home/Rokadians/Ellipse 83.png" },
    ],
  },
  {
    id: "kharazmi-third-game",
    festival: "جشنواره‌ی خوارزمی",
    field: "بازی‌سازی",
    rank: "third",
    title: "مقام سوم کشوری",
    meta: "رتبه‌ی سوم کشوری در بخش بازی‌سازی جشنواره‌ی خوارزمی",
    badge: "/assets/home/Honors/t3.png",
    winners: [
      { name: "آرش نیک‌پور", role: "طراح گیم‌پلی", gen: "نسل ۹", avatar: "/assets/home/Rokadians/Ellipse 83.png" },
    ],
  },

  /* ══════════ نشان افتخار ══════════ */
  {
    id: "honor-district",
    festival: "نشان‌های افتخار",
    field: "افتخارات منطقه‌ای",
    rank: "district",
    title: "نشان افتخار",
    meta: "نشان افتخار منطقه‌ای برای فعالیت‌های اکوسیستمی رکاد",
    badge: "/assets/home/Honors/district-honor-badge.png",
    winners: [
      { name: "حسین حسینی", role: "راهبر اکوسیستم", gen: "نسل ۶", avatar: "/assets/home/Rokadians/Ellipse 83.png" },
    ],
  },
];

export default fallbackAwards;
