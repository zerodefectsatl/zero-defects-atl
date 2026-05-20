import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const inputPath  = path.join(__dirname, '.claude/worktrees/festive-moser-c702a2/public/images/logos/zd-logo.png');
const outputPath = path.join(__dirname, '.claude/worktrees/festive-moser-c702a2/public/images/logos/zd-logo-transparent.png');

const { data, info } = await sharp(inputPath)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;

// Flood-fill from all four corners to mark background pixels
const TOLERANCE = 60; // max color distance from seed pixel to still be "background"
const visited = new Uint8Array(width * height);
const transparent = new Uint8Array(width * height);

function colorDist(data, i, r0, g0, b0) {
  const dr = data[i] - r0, dg = data[i+1] - g0, db = data[i+2] - b0;
  return Math.sqrt(dr*dr + dg*dg + db*db);
}

function floodFill(startX, startY) {
  const idx = (startY * width + startX) * channels;
  const seedR = data[idx], seedG = data[idx+1], seedB = data[idx+2];

  const queue = [[startX, startY]];
  while (queue.length > 0) {
    const [x, y] = queue.pop();
    if (x < 0 || x >= width || y < 0 || y >= height) continue;
    const pixIdx = y * width + x;
    if (visited[pixIdx]) continue;
    visited[pixIdx] = 1;

    const dataIdx = pixIdx * channels;
    if (colorDist(data, dataIdx, seedR, seedG, seedB) > TOLERANCE) continue;

    transparent[pixIdx] = 1;

    queue.push([x+1, y], [x-1, y], [x, y+1], [x, y-1]);
  }
}

// Seed from all four corners
floodFill(0, 0);
floodFill(width - 1, 0);
floodFill(0, height - 1);
floodFill(width - 1, height - 1);

// Also seed from all edges to catch any border background not connected to corners
for (let x = 0; x < width; x++) {
  floodFill(x, 0);
  floodFill(x, height - 1);
}
for (let y = 0; y < height; y++) {
  floodFill(0, y);
  floodFill(width - 1, y);
}

// Apply transparency
for (let i = 0; i < width * height; i++) {
  if (transparent[i]) {
    data[i * channels + 3] = 0;
  }
}

await sharp(data, { raw: { width, height, channels } })
  .png()
  .toFile(outputPath);

console.log(`Done — ${width}x${height} transparent PNG saved to ${outputPath}`);
