"use client";

import { useEffect, useRef } from "react";
import { useEnrollment } from "../../../../lib/EnrollmentContext";

const HEADING = [
  { word: "آینــده", pos: { left: 979.5, top: 60 } },
  { word: "از ", pos: { left: 1099, top: 151 } },
  { word: "اینجا", pos: { left: 959, top: 149 } },
  { word: " شروع", pos: { left: 799, top: 150 } },
  { word: "میشه", pos: { left: 647, top: 150 } },
];

const SUBTITLE_TEXT = "اولین هنرستان استارتاپی ایران";

/* عرض طراحی: کارت ۱۲۰۰px (مثل Container پروژه) داخل بوم ۱۴۴۰px */
const DESIGN_CARD = 1200;

export default function Hero() {
  const { openEnrollment } = useEnrollment();
  const vpRef = useRef(null);
  const canvasRef = useRef(null);
  const subtitleRef = useRef(null);

  /* اسکیل تناسبی: کارت هیرو هم‌عرض Container بقیه سکشن‌ها */
  useEffect(() => {
    const vp = vpRef.current;
    const cv = canvasRef.current;
    if (!vp || !cv) return;
    function apply() {
      const w = vp.clientWidth; // = عرض Container (max 1200)
      const scale = w / DESIGN_CARD;
      cv.style.transform = `scale(${scale})`;
      vp.style.height = `${578 * scale}px`;
    }
    apply();
    window.addEventListener("resize", apply);
    return () => window.removeEventListener("resize", apply);
  }, []);

  /* موشن تایپ زیرعنوان (نسخه دسکتاپ) */
  useEffect(() => {
    const el = subtitleRef.current;
    if (!el) return;
    let i = 0;
    let timer = null;
    function type() {
      if (i < SUBTITLE_TEXT.length) {
        el.textContent = SUBTITLE_TEXT.substring(0, i + 1);
        i++;
        timer = setTimeout(type, 60 + Math.random() * 40);
      }
    }
    const start = setTimeout(type, 1200);
    return () => {
      clearTimeout(start);
      if (timer) clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {/* ── نسخه موبایل (زیر lg) ── */}
      <section className="relative w-full px-4 sm:px-6 lg:hidden pt-[6.5rem] sm:pt-[7rem]">
        <div className="relative mx-auto w-full max-w-[27.5rem]">
          {/* کارت اصلی — عکس داخل کادر، نیمه پایینش با overflow-hidden کات می‌شود */}
          <div className="relative overflow-hidden rounded-[2rem] bg-[#59bbaf]">
            {/* پترن پس‌زمینه کارت با حفظ تناسب هندسی */}
            <img
              src="/assets/home/Hero/pattern.png"
              alt=""
              aria-hidden="true"
              draggable={false}
              className="absolute inset-0 w-full h-full object-cover object-center select-none pointer-events-none"
            />
            <div className="relative z-[1] px-5 pt-9 pb-[16rem] sm:pb-[17rem] flex flex-col items-center text-center">
              {/* تیتر */}
              <p dir="rtl" className="text-white font-black leading-[1.2] text-[2.25rem] sm:text-[2.5rem] m-0">
                آینده از اینجا
                <br />
                شروع میشود
              </p>
              {/* زیرعنوان */}
              <p dir="rtl" className="mt-3 text-[#202A5A] font-black text-[1rem] sm:text-[1.0625rem] leading-relaxed">
                {SUBTITLE_TEXT}
              </p>
            </div>

            {/* عکس کارکتر — absolute پایین کارت، جدا از متن، نیمه پایین با overflow کات می‌شود */}
            <img
              src="/assets/home/Hero/character.png"
              alt=""
              aria-hidden="true"
              draggable={false}
              className="absolute left-1/2 -translate-x-1/2 bottom-[5px] translate-y-[45%] w-[14.5rem] sm:w-[16rem] h-auto z-[1] select-none pointer-events-none"
            />

            {/* هاله/سایه کادر پایین */}
            <div className="pointer-events-none absolute inset-0 z-[0] bg-gradient-to-t from-[#0e1633]/10 to-transparent" />
          </div>

          {/* دکمه‌ها — ریسپانسیو، ارتفاع یکسان، تراز وسط */}
          <div className="mt-5 sm:mt-6 flex flex-row items-stretch gap-2.5 sm:gap-3.5 w-full">
            <button
              type="button"
              onClick={() => openEnrollment()}
              className="flex-[1.15] sm:flex-1 inline-flex items-center justify-center min-h-[3rem] sm:min-h-[3.25rem] px-2.5 sm:px-4 py-2 text-center bg-[#202A5A] text-white font-black text-xs xs:text-sm sm:text-base2 leading-tight rounded-xl shadow-md transition-all duration-200 hover:bg-[#2a3a7a] active:scale-[0.98] cursor-pointer"
            >
              ثبت‌نام و رزرو مصاحبه
            </button>
            <a
              href="#counseling"
              className="flex-[0.85] sm:flex-1 inline-flex items-center justify-center min-h-[3rem] sm:min-h-[3.25rem] px-2.5 sm:px-4 py-2 text-center no-underline bg-white text-[#202A5A] font-black text-xs xs:text-sm sm:text-base2 leading-tight rounded-xl border-2 border-[#202A5A] shadow-[0_4px_14px_rgba(32,42,90,0.15)] transition-all duration-200 hover:bg-[#f2f6ff] active:scale-[0.98] cursor-pointer"
            >
              درخواست مشاوره
            </a>
          </div>
        </div>
      </section>

      {/* ── نسخه دسکتاپ (lg به بالا) ── */}
      <section className="relative w-full px-4 sm:px-6 lg:px-8 hidden lg:block">
        <div ref={vpRef} className="hero-vp">
          <div ref={canvasRef} className="hero-canvas">
            <div
              className="absolute left-[120px] top-[36px] w-[1200px] h-[510px] rounded-[36px] overflow-hidden"
              style={{
                backgroundColor: "#59bbaf",
                backgroundImage: "url('/assets/home/Hero/pattern.png')",
                backgroundSize: "100% 100%",
              }}
            >
              <img
                src="/assets/home/Hero/character.png"
                alt=""
                className="absolute left-[50px] top-[42px] w-[500px] pointer-events-none"
                draggable={false}
              />

              <h1 dir="rtl" className="absolute inset-0 m-0">
                {HEADING.map((item, idx) => (
                  <span
                    key={idx}
                    className="absolute text-white whitespace-nowrap text-right"
                    style={{
                      left: item.pos.left,
                      top: item.pos.top,
                      fontFamily: "'IRANSansX', sans-serif",
                      fontWeight: 950,
                      fontSize: "59.45px",
                    }}
                  >
                    {item.word}
                  </span>
                ))}
                <span
                  className="absolute text-white"
                  style={{
                    left: 580,
                    top: 152,
                    fontFamily: "'IRANSansX', sans-serif",
                    fontWeight: 950,
                    fontSize: "59.45px",
                  }}
                >
                  <span
                    className="inline-block"
                    style={{ direction: "ltr", unicodeBidi: "isolate" }}
                  >
                    {[0, 1, 2].map((i) => (
                      <span
                        key={i}
                        className="inline-block opacity-0"
                        style={{
                          animation: `dotIn 0.35s steps(1,end) forwards ${
                            0.2 + i * 0.3
                          }s`,
                        }}
                      >
                        .
                      </span>
                    ))}
                  </span>
                </span>
              </h1>

              <span
                ref={subtitleRef}
                dir="rtl"
                className="absolute left-[622px] top-[273px] w-[524px] whitespace-nowrap text-right"
                style={{
                  color: "#202A5A",
                  fontFamily: "'IRANSansX', sans-serif",
                  fontWeight: 900,
                  fontSize: "38.96px",
                }}
              />

              <button
                type="button"
                onClick={() => openEnrollment()}
                className="absolute block p-0 border-0 bg-transparent cursor-pointer z-[2]"
                style={{ left: 830, top: 372, width: 370, height: 138 }}
                aria-label="ثبت‌نام و رزرو مصاحبه"
              >
                <img
                  src="/assets/home/Hero/pill-navy.png"
                  alt="ثبت‌نام و رزرو مصاحبه"
                  className="absolute left-0 top-0 block pointer-events-none z-[1] w-[370px] h-[138px]"
                  draggable={false}
                />
              </button>
              <a
                href="#counseling"
                className="absolute block no-underline cursor-pointer z-[2]"
                style={{ left: 581, top: 418, width: 389, height: 92 }}
                aria-label="درخواست مشاوره"
              >
                <img
                  src="/assets/home/Hero/pill-white.png"
                  alt="درخواست مشاوره"
                  className="absolute left-0 top-0 block pointer-events-none z-[1] w-[389px] h-[92px]"
                  draggable={false}
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
