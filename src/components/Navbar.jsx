import { useState } from 'react'
import logo from '../assets/images/logo.png'

const NAV_LINKS = [
  { label: 'مدارس', href: '#schools' },
  { label: 'افتخارات', href: '#honors' },
  { label: 'مشاوره هدایت تحصیلی', href: '#counseling' },
  { label: 'درباره ما', href: '#about' },
  { label: 'درخواست همکاری', href: '#cooperation' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="relative z-30 bg-white">
      <div className="container-page flex h-20 items-center justify-between">
        {/* Logo */}
        <a href="#top" className="flex shrink-0 items-center gap-2">
          <img src={logo} alt="رکاد" className="h-9 w-auto md:h-10" />
        </a>

        {/* Desktop nav links */}
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-ink/80 transition-colors hover:text-teal-deep"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right controls */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#login"
            className="text-sm font-medium text-ink/70 transition-colors hover:text-teal-deep"
          >
            ورود | ثبت نام
          </a>
          <a
            href="#preregister"
            className="rounded-full bg-teal px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-teal-dark"
          >
            پیش‌ثبت‌نام
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label="باز کردن منو"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-ink lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="border-t border-gray-100 bg-white px-5 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col gap-4 pt-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-ink/80"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href="#login" className="text-sm font-medium text-ink/70">
              ورود | ثبت نام
            </a>
            <a
              href="#preregister"
              className="w-full rounded-full bg-teal px-5 py-2.5 text-center text-sm font-semibold text-white"
            >
              پیش‌ثبت‌نام
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
