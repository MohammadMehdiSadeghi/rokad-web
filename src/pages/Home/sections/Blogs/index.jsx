import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y } from "swiper/modules";
import { ChevronLeftIcon, ChevronRightIcon } from "../../../../common/Icons";
import Container from "../../../../layout/Container";

import "swiper/css";

const blogImg = "/assets/Blogs/blog-card-cover.png";
const patternBg = "/assets/Pattern/layout-pattern.png";

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
      className="
        relative
        w-full
        max-w-[36rem]
        sm:max-w-[44rem]
        mx-auto
        transition-transform
        duration-500
        ease-out
        hover:rotate-0
      "
      style={{
        transform: `rotate(${rotation}deg)`,
      }}
    >
      {/* Shadow */}
      <div
        aria-hidden="true"
        className="
          absolute
          top-[0.25rem]
          left-[0.25rem]
          h-[25.625rem]
          sm:top-[0.3125rem]
          sm:left-[0.3125rem]
          w-full
          bg-[#292827]
          rounded-[1.875rem_0_1.875rem_0]
          [corner-shape:squircle]
        "
      />

      {/* Card */}
      <article
        className="
          relative
          z-10
          bg-white
          border-[0.09375rem]
          sm:border-[0.125rem]
          border-[#292827]
          rounded-[1.875rem_0_1.875rem_0]
          [corner-shape:squircle]
          overflow-hidden
          h-[25.625rem]
          flex
          flex-col
        "
      >
        {/* Image */}
        <img
          src={blogImg}
          alt={title}
          loading="lazy"
          className="
            w-full
            h-[10.625rem]
            sm:h-[11.875rem]
            object-cover
            border-b-[0.09375rem]
            sm:border-b-[0.125rem]
            border-[#292827]
          "
        />

        {/* Content */}
        <div className="flex-1 flex flex-col justify-between p-5 sm:p-6 overflow-hidden">
          <h4
            className="
              font-black
              text-[1rem]
              sm:text-[1.0625rem]
              text-ink
              mb-2.5
              leading-snug
            "
          >
            {title}
          </h4>

          <p
            className="
              text-[0.8125rem]
              leading-[1.85]
              text-ink/60
              mb-4
              line-clamp-2
            "
          >
            {body}
          </p>

          {/* Divider */}
          <div
            className="
              border-t
              border-dashed
              border-[#292827]/50
              pt-3
              mt-auto
              flex
              items-center
              justify-between
              gap-2
            "
          >
            <span
              className="
                text-[0.75rem]
                sm:text-[0.8125rem]
                font-bold
                text-ink/70
                whitespace-nowrap
              "
            >
              {date}
            </span>

            <span
              className="
                inline-block
                bg-[#292827]
                text-white
                text-[0.6875rem]
                sm:text-[0.75rem]
                font-bold
                px-3
                py-1.5
                rounded-[0.375rem]
                [corner-shape:squircle]
                whitespace-nowrap
              "
            >
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
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      className="
        relative
        pt-[4rem]
        sm:pt-[5rem]
        lg:pt-[6rem]
        pb-[4rem]
        sm:pb-[5rem]
        lg:pb-[6rem]
        px-4
        sm:px-6
        lg:px-8
        bg-white
        overflow-hidden
      "
      dir="rtl"
    >
      {/* =====================================================
          BACKGROUND PATTERN — همون ماسک گرادیانی هیرو/دوئال‌اسکول:
          بالا و پایین سکشن محو میشه که لبه‌ها بریده به نظر نرسن
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          w-full
          h-full
          z-0
          pointer-events-none
          [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]
          [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]
        "
      >
        <img
          src={patternBg}
          alt=""
          aria-hidden="true"
          draggable="false"
          className="
            w-full
            h-full
            object-cover
            opacity-60
            rotate-180
            select-none
          "
        />
      </div>

      <Container className="relative z-10">
        <div className="w-full mx-auto">
          {/* =================================================
              HEADER
          ================================================= */}

          <div
            className="
              relative
              flex
              flex-col
              sm:flex-row
              items-center
              justify-between
              gap-4
              sm:gap-6
              mb-[2rem]
              sm:mb-[2.5rem]
              lg:mb-[3rem]
            "
          >
            {/* Heading */}

            <div className="flex-1 flex sm:justify-start">
              <h2
                className="
                  text-center
                  sm:text-right
                  font-black
                  text-[1.5rem]
                    sm:text-[2.25rem]
                    md:text-[2.25rem]
                    lg:text-[3.3125rem]
                    xl:text-[3.3125rem]
                  leading-[1.3]
                  text-ink
                  flex
                  flex-wrap
                  justify-center
                  sm:justify-start
                  items-center
                  gap-x-2
                  gap-y-1
                "
              >
                <span
                  className="
                    inline-block
                    rotate-3
                    text-ink
                  "
                >
                  تازه‌های
                </span>

                <span
                  className="
                    inline-block
                    -rotate-3
                    text-navy
                  "
                >
                  اکوسیستم
                </span>

                <span
                  className="
                    inline-block
                    rotate-3
                    text-ink
                  "
                >
                  و
                </span>

                <span
                  className="
                    inline-block
                    rotate-3
                    text-magenta
                  "
                >
                  آموزش
                </span>
              </h2>
            </div>
          </div>

          {/* =================================================
              CAROUSEL
          ================================================= */}

          <div
            className="
              flex
              items-center
              justify-between
              gap-2
              sm:gap-4
              md:gap-6
            "
          >
            {/* Previous */}

            <div
              className="
                relative
                flex-shrink-0
                z-30
                hidden
                lg:flex
              "
            >
              <div
                aria-hidden="true"
                className="
                  absolute
                  top-[0.125rem]
                  left-[0.1875rem]
                  w-full
                  h-full
                  bg-[#292827]
                  rounded-[0_0.853125rem_0_0.853125rem]
                  [corner-shape:squircle]
                "
              />

              <button
                type="button"
                aria-label="پست قبلی"
                onClick={() => swiperRef.current?.slidePrev()}
                className="
                  relative
                  w-12
                  h-12
                  flex
                  items-center
                  justify-center
                  bg-white
                  border-[0.125rem]
                  border-[#292827]
                  text-ink
                  rounded-[0_0.853125rem_0_0.853125rem]
                  [corner-shape:squircle]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  cursor-pointer
                "
              >
                <ChevronRightIcon className="w-6 h-6" />
              </button>
            </div>

            {/* Swiper */}

            <div
              className="
                flex-1
                w-full
                min-w-0
                [overflow-x:clip]
                [overflow-y:visible]
                px-4
                sm:px-8
                py-6
                sm:py-10
              "
            >
              <Swiper
                modules={[A11y]}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                onSlideChange={(swiper) => {
                  setActiveIndex(swiper.realIndex);
                }}
                dir="rtl"
                spaceBetween={40}
                slidesPerView={1}
                loop={true}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 2,
                  },
                  1280: {
                    slidesPerView: 3,
                  },
                }}
                className="!overflow-visible"
              >
                {posts.map((post, index) => {
                  const rotation = index % 2 === 0 ? -1 : 1;

                  return (
                    <SwiperSlide
                      key={`${post.title}-${index}`}
                      className="!h-auto flex items-stretch"
                    >
                      <BlogCard {...post} rotation={rotation} />
                    </SwiperSlide>
                  );
                })}
              </Swiper>

              {/* ── دکمه مشاهده همه — تراز با آخرین کارت ── */}
              <div className="hidden xl:flex justify-start mt-6">
                <div
                  className="
                    relative
                    inline-flex
                    items-center
                    justify-center
                    rotate-[-1.55deg]
                    hover:rotate-0
                    transition-all
                    duration-300
                  "
                >
                  <div
                    aria-hidden="true"
                    className="
                      absolute
                      top-[0.125rem]
                      left-[0.125rem]
                      w-full
                      h-full
                      rounded-[0_0.57rem_0_0.57rem]
                      [corner-shape:squircle]
                      bg-[#21295A]
                    "
                  />
                  <a
                    href="#"
                    className="
                      relative
                      z-10
                      bg-white
                      border-[0.125rem]
                      border-[#21295A]
                      text-[#21295A]
                      font-extrabold
                      text-sm
                      sm:text-base
                      px-6
                      py-3
                      rounded-[0_0.57rem_0_0.57rem]
                      [corner-shape:squircle]
                      whitespace-nowrap
                      cursor-pointer
                      flex-shrink-0
                      [background-image:linear-gradient(to_right,#21295A,#21295A)]
                      bg-no-repeat
                      [background-size:0%_100%]
                      hover:[background-size:100%_100%]
                      hover:text-white
                      transition-all
                      duration-300
                      ease-out
                    "
                  >
                    مشاهده همه بلاگ‌ها
                  </a>
                </div>
              </div>
            </div>

            {/* Next */}

            <div
              className="
                relative
                flex-shrink-0
                z-30
                hidden
                lg:flex
              "
            >
              <div
                aria-hidden="true"
                className="
                  absolute
                  top-[0.125rem]
                  left-[0.1875rem]
                  w-full
                  h-full
                  bg-[#292827]
                  rounded-[0_0.853125rem_0_0.853125rem]
                  [corner-shape:squircle]
                "
              />

              <button
                type="button"
                aria-label="پست بعدی"
                onClick={() => swiperRef.current?.slideNext()}
                className="
                  relative
                  w-12
                  h-12
                  flex
                  items-center
                  justify-center
                  bg-white
                  border-[0.125rem]
                  border-[#292827]
                  text-[#292827]
                  rounded-[0_0.853125rem_0_0.853125rem]
                  [corner-shape:squircle]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  cursor-pointer
                "
              >
                <ChevronLeftIcon className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* =================================================
              MOBILE PROGRESS
          ================================================= */}

          <div className="mt-2 flex justify-center lg:hidden">
            <div
              className="
                w-[9.375rem]
                h-1.5
                bg-[#EDECEC]
                rounded-full
                overflow-hidden
              "
            >
              <div
                className="
                  h-full
                  bg-[#333230]
                  transition-all
                  duration-500
                  ease-out
                  rounded-full
                "
                style={{
                  width: `${((activeIndex + 1) / posts.length) * 100}%`,
                }}
              />
            </div>
          </div>

          {/* ── دکمه مشاهده همه — موبایل و تبلت ── */}
          <div className="flex xl:hidden justify-center mt-6">
            <div
              className="
                relative
                inline-flex
                items-center
                justify-center
                rotate-[-1.55deg]
                hover:rotate-0
                transition-all
                duration-300
              "
            >
              <div
                aria-hidden="true"
                className="
                  absolute
                  top-[0.125rem]
                  left-[0.125rem]
                  w-full
                  h-full
                  rounded-[0_0.57rem_0_0.57rem]
                  [corner-shape:squircle]
                  bg-[#21295A]
                "
              />
              <a
                href="#"
                className="
                  relative
                  z-10
                  bg-white
                  border-[0.125rem]
                  border-[#21295A]
                  text-[#21295A]
                  font-extrabold
                  text-sm
                  sm:text-base
                  px-6
                  py-3
                  rounded-[0_0.57rem_0_0.57rem]
                  [corner-shape:squircle]
                  whitespace-nowrap
                  cursor-pointer
                  flex-shrink-0
                  [background-image:linear-gradient(to_right,#21295A,#21295A)]
                  bg-no-repeat
                  [background-size:0%_100%]
                  hover:[background-size:100%_100%]
                  hover:text-white
                  transition-all
                  duration-300
                  ease-out
                "
              >
                مشاهده همه بلاگ‌ها
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
