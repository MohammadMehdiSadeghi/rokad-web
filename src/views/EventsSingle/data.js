/* =========================================================
   دادهٔ صفحهٔ تک‌رویداد
   ---------------------------------------------------------
   ترتیب سکشن‌ها (طبق خواستهٔ کاربر):
     ۱) درباره‌ی رویداد + مشخصات
     ۲) منتورها
     ۳) عوامل اجرایی
     ۴) داورها
     ۵) تیم برتر
     ۶) تیم‌های شایسته تقدیر
     ۷) رویداد چطور گذشت
     ۸) ددلاین رویداد
   ========================================================= */

export const event30 = {
  slug: "startup-weekend-30",
  tone: "teal",
  postMeta: {
    title: "استارتاپ‌ویکند ۳۰: سه روز برای واقعی‌کردن ایده‌ها",
    titleWords: [
      { text: "استارتاپ‌ویکند", color: "text-ink", rotate: "-1deg" },
      { text: "۳۰:", color: "text-magenta", rotate: "1.5deg" },
      { text: "سه", color: "text-ink", rotate: "-1deg" },
      { text: "روز", color: "text-teal", rotate: "1.5deg" },
      { text: "برای", color: "text-ink", rotate: "-1.5deg" },
      { text: "ایده‌ها", color: "text-ink", rotate: "1deg" },
    ],
    eyebrow: "گزارش رویداد · هنرستان دخترانه",
    subtitle:
      "سی‌امین رویداد استارتاپی رکاد از ۳۱ شهریور تا ۳ مهر ۱۴۰۴ برای دانش‌آموزان هنرستان دخترانه برگزار شد. یه استارتاپ‌ویکند فشرده که توش دانش‌آموزا تیم تشکیل دادن، مسئله‌ها رو بررسی کردن و برای تبدیل ایده‌هاشون به یه محصول قابل ارائه، وارد میدون شدن.",
    meta: [
      { icon: "clock", text: "زمان مطالعه:", strong: "۶ دقیقه" },
      { icon: "calendar", text: "تاریخ برگزاری:", strong: "۳۱ شهریور — ۳ مهر ۱۴۰۴" },
      { icon: "user", text: "نویسنده:", strong: "تیم محتوای رکاد" },
    ],
    sticker: "گزارش دخترانه‌ها",
    coverLabel: "تصویر کاور",
    coverCaption: "تصویر پانورامای اختتامیه رویداد",
    breadcrumb: ["خانه", "ایونت‌ها", "استارتاپ‌ویکند ۳۰"],
  },
  toc: [
    { id: "s-about", num: "۰۱", label: "درباره‌ی رویداد" },
    { id: "s-mentors", num: "۰۲", label: "منتورها" },
    { id: "s-staff", num: "۰۳", label: "عوامل اجرایی" },
    { id: "s-judges", num: "۰۴", label: "داورها" },
    { id: "s-best", num: "۰۵", label: "تیم برتر" },
    { id: "s-merit", num: "۰۶", label: "تیم‌های شایسته تقدیر" },
    { id: "s-story", num: "۰۷", label: "رویداد چطور گذشت" },
    { id: "s-timeline", num: "۰۸", label: "ددلاین رویداد" },
  ],
  blocks: [
    {
      type: "h2",
      id: "s-about",
      words: [
        { text: "درباره‌ی", rotate: "1deg", color: "text-ink" },
        { text: "این", rotate: "-1deg", color: "text-ink" },
        { text: "رویداد", rotate: "1.5deg", color: "text-teal" },
      ],
    },
    {
      type: "p",
      text: "توی رکاد ما به یه چیز خیلی ساده اعتقاد داریم: یاد گرفتن با «شنیدن» اتفاق نمی‌افته، با «انجام دادن» اتفاق می‌افته. کلاس‌های تئوری کارآفرینی، پاورپوینت‌های پر از مدل کسب‌وکار و ویدیوهای انگیزشی هرقدر هم که خوب باشن، جایگزین یه تجربه واقعی نمی‌شن.",
    },
    {
      type: "p",
      text: "مسیر رویداد یه چیز خطی و ساده نبود. هر تیم باید همزمان چند تا کار می‌کرد: اعتبارسنجی ایده، طراحی راه‌حل، ساخت نمونه اولیه، و آماده‌سازی یه ارائه که بتونه داورا رو قانع کنه. منتورها کنارشون بودن، ولی نه برای اینکه جواب آماده بدن — برای اینکه با سؤالای درست، مسیر رو دقیق‌تر کنن.",
    },
    {
      type: "infobox",
      tone: "teal",
      label: "مشخصات رویداد",
      items: [
        ["تاریخ:", "۳۱ شهریور تا ۳ مهر ۱۴۰۴"],
        ["مدت رویداد:", "سه روز فشرده"],
        ["شعبه:", "هنرستان دخترانه"],
        ["محل اختتامیه:", "سالن فرهنگی رشد مشهد"],
      ],
    },
    {
      type: "h2",
      id: "s-mentors",
      words: [
        { text: "منتورها", rotate: "1deg", color: "text-ink" },
        { text: "رویداد", rotate: "-1.5deg", color: "text-teal" },
      ],
    },
    {
      type: "p",
      text: "سه منتور با پیش‌زمینه‌های متفاوت — از توسعه محصول تا طراحی تجربه کاربری — در تمام روزها کنار تیم‌ها بودن:",
    },
    {
      type: "people",
      tone: "teal",
      items: [
        { initials: "حآ", name: "حامد آرون", role: "منتور محصول" },
        { initials: "مپ", name: "مهدی پرهیزکار", role: "منتور فنی" },
        { initials: "زس", name: "زهرا سالار", role: "منتور تجربه کاربری" },
      ],
      accentItems: [],
    },
    {
      type: "h2",
      id: "s-staff",
      words: [
        { text: "عوامل", rotate: "1deg", color: "text-ink" },
        { text: "اجرایی", rotate: "-1.5deg", color: "text-navy-alt" },
      ],
    },
    {
      type: "p",
      text: "تیم اجرایی رویداد که هماهنگی، برنامه‌ریزی و پیش‌برد روزهای رویداد رو بر عهده داشتن:",
    },
    {
      type: "people",
      tone: "navy",
      items: [
        { initials: "رد", name: "رویا دولت‌آبادی", role: "دبیر اجرایی", badge: "دبیر" },
        { initials: "مم", name: "مطهره منبتی", role: "سرپرست اجرایی", badge: "سرپرست" },
        { initials: "عع", name: "علیرضا عزیزپور", role: "تسهیلگر رویداد" },
      ],
      accentItems: [],
    },
    {
      type: "h2",
      id: "s-judges",
      words: [
        { text: "داورها", rotate: "1deg", color: "text-ink" },
        { text: "نهایی", rotate: "-1.5deg", color: "text-magenta" },
      ],
    },
    {
      type: "p",
      text: "ارائه‌های روز اختتامیه توسط این داوران ارزیابی شد؛ معیارها شامل خلاقیت ایده، شناخت مسئله، کیفیت راه‌حل، کار تیمی و کیفیت ارائه بود:",
    },
    {
      type: "people",
      tone: "magenta",
      items: [
        { initials: "پا", name: "پریسا اسدی", role: "داور" },
        { initials: "حآ", name: "حامد آرون", role: "داور" },
        { initials: "عع", name: "علیرضا عزیزپور", role: "داور" },
      ],
      accentItems: [],
    },
    {
      type: "h2",
      id: "s-best",
      words: [
        { text: "تیم", rotate: "1deg", color: "text-ink" },
        { text: "برتر", rotate: "-1.5deg", color: "text-magenta" },
      ],
    },
    {
      type: "teams",
      columns: 1,
      items: [
        {
          medal: "۱",
          rank: "تیم اول رویداد",
          team: "تیم برتر",
          project: "پلتفرم آموزشی برای دانش‌آموزان دبیرستان",
          members: "۵ عضو تیم",
          tone: "gold",
        },
      ],
    },
    {
      type: "h2",
      id: "s-merit",
      words: [
        { text: "تیم‌های", rotate: "1deg", color: "text-ink" },
        { text: "شایسته", rotate: "-1.5deg", color: "text-teal" },
        { text: "تقدیر", rotate: "1deg", color: "text-ink" },
      ],
    },
    {
      type: "teams",
      columns: 2,
      items: [
        {
          medal: "۲",
          rank: "تیم دوم",
          team: "شایسته تقدیر",
          project: "راه‌حلی برای مدیریت زمان دانش‌آموزی",
          members: "۴ عضو تیم",
          tone: "silver",
        },
        {
          medal: "۳",
          rank: "تیم سوم",
          team: "شایسته تقدیر",
          project: "اپلیکیشن کمکی برای درس‌های ریاضی",
          members: "۴ عضو تیم",
          tone: "bronze",
        },
      ],
    },
    {
      type: "h2",
      id: "s-story",
      words: [
        { text: "رویداد", rotate: "1deg", color: "text-ink" },
        { text: "چطور", rotate: "-1deg", color: "text-ink" },
        { text: "گذشت", rotate: "1.5deg", color: "text-teal" },
      ],
    },
    {
      type: "p",
      text: "روز آخر، تیم‌ها نتیجه سه روز تلاششون رو توی <strong>سالن فرهنگی رشد مشهد</strong> ارائه کردن. معیارهای داوری کاملاً شفاف بود و یه تیم به عنوان تیم برتر انتخاب شد و دو تیم دیگه هم عنوان شایسته تقدیر گرفتن.",
    },
    {
      type: "pullquote",
      accent: false,
      text: "توی این رویداد، مهم‌ترین چیزی که یاد گرفتم این بود که ایده‌ی خوب بدون تیم خوب، به هیچ جا نمی‌رسه. و تیم خوب، اونیه که بلد باشه با فشار زمان و اختلاف نظر کنار بیاد.",
      attr: "یکی از دانش‌آموزان تیم برتر",
    },
    {
      type: "h2",
      id: "s-timeline",
      words: [
        { text: "ددلاین", rotate: "1deg", color: "text-ink" },
        { text: "رویداد", rotate: "-1.5deg", color: "text-navy-alt" },
      ],
    },
    {
      type: "p",
      text: "رویداد در سه روز و طبق این زمان‌بندی پیش رفت:",
    },
    {
      type: "timeline",
      items: [
        { date: "۳۱ شهریور ۱۴۰۴", title: "شروع رویداد و تشکیل تیم‌ها", desc: "معرفی مسئله‌ها، شکل‌گیری تیم‌ها و انتخاب ایده‌ی هر تیم در روز اول." },
        { date: "۱ مهر ۱۴۰۴", title: "اعتبارسنجی و ساخت نمونه اولیه", desc: "هر تیم با کاربر واقعی صحبت کرد و ایده‌هایی که مشتری نداشتن کنار گذاشته شدن." },
        { date: "۲ مهر ۱۴۰۴", title: "منتورشیپ و اصلاح مسیر", desc: "جلسه‌های منتورشیپ، دریافت بازخورد و آماده‌سازی ارائه‌ی نهایی." },
        { date: "۳ مهر ۱۴۰۴", title: "اختتامیه در سالن رشد", desc: "ارائه‌ی تیم‌ها مقابل داوران و معرفی تیم برتر و تیم‌های شایسته تقدیر." },
      ],
    },
  ],
  tags: [
    { text: "#استارتاپ_ویکند", tone: "default" },
    { text: "#استارتاپ‌ویکند_۳۰", tone: "magenta" },
    { text: "#هنرستان_دخترانه", tone: "magenta" },
    { text: "#کارآفرینی_نوجوانان", tone: "default" },
  ],
};

