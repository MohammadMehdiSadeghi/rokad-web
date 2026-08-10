const puppeteer = require("puppeteer-core");
const WIDTHS = [320, 412, 640, 768, 1024, 1280];
(async () => {
  const browser = await puppeteer.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: "new", args: ["--no-sandbox"] });
  const page = await browser.newPage();
  for (const w of WIDTHS) {
    await page.setViewport({ width: w, height: 900 });
    await page.goto("http://localhost:5173/", { waitUntil: "networkidle2" });
    await new Promise(r => setTimeout(r, 400));
    const h = await page.evaluate(() => {
      const header = document.querySelector("header");
      if (!header) return null;
      const r = header.getBoundingClientRect();
      const links = [...header.querySelectorAll("a")].map(a => ({ t: a.textContent.trim().slice(0,12), vis: getComputedStyle(a).display !== "none" }));
      const burger = [...header.querySelectorAll("button")].filter(b => getComputedStyle(b).display !== "none").map(b => b.textContent.trim().slice(0,12));
      return { h: Math.round(r.height), links: links.length, burger };
    });
    console.log(`${w}px:`, JSON.stringify(h));
  }
  await browser.close();
})().catch(e => { console.error("ERR", e.message); process.exit(1); });
