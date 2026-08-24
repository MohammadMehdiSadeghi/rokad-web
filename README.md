# رکاد (Rokad) Landing Page — React + Tailwind

Vite + React 18 + Tailwind CSS build of the Figma frame "Wireframe - 6",
based on the `DESIGN.md` reverse-engineering doc.

## Run it

```bash
npm install
npm run dev       # local dev server
npm run build     # production build → dist/
npm run preview   # preview the production build
```

Requires Node 18+.

## Structure

```
index.html                 Vite HTML entry (lang="fa" dir="rtl")
tailwind.config.js         Design tokens: colors, radii, type scale (see design-spec §2/§3/§11)
postcss.config.js
public/
  fonts/                   Real IRANSansX .ttf files (11 weights), served as-is
src/
  fonts.css                @font-face rules for every IRANSansX weight
  main.jsx                 React root
  index.css                Tailwind directives + explicit `direction: rtl`
  App.jsx                  Composes all sections in page order
  assets/images/           Real photos/illustrations from assets.zip (imported by components)
  components/
    Header.jsx             Navbar (logo, nav links, both CTA pills)
    Hero.jsx                Hero band + CTA row + floating trust-ribbon badge (rebuilt to match a teal reference screenshot)
    StatCard.jsx            Reusable stat-card (4 color themes)
    Stats.jsx               "رکاد در یک نگاه" stats bar (uses StatCard)
    SchoolCard.jsx          Reusable boys/girls school card
    DualSchool.jsx          "دخترونه یا پسرونه" section (uses SchoolCard)
    Story.jsx               "چرا رکاد یه مدرسه معمولی نیست؟" section
    icons.jsx               Placeholder line-icon set
    PillarCard.jsx          Reusable numbered/icon card (light/dark/featured)
    Pillars.jsx             "چرا خانواده‌ها به ما اعتماد می‌کنن" 4-card row
    Ecosystem.jsx           Dark closing 8-card grid (reuses PillarCard)
```

Every component that repeats in the source design (`StatCard`,
`SchoolCard`, `PillarCard`) is a real reusable component, driven by a
`theme`/`variant` prop — matching the "Components Inventory" table in
the design spec (§5).

## Assets (from assets.zip)

- **Fonts:** all 11 `IRANSansX-*.ttf` weights are in `public/fonts/`,
  wired up in `src/fonts.css` with one `@font-face` per weight
  (Thin 100 → ExtraBlack 950). `tailwind.config.js`'s `fontFamily.sans`
  now points at `IRANSansX` directly — the earlier Vazirmatn/Google
  Fonts placeholder is gone.
- **Images**, all imported as real ES module assets (not remote URLs):
  - `logo.png` → `Header.jsx`
  - `hero-illustration.png` → `Hero.jsx` (the seated mentor figure)
  - `boy-illustration.png` / `girl-illustration.png` → `SchoolCard.jsx`
    via `DualSchool.jsx`
  - `yarn-illustration.png` → `Story.jsx` (replaces the earlier
    placeholder fork/noodle SVG)
  - `doodle-shape.svg` → `StatCard.jsx`, as the low-opacity corner
    decoration described in design-spec §7
  - `avatar-1.png`…`avatar-5.png` → **not currently used**. They were
    briefly wired into a small avatar-stack component in the hero, but
    the hero was rebuilt to match a specific reference screenshot that
    doesn't include one, so that component was removed entirely. The
    5 PNGs are still sitting in `src/assets/images/` if you want to
    build something with them elsewhere.

## RTL

Set site-wide, not just per-element:
- `index.html`: `<html lang="fa" dir="rtl">`
- `src/index.css`: `direction: rtl` on `html`/`body` as a second,
  explicit layer under the `dir` attribute.

One thing worth knowing about **RTL + CSS Grid/Flexbox**: under
`dir="rtl"`, the *first* child in a row/grid renders at the **right**
edge, not the left. Several arrays in this codebase are ordered with
that in mind so the rendered result matches the source screenshot
exactly — each is commented at the point of ordering:
- `Header.jsx` — `navLinks` array, and the logo/badge/links/login-pill
  element order
- `Stats.jsx` — the `stats` array (رtl-rightmost first: نرخ اشتغال →
  … → شبکه رکاد)
- `DualSchool.jsx` — boys' card before girls' card in JSX, so boys
  renders on the right
- `Ecosystem.jsx` — the `cards` array, so the "featured" teal card
  lands 2nd-from-left in the top row

If you reorder any of these sections, re-check against the source
screenshot rather than assuming visual left-to-right JSX order — it's
reversed under RTL.

## Design tokens

All colors, border-radii, and the type scale live in `tailwind.config.js`
as named theme extensions (`bg-navy`, `rounded-card-lg`, `text-6xl2`,
etc.) rather than inline hex/px values, so the whole palette can be
retuned from one file. See design-spec §11 for what each token maps to.

## Hero redesign (matched to reference screenshot)

`Hero.jsx` was rebuilt to closely match a supplied reference image of
the real hero card, which differs from the earlier navy-gradient
version in a few ways worth knowing if you touch it again:
- **Background is teal** (`#63c4b6` → `#4bb5a7` gradient), not navy —
  with a subtle diamond/argyle pattern laid over it via a
  `repeating-linear-gradient` inline style (two 45°/-45° diagonal line
  sets), not a raster texture.
- **Buttons are full pills** (`rounded-full`), not the `rounded-pill-lg`
  (10px) used elsewhere on the page.
- **The trust ribbon** is a solid navy pill (`rounded-full`, `bg-navy`,
  `shadow-lg`) that floats over and overlaps the card's bottom edge
  (positioned `absolute` + `translate-y-1/2` as a sibling of the
  overflow-hidden card, so the card's rounded corners never clip it) —
  not the dashed/semi-transparent band or the "ticket stub" ribbon
  shape used in earlier drafts. Copy is
  `اولین هنرستان استارتاپی ایران...` (note: **"هنرستان"**, not "مدرسه",
  and an ellipsis, not "!" — taken directly from the reference image,
  which differs from the original Figma layer text).

## Remaining gaps vs. the original Figma file

- **Background "blob" decorations** beyond the one now added to
  `StatCard` (behind the hero, behind the dark ecosystem section, etc.
  — design-spec §10) are still not built in; `doodle-shape.svg` covers
  the stat-card corner accent specifically. Reuse the same asset
  elsewhere if you want more of that texture.
- **Icons** (`icons.jsx`): still placeholders standing in for the
  source file's icon-library instances (looks like Iconsax/HugeIcons
  "linear"). No icon assets were included in assets.zip. Swap in the
  real icon set if pixel-exact glyphs matter.
- **8 "ecosystem" cards** (`Ecosystem.jsx`): the source Figma file has
  all 8 sharing identical placeholder copy — reproduced as-is here.
  Replace `title`/`body` per card with real copy before shipping.
- **Hero headline copy:** the Figma layer text doesn't fully agree with
  the rendered screenshot (design-spec §15.1) — this build follows the
  screenshot. Double-check against final approved copy.
