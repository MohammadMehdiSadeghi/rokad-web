import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const logo = "/assets/Shared/Logos/logo.png";

// هر لینک یا به یه انکر داخل صفحه‌ی اصلی می‌ره (schools/about/counseling)
// یا به یه روت اختصاصی مثل /honors.
const navLinks = [
  { label: "مدارس", to: "/#schools" },
  { label: "افتخارات", to: "/honors" },
  { label: "مشاوره هدایت تحصیلی و شغلی", to: "/#counseling" },
  { label: "درباره ما", to: "/#about" },
  { label: "درخواست همکاری", to: "/#cooperation" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  // وقتی منو بازه: Esc می‌بنده‌ش و اسکرول صفحه قفل می‌شه
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* موبایل: نوار ساده‌ی تمام‌عرض — همبرگری راست، لوگو وسط، اکشن‌ها چپ
          دسکتاپ: کارت منو squircle با پس‌زمینه مینت و شدو نرم apple-style */}
      <header className="fixed top-0 left-0 right-0 z-50 pt-2 sm:pt-4 lg:pt-6 xl:pt-8 px-3 sm:px-4 lg:px-6 xl:px-0">
        <nav
          aria-label="ناوبری اصلی"
          className="relative w-full max-w-[75rem] mx-auto"
        >
          <div
            className="relative flex items-center justify-between h-[2.5rem] sm:h-[3.25rem] lg:h-[5.9375rem]
            rounded-[24px] lg:rounded-[38px] [corner-shape:squircle] bg-bg-mint
            shadow-[0_0.0625rem_0.1875rem_rgba(0,0,0,0.04),0_0.5rem_1.25rem_rgba(33,41,90,0.05),0_1.25rem_2.5rem_-0.25rem_rgba(33,41,90,0.06)]
            px-4 py-8 sm:px-4 lg:px-8"
          >
            {/* ── سمت راست: همبرگری موبایل ──
                آیکون دوخطی مینیمال (استایل مدرن Apple/Linear): خط بالا
                تمام‌عرض، خط پایین کوتاه‌تر که با هاور کش میاد؛ موقع باز شدن
                هر دو خط به مرکز میان و ضربدر می‌سازن */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav-menu"
              aria-label={open ? "بستن منو" : "باز کردن منو"}
              className="lg:hidden group relative -mr-1.5 w-10 h-10 flex-shrink-0 flex items-center justify-center text-navy transition-colors duration-300 hover:text-teal-text active:scale-95"
            >
              <span
                aria-hidden="true"
                className="relative block w-[1.25rem] h-[0.75rem]"
              >
                <span
                  className={`absolute right-0 top-1/2 h-[0.125rem] w-full rounded-full bg-current transition-all duration-300 ease-out ${
                    open
                      ? "translate-y-0 rotate-45"
                      : "-translate-y-[0.28125rem]"
                  }`}
                />
                <span
                  className={`absolute right-0 top-1/2 h-[0.125rem] rounded-full bg-current transition-all duration-300 ease-out group-hover:w-full ${
                    open
                      ? "w-full translate-y-0 -rotate-45"
                      : "w-[68%] translate-y-[0.28125rem]"
                  }`}
                />
              </span>
            </button>

            {/* ── لوگو — موبایل: وسط نوار / دسکتاپ: راست ── */}
            <Link
              to="/"
              aria-label="رکاد"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:static lg:top-auto lg:left-auto lg:translate-x-0 lg:translate-y-0 flex-shrink-0"
            >
              <img
                src={logo}
                alt="رکاد"
                width="71"
                height="56"
                className="h-8 sm:h-9 lg:h-10 w-auto"
              />
            </Link>

            {/* ── وسط: دکمه پیش‌ثبت‌نام + لینک‌های ناوبری (فقط دسکتاپ) ── */}
            <div className="hidden lg:flex flex-1 items-center justify-center gap-4 xl:gap-7">
              <a
                href="#"
                className="whitespace-nowrap -rotate-3 rounded-[8px] [corner-shape:squircle] bg-navy px-[0.6875rem] py-[0.4375rem] text-base2 font-black text-white transition-transform
                 duration-200 hover:rotate-0 hover:scale-105"
              >
                پیش‌ثبت‌نام
              </a>

              <ul className="flex items-center gap-4 xl:gap-8  list-none m-0 p-0">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="whitespace-nowrap text-base2 font-semibold text-navy transition-colors duration-200 hover:text-teal relative group"
                    >
                      {link.label}
                      <span className="absolute -bottom-1 right-0 w-0 h-[0.125rem] bg-teal transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── سمت چپ: پروفایل (موبایل) و ورود/ثبت‌نام (دسکتاپ) ── */}
            <div className="flex items-center gap-2 sm:gap-2.5 lg:gap-3 flex-shrink-0">
              <a
                href="#"
                aria-label="ورود / پروفایل"
                className="lg:hidden relative w-9 h-9 flex items-center justify-center flex-shrink-0 rounded-[0_0.55rem_0_0.55rem] [corner-shape:squircle] bg-white border-[0.09375rem] border-navy/15 text-navy transition-colors duration-200 hover:border-navy/40 active:bg-navy/5"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="w-[1.125rem] h-[1.125rem]"
                >
                  <circle cx="12" cy="8.2" r="3.4" />
                  <path d="M5 19.6c1.5-3.1 4-4.7 7-4.7s5.5 1.6 7 4.7" />
                </svg>
              </a>

              <a
                href="#"
                className="hidden lg:inline-flex whitespace-nowrap rounded-[12px] [corner-shape:squircle] bg-teal px-5 xl:px-6 py-[0.5875rem] text-base2 font-extrabold
                 text-white transition-colors duration-300 hover:bg-white hover:text-teal"
              >
                ورود / ثبت‌نام
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* ── منوی تمام‌صفحه موبایل — ریویل دایره‌ای از سمت دکمه، لینک‌های
          بزرگ با چرخش‌های اسکرپ‌بوک و ورود پله‌ای؛ زبان طراحی خود سایت ── */}
      <div
        id="mobile-nav-menu"
        role="dialog"
        aria-modal="true"
        aria-label="منوی موبایل"
        aria-hidden={!open}
        className={`fixed inset-0 z-[60] lg:hidden bg-navy overflow-hidden
          transition-[clip-path] duration-[650ms] ease-[cubic-bezier(0.76,0,0.24,1)]
          ${
            open
              ? "[clip-path:circle(142%_at_91%_5%)]"
              : "[clip-path:circle(0%_at_91%_5%)] pointer-events-none"
          }`}
      >
        {/* واترمارک «رکاد» — همون موتیف پس‌زمینه‌ی خود سایت */}
        <span
          aria-hidden="true"
          className="absolute -bottom-[7rem] -left-[3rem] select-none pointer-events-none text-white/[0.045] -rotate-12 leading-none"
          style={{ fontWeight: 950, fontSize: "clamp(11rem, 55vw, 17rem)" }}
        >
          رکاد
        </span>

        <div className="relative h-full flex flex-col overflow-y-auto px-5 pt-[3.25rem] pb-7">
          {/* ── ردیف بالا: دکمه بستن دایره‌ای (راست) + لوگو (چپ) ── */}
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={close}
              aria-label="بستن منو"
              className="w-11 h-11 flex-shrink-0 flex items-center justify-center rounded-full border-[0.125rem] border-white/25 text-white transition-all duration-300 hover:border-teal hover:text-teal hover:rotate-90"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
              >
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>

            <Link
              to="/"
              onClick={close}
              aria-label="رکاد"
              className="flex-shrink-0"
            >
              <img
                src={logo}
                alt="رکاد"
                width="71"
                height="56"
                className="h-9 w-auto brightness-0 invert"
              />
            </Link>
          </div>

          {/* ── لینک‌ها — بزرگ، شماره‌دار، با چرخش متناوب ── */}
          <ul className="flex flex-col gap-0.5 mt-9 list-none m-0 p-0">
            {navLinks.map((link, i) => (
              <li
                key={link.label}
                className={`transition-all duration-500 ease-out ${
                  open
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: open ? `${200 + i * 70}ms` : "0ms" }}
              >
                <Link
                  to={link.to}
                  onClick={close}
                  className="group flex items-baseline gap-3.5 py-2.5"
                >
                  <span className="text-teal text-[0.8125rem] font-black tabular-nums transition-transform duration-300 group-hover:-translate-y-0.5">
                    ۰{i + 1}
                  </span>
                  <span
                    className="inline-block text-white leading-[1.3] text-[1.55rem] sm:text-[1.9rem] transition-all duration-300 group-hover:text-teal group-hover:-rotate-1"
                    style={{
                      fontWeight: 950,
                      transform: `rotate(${i % 2 === 0 ? -1.5 : 1.5}deg)`,
                    }}
                  >
                    {link.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {/* ── اکشن‌ها — استیکر سفید + پیل فیروزه‌ای، پایین صفحه ── */}
          <div
            className={`mt-auto pt-8 transition-all duration-500 ease-out ${
              open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: open ? "580ms" : "0ms" }}
          >
            <div className="flex items-center gap-3.5 flex-wrap">
              <a
                href="#"
                onClick={close}
                className="inline-flex items-center justify-center px-6 py-2.5 -rotate-3 bg-white text-navy text-[0.95rem] font-black rounded-[4px] [corner-shape:squircle] transition-transform duration-200 hover:rotate-0 active:scale-[0.98]"
                style={{ fontWeight: 950 }}
              >
                پیش‌ثبت‌نام
              </a>
              <a
                href="#"
                onClick={close}
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-[8px] [corner-shape:squircle] bg-teal text-white text-[0.95rem] font-extrabold transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
              >
                ورود / ثبت‌نام
              </a>
            </div>

            <p className="text-white/35 text-[0.6875rem] font-medium mt-6">
              اولین هنرستان استارتاپی ایران — مشهد
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
