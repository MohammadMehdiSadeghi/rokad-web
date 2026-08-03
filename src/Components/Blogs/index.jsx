import blogImg from "../../assets/Blogs/Frame 1000006381.png";

const posts = [
  {
    tag: "همه دانش‌آموزان",
    date: "تابستان ۱۴۰۵",
    title: "چطور برای فرزندمون رشته‌ی هنرستان رو انتخاب کنیم؟",
    body: "یه راهنمای عملی برای والدین که می‌خوان بهترین تصمیم رو برای آینده‌ی تحصیلی فرزندشون بگیرن.",
  },
  {
    tag: "دانش‌آموزان هنرستان",
    date: "تابستان ۱۴۰۵",
    title: "چطور برای اولین‌بار وارد بازار کار شی؟",
    body: "قدم‌به‌قدم با تجربه‌ی فارغ‌التحصیلای رکاد که رزومه‌شون رو ساختن و اولین قرارداد کاریشون رو گرفتن.",
  },
  {
    tag: "خانواده‌ها",
    date: "بهار ۱۴۰۵",
    title: "استعدادسنجی؛ اولین قدم مسیر شخصی‌سازی‌شده",
    body: "چرا رکاد قبل از شروع هر چیزی، اول می‌شینه پای حرفت تا مسیر رشدت رو دقیق طراحی کنه.",
  },
];

function BlogCard({ tag, date, title, body }) {
  return (
    <div className="relative w-full max-w-[300px]  sm:max-w-[320px] mx-auto">
      {/* لایه سایه‌ی مشکی پشت کارت — مثل کارت‌های Honors */}
      <div
        aria-hidden="true"
        className="absolute top-[4px] left-[4px] min-h-[410px]   sm:top-[5px] sm:left-[5px] w-full h-full bg-[#292827] rounded-[0_20px_0_20px] sm:rounded-[0_24px_0_24px]"
      />

      {/* کارت اصلی */}
      <article
        className="relative z-10 bg-white border-[1.5px] min-h-[410px]
      sm:border-[2px] border-[#292827] rounded-[0_20px_0_20px] sm:rounded-[0_24px_0_24px] 
      overflow-hidden"
      >
        {/* تصویر */}
        <img
          src={blogImg}
          alt={title}
          loading="lazy"
          className="w-full h-[170px] sm:h-[190px] object-cover border-b-[1.5px] sm:border-b-[2px] border-[#292827]"
        />

        {/* متن */}
        <div className="p-5 sm:p-6">
          <h4 className="font-black text-[16px] sm:text-[17px] text-ink mb-2.5 leading-snug">
            {title}
          </h4>
          <p className="text-[13px] leading-[1.85] text-ink/60 mb-4 line-clamp-2">
            {body}
          </p>

          {/* خط جداکننده‌ی نقطه‌چین */}
          <div className="border-t border-dashed border-[#292827]/50 pt-3 flex items-center justify-between">
            <span className="inline-block bg-[#292827] text-white text-[11px] sm:text-[12px] font-bold px-3 py-1.5 rounded-[6px]">
              {tag}
            </span>
            <span className="text-[12px] sm:text-[13px] font-bold text-ink/70">
              {date}
            </span>
          </div>
        </div>
      </article>
    </div>
  );
}

export default function Blogs() {
  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-[92%] sm:max-w-[85%] lg:max-w-[80%] mx-auto">
        {/* عنوان */}
        <h2 className="text-center font-black text-[26px] sm:text-[34px] lg:text-[40px] leading-[1.3] text-ink mb-4 flex flex-wrap justify-center items-center gap-x-2">
          <span className="inline-block -rotate-3">تازه‌های</span>
          <span className="inline-block rotate-3 text-teal">اکوسیستم</span>
          <span className="inline-block -rotate-3">و</span>
          <span className="inline-block rotate-3">آموزش</span>
        </h2>

        <p className="text-center font-medium text-[13px] sm:text-[15px] leading-[1.9] text-ink/60 max-w-[560px] mx-auto mb-14 sm:mb-16">
          آخرین خبرها، تجربه‌ها و راهنماهای رکاد رو اینجا دنبال کن.
        </p>

        {/* گرید کارت‌ها */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 justify-items-center">
          {posts.map((p) => (
            <BlogCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
