// scripts/seed-backend.cjs
const mongoose = require("C:/Users/Mohammad/Documents/RokadProject/API/node_modules/mongoose");

const MONGO_URI = "mongodb://127.0.0.1:27017/RokadProject";

const blogSchema = new mongoose.Schema({
  img: { type: String, required: true },
  title: { type: String, unique: true, required: true },
  date: { type: String, required: true },
  description: { type: String, required: true },
});

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  type: { type: String, required: true },
  date: { type: String, required: true },
  description: { type: String, required: true },
  img: { type: String, required: true },
  branch: {
    type: [String],
    required: true,
    enum: ["دخترانه", "پسرانه"],
  },
});

const studentSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  job: { type: String, required: true },
  generation: { type: Number, required: true },
  schoolType: { type: String, required: true },
  major: { type: String, required: true },
  img: { type: String, required: true },
  socialLinks: [{
    type: { type: String, required: true },
    link: { type: String, required: true }
  }]
});

const awardSchema = new mongoose.Schema({
  title: { type: String, unique: true, required: true },
  rank: { type: Number, required: true, enum: [1, 2, 3] },
  description: { type: String, required: true },
  winners: [{ type: mongoose.Schema.Types.ObjectId, ref: "Student" }]
});

const commentSchema = new mongoose.Schema({
  author: { type: String, required: true, trim: true },
  content: { type: String, required: true },
  role: { type: String, required: true },
  img: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const seoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  keywords: { type: String, default: "" },
  robots: { type: String, default: "index, follow" },
  canonicalUrl: { type: String, default: "" },
  ogTitle: { type: String, default: "" },
  ogDescription: { type: String, default: "" },
  ogImage: { type: String, default: "" },
  ogType: { type: String, default: "website" },
  twitterCard: { type: String, default: "summary_large_image" },
  twitterTitle: { type: String, default: "" },
  twitterDescription: { type: String, default: "" },
  twitterImage: { type: String, default: "" },
}, { timestamps: true });

const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);
const Event = mongoose.models.Event || mongoose.model("Event", eventSchema);
const Student = mongoose.models.Student || mongoose.model("Student", studentSchema);
const Award = mongoose.models.Award || mongoose.model("Award", awardSchema);
const Comment = mongoose.models.Comment || mongoose.model("Comment", commentSchema);
const Seo = mongoose.models.Seo || mongoose.model("Seo", seoSchema);

