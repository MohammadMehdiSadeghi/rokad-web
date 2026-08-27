# Rokad Design System

> مرجع نهایی توکن‌های بصری پروژه رُکاد. تمام کامپوننت‌ها و صفحات باید از این توکن‌ها پیروی کنند.

---

## ۱. اصول طراحی (Design Principles)

- **هویت برند:** هر بخش (پسر، دختر، کالج، کلوپ، اکوسیستم) یک تم رنگی مستقل دارد
- **گوشه‌های نامتقارن:** کارت‌ها و دکمه‌ها از الگوی `[corner-shape:squircle]` استفاده می‌کنند
- **چرخش ظریف:** المان‌ها با `rotate` جزئی (۱-۳ درجه) حس پویایی می‌دهند
- **سایه آفست:** سایه‌های سخت با آفست ۲.۷۵px امضای بصری برند هستند
- **RTL:** تمام رابط‌ها فارسی و راست‌به‌چپ هستند

---

## ۲. رنگ‌ها (Colors)

### ۲.۱ رنگ‌های اصلی برند

| توکن | مقدار | Tailwind Class |
|------|-------|---------------|
| Primary | `#59BBAF` | `primary` |
| Girl (Female) | `#E0195B` | `girl` / `magenta` |
| Third (College) | `#F8A41D` | `third` / `orange` |
| Sec (Male) | `#202A5A` | `sec` / `navy-alt` |

### ۲.۲ تم اکوسیستم (Ecosystem)

| سطح | مقدار | Tailwind |
|-----|-------|----------|
| Light | `#EEF8F7` | `ecosystem-light` |
| Normal | `#59BBAF` | `ecosystem-normal` / `primary` |
| Dark | `#438C83` | `ecosystem-dark` |
| Darker | `#1F413D` | `ecosystem-darker` |

### ۲.۳ تم پسر (Male)

| سطح | مقدار | Tailwind |
|-----|-------|----------|
| Light | `#E9EAEF` | `male-light` |
| Normal | `#202A5A` | `male-normal` / `navy-alt` |
| Dark | `#182044` | `male-dark` |
| Darker | `#0B0F1F` | `male-darker` |

### ۲.۴ تم دختر (Female)

| سطح | مقدار | Tailwind |
|-----|-------|----------|
| Light | `#FCE8EF` | `female-light` |
| Normal | `#E0195B` | `female-normal` / `magenta` |
| Dark | `#A81344` | `female-dark` |
| Darker | `#4E0920` | `female-darker` |

### ۲.۵ تم کالج (College)

| سطح | مقدار | Tailwind |
|-----|-------|----------|
| Light | `#FEF6E8` | `college-light` |
| Normal | `#F8A41D` | `college-normal` / `orange` |
| Dark | `#BA7B16` | `college-dark` |
| Darker | `#57390A` | `college-darker` |

### ۲.۶ تم کلوپ (Club)

| سطح | مقدار | Tailwind |
|-----|-------|----------|
| Light | `#F0EAF4` | `club-light` |
| Normal | `#652D90` | `club-normal` |
| Dark | `#4C226C` | `club-dark` |
| Darker | `#231032` | `club-darker` |

### ۲.۷ رنگ‌های خنثی (Text & Title)

| سطح | مقدار | Tailwind |
|-----|-------|----------|
| Light | `#EAEAE9` | `ink-light` |
| Normal | `#292827` | `ink` / `ink-normal` |
| Dark | `#1F1E1D` | `ink-dark` |
| Darker | `#0E0E0E` | `ink-darker` |

### ۲.۸ رنگ‌های پس‌زمینه

| نام | مقدار | Tailwind |
|-----|-------|----------|
| Mint | `#F2FAF9` | `bg-mint` |
| Blush | `#FEFAFB` | `bg-blush` |
| Lavender | `#F4F5FB` | `bg-lavender` |
| Neutral | `#F6F6F6` | `bg-neutral` |

### ۲.۹ رنگ‌های کمکی (Accents)

| نام | مقدار | Tailwind |
|-----|-------|----------|
| Green | `#009966` | `accent-green` |
| Red | `#C60036` | `accent-red` |
| Purple | `#8A38F5` | `accent-purple` |

---

## ۳. تایپوگرافی (Typography)

**فونت:** IRANSansX  
**وزن پیش‌فرض:** 400 (Regular)  
**وزن عناوین:** 800-950 (ExtraBold/Black)

| توکن | اندازه | ارتفاع خط | Tailwind |
|------|--------|-----------|----------|
| xs | 10px | 15px | `text-xs` |
| sm | 13px | 19.5px | `text-sm` |
| base | 16px | 24px | `text-base` |
| md | 20px | 30px | `text-md` |
| lg | 25px | 37.5px | `text-lg` |
| xl | 39px | 58.5px | `text-xl` |
| 2xl | 49px | 73.5px | `text-2xl` |
| 3xl | 61px | 91.5px | `text-3xl` |

**قانون:** برای تاکید از اندازه یا رنگ استفاده کنید، نه وزن فونت.

---

## ۴. فاصله‌گذاری (Spacing Scale)

مبتنی بر گام ۴px:

| توکن | مقدار | Tailwind |
|------|-------|----------|
| space-1 | 4px | `p-1` / `m-1` / `gap-1` |
| space-2 | 8px | `p-2` / `m-2` / `gap-2` |
| space-3 | 12px | `p-3` / `m-3` / `gap-3` |
| space-4 | 16px | `p-4` / `m-4` / `gap-4` |
| space-6 | 24px | `p-6` / `m-6` / `gap-6` |
| space-8 | 32px | `p-8` / `m-8` / `gap-8` |
| space-12 | 48px | `p-12` / `m-12` |
| space-16 | 64px | `p-16` / `m-16` |

