"""Generate the social preview cards and the Apple touch icon.

Usage:
    python scripts/generate-og.py

The script only depends on Pillow. It uses Georgia and Segoe UI when they are
available (Windows), falling back to DejaVu fonts shipped with Pillow.
"""

from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "og"
PUBLIC = ROOT / "public"
OUT.mkdir(parents=True, exist_ok=True)

W, H = 1200, 630
PAPER = "#F7F7F4"
INK = "#191D1B"
MUTED = "#818A84"
COPPER = "#A65F43"
LINE = "#E3E6E0"
DARK = "#111513"
COPPER_LIGHT = "#D18A68"

FONT_DIRS = [Path("C:/Windows/Fonts"), Path("/usr/share/fonts/truetype")]


def font(candidates, size):
    for directory in FONT_DIRS:
        for name in candidates:
            path = directory / name
            if path.exists():
                return ImageFont.truetype(str(path), size)
    return ImageFont.load_default(size)


SERIF = ["georgia.ttf", "DejaVuSerif.ttf", "times.ttf"]
SERIF_ITALIC = ["georgiai.ttf", "DejaVuSerif-Italic.ttf", "timesi.ttf"]
SANS = ["segoeui.ttf", "DejaVuSans.ttf", "arial.ttf"]
SANS_BOLD = ["segoeuib.ttf", "DejaVuSans-Bold.ttf", "arialbd.ttf"]
MONO = ["consola.ttf", "DejaVuSansMono.ttf", "cour.ttf"]
MONO_BOLD = ["consolab.ttf", "DejaVuSansMono-Bold.ttf", "courbd.ttf"]


def wrap(draw, text, face, max_width):
    words = text.split()
    lines, current = [], ""
    for word in words:
        candidate = f"{current} {word}".strip()
        if draw.textlength(candidate, font=face) <= max_width:
            current = candidate
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines


def base_card():
    image = Image.new("RGB", (W, H), PAPER)
    draw = ImageDraw.Draw(image)
    # Hairline grid, deliberately faint.
    for x in range(0, W, 60):
        draw.line((x, 0, x, H), fill="#ebe5d9", width=1)
    for y in range(0, H, 60):
        draw.line((0, y, W, y), fill="#ebe5d9", width=1)
    draw.rectangle((0, 0, W - 1, H - 1), outline=LINE, width=1)
    draw.rectangle((0, 0, 10, H), fill=COPPER)
    return image, draw


def label(draw, xy, text, color=COPPER):
    draw.text(xy, text, font=font(MONO_BOLD, 17), fill=color)


def footer(draw, url="www.abdelfetah-safiddine.com"):
    draw.line((70, 552, 1130, 552), fill=LINE, width=1)
    draw.text((70, 574), "PORTFOLIO / CASE STUDY", font=font(MONO, 14), fill=MUTED)
    draw.text((1130, 574), url, font=font(MONO, 14), fill=MUTED, anchor="ra")


def home():
    image, draw = base_card()
    draw.rectangle((880, 0, 1200, 630), fill=DARK)
    draw.text(
        (1040, 300),
        "AS",
        font=font(SERIF, 150),
        fill=COPPER_LIGHT,
        anchor="mm",
    )
    label(draw, (70, 66), "BACKEND LEAD DEVELOPER | FULL-STACK ENGINEER")
    draw.text((70, 130), "Abdelfetah", font=font(SERIF, 112), fill=INK)
    draw.text((70, 236), "Safiddine.", font=font(SERIF, 112), fill=INK)
    draw.line((74, 378, 800, 378), fill=COPPER, width=3)
    body = (
        "Production backends, multi-provider API integrations, and full-stack products — "
        "plus applied LLM research."
    )
    face = font(SANS, 27)
    y = 412
    for line in wrap(draw, body, face, 760):
        draw.text((72, y), line, font=face, fill=MUTED)
        y += 38
    label(draw, (72, 516), "8 VERTICALS   /   10K+ USERS   /   4 LLM AGENTS", MUTED)
    footer(draw)
    image.save(PUBLIC / "og" / "home.png", quality=92)


def case_card(slug, kicker, title, subtitle, metrics, note):
    image, draw = base_card()
    draw.rectangle((830, 0, 1200, 630), fill=DARK)
    label(draw, (70, 66), kicker)
    draw.text((70, 122), title, font=font(SERIF, 96), fill=INK)
    draw.line((74, 252, 770, 252), fill=COPPER, width=3)
    face = font(SANS, 28)
    y = 286
    for line in wrap(draw, subtitle, face, 700):
        draw.text((72, y), line, font=face, fill=MUTED)
        y += 40

    # Metrics in the dark panel.
    label(draw, (878, 112), "SELECTED PROOF", COPPER_LIGHT)
    y = 164
    for value, name in metrics:
        draw.text((878, y), value, font=font(SERIF, 64), fill=PAPER)
        draw.text((878, y + 72), name.upper(), font=font(MONO, 14), fill="#9e978a")
        y += 142

    draw.text((72, 512), note, font=font(MONO_BOLD, 14), fill=COPPER)
    footer(draw)
    image.save(OUT / f"{slug}.png", quality=92)


def apple_icon():
    size = 180
    image = Image.new("RGB", (size, size), DARK)
    draw = ImageDraw.Draw(image)
    draw.rectangle((6, 6, size - 7, size - 7), outline=COPPER, width=2)
    draw.text(
        (size / 2, size / 2 + 2),
        "AS",
        font=font(SERIF, 72),
        fill=COPPER_LIGHT,
        anchor="mm",
    )
    image.save(PUBLIC / "apple-touch-icon.png", quality=95)


def main():
    home()
    case_card(
        "fennec-booking",
        "CASE STUDY 01 / PRODUCTION BACKEND",
        "Fennec Booking",
        "A travel commerce platform with eight verticals, multiple external "
        "suppliers and one unified booking, pricing and payment lifecycle.",
        [("8", "travel verticals"), ("10k+", "registered users"), ("1", "unified API")],
        "SANITIZED PER NDA",
    )
    case_card(
        "saha-mind",
        "CASE STUDY 02 / APPLIED AI RESEARCH",
        "Saha Mind",
        "A Master's dissertation coordinating four specialised LLM agents "
        "across a patient app and a clinician dashboard.",
        [("4", "specialised agents"), ("1,000", "evaluation queries"), ("0.811", "cosine similarity")],
        "RESEARCH PROTOTYPE",
    )
    apple_icon()
    print("Generated og/home.png, og/fennec-booking.png, og/saha-mind.png and apple-touch-icon.png")


if __name__ == "__main__":
    main()
