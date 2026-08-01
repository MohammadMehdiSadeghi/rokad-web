import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import { ChevronLeftIcon, ChevronRightIcon } from "../Icons";

import "swiper/css";

const comments = [
  {
    id: 1,
    theme: "navy",
    text: "این یک متن تستی برای کامنت اول است. ساختار کارت‌ها در اینجا قرار می‌گیرد تا بررسی کنیم.",
    name: "آرتین امیری",
    role: "جپ",
  },
  {
    id: 2,
    theme: "pink",
    text: "این یک متن تستی برای کامنت دوم است. ساختار کارت‌ها در اینجا قرار می‌گیرد تا بررسی کنیم.",
    name: "سارا رضایی",
    role: "جپ",
  },
  {
    id: 3,
    theme: "teal",
    text: "این یک متن تستی برای کامنت سوم است. ساختار کارت‌ها در اینجا قرار می‌گیرد تا بررسی کنیم.",
    name: "محمد کریمی",
    role: "جپ",
  }
];

// تابع استخراج حروف اول نام و فامیل
const getInitials = (name) => {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 0) return "";
  const first = parts[0].charAt(0);
  const second = parts.length > 1 ? parts[1].charAt(0) : "";
  return second ? `${first}.${second}` : first;
};

const THEME_MAP = {
  navy: {
    borderColor: "border-[#21295A]",
    solidColor: "bg-[#21295A]",
    nameColor: "text-[#21295A]",
    quoteColor: "text-[#21295A]",
  },
  pink: {
    borderColor: "border-[#E0195B]",
    solidColor: "bg-[#E0195B]",
    nameColor: "text-[#E0195B]",
    quoteColor: "text-[#E0195B]",
  },
  teal: {
    borderColor: "border-[#58BDAF]",
    solidColor: "bg-[#58BDAF]",
    nameColor: "text-[#58BDAF]",
    quoteColor: "text-[#58BDAF]",
  },
};

export default function Comments() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="relative w-full py-20 px-6 overflow-hidden bg-[#E4F4F2]">
      <div className="relative z-10 w-[94%] mx-auto">
        
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
          <div className="relative flex-shrink-0 z-20">
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

          {/* کاروسل Swiper */}
          <div className="flex-1 w-full relative z-10 py-8 px-6 overflow-hidden">
            <Swiper
              modules={[Navigation, A11y]}
              spaceBetween={24}
              slidesPerView={1}
              dir="rtl"
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="!overflow-visible"
            >
              {comments.map((comment, i) => {
                const theme = THEME_MAP[comment.theme];
                const rotation = i % 2 === 0 ? -1 : 1;
                
                return (
                  <SwiperSlide key={comment.id} className="!h-auto">
                    <div className="relative" style={{ transform: `rotate(${rotation}deg)` }}>
                      
                      {/* لایه پشتی کارت */}
                      <div 
                        aria-hidden="true" 
                        className={`absolute top-[3px] left-[5px] w-full h-full ${theme.solidColor} rounded-[0_18.06px_0_18.06px]`}
                      ></div>

                      {/* کارت اصلی */}
                      <div className={`relative z-10 bg-white border-[2.01px] ${theme.borderColor} rounded-[0_18.06px_0_18.06px] p-6 min-h-[250px] flex flex-col`}>
                        
                        {/* علامت کوتیشن */}
                        <span className={`text-4xl font-black mb-2 ${theme.quoteColor}`}>”</span>
                        
                        {/* متن داخل کارت */}
                        <p className="text-[14px] sm:text-[15px] leading-7 text-[#292827] flex-grow">
                          {comment.text}
                        </p>

                        {/* اطلاعات نویسنده و آواتار */}
                        {/* 1. کاهش فاصله از کارت (gap-3) */}
                        <div className={`mt-6 pt-4 border-t border-dashed ${theme.borderColor} flex items-center gap-3`}>
                          
                          {/* ── مستطیل آواتار (پروفایل) ── */}
                          <div className="relative flex-shrink-0">
                            {/* لایه پشتی آواتار: رنگ #292827، 7px راست، 4px پایین */}
                            <div 
                              className="absolute top-[1px] left-[2px] w-full h-full bg-[#292827] rounded-[5.83px_0_5.83px_0]"
                            ></div>
                            {/* لایه اصلی آواتار */}
                            {/* 2. رنگ بک‌گراند تم، 3. بوردر 0.05px #292827 و ردیوس 5.83px */}
                            <div 
                              className={`relative w-10 h-10 rounded-[5.83px_0_5.83px_0] border-[0.05px] border-[#292827] ${theme.solidColor} flex items-center justify-center`}
                            >
                              {/* 4. رنگ متن سفید */}
                              <span className="font-black text-[14px] text-white">
                                {getInitials(comment.name)}
                              </span>
                            </div>
                          </div>

                          {/* نام و نقش */}
                          <div className="flex flex-col">
                            <h4 className={`font-black text-[16px] ${theme.nameColor}`}>
                              {comment.name}
                            </h4>
                            <p className="text-[12px] text-gray-500 mt-1">{comment.role}</p>
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
          <div className="relative flex-shrink-0 z-20">
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