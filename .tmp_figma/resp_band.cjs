const puppeteer = require("puppeteer-core");
const WIDTHS = [760, 768, 800, 850, 900, 920, 921, 940, 980, 1024];
(async () => {
  const browser = await puppeteer.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: "new", args: ["--no-sandbox"] });
  const page = await browser.newPage();
  for (const w of WIDTHS) {
    await page.setViewport({ width: w, height: 900 });
    await page.goto("http://localhost:5173/", { waitUntil: "networkidle2" });
    await new Promise(r => setTimeout(r, 500));
    const r = await page.evaluate((vw) => {
      const sw = document.documentElement.scrollWidth;
      const offenders = [];
      document.querySelectorAll("body *").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.width === 0 || r.height === 0) return;
        let p = el.parentElement, clipped = false;
        while (p && p !== document.body) { const ov = getComputedStyle(p).overflowX; if (ov === "hidden" || ov === "clip") { clipped = true; break; } p = p.parentElement; }
        if ((r.right > vw + 2 || r.left < -2) && !clipped) {
          offenders.push(`<${el.tagName}> ${(el.className||"").toString().slice(0,40)} L=${Math.round(r.left)} R=${Math.round(r.right)}`);
        }
      });
      return { sw, off: offenders.slice(0, 6), n: offenders.length };
    }, w);
    console.log(`${w}px: scrollW=${r.sw} ${r.sw > w ? "❌" : "✅"} offenders=${r.n}${r.off.length ? " " + r.off.join(" | ") : ""}`);
  }
  await browser.close();
})().catch(e => { console.error("ERR", e.message); process.exit(1); });
