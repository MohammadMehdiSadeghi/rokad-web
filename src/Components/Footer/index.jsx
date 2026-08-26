function InstagramIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  );
}

function YoutubeIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

function TelegramIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
    </svg>
  );
}

function LinkedinIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative bg-[#21295A] text-white overflow-hidden" dir="rtl">
      <div className="max-w-[75rem] mx-auto px-6 lg:px-8">
        {/* ── ردیف بالایی: ستون‌ها + لوگو ── */}
        <div className="pt-[3.375rem] pb-8 lg:pt-[3.75rem] lg:pb-10 flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-0">

          {/* ── ستون‌های محتوا — موبایل/تبلت: گرید مرتب، دسکتاپ: flex مثل قبل ── */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 w-full lg:flex lg:flex-nowrap lg:justify-between lg:w-auto">

            {/* ستون ۱: درباره */}
            <div className="min-w-0 lg:flex-1 lg:min-w-[7.5rem]">
              <h3 className="font-black text-[#58BDAF] text-[1.125rem] sm:text-[1.25rem] leading-none mb-3">
                رکاد
              </h3>
              <ul className="space-y-2">
                {["درباره‌ی ما", "تیم ما", "اکوسیستم", "همکاری با ما"].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[0.8125rem] text-white/90 hover:text-[#58BDAF] transition-colors leading-7">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ستون ۲: مدارس */}
            <div className="min-w-0 lg:flex-1 lg:min-w-[7.5rem]">
              <h3 className="font-black text-[#58BDAF] text-[1.125rem] sm:text-[1.25rem] leading-none mb-3">
                مدارس
              </h3>
              <ul className="space-y-2">
                {["هنرستان پسرانه", "هنرستان دخترانه", "پیش‌ثبت‌نام", "شرایط پذیرش"].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[0.8125rem] text-white/90 hover:text-[#58BDAF] transition-colors leading-7">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ستون ۳: ارتباط — در گرید ۲ستونه‌ی موبایل تمام‌عرض تا خونه‌ی خالی نمونه */}
            <div className="col-span-2 sm:col-span-1 min-w-0 lg:flex-1 lg:min-w-[8.75rem]">
              <h3 className="font-black text-[#58BDAF] text-[1.125rem] sm:text-[1.25rem] leading-none mb-3">
                ارتباط
              </h3>
              <ul className="space-y-2 text-[0.8125rem] text-white/90 leading-7">
                <li>مشهد، فرامرز عباسی ۳۳</li>
                <li>۰۲۱-۱۲۳۴۵۶۷۸</li>
                <li>info@rokad.school</li>
                <li>
                  <a href="#" className="hover:text-[#58BDAF] transition-colors">فرم تماس</a>
                </li>
              </ul>
            </div>
          </div>

          {/* ── لوگو + توضیح (سمت راست) ── */}
          <div className="w-full lg:w-[17.25rem] flex-shrink-0 pt-4 lg:pt-0">
            <p className="text-[0.8125rem] text-white/90 leading-[2]">
              مدرسه و هنرستان استارتاپی رکاد. جایی که مهارت واقعی، تجربه‌ی کسب‌وکار و آینده‌سازی زیر یک سقف جمع می‌شن.
            </p>
          </div>
        </div>

        {/* ── خط جداکننده ── */}
        <div className="h-px bg-white/10 my-6 lg:my-8" />

        {/* ── ردیف پایینی: social icons + کپی‌رایت ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-8 lg:pb-10">
          {/* آیکون‌های شبکه اجتماعی — ۴ مربع ۳۰×۳۰ */}
          <div className="flex items-center gap-3">
            {[
              { icon: InstagramIcon, label: "اینستاگرام" },
              { icon: YoutubeIcon, label: "یوتیوب" },
              { icon: TelegramIcon, label: "تلگرام" },
              { icon: LinkedinIcon, label: "لینکدین" },
            ].map(({ icon: Icon, label }) => (
              <button
                key={label}
                aria-label={label}
                className="w-[1.875rem] h-[1.875rem] flex items-center justify-center bg-white rounded transition-colors duration-200 hover:bg-white/90"
              >
                <Icon className="w-5 h-5 text-[#21295A]" />
              </button>
            ))}
          </div>

          {/* کپی‌رایت */}
          <p className="text-[0.6875rem] text-white/70 font-medium">
            © ۱۴۰۵ هنرستان رکاد. همه‌ی حقوق محفوظ است.
          </p>
        </div>
      </div>
    </footer>
  );
}
