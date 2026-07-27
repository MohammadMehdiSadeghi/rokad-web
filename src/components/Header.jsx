const navLinks = [
  { label: "درخواست همکاری", href: "#" },
  { label: "درباره ما", href: "#" },
  { label: "مشاوره هدایت تحصیلی و شغلی", href: "#" },
  { label: "افتخارات", href: "#" },
  { label: "مدارس", href: "#" },
];

export default function Header() {
  return (
    <header className="pt-4 sm:pt-8">
      <nav
        aria-label="ناوبری اصلی"
        className="max-w-content mx-auto flex items-center justify-between gap-6 bg-bg-mint rounded-2xl sm:rounded-navbar px-4 sm:px-8 py-2.5"
      >
        <a
          href="#"
          className="whitespace-nowrap rounded-pill-md bg-teal px-6 py-[9.4px] text-base2 font-extrabold text-white transition-colors hover:bg-teal-text"
        >
          ورود / ثبت نام
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

        <a
          href="#"
          className="whitespace-nowrap inline-block -rotate-3 rounded-pill-sm bg-navy px-[11px] py-[7px] text-base2 font-extrabold text-white"
        >
          پیش‌ثبت‌نام
        </a>
      </nav>
    </header>
  );
}
