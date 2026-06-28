import QRCode from 'qrcode';
import sharp from 'sharp';
import { readFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = join(__dirname, '..');

// ─── Gabis Core Specs ─────────────────────────────────────────────
const URL = 'https://gabis.com.mx';
const LOGO_PATH = join(PROJECT_ROOT, 'public', 'images', 'gabisNoF.svg');

// QR Settings
const QR_WIDTH = 1800;       // px — large print quality
const QR_MARGIN = 4;         // quiet zone modules (wide = safer scanning)

// ─── Themes ────────────────────────────────────────────────────────
const themes = {
  manana: {
    label: 'Día',
    bgColor: '#F9F7F2',      // Cream
    qrColor: '#C01014',      // Birria Red
    logoFill: '#C01014',
    output: join(PROJECT_ROOT, 'public', 'images', 'qr-manana.png'),
  },
  noche: {
    label: 'Noche',
    bgColor: '#141414',      // Matte Black
    qrColor: '#FE7102',      // Pumpkin Spice
    logoFill: '#FE7102',
    output: join(PROJECT_ROOT, 'public', 'images', 'qr-noche.png'),
  },
};

// ─── Logo Preparation ──────────────────────────────────────────────

async function prepareLogo(theme) {
  // Recolor the Gabis "G" SVG
  let svg = readFileSync(LOGO_PATH, 'utf-8');
  svg = svg.replace(/fill="[^"]*"/g, `fill="${theme.logoFill}"`);
  svg = svg.replace(/fill:#[0-9A-Fa-f]+/g, `fill:${theme.logoFill}`);

  // Logo size: ~220px — prominent but leaves breathing room for scanning
  const LOGO_SIZE = 240;
  const logoBuffer = await sharp(Buffer.from(svg))
    .resize(LOGO_SIZE, LOGO_SIZE, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();

  // Clean background patch (rounded square) — sits behind the logo
  const PATCH_SIZE = 340;    // ~19% of QR width
  const cleanSvg = Buffer.from(
    `<svg width="${PATCH_SIZE}" height="${PATCH_SIZE}" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="${PATCH_SIZE}" height="${PATCH_SIZE}" rx="40" fill="${theme.bgColor}" />
    </svg>`
  );
  const cleanBuffer = await sharp(cleanSvg).png().toBuffer();

  return { logoBuffer, cleanBuffer, LOGO_SIZE, PATCH_SIZE };
}

// ─── Main Generator ────────────────────────────────────────────────

async function generateQR(theme) {
  console.log(`\n🔲 Generando QR ${theme.label}...`);
  console.log(`   QR: ${theme.qrColor} | BG: ${theme.bgColor} | Logo: ${theme.logoFill}`);

  // 1. Generate standard QR PNG using the library's battle-tested renderer
  const qrBuffer = await QRCode.toBuffer(URL, {
    type: 'png',
    width: QR_WIDTH,
    margin: QR_MARGIN,
    errorCorrectionLevel: 'H',   // 30% — safe for logo overlay
    color: {
      dark: theme.qrColor,
      light: theme.bgColor,
    },
  });

  // 2. Prepare logo & clean patch
  const { logoBuffer, cleanBuffer, LOGO_SIZE, PATCH_SIZE } = await prepareLogo(theme);

  // 3. Composite: clean patch → logo → QR
  const patchOffset = Math.round((QR_WIDTH - PATCH_SIZE) / 2);
  const logoOffset = Math.round((QR_WIDTH - LOGO_SIZE) / 2);

  await sharp(qrBuffer)
    .composite([
      { input: cleanBuffer, top: patchOffset, left: patchOffset },
      { input: logoBuffer,  top: logoOffset,  left: logoOffset },
    ])
    .png()
    .toFile(theme.output);

  console.log(`   ✅ Guardado → ${theme.output}\n`);
}

// ─── Run ───────────────────────────────────────────────────────────

async function main() {
  const outDir = join(PROJECT_ROOT, 'public', 'images');
  if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

  console.log('🏷️  Gabis QR Code');
  console.log(`   URL: ${URL}`);
  console.log(`   Size: ${QR_WIDTH}×${QR_WIDTH}px | H error correction | margin: ${QR_MARGIN}`);

  for (const key of ['manana', 'noche']) {
    await generateQR(themes[key]);
  }

  console.log('🎉 Listo!\n');
}

main().catch((err) => {
  console.error('❌', err);
  process.exit(1);
});
