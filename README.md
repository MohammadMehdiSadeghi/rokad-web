# رکاد — Website

A pixel-close recreation of the Rekad ("رکاد") landing page, built with **React + Vite + Tailwind CSS**, in RTL Persian.

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`) in your browser.

To build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
rekad-website/
├── index.html                  # RTL HTML shell, Vazirmatn font import
├── src/
│   ├── main.jsx                # React entry point
│   ├── App.jsx                 # Composes all page sections
│   ├── index.css               # Tailwind base + global styles
│   ├── assets/
│   │   └── images/             # All provided design assets (logo, illustrations, avatars)
│   └── components/
│       ├── Navbar.jsx          # Top navigation (logo, links, CTA, mobile menu)
│       ├── Hero.jsx            # Teal hero banner with illustration + stats
│       ├── StatsSection.jsx    # "رکاد در یک نگاه" stat cards + trust line
│       ├── SchoolsSection.jsx  # Girls / boys school cards
│       ├── WhyDifferentSection.jsx  # "چرا رکاد..." + yarn illustration
│       ├── FamilyTrustSection.jsx   # 4 feature cards (light gray section)
│       ├── EcosystemSection.jsx     # Dark navy 8-card ecosystem grid
│       └── Footer.jsx          # Minimal footer
├── tailwind.config.js          # Color tokens (teal / navy / magenta / orange), font, patterns
└── postcss.config.js
```

## Design tokens

Colors were sampled directly from the provided screenshots and centralized in
`tailwind.config.js` under the `teal`, `navy`, `magenta`, `orange`, `ink`, and
`muted` keys, so any color adjustment only needs to happen in one place.

## Notes

- Font: [Vazirmatn](https://github.com/rastikerdar/vazirmatn) loaded via CDN in `index.html`, a modern variable Persian typeface well suited for UI.
- The diamond/rhombus overlay pattern on the teal and colored cards is an inline SVG data-URI background (`bg-diamond-pattern` in the Tailwind config), so no extra image request is needed for it.
- All images shared in the design package (`images.zip`) are used and mapped 1:1 to their sections — nothing was replaced with a stock placeholder.
- Layout is responsive: 2-column desktop layouts collapse to a single column on mobile/tablet, the nav collapses into a hamburger menu below the `lg` breakpoint, and card grids reflow from 4 → 2 → 1 columns.
