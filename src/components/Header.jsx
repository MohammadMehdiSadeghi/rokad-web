import logo from "../assets/images/logo.png";

// Order matters here: this array is read top-to-bottom in the JSX below,
// and with the page set to dir="rtl" a flex row's *first* DOM child
// renders at the right edge. So this list is written in physical
// right-to-left order (closest to the logo → closest to the login
// button), matching the Figma x-positions exactly.
const navLinks = [
  { label: "مدارس", href: "#" },
  { label: "افتخارات", href: "#" },
  { label: "مشاوره هدایت تحصیلی و شغلی", href: "#" },
  { label: "درباره ما", href: "#" },
  { label: "درخواست همکاری", href: "#" },
];

export default function Header() {
  return (
    <header className="pt-4 sm:pt-8">
      <nav
        aria-label="ناوبری اصلی"
        className="max-w-content mx-auto flex items-center justify-between gap-6 bg-bg-mint rounded-2xl sm:rounded-navbar px-4 sm:px-8 py-2.5"
      >
        {/* Right edge (RTL leading edge) */}
        <a href="#" className="flex-shrink-0" aria-label="رکاد">
          <img src={logo} alt="رکاد" width="71" height="56" className="h-9 sm:h-10 w-auto" />
        </a>

        <a
          href="#"
          className="hidden sm:inline-block whitespace-nowrap -rotate-3 rounded-pill-sm bg-navy px-[11px] py-[7px] text-base2 font-extrabold text-white"
        >
          پیش‌ثبت‌نام
        </a>

        <ul className="hidden lg:flex flex-1 items-center justify-center gap-7 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="whitespace-nowrap text-base2 font-semibold text-navy transition-colors hover:text-teal"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Left edge (RTL trailing edge) */}
        <a
          href="#"
          className="whitespace-nowrap rounded-pill-md bg-teal px-6 py-[9.4px] text-base2 font-extrabold text-white transition-colors hover:bg-teal-text"
        >
          ورود / ثبت نام
        </a>
      </nav>
    </header>
  );
}