**Spacing سکشن‌ها:**
| توکن | مقدار | Tailwind |
|------|-------|----------|
| section-sm | 3rem | `py-section-sm` |
| section | 4rem | `py-section` |
| section-lg | 6rem | `py-section-lg` |
| section-xl | 8rem | `py-section-xl` |

---

## ۵. شعاع گوشه (Border Radius)

| توکن | مقدار | Tailwind | کاربرد |
|------|-------|----------|--------|
| xs | 5px | `rounded-xs` | دکمه‌های کوچک / تگ |
| sm | 8px | `rounded-sm` | ورودی‌ها / کارت‌های کوچک |
| md | 12px | `rounded-md` | کارت‌های استاندارد |
| lg | 17px | `rounded-lg` | تصاویر / بج‌ها |
| xl | 24px | `rounded-xl` | عنوان‌ها / هدر |
| 2xl | 34px | `rounded-2xl` | کامپوننت‌های بزرگ |
| pill | 40px | `rounded-pill` | پیل / دایره کامل |

**الگوی نامتقارن (Squircle):**
```css
rounded-tl-[2rem] rounded-br-[2rem] rounded-tr-none rounded-bl-none [corner-shape:squircle]
```

---

## ۶. سایه‌ها (Shadows)

### ۶.۱ سایه سخت برند (Hard Shadow)

| توکن | مقدار | Tailwind |
|------|-------|----------|
| ecosystem | `2.75px 2.75px 0 #59BBAF` | `shadow-ecosystem` |
| male | `2.75px 2.75px 0 #202A5A` | `shadow-male` |
| female | `2.75px 2.75px 0 #E0195B` | `shadow-female` |
| college | `2.75px 2.75px 0 #F8A41D` | `shadow-college` |
| club | `2.75px 2.75px 0 #652D90` | `shadow-club` |
| neutral | `2.75px 2.75px 0 #292827` | `shadow-neutral` |

### ۶.۲ سایه نرم

| توکن | مقدار | Tailwind |
|------|-------|----------|
| soft | `0 1.25rem 3.75rem -1.25rem rgba(33,41,90,0.25)` | `shadow-soft` |

**قانون:** سایه سخت فقط برای المان‌های تاکیدی (دکمه اصلی، کارت ویژه) استفاده شود.

---

## ۷. حاشیه‌ها (Borders)

| توکن | ضخامت | رنگ |
|------|--------|-----|
| thin | 1px | `#EAEAE9` (ink-light) |
| mid | 1.5px | رنگ تم |
| bold | 3px | رنگ تم یا primary |

---

## ۸. کانتینر (Container)

| ویژگی | مقدار |
|-------|-------|
| حداکثر عرض | 1200px (`max-w-[75rem]`) |
| پدینگ موبایل | `px-4` |
| پدینگ تبلت | `px-6` |
| پدینگ دسکتاپ | `px-8` |

---

## ۹. کامپوننت‌ها

### ۹.۱ دکمه اصلی

```jsx
<button className="bg-navy text-white font-extrabold rounded-[12px] [corner-shape:squircle] px-6 py-3 -rotate-3 hover:rotate-0 hover:scale-105 transition-all">
  متن دکمه
</button>
```

### ۹.۲ کارت استاندارد

```jsx
<div className="bg-white border-2 border-ink rounded-[0_1.25rem_0_1.25rem] [corner-shape:squircle] p-6">
  {/* محتوا */}
</div>
```

### ۹.۳ بج / تگ

```jsx
<span className="bg-white border border-ink rounded-[0.5rem] px-3 py-1 text-sm font-bold">
  متن بج
</span>
```

### ۹.۴ ورودی (Input)

```jsx
<input className="w-full bg-white border-2 border-ink/20 rounded-pill-md px-4 py-3 font-semibold focus:border-teal focus:ring-4 focus:ring-teal/15 focus:outline-none" />
```

---

## ۱۰. قوانین استفاده (Usage Rules)

1. **همیشه از توکن استفاده کنید، نه از هگز سخت.**
2. **انتخاب تم بر اساس بخش:** اکوسیستم = عمومی، پسر/دختر = جنسیتی، کالج = دانشگاهی، کلوپ = انجمن.
3. **متن RTL** است؛ جهت را با `dir="rtl"` تنظیم کنید.
4. **سایه سخت** فقط برای المان‌های تاکیدی به کار رود.
5. **کنتراست متن:** `text-normal (#292827)` روی `bg-white` یا `bg-light (#EAEAE9)`.
6. **متن روی رنگ Normal:** از `text-white` استفاده کنید.

---

## ۱۱. Do / Don't

| ✅ Do | ❌ Don't |
|-------|---------|
| از `bg-primary` استفاده کن | از `bg-[#59BBAF]` استفاده کن |
| از `rounded-md` استفاده کن | از `rounded-[12px]` استفاده کن |
| از `text-ink` استفاده کن | از `text-[#292827]` استفاده کن |
| از `shadow-ecosystem` استفاده کن | از `shadow-[2.75px_2.75px_0_#59BBAF]` استفاده کن |
| از توکن‌های `ecosystem-*` استفاده کن | از رنگ‌های hard-code استفاده کن |

---

## ۱۲. منابع

- فایل مرجع: `Rokad-design-system.md`
- فایل تم: `tailwind.theme.json`
- تنظیمات Tailwind: `tailwind.config.js`
- CSS سراسری: `src/index.css`
