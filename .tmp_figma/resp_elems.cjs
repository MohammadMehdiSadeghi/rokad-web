// تست نهایی المان‌ها: تصاویر، دکمه‌های ریز، متن‌های خارج از کانتینر (ساده، بدون await داخل evaluate)
const puppeteer = require("puppeteer-core");

const WIDTHS = [320, 412, 640, 768, 1024];

(async () => {
  const browser = await puppeteer.launch({
    executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
    headless: "new",
    args: ["--no-sandbox"],
  });
  const page = await browser.newPage();
  page.setDefaultTimeout(15000);

  for (const w of WIDTHS) {
    await page.setViewport({ width: w, height: 900 });
    await page.goto("http://localhost:5173/", { waitUntil: "networkidle2" });
    await new Promise((r) => setTimeout(r, 700));

    const out = await page.evaluate((vw) => {
      const res = { broken: [], tiny: [], txtOff: [], imgCount: 0 };
      res.imgCount = document.querySelectorAll("img").length;
      // تصاویر با naturalWidth=0 (خراب یا لود نشده)
      document.querySelectorAll("img").forEach((img) => {
        if (img.complete && img.naturalWidth === 0) res.broken.push(img.src.split("/").pop());
      });
      // دکمه‌های خیلی ریز
      document.querySelectorAll("a,button").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.width > 0 && r.height > 0 && r.width < 28) {
          res.tiny.push(`<${el.tagName}> ${(el.textContent || "").trim().slice(0, 15)} w=${Math.round(r.width)}`);
        }
      });
      // متن خارج از viewport (بدون والد clip)
      document.querySelectorAll("h1,h2,h3,h4,p,a,span,button,li").forEach((el) => {
        const cs = getComputedStyle(el);
        if (cs.display === "none" || cs.visibility === "hidden") return;
        const r = el.getBoundingClientRect();
        if (r.width === 0 || r.height === 0) return;
        let p = el.parentElement, clipped = false;
        while (p && p !== document.body) {
          const ov = getComputedStyle(p).overflowX;
          if (ov === "hidden" || ov === "clip") { clipped = true; break; }
          p = p.parentElement;
        }
        if (!clipped && (r.left < -2 || r.right > vw + 2) && el.textContent.trim().length > 2) {
          res.txtOff.push(`<${el.tagName}> "${el.textContent.trim().slice(0, 25)}" L=${Math.round(r.left)} R=${Math.round(r.right)}`);
        }
      });
      return res;
    }, w);

    const bi = out.broken || [];
    const tb = out.tiny || [];
    const tx = out.txtOff || [];
    console.log(`\n=== ${w}px === images=${out.imgCount} broken=${bi.length ? bi.join(",") : "none"} tinyBtns=${tb.length ? tb.join(" | ") : "none"} txtOff=${tx.length}`);
    tx.slice(0, 10).forEach((t) => console.log(`  TXT: ${t}`));
  }
  await browser.close();
})().catch((e) => {
  console.error("ERR", e.message);
  process.exit(1);
});