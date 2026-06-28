import sharp from 'sharp';
import { readdir, stat, mkdir } from 'fs/promises';
import { join, extname, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, '..');

const directories = [
  join(projectRoot, 'public', 'images', 'manana'),
  join(projectRoot, 'public', 'images', 'noche'),
];

async function convertDirectory(dir) {
  const files = await readdir(dir);
  let converted = 0;
  let skipped = 0;

  for (const file of files) {
    const filePath = join(dir, file);
    const fileStat = await stat(filePath);

    // Skip directories
    if (fileStat.isDirectory()) continue;

    // Only process PNG files
    if (extname(file).toLowerCase() !== '.png') continue;

    const webpPath = filePath.replace(/\.png$/i, '.webp');

    try {
      await sharp(filePath)
        .webp({ quality: 80 })
        .toFile(webpPath);

      const origSize = (fileStat.size / 1024).toFixed(1);
      const newStat = await stat(webpPath);
      const newSize = (newStat.size / 1024).toFixed(1);
      const savings = ((1 - newStat.size / fileStat.size) * 100).toFixed(0);

      console.log(`✓ ${file} → ${file.replace(/\.png$/i, '.webp')}  (${origSize}KB → ${newSize}KB, -${savings}%)`);
      converted++;
    } catch (err) {
      console.error(`✗ ${file}: ${err.message}`);
      skipped++;
    }
  }

  return { converted, skipped };
}

async function main() {
  console.log('🖼️  Converting PNGs to WebP...\n');

  let totalConverted = 0;
  let totalSkipped = 0;

  for (const dir of directories) {
    console.log(`📁 ${dir}`);
    const { converted, skipped } = await convertDirectory(dir);
    totalConverted += converted;
    totalSkipped += skipped;
    console.log(`   ${converted} converted, ${skipped} skipped\n`);
  }

  console.log(`Done! Total: ${totalConverted} converted, ${totalSkipped} skipped`);
}

main().catch(console.error);
