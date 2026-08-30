// src/lib/api.js
// ============================================================
// لایه‌ی اتصال به بک‌اند Rokad (RokadProject API)
// ------------------------------------------------------------
// - همه‌ی سکشن‌های سایت از این ماژول دیتا می‌گیرن.
// - اگه API در دسترس نباشه یا خطا بده، به‌جای خالی موندن سایت،
//   دیتای fallback (همون محتوای هاردکد قبلی) نمایش داده می‌شه.
// - تصاویر ذخیره‌شده در بک‌اند (API/Public) با همین helper نشون
//   داده می‌شن.
// ============================================================

const API_BASE =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

// ------------------------------------------------------------------
// درخواست پایه — همه‌ی fetch ها از این رد می‌شن
// ------------------------------------------------------------------
async function request(path, options = {}) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 8000);

  try {
    const res = await fetch(`${API_BASE}${path}`, {
      ...options,
      signal: controller.signal,
      headers: {
        "Content-Type": "application/json",
        ...(options.headers || {}),
      },
    });

    const data = await res.json();

    // بک‌اند vanta-api گاهی آرایه، گاهی {data: []} و گاهی {data, pagination}
    // برمی‌گردونه؛ اینجا همه رو به آرایه‌ی خالص تبدیل می‌کنیم.
    if (Array.isArray(data)) return data;
    if (data && Array.isArray(data.data)) return data.data;
    if (data && data.data) return data.data;

    throw new Error(data?.message || `خطای ${res.status} از سرور`);
  } catch (err) {
    if (err.name === "AbortError") {
      throw new Error("اتصال به سرور قطع شد (timeout)");
    }
    throw err;
  } finally {
    clearTimeout(timer);
  }
}

// ------------------------------------------------------------------
// آدرس کامل تصویر — فایل‌ها توی API/Public ذخیره می‌شن و از ریشه سرو می‌شن
// ------------------------------------------------------------------
export function getImageUrl(imageName) {
  if (!imageName) return "";
  // آدرس‌های کامل رو دست نزن
  if (imageName.startsWith("http")) return imageName;
  // اسم‌های پیش‌فرض سیستم هم در Public بک‌اند هستن
  const base =
    process.env.NEXT_PUBLIC_FILE_URL || "http://localhost:5000";
  return `${base}/${imageName.replace(/^\/+/, "")}`;
}

// ------------------------------------------------------------------
// تبدیل ارقام انگلیسی به فارسی — همه‌ی متن‌های دریافتی از بک‌اند
// از این رد می‌شن تا با فونت فارسی سایت هماهنگ باشن (مثل 01 → ۰۱)
// ------------------------------------------------------------------
function toFaNum(input) {
  if (input == null) return input;
  return String(input).replace(/[0-9]/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
}

// ------------------------------------------------------------------
// تاریخ شمسی ساده از رشته‌ی ذخیره‌شده در بک‌اند (مثلاً 1404/06/15)
// ------------------------------------------------------------------
export function formatDate(rawDate) {
  if (!rawDate) return "";
  // اگر تاریخ ISO هست (Comment.createdAt) به شمسی تبدیل کن
  if (!/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}/.test(rawDate) && !isNaN(Date.parse(rawDate))) {
    try {
      return new Intl.DateTimeFormat("fa-IR", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }).format(new Date(rawDate));
    } catch {
      return toFaNum(rawDate);
    }
  }
  return toFaNum(String(rawDate));
}

// ==================================================================
//  دیتای FALLBACK — محتوای هاردکد قبلی سایت که موقع قطعی API نشون داده می‌شه
// ==================================================================
import fallbackBlogs from "./fallback/blog";
import fallbackEvents from "./fallback/events";
import fallbackComments from "./fallback/comments";
import fallbackStudents from "./fallback/students";
import fallbackAwards from "./fallback/awards";