export const event31 = {
  slug: "startup-weekend-31",
  tone: "navy",
  postMeta: {
    title: "استارتاپ‌ویکند ۳۱: پنج روز فشرده برای پسرها",
    titleWords: [
      { text: "استارتاپ‌ویکند", color: "text-ink", rotate: "-1deg" },
      { text: "۳۱:", color: "text-navy-alt", rotate: "1.5deg" },
      { text: "پنج", color: "text-ink", rotate: "-1deg" },
      { text: "روز", color: "text-teal", rotate: "1.5deg" },
      { text: "فشرده", color: "text-ink", rotate: "-1.5deg" },
    ],
    eyebrow: "گزارش رویداد · هنرستان پسرانه",
    subtitle:
      "سی‌ویکمین رویداد استارتاپی رکاد از ۵ تا ۹ مهر ۱۴۰۵ برای دانش‌آموزان هنرستان پسرانه برگزار شد — پنج روز فشرده که توش تیم‌ها عمیق‌تر روی مسئله کار کردن و ایده‌هاشون رو به یه محصول قابل ارائه رسوندن.",
    meta: [
      { icon: "clock", text: "زمان مطالعه:", strong: "۵ دقیقه" },
      { icon: "calendar", text: "تاریخ برگزاری:", strong: "۵ — ۹ مهر ۱۴۰۵" },
      { icon: "user", text: "نویسنده:", strong: "تیم محتوای رکاد" },
    ],
    sticker: "گزارش پسرانه‌ها",
    coverLabel: "تصویر کاور",
    coverCaption: "تصویر اختتامیه در سالن ارم مشهد",
    breadcrumb: ["خانه", "ایونت‌ها", "استارتاپ‌ویکند ۳۱"],
  },
  toc: [
    { id: "s-about", num: "۰۱", label: "درباره‌ی رویداد" },
    { id: "s-mentors", num: "۰۲", label: "منتورها" },
    { id: "s-staff", num: "۰۳", label: "عوامل اجرایی" },
    { id: "s-judges", num: "۰۴", label: "داورها" },
    { id: "s-best", num: "۰۵", label: "تیم برتر" },
    { id: "s-merit", num: "۰۶", label: "تیم‌های شایسته تقدیر" },
    { id: "s-story", num: "۰۷", label: "رویداد چطور گذشت" },
    { id: "s-timeline", num: "۰۸", label: "ددلاین رویداد" },
  ],
  blocks: [
    {
      type: "h2",
      id: "s-about",
      words: [
        { text: "درباره‌ی", rotate: "1deg", color: "text-ink" },
        { text: "این", rotate: "-1deg", color: "text-ink" },
        { text: "رویداد", rotate: "1.5deg", color: "text-navy-alt" },
      ],
    },
    {
      type: "p",
      text: "یه دوره بعد، نوبت هنرستان پسرانه بود. <strong>استارتاپ‌ویکند ۳۱</strong> از ۵ تا ۹ مهر ۱۴۰۵ برگزار شد و طولانی‌تر از دور قبل بود — پنج روز به جای سه روز. این تفاوت زمانی این فرصت رو داد که تیم‌ها عمیق‌تر روی مسئله کار کنن و ایده‌شون رو با اعتبارسنجی واقعی پخته‌تر کنن.",
    },
    {
      type: "p",
      text: "مسیر رویداد شامل تشکیل تیم، شناسایی عمیق مسئله، مصاحبه با مشتری، ساخت MVP و ارائه نهایی در سالن اختتامیه بود. هر تیم موظف بود با کاربران واقعی صحبت کنه و محصولش رو روی نیاز واقعی بسازه.",
    },
    {
      type: "infobox",
      tone: "navy",
      label: "مشخصات رویداد",
      items: [
        ["تاریخ:", "۵ تا ۹ مهر ۱۴۰۵"],
        ["مدت رویداد:", "پنج روز فشرده"],
        ["شعبه:", "هنرستان پسرانه"],
        ["محل اختتامیه:", "سالن ارم مشهد"],
      ],
    },
    {
      type: "h2",
      id: "s-mentors",
      words: [
        { text: "منتورها", rotate: "1deg", color: "text-ink" },
        { text: "رویداد", rotate: "-1.5deg", color: "text-navy-alt" },
      ],
    },
    {
      type: "p",
      text: "منتورهای فنی و محصول که در تمام پنج روز کنار تیم‌ها بودن:",
    },
    {
      type: "people",
      tone: "navy",
      items: [
        { initials: "مپ", name: "مهدی پرهیزکار", role: "منتور فنی" },
        { initials: "جن", name: "جمیل نیک‌اندیش", role: "منتور محصول" },
      ],
      accentItems: [],
    },
    {
      type: "h2",
      id: "s-staff",
      words: [
        { text: "عوامل", rotate: "1deg", color: "text-ink" },
        { text: "اجرایی", rotate: "-1.5deg", color: "text-navy-alt" },
      ],
    },
    {
      type: "p",
      text: "تیم اجرایی و راهبرانی که پنج روز رویداد رو هماهنگ کردن:",
    },
    {
      type: "people",
      tone: "teal",
      items: [
        { initials: "اا", name: "امیرحسین امیریان", role: "دبیر اجرایی", badge: "دبیر" },
        { initials: "عپ", name: "عماد پورحسنی", role: "سرپرست اجرایی", badge: "سرپرست" },
        { initials: "پب", name: "پارسا بمان‌زاده", role: "تیم اجرایی" },
        { initials: "عع", name: "علیرضا عزیزپور", role: "تسهیلگر رویداد" },
      ],
      accentItems: [],
    },
    {
      type: "h2",
      id: "s-judges",
      words: [
        { text: "داورها", rotate: "1deg", color: "text-ink" },
        { text: "نهایی", rotate: "-1.5deg", color: "text-magenta" },
      ],
    },
    {
      type: "p",
      text: "معیارهای داوری شامل اعتبار راه‌حل، مدل اعتبارسنجی بازار، کیفیت دموی ساخته‌شده و کار تیمی بود؛ ارائه‌ها توسط این داوران ارزیابی شد:",
    },
    {
      type: "people",
      tone: "magenta",
      items: [
        { initials: "مح", name: "محمدحسن حکاک", role: "داور" },
        { initials: "حآ", name: "حامد آرون", role: "داور" },
        { initials: "عع", name: "علیرضا عزیزپور", role: "داور" },
      ],
      accentItems: [],
    },
    {
      type: "h2",
      id: "s-best",
      words: [
        { text: "تیم", rotate: "1deg", color: "text-ink" },
        { text: "برتر", rotate: "-1.5deg", color: "text-navy-alt" },
      ],
    },
    {
      type: "teams",
      columns: 1,
      items: [
        {
          medal: "۱",
          rank: "تیم اول رویداد",
          team: "تیم برتر",
          project: "پلتفرم ابری اتوماسیون وظایف تیمی",
          members: "۵ عضو تیم",
          tone: "gold",
        },
      ],
    },
    {
      type: "h2",
      id: "s-merit",
      words: [
        { text: "تیم‌های", rotate: "1deg", color: "text-ink" },
        { text: "شایسته", rotate: "-1.5deg", color: "text-navy-alt" },
        { text: "تقدیر", rotate: "1deg", color: "text-ink" },
      ],
    },
    {
      type: "teams",
      columns: 2,
      items: [
        {
          medal: "۲",
          rank: "تیم دوم",
          team: "شایسته تقدیر",
          project: "سیستم مدیریت وظایف هوشمند برای فریلنسرها",
          members: "۴ عضو تیم",
          tone: "silver",
        },
        {
          medal: "۳",
          rank: "تیم سوم",
          team: "شایسته تقدیر",
          project: "ابزار آنالیز عملکرد کد برای توسعه‌دهندگان",
          members: "۴ عضو تیم",
          tone: "bronze",
        },
      ],
    },
    {
      type: "h2",
      id: "s-story",
      words: [
        { text: "رویداد", rotate: "1deg", color: "text-ink" },
        { text: "چطور", rotate: "-1deg", color: "text-ink" },
        { text: "گذشت", rotate: "1.5deg", color: "text-navy-alt" },
      ],
    },
    {
      type: "p",
      text: "در طول این پنج روز، کارگاه‌های متمرکز مدل کسب‌وکار، تحلیل رقبا و مهارت‌های ارائه برگزار شد تا دانش‌آموزان علاوه بر مهارت فنی، دید جامع استارتاپی پیدا کنند.",
    },
    {
      type: "pullquote",
      accent: true,
      text: "توی این رویداد، بچه‌ها فقط یه محصول نساختن؛ یاد گرفتن چطور یه تیم واقعی بسازن و پای ایده‌شون بایستن. این چیزی نیست که توی کلاس بشه یاد گرفت.",
      attr: "امیرحسین امیریان — دبیر اجرایی",
    },
    {
      type: "h2",
      id: "s-timeline",
      words: [
        { text: "ددلاین", rotate: "1deg", color: "text-ink" },
        { text: "رویداد", rotate: "-1.5deg", color: "text-navy-alt" },
      ],
    },
    {
      type: "p",
      text: "پنج روز رویداد طبق این زمان‌بندی پیش رفت:",
    },
    {
      type: "timeline",
      items: [
        { date: "۵ مهر ۱۴۰۵", title: "شروع رویداد و تشکیل تیم‌ها", desc: "معرفی مسئله‌ها و شکل‌گیری تیم‌ها؛ شروع شناسایی عمیق مسئله." },
        { date: "۶ مهر ۱۴۰۵", title: "مصاحبه با کاربر و اعتبارسنجی", desc: "هر تیم با کاربران واقعی صحبت کرد تا نیاز واقعی رو پیدا کنه." },
        { date: "۷ مهر ۱۴۰۵", title: "ساخت MVP", desc: "شروع ساخت نمونه اولیه بر اساس بازخوردهای واقعی کاربران." },
        { date: "۸ مهر ۱۴۰۵", title: "منتورشیپ و اصلاح مسیر", desc: "کارگاه‌های مدل کسب‌وکار، تحلیل رقبا و مهارت‌های ارائه." },
        { date: "۹ مهر ۱۴۰۵", title: "اختتامیه در سالن ارم مشهد", desc: "ارائه‌ی نهایی تیم‌ها مقابل داوران و معرفی برگزیدگان." },
      ],
    },
  ],
  tags: [
    { text: "#استارتاپ_ویکند", tone: "default" },
    { text: "#استارتاپ‌ویکند_۳۱", tone: "navy" },
    { text: "#هنرستان_پسرانه", tone: "navy" },
    { text: "#کارآفرینی_نوجوانان", tone: "default" },
  ],
};

