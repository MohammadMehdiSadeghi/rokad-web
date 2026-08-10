const puppeteer = require("puppeteer-core");
(async () => {
  const browser = await puppeteer.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: "new", args: ["--no-sandbox"] });
  const page = await browser.newPage();
  await page.setViewport({ width: 412, height: 900 });
  await page.goto("http://localhost:5173/", { waitUntil: "networkidle2" });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: ".tmp_figma/site_full.png", fullPage: true });
  const h = await page.evaluate(() => document.body.scrollHeight);
  console.log("fullPage height:", h);
  await browser.close();
})().catch(e => { console.error("ERR", e.message); process.exit(1); });
