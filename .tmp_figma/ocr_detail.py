import sys, os
from PIL import Image
import easyocr

def prepare(src, dst, scale, box=None):
    img = Image.open(src)
    if img.mode in ("RGBA", "LA", "P"):
        img = img.convert("RGBA")
        bg = Image.new("RGB", img.size, (255, 255, 255))
        bg.paste(img, mask=img.split()[-1])
        img = bg
    else:
        img = img.convert("RGB")
    if box:
        img = img.crop(box)
    if scale != 1:
        img = img.resize((img.width * scale, img.height * scale), Image.LANCZOS)
    img.save(dst, "PNG")
    return dst

reader = easyocr.Reader(["fa", "en"], gpu=False, verbose=False)

def run(path, scale, box=None):
    tmp = path.replace(".png", f"_r{scale}.png")
    prepare(path, tmp, scale, box)
    res = reader.readtext(tmp, detail=1, paragraph=False)
    res.sort(key=lambda r: (round(r[0][0][1] / 14), r[0][0][0]))
    for b, t, c in res:
        x0 = b[0][0]; y0 = b[0][1]; x1 = b[2][0]; y1 = b[2][1]
        print(f"  x={x0:6.0f} y={y0:6.0f} {x1-x0:5.0f}x{y1-y0:3.0f} c={c:.2f} | {t}")
    print()

src = r"C:\Users\Mohammad\Documents\rokad-web\.tmp_figma\version_thumbs\v00_2026-08-10.png"
print("########## DESKTOP FRAME (x 210..735) 4x ##########")
run(src, 4, box=(200, 0, 745, 454))
print("########## MOBILE FRAME (x 60..200) 4x ##########")
run(src, 4, box=(60, 0, 205, 454))