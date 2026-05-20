const fs = require("fs");
const path = require("path");

let sharp;
try {
  sharp = require("sharp");
} catch (err) {
  console.error("This script requires the 'sharp' package.");
  console.error("Run: npm install --save-dev sharp");
  process.exit(1);
}

const SVG_PATH = path.join(__dirname, "icon.svg");
const BACKGROUND = "#18231f";

const TARGETS = [
  { file: "icon-192.png", size: 192, padded: false },
  { file: "icon-512.png", size: 512, padded: false },
  { file: "icon-maskable-512.png", size: 512, padded: true },
  { file: "apple-touch-icon.png", size: 180, padded: false }
];

async function build() {
  const svg = fs.readFileSync(SVG_PATH);

  for (const target of TARGETS) {
    const outPath = path.join(__dirname, target.file);
    if (target.padded) {
      const inner = Math.round(target.size * 0.8);
      const pad = Math.round((target.size - inner) / 2);
      const innerPng = await sharp(svg, { density: 384 })
        .resize(inner, inner, { fit: "contain", background: BACKGROUND })
        .png()
        .toBuffer();
      await sharp({
        create: {
          width: target.size,
          height: target.size,
          channels: 4,
          background: BACKGROUND
        }
      })
        .composite([{ input: innerPng, top: pad, left: pad }])
        .png()
        .toFile(outPath);
    } else {
      await sharp(svg, { density: 384 })
        .resize(target.size, target.size, { fit: "contain", background: BACKGROUND })
        .png()
        .toFile(outPath);
    }
    console.log(`Wrote ${target.file} (${target.size}x${target.size})`);
  }
}

build().catch((err) => {
  console.error(err);
  process.exit(1);
});
