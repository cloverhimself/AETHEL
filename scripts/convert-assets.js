import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');

const JOBS = [
  // Hero visuals
  { src: 'AETHEL WEBSITE ASSETS/1. HERO VISUALS/IGNARIS DOMINUS.jpg',          out: 'Assets/hero-ignaris.webp',       w: 1400, q: 82 },
  { src: 'AETHEL WEBSITE ASSETS/1. HERO VISUALS/AURELION PRIME.jpg',           out: 'Assets/hero-aurelion.webp',      w: 1400, q: 82 },
  { src: 'AETHEL WEBSITE ASSETS/1. HERO VISUALS/NOCTYRA BURDEN.jpg',           out: 'Assets/hero-noctyra.webp',       w: 1400, q: 80 },
  { src: 'AETHEL WEBSITE ASSETS/1. HERO VISUALS/VERDANIX SUSTAINIS.jpg',       out: 'Assets/hero-verdanix.webp',      w: 1400, q: 80 },
  { src: 'AETHEL WEBSITE ASSETS/1. HERO VISUALS/SRENITH EQUILIBRIS.jpg',       out: 'Assets/hero-serenith.webp',      w: 1400, q: 80 },

  // Busts — lineage level
  { src: 'AETHEL WEBSITE ASSETS/2. BUST/IGNARIS.jpg',    out: 'Assets/bust-ignaris.webp',   w: 800, q: 80 },
  { src: 'AETHEL WEBSITE ASSETS/2. BUST/SERENITH.jpg',   out: 'Assets/bust-serenith.webp',  w: 800, q: 80 },
  { src: 'AETHEL WEBSITE ASSETS/2. BUST/VERDANIX.jpg',   out: 'Assets/bust-verdanix.webp',  w: 800, q: 80 },
  { src: 'AETHEL WEBSITE ASSETS/2. BUST/NOCTYRA.jpg',    out: 'Assets/bust-noctyra.webp',   w: 800, q: 80 },
  { src: 'AETHEL WEBSITE ASSETS/2. BUST/AURELION.jpg',   out: 'Assets/bust-aurelion.webp',  w: 800, q: 80 },
  { src: 'AETHEL WEBSITE ASSETS/2. BUST/AURELION REX.jpg', out: 'Assets/bust-aurelion-rex.webp', w: 800, q: 80 },

  // Busts — echelon level (lineage × seal)
  { src: 'AETHEL WEBSITE ASSETS/2. BUST/IGNARIS DOMINUS.jpg',  out: 'Assets/bust-ignaris-bnb.webp',   w: 800, q: 80 },
  { src: 'AETHEL WEBSITE ASSETS/2. BUST/IGNARIS VELOCITY.jpg', out: 'Assets/bust-ignaris-sol.webp',   w: 800, q: 80 },
  { src: 'AETHEL WEBSITE ASSETS/2. BUST/IGNARIS MINDFIRE.jpg', out: 'Assets/bust-ignaris-eth.webp',   w: 800, q: 80 },
  { src: 'AETHEL WEBSITE ASSETS/2. BUST/IGNARIS REX.jpg',      out: 'Assets/bust-ignaris-btc.webp',   w: 800, q: 80 },

  { src: 'AETHEL WEBSITE ASSETS/2. BUST/SERENITH EQUILIBRIS.jpg', out: 'Assets/bust-serenith-bnb.webp', w: 800, q: 80 },
  { src: 'AETHEL WEBSITE ASSETS/2. BUST/SERENITH FLOWSTATE.jpg',  out: 'Assets/bust-serenith-sol.webp', w: 800, q: 80 },
  { src: 'AETHEL WEBSITE ASSETS/2. BUST/SERENITH MINDVEIL.jpg',   out: 'Assets/bust-serenith-eth.webp', w: 800, q: 80 },
  { src: 'AETHEL WEBSITE ASSETS/2. BUST/SERENITH ABSOLUS.jpg',    out: 'Assets/bust-serenith-btc.webp', w: 800, q: 80 },

  { src: 'AETHEL WEBSITE ASSETS/2. BUST/VERDANIX SUSTAINIS.jpg',  out: 'Assets/bust-verdanix-bnb.webp', w: 800, q: 80 },
  { src: 'AETHEL WEBSITE ASSETS/2. BUST/VERDANIX REBİRTH.jpg',    out: 'Assets/bust-verdanix-sol.webp', w: 800, q: 80 },
  { src: 'AETHEL WEBSITE ASSETS/2. BUST/VERDANIX VISIONARY.jpg',  out: 'Assets/bust-verdanix-eth.webp', w: 800, q: 80 },
  { src: 'AETHEL WEBSITE ASSETS/2. BUST/VERDANIX ETERNUM.jpg',    out: 'Assets/bust-verdanix-btc.webp', w: 800, q: 80 },

  { src: 'AETHEL WEBSITE ASSETS/2. BUST/NOCTYRA BURDEN.jpg',   out: 'Assets/bust-noctyra-bnb.webp', w: 800, q: 80 },
  { src: 'AETHEL WEBSITE ASSETS/2. BUST/NOCTYRA VERITAS.jpg',  out: 'Assets/bust-noctyra-sol.webp', w: 800, q: 80 },
  { src: 'AETHEL WEBSITE ASSETS/2. BUST/NOCTYRA INSIGHT.jpg',  out: 'Assets/bust-noctyra-eth.webp', w: 800, q: 80 },
  { src: 'AETHEL WEBSITE ASSETS/2. BUST/NOCTYRA COLLAPSE.jpg', out: 'Assets/bust-noctyra-btc.webp', w: 800, q: 80 },

  { src: 'AETHEL WEBSITE ASSETS/2. BUST/AURELION PRIME.jpg', out: 'Assets/bust-aurelion-bnb.webp', w: 800, q: 80 },
  { src: 'AETHEL WEBSITE ASSETS/2. BUST/AURELION FLUX.jpg',  out: 'Assets/bust-aurelion-sol.webp', w: 800, q: 80 },
  { src: 'AETHEL WEBSITE ASSETS/2. BUST/AURELION CODEX.jpg', out: 'Assets/bust-aurelion-eth.webp', w: 800, q: 80 },

  // Kings
  { src: 'AETHEL WEBSITE ASSETS/6. KINGS/FINAL REVEAL VISUAL.jpg',         out: 'Assets/king-final-reveal.webp', w: 900,  q: 84 },
  { src: 'AETHEL WEBSITE ASSETS/6. KINGS/SCALE VISUALS 1.jpg',             out: 'Assets/king-scale-1.webp',      w: 1600, q: 78 },
  { src: 'AETHEL WEBSITE ASSETS/6. KINGS/SCALE VISUALS 2.jpg',             out: 'Assets/king-scale-2.webp',      w: 1600, q: 78 },
  { src: 'AETHEL WEBSITE ASSETS/6. KINGS/CLOSE-UP AUTHORITY VISUALS 1.jpg', out: 'Assets/king-closeup-1.webp',   w: 900,  q: 82 },
  { src: 'AETHEL WEBSITE ASSETS/6. KINGS/CLOSE-UP AUTHORITY VISUALS 2.jpg', out: 'Assets/king-closeup-2.webp',   w: 900,  q: 82 },
  { src: 'AETHEL WEBSITE ASSETS/6. KINGS/THRONE - DOMINION VISUALS 1.jpg', out: 'Assets/king-throne-1.webp',    w: 1200, q: 80 },
  { src: 'AETHEL WEBSITE ASSETS/6. KINGS/THRONE - DOMINION VISUALS 2.jpg', out: 'Assets/king-throne-2.webp',    w: 1200, q: 80 },
  { src: 'AETHEL WEBSITE ASSETS/6. KINGS/MAN KING VISUAL.jpg',             out: 'Assets/king-man.webp',          w: 1200, q: 80 },

  // Cinematic - Aurelion Rex
  { src: 'AETHEL WEBSITE ASSETS/3. CINEMATIC CHARACTERS/AURELION REX 22 KINGS.jpg', out: 'Assets/cinematic-aurelion-rex.webp', w: 1200, q: 82 },

  // Seal symbols
  { src: 'AETHEL WEBSITE ASSETS/4. SYMBOLS & LOGOS/BNB SYMBOLS.jpg', out: 'Assets/seal-bnb.webp', w: 400, q: 85 },
  { src: 'AETHEL WEBSITE ASSETS/4. SYMBOLS & LOGOS/SOL SYMBOLS.jpg', out: 'Assets/seal-sol.webp', w: 400, q: 85 },
  { src: 'AETHEL WEBSITE ASSETS/4. SYMBOLS & LOGOS/ETH SYMBOLS.jpg', out: 'Assets/seal-eth.webp', w: 400, q: 85 },
  { src: 'AETHEL WEBSITE ASSETS/4. SYMBOLS & LOGOS/BTC SYMBOLS.jpg', out: 'Assets/seal-btc.webp', w: 400, q: 85 },

  // Maya logo
  { src: 'AETHEL WEBSITE ASSETS/4. SYMBOLS & LOGOS/MAYA STUDIO LOGO.jpg', out: 'Assets/maya-logo.webp', w: 300, q: 85 },

  // Backgrounds
  { src: 'AETHEL WEBSITE ASSETS/5. BACKGROUNDS/DARK COSMIC VOID 1.jpg', out: 'Assets/bg-void-1.webp', w: 1920, q: 75 },
  { src: 'AETHEL WEBSITE ASSETS/5. BACKGROUNDS/DARK COSMIC VOID 2.jpg', out: 'Assets/bg-void-2.webp', w: 1920, q: 75 },
  { src: 'AETHEL WEBSITE ASSETS/5. BACKGROUNDS/DARK COSMIC VOID 3.jpg', out: 'Assets/bg-void-3.webp', w: 1920, q: 75 },
  { src: 'AETHEL WEBSITE ASSETS/5. BACKGROUNDS/DARK COSMIC VOID 4.jpg', out: 'Assets/bg-void-4.webp', w: 1920, q: 75 },
];

