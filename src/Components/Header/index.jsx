import { useState } from "react";
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

  return (
    // موبایل: نوار ساده‌ی تمام‌عرض (فیگما Android Compact: h=45px، فقط لوگو + همبرگر)
    // دسکتاپ: کارت منت گرد 1200px با pt-32px (top:32px در فیگما)
    <header className="pt-0 sm:pt-4 lg:pt-6 xl:pt-8 px-3 sm:px-4 lg:px-0">
      <nav
        aria-label="ناوبری اصلی"
        className="relative w-full lg:w-[80%] mx-auto"
      >
        <div
          className="flex items-center justify-between h-[45px] sm:h-[52px] lg:h-[95px]
          rounded-none lg:rounded-[22px] bg-transparent lg:bg-bg-mint px-1 sm:px-2 lg:px-8"
        >
          {/* ── سمت راست: لوگو ── */}
          <Link to="/" className="flex-shrink-0" aria-label="رکاد">
            <img
              src={logo}
              alt="رکاد"
              width="71"
              height="56"
              className="h-9 sm:h-9 lg:h-10 w-auto"
            />
          </Link>

          {/* ── وسط: دکمه پیش‌ثبت‌نام + لینک‌های ناوبری (فقط دسکتاپ) ── */}
          <div className="hidden lg:flex flex-1 items-center justify-center gap-7">
            {/* دکمه پیش‌ثبت‌نام (اولین آیتم در وسط) */}
            <a
              href="#"
              className="whitespace-nowrap -rotate-3 rounded-pill-sm bg-navy px-[11px] py-[7px] text-base2 font-black text-white transition-transform
               duration-200 hover:rotate-0 hover:scale-105"
            >
              پیش‌ثبت‌نام
            </a>

            {/* لینک‌های ناوبری */}
            <ul className="flex items-center gap-8  list-none m-0 p-0">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="whitespace-nowrap text-base2 font-semibold text-navy transition-colors duration-200 hover:text-teal relative group"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 right-0 w-0 h-[2px] bg-teal transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── سمت چپ: دکمه ورود/ثبت‌نام (فقط دسکتاپ) + همبرگری موبایل ── */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <a
              href="#"
              className="hidden lg:inline-flex whitespace-nowrap rounded-pill-md bg-teal px-6 py-[9.4px] text-base2 font-extrabold
               text-white transition-colors duration-300 hover:bg-white hover:text-teal border border-1 border-white hover:border-teal"
            >
              ورود / ثبت نام
            </a>

            {/* دکمه همبرگری - فقط زیر lg (فیگما: آیکون List ساده 32×32 بدون پس‌زمینه) */}
                        <button
                          type="button"
                          onClick={() => setOpen((v) => !v)}
                          aria-expanded={open}
                          aria-controls="mobile-nav-panel"
                          aria-label={open ? "بستن منو" : "باز کردن منو"}
                          className="lg:hidden relative w-8 h-8 sm:w-9 sm:h-9 flex-shrink-0 flex items-center justify-center text-navy"
                        >
                          <span className="flex flex-col items-center justify-center gap-[4px] w-4">
                            <span
                              className={`block h-[2.5px] w-full bg-current rounded-full transition-transform duration-300 ${
                                open ? "translate-y-[6.5px] rotate-45" : ""
                              }`}
                            />
                            <span
                              className={`block h-[2.5px] w-full bg-current rounded-full transition-opacity duration-300 ${
                                open ? "opacity-0" : "opacity-100"
                              }`}
                            />
                            <span
                              className={`block h-[2.5px] w-full bg-current rounded-full transition-transform duration-300 ${
                                open ? "-translate-y-[6.5px] -rotate-45" : ""
                              }`}
                            />
                          </span>
                        </button>
          </div>
        </div>

        {/* ── منوی کشویی موبایل ── */}
        <div
          id="mobile-nav-panel"
          className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
            open ? "max-h-[520px] opacity-100 mt-3" : "max-h-0 opacity-0"
          }`}
        >
          <div className="rounded-[22px] bg-bg-mint px-5 sm:px-7 py-5 flex flex-col gap-4">
            <ul className="flex flex-col gap-4 list-none m-0 p-0">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className="block text-[15px] font-semibold text-navy transition-colors duration-200 hover:text-teal"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#"
                onClick={() => setOpen(false)}
                className="self-start -rotate-3 rounded-pill-sm bg-navy px-4 py-2 text-base2 font-black text-white transition-transform duration-200 hover:rotate-0"
              >
                پیش‌ثبت‌نام
              </a>
              <a
                href="#"
                onClick={() => setOpen(false)}
                className="self-start rounded-pill-md bg-teal px-4 py-2 text-base2 font-extrabold text-white transition-colors duration-300"
              >
                ورود / ثبت نام
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
