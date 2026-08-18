function InstagramIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
    </svg>
  );
}

function TelegramIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21.198 2.433a2.242 2.242 0 0 0-1.022.215l-8.609 3.33c-2.068.8-4.133 1.598-5.724 2.21a405.15 405.15 0 0 1-2.848 1.09c-.42.147-.99.332-1.47.734a2.242 2.242 0 0 0-.685 1.588c-.015.505.164.99.505 1.364.332.363.786.59 1.273.734 1.18.364 2.41.734 3.428 1.042.49.147.99.332 1.414.604.364.234.654.556.846.942.188.384.272.816.246 1.248-.047.734-.364 1.414-.876 1.942l-.942.98a2.242 2.242 0 0 0-.598 1.306c-.06.498.06.998.342 1.422.282.424.714.72 1.206.834.492.114 1.002.084 1.482-.084l8.609-3.33c.492-.192.93-.51 1.248-.924.318-.414.498-.912.516-1.428.018-.516-.126-1.026-.414-1.476-.288-.45-.702-.816-1.194-1.062l-8.609-3.33c-.492-.192-.93-.51-1.248-.924-.318-.414-.498-.912-.516-1.428-.018-.516.126-1.026.414-1.476.288-.45.702-.816 1.194-1.062l8.609-3.33z" />
    </svg>
  );
}

function LinkedinIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative bg-[#21295A] text-white overflow-hidden" dir="rtl">
      <div className="max-w-[90rem] mx-auto px-6 lg:px-12">
        {/* ── ردیف بالایی: ستون‌ها + لوگو ── */}
        <div className="pt-[3.375rem] pb-8 lg:pt-[3.75rem] lg:pb-10 flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-0">

          {/* ── ستون‌های محتوا (۳ ستون) ── */}
          <div className="flex flex-wrap gap-x-8 gap-y-8 lg:flex-nowrap justify-between w-full lg:w-auto">

            {/* ستون ۱: درباره */}
            <div className="flex-1 min-w-[7.5rem]">
              <h3 className="font-black text-[#58BDAF] text-[1.25rem] leading-none mb-3">
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
            <div className="flex-1 min-w-[7.5rem]">
              <h3 className="font-black text-[#58BDAF] text-[1.25rem] leading-none mb-3">
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

            {/* ستون ۳: ارتباط */}
            <div className="flex-1 min-w-[8.75rem]">
              <h3 className="font-black text-[#58BDAF] text-[1.25rem] leading-none mb-3">
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