// Also copy the hero image for OG tag
const OG_SRC = 'AETHEL WEBSITE ASSETS/1. HERO VISUALS/IGNARIS DOMINUS.jpg';
const OG_OUT = 'public/og-image.jpg';

async function run() {
  let done = 0, skipped = 0, failed = 0;

  for (const job of JOBS) {
    const src = path.join(ROOT, job.src);
    const out = path.join(ROOT, job.out);
    if (existsSync(out)) { skipped++; continue; }
    try {
      await sharp(src).resize(job.w, null, { withoutEnlargement: true }).webp({ quality: job.q }).toFile(out);
      console.log(`  converted  ${job.out}`);
      done++;
    } catch (e) {
      console.error(`  FAILED     ${job.src}: ${e.message}`);
      failed++;
    }
  }

  // OG image: 1200x630 crop for social sharing
  const ogSrc = path.join(ROOT, OG_SRC);
  const ogOut = path.join(ROOT, OG_OUT);
  if (!existsSync(ogOut)) {
    try {
      await sharp(ogSrc)
        .resize(1200, 630, { fit: 'cover', position: 'center' })
        .jpeg({ quality: 85 })
        .toFile(ogOut);
      console.log(`  og-image   ${OG_OUT}`);
      done++;
    } catch (e) {
      console.error(`  FAILED og-image: ${e.message}`);
    }
  }

  console.log(`\ndone: ${done}  skipped: ${skipped}  failed: ${failed}`);
}

run();
