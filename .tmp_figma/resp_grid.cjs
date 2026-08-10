// بررسی چیدمان گریدها و کارت‌ها در عرض‌های کلیدی — ستون‌ها، فاصله‌ها، تراز
const puppeteer = require("puppeteer-core");

const WIDTHS = [320, 412, 640, 768, 1024, 1280];

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
      const out = { width: vw, sections: [] };
      const secs = [...document.querySelectorAll("section")];

      const cardInfo = (el) => {
        if (!el) return null;
        const r = el.getBoundingClientRect();
        const cs = getComputedStyle(el);
        return { w: Math.round(r.width), h: Math.round(r.height), x: Math.round(r.x), gap: Math.round(parseFloat(cs.columnGap) || 0) };
      };

      // آمار
      const statCards = [...secs[1]?.querySelectorAll("article, [class*='stat'], [class*='Stat'], div div")].filter((el) => {
        const r = el.getBoundingClientRect();
        return r.width > 100 && r.height > 40 && /stat|کارت|نمای/.test((el.className || "") + (el.textContent || "").slice(0, 40));
      });
      // مدارس (کارت‌های گرد سرمه‌ای/صورتی)
      const schoolCards = [...secs[2]?.querySelectorAll("article, div[class*='bg-navy'], div[class*='bg-magenta']")].filter((el) => el.getBoundingClientRect().width > 150);
      // پیلارها
      const pillarCards = [...secs[4]?.querySelectorAll("article")].filter((el) => el.getBoundingClientRect().width > 100);
      // اکوسیستم
      const ecoCards = [...secs[5]?.querySelectorAll("article, [class*='eco']")].filter((el) => el.getBoundingClientRect().width > 60);

      const rowsOf = (els) => {
        if (!els.length) return [];
        // گروه‌بندی بر اساس y
        const rows = [];
        els.forEach((el) => {
          const y = Math.round(el.getBoundingClientRect().y);
          const row = rows.find((r) => Math.abs(r.y - y) < 10);
          if (row) row.items.push(el.getBoundingClientRect());
          else rows.push({ y, items: [el.getBoundingClientRect()] });
        });
        return rows.map((r) => r.items.length);
      };

      out.statRows = rowsOf(statCards.slice(0, 8));
      out.schoolRows = rowsOf(schoolCards.slice(0, 4));
      out.pillarRows = rowsOf(pillarCards.slice(0, 4));
      out.ecoCount = ecoCards.length;
      out.ecoRows = rowsOf(ecoCards.slice(0, 8));

      // فوتر: برند و ستون‌ها کجا هستند
      const brand = document.querySelector(".rk-footer__brand");
      const cols = [...document.querySelectorAll(".rk-footer__col")];
      out.footer = {
        brandW: brand ? Math.round(brand.getBoundingClientRect().width) : 0,
        colWs: cols.map((c) => Math.round(c.getBoundingClientRect().width)),
        colUs: cols.map((c) => Math.round(c.getBoundingClientRect().right > vw ? 1 : 0)),
      };
      return out;
    }, w);
    console.log(`\n=== ${w}px ===`);
    console.log(`  stats rows=${JSON.stringify(r.statRows)}`);
    console.log(`  schools rows=${JSON.stringify(r.schoolRows)}`);
    console.log(`  pillars rows=${JSON.stringify(r.pillarRows)}`);
    console.log(`  eco count=${r.ecoCount} rows=${JSON.stringify(r.ecoRows)}`);
    console.log(`  footer brandW=${r.footer.brandW} cols=${JSON.stringify(r.footer.colWs)} outOfView=${JSON.stringify(r.footer.colUs)}`);
  }
  await browser.close();
})().catch((e) => {
  console.error("ERR", e.message);
  process.exit(1);
});