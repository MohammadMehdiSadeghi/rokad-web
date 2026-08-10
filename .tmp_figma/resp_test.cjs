// تست جامع ریسپانسیو — بررسی سرریز، تراز، اندازه‌ها در همه عرض‌ها
const puppeteer = require("puppeteer-core");

const WIDTHS = [320, 360, 375, 390, 412, 480, 640, 768, 1024, 1280, 1440, 1920];

(async () => {
  const browser = await puppeteer.launch({
    executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
    headless: "new",
    args: ["--no-sandbox"],
  });
  const page = await browser.newPage();
  const results = [];

  for (const w of WIDTHS) {
    await page.setViewport({ width: w, height: 900 });
    await page.goto("http://localhost:5173/", { waitUntil: "networkidle2" });
    await new Promise((r) => setTimeout(r, 800));

    const r = await page.evaluate(() => {
      const out = { width: innerWidth };
      // 1. سرریز افقی
      out.scrollW = document.documentElement.scrollWidth;
      out.overflow = document.documentElement.scrollWidth > document.documentElement.clientWidth;

      // 2. سکشن‌ها: id/برچسب + ارتفاع
      const sections = [...document.querySelectorAll("section")].map((s, i) => ({
        i,
        h: Math.round(s.getBoundingClientRect().height),
        first: (s.querySelector("h1,h2,h3")?.textContent || s.className || "").trim().slice(0, 20),
        bg: getComputedStyle(s).backgroundColor,
      }));
      out.sections = sections;

      // 3. المان‌هایی که از viewport بیرون زده‌اند (x<0 یا x+w>innerWidth)
      const offenders = [];
      document.querySelectorAll("section *").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.width === 0 || r.height === 0) return;
        if (r.right > innerWidth + 1 || r.left < -1) {
          offenders.push({
            tag: el.tagName,
            cls: (el.className || "").toString().slice(0, 60),
            left: Math.round(r.left),
            right: Math.round(r.right),
            w: Math.round(r.width),
          });
        }
      });
      out.offenders = offenders.slice(0, 12);
      out.offenderCount = offenders.length;
      return out;
    });
    results.push(r);
  }

  for (const r of results) {
    console.log(`\n=== ${r.width}px | scrollW=${r.scrollW} | overflow=${r.overflow ? "❌ YES" : "✅ no"} | offenders=${r.offenderCount} ===`);
    if (r.offenderCount > 0) {
      r.offenders.forEach((o) =>
        console.log(`   OFF: <${o.tag}> "${o.cls}" L=${o.left} R=${o.right} W=${o.w}`)
      );
    }
    r.sections.forEach((s) => console.log(`   sec${s.i} h=${s.h} bg=${s.bg} "${s.first}"`));
  }
  await browser.close();
})().catch((e) => {
  console.error("ERR", e.message);
  process.exit(1);
});