import Container from "../../../../layout/Container";

const ecosystemPattern = "/assets/Shared/Patterns/Ecosystem-Pattern.png";

export default function Ecosystem() {
  return (
    <section className="relative py-16 lg:py-24 bg-white" dir="rtl">
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <img
          src={ecosystemPattern}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <Container className="relative z-10">
        {/* ── Header ── */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-black text-[#21295A] text-[28px] sm:text-[36px] lg:text-[48px] leading-[1.2] mb-4">
            اکوسیستم رکاد
          </h2>
          <p className="text-[#21295A]/70 text-[16px] sm:text-[18px] lg:text-[20px] leading-relaxed max-w-2xl mx-auto">
            اکوسیستم کامل ما برای حمایت از رشد، یادگیری و موفقیت دانش‌آموزان
          </p>
        </div>

        {/* ── Central Icon + Cards ── */}
        <div className="relative max-w-[600px] mx-auto">
          {/* Connecting lines (dashed) */}
          <svg className="absolute right-[50%] top-0 bottom-0 w-[2px] -translate-x-1/2 pointer-events-none" viewBox="0 0 2 100" preserveAspectRatio="none">
            <line
              x1="1"
              y1="0"
              x2="1"
              y2="100%"
              stroke="#58BDAF"
              strokeWidth="2"
              strokeDasharray="8 12"
              strokeDashoffset="4"
              opacity="0.4"
            />
          </svg>

          {/* Central icon */}
          <div className="relative flex justify-center mb-8 lg:mb-12">
            <div className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] rounded-full bg-[#58BDAF] flex items-center justify-center shadow-[0_8px_24px_rgba(88,189,175,0.25)]">
              <svg className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
          </div>

          {/* Cards - vertical stack */}
          <div className="space-y-6">
            {/* Card 1 - Orange */}
            <div className="relative pr-10 lg:pr-14 before:absolute before:right-[50%] before:top-1/2 before:w-[24px] before:h-[2px] before:bg-[#58BDAF] before:opacity-40 before:-translate-y-1/2 before:translate-x-1/2">
              <div className="bg-gradient-to-br from-[#FF8C42] to-[#FF6B2E] rounded-[24px] p-6 lg:p-8 shadow-[0_8px_24px_rgba(255,140,66,0.25)]">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-[10px] bg-white/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-black text-white text-[18px] sm:text-[20px] lg:text-[22px] leading-tight mb-2">
                      مسیر رشد شخصی‌سازی‌شده
                    </h3>
                    <p className="text-white/90 text-[14px] sm:text-[15px] lg:text-[16px] leading-relaxed">
                      استعدادسنجی دقیق و طراحی نقشه‌ی راهی که فقط مال توئه؛ نه به مسیر یکسان برای همه.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 - Green (Featured) */}
            <div className="relative pr-10 lg:pr-14 before:absolute before:right-[50%] before:top-1/2 before:w-[24px] before:h-[2px] before:bg-[#58BDAF] before:opacity-40 before:-translate-y-1/2 before:translate-x-1/2">
              <div className="bg-gradient-to-br from-[#34D399] to-[#10B981] rounded-[24px] p-6 lg:p-8 shadow-[0_8px_24px_rgba(16,185,129,0.25)] ring-2 ring-white/30 ring-offset-2 ring-offset-white">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-[10px] bg-white/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-black text-white text-[18px] sm:text-[20px] lg:text-[22px] leading-tight mb-2">
                      منторینگ و'accompagnement
                    </h3>
                    <p className="text-white/90 text-[14px] sm:text-[15px] lg:text-[16px] leading-relaxed">
                      منتورهای مجرب کنار تو هستن؛ از انتخاب مسیر تا اولین پروژه‌ی واقعی.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 - Purple */}
            <div className="relative pr-10 lg:pr-14 before:absolute before:right-[50%] before:top-1/2 before:w-[24px] before:h-[2px] before:bg-[#58BDAF] before:opacity-40 before:-translate-y-1/2 before:translate-x-1/2">
              <div className="bg-gradient-to-br from-[#A78BFA] to-[#8B5CF6] rounded-[24px] p-6 lg:p-8 shadow-[0_8px_24px_rgba(139,92,246,0.25)]">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-[10px] bg-white/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-black text-white text-[18px] sm:text-[20px] lg:text-[22px] leading-tight mb-2">
                      شبکه‌ی فرصت‌ها و همکاری
                    </h3>
                    <p className="text-white/90 text-[14px] sm:text-[15px] lg:text-[16px] leading-relaxed">
                      اکوسیستم استارتاپی، ارتباط با سرمایه‌گذارها، و فرصت‌های واقعی کاری.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}