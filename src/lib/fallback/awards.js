// src/lib/fallback/awards.js
// ------------------------------------------------------------
// دیتای نمونهٔ افتخارات
// هر رکورد = یک مقام در یک رشتهٔ یک جشنواره
//   festival : نوع مسابقه (جشنواره‌ی فردا / خوارزمی / …)
//   field    : رشته (برنامه‌نویسی، گرافیک، …)
//   rank     : first | second | third | district
//   level    : کشوری | استانی | ناحیه
// ترتیب نمایش: ۱ کشوری ← ۲ کشوری ← ۳ کشوری ← … ← ۳ ناحیه
// فیلدهای festival/field/level اختیاری‌اند؛ اگر نباشن از
// title/meta استخراج می‌شن (تابع normalize در صفحهٔ افتخارات).
// ------------------------------------------------------------
const fallbackAwards = [
  /* ══════════════ جشنواره‌ی فردا ══════════════ */
  {
    id: "farda-1-prog",
    festival: "جشنواره‌ی فردا",
    field: "برنامه‌نویسی",
    rank: "first",
    level: "کشوری",
    title: "مقام اول کشوری",
    meta: "رتبه‌ی اول کشوری در بخش برنامه‌نویسی جشنواره‌ی فردا",
    badge: "/assets/home/Honors/f1.png",
    winners: [
      { name: "مریم رضایی", role: "طراح محصول", gen: "نسل ۷", avatar: "/assets/home/Rokadians/Ellipse 83.png" },
      { name: "امیرحسین تهرانی", role: "توسعه‌دهنده فرانت‌اند", gen: "نسل ۶", avatar: "/assets/home/Rokadians/Ellipse 83.png" },
    ],
  },
  {
    id: "farda-1-graphic",
    festival: "جشنواره‌ی فردا",
    field: "گرافیک",
    rank: "first",
    level: "کشوری",
    title: "مقام اول کشوری",
    meta: "رتبه‌ی اول کشوری در بخش گرافیک جشنواره‌ی فردا",
    badge: "/assets/home/Honors/f1.png",
    winners: [
      { name: "نگار صادقی", role: "طراح گرافیک", gen: "نسل ۵", avatar: "/assets/home/Rokadians/Ellipse 83.png" },
    ],
  },
  {
    id: "farda-2-prog",
    festival: "جشنواره‌ی فردا",
    field: "برنامه‌نویسی",
    rank: "second",
    level: "کشوری",
    title: "مقام دوم کشوری",
    meta: "رتبه‌ی دوم کشوری در بخش برنامه‌نویسی جشنواره‌ی فردا",
    badge: "/assets/home/Honors/s2.png",
    winners: [
      { name: "علی مرادی", role: "بنیان‌گذار کارنو", gen: "نسل ۵", avatar: "/assets/home/Rokadians/Ellipse 83.png" },
    ],
  },
  {
    id: "farda-3-graphic",
    festival: "جشنواره‌ی فردا",
    field: "گرافیک",
    rank: "third",
    level: "کشوری",
    title: "مقام سوم کشوری",
    meta: "رتبه‌ی سوم کشوری در بخش گرافیک جشنواره‌ی فردا",
    badge: "/assets/home/Honors/t3.png",
    winners: [
      { name: "ریحانه کریمی", role: "بنیان‌گذار گلرنگ", gen: "نسل ۸", avatar: "/assets/home/Rokadians/Ellipse 83.png" },
    ],
  },
  {
    id: "farda-1-web-prov",
    festival: "جشنواره‌ی فردا",
    field: "وب و نرم‌افزار",
    rank: "first",
    level: "استانی",
    title: "مقام اول استانی",
    meta: "رتبه‌ی اول استانی در بخش وب و نرم‌افزار جشنواره‌ی فردا",
    badge: "/assets/home/Honors/f1.png",
    winners: [
      { name: "هستی موسوی", role: "محقق هوش مصنوعی", gen: "نسل ۸", avatar: "/assets/home/Rokadians/Ellipse 83.png" },
    ],
  },
  {
    id: "farda-2-graphic-dist",
    festival: "جشنواره‌ی فردا",
    field: "گرافیک",
    rank: "second",
    level: "ناحیه",
    title: "مقام دوم ناحیه",
    meta: "رتبه‌ی دوم ناحیه در بخش گرافیک جشنواره‌ی فردا",
    badge: "/assets/home/Honors/s2.png",
    winners: [
      { name: "پوریا رحمانی", role: "هنرمند تعاملی", gen: "نسل ۹", avatar: "/assets/home/Rokadians/Ellipse 83.png" },
    ],
  },

  /* ══════════════ جشنواره‌ی خوارزمی ══════════════ */
  {
    id: "kharazmi-1-web",
    festival: "جشنواره‌ی خوارزمی",
    field: "وب و نرم‌افزار",
    rank: "first",
    level: "کشوری",
    title: "مقام اول کشوری",
    meta: "رتبه‌ی اول کشوری در بخش وب و نرم‌افزار جشنواره‌ی خوارزمی",
    badge: "/assets/home/Honors/f1.png",
    winners: [
      { name: "مهدی یوسفی", role: "مهندس DevOps", gen: "نسل ۴", avatar: "/assets/home/Rokadians/Ellipse 83.png" },
      { name: "زهرا کاظمی", role: "برنامه‌نویس بک‌اند", gen: "نسل ۷", avatar: "/assets/home/Rokadians/Ellipse 83.png" },
    ],
  },
  {
    id: "kharazmi-2-ai",
    festival: "جشنواره‌ی خوارزمی",
    field: "هوش مصنوعی",
    rank: "second",
    level: "کشوری",
    title: "مقام دوم کشوری",
    meta: "رتبه‌ی دوم کشوری در بخش هوش مصنوعی جشنواره‌ی خوارزمی",
    badge: "/assets/home/Honors/s2.png",
    winners: [
      { name: "پارسا رستمی", role: "برنامه‌نویس موبایل", gen: "نسل ۶", avatar: "/assets/home/Rokadians/Ellipse 83.png" },
    ],
  },
  {
    id: "kharazmi-3-game",
    festival: "جشنواره‌ی خوارزمی",
    field: "بازی‌سازی",
    rank: "third",
    level: "استانی",
    title: "مقام سوم استانی",
    meta: "رتبه‌ی سوم استانی در بخش بازی‌سازی جشنواره‌ی خوارزمی",
    badge: "/assets/home/Honors/t3.png",
    winners: [
      { name: "آرش نیک‌پور", role: "طراح گیم‌پلی", gen: "نسل ۹", avatar: "/assets/home/Rokadians/Ellipse 83.png" },
    ],
  },
  {
    id: "kharazmi-1-robot",
    festival: "جشنواره‌ی خوارزمی",
    field: "رباتیک",
    rank: "first",
    level: "ناحیه",
    title: "مقام اول ناحیه",
    meta: "رتبه‌ی اول ناحیه در بخش رباتیک جشنواره‌ی خوارزمی",
    badge: "/assets/home/Honors/f1.png",
    winners: [
      { name: "سارا احمدی", role: "طراح رابط کاربری", gen: "نسل ۷", avatar: "/assets/home/Rokadians/Ellipse 83.png" },
    ],
  },

  /* ══════════════ نشان‌های افتخار ══════════════ */
  {
    id: "honor-district",
    festival: "نشان‌های افتخار",
    field: "افتخارات منطقه‌ای",
    rank: "district",
    level: "ناحیه",
    title: "نشان افتخار",
    meta: "نشان افتخار ناحیه‌ای برای فعالیت‌های اکوسیستمی رکاد",
    badge: "/assets/home/Honors/district-honor-badge.png",
    winners: [
      { name: "حسین حسینی", role: "راهبر اکوسیستم", gen: "نسل ۶", avatar: "/assets/home/Rokadians/Ellipse 83.png" },
    ],
  },
];

export default fallbackAwards;
