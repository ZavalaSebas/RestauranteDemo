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
  const img = sharp(full);
  const { width, height, format } = await img.metadata();

  // Recompression to normalized quality (skip if already small)
  const stat = fs.statSync(full);
  if (stat.size > 40 * 1024) { // >40KB => recompress
    const recompressed = await img.webp({ quality: 70 }).toBuffer();
    fs.writeFileSync(full, recompressed);
  }

  // Tiny blur version (10px width) to base64
  const blurBuf = await img
    .resize({ width: 12 })
    .webp({ quality: 40 })
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
