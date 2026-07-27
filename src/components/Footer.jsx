import logo from '../assets/images/logo.png'

export default function Footer() {
  return (
    <footer className="bg-navy pt-2">
      <div className="container-page flex flex-col items-center justify-between gap-4 border-t border-white/10 py-7 text-white/60 md:flex-row">
        <img src={logo} alt="رکاد" className="h-7 w-auto brightness-0 invert" />
        <p className="text-xs">
          © {new Date().getFullYear()} تمامی حقوق برای رکاد محفوظ است.
        </p>
      </div>
    </footer>
  )
}
