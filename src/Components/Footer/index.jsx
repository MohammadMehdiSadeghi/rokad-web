function PersonIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="8" r="3.2" />
      <path d="M12 12.5c-3.6 0-6 1.8-6 4.3V18h12v-1.2c0-2.5-2.4-4.3-6-4.3z" />
    </svg>
  );
}

function GirlIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="7.5" r="3" />
      <path d="M12 11.5c-1.1 0-1.9.6-2.3 1.5L7.5 17.5c-.3.8.2 1.5 1 1.5h2.4V21h2.2v-2h2.4c.8 0 1.3-.7 1-1.5l-2.2-4.5c-.4-.9-1.2-1.5-2.3-1.5z" />
    </svg>
  );
}

function PhoneIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 12c0-4.4 3.6-8 8-8s8 3.6 8 8" strokeLinecap="round" />
      <path d="M7.5 13.5c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5" strokeLinecap="round" />
      <path d="M10.5 15c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5" strokeLinecap="round" />
    </svg>
  );
}

function LocationIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="3" fill="currentColor" stroke="none" />
    </svg>
  );
}

function DotsIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="currentColor">
      <circle cx="5" cy="4" r="1.4" />
      <circle cx="11" cy="4" r="1.4" />
      <circle cx="5" cy="12" r="1.4" />
      <circle cx="11" cy="12" r="1.4" />
    </svg>
  );
}

const quickLinks = [
  "پیش ثبت نام",
  "مدارس",
  "افتخارات",
  "مشاوره هدایای تحصیلی و شغلی",
  "بلاگ",
  "درباره ما",
];

const schools = [
  {
    title: "هنرستان پسرانه",
    phones: ["۰۲۱-۴۴۰۶۱۹۷۳", "۰۲۱-۴۴۰۲۸۶۳۰"],
    address: "مشهد - فرامرز عباسی ۳۳",
    circleClass: "bg-teal",
    Icon: PersonIcon,
    img: "/assets/footer/boy.png",
  },
  {
    title: "هنرستان دخترانه",
    phones: ["۰۲۱-۴۴۰۲۸۶۳۰"],
    address: "مشهد - فرامرز عباسی ۵۴",
    circleClass: "bg-female-normal",
    Icon: GirlIcon,
    img: "/assets/footer/girl.png",
  },
];

function ContactRow({ icon: Icon, img, circleClass, children, alt }) {
  return (
    <li className="flex items-center gap-3">
      {img ? (
        <img src={img} alt={alt} className="w-9 h-9 object-contain" />
      ) : (
        <span
          className={`w-9 h-9 flex-shrink-0 flex items-center justify-center rounded-full text-white ${circleClass || "text-white"}`}
        >
          <Icon className="w-5 h-5" />
        </span>
      )}
      <span className="text-[0.8125rem] sm:text-[0.875rem] text-white/90 leading-7">{children}</span>
    </li>
  );
}

export default function Footer() {
  return (
    <footer className="relative bg-male-normal text-white overflow-hidden" dir="rtl">
      <div className="max-w-[75rem] mx-auto px-6 lg:px-8">
        {/* ── ردیف بالایی ── */}
        <div className="pt-[3rem] lg:pt-[3.75rem] pb-8 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
          {/* ستون ۱: دسترسی سریع (راست) */}
          <div>
            <h3 className="flex items-center gap-2 font-black text-[1.25rem] sm:text-[1.5rem] leading-none mb-5">
              <DotsIcon className="w-4 h-4 text-white" />
              دسترسی سریع :
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-[0.875rem] text-white/90 hover:text-teal transition-colors leading-7"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ستون ۲ و ۳: هنرستان‌ها */}
          {schools.map(({ title, phones, address, circleClass, Icon, img }) => (
            <div key={title}>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <img src={img} alt={title} className="w-9 h-9 object-contain" />
                  <span className="text-[0.9375rem] sm:text-[1rem] font-bold leading-7">{title}</span>
                </li>

                <ContactRow icon={PhoneIcon} img="/assets/footer/phone.png" alt="تلفن">
                  {phones.join(" - ")}
                </ContactRow>

                <ContactRow icon={LocationIcon} img="/assets/footer/location.png" alt="آدرس">
                  {address}
                </ContactRow>
              </ul>
            </div>
          ))}
        </div>

        {/* ── خط جداکننده ── */}
        <div className="h-px bg-white/25" />

        {/* ── ردیف پایینی ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 lg:py-7">
          <p className="text-[0.75rem] text-white/80 font-medium">
            © ۱۴۰۵ هنرستان رکاد . همه‌ی حقوق محفوظ است
          </p>

          {/* جای خالی ۴ لوگو/آیکون — بعداً با عکس‌های /assets/footer/ جایگزین میشه */}
          <div className="flex items-center gap-2.5">
            {[1, 2, 3, 4].map((n) => (
              <div
                key={n}
                className="w-8 h-8 rounded-[0.4rem] bg-white/15"
                aria-hidden="true"
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
