/* Responsive derivative registry. Source images live in src/assets/ and are
   converted by scripts/optimize-images.py into AVIF/WebP pairs. */

const files = import.meta.glob("../assets/images/*.{avif,webp}", {
  eager: true,
  query: "?url",
  import: "default",
});

const WIDTHS = {
  profile: [480, 800],
  fmdStore: [480, 800],
  library: [480, 880],
  printerLibrary: [480, 960],
  driver: [320, 499],
  fennecMobile: [480, 960],
  medicare: [480, 960],
  makseb: [480, 960],
  autoImport: [480, 960],
  travelLeads: [480, 960],
  offlineMaps: [480, 960],
};

const HEIGHTS = {
  profile: [600, 1000],
  fmdStore: [596, 993],
  library: [480, 880],
  printerLibrary: [320, 640],
  driver: [321, 500],
  fennecMobile: [268, 536],
  medicare: [268, 536],
  makseb: [268, 536],
  autoImport: [268, 536],
  travelLeads: [268, 536],
  offlineMaps: [268, 536],
};

function asset(key, width, format) {
  return files[`../assets/images/${key}-${width}.${format}`];
}

function srcSet(key, format) {
  return WIDTHS[key]
    .map((width) => `${asset(key, width, format)} ${width}w`)
    .join(", ");
}

export const IMAGES = Object.fromEntries(
  Object.entries(WIDTHS).map(([key, widths]) => {
    const largestIndex = widths.length - 1;
    return [
      key,
      {
        src: asset(key, widths[largestIndex], "webp"),
        srcSetAvif: srcSet(key, "avif"),
        srcSetWebp: srcSet(key, "webp"),
        width: widths[largestIndex],
        height: HEIGHTS[key][largestIndex],
      },
    ];
  })
);
