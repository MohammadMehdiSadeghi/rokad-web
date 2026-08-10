import sys, os
from PIL import Image
import easyocr

reader = easyocr.Reader(["fa", "en"], gpu=False, verbose=False)

src = r"C:\Users\Mohammad\Documents\rokad-web\.tmp_figma\version_thumbs\v00_2026-08-10.png"

def run(box, scale, label):
    img = Image.open(src).convert("RGB")
    img = img.crop(box)
    img = img.resize((img.width * scale, img.height * scale), Image.LANCZOS)
    tmp = src.replace(".png", f"_crop_{label}.png")
    img.save(tmp)
    res = reader.readtext(tmp, detail=1, paragraph=False)
    res.sort(key=lambda r: (r[0][0][1], r[0][0][0]))
    print(f"=== {label} (box={box}, scale={scale}) ===")
    for b, t, c in res:
        x0 = b[0][0]; y0 = b[0][1]
        x1 = b[2][0]; y1 = b[2][1]
        print(f"  x={x0:6.0f} y={y0:6.0f} {x1-x0:4.0f}x{y1-y0:3.0f} c={c:.2f} | {t}")
    print()

# Desktop frame in v00: x 200..745 y 0..454
# subtitle band: orig y ~95..140
run((200, 90, 750, 150), 10, "subtitle")
# card titles band: orig y ~288..330 (desk cards)
run((200, 285, 750, 335), 10, "cardtitles")
# heading band
run((200, 35, 750, 95), 8, "heading")
# mobile frame stat band
run((60, 185, 205, 320), 8, "mobile_stat")