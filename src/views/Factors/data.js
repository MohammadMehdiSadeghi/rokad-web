/* =========================================================
   داده‌های صفحه «عوامل رکاد» — کادر و عوامل انسانی
   طراحی هماهنگ با زبان بصری فیگما و دیزاین سیستم رُکاد:
   فیروزه‌ای برند #59BBAF · سرمه‌ای پسرانه #202A5A · سرخابی دخترانه #E0195B · زرد طلایی #F8A41D
========================================================= */

export const IMG_DIR = "/assets/about/Team";

export const PATTERNS = {
  teal: "/assets/about/Team/patterngreen.png",
  navy: "/assets/about/Team/Patternblue.png",
  magenta: "/assets/about/Team/Patternpink.png",
  yellow: "/assets/about/Team/Patternyellow.png",
};

/* محاسبه حروف اول برای آواتارهای بدون عکس */
export function getInitials(name) {
  if (!name) return "ر";
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) {
    return `${parts[0][0]}.${parts[1][0]}`;
  }
  return parts[0][0];
}

/* رنگ تیره‌تر برای بوردر و شدوی نشان‌ها (مشابه سکشن Team فیگما) */
export function darker(hex) {
  if (!hex || !hex.startsWith("#")) return "#202A5A";
  const c = parseInt(hex.slice(1), 16);
  const r = Math.max(0, ((c >> 16) & 255) - 40);
  const g = Math.max(0, ((c >> 8) & 255) - 40);
  const b = Math.max(0, (c & 255) - 40);
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
}

/* ════ ۱. بنیان‌گذار (سکشن اختصاصی آقای حامد آرون) ════ */
export const FOUNDER_STAFF = [
  {
    name: "حامد آرون",
    role: "مدیرعامل و بنیان‌گذار رکاد",
    tag: "بنیان‌گذار",
    badgeLabel: "امضای رُکاد",
    bio: "کسی که ایده‌ی اولین هنرستان استارتاپی ایران را شکل داد — رکاد یک مدرسه نیست، یک اکوسیستم است برای تبدیل رویاهای تکنولوژی نوجوانان به واقعیت.",
    img: `${IMG_DIR}/arvan.png`,
    fallbackImg: `${IMG_DIR}/arvan.webp`,
    color: "#59BBAF",
    pattern: PATTERNS.teal,
    website: "https://arvan.me",
  },
];

/* ════ ۲. مدیریت و راهبری اجرایی (عزیزپور و کمالی) ════ */
export const MANAGEMENT_STAFF = [
  {
    name: "علیرضا عزیزپور",
    role: "راهبر ارشد / مدیرعامل رکاد",
    tag: "مدیرعامل",
    bio: "هدایت استراتژی آموزشی، توسعه زیرساخت‌های نوآوری و پیوند هنرستان با اکوسیستم استارتاپی و بازار کار.",
    img: `${IMG_DIR}/azizpoor.png`,
    fallbackImg: `${IMG_DIR}/azizpoor.webp`,
    color: "#59BBAF",
    pattern: PATTERNS.teal,
  },
  {
    name: "محمد کمالی",
    role: "هم‌بنیان‌گذار و توسعه‌دهنده سیستم‌ها",
    tag: "هم‌بنیان‌گذار",
    bio: "توسعه زیرساخت‌های فناوری، هدایت سیستم‌های عملیاتی و نظارت بر کیفیت برنامه‌های تحول مهارت‌آموزی.",
    img: null,
    color: "#59BBAF",
    pattern: PATTERNS.teal,
  },
];