async function runSeed() {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(MONGO_URI);
    console.log("Connected successfully!");

    // 1. رویدادها (Events)
    const eventsCount = await Event.countDocuments();
    if (eventsCount === 0) {
      console.log("Seeding Events...");
      await Event.create([
        {
          title: "استارتاپ‌ویکند ۳۰",
          type: "استارتاپ‌ویکند",
          date: "مشهد | ۳۱ شهریور — ۳ مهر ۱۴۰۴",
          description: "سی‌امین رویداد استارتاپی رکاد برای دانش‌آموزان هنرستان دخترانه — تیم تشکیل بدید، مسئله رو بررسی کنید و ایده‌تون رو به یه محصول قابل ارائه برسونید.",
          img: "event-pic.png",
          branch: ["دخترانه"],
        },
        {
          title: "استارتاپ‌ویکند ۳۱",
          type: "استارتاپ‌ویکند",
          date: "مشهد | ۵ — ۹ مهر ۱۴۰۵",
          description: "سی‌ویکمین رویداد استارتاپی رکاد برای هنرستان پسرانه — پنج روز فشرده برای عمیق‌تر شدن در مسئله و پختن ایده.",
          img: "event-pic.png",
          branch: ["پسرانه"],
        },
        {
          title: "رکاپ ۴",
          type: "جمع‌بندی سال",
          date: "مشهد | ۶ — ۱۰ تیر ۱۴۰۵",
          description: "چهارمین دوره رکاپ — رویداد جمع‌بندی پایان سال هر دو هنرستان؛ همه چیزایی که کل سال یاد گرفتی رو توی یه پروژه واقعی به کار بگیر.",
          img: "event-pic.png",
          branch: ["دخترانه", "پسرانه"],
        },
      ]);
      console.log("Events seeded successfully.");
    } else {
      console.log(`Events already exist (${eventsCount} items).`);
    }

    // 2. بلاگ‌ها (Blogs)
    const blogsCount = await Blog.countDocuments();
    if (blogsCount === 0) {
      console.log("Seeding Blogs...");
      await Blog.create([
        {
          title: "ساخت پروژه‌ی اول؛ از ایده تا اجرا",
          date: "بهار ۱۴۰۵",
          description: "چطور یه پروژه‌ی واقعی رو از صفر شروع کنیم و تا انتها با انگیزه پیش ببریمش.",
          img: "blog-card-cover.png",
        },
        {
          title: "اکوسیستم یعنی چه؟ نگاهی به شبکه‌ی ۱۲۰۰ نفری رکاد",
          date: "شهریور ۱۴۰۵",
          description: "چرا از یک اکوسیستم زنده حرف می‌زنیم و نه فقط یک هنرستان؛ از کافه تا رویدادها.",
          img: "blog-card-cover.png",
        },
        {
          title: "چطور برای اولین‌بار وارد بازار کار شی؟",
          date: "تابستان ۱۴۰۵",
          description: "قدم‌به‌قدم با تجربه‌ی فارغ‌التحصیلای رکاد که رزومه‌شون رو ساختن و اولین قرارداد کاریشون رو گرفتن.",
          img: "blog-card-cover.png",
        },
        {
          title: "استعدادسنجی؛ اولین قدم مسیر شخصی‌سازی‌شده",
          date: "بهار ۱۴۰۵",
          description: "چرا رکاد قبل از شروع هر چیزی، اول می‌شینه پای حرفت تا مسیر رشدت رو دقیق طراحی کنه.",
          img: "blog-card-cover.png",
        },
        {
          title: "مهارت‌هایی که هر هنرجو قبل از فارغ‌التحصیلی باید یاد بگیرد",
          date: "زمستان ۱۴۰۴",
          description: "بررسی جامع مهارت‌های فردی و فنی مورد نیاز بازار کار مدرن فناوری اطلاعات.",
          img: "blog-card-cover.png",
        },
      ]);
      console.log("Blogs seeded successfully.");
    } else {
      console.log(`Blogs already exist (${blogsCount} items).`);
    }

    // 3. دانش‌آموزان / رکادی‌ها (Students)
    let students = await Student.find();
    if (students.length === 0) {
      console.log("Seeding Students...");
      students = await Student.create([
        {
          fullName: "امیرعلی شفاهی",
          job: "فریلنسر و برنامه‌نویس وب",
          generation: 1,
          schoolType: "پسرانه",
          major: "شبکه و نرم‌افزار",
          img: "default-BoyStudent.png",
          socialLinks: [{ type: "github", link: "https://github.com" }],
        },
        {
          fullName: "سارا مرادی",
          job: "طراح تجربه کاربری (UI/UX)",
          generation: 2,
          schoolType: "دخترانه",
          major: "طراحی و گرافیک",
          img: "default-GirlStudent.png",
          socialLinks: [{ type: "linkedin", link: "https://linkedin.com" }],
        },
        {
          fullName: "محمد رضایی",
          job: "توسعه‌دهنده فول‌استک",
          generation: 3,
          schoolType: "پسرانه",
          major: "کامپیوتر",
          img: "default-BoyStudent.png",
          socialLinks: [{ type: "website", link: "https://rokadschool.ir" }],
        },
        {
          fullName: "مریم رضایی",
          job: "طراح محصول دیجیتال",
          generation: 2,
          schoolType: "دخترانه",
          major: "طراحی وب",
          img: "default-GirlStudent.png",
          socialLinks: [{ type: "linkedin", link: "https://linkedin.com" }],
        },
      ]);
      console.log("Students seeded successfully.");
    } else {
      console.log(`Students already exist (${students.length} items).`);
    }

    // 4. افتخارات (Awards)
    const awardsCount = await Award.countDocuments();
    if (awardsCount === 0 && students.length > 0) {
      console.log("Seeding Awards...");
      await Award.create([
        {
          title: "مقام اول جشنواره‌ی جوان خوارزمی",
          rank: 1,
          description: "رتبه‌ی استانی و کشوری در بخش وب و سامانه‌های هوشمند",
          winners: [students[0]._id, students[1]._id],
        },
        {
          title: "مقام دوم مسابقات برنامه‌نویسی شریف",
          rank: 2,
          description: "طراحی و توسعه راه‌کار ابری نوین مدیریت تیم‌های دانش‌آموزی",
          winners: [students[2]._id],
        },
        {
          title: "مقام سوم رویداد ملی استارتاپ‌ویکند",
          rank: 3,
          description: "کسب تندیس نوآوری و لوح تقدیر در بخش محصولات دیجیتال",
          winners: [students[3]._id],
        },
      ]);
      console.log("Awards seeded successfully.");
    } else {
      console.log(`Awards already exist (${awardsCount} items).`);
    }

    // 5. نظرات (Comments)
    const commentsCount = await Comment.countDocuments();
    if (commentsCount === 0) {
      console.log("Seeding Comments...");
      await Comment.create([
        {
          author: "آرتین امیری",
          content: "رکاد فضایی ساخت که از سال دهم تونستم وارد پروژه‌های واقعی بشم و اولین قرارداد کاری فریلنسریم رو امضا کنم.",
          role: "هنرجوی نسل ۲",
          img: "default-BoyStudent.png",
          createdAt: new Date(),
        },
        {
          author: "سارا رضایی",
          content: "محیط پویا، مربی‌های دلسوز و چالش‌های گروهی باعث شد اعتمادبه‌نفس بالایی برای حل مسائل پیچیده پیدا کنم.",
          role: "هنرجوی نسل ۱",
          img: "default-GirlStudent.png",
          createdAt: new Date(),
        },
        {
          author: "محمد کریمی",
          content: "تجربه برگزاری استارتاپ‌ویکندها و کار تیمی در رکاد، یادگیری رو برام صد برابر لذت‌بخش‌تر از مدرسه عادی کرد.",
          role: "فارغ‌التحصیل",
          img: "default-BoyStudent.png",
          createdAt: new Date(),
        },
        {
          author: "مهندس علیرضا کیانی",
          content: "انرژی و خلاقیتی که بچه‌های رکاد در پروژه‌های تیمی نشون می‌دن واقعاً ستودنیه.",
          role: "منتور فناوری",
          img: "defaultManTeacher.png",
          createdAt: new Date(),
        },
      ]);
      console.log("Comments seeded successfully.");
    } else {
      console.log(`Comments already exist (${commentsCount} items).`);
    }

    // 6. سئو (Seo)
    const seoCount = await Seo.countDocuments();
    if (seoCount === 0) {
      console.log("Seeding SEO...");
      await Seo.create({
        title: "هنرستان استارتاپی رکاد",
        description: "اولین هنرستان استارتاپی کشور در دو شعبه دخترانه و پسرانه — آموزش تخصصی مهارت‌های آینده",
        keywords: "رکاد, هنرستان استارتاپی, آموزش کامپیوتر, طراحی وب, مشهد",
        robots: "index, follow",
        canonicalUrl: "https://rokadschool.ir",
        ogTitle: "هنرستان استارتاپی رکاد",
        ogDescription: "اولین هنرستان استارتاپی کشور در دو شعبه دخترانه و پسرانه",
        ogType: "website",
        twitterCard: "summary_large_image",
      });
      console.log("SEO seeded successfully.");
    } else {
      console.log(`SEO already exists (${seoCount} items).`);
    }

    console.log("All seed operations completed successfully!");
  } catch (err) {
    console.error("Seed error:", err);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB.");
  }
}

runSeed();
