#!/usr/bin/env node
/**
 * Genera blurDataURL para imágenes en public/images.
 * - Produce un JSON con mapping { filename: { blurDataURL, width, height } }
 * - Opcionalmente recomprime WebP asegurando calidad homogénea.
 */
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const IMAGES_DIR = path.join(process.cwd(), 'public', 'images');
const OUTPUT_FILE = path.join(process.cwd(), 'src', 'data', 'imageMeta.generated.json');

async function processImage(file) {
  const full = path.join(IMAGES_DIR, file);
  const original = fs.readFileSync(full);
  let pipeline = sharp(original, { sequentialRead: true });
  const { width, height } = await pipeline.metadata();

  // Recompress only if >40KB
  if (original.length > 40 * 1024) {
    const recompressed = await pipeline.webp({ quality: 70 }).toBuffer();
    fs.writeFileSync(full, recompressed);
    pipeline = sharp(recompressed);
  }

  const blurBuf = await pipeline
    .resize({ width: 16 })
    .webp({ quality: 38 })
    .toBuffer();
  const blurDataURL = `data:image/webp;base64,${blurBuf.toString('base64')}`;
  return { blurDataURL, width, height };
}

async function run() {
  if (!fs.existsSync(IMAGES_DIR)) {
    console.error('Images directory not found:', IMAGES_DIR);
    process.exit(1);
  }
  const files = fs.readdirSync(IMAGES_DIR).filter(f => /\.(webp)$/i.test(f));
  const out = {};
  for (const f of files) {
    try {
      out['/images/' + f] = await processImage(f);
      console.log('Processed', f);
    } catch (e) {
      console.warn('Failed processing', f, e.message);
    }
  }
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(out, null, 2));
  console.log('Written metadata to', OUTPUT_FILE);
}

run().catch(err => { console.error(err); process.exit(1); });
