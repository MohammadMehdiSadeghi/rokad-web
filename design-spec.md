# رکاد (Rokad) Landing Page — Complete Design Specification
### Reverse-engineered from Figma frame "Wireframe - 6" (node 1:142, file `GHYw0Z5cj2jZtGV7jnaAsi`)

> Purpose of this document: a pixel-level reference so the page can be rebuilt in code without reopening Figma. No redesign, no simplification — every value below is read directly from the Figma node tree and generated code, not estimated from the screenshot alone (with the exception of a handful of decorative micro-shapes noted explicitly as "illustration asset — export, don't hand-code").

---

## 0. Canvas Fundamentals

| Property | Value |
|---|---|
| Frame name | "Wireframe - 6" |
| Total canvas size | **1440 × 4229 px** (desktop reference frame) |
| Direction | **RTL** (Persian/Farsi, `dir="auto"` on every text node) |
| Page background | very light near-white (the sections alternate `#ffffff`/`#f2faf9`/`#f6f6fb`-family tints — see per-section backgrounds below) |
| Primary font family | **IRANSansX** (a Persian/Latin geometric sans). Numeral-specific cut **IRANSansXFaNum** used for Persian-style digits inside stat counters. Two off-brand utility styles (`IrisUPC:Bold`) appear only as fallback wrappers around IRANSansX spans — treat IRANSansX as the single source of truth. |
| Corner-radius language | Two families: soft-round **8–15px** for buttons/pills/chips, and a distinctive **large asymmetric "cut corner" card** — top-left + bottom-right rounded (`rounded-tl-*` + `rounded-br-*`), other two corners square. This asymmetric radius is the single most repeated signature shape on the page (stat cards, feature cards, pillar cards). |
| Grid | 1200px content column, centered in 1440px canvas → **120px fixed side margins** at desktop. No visible column grid inside sections; layout is composed of freely-positioned/rotated groups rather than a strict 12-col grid. |
| Vertical rhythm | Sections are simple full-width `<section>` bands stacked with generous internal padding (~80–120px top before first heading). No visible section-divider lines; separation comes purely from background-color changes. |

---

## 1. Global Design Language

**Layout philosophy:** Marketing/landing page for an Iranian "startup high-school" (هنرستان) brand. Content is centered in a fixed 1200px column inside a 1440px canvas. Sections are full-bleed color blocks (white → mint → white → light-lavender → white → navy) that segment the page into distinct visual "chapters," each chapter built from one big illustrated hero graphic + supporting copy + CTA.

