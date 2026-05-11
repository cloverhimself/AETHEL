# Aethel Website — Progress Report
**Date:** May 11, 2026
**Branch:** `final-polish-test`
**Project URL (current):** https://aethel-sigma.vercel.app

---

## What You Gave Us

- Full creative direction PDF (vision, tone, emotional intent)
- Full lore document PDF (mythology, lineages, seals, echelons, kings)
- Founder's message: *"This should feel like an emotional gateway into a living world, not a standard NFT page or lore encyclopedia"*
- All raw image assets (hero visuals, busts, king renders, seal symbols, backgrounds, Maya Studio logo)

---

## What Has Been Done

### 1. Real Images — Everywhere

Previously the site used placeholder art or no images in several key sections. Every section now shows real Aethel visuals.

| Section | Image Added |
|---|---|
| Hero | Full-bleed right-side character visual (Ignaris Dominus) |
| Identity | Noctyra bust fills the visual panel |
| Lineage Cards | Each of the 5 lineage cards shows its cinematic image |
| Seal Cards | Each seal card now shows its symbol image (BTC / ETH / SOL / BNB) |
| Echelons | Lineage bust appears in the intro panel for each tab |
| Kings | Background atmospheric visual + centrepiece "Final Reveal" render with gold glow |
| Footer | Maya Studio logo |

### 2. Image Optimisation Pipeline

All 29 assets have been converted from JPEG to WebP using a custom script (`scripts/convert-assets.js`), reducing file sizes significantly with no visible quality loss.

| Asset Type | Size Reduction |
|---|---|
| Bust portraits | 8–15 KB each (from ~200 KB JPEGs) |
| Hero visuals | 47–116 KB each |
| King centrepiece | 58 KB |
| Seal symbols | 59–69 KB each |
| Background voids | 8–11 KB each |

A 1200×630 OG image (`public/og-image.jpg`) was also created for social media sharing previews.

### 3. Section Order Restructured

The page flow has been rethought to lead with identity and emotion before data and lore detail.

**New order:**
1. Hero
2. Quick Explanation (the first frequency)
3. **Identity** — moved earlier; establishes emotional tone before lineages
4. Lineages
5. Rupture (The Great Descent)
6. Seals
7. Echelons
8. **Souls Supply** — moved later; data now lands after world-building, not before
9. Kings
10. **Chronicle Gate** — new section (see below)
11. Find Your Soul (quiz)
12. Final CTA
13. Footer

### 4. New Section: The Chronicle Gate

A new section was built between Kings and the Quiz. It serves as the gateway to deeper lore.

- Shows Rupture movements 4, 5, and 6 (the archive movements not shown on the main page)
- Each movement has an expandable "Read deeper passage" panel
- Two navigation links: "View the Full Census" and "All Twenty Echelons"
- Styled with a gold radial gradient and centred layout to feel like an archive entrance

The main Rupture section now shows only movements 1–3, with a "Continue the descent" link pointing to the Chronicle Gate.

### 5. Copy — Tone Alignment

All copy has been reviewed and corrected to match the founder's direction.

**Removed entirely:**
- "NFT project" language
- "Join", "Buy", "Mint", "Holders", "Launch", "Drop"
- Em dashes (replaced with commas, colons, or mid-dots)
- Discord (all links removed from nav, footer, and CTAs)

**Language now used:**
- "Enter", "Discover", "Recognise", "Those who enter", "The awakened"
- "Identity before ownership. Atmosphere before explanation."

**CTAs updated:**
- Hero: "Discover Your Soul" + "Enter the Lineages"
- Final CTA: "Discover Your Soul" + "Enter the Archive"

### 6. Navigation Updated

| Before | After |
|---|---|
| Lore / Census / Seals / Kings / Archive | Identity / Lineages / Seals / Kings / Archive |
| "Mint ↗" | "Discover ↗" (links to quiz) |

### 7. SEO and Social Sharing

Added to `index.html`:
- Full page title and meta description
- Open Graph tags (title, description, image)
- Twitter card tags
- Theme colour (`#080608`)

### 8. Footer

- Maya Studio logo image + "A Maya Studio creation" label added
- Discord link removed
- "Lore Codex" and "Press" placeholder links removed
- "The Archive" link added to The World column

---

## What Is Left

### Deploy
The branch `final-polish-test` is ready and pushed to GitHub. It has not yet been merged to `main` or pushed live. **To deploy:** merge the branch to `main` on GitHub — Vercel will auto-deploy within minutes.

### Mobile and Tablet QA
A visual check is needed at three viewport widths before presenting to the client:
- **375px** — iPhone SE / standard mobile
- **768px** — iPad portrait
- **1024px** — small laptop / iPad landscape

Key things to verify on mobile: hero image doesn't obscure the heading text, kings centrepiece scales correctly, lineage carousel controls are tappable, identity bust fills its container cleanly.

### Lighthouse Performance Audit
Target: 90+ on mobile. The WebP conversion already addresses the largest gains. Worth running after deploy to catch anything remaining (font loading, render-blocking resources).

### Echelon-Specific Bust Images (Optional Upgrade)
Currently, the Echelons section shows the lineage-level bust (e.g., the main Ignaris bust for all four Ignaris echelons). The asset folder contains 25 echelon-specific busts (e.g., IGNARIS REX, IGNARIS DOMINUS, IGNARIS VELOCITY, IGNARIS CROWNED EMBER). These could be wired to each echelon row for a more detailed experience. This is a polish item, not blocking.

### Aurelion Rex Bust (Optional Upgrade)
A `bust-aurelion-rex.webp` was converted and is ready. It could be used as a special visual in the Kings section to distinguish the Rex from standard Aurelion renders. Not wired yet.

---

## Current Build Status

```
✓ Built in 4.76s
71 modules
0 errors
0 warnings
```

All assets are WebP. JS bundle is 218 KB gzipped to 68 KB. CSS bundle is 39 KB gzipped to 8 KB.

---

*Report prepared by the development team — May 2026*
