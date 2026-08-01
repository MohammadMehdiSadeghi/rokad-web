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
    name: "نام شخص اول",
    role: "جپ",
  },
  {
    id: 2,
    theme: "pink",
    text: "این یک متن تستی برای کامنت دوم است. ساختار کارت‌ها در اینجا قرار می‌گیرد تا بررسی کنیم.",
    name: "نام شخص دوم",
    role: "جپ",
  },
  {
    id: 3,
    theme: "teal",
    text: "این یک متن تستی برای کامنت سوم است. ساختار کارت‌ها در اینجا قرار می‌گیرد تا بررسی کنیم.",
    name: "نام شخص سوم",
    role: "جپ",
  },
];

const THEME_MAP = {
  navy: {
    borderColor: "border-[#21295A]",
    solidColor: "bg-[#21295A]",
    nameColor: "text-[#21295A]",
    quoteColor: "text-[#21295A]/20",
  },
  pink: {
    borderColor: "border-[#E0195B]",
    solidColor: "bg-[#E0195B]",
    nameColor: "text-[#E0195B]",
    quoteColor: "text-[#E0195B]/20",
  },
  teal: {
    borderColor: "border-[#58BDAF]",
    solidColor: "bg-[#58BDAF]",
    nameColor: "text-[#58BDAF]",
    quoteColor: "text-[#58BDAF]/20",
  },
};

export default function Comments() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="relative w-full py-20 px-6 overflow-hidden bg-[#E4F4F2]">
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

        {/* ── دکمه‌های ناوبری ── */}
        <div className="flex justify-center items-center gap-6 mb-10">
          <div className="relative">
            <div className="absolute top-[2px] left-[3px] w-full h-full bg-[#21295A] rounded-[0_8.65px_0_8.65px]"></div>
            <button
              type="button"
              ref={prevRef}
              aria-label="کامت قبلی"
              className="relative w-12 h-12 flex items-center justify-center bg-white border-[2px] border-[#21295A] text-[#21295A] rounded-[0_8.65px_0_8.65px] transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            >
              <ChevronRightIcon className="w-5 h-5" />
            </button>
          </div>
          
          <div className="relative">
            <div className="absolute top-[2px] left-[3px] w-full h-full bg-[#21295A] rounded-[0_8.65px_0_8.65px]"></div>
            <button
              type="button"
              ref={nextRef}
              aria-label="کامت بعدی"
              className="relative w-12 h-12 flex items-center justify-center bg-white border-[2px] border-[#21295A] text-[#21295A] rounded-[0_8.65px_0_8.65px] transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            >
              <ChevronLeftIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ── کاروسل Swiper ── */}
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
          {comments.map((comment) => {
            const theme = THEME_MAP[comment.theme];
            return (
              <SwiperSlide key={comment.id} className="!h-auto">
                {/* پکیج کارت (برای نگه داشتن لایه پشتی و کارت اصلی) */}
                <div className="relative">
                  
                  {/* 1. لایه پشتی (Offset Layer) - 7px راست، 4px پایین */}
                  <div 
                    aria-hidden="true" 
                    className={`absolute top-[4px] left-[7px] w-full h-full ${theme.solidColor} rounded-[0_18.06px_0_18.06px]`}
                  ></div>

                  {/* کارت اصلی */}
                  {/* 2. بوردر 2.01px و ردیوس دقیق */}
                  <div className={`relative z-10 bg-white border-[2.01px] ${theme.borderColor} rounded-[0_18.06px_0_18.06px] p-6 min-h-[250px] flex flex-col`}>
                    
                    {/* 4. علامت کوتیشن با رنگ متناسب با کارت */}
                    <span className={`text-4xl font-black mb-2 ${theme.quoteColor}`}>”</span>
                    
                    <p className="text-[14px] sm:text-[15px] leading-7 text-[#292827] flex-grow">
                      {comment.text}
                    </p>

                    {/* اطلاعات نویسنده */}
                    {/* 3. خط جداکننده dashed با رنگ کارت */}
                    <div className={`mt-6 pt-4 border-t-2 border-dashed ${theme.borderColor}`}>
                      <h4 className={`font-black text-[16px] ${theme.nameColor}`}>
                        {comment.name}
                      </h4>
                      <p className="text-[12px] text-gray-500 mt-1">{comment.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

      </div>
    </section>
  );
}