// ==================================================================
//  تابع اجرای کلی با fallback — هر سکشن فقط یک خط برای دیتای خودش
// ==================================================================
async function withFallback(fetcher, fallback, mapper) {
  try {
    const data = await fetcher();
    const list = Array.isArray(data) ? data : [];
    if (!list.length) return fallback;
    return mapper ? list.map(mapper) : list;
  } catch {
    // API در دسترس نیست → محتوای قبلی سایت
    return fallback;
  }
}

// ------------------------------------------------------------------
//  بلاگ‌ها — /api/blog
//  بک‌اند: title, description, date, img (img الزامی طبق swagger)
//  UI:     title, body, date, image
// ------------------------------------------------------------------
const blogMapper = (b) => ({
  id: b._id,
  title: toFaNum(b.title),
  body: toFaNum(b.description || ""),
  date: formatDate(b.date),
  image: getImageUrl(b.img) || undefined,
});

export const fetchBlogs = () =>
  withFallback(() => request("/blog?limit=10&sort=-_id"), fallbackBlogs, blogMapper)
    .then((items) => items.filter((b) => b.image));

// ------------------------------------------------------------------
//  رویدادها — /api/event
//  بک‌اند: title, type, date, description, branch(دخترانه/پسرانه), img
//  UI:     index, theme(boys/girls), category, title, meta, body, image
// ------------------------------------------------------------------
const eventMapper = (e, i) => ({
  index: toFaNum(String(i + 1).padStart(2, "0")),
  theme: e.branch === "دخترانه" ? "girls" : "boys",
  category: toFaNum(e.type || ""),
  title: toFaNum(e.title),
  meta: toFaNum(e.date || ""),
  body: toFaNum(e.description || ""),
  ctaLabel: "داستان رویداد رو ببین",
  image: getImageUrl(e.img) || undefined,
});

export const fetchEvents = () =>
  withFallback(() => request("/event?limit=10&sort=-_id"), fallbackEvents, eventMapper)
    .then((items) => items.filter((e) => e.image));

// ------------------------------------------------------------------
//  نظرات — /api/comment
//  بک‌اند: author, content, role, img
//  UI:     name, role, text, theme(چرخشی)
// ------------------------------------------------------------------
const COMMENT_THEMES = ["navy", "pink", "teal"];
const commentMapper = (c, i) => ({
  id: c._id,
  theme: COMMENT_THEMES[i % COMMENT_THEMES.length],
  text: toFaNum(c.content || ""),
  name: toFaNum(c.author || ""),
  role: toFaNum(c.role || ""),
  avatar: getImageUrl(c.img) || "",
});

export const fetchComments = () =>
  withFallback(() => request("/comment?limit=12&sort=-_id"), fallbackComments, commentMapper)
    .then((items) => items.filter((c) => c.name && c.text));

// ------------------------------------------------------------------
//  رکادی‌ها (دانش‌آموزان) — /api/student
//  بک‌اند: fullName, job, generation, img, socialLinks[{type,link}]
//  UI:     name, desc, experience, avatar, socials
// ------------------------------------------------------------------
const studentMapper = (s) => ({
  id: s._id,
  name: toFaNum(s.fullName),
  desc: toFaNum(s.job || ""),
  experience: s.generation ? toFaNum(`نسل ${s.generation}`) : "",
  avatar: getImageUrl(s.img) || "",
  socials: Array.isArray(s.socialLinks) ? s.socialLinks : [],
});

export const fetchStudents = () =>
  withFallback(() => request("/student?limit=20&sort=-_id"), fallbackStudents, studentMapper)
    .then((items) => items.filter((s) => s.avatar));

