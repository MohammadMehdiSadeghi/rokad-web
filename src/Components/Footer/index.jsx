// SVG icon components — no external dependency needed
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
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.5 8.5H3V21h3.5V8.5ZM4.75 3C3.65 3 3 3.72 3 4.65S3.65 6.3 4.72 6.3h.03c1.1 0 1.75-.73 1.75-1.65C6.47 3.72 5.83 3 4.75 3ZM21 13.85c0-3.77-2.01-5.52-4.7-5.52-2.16 0-3.13 1.19-3.67 2.02V8.5H9.13V21h3.5v-6.97c0-1.84.35-3.62 2.63-3.62 2.25 0 2.28 2.1 2.28 3.74V21H21v-7.15Z" />
    </svg>
  );
}

function MapPinIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-4.41-4.41 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function SendIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#21295A] text-white overflow-hidden" dir="rtl">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        {/* ── بخش بالایی: لوگو + ستون‌ها ── */}
        <div className="pt-[44px] sm:pt-[52px] lg:pt-[60px] pb-[28px] sm:pb-[36px] flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-0">
          {/* لوگو + توضیح */}
          <div className="lg:max-w-[340px] xl:max-w-[380px] flex flex-col items-start text-right">
            {/* لوگوی سه‌کلمه‌ای: رکاد · مدارس · ارتباط */}
            <div className="flex items-center gap-1.5 sm:gap-2 mb-4 flex-wrap justify-start">
              <span className="font-black text-[17px] sm:text-[19px] lg:text-[20px] text-[#58BDAF] leading-none">
                رکاد
              </span>
              <span className="w-[3px] h-[3px] sm:w-[4px] sm:h-[4px] bg-[#58BDAF]/50 rounded-full shrink-0" />
              <span className="font-black text-[17px] sm:text-[19px] lg:text-[20px] text-[#58BDAF] leading-none">
                مدارس
              </span>
              <span className="w-[3px] h-[3px] sm:w-[4px] sm:h-[4px] bg-[#58BDAF]/50 rounded-full shrink-0" />
              <span className="font-black text-[17px] sm:text-[19px] lg:text-[20px] text-[#58BDAF] leading-none">
                ارتباط
              </span>
            </div>

            <p className="text-[12px] sm:text-[13px] lg:text-[14px] text-white/80 leading-[2] font-normal">
              مدرسه و هنرستان استارتاپی رکاد. جایی که مهارت واقعی، تجربه‌ی کسب‌وکار و آینده‌سازی زیر یک سقف جمع می‌شن.
            </p>
          </div>

          {/* ستون‌های لینک */}
          <div className="flex flex-wrap gap-x-6 gap-y-5 lg:gap-x-8 xl:gap-x-10">
            {/* ستون درباره */}
            <div className="flex flex-col gap-3">
              <h4 className="font-black text-[17px] sm:text-[19px] lg:text-[20px] text-[#58BDAF] leading-none">
                درباره
              </h4>
              <ul className="flex flex-col gap-2.5">
                {["درباره‌ی ما", "تیم ما", "اکوسیستم", "همکاری با ما"].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[12px] sm:text-[13px] text-white/80 hover:text-white transition-colors duration-200 leading-6"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ستون مدارس */}
            <div className="flex flex-col gap-3">
              <h4 className="font-black text-[17px] sm:text-[19px] lg:text-[20px] text-[#58BDAF] leading-none">
                مدارس
              </h4>
              <ul className="flex flex-col gap-2.5">
                {["هنرستان پسرانه", "هنرستان دخترانه", "پیش‌ثبت‌نام", "شرایط پذیرش"].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[12px] sm:text-[13px] text-white/80 hover:text-white transition-colors duration-200 leading-6"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ستون ارتباط */}
            <div className="flex flex-col gap-3">
              <h4 className="font-black text-[17px] sm:text-[19px] lg:text-[20px] text-[#58BDAF] leading-none">
                ارتباط
              </h4>
              <ul className="flex flex-col gap-2.5">
                <li>
                  <a
                    href="#"
                    className="text-[12px] sm:text-[13px] text-white/80 hover:text-white transition-colors duration-200 leading-6 flex items-center gap-1.5"
                  >
                    <MapPinIcon className="w-3 h-3 shrink-0" />
                    مشهد، فرامرز عباسی ۳۳
                  </a>
                </li>
                <li>
                  <a
                    href="tel:02112345678"
                    className="text-[12px] sm:text-[13px] text-white/80 hover:text-white transition-colors duration-200 leading-6 flex items-center gap-1.5"
                  >
                    <PhoneIcon className="w-3 h-3 shrink-0" />
                    ۰۲۱-۱۲۳۴۵۶۷۸
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@rokad.school"
                    className="text-[12px] sm:text-[13px] text-white/80 hover:text-white transition-colors duration-200 leading-6 flex items-center gap-1.5"
                  >
                    <MailIcon className="w-3 h-3 shrink-0" />
                    info@rokad.school
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[12px] sm:text-[13px] text-white/80 hover:text-white transition-colors duration-200 leading-6 flex items-center gap-1.5"
                  >
                    <SendIcon className="w-3 h-3 shrink-0" />
                    فرم تماس
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ── خط جداکننده ── */}
        <div className="border-t border-white/15" />

        {/* ── بخش پایینی: کپی‌رایت + social ── */}
        <div className="py-5 flex flex-col sm:flex-row items-center sm:items-center justify-between gap-4">
          {/* کپی‌رایت */}
          <p className="text-[11px] sm:text-[12px] text-white/60 font-normal leading-6 text-center sm:text-right">
            © ۱۴۰۵ هنرستان رکاد. همه‌ی حقوق محفوظ است.
          </p>

          {/* آیکون‌های social */}
          <div className="flex items-center gap-2.5">
            {[
              { icon: InstagramIcon, label: "اینستاگرام" },
              { icon: YoutubeIcon, label: "یوتیوب" },
              { icon: TelegramIcon, label: "تلگرام" },
              { icon: LinkedinIcon, label: "لینکدین" },
            ].map(({ icon: Icon, label }) => (
              <button
                key={label}
                aria-label={label}
                className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-[6px] bg-white/10 hover:bg-white/20 transition-colors duration-200"
              >
                <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/80" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
