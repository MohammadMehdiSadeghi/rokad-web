import logo from "../assets/images/logo.png";

const navLinks = [
  { label: "مدارس", href: "#" },
  { label: "افتخارات", href: "#" },
  { label: "مشاوره هدایت تحصیلی و شغلی", href: "#" },
  { label: "درباره ما", href: "#" },
  { label: "درخواست همکاری", href: "#" },
];

export default function Header() {
  return (
    // Top: 32px (pt-8)
    <header className="pt-8">
      <nav
        aria-label="ناوبری اصلی"
        // Width: 1200px, Height: 112px, Radius: 22px
        className="max-w-[80%] mx-auto flex items-center justify-between h-auto sm:h-[95px] rounded-[22px] bg-bg-mint px-6 sm:px-8"
      >
        {/* ── سمت راست: لوگو ── */}
        <a href="#" className="flex-shrink-0" aria-label="رکاد">
          <img 
            src={logo} 
            alt="رکاد" 
            width="71" 
            height="56" 
            className="h-9 sm:h-10 w-auto" 
          />
        </a>

        {/* ── وسط: دکمه پیش‌ثبت‌نام + لینک‌های ناوبری ── */}
        <div className="hidden lg:flex flex-1 items-center justify-center gap-7">
          {/* دکمه پیش‌ثبت‌نام (اولین آیتم در وسط) */}
          <a
            href="#"
            className="whitespace-nowrap -rotate-3 rounded-pill-sm bg-navy px-[11px] py-[7px] text-base2 font-black text-white transition-transform duration-200 hover:-rotate-6 hover:scale-105"
          >
            پیش‌ثبت‌نام
          </a>

          {/* لینک‌های ناوبری */}
          <ul className="flex items-center gap-7 list-none m-0 p-0">
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

        {/* ── سمت چپ: دکمه ورود/ثبت‌نام ── */}
        <a
          href="#"
          className="whitespace-nowrap rounded-pill-md bg-teal px-5 sm:px-6 py-[9.4px] text-base2 font-extrabold text-white transition-colors duration-200 hover:bg-teal-text flex-shrink-0"
        >
          ورود / ثبت نام
        </a>
      </nav>
    </header>
  );
}