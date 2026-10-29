"""Generate responsive AVIF/WebP variants for portfolio imagery.

Usage:
    python scripts/optimize-images.py

Requires Pillow 11+ with WebP and AVIF support. The original assets stay in
src/assets so the derivatives can always be regenerated. Only the files under
src/assets/images are imported by the application and emitted by Vite.
"""

from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "src" / "assets"
OUTPUT = SOURCE / "images"

# key, source file, widths, quality (webp, avif)
IMAGES = [
    ("profile", "profile.jpg", (480, 800), (82, 56)),
    ("fmdStore", "fmdStore.png", (480, 800), (82, 54)),
    ("library", "Library.png", (480, 880), (82, 54)),
    ("printerLibrary", "printerLibrary.png", (480, 960), (82, 54)),
    ("driver", "Driver.png", (320, 499), (82, 56)),
    ("fennecMobile", "fennecMobile.jpg", (480, 960), (82, 56)),
    ("medicare", "medicare.jpg", (480, 960), (82, 56)),
    ("makseb", "makseb.jpg", (480, 960), (82, 56)),
    ("autoImport", "autoImport.jpg", (480, 960), (82, 56)),
    ("travelLeads", "travelLeads.jpg", (480, 960), (82, 56)),
    ("offlineMaps", "offlineMaps.jpg", (480, 960), (82, 56)),
]


def main() -> None:
    OUTPUT.mkdir(parents=True, exist_ok=True)

    for key, filename, widths, qualities in IMAGES:
        source_path = SOURCE / filename
        with Image.open(source_path) as opened:
            image = ImageOps.exif_transpose(opened).convert("RGB")

            for width in widths:
                if width >= image.width:
                    resized = image.copy()
                else:
                    height = round(image.height * (width / image.width))
                    resized = image.resize((width, height), Image.Resampling.LANCZOS)

                webp_path = OUTPUT / f"{key}-{width}.webp"
                avif_path = OUTPUT / f"{key}-{width}.avif"
                resized.save(
                    webp_path,
                    format="WEBP",
                    quality=qualities[0],
                    method=6,
                )
                resized.save(
                    avif_path,
                    format="AVIF",
                    quality=qualities[1],
                    speed=6,
                )
                print(
                    f"{key}-{width}: {resized.width}x{resized.height} "
                    f"webp={webp_path.stat().st_size // 1024}KB "
                    f"avif={avif_path.stat().st_size // 1024}KB"
                )


if __name__ == "__main__":
    main()
