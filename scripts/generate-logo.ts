/**
 * Generate a 256×256 WebP logo from a URL to an image.
 *
 * Usage:
 *   node scripts/generate-logo.ts <Name> <light-mode-url> [dark-mode-url]
 *
 * Example (Astro):
 *   node scripts/generate-logo.ts Astro \
 *     https://astro.build/assets/press/astro-icon-dark.svg \
 *     https://astro.build/assets/press/astro-icon-light-gradient.svg
 *
 * Outputs:
 *   public/logos/<Name>-logo.webp       (used in light mode)
 *   public/logos/<Name>-dark-logo.webp  (used in dark mode, only if dark-mode-url provided)
 */

import { Resvg } from "@resvg/resvg-js";
import sharp from "sharp";

const SIZE = 256;

const [, , name, lightUrl, darkUrl] = process.argv;

if (!name || !lightUrl) {
  console.error(
    "Usage: node scripts/generate-logo.ts <Name> <light-mode-url> [dark-mode-url]",
  );
  process.exit(1);
}

async function imageUrlToWebp(url: string, outputPath: string): Promise<void> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} fetching ${url}`);

  const contentType = res.headers.get("content-type") ?? "";
  const isSvg =
    contentType.includes("svg") || url.toLowerCase().endsWith(".svg");

  let inputBuffer: Buffer;

  if (isSvg) {
    const svgData = await res.text();
    const resvg = new Resvg(svgData, { fitTo: { mode: "width", value: SIZE } });
    inputBuffer = Buffer.from(resvg.render().asPng());
  } else {
    inputBuffer = Buffer.from(await res.arrayBuffer());
  }

  await sharp(inputBuffer)
    .resize(SIZE, SIZE, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .webp({ quality: 80 })
    .toFile(outputPath);

  console.log(`Saved → ${outputPath}`);
}

await imageUrlToWebp(lightUrl, `public/logos/${name}-logo.webp`);

if (darkUrl) {
  await imageUrlToWebp(darkUrl, `public/logos/${name}-dark-logo.webp`);
}
