import sys, os
from PIL import Image
import easyocr

def prepare(src, dst, scale=3):
    img = Image.open(src)
    if img.mode in ("RGBA", "LA", "P"):
        img = img.convert("RGBA")
        bg = Image.new("RGB", img.size, (255, 255, 255))
        bg.paste(img, mask=img.split()[-1])
        img = bg
    else:
        img = img.convert("RGB")
    if scale != 1:
        img = img.resize((img.width * scale, img.height * scale), Image.LANCZOS)
    img.save(dst, "PNG")
    return dst

if __name__ == "__main__":
    src = sys.argv[1]
    scale = int(sys.argv[2]) if len(sys.argv) > 2 else 3
    tmp = os.path.splitext(src)[0] + f"_ocr{scale}.png"
    prepare(src, tmp, scale)
    print("prepared:", tmp, Image.open(tmp).size)
    reader = easyocr.Reader(["fa", "en"], gpu=False, verbose=False)
    result = reader.readtext(tmp, detail=1, paragraph=False)
    result.sort(key=lambda r: (round(r[0][0][1] / 12), r[0][0][0]))
    for box, text, conf in result:
        x0 = box[0][0]; y0 = box[0][1]
        x1 = box[2][0]; y1 = box[2][1]
        print(f"  x={x0:6.0f} y={y0:6.0f} {x1-x0:5.0f}x{y1-y0:3.0f} c={conf:.2f} | {text}")