import asyncio, sys, os
from PIL import Image
from winsdk.windows.media.ocr import OcrEngine
from winsdk.windows.globalization import Language
from winsdk.windows.graphics.imaging import BitmapDecoder
from winsdk.windows.storage import StorageFile, FileAccessMode

def convert_webp(src, dst, scale=2):
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

async def ocr_image(path, wanted_lang):
    available = [l.language_tag for l in OcrEngine.available_recognizer_languages]
    print("available OCR langs:", sorted(available))
    engine = None
    if wanted_lang in available:
        engine = OcrEngine.try_create_from_language(Language(wanted_lang))
    if engine is None:
        engine = OcrEngine.try_create_from_user_profile_languages()
    if engine is None:
        print("NO OCR ENGINE"); return
    print("using:", engine.recognizer_language.language_tag)
    file = await StorageFile.get_file_from_path_async(path)
    stream = await file.open_async(FileAccessMode.READ)
    decoder = await BitmapDecoder.create_async(stream)
    bitmap = await decoder.get_software_bitmap_async()
    result = await engine.recognize_async(bitmap)
    lines = []
    for line in result.lines:
        if not line.words:
            continue
        x0 = min(w.bounding_rect.x for w in line.words)
        y0 = min(w.bounding_rect.y for w in line.words)
        x1 = max(w.bounding_rect.x + w.bounding_rect.width for w in line.words)
        y1 = max(w.bounding_rect.y + w.bounding_rect.height for w in line.words)
        lines.append((x0, y0, x1, y1, line.text))
    lines.sort(key=lambda t: (round(t[1] / 8), t[0]))
    return lines

if __name__ == "__main__":
    src = sys.argv[1]
    lang = sys.argv[2] if len(sys.argv) > 2 else "fa"
    scale = int(sys.argv[3]) if len(sys.argv) > 3 else 2
    tmp = os.path.splitext(src)[0] + f"_s{scale}.png"
    convert_webp(src, tmp, scale)
    lines = asyncio.run(ocr_image(tmp, lang))
    for x0, y0, x1, y1, text in lines:
        print(f"  x={x0:6.1f} y={y0:6.1f} {x1-x0:5.0f}x{y1-y0:3.0f} | {text}")