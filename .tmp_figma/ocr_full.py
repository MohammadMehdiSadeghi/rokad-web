import sys, os
from PIL import Image
import easyocr

reader = easyocr.Reader(["fa", "en"], gpu=False, verbose=False)

src = r"C:\Users\Mohammad\Documents\rokad-web\.tmp_figma\version_thumbs\v00_2026-08-10.png"
img = Image.open(src).convert("RGB")
# full canvas at 5x
tmp = src.replace(".png", "_full5.png")
img2 = img.resize((img.width * 5, img.height * 5), Image.LANCZOS)
img2.save(tmp)
res = reader.readtext(tmp, detail=1, paragraph=False)
res.sort(key=lambda r: (round(r[0][0][1] / 20), r[0][0][0]))
for b, t, c in res:
    x0 = b[0][0]; y0 = b[0][1]; x1 = b[2][0]; y1 = b[2][1]
    ox = x0 / 5; oy = y0 / 5
    print(f"  orig x={ox:6.1f} y={oy:6.1f} {x1-x0:5.0f}x{y1-y0:3.0f} c={c:.2f} | {t}")