// ------------------------------------------------------------------
//  افتخارات — /api/award (با populate برندگان)
//  بک‌اند: title, rank(1..3), description, winners[{fullName,img}]
//  UI:     rank(first/second/third), title, meta, badge(تصویر برنده)
// ------------------------------------------------------------------
const RANK_MAP = { 1: "first", 2: "second", 3: "third" };
// مدال هر رتبه — تصویر طبق رتبه‌ای که بک‌اند می‌فرسته (rank: 1|2|3)
const RANK_BADGE_FALLBACK = {
  first: "/assets/Honors/f1.png", // مقام اول — طلا
  second: "/assets/Honors/s2.png", // مقام دوم — نقره
  third: "/assets/Honors/t3.png", // مقام سوم — برنز
};
const awardMapper = (a, i) => ({
  id: a._id,
  rank: RANK_MAP[a.rank] || "first",
  title: toFaNum(a.title),
  meta: toFaNum(a.description || ""),
  ctaLabel: "مشاهده منتخبین",
  // بج همیشه از روی rank خودِ جایزه انتخاب میشه (نه عکس برنده)
  // تا «مقام اول» همیشه مدال طلا نشون بده
  badge: RANK_BADGE_FALLBACK[RANK_MAP[a.rank] || "first"],
});

export const fetchAwards = () =>
  withFallback(
    () => request("/award?limit=10&populate=winners&sort=-_id"),
    fallbackAwards,
    awardMapper
  ).then((items) => items.filter((a) => a.badge));

// ------------------------------------------------------------------
//  آمار «رکاد در یک نگاه» — شمارش داینامیک از API
//  اگه دیتابیس خالی بود، اعداد ثابت قبلی fallback هستن
// ------------------------------------------------------------------
export const fetchStats = async () => {
  try {
    const [studentsRes, eventsRes] = await Promise.all([
      fetch(`${API_BASE}/student?limit=1`),
      fetch(`${API_BASE}/event?limit=1`),
    ]);

    const [students, events] = await Promise.all([
      studentsRes.json(),
      eventsRes.json(),
    ]);

    // بک‌اند vanta-api در پاسخ لیست، count واقعی کل اسناد رو می‌ده
    const studentCount =
      students?.count ?? (Array.isArray(students) ? students.length : 0);
    const eventCount =
      events?.count ?? (Array.isArray(events) ? events.length : 0);

    if (studentCount > 0 || eventCount > 0) {
      return [
        {
          theme: "teal",
          label: "دانش‌آموز رکاد",
          value: toFaNum(studentCount),
          caption: { strong: "دانش‌آموز فعال در دو شعبه" },
        },
        {
          theme: "magenta",
          label: "رویداد استارتاپی",
          value: toFaNum(eventCount),
          caption: { strong: "رویداد استارتاپی دانش‌آموزی" },
        },
        {
          theme: "navy",
          label: "شبکه رکاد",
          value: "۲",
          caption: { strong: "شعبه‌ی مجزای هنرستانی" },
        },
        {
          theme: "orange",
          label: "نرخ اشتغال",
          value: "٪۷۶",
          caption: { strong: "دانش‌آموختگان شاغل و درآمدزا" },
        },
      ];
    }
    return fallbackStats;
  } catch {
    return fallbackStats;
  }
};

// آمار fallback (اعداد ثابت قبلی)
const fallbackStats = [
  { theme: "teal", label: "نرخ اشتغال", value: "٪۷۶", caption: { strong: "دانش‌آموختگان شاغل و درآمدزا" } },
  { theme: "magenta", label: "رویداد استارتاپی", value: "۳۰+", caption: { strong: "رویداد استارتاپی دانش‌آموزی" } },
  { theme: "navy", label: "جامعه فعال", value: "۲۵۰+", caption: { strong: "دانش‌آموز فعال در دو شعبه" } },
  { theme: "orange", label: "شبکه رکاد", value: "۲", caption: { strong: "شعبه‌ی مجزای هنرستانی" } },
];

// ------------------------------------------------------------------
//  ثبت‌نام — POST /api/enrollment (عمومی، بدون توکن)
// ------------------------------------------------------------------
export async function submitEnrollment(payload) {
  const res = await fetch(`${API_BASE}/enrollment`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await res.json();
  if (!res.ok || data.success === false) {
    throw new Error(data?.message || "ثبت‌نام ناموفق بود، دوباره تلاش کنید");
  }
  return data;
}

export default {
  fetchBlogs,
  fetchEvents,
  fetchComments,
  fetchStudents,
  fetchAwards,
  fetchStats,
  submitEnrollment,
};
