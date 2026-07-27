# رکاد (Rokad) Landing Page — React + Tailwind

Vite + React 18 + Tailwind CSS build of the Figma frame "Wireframe - 6",
based on the `rokad-landing-page-design-spec.md` reverse-engineering doc
(from the companion plain-HTML build of this same page).

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
index.html                 Vite HTML entry (loads the Vazirmatn webfont)
tailwind.config.js         Design tokens: colors, radii, type scale (see design-spec §2/§3/§11)
postcss.config.js
src/
  main.jsx                 React root
  index.css                Tailwind directives + small shared utilities
  App.jsx                  Composes all sections in page order
  components/
    Header.jsx             Navbar
    Hero.jsx                Hero band + CTA row + trust ribbon
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
`SchoolCard`, `PillarCard`) is a real reusable component here, driven by
a `theme`/`variant` prop — matching the "Components Inventory" table in
the design spec (§5).

## Design tokens

All colors, border-radii, and the type scale live in `tailwind.config.js`
as named theme extensions (`bg-navy`, `rounded-card-lg`, `text-6xl2`,
etc.) rather than inline hex/px values, so the whole palette can be
retuned from one file. See design-spec §11 for what each token maps to.

## Known gaps vs. the original Figma file (carried over from the HTML build)

- **Font:** uses **Vazirmatn** (open-license) in place of the source
  file's commercial **IRANSansX**. Swap the `fontFamily.sans` array in
  `tailwind.config.js` once you have a licensed IRANSansX webfont kit.
- **Hero mentor illustration:** points at the real Figma-exported asset
  URL, which **expires ~7 days after export**. Download it into
  `public/` and update the `heroMentorSrc` constant in `Hero.jsx`.
- **Boys'/girls' school illustrations, background blobs, and the
  spaghetti/fork illustration:** each is 50–150+ layered vector shapes
  in the source file (real illustration art, not something to hand-code
  shape-by-shape). This build uses lightweight placeholder SVGs in
  their place — export the real artwork as flattened PNG/SVG per
  design-spec §8 and drop it into `public/`, then reference it from the
  relevant component.
- **Icons** (`icons.jsx`): placeholders standing in for the source
  file's icon-library instances (looks like Iconsax/HugeIcons "linear").
  Swap in the real icon set if pixel-exact glyphs matter.
- **8 "ecosystem" cards** (`Ecosystem.jsx`): the source Figma file has
  all 8 sharing identical placeholder copy — reproduced as-is here.
  Replace `title`/`body` per card with real copy before shipping.
- **Hero headline copy:** the Figma layer text doesn't fully agree with
  the rendered screenshot (design-spec §15.1) — this build follows the
  screenshot. Double-check against final approved copy.