**Design principles observed:**
- **Playful irregularity over grid precision** — nearly every card, heading word, and button is independently rotated between -3° and +3°/ +5.8°, giving a hand-cut/paper-collage, sticker-like energy appropriate for a youth-oriented ed-tech brand.
- **Word-by-word heading composition** — large headlines are NOT single text blocks; each word (sometimes each character/particle) is its own absolutely-positioned, independently rotated text node. This is a deliberate "scrapbook lettering" technique, not an artifact.
- **Color-coded audience segmentation** — pink/magenta (#e0195b family) = girls' school track, navy/indigo (#202a5a family) = boys' school track, teal (#58bdaf family) = brand/shared/primary CTA color, orange (#f4971f) = tertiary stat accent.
- **Illustrated humans, not stock photography** — flat-vector, semi-detailed character illustrations (student with backpack/laptop, hijab-wearing student, seated mentor figure) built from dozens of overlapping vector shapes exported as pre-rendered art, not literal shapes to redraw.
- **Sticker/badge UI motif** — small pill-shaped "chips" with two overlapping translucent-white dots (a bespoke bullet/decoration, not a checkmark icon) appear inside every feature card.

**Color psychology:** Teal (#58bdaf) = trust/calm/growth (used for primary CTA + brand underline). Navy (#202a5a/#21295a) = authority/institution (nav, headings, boys-track). Pink/magenta (#e0195b) = energy/individuality (girls-track). Orange (#f4971f) = highlight/urgency (secondary stat card). White/mint neutrals carry everything else so the accent colors read clearly.

**Shape language:** Rounded rectangles everywhere; no sharp right-angle cards except the cut-corner motif described above. Illustration style: flat-color vector with light shading via overlapping color-fill shapes (no strokes, no gradients on illustrations; gradients/soft color only used as background "blob" wash shapes behind hero art).

**Z-index / layering system (front→back within a section):**
1. Foreground text + buttons
2. Card/pill backgrounds (white or brand color, 2px border in the section's accent hue)
3. Character illustrations (mascot compositions)
4. Decorative background "blob" vector clusters (large soft abstract shapes, often at 8–10% opacity) — purely atmospheric, sit behind everything, frequently bleed off-canvas (negative x/y or > frame width).

---

## 2. Color Palette (extracted hex values)

| Token | Hex | Usage |
|---|---|---|
| `brand-navy` | `#21295a` / `#202a5a` (two near-identical navy values used interchangeably — treat as one token) | Header nav text, primary heading text, boys-track brand color, dark card fills |
| `brand-teal` | `#58bdaf` / `#59bbaf` | Primary CTA button fill, primary underline/accent, stat-card #1 border |
| `brand-teal-dark` | `#347e75` / `#2e7068` | Text-on-mint stat numbers/labels (darker teal for AA contrast on light-mint card bg) |
| `brand-teal-tint` | `#4bb5a8` | "رکاد" wordmark accent inside section headings |
| `brand-magenta` | `#e0195b` / `#ce1754` (darker variant for small-text-on-white) | Girls-track brand color, stat-card #2 border/fill |
| `brand-orange` | `#f4971f` / `#f9a21d` / `#f4961e` | Stat-card #3 (network/branches) accent |
| `ink` | `#292827` | Default dark body/heading text on white sections |
| `bg-mint` | `#f2faf9` | Header pill bg, teal stat-card bg, hero-section light wash |
| `bg-blush` | `#fefafb` | Magenta stat-card bg |
| `bg-lavender` | `#f4f5fb` | Navy stat-card bg |
| `bg-neutral` | `#f6f6f6` | Orange stat-card bg |
| `white` | `#ffffff` | Card fills, button fills, section base |
| `overlay-white-15/17/58/69` | `rgba(255,255,255,0.15 / 0.17 / 0.58 / 0.69)` | Chip pill fills on dark cards, translucent bullet dots, badge borders |
| `overlay-grey-22` | `rgba(180,180,180,0.22)` | "First startup school in Iran" ribbon fill (semi-transparent grey over hero art) |

**Border system:** Cards use a **2px solid border in the card's own accent hue** (e.g., mint card → 2px `#58bdaf` border; blush card → 2px `#e0195b`; lavender card → 2px `#21295a`; neutral card → 2px `#f9a21d`), *plus* a solid-fill duplicate of the same shape offset ~4px down/right underneath it in a saturated version of the same hue — i.e. every stat card is actually **two stacked rectangles** (a solid color "shadow" card behind, a bordered light card in front), which is what produces the hand-drawn drop-shadow look instead of a CSS box-shadow.

---

## 3. Typography

**Font family:** `IRANSansX` (weights used: `DemiBold`, `Bold`, `ExtraBold`, `Black`, `ExtraBlack`) for all Persian UI/heading text. `IRANSansXFaNum` (`ExtraBlack`, `Medium`) specifically for numerals inside stat counters and the "مشهد | فرامرز عباسی ۳۳" meta line. All text `dir="auto"`, right-aligned by default (RTL).

| Role | Font weight | Size (px) | Line-height | Color | Notes |
|---|---|---|---|---|---|
| Hero H1 ("آینده از اینجا آغاز میشود") | ExtraBlack | **59.4px** | ~100.8px (very loose, scrapbook spacing) | white | Each word independently rotated 2–4°, sits on the dark hero illustration panel |
| Section H2 ("رکاد در یک نگاه، با اعتماد" / "دخترونه یا پسرونه...") | ExtraBlack | **53.2px** | ~19–61px (varies per word-fragment) | ink `#292827`, with 1 accent word in brand color | Word-by-word rotation ±1.5–3° |
| Card / stat big number ("+250", "76%", "2") | ExtraBlack (FaNum cut) | **70.5px** | 36.4px | matches card accent color | Centered |
| Card eyebrow label pill ("نرخ اشتغال" etc.) | Bold | **15.8px** | 48px (oversized lh, visually just centers it) | matches card accent | Inside a white pill, 0.76px border |
| Card supporting 2-line caption | Line 1: ExtraBlack 14px-ish scaled / Line 2: DemiBold | ~13.1px base (scaled up to ~24px effective) | 23.6px | matches accent | Two `<p>` stacked, first bold-heavier than second |
| Body / intro paragraph ("هر دو شعبه با محیطی امن...") | DemiBold | **17.5px** | 30px | `#202a5a` | Centered, max-width ~494px |
| Primary button label | ExtraBold | **20.4px** (hero) / 15px (nav) | normal | white or navy depending on button | |
| Nav links | DemiBold | **15px** | 20px | `#21295a` | |
| Nav CTA pill ("پیش‌ثبت‌نام") | Black | **15px** | 20px | white on navy chip, rotated -3° | |
| School-card H3 ("هنرستان‌پسرانه‌رکاد") | Black | **43px** | 131px (oversized/loose) | white | -1° rotation |
| School-card meta line ("مشهد | فرامرز عباسی ۳۳") | Medium (FaNum) | **15.5px** | 1.64 line-height | white/80% opacity | -1° rotation |
| Feature chip text inside dark cards | DemiBold | **14.3px** | 54px (oversized lh) | white | |
| Small category badge ("مدرسه‌پسرانه") | Bold | **15.8px** | 48px | white, translucent bg | |

**Type scale summary (px):** 15 / 15.8 / 17.5 / 20.4 / 43 / 53.2 / 59.4 / 70.5 — an unusually large, "poster-like" jump-scale typical of playful youth marketing sites rather than a strict 1.25/1.333 modular scale.

---

## 4. Section-by-Section Breakdown

### 4.1 Header / Navbar — Frame `1:171` (1200×112, y=32, i.e. sits inside a 170px-tall top zone)

- **Purpose:** Primary navigation + two competing CTAs (soft "login/register" text-link, and a bold "pre-register" pill) — its job is simply wayfinding + funnel entry, not conversion itself.
- **Layout:** Single flex row, 1200px wide, `rounded-[22px]`, background `#f2faf9`. Logo sits far right (RTL leading edge) at `x:1058`, nav links + CTA cluster left of it.
- **Contents left→right (visual, i.e. RTL reading order right→left):**
  - Logo mark (two-part SVG group, "رکاد / ROKAD" per the screenshot) — 71×55px.
  - Nav links (DemiBold 15px, `#21295a`, right-aligned per item): مدارس · افتخارات · مشاوره هدایت تحصیلی و شغلی · درباره ما · درخواست همکاری.
  - "پیش‌ثبت‌نام" pill — bg `#21295a`, white Black 15px text, `rounded-[3px]`, padding `11px/7px`, rotated **-3°**.
  - Far left: "ورود / ثبت نام" pill — bg `#58bdaf`, white ExtraBold 15px, `rounded-[8px]`, padding `24px/9.4px` (this is the widest/tallest pill on the bar, i.e. it's the visually dominant nav CTA even though it reads as a secondary action).
- **Background:** flat `#f2faf9`, no border, no shadow, fully rounded rectangle (22px) — the whole navbar reads as one big soft "pill container" floating over the page background rather than a full-bleed bar.
- **Responsive assumption:** collapses to hamburger + logo + single CTA under ~1024px; the 5 text links would not survive a tablet breakpoint without wrapping.

### 4.2 Hero — Frame `1:199` (1440×578, y=170→748)

- **Purpose:** Primary above-the-fold conversion moment — brand promise headline, dual CTA, "first startup school in Iran" trust ribbon, and the anchor illustration (a seated founder/mentor figure holding a folder, in a red blazer).
- **Layout:** Full-width section; inside it, a 1200×510px rounded "hero card" (`x:120,y:36`) holds a large decorative dark background image with the illustrated figure masked into its left ~40%, and the headline+CTAs+ribbon composed over the right ~60%.
- **Headline** ("آینده از اینجا آغاز می‌شود!"): 6 independent word/particle nodes ("آینـده" / "از" / "اینجا" / "آغاز" — note: screenshot shows "شروع" but Figma text layer literally contains "آغاز"/"میشه" fragments — **flag this discrepancy explicitly, see §12 Pixel-Perfect Notes**), ExtraBlack 59.4px white, each independently rotated 2–4°.
- **CTA row** (`1:265`, y≈327, rotated container):
  - Primary: "ثبت‌نام و رزرو مصاحبه" — navy `#21295a` fill, white ExtraBold 20.4px, `rounded-[10px]`, padding `24/17px`, rotated **-1.5°**.
  - Secondary: "درخواست مشاوره" — white fill, navy text, same size/radius, rotated **+1.5°** (mirrored rotation from primary — deliberate "sticker pair" effect).
- **Trust ribbon** (`1:270`): two-layer construction — a solid teal outline shape (`border-5 #59bbaf`) sits slightly offset behind a second shape with `bg:rgba(180,180,180,0.22)` + `border-5 #58bdaf`, both `rounded-tl/tr-[15px]` only (flat bottom) — reads visually as a torn "ticket stub" ribbon. Inside it: 4 words ("اولین" / "مدرسه" / "استارتاپی" / "ایران!"), ExtraBlack 32px, color `#347e75`, each rotated independently (-6° to +3.7°) — this is the "!اولین مدرسه استارتاپی ایران" ribbon seen in the screenshot.
- **Mascot illustration** (`1:203`→`1:256`): a masked, ~500×781px composite of 8 named vector groups (`* دست عقب` back-arm, `* پا عقب` back-leg, `* پا جلو` front-leg, `* کله` head, `* پوشه` folder, `* دست جلو` front-arm, plus two unlabeled `* XXX` torso/jacket groups) — **this is a pre-built illustration asset; export the underlying image rather than hand-drawing these vectors.** Comments in Persian layer names literally describe body parts, confirming it's a rigged/parts-based character illustration.
- **Background:** faint duplicated teal-brand wordmark watermark at 8% opacity, rotated -11.3°, bleeding off the card edges bottom-right — pure texture, no functional role.

### 4.3 Stats bar — Frame `1:703` + `1:753` (1440×510, y=774→1284)

- **Purpose:** Social-proof / trust metrics — "رکاد در یک نگاه، با اعتماد" ("Rokad at a glance, with trust").
- **Layout:** Heading row, then **4 stat cards** in a single horizontal row (not a strict CSS grid — each card is independently rotated and positioned, but they read as evenly spaced ~277px-wide columns with ~28px gutters).
- **Heading:** "رکاد در یک نگاه،" ExtraBlack 53.2px `#292827` + " با اعتماد" same size/weight in `#58bdaf`, rotated -2°.
- **Card anatomy (identical structure ×4, only color + copy differ) — this is the primary reusable "StatCard" component:**
  1. Solid-color "shadow" rect, `264×210px`, `rounded-br/tl-[13.4px]`, rotated same as front card, positioned ~4px down-right.
  2. Light-tint front rect, same size/radius, `border-2` in accent color, `overflow-clip`.
  3. Inside: a low-opacity (8–10%) decorative blob illustration bleeding out the top.
  4. A small white pill "eyebrow" badge, `border-0.76px` in accent color, Bold 15.8px accent-colored text, centered near top (`top:15px`).
  5. Big number, ExtraBlack/FaNum 70.5px, accent color, centered.
  6. Two-line caption below, ExtraBlack (line 1, heavier) + DemiBold (line 2), accent color, centered, ~13px scaled.
  - **Card 1 — "شبکه رکاد" (Network):** orange `#f4971f`/`#f9a21d`, bg `#f6f6f6`, value **"2"**, caption "شعبه‌ی مجزای هنرستانی با فضای اختصاصی برای هر جنسیت". Rotated +2.5°.
  - **Card 2 — "جامعه فعال" (Active community):** navy `#202a5a`/`#21295a`, bg `#f4f5fb`, value **"+250"**, caption "دانش‌آموز فعال در دو شعبه دخترانه و پسرانه". Rotated -2°.
  - **Card 3 — "رویداد استارتاپی" (Startup events):** magenta `#e0195b`/`#ce1754`, bg `#fefafb`, value **"+30"**, caption "رویداد استارتاپی دانش‌آموزی در سال اول پس از فارغ‌التحصیلی". Rotated +2.5°.
  - **Card 4 — "نرخ اشتغال" (Employment rate):** teal `#58bdaf`/`#347e75`, bg `#f2faf9`, value **"%76"**, caption "دانش‌آموختگان شاغل و درآمدزا در سال اول پس از فارغ‌التحصیلی". Rotated -2°.
- **Ordering in screenshot (left→right):** شبکه رکاد (2) · جامعه فعال (+250) · رویداد استارتاپی (+30) · نرخ اشتغال (76%) — matches RTL visual order in the reference image exactly.

### 4.4 "Girls' or Boys' track" dual-school section — Frame `1:286` (1440×800, y=1290→2090)

- **Purpose:** The core product/offer split — route the visitor to one of two gender-specific "هنرستان" (vocational high-school) programs. This is the highest-visual-weight section on the page after the hero.
- **Heading:** "مسیرته پسرونه یا دخترونه، رکاد" composed of 6 independent color-coded word nodes: "مسیرته" ink, "پسرونه" navy `#202a5a`, "یا" ink, "دخترونه" magenta `#e0195b`, "،" ink, "رکاد" teal `#4bb5a8` — every word rotated ±3°. (Reading order in the rendered screenshot is right-to-left: "دخترونه یا پسرونه، رکاد مسیرته.")
- **Subhead:** "هر دو شعبه با محیطی امن، منتورهای مجرب و اکوسیستم اختصاصی. فقط کافیه مسیر خودت رو انتخاب کنی." — DemiBold 17.5px, `#202a5a`, centered, max-width 494px.
- **Two school cards, side-by-side, each ~589×450px container holding a ~581×440px rounded-[41px] card, rotated ±1°:**
  - **Boys' card ("هنرستان‌پسرانه‌رکاد"):** fill `#202a5a` (navy). Contents: category badge "مدرسه‌پسرانه" (translucent white pill, white 0.76px border), H3 "هنرستان‌پسرانه‌رکاد" Black 43px white -1°, meta line "مشهد | فرامرز عباسی ۳۳", 2 feature chips ("تولید و توسعه پایگاه اینترنتی", "تولید محتوای چندرسانه‌ای") each with the two-dot bullet decoration, white "پیش‌ثبت‌نام پسرانه" pill button (navy text) rotated +1.5°. Character illustration: young man with backpack + laptop (built from a large multi-part vector composite, same "export as asset" note as §4.2).
  - **Girls' card ("هنرستان‌دخترانه‌رکاد"):** fill `#e0195b` (magenta). Identical structural anatomy: badge "مدرسه‌دخترانه", H3 white Black 43px, meta "مشهد | فرامرز عباسی 54", 2 feature chips ("شبکه و نرم‌افزار", "متن تستی رشته دخترانه"), white "پیش‌ثبت‌نام دخترانه" pill (magenta text). Character illustration: hijab-wearing student with laptop (multi-part vector composite of ~150 named color-fill sub-shapes — clearly a hand-illustrated asset, **must be exported/re-used as a rendered image, not redrawn from primitives**).
  - **Both cards share one component definition** — same radius, same badge/chip/button positions, only fill color + copy + illustration swap. This is the strongest "build this as one parameterized React component" signal on the page.
- **Screenshot cross-check:** in the rendered PNG the pink/girls card is on the LEFT and navy/boys card is on the RIGHT — confirming RTL layout order (girls card `x:116`, boys card `x:738` in the Figma tree, i.e. boys card sits at a higher x = further left-to-right pixel position = renders on the right in an RTL/mirrored reading, matching the screenshot).

### 4.5 "Why Rokad isn't a normal school" — Frame `1:769` (1440×688, y=2119→2807)

- **Purpose:** Differentiation/positioning section — pure brand storytelling, no data, no direct CTA card grid; instead a big illustrated metaphor (fork twirling spaghetti, with the tagline "رکاد یعنی متفاوت بودن..." — "Rokad means being different...") communicates "we don't force everyone through the same noodle-bowl curriculum."
- **Heading:** "چرا رکاد یه مدرسه معمولی نیست؟" — again word-by-word: "چرا" / "رکاد" / "یه" / "مدرسه" / "معمولی" / "نیست" / "؟", ExtraBlack, sizes 54–62px, each independently placed/rotated — reads as a big two-line wrapped heading in the render.
- **Body copy:** "ما هنرستان رو با اکوسیستم استارتاپی و بازار کار واقعی ترکیب کردیم. اینجا فقط کتاب نمی‌خونی؛ روی چالش‌های واقعی کار می‌کنی، با منتورهای متخصص همراهی می‌شی و توی محیطی امن، جرأتِ شکست خوردن و دوباره پاشدن رو یاد می‌گیری." — single paragraph, 584px column.
- **4 small colored "value pills" ** (not full stat cards — simpler single-line rounded rectangles with drop-shadow duplicate underneath, matching the screenshot's 4 chips "هنرستان رسمی" / "بازار کار واقعی" / "اکوسیستم استاتاپی" / "رکاد یعنی متفاوت بودن…"): each is a small `Group-1000006387..393` pair (front + back-shadow rect) with centered single-line label.
- **"ادامه داستان رکاد" (Continue Rokad's story) link:** text + chevron/arrow icon, `1:775`, bottom-left of the illustration — a simple text link, not a filled button, positioned at (276,519) inside the section, this matches the green "ادامه داستان رکاد ↗" link visible at the bottom of the spaghetti illustration in the screenshot.
- **Hero visual:** a large image slot (`rounded-rectangle "image 140"`, 659×555px) positioned partially off-canvas right (`x:1440`) — this is almost certainly the **fork-twirling-spaghetti illustration** seen in the screenshot; in the Figma metadata it's a flat image placeholder rather than vector-decomposed, confirming it's a single exported illustration asset to be dropped in as-is.

### 4.6 "Why families trust us" — Frame `1:881` (1440×626, y=2839→3465)

- **Purpose:** 4-pillar trust/methodology grid — "هر دانش‌آموز یه مسیر شخصی داره..." (each student has a personal path). Pure text+icon cards, no illustration, the most "conventional SaaS marketing grid" section on the page.
- **Heading:** "چرا خانواده‌ها به ما اعتماد می‌کنن؟" — word-by-word again, sizes ~55–61px.
- **Subhead:** "هر دانش‌آموز یه مسیر شخصی داره. سیستم آموزشی ما براساس چهار ستون طراحی شده تا هرفرد بهترین نسخه از خودش بشه" — single centered paragraph, full 1195px width.
- **4 cards in a single row**, each ~281×188px, white/light bg, numbered:
  - **01 — مسیر رشد شخصی‌سازی‌شده** (Personalized growth path) — icon: `user`. "استعدادسنجی دقیق و طراحی نقشه‌ی راهی که فقط مال توئه؛ نه یه مسیر یکسان برای همه."
  - **02 — یادگیری مسئله‌محور** (Problem-based learning) — "به‌جای تئوری خشک، روی چالش‌های واقعی دنیای کسب و کار کار می‌کنی و تجربه‌ی زنده می‌گیری."
  - **03 — یادگیری مشارکتی** (Collaborative learning) — icon: `profile-2user`. "کار تیمی روی پروژه‌های واقعی. یاد می‌گیری چطور با دیگران بسازی، رهبری کنی و اعتماد بسازی."
  - **04 — آموزش پروژه‌محور** (Project-based education) — icon: `document-text`. "خروجی هر دوره یه نمونه‌کار واقعی می‌شه که توی رزومه‌ی حرفه‌ای‌ت می‌درخشه."
- **Card anatomy:** large 2-digit index number top-right (RTL leading edge) in an outline/thin numeral style; ~38×38px icon chip below it; bold title; 3-line body copy — this is a second reusable "PillarCard" component distinct from the StatCard.
- **Screenshot cross-check:** matches the bottom-most white row of 4 cards in the reference image exactly, same 4 titles/order.

### 4.7 "Complete ecosystem for growth" — Frame `1:814` (1440×732, y=3497→4229, page bottom)

- **Purpose:** Closing "ecosystem" proof section on a dark navy background — reinforces breadth (implies more programs/services exist beyond the two schools) and gives the page a strong dark full-bleed footer-like close.
- **Background:** solid dark navy, with large soft abstract "Vector" blob shapes (very large, several exceeding 1300–1800px width, mostly off-canvas) — same "atmospheric decoration" pattern as elsewhere, just scaled up for a full-bleed dark section.
- **Heading:** "یه رشد کامل برای اکوسیستم" word-fragments (reads as "اکوسیستم کامل برای رشد" / "A complete ecosystem for growth" in natural RTL order) — same word-by-word technique, white text on navy.
- **Subhead:** "از استعدادسنجی تا اولین شغلت، تمام گام‌های مسیر با پشتیبانی متخصصان طی می‌شه." (From aptitude testing to your first job, every step of the path is supported by specialists.)
- **8 cards in a 4×2 grid** (matches the screenshot's 2 rows of 4 dark cards), each ~280×178px, all sharing **identical placeholder copy** in the Figma file — "مسیر رشد شخصی‌سازی‌شده" title + "استعدادسنجی دقیق و طراحی نقشه‌ی راهی که فقط مال توئه؛ نه یه مسیر یکسان برای همه." body + `user` icon chip — this is clearly **unfinished/lorem-ipsum content reusing the §4.6 PillarCard component** at design time (8 duplicates of card "01" with no real distinct copy yet). **Flag for content team — see §12.**
- **One card in this row is visually distinct in the screenshot** (teal-highlighted card, 2nd from left in top row) — in the Figma tree this corresponds to `Group 1000006400` etc.; structurally identical to its siblings, only a fill-color override (teal vs. navy-on-navy) — confirms an "active/featured" card state variant exists for this component.
- **A separate teaser card** (`1:824`, y=-330 relative i.e. bottom of the visual stack in the true document, but tagged "04 — آموزش پروژه‌محور") sits slightly outside the main 8-card grid bounding box — likely a leftover/duplicate from the §4.6 component being copy-pasted into this section during design and not yet cleaned up.

---

## 5. Components Inventory (reusable)

| Component | Variants | Key props that change |
|---|---|---|
| **NavPill** | primary (navy fill), secondary (teal fill) | fill color, rotation, text |
| **HeroCTAButton** | filled-navy, outline/filled-white | fill, text color, rotation direction |
| **TrustRibbon** | single instance | — |
| **StatCard** | 4 color themes (orange/navy/magenta/teal) | accent hex (×4 derived tokens: bg tint, border, badge text, number, caption), value, label, caption, rotation sign |
| **SchoolCard** (large) | boys (navy) / girls (magenta) | fill, illustration, headline, meta line, 2 feature chips, CTA label |
| **FeatureChip** (two-dot bullet pill) | light-on-dark only observed | label text |
| **ValuePill** (small single-line, spaghetti section) | 4 instances, uniform style | label text |
| **PillarCard** (numbered, icon+title+body) | reused verbatim in §4.6 (4×) and §4.7 (8× as placeholder) | index number, icon, title, body, optional "featured" fill override |
| **BadgeChip** (translucent pill, e.g. "مدرسه‌پسرانه") | white-on-navy / white-on-magenta | border/text opacity only — same shape |

---

## 6. Buttons — Full Spec

| Button | Fill | Text color | Font | Size | Padding | Radius | Rotation | Border |
|---|---|---|---|---|---|---|---|---|
| Nav "ورود / ثبت نام" | `#58bdaf` | white | ExtraBold 15px | auto×41.7px | 24px / 9.4px | 8px | 0° | none |
| Nav "پیش‌ثبت‌نام" | `#21295a` | white | Black 15px | auto×39px | 11px / 7px | 3px | -3° | none |
| Hero primary "ثبت‌نام و رزرو مصاحبه" | `#21295a` | white | ExtraBold 20.4px | 229×64.6px | 24/17px | 10px | -1.5° | none |
| Hero secondary "درخواست مشاوره" | white | `#21295a` | ExtraBold 20.4px | 197×64.6px | 24/17px | 10px | +1.5° | none |
| School-card CTA (boys) "پیش‌ثبت‌نام پسرانه" | white | `#21295a` | ExtraBold 16px | auto | 15/13.4px | 7.9px | +1.5° | none |
| School-card CTA (girls) "پیش‌ثبت‌نام دخترانه" | white | `#e0195b` | ExtraBold 16px | auto | 15/13.4px | 7.9px | +1.5° | none |
| Story link "ادامه داستان رکاد" | transparent | teal/green | text-link + arrow icon | small | none | n/a | 0° | none |

All buttons: no visible hover/pressed/disabled/focus states are defined in the static Figma frame (this is a wireframe/marketing comp, not an interactive prototype) — **recommend standard web conventions** when implementing: darken fill 8–10% on hover, scale 0.98 on press, focus-visible ring in the button's accent color offset 2px.

---

## 7. Cards — Full Spec (StatCard example, representative of the pattern)

- **Two-layer construction:** back rect = solid accent color, `264×210px`, `rounded-br-13.4px rounded-tl-13.4px`; front rect = light tint bg, same size/radius, `2px solid` accent border, offset ~4px up-left from the back rect, `overflow-clip`.
- **Internal padding:** content starts ~15px from card top, badge pill ~11/8px internal padding, big number vertically centered around 107px from card top, caption starts ~147px from card top.
- **Illustration placement:** a low-opacity (8–10%) abstract blob bleeds from one corner (varies per card) behind the text stack — purely textural, never obscures text.
- **Rotation:** cards alternate rotation sign left-to-right (+2.5°, -2°, +2.5°, -2°) — creates a "scattered stickers on a table" rhythm rather than a clean grid.
- **Gap between cards:** ~28–35px based on x-deltas between card groups (each card container ~277px wide, next card starts ~308–318px later).

School-cards (§4.4) use the same two-layer shadow technique but at a much larger scale (rounded-[41px], single accent fill, no separate light-tint front layer — the whole card IS the accent color, with white text/UI directly on it).

---

## 8. Illustrations

- **Style:** flat vector, semi-flat shading via layered color fills (no outlines/strokes, no linear gradients on characters — gradients only appear in the abstract background "blob" wash shapes).
- **Construction:** each character is a *named, parts-based composite* (Persian layer names like `* دست عقب` = back arm, `* پا جلو` = front leg, `* کله` = head, `* پوشه` = folder) — evidence of a rigged illustration kit (possibly built for easy re-posing), not a flat traced photo.
- **Color per character:** hero mentor figure — red blazer, white shirt, navy trousers, tan skin-tone fills, dark hair. Boys-track student — teal top, yellow backpack. Girls-track student — teal/pink hijab, dark top, laptop.
- **Perspective:** all characters are front-facing or 3/4 view, seated or standing, flat 2D "paper cutout" staging — no perspective/vanishing point, no cast shadows on the ground (only the card-level offset-rect "shadow" described in §7).
- **Recommendation for rebuild:** **export every character/illustration group as a single flattened SVG or PNG asset** via the Figma asset URLs already returned by `get_design_context` (each is namespaced e.g. `imgXxx`, `imgGroup1000006051`, etc.) — do NOT attempt to hand-author the dozens of nested color-fill `<vector>` shapes as literal SVG paths; they are true illustration art, and the assets expire ~7 days after export so download-and-commit the bytes immediately.

---

## 9. Icons

- **Library style:** simple, single-weight, geometric line icons (only 3 named instances found in the tree: `user`, `profile-2user`, `document-text` — consistent with the **Iconsax / HugeIcons "linear"** icon family naming convention, though the actual glyph geometry wasn't decomposed in this pass — re-run `get_design_context` on nodes `1:831`, `1:845`, `1:899` etc. individually if exact stroke width is needed).
- **Container:** every icon sits inside a square chip, ~38×38px, its own contrasting-color rounded background, icon inset by ~7px on each side (i.e. icon glyph itself renders at ~24.7×24.7px).
- **Color:** icons render white/light on dark card backgrounds (PillarCard, dark ecosystem cards).
- **Consistency:** identical chip treatment across §4.6 and §4.7 — one `IconChip` component.

---

## 10. Decorative Elements

- **Background "Vector blob" clusters** (`Group 1000006356/377/404/405`, `Group` inside §4.7) — 5–6 abstract soft-edged shapes per cluster, sized 100–1800px, frequently positioned with negative x/y or beyond the 1440px frame width (i.e. designed to bleed off-canvas so only a partial silhouette shows) — purely atmospheric texture behind hero/dark sections, never load-bearing for content.
- **Two-dot translucent bullet** — the bespoke "checkmark substitute" seen in every FeatureChip: a `rgba(white,0.58)` outer dot with a smaller `rgba(white,0.69)` dot offset up-left inside it. Not a icon-font glyph — two flat circles.
- **Torn-ribbon shape** (hero trust badge) — two offset rounded-top-only rectangles, described in §4.2.
- **Numeral watermark rotations** — every big number/heading uses independent rotation as its only "decoration"; there are no drop-shadows, outlines, or 3D bevels anywhere in the type system.

---

## 11. Design Tokens (proposed extraction for implementation)

```css
:root {
  /* Color */
  --rokad-navy: #21295a;
  --rokad-navy-alt: #202a5a;
  --rokad-teal: #58bdaf;
  --rokad-teal-alt: #59bbaf;
  --rokad-teal-text: #347e75;
  --rokad-teal-text-alt: #2e7068;
  --rokad-teal-wordmark: #4bb5a8;
  --rokad-magenta: #e0195b;
  --rokad-magenta-text: #ce1754;
  --rokad-orange: #f4971f;
  --rokad-orange-alt: #f9a21d;
  --rokad-ink: #292827;
  --rokad-bg-mint: #f2faf9;
  --rokad-bg-blush: #fefafb;
  --rokad-bg-lavender: #f4f5fb;
  --rokad-bg-neutral: #f6f6f6;

  /* Radius */
  --radius-pill-sm: 3px;
  --radius-pill-md: 8px;
  --radius-pill-lg: 10px;
  --radius-badge: 7.6px;
  --radius-chip: 8.3px;
  --radius-card-sm: 13.4px;   /* cut-corner stat cards */
  --radius-card-lg: 41px;     /* school hero cards */
  --radius-navbar: 22px;

  /* Type scale (px) */
  --fs-2xs: 13.1px;
  --fs-xs: 14.3px;
  --fs-sm: 15px;
  --fs-sm-alt: 15.8px;
  --fs-md: 16px;
  --fs-lg: 17.5px;
  --fs-xl: 20.4px;
  --fs-2xl: 32px;
  --fs-3xl: 43px;
  --fs-4xl: 53.2px;
  --fs-5xl: 59.4px;
  --fs-6xl: 70.5px;

  /* Layout */
  --content-max-width: 1200px;
  --page-side-margin: 120px;
}
```

---

## 12. Responsive Behavior (predicted — no breakpoints exist in the source file)

- **Desktop (≥1440):** as specified above, 120px fixed side margins.
- **Laptop (1024–1439):** content column should switch from a fixed 1200px to `calc(100% - 80px)`; the word-by-word rotated headline technique becomes fragile — recommend collapsing multi-node headlines into single `<h1>`/`<h2>` elements with a single subtle rotation (or none) below ~1200px viewport to avoid overlap/reflow bugs.
- **Tablet (768–1023):** stat-card row (4 cards) and pillar-card row (4 cards) should wrap to 2×2 grids; dual-school section should stack the two 589px cards vertically full-width; nav collapses to hamburger.
- **Mobile (<768):** everything single-column; hero illustration should either crop to a smaller framed portrait or be hidden below the fold; the 8-card dark ecosystem grid becomes a 1-column stack or horizontal scroll-snap carousel; rotation values on cards/words should be reduced or removed entirely (rotated text at small viewport widths causes line-wrap collisions).

---

## 13. Accessibility Notes

- **Contrast:** most text passes AA (white-on-navy, white-on-magenta, dark-ink-on-white are all high contrast). Watch: `#59bbaf`/`#58bdaf` teal text on the `#f2faf9` mint card background is borderline — verify against WCAG AA 4.5:1 for the 13px caption size, may need to darken to `#2e7068` (which is in fact the value already used for the smaller caption text — larger numbers use the lighter teal, which is acceptable since large-scale decorative numerals are exempt from strict text-contrast rules).
- **Touch targets:** nav CTA pills are comfortably >40px tall; the small chip labels ("تولید و توسعه پایگاه اینترنتی" etc.) are NOT interactive (informational only), so no touch-target concern there.
- **Rotated text:** independently-rotated word fragments are a screen-reader and text-scaling hazard — implementation should render the semantic heading as one plain accessible string (e.g. `<h1>آینده از اینجا آغاز می‌شود!</h1>`) and apply the per-word rotation purely as a CSS/JS visual enhancement layer (e.g. wrapping each word in a `<span>` with `aria-hidden` siblings, or applying transform via a decorative overlay), never by literally splitting semantic content across unrelated DOM nodes.
- **RTL:** entire page must render with `dir="rtl"` at the document/root level, not just per-node `dir="auto"`, to guarantee correct scrollbar side, native form-control mirroring, etc.

---

## 14. UX / Conversion Flow Review

1. **Header** — low-commitment wayfinding + always-visible CTA safety net.
2. **Hero** — headline + emotional trust ribbon + dual CTA (book interview vs. request consultation) = captures both "ready now" and "still exploring" visitor intents immediately.
3. **Stats bar** — social proof immediately after the ask, before any further scrolling commitment — classic "reduce anxiety right after the CTA" placement.
4. **Dual-school section** — the actual product decision point; color-coding by track lets a visitor self-select in under a second.
5. **"Why not a normal school"** — objection-handling / differentiation, placed AFTER the offer is already understood (visitor now has the context to appreciate why it's different).
6. **4-pillar trust section** — methodology depth for the more analytical/parent-persona visitor who wants substance before enrolling a minor.
7. **Dark ecosystem closer** — final "there's more here than you think" breadth signal to close the page on an ambitious, aspirational note before (presumably) a footer with final CTA/contact (not present in this particular exported frame — the frame ends at y=4229 with the dark grid, implying a footer exists below this artboard, not included in the "Wireframe - 6" export).

---

## 15. Pixel-Perfect / Gotcha Notes for Implementation

1. **Headline text mismatch:** the Figma text-node layer names/content for the hero H1 literally spell out fragments "آینـده", "از", "اینجا", "آغاز", " شروع", "میشه", "!" — these don't concatenate cleanly into a single grammatical sentence when read in the node order given (possible leftover text-edit history in the Figma file, e.g. an earlier draft "از اینجا آغاز می‌شود" mid-edit into a newer "از اینجا شروع میشه"). **Before implementing, confirm the final copy directly against the live rendered screenshot** — the screenshot text reads "آینـده / از اینجا شروع میشه !" — treat the *screenshot* as the copy source of truth and the *Figma layer names* as the styling/positioning source of truth for this specific headline.
2. **Two near-duplicate navy hex values** (`#21295a` vs `#202a5a`) and two near-duplicate teal hex values (`#58bdaf` vs `#59bbaf`) exist in the source file — this is almost certainly design-file drift (copy-pasted elements from slightly different design iterations), not an intentional two-tone system. **Recommend consolidating to a single navy and single teal token** during implementation unless the visual QA specifically calls out a difference.
3. **8 identical placeholder cards** in §4.7 (all titled "مسیر رشد شخصی‌سازی‌شده" with identical body copy) — this is unfinished lorem-ipsum-style content in the source file, not final copy. Confirm real copy for each of the 8 ecosystem cards before shipping.
4. **Every rotation value is a "hand-placed" float** (e.g. `-11.32deg`, `1.83deg`, `-0.17deg`) rather than a clean design-token increment — when rebuilding, it's acceptable (and recommended) to **snap these to a small rotation scale** (e.g. -3°, -1.5°, 0°, +1.5°, +2.5°, +3°) for maintainability; the visual difference between a hand-placed `1.83deg` and a snapped `2deg` is imperceptible.
5. **Illustration character composites contain 50–150+ sub-vector shapes each** — this is normal for exported illustrator/Figma-native artwork and should always be flattened to a single image asset on export; attempting to reproduce them shape-by-shape in code is unnecessary and will not visually match without the original fill-layering order.
6. **Card "shadow" is a real duplicated shape, not a CSS box-shadow** — replicate exactly as a second DOM element/pseudo-element positioned behind, not `box-shadow`, if a hand-crafted look (visible hard edge + slight rotation mismatch between front/back layer) is required; a CSS box-shadow will look softer/more generic than the source.
7. **Asset URLs returned by Figma's MCP tool expire ~7 days after generation** — download and commit every illustration/icon asset byte immediately during implementation; do not leave `<img src="https://www.figma.com/api/mcp/asset/...">` references in shipped code.

---

*End of specification.*