/* ════ ۳. کادر هنرستان پسرانه رُکاد ════ */
export const BOYS_STAFF = [
  {
    name: "امیرحسین امیریان",
    role: "راهبر هنرستان پسرانه رکاد",
    tag: "راهبر پسرانه",
    bio: "هدایت مسیر تخصصی و انگیزه‌بخشی به دانش‌آموزان در مسیر کارآفرینی و تکنولوژی.",
    img: `${IMG_DIR}/amirian.png`,
    fallbackImg: `${IMG_DIR}/amirian.webp`,
    color: "#202A5A",
    pattern: PATTERNS.navy,
  },
  {
    name: "عماد پورحسنی",
    role: "معاون هنرستان پسرانه رکاد",
    tag: "معاون آموزشی",
    bio: "برنامه‌ریزی آموزشی، ارزیابی مستمر پروژه‌ها و پیگیری فرایند یادگیری مهارتی.",
    img: `${IMG_DIR}/poorhassani.png`,
    fallbackImg: `${IMG_DIR}/poorhassani.webp`,
    color: "#202A5A",
    pattern: PATTERNS.navy,
  },
  {
    name: "سعید افضلی",
    role: "دستیار اجرایی مدارس رکاد",
    tag: "دستیار اجرایی",
    bio: "هماهنگی رویدادها، مسابقات استارتاپی و پشتیبانی پیوسته از بچه‌های مدرسه.",
    img: `${IMG_DIR}/afzali.png`,
    fallbackImg: `${IMG_DIR}/afzali.webp`,
    color: "#202A5A",
    pattern: PATTERNS.navy,
  },
  {
    name: "محمدامین شاکری",
    role: "مربی برنامه‌نویسی و فرانت‌اند",
    tag: "مربی فرانت‌اند",
    bio: "آموزش جاوااسکریپت و ری‌اکت در قالب پروژه‌های زنده و استاندارد بازار کار.",
    img: null,
    color: "#202A5A",
    pattern: PATTERNS.navy,
  },
  {
    name: "علی رضایی",
    role: "مدرس پایتون و هوش مصنوعی",
    tag: "مدرس AI",
    bio: "پرورش تفکر الگوریتمی و اجرای پروژه‌های داده‌محور و یادگیری ماشین.",
    img: null,
    color: "#202A5A",
    pattern: PATTERNS.navy,
  },
  {
    name: "پوریا رحمانی",
    role: "منتور محصول و نوآوری",
    tag: "منتور استارتاپ",
    bio: "هدایت تیم‌های دانش‌آموزی از ایده‌پردازی اولیه تا لانچ نمونه اولیه (MVP).",
    img: null,
    color: "#202A5A",
    pattern: PATTERNS.navy,
  },
  {
    name: "حسین حسینی",
    role: "مشاور رشد فردی و مهارت‌های نرم",
    tag: "مشاور رشد",
    bio: "همراهی بچه‌ها در تقویت خودباوری، کار تیمی و مدیریت زمان پروژه.",
    img: null,
    color: "#202A5A",
    pattern: PATTERNS.navy,
  },
  {
    name: "امیرمهدی طاهری",
    role: "مربی شبکه و زیرساخت",
    tag: "مربی شبکه",
    bio: "آشنایی با مفاهیم شبکه، امنیت سرور و ابزارهای استقرار نرم‌افزار.",
    img: null,
    color: "#202A5A",
    pattern: PATTERNS.navy,
  },
];

/* ════ ۴. کادر هنرستان دخترانه رُکاد ════ */
export const GIRLS_STAFF = [
  {
    name: "رویا دولت‌آبادی",
    role: "راهبر هنرستان دخترانه رکاد",
    tag: "راهبر دخترانه",
    bio: "خلق فضایی پویا، امن و نوآور برای دختران علاقه‌مند به تکنولوژی و کسب‌وکار.",
    img: `${IMG_DIR}/dolat-abadi.png`,
    fallbackImg: `${IMG_DIR}/dolat-abadi.webp`,
    color: "#E0195B",
    pattern: PATTERNS.magenta,
  },
  {
    name: "مبینا فلاح",
    role: "معاون هنرستان دخترانه رکاد",
    tag: "معاون آموزشی",
    bio: "مدیریت امور تحصیلی و کارگاهی، ارزیابی پرتفولیو و راهنمایی دانش‌آموزان.",
    img: `${IMG_DIR}/fallah.png`,
    fallbackImg: `${IMG_DIR}/fallah.webp`,
    color: "#E0195B",
    pattern: PATTERNS.magenta,
  },
  {
    name: "سارا حسینیان",
    role: "مربی طراحی محصول و UI/UX",
    tag: "مربی دیزاین",
    bio: "آموزش تفکر دیزاین، فیگما و ساخت رابط‌های کاربری چشم‌نواز و استاندارد.",
    img: null,
    color: "#E0195B",
    pattern: PATTERNS.magenta,
  },
  {
    name: "فاطمه کاظمی",
    role: "مدرس وب و توسعه نرم‌افزار",
    tag: "مدرس وب",
    bio: "آموزش گام‌به‌گام برنامه‌نویسی وب و حل مسائل دنیای واقعی با کدنویسی.",
    img: null,
    color: "#E0195B",
    pattern: PATTERNS.magenta,
  },
  {
    name: "نگار صادقی",
    role: "مربی بازاریابی دیجیتال و برندینگ",
    tag: "مربی مارکتینگ",
    bio: "پرورش مهارت‌های روایت‌گری برند، شبکه‌های اجتماعی و کمپین‌های آنلاین.",
    img: null,
    color: "#E0195B",
    pattern: PATTERNS.magenta,
  },
  {
    name: "مهلا موسوی",
    role: "منتور کسب‌وکار و مدل‌های درآمدی",
    tag: "منتور محصول",
    bio: "آموزش تحقیقات بازار، تست فرضیه‌ها و پیچ‌دک برای استارتاپ‌های نوپا.",
    img: null,
    color: "#E0195B",
    pattern: PATTERNS.magenta,
  },
  {
    name: "زهرا نوری",
    role: "مشاور توانمندسازی و استعدادیابی",
    tag: "مشاور رشد",
    bio: "تقویت هوش هیجانی، حل تعارضات تیمی و ایجاد انگیزه پایدار برای رشد.",
    img: null,
    color: "#E0195B",
    pattern: PATTERNS.magenta,
  },
  {
    name: "مریم انصاری",
    role: "مربی تصویرسازی و گرافیک دیجیتال",
    tag: "مربی گرافیک",
    bio: "آموزش موشن‌گرافیک، تصویرسازی و هویت بصری استارتاپ‌های دانش‌آموزی.",
    img: null,
    color: "#E0195B",
    pattern: PATTERNS.magenta,
  },
];
