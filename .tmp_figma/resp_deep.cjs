// تست عمیق: همپوشانی متن‌ها، بریدگی، ابعاد کارت‌ها در عرض‌های کلیدی
const puppeteer = require("puppeteer-core");

const WIDTHS = [320, 360, 412, 480, 640, 768, 1024, 1280];

(async () => {
  const browser = await puppeteer.launch({
    executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
    headless: "new",
    args: ["--no-sandbox"],
  });
  const page = await browser.newPage();

  for (const w of WIDTHS) {
    await page.setViewport({ width: w, height: 900 });
    await page.goto("http://localhost:5173/", { waitUntil: "networkidle2" });
    await new Promise((r) => setTimeout(r, 700));

    const r = await page.evaluate((vw) => {
      const out = { width: vw };
      // متونی که از scrollWidth داخلی عنصر یا والد خارج شده‌اند
      const clipped = [];
      document.querySelectorAll("h1,h2,h3,h4,p,span,a,button,li").forEach((el) => {
        const cs = getComputedStyle(el);
        if (cs.display === "none" || cs.visibility === "hidden") return;
        const r = el.getBoundingClientRect();
        if (r.width === 0 || r.height === 0) return;
        // بریدگی واقعی: scrollWidth عنصر از clientWidth بیشتر و overflow روی clip/hidden در همان عنصر
        if (el.scrollWidth > el.clientWidth + 2 && (cs.overflowX === "hidden" || cs.overflowX === "clip" || cs.textOverflow === "ellipsis")) {
          clipped.push(`<${el.tagName}> "${el.textContent.trim().slice(0, 30)}" sw=${el.scrollWidth} cw=${el.clientWidth} ${(el.className||"").toString().slice(0,45)}`);
        }
      });
      out.clipped = clipped.slice(0, 10);
      out.clippedCount = clipped.length;

      // عناصر همپوشان در یک سکشن (کارت‌هایی که روی هم افتاده‌اند)
      const overlaps = [];
      const els = [...document.querySelectorAll("article, [class*='card'], [class*='Card']")].filter(el => el.getBoundingClientRect().width > 50);
      for (let i = 0; i < els.length; i++) {
        const a = els[i].getBoundingClientRect();
        for (let j = i + 1; j < els.length; j++) {
          const b = els[j].getBoundingClientRect();
          // همپوشانی واقعی (نه لایه سایه که همان موقعیت است)
          const ix = Math.max(0, Math.min(a.right, b.right) - Math.max(a.left, b.left));
          const iy = Math.max(0, Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top));
          const area = ix * iy;
          const minArea = Math.min(a.width * a.height, b.width * b.height);
          if (area > minArea * 0.12 && a.y !== b.y && Math.abs(a.y - b.y) > 5) {
            overlaps.push(`${(els[i].className||"").toString().slice(0,25)} ↔ ${(els[j].className||"").toString().slice(0,25)} area=${Math.round(area)}`);
          }
        }
      }
      out.overlaps = overlaps.slice(0, 8);
      out.overlapCount = overlaps.length;
      return out;
    }, w);
    console.log(`\n=== ${w}px | clippedText=${r.clippedCount} | overlaps=${r.overlapCount} ===`);
    r.clipped.forEach((c) => console.log(`  CLIP: ${c}`));
    r.overlaps.forEach((o) => console.log(`  OVER: ${o}`));
  }
  await browser.close();
})().catch((e) => {
  console.error("ERR", e.message);
  process.exit(1);
});