export const eventRokap4 = {
  slug: "rokap-4",
  tone: "teal",
  postMeta: {
    title: "رکاپ ۴: جمع‌بندی یک سال یادگیری",
    titleWords: [
      { text: "رکاپ", color: "text-ink", rotate: "-1deg" },
      { text: "۴:", color: "text-magenta", rotate: "1.5deg" },
      { text: "جمع‌بندی", color: "text-ink", rotate: "-1deg" },
      { text: "یک", color: "text-teal", rotate: "1.5deg" },
      { text: "سال", color: "text-ink", rotate: "-1.5deg" },
      { text: "یادگیری", color: "text-ink", rotate: "1deg" },
    ],
    eyebrow: "گزارش رویداد · هر دو هنرستان",
    subtitle:
      "چهارمین دوره <strong>رکاپ</strong>، رویداد جمع‌بندی پایان سال هنرستان‌های دخترانه و پسرانه رکاد بود. جایی که بچه‌ها همه چیزی که کل سال یاد گرفته بودن رو توی یه پروژه واقعی به کار گرفتن.",
    meta: [
      { icon: "clock", text: "زمان مطالعه:", strong: "۵ دقیقه" },
      { icon: "calendar", text: "تاریخ برگزاری:", strong: "۶ — ۱۰ تیر ۱۴۰۵" },
      { icon: "user", text: "نویسنده:", strong: "تیم محتوای رکاد" },
    ],
    sticker: "رویداد پایان سال",
    coverLabel: "تصویر کاور",
    coverCaption: "تصویر پانورامای اختتامیه در کارخانه نوآوری",
    breadcrumb: ["خانه", "ایونت‌ها", "رکاپ ۴"],
  },
  toc: [
    { id: "s-about", num: "۰۱", label: "درباره‌ی رویداد" },
    { id: "s-mentors", num: "۰۲", label: "منتورها" },
    { id: "s-staff", num: "۰۳", label: "عوامل اجرایی" },
    { id: "s-judges", num: "۰۴", label: "داورها" },
    { id: "s-best", num: "۰۵", label: "تیم برتر" },
    { id: "s-merit", num: "۰۶", label: "تیم‌های شایسته تقدیر" },
    { id: "s-story", num: "۰۷", label: "رویداد چطور گذشت" },
    { id: "s-timeline", num: "۰۸", label: "ددلاین رویداد" },
  ],
  blocks: [
    {
      type: "h2",
      id: "s-about",
      words: [
        { text: "درباره‌ی", rotate: "1deg", color: "text-ink" },
        { text: "رکاپ", rotate: "-1deg", color: "text-ink" },
        { text: "۴", rotate: "1.5deg", color: "text-teal" },
      ],
    },
    {
      type: "p",
      text: "چهارمین دوره <strong>رکاپ</strong>، رویداد جمع‌بندی پایان سال هنرستان‌های دخترانه و پسرانه رکاد بود. اینجا اما یه چیز فرق داشت: بچه‌ها قرار بود همه چیزی که کل سال یاد گرفته بودن رو توی یه پروژه واقعی به کار بگیرن.",
    },
    {
      type: "p",
      text: "خروجی نهایی فقط بخشی از ارزیابی بود — مسیر و فرآیند یادگیری به همان اندازه وزن داشت. نحوه همکاری اعضا، استفاده از بازخوردها و مدیریت چالش‌ها در کنار کیفیت محصول نهایی، ملاک اصلی داوری بود.",
    },
    {
      type: "infobox",
      tone: "teal",
      label: "مشخصات رویداد",
      items: [
        ["تاریخ:", "۶ تا ۱۰ تیر ۱۴۰۵"],
        ["مدت رویداد:", "پنج روز"],
        ["شعبه:", "هنرستان دخترانه و پسرانه"],
        ["محل اختتامیه:", "کارخانه نوآوری مشهد"],
      ],
    },
    {
      type: "h2",
      id: "s-mentors",
      words: [
        { text: "منتورها", rotate: "1deg", color: "text-ink" },
        { text: "و", rotate: "-1deg", color: "text-ink" },
        { text: "راهبران", rotate: "1.5deg", color: "text-teal" },
      ],
    },
    {
      type: "p",
      text: "راهبران آموزشی و اجرایی که مسیر پروژه‌های پایان سال رو هدایت کردن:",
    },
    {
      type: "people",
      tone: "teal",
      items: [
        { initials: "اا", name: "امیرحسین امیریان", role: "راهبر آموزشی", badge: "راهبر" },
        { initials: "عپ", name: "عماد پورحسنی", role: "راهبر اجرایی", badge: "راهبر" },
      ],
      accentItems: [],
    },
    {
      type: "h2",
      id: "s-staff",
      words: [
        { text: "عوامل", rotate: "1deg", color: "text-ink" },
        { text: "اجرایی", rotate: "-1.5deg", color: "text-navy-alt" },
      ],
    },
    {
      type: "p",
      text: "تیم اجرایی و تسهیلگر رویداد جمع‌بندی سالانه:",
    },
    {
      type: "people",
      tone: "navy",
      items: [
        { initials: "عع", name: "علیرضا عزیزپور", role: "تسهیلگر رویداد" },
        { initials: "می", name: "مصطفی یعقوبی", role: "تیم اجرایی" },
        { initials: "مج", name: "محمد جمعه‌پور", role: "تیم اجرایی" },
        { initials: "مح", name: "مهران حیدری", role: "تیم اجرایی" },
      ],
      accentItems: [],
    },
    {
      type: "h2",
      id: "s-judges",
      words: [
        { text: "داورها", rotate: "1deg", color: "text-ink" },
        { text: "نهایی", rotate: "-1.5deg", color: "text-magenta" },
      ],
    },
    {
      type: "p",
      text: "ارائه‌های اختتامیه در کارخانه نوآوری مشهد توسط این داوران ارزیابی شد:",
    },
    {
      type: "people",
      tone: "magenta",
      items: [
        { initials: "مح", name: "محمدحسن حکاک", role: "داور" },
        { initials: "حآ", name: "حامد آرون", role: "داور" },
        { initials: "عع", name: "علیرضا عزیزپور", role: "داور" },
      ],
      accentItems: [],
    },
    {
      type: "h2",
      id: "s-best",
      words: [
        { text: "تیم", rotate: "1deg", color: "text-ink" },
        { text: "برتر", rotate: "-1.5deg", color: "text-magenta" },
        { text: "سال", rotate: "1deg", color: "text-ink" },
      ],
    },
    {
      type: "teams",
      columns: 1,
      items: [
        {
          medal: "۱",
          rank: "تیم برتر سال",
          team: "تیم برتر",
          project: "پلتفرم جامع اتصال پروژه‌های هنرستانی به بازار",
          members: "۵ عضو تیم",
          tone: "gold",
        },
      ],
    },
    {
      type: "h2",
      id: "s-merit",
      words: [
        { text: "تیم‌های", rotate: "1deg", color: "text-ink" },
        { text: "شایسته", rotate: "-1.5deg", color: "text-teal" },
        { text: "تقدیر", rotate: "1deg", color: "text-ink" },
      ],
    },
    {
      type: "teams",
      columns: 2,
      items: [
        {
          medal: "۲",
          rank: "تیم دوم",
          team: "شایسته تقدیر",
          project: "سیستم مدیریت منابع یادگیری دانش‌آموزی",
          members: "۴ عضو تیم",
          tone: "silver",
        },
        {
          medal: "۳",
          rank: "تیم سوم",
          team: "شایسته تقدیر",
          project: "سامانه پایش پیشرفت پروژه‌های کلاسی",
          members: "۴ عضو تیم",
          tone: "bronze",
        },
      ],
    },
    {
      type: "h2",
      id: "s-story",
      words: [
        { text: "رویداد", rotate: "1deg", color: "text-ink" },
        { text: "چطور", rotate: "-1deg", color: "text-ink" },
        { text: "گذشت", rotate: "1.5deg", color: "text-teal" },
      ],
    },
    {
      type: "p",
      text: "دو گروه دخترانه و پسرانه دور هم جمع شدن و نتیجه چند روز تلاش رو مقابل داورا ارائه کردن. ارائه مشترک بچه‌های هنرستان دخترانه و پسرانه در کارخانه نوآوری مشهد، نشان داد که فضای اکوسیستم واقعی چقدر روی انگیزه و کیفیت یادگیری تأثیر مثبت دارد.",
    },
    {
      type: "pullquote",
      accent: false,
      text: "خروجی نهایی فقط بخشی از ارزیابی بود؛ مسیری که بچه‌ها برای رسیدن به نتیجه طی کردن، رشد کار تیمی و تبدیل ایده به واقعیت ارزشمندترین دستاورد رکاپ بود.",
      attr: "علیرضا عزیزپور — تسهیلگر رویداد",
    },
    {
      type: "h2",
      id: "s-timeline",
      words: [
        { text: "ددلاین", rotate: "1deg", color: "text-ink" },
        { text: "رویداد", rotate: "-1.5deg", color: "text-navy-alt" },
      ],
    },
    {
      type: "p",
      text: "پنج روز رویداد طبق این زمان‌بندی پیش رفت:",
    },
    {
      type: "timeline",
      items: [
        { date: "۶ تیر ۱۴۰۵", title: "شروع رویداد دختران", desc: "دانش‌آموزان دخترانه‌ی رکاد کار روی ایده‌های مشخص‌شده رو شروع کردن. اولین قدم: بررسی دقیق‌تر مسئله و شکل‌دهی به راه‌حل پیشنهادی." },
        { date: "۷ تیر ۱۴۰۵", title: "شروع رویداد پسران", desc: "هنرستان پسرانه هم وارد میدون شد. تقسیم وظایف تیمی، شروع مرحله ساخت و اولین بازخوردها از منتورها." },
        { date: "۸ تیر ۱۴۰۵", title: "مرحله ساخت و اصلاح", desc: "تیم‌ها با کمک منتورها ایده‌هاشون رو دقیق‌تر بررسی کردن، بازخورد گرفتن و مسیرشون رو اصلاح کردن. برای خیلی از تیم‌ها این روز، روز pivot بود." },
        { date: "۹ تیر ۱۴۰۵", title: "آماده‌سازی نهایی", desc: "یه روز کامل روی ساخت نمونه‌ی نهایی و آماده‌سازی ارائه. تمرین ارائه با تیم اجرایی و رفع اشکالات آخر لحظه." },
        { date: "۱۰ تیر ۱۴۰۵", title: "اختتامیه در کارخانه نوآوری مشهد", desc: "دو گروه دخترانه و پسرانه دور هم جمع شدن و نتیجه چند روز تلاش رو مقابل داورا ارائه کردن. مراسم تجلیل تیم‌های برتر و شایسته تقدیر." },
      ],
    },
  ],
  tags: [
    { text: "#رکاپ_۴", tone: "orange" },
    { text: "#جمع‌بندی_سال", tone: "default" },
    { text: "#هنرستان_استارتاپی", tone: "magenta" },
    { text: "#کارآفرینی_نوجوانان", tone: "default" },
  ],
};

