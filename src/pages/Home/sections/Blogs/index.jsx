import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y } from "swiper/modules";
import { ChevronLeftIcon, ChevronRightIcon } from "../../../../common/Icons"; // مسیر اصلاح شد
import Container from "../../../../layout/Container";

import "swiper/css";

// چون عکس در پوشه public است، مستقیماً با آدرس ریشه فراخوانی می‌شود
const blogImg = "/assets/Blogs/blog-card-cover.png";

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
    body: "قدم‌به‌قدم با تجربه‌ی فارغ‌التحصیلای رکاد که رزومه‌شون رو ساختن و اولین قرارداد کاریشون رو گرفتتن.",
  },
  {
    tag: "خانواده‌ها",
    date: "بهار ۱۴۰۵",
    title: "استعدادسنجی؛ اولین قدم مسیر شخصی‌سازی‌شده",
    body: "چرا رکاد قبل از شروع هر چیزی، اول می‌شینه پای حرفت تا مسیر رشدت رو دقیق طراحی کنه.",
  },
  {
    tag: "دانش‌آموزان هنرستان",
    date: "بهار ۱۴۰۵",
    title: "ساخت پروژه‌ی اول؛ از ایده تا اجرا",
    body: "چطور یه پروژه‌ی واقعی رو از صفر شروع کنیم و تا انتها با انگیزه پیش ببریمش.",
  },
  {
    tag: "خانواده‌ها",
    date: "زمستان ۱۴۰۴",
    title: "نقش والدین در انتخاب مسیر شغلی فرزند",
    body: "چه‌جوری بدون فشار زیاد، کنار فرزندمون باشیم تا خودش مسیرش رو پیدا کنه.",
  },
  {
    tag: "همه دانش‌آموزان",
    date: "زمستان ۱۴۰۴",
    title: "مهارت‌هایی که هر هنرجو باید قبل از فارغ‌التحصیلی یاد بگیره",
    body: "لیستی از مهارت‌های عملی که تفاوت رزومه‌ی قوی و ضعیف رو مشخص می‌کنه.",
  },
];

function BlogCard({ tag, date, title, body, rotation = 0 }) {
  return (
    <div
      className="relative w-full max-w-[360px] sm:max-w-[400px] mx-auto transition-transform duration-500 ease-out hover:rotate-0"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      {/* لایه سایه‌ی مشکی پشت کارت */}
      <div
        aria-hidden="true"
        className="absolute top-[4px] left-[4px] min-h-[410px] sm:top-[5px] sm:left-[5px] w-full h-full bg-[#292827] rounded-[0_20px_0_20px] sm:rounded-[0_24px_0_24px]"
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
            <span className="text-[12px] sm:text-[13px] font-bold text-ink/70">
              {date}
            </span>
            <span className="inline-block bg-[#292827] text-white text-[11px] sm:text-[12px] font-bold px-3 py-1.5 rounded-[6px]">
              {tag}
            </span>
          </div>
        </div>
      </article>
    </div>
  );
}

export default function Blogs() {
  const swiperRef = useRef(null);

  return (
    // فاصله ۱۲۰ از بالا و ۹۸ از پایین
    <section className="pt-[120px] pb-[98px] bg-white" dir="rtl">
      <Container>
        <div className="w-full mx-auto">
          
          {/* ── کانتینر تایتل و دکمه ── */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-[97px] mr-5">
            
            {/* تایتل داخل یک div */}
            <div>
              <h2 className="text-right font-black text-[53.11px] leading-[1.3] text-ink flex flex-wrap justify-start items-center gap-x-2">
                <span className="inline-block rotate-3 text-ink">تازه‌های</span>
                <span className="inline-block -rotate-3 text-navy">اکوسیستم</span>
                <span className="inline-block rotate-3 text-ink">و</span>
                <span className="inline-block rotate-3 text-magenta">آموزش</span>
              </h2>
            </div>

            {/* دکمه همه مقالات با افکت پر شدن از چپ به راست */}
            <a 
              href="#" 
              className="relative overflow-hidden self-start md:self-auto bg-white border-[2px] border-[#21295A] text-[#21295A] font-extrabold text-sm sm:text-base px-6 py-3 rounded-[0_9.12px_0_9.12px] rotate-[-1.55deg] hover:rotate-0 transition-all duration-300 whitespace-nowrap cursor-pointer flex-shrink-0
              bg-[linear-gradient(to_right,#21295A,#21295A)] bg-no-repeat [background-size:0%_100%] hover:[background-size:100%_100%] hover:text-white"
            >
              همه مقالات
            </a>

          </div>

          {/* ── پکیج کاروسل و دکمه‌های ناوبری ── */}
          <div className="flex items-center justify-between gap-2 sm:gap-4 md:gap-6">
            {/* دکمه سمت راست (اسلاید قبلی در RTL) */}
            <div className="relative flex-shrink-0 z-30">
              <div className="absolute top-[2px] left-[2px] sm:top-[2px] sm:left-[3px] w-full h-full bg-[#292827] rounded-[0_8.65px_0_8.65px]"></div>
              <button
                type="button"
                aria-label="پست قبلی"
                onClick={() => swiperRef.current?.slidePrev()}
                className="relative w-9 h-9 sm:w-12 sm:h-12 flex items-center justify-center bg-white border-[1.5px] sm:border-[2px] border-[#292827] text-ink rounded-[0_8.65px_0_8.65px] transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
              >
                <ChevronRightIcon className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
              </button>
            </div>

            {/* اسلایدر */}
            {/* اضافه شدن padding برای جلوگیری از بریده شدن گوشه کارت‌های کج‌شده */}
            <div className="flex-1 w-full overflow-hidden px-4 sm:px-8 py-6 sm:py-10">
              <Swiper
                modules={[A11y]}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                dir="rtl"
                spaceBetween={25}
                slidesPerView={1}
                loop={true} // لوپ بی‌نهایت
                breakpoints={{
                  640: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                className="!overflow-visible"
              >
                {posts.map((p, i) => {
                  const rotation = i % 2 === 0 ? -1 : 1;
                  return (
                    <SwiperSlide
                      key={`${p.title}-${i}`}
                      className="!h-auto flex items-stretch"
                    >
                      <BlogCard {...p} rotation={rotation} />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>

            {/* دکمه سمت چپ (اسلاید بعدی در RTL) */}
            <div className="relative flex-shrink-0 z-30">
              <div className="absolute top-[2px] left-[2px] sm:top-[2px] sm:left-[3px] w-full h-full bg-[#292827] rounded-[0_8.65px_0_8.65px]"></div>
              <button
                type="button"
                aria-label="پست بعدی"
                onClick={() => swiperRef.current?.slideNext()}
                className="relative w-9 h-9 sm:w-12 sm:h-12 flex items-center justify-center bg-white border-[1.5px] sm:border-[2px] border-[#292827] text-[#292827] rounded-[0_8.65px_0_8.65px] transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
              >
                <ChevronLeftIcon className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}