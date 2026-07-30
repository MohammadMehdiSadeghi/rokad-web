import { useState } from "react";
import logo from "../../assets/Shared/Logos/logo.png";

const navLinks = [
  { label: "مدارس", href: "#" },
  { label: "افتخارات", href: "#" },
  { label: "مشاوره هدایت تحصیلی و شغلی", href: "#" },
  { label: "درباره ما", href: "#" },
  { label: "درخواست همکاری", href: "#" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    // Top: 32px (pt-8)
    <header className="pt-6 sm:pt-8 px-4 sm:px-0">
      <nav
        aria-label="ناوبری اصلی"
        // Width: 1200px, Height: 112px, Radius: 22px
        className="relative max-w-[92%] sm:max-w-[85%] lg:max-w-[80%] mx-auto"
      >
        <div className="flex items-center justify-between h-16 sm:h-[95px] rounded-[22px] bg-bg-mint px-4 sm:px-8">
          {/* ── سمت راست: لوگو ── */}
          <a href="#" className="flex-shrink-0" aria-label="رکاد">
            <img
              src={logo}
              alt="رکاد"
              width="71"
              height="56"
              className="h-8 sm:h-9 lg:h-10 w-auto"
            />
          </a>

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
                  <a
                    href={link.href}
                    className="whitespace-nowrap text-base2 font-semibold text-navy transition-colors duration-200 hover:text-teal relative group"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 right-0 w-0 h-[2px] bg-teal transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── سمت چپ: دکمه ورود/ثبت‌نام + دکمه همبرگری موبایل ── */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <a
              href="#"
              className="whitespace-nowrap rounded-pill-md bg-teal px-3.5 sm:px-6 py-[8px] sm:py-[9.4px] text-[13px] sm:text-base2 font-extrabold
               text-white transition-colors duration-300 hover:bg-white hover:text-teal border border-1 border-white hover:border-teal"
            >
              ورود / ثبت نام
            </a>

            {/* دکمه همبرگری - فقط زیر lg */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav-panel"
              aria-label={open ? "بستن منو" : "باز کردن منو"}
              className="lg:hidden relative w-9 h-9 sm:w-10 sm:h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-navy"
            >
              <span className="flex flex-col items-center justify-center gap-[5px] w-4">
                <span
                  className={`block h-[2px] w-full bg-white rounded-full transition-transform duration-300 ${
                    open ? "translate-y-[7px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`block h-[2px] w-full bg-white rounded-full transition-opacity duration-300 ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`block h-[2px] w-full bg-white rounded-full transition-transform duration-300 ${
                    open ? "-translate-y-[7px] -rotate-45" : ""
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
            open ? "max-h-[480px] opacity-100 mt-3" : "max-h-0 opacity-0"
          }`}
        >
          <div className="rounded-[22px] bg-bg-mint px-5 sm:px-7 py-5 flex flex-col gap-4">
            <ul className="flex flex-col gap-4 list-none m-0 p-0">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block text-[15px] font-semibold text-navy transition-colors duration-200 hover:text-teal"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="#"
              onClick={() => setOpen(false)}
              className="self-start -rotate-3 rounded-pill-sm bg-navy px-4 py-2 text-base2 font-black text-white transition-transform duration-200 hover:rotate-0"
            >
              پیش‌ثبت‌نام
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}