// بررسی تایپوگرافی: اندازه فونت‌ها در موبایل 412 مطابق فیگما و عدم شکستن/بریدن
const puppeteer = require("puppeteer-core");

(async () => {
  const browser = await puppeteer.launch({
    executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
    headless: "new",
    args: ["--no-sandbox"],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 412, height: 4557 });
  await page.goto("http://localhost:5173/", { waitUntil: "networkidle2" });
  await new Promise((r) => setTimeout(r, 800));

  const info = await page.evaluate(() => {
    const res = [];
    document.querySelectorAll("h1,h2,h3,h4,h5").forEach((el) => {
      const cs = getComputedStyle(el);
      const r = el.getBoundingClientRect();
      res.push({
        tag: el.tagName,
        txt: el.textContent.trim().slice(0, 35),
        size: cs.fontSize,
        weight: cs.fontWeight,
        lh: cs.lineHeight,
        w: Math.round(r.width),
        family: cs.fontFamily.split(",")[0],
      });
    });
    return res;
  });
  for (const h of info) {
    console.log(`${h.tag} ${h.size}px w${h.weight} lh=${h.lh} w=${h.w} | ${h.txt} | ${h.family}`);
  }
  await browser.close();
})().catch((e) => {
  console.error("ERR", e.message);
  process.exit(1);
});