// فهرست رویدادها برای generateStaticParams و ناوبری
export const allEvents = [
  { slug: event30.slug, event: event30 },
  { slug: event31.slug, event: event31 },
  { slug: eventRokap4.slug, event: eventRokap4 },
];

// ═══════════════ کامپوننت‌های مشترک هر صفحه ═══════════════

export const author = {
  initials: "تک",
  label: "نوشته‌شده توسط",
  name: "تیم محتوای رکاد",
  bio: "تیمی از دانش‌آموزا و مدرسا که رویدادها رو از نزدیک زندگی کردن و تجربه‌شون رو مستقیم اینجا می‌نویسن.",
};

export const finalCta = {
  words: ["برای", "ساختن", "آینده", "همین", "امروز", "اقدام", "کن"],
  desc: "مصاحبه‌ی رایگان و تعیین سطح برای همه‌ی متقاضی‌ها. کافیه فرم رو پر کنی، بقیه‌ش با ماست.",
};

// لینک‌های سریع سایدبار — «مطالب مرتبط»
export function getRelatedQuick(currentSlug) {
  const labels = {
    "startup-weekend-30": [
      { icon: "calendar", label: "استارتاپ‌ویکند ۳۱: پنج روز فشرده برای پسرها", href: "/events/startup-weekend-31" },
      { icon: "target", label: "رکاپ ۴: جمع‌بندی یک سال یادگیری", href: "/events/rokap-4" },
    ],
    "startup-weekend-31": [
      { icon: "calendar", label: "استارتاپ‌ویکند ۳۰: سه روز برای واقعی‌کردن ایده‌ها", href: "/events/startup-weekend-30" },
      { icon: "target", label: "رکاپ ۴: جمع‌بندی یک سال یادگیری", href: "/events/rokap-4" },
    ],
    "rokap-4": [
      { icon: "calendar", label: "استارتاپ‌ویکند ۳۰: سه روز برای واقعی‌کردن ایده‌ها", href: "/events/startup-weekend-30" },
      { icon: "target", label: "استارتاپ‌ویکند ۳۱: پنج روز فشرده برای پسرها", href: "/events/startup-weekend-31" },
    ],
  };
  return labels[currentSlug] || labels["rokap-4"];
}
