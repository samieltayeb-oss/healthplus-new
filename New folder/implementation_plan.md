# HealthPlus Custom Image System Preparation

This plan outlines the architecture and execution steps for the "HealthPlus Custom Image System — Production Preparation" milestone. Our objective is to standardize all image slots, secure their dimensions, define metadata, and institute safe fallbacks across the site, without altering existing layouts or requesting any AI generation of the final assets.

> [!IMPORTANT]  
> Please review this plan. Once approved, the image system architecture and placeholder assets will be propagated to the site.

## Proposed Changes

### 1. Configuration & Manifest
#### [NEW] `config/images.js`
Create a centralized image manifest serving as the single source of truth. Each entry will define:
- `id`, `filename`, `path`, `page`, `section`
- `aspectRatio`, `sourceWidth`, `sourceHeight`
- `alt` text direction
- `focalPointDesktop`, `focalPointMobile`
- `loading` (`eager` for heroes, `lazy` for others)
- `priority` (`high` for heroes, `auto` for others)
- `status` (`placeholder`), `approved` (false)

### 2. Assets Structure
Create the required directory hierarchy and populate it with a unified HealthPlus-branded SVG placeholder to prevent any broken image icons.
#### [NEW] Directories
- `assets/images/home/`
- `assets/images/core/`
- `assets/images/interiors/`
- `assets/images/services/`
- `assets/images/global/`
- `assets/images/team/`
- `assets/icons/`

#### [NEW] Placeholder Assets
We will generate a lightweight, neutral SVG placeholder containing the HealthPlus brand colors (Teal/Navy) and the required dimensions. This placeholder will be duplicated to every expected file path (e.g., `assets/images/home/home-hero.webp`) so that the site visually maintains its layout and avoids broken image links while awaiting final custom photography. 

### 3. HTML Image Implementation
We will update `init-core.js`, `index.html`, and any relevant generation scripts to ensure all image tags comply with the new requirements.

#### [MODIFY] `index.html` (Homepage)
- Update `<img src="...">` paths to `assets/images/home/home-hero.webp` and `assets/images/home/family-wellness.webp`.
- Inject `width`, `height`, `alt`, `decoding="async"`, `loading="eager"`, and `fetchpriority="high"` for the hero image.
- Inject `loading="lazy"` for the family wellness banner.
- Ensure CSS object-fit/object-position is stable.

#### [MODIFY] `scripts/init-core.js`
- **Core Heroes (About, Team, Contact, Book, 404):** Update standard header generation to apply the exact image paths (e.g., `assets/images/core/about-hero.webp`).
- **Services Templates:** Update the generation loops to output `<img src="assets/images/services/{slug}.webp">` with correct width/height constraints, lazy loading, and dynamic alt text.
- **Global Assets:** Update Open Graph metadata (`<meta property="og:image">`) and favicons to point to the new `/assets/images/global/social-share.webp` and `/assets/icons/apple-touch-icon.png`.

#### [MODIFY] `scripts/init-team.js`
- Ensure team portrait generation respects the `firstname-lastname.webp` future naming convention.
- Ensure the placeholder is applied properly with `loading="lazy"`.

### 4. Documentation
#### [NEW] `HealthPlus_Image_System_Report.md`
Generate the final requested artifact containing the complete image inventory, technical specifications, focal points, and readiness status.

## Open Questions
> [!NOTE]
> Do you have a preferred SVG icon or brand text you'd like embedded within the temporary placeholder images, or is a plain colored block in the HealthPlus Teal/Navy palette sufficient?

## Verification Plan

### Automated/Structural Verification
- Verify the existence of all 23 defined image paths and the `/team/` directory.
- Confirm `config/images.js` contains the complete schema.
- Validate `index.html` and generated pages for proper `width`, `height`, `alt`, `loading`, and `fetchpriority` attributes on `<img>` tags.

### Manual Verification
- Deploy to Vercel preview.
- Inspect the site via browser DevTools to ensure zero layout shifts occur during page load.
- Ensure screen readers correctly interpret the alt text and ignore decorative elements.
