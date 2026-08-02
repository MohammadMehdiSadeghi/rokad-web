export default function Comments() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="relative w-full py-20 px-6 bg-[#E4F4F2]">
      <div className="relative z-10 w-[80%] mx-auto">
        {/* ── هدر سکشن ── */}
        <h2 className="font-black text-[28px] sm:text-[38px] lg:text-[42px] leading-[1.5] text-[#292827] mb-12 flex flex-wrap justify-center items-center gap-x-3">
          <span className="inline-block -rotate-3">از</span>
          <span className="inline-block rotate-3">زبون</span>
          <span className="inline-block -rotate-3">کسایی</span>
          <span className="inline-block rotate-3">که</span>
          <span className="inline-block -rotate-3 text-teal">تجربه</span>
          <span className="inline-block rotate-3 text-teal">کردن</span>
        </h2>

        {/* ── پکیج کاروسل و دکمه‌های ناوبری ── */}
        <div className="flex items-center justify-between gap-4 md:gap-6">
          {/* دکمه سمت راست */}
          <div className="relative flex-shrink-0 z-30">
            <div className="absolute top-[2px] left-[3px] w-full h-full bg-[#292827] rounded-[0_8.65px_0_8.65px]"></div>
            <button
              type="button"
              ref={prevRef}
              aria-label="کامت قبلی"
              className="relative w-12 h-12 flex items-center justify-center bg-white border-[2px] border-[#292827] text-[#292827] rounded-[0_8.65px_0_8.65px] transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            >
              <ChevronRightIcon className="w-5 h-5" />
            </button>
          </div>

          {/* کاروسل Swiper - پدینگ عمودی کمی کاهش یافت چون مشکل برش با روش دیگر حل می‌شود */}
          <div className="flex-1 w-full relative z-10 py-10 px-2 overflow-hidden">
            
            <Swiper
              modules={[Navigation, A11y]}
              spaceBetween={24}
              slidesPerView={1}
              loop={true}
              centeredSlides={true}
              dir="rtl"
              // 👇 این دو خط باعث می‌شوند اسلایدها از لبه‌های کادر فاصله بگیرند
              slidesOffsetBefore={40}
              slidesOffsetAfter={40}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              breakpoints={{
                640: { slidesPerView: 1.5, slidesOffsetBefore: 40, slidesOffsetAfter: 40 },
                1024: { slidesPerView: 3, slidesOffsetBefore: 60, slidesOffsetAfter: 60 },
              }}
            >
              {comments.map((comment, i) => {
                const theme = THEME_MAP[comment.theme];
                const rotation = i % 2 === 0 ? -1 : 1;

                return (
                  <SwiperSlide 
                    key={comment.id} 
                    className="!h-auto" 
                    // 👇 بسیار مهم: اجازه می‌دهد چرخش و لایه پشتی از کادر اسلاید بیرون بزند بدون بریده شدن
                    style={{ overflow: 'visible' }} 
                  >
                    <div
                      className="relative"
                      style={{ transform: `rotate(${rotation}deg)` }}
                    >
                      {/* لایه پشتی کارت */}
                      <div
                        aria-hidden="true"
                        className={`absolute top-[3px] left-[5px] w-full h-full ${theme.solidColor} rounded-[0_18.06px_0_18.06px]`}
                      ></div>

                      {/* کارت اصلی */}
                      <div
                        className={`relative z-10 bg-white border-[2.01px] ${theme.borderColor} rounded-[0_18.06px_0_18.06px] p-6 min-h-[250px] flex flex-col`}
                      >
                        {/* علامت کوتیشن */}
                        <span
                          className={`text-4xl font-black mb-2 ${theme.quoteColor}`}
                        >
                          ”
                        </span>

                        {/* متن داخل کارت */}
                        <p className="text-[14px] sm:text-[15px] leading-7 text-[#292827] flex-grow">
                          {comment.text}
                        </p>

                        {/* اطلاعات نویسنده و آواتار */}
                        <div
                          className={`mt-6 pt-4 border-t border-dashed ${theme.borderColor} flex items-center gap-3`}
                        >
                          {/* ── مستطیل آواتار (پروفایل) ── */}
                          <div className="relative flex-shrink-0">
                            {/* لایه پشتی آواتار */}
                            <div className="absolute top-[1px] left-[2px] w-full h-full bg-[#292827] rounded-[5.83px_0_5.83px_0]"></div>
                            {/* لایه اصلی آواتار */}
                            <div
                              className={`relative w-10 h-10 rounded-[5.83px_0_5.83px_0] border-[0.05px] border-[#292827] ${theme.solidColor} flex items-center justify-center`}
                            >
                              <span className="font-black text-[14px] text-white">
                                {getInitials(comment.name)}
                              </span>
                            </div>
                          </div>

                          {/* نام و نقش */}
                          <div className="flex flex-col">
                            <h4
                              className={`font-black text-[16px] ${theme.nameColor}`}
                            >
                              {comment.name}
                            </h4>
                            <p className="text-[12px] text-gray-500 mt-1">
                              {comment.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>

          {/* دکمه سمت چپ */}
          <div className="relative flex-shrink-0 z-30">
            <div className="absolute top-[2px] left-[3px] w-full h-full bg-[#292827] rounded-[0_8.65px_0_8.65px]"></div>
            <button
              type="button"
              ref={nextRef}
              aria-label="کامت بعدی"
              className="relative w-12 h-12 flex items-center justify-center bg-white border-[2px] border-[#292827] text-[#292827] rounded-[0_8.65px_0_8.65px] transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            >
              <ChevronLeftIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}