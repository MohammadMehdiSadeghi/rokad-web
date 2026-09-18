"use client";

import { motion } from "framer-motion";

export default function PageLoading({ title = "در حال آماده‌سازی محتوا..." }) {
  return (
    <div
      className="relative min-h-[75vh] w-full flex flex-col items-center justify-center overflow-hidden px-4 select-none"
      dir="rtl"
    >
      {/* ── پس‌زمینه با پترن ارگانیک و گرادیان نوری ملایم ── */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-gradient-to-tr from-[#59BBAF]/15 via-[#E0195B]/10 to-[#F8A41D]/15 rounded-full blur-[90px] animate-pulse" />
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage: "url('/assets/Pattern/layout-pattern.png')",
            backgroundSize: "24rem",
          }}
        />
      </div>

      {/* ── کارت گلس‌مورفیک شناور لوکس ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex flex-col items-center justify-center p-8 sm:p-11 rounded-[2.5rem] bg-white/75 backdrop-blur-2xl border border-white/60 shadow-[0_20px_60px_-15px_rgba(32,42,90,0.12),0_0_1px_1px_rgba(255,255,255,0.8)] max-w-sm w-full mx-auto"
      >
        {/* نشان مرکزی با حلقه انرژی چرخان گرادیانی */}
        <div className="relative w-24 h-24 flex items-center justify-center mb-6">
          {/* حلقه چرخان بیرونی با گرادیان ۴ رنگ برند */}
          <svg className="absolute inset-0 w-full h-full animate-spin" style={{ animationDuration: "3s" }} viewBox="0 0 100 100">
            <defs>
              <linearGradient id="rokad-spin-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#59BBAF" />
                <stop offset="35%" stopColor="#E0195B" />
                <stop offset="70%" stopColor="#F8A41D" />
                <stop offset="100%" stopColor="#202A5A" />
              </linearGradient>
            </defs>
            <circle
              cx="50"
              cy="50"
              r="44"
              fill="none"
              stroke="url(#rokad-spin-grad)"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeDasharray="180 80"
            />
          </svg>

          {/* هاله پشت لوگو */}
          <div className="absolute inset-2.5 rounded-full bg-[#202A5A]/5 backdrop-blur-md" />

          {/* نشان اصلی رکاد با انیمیشن تنفس نرم */}
          <motion.div
            animate={{
              scale: [1, 1.06, 1],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-10 w-14 h-14 rounded-[1.125rem] [corner-shape:squircle] bg-[#202A5A] flex items-center justify-center shadow-[0_8px_20px_-4px_rgba(32,42,90,0.4)] border border-white/20"
          >
            <img
              src="/assets/Shared/Logos/logo.png"
              alt="رکاد"
              className="w-8 h-auto brightness-0 invert drop-shadow-sm"
            />
          </motion.div>
        </div>

        {/* تیتر لودینگ با فونت ایران‌سنس سنگین */}
        <h3 className="font-black text-[1.0625rem] sm:text-[1.1875rem] text-[#202A5A] tracking-tight mb-2 text-center">
          {title}
        </h3>

        {/* نشانگر ۴ رنگ اکوسیستم (اکوسیستم، دخترانه، پسرانه، کالج) */}
        <div className="flex items-center gap-2 mt-2">
          {[
            { color: "#59BBAF", delay: 0 },
            { color: "#E0195B", delay: 0.18 },
            { color: "#F8A41D", delay: 0.36 },
            { color: "#202A5A", delay: 0.54 },
          ].map((dot, i) => (
            <motion.span
              key={i}
              animate={{
                y: [0, -6, 0],
                opacity: [0.35, 1, 0.35],
                scale: [0.85, 1.25, 0.85],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: dot.delay,
                ease: "easeInOut",
              }}
              className="w-2.5 h-2.5 rounded-full shadow-sm inline-block"
              style={{ backgroundColor: dot.color }}
            />
          ))}
        </div>

        <span className="text-[#202A5A]/40 text-[0.6875rem] font-bold mt-5">
          هنرستان استارتاپی رکاد
        </span>
      </motion.div>

      {/* ── اسکلت شبیه‌ساز پس‌زمینه (Shimmer Skeleton Grid) ── */}
      <div className="w-full max-w-4xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-3 gap-5 opacity-40 pointer-events-none">
        {[1, 2, 3].map((n) => (
          <div
            key={n}
            className="h-36 rounded-[1.5rem] bg-gradient-to-r from-gray-200/50 via-gray-100/80 to-gray-200/50 animate-pulse border border-gray-200/40 p-5 flex flex-col justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gray-300/60" />
              <div className="space-y-2 flex-1">
                <div className="h-3.5 bg-gray-300/60 rounded-md w-3/4" />
                <div className="h-2.5 bg-gray-300/40 rounded-md w-1/2" />
              </div>
            </div>
            <div className="space-y-1.5">
              <div className="h-2.5 bg-gray-300/40 rounded-md w-full" />
              <div className="h-2.5 bg-gray-300/30 rounded-md w-4/5" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
