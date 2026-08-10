// تست دقیق — فقط offenderهای واقعی (خارج از overflow-hidden یا بدون والد clip)
const puppeteer = require("puppeteer-core");

const WIDTHS = [320, 360, 375, 390, 412, 480, 640, 768, 1024, 1280, 1440, 1920];

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
    await new Promise((r) => setTimeout(r, 600));

    const r = await page.evaluate((vw) => {
      const out = { width: vw };
      out.scrollW = document.documentElement.scrollWidth;
      out.overflow = document.documentElement.scrollWidth > document.documentElement.clientWidth;

      // آیا المان واقعاً دیده میشود؟ (هیچ جد clip ندارد)
      const isClipped = (el) => {
        let p = el.parentElement;
        while (p && p !== document.body) {
          const ov = getComputedStyle(p).overflowX;
          if (ov === "hidden" || ov === "clip") return true;
          p = p.parentElement;
        }
        return false;
      };

      const offenders = [];
      document.querySelectorAll("body *").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.width === 0 || r.height === 0) return;
        if ((r.right > vw + 2 || r.left < -2) && !isClipped(el)) {
          offenders.push({
            tag: el.tagName,
            cls: (el.className || "").toString().slice(0, 55),
            left: Math.round(r.left),
            right: Math.round(r.right),
            w: Math.round(r.width),
          });
        }
      });
      out.offenders = offenders.slice(0, 15);
      out.offenderCount = offenders.length;

      // ارتفاع کل صفحه
      out.pageH = document.documentElement.scrollHeight;
      return out;
    }, w);
    console.log(`\n=== ${w}px | scrollW=${r.scrollW} overflow=${r.overflow ? "❌" : "✅"} realOffenders=${r.offenderCount} pageH=${r.pageH} ===`);
    r.offenders.forEach((o) => console.log(`   OFF: <${o.tag}> "${o.cls}" L=${o.left} R=${o.right} W=${o.w}`));
  }
  await browser.close();
})().catch((e) => {
  console.error("ERR", e.message);
  process.exit(1);
});