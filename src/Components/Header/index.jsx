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
      {/* موبایل: نوار ساده‌ی تمام‌عرض (فیگما Android Compact: h=45px، فقط لوگو + همبرگر)
          دسکتاپ: کارت منو گرد با پس‌زمینه سبز کمرنگ + سایه خیلی ریز */}
      <header className="fixed top-0 left-0 right-0 z-50 pt-2 sm:pt-4 lg:pt-6 xl:pt-8 px-3 sm:px-4 lg:px-0">
        <nav
          aria-label="ناوبری اصلی"
          className="relative w-full max-w-[75rem] mx-auto"
        >
          <div
            className="flex items-center justify-between h-[2.5rem] sm:h-[3.25rem] lg:h-[5.9375rem]
            rounded-none lg:rounded-[1.375rem] bg-[#E6F5F3]
            shadow-[0_0.0625rem_0.125rem_rgba(0,0,0,0.06),0_0.25rem_0.5rem_rgba(0,0,0,0.04),0_0.5rem_1rem_rgba(0,0,0,0.02)]
            px-2 sm:px-2 lg:px-8"
          >
            {/* ── سمت راست: لوگو ── */}
            <Link to="/" className="flex-shrink-0" aria-label="رکاد">
              <img
                src={logo}
                alt="رکاد"
                width="71"
                height="56"
                className="h-8 sm:h-9 lg:h-10 w-auto"
              />
            </Link>

            {/* ── وسط: دکمه پیش‌ثبت‌نام + لینک‌های ناوبری (فقط دسکتاپ) ── */}
            <div className="hidden lg:flex flex-1 items-center justify-center gap-7">
              <a
                href="#"
                className="whitespace-nowrap -rotate-3 rounded-pill-sm bg-navy px-[0.6875rem] py-[0.4375rem] text-base2 font-black text-white transition-transform
                 duration-200 hover:rotate-0 hover:scale-105"
              >
                پیش‌ثبت‌نام
              </a>

              <ul className="flex items-center gap-8  list-none m-0 p-0">
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

            {/* ── سمت چپ: دکمه ورود/ثبت‌نام (فقط دسکتاپ) + همبرگری موبایل ── */}
            <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              <a
                href="#"
                className="hidden lg:inline-flex whitespace-nowrap rounded-pill-md bg-teal px-6 py-[0.5875rem] text-base2 font-extrabold
                 text-white transition-colors duration-300 hover:bg-white hover:text-teal border border-1 border-white hover:border-teal"
              >
                ورود / ثبت نام
              </a>

              {/* دکمه همبرگری — تاچ‌تارگت ۴۰px، تبدیل نرم به ضربدر */}
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls="mobile-nav-menu"
                aria-label={open ? "بستن منو" : "باز کردن منو"}
                className="lg:hidden relative -mr-1.5 w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-lg text-navy transition-colors duration-200 hover:bg-navy/5 active:bg-navy/10"
              >
                <span className="flex flex-col items-center justify-center gap-[0.3125rem] w-5">
                  <span
                    className={`block h-[0.125rem] w-full bg-current rounded-full transition-transform duration-300 ${
                      open ? "translate-y-[0.4375rem] rotate-45" : ""
                    }`}
                  />
                  <span
                    className={`block h-[0.125rem] w-full bg-current rounded-full transition-opacity duration-200 ${
                      open ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <span
                    className={`block h-[0.125rem] w-full bg-current rounded-full transition-transform duration-300 ${
                      open ? "-translate-y-[0.4375rem] -rotate-45" : ""
                    }`}
                  />
                </span>
              </button>
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
              ? "[clip-path:circle(142%_at_9%_5%)]"
              : "[clip-path:circle(0%_at_9%_5%)] pointer-events-none"
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
          {/* ── ردیف بالا: لوگو (راست) + دکمه بستن دایره‌ای (چپ) ── */}
          <div className="flex items-center justify-between">
            <Link to="/" onClick={close} aria-label="رکاد" className="flex-shrink-0">
              <img
                src={logo}
                alt="رکاد"
                width="71"
                height="56"
                className="h-9 w-auto brightness-0 invert"
              />
            </Link>

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
                className="inline-flex items-center justify-center px-6 py-2.5 -rotate-3 bg-white text-navy text-[0.95rem] font-black rounded-pill-sm transition-transform duration-200 hover:rotate-0 active:scale-[0.98]"
                style={{ fontWeight: 950 }}
              >
                پیش‌ثبت‌نام
              </a>
              <a
                href="#"
                onClick={close}
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-pill-md bg-teal text-white text-[0.95rem] font-extrabold transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
              >
                ورود / ثبت نام
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
