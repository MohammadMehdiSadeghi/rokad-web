const puppeteer = require("puppeteer-core");
const WIDTHS = [320, 360, 412, 480, 640, 768, 820, 900, 1024, 1280];
(async () => {
  const browser = await puppeteer.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: "new", args: ["--no-sandbox"] });
  const page = await browser.newPage();
  const rows = [];
  for (const w of WIDTHS) {
    await page.setViewport({ width: w, height: 900 });
    await page.goto("http://localhost:5173/", { waitUntil: "networkidle2" });
    await new Promise(r => setTimeout(r, 500));
    const hs = await page.evaluate(() => [...document.querySelectorAll("section")].map(s => Math.round(s.getBoundingClientRect().height)));
    rows.push([w, ...hs]);
  }
  const labels = [...Array(rows[0].length - 1).keys()].map(i => "sec" + i);
  console.log("width | " + labels.join(" | "));
  for (const r of rows) console.log(r.join("   | "));
  await browser.close();
})().catch(e => { console.error("ERR", e.message); process.exit(1); });
