/* =========================================================
   داده‌های صفحه «عوامل رکاد» — کادر و عوامل انسانی
   دیتای اعضا از سکشن Team صفحه درباره (منبع فیگما)؛
   تم‌های رنگی از Rokad-design-system.md:
   teal #59BBAF (برند) · navy #202A5A (پسرانه) · magenta #E0195B (دخترانه)
========================================================= */

export const IMG_DIR = "/assets/about/Team";

export const TEAM = [
  {
    name: "حامد آرون",
    role: "مدیرعامل و بنیانگذار رکاد",
    badge: "بنیانگذار",
    img: `${IMG_DIR}/hamed.webp`,
    group: "leadership",
    featured: true,
    bio: "کسی که ایده‌ی اولین هنرستان استارتاپی ایران رو شکل داد — رکاد یک مدرسه نیست، یک اکوسیستم است.",
    color: "#59BBAF",
    pattern: `${IMG_DIR}/patterngreen.png`,
  },
  {
    name: "علیرضا عزیزپور",
    role: "راهبر ارشد / مدیرعامل رکاد",
    badge: "مدیرعامل",
    img: `${IMG_DIR}/alireza.webp`,
    group: "leadership",
    color: "#59BBAF",
    pattern: `${IMG_DIR}/patterngreen.png`,
  },
  {
    name: "امیرحسین امیریان",
    role: "راهبر هنرستان پسرانه رکاد",
    badge: "راهبر",
    img: `${IMG_DIR}/amirhossein.webp`,
    group: "boys",
    color: "#202A5A",
    pattern: `${IMG_DIR}/Patternblue.png`,
  },
  {
    name: "سعید افضلی",
    role: "دستیار اجرایی مدارس رکاد",
    badge: "دستیار اجرایی",
    img: `${IMG_DIR}/saied.webp`,
    group: "boys",
    color: "#202A5A",
    pattern: `${IMG_DIR}/Patternblue.png`,
  },
  {
    name: "عماد پورحسنی",
    role: "معاون هنرستان پسرانه رکاد",
    badge: "معاون",
    img: `${IMG_DIR}/emad.webp`,
    group: "boys",
    color: "#202A5A",
    pattern: `${IMG_DIR}/Patternblue.png`,
  },
  {
    name: "محمد کمالی",
    role: "مدیرعامل و بنیانگذار",
    badge: "بنیانگذار",
    img: null,
    group: "girls",
    color: "#E0195B",
    pattern: `${IMG_DIR}/Patternpink.png`,
  },
  {
    name: "رویا دولت‌آبادی",
    role: "راهبر هنرستان دخترانه رکاد",
    badge: "راهبر",
    img: `${IMG_DIR}/roya.webp`,
    group: "girls",
    color: "#E0195B",
    pattern: `${IMG_DIR}/Patternpink.png`,
  },
  {
    name: "مبینا فلاح",
    role: "معاون هنرستان دخترانه رکاد",
    badge: "معاون",
    img: `${IMG_DIR}/fallah.webp`,
    group: "girls",
    color: "#E0195B",
    pattern: `${IMG_DIR}/Patternpink.png`,
  },
];

/* گروه‌های فیلتر — با شمارش پویا در ویو */
export const GROUPS = [
  { key: "all", label: "همه" },
  { key: "leadership", label: "مدیریت" },
  { key: "boys", label: "هنرستان پسرانه" },
  { key: "girls", label: "هنرستان دخترانه" },
];
