# HEALTHPLUS MEDICAL — V2 BASELINE DESIGN, UX & PHOTOGRAPHY AUDIT (`HEALTHPLUS_V3_DESIGN_AUDIT.md`)

- **Project:** HealthPlus by SEHA Medical (`healthplusmed.ca` / `https://healthplusnew.vercel.app/`)
- **Workspace:** `C:\Users\mcreg\Desktop\healthplus\seha medical\healthplusnew\`
- **Baseline Branch / Commit:** `main` (`b8a6cf2b1d40398c056a4f8c61f6ee27f62eb0cc`)
- **V3 Redesign Branch:** `v3-modern-care`
- **Audit Date:** October 25, 2026
- **Before Screenshots Archive:** `assets/v3-qa/before/` (20 baseline captures across Desktop `1440×900` and Mobile `390×844`)

---

## 1. Executive Creative & UX Assessment

While the V2 website (`b8a6cf2b`) is structurally functional, mobile-accessible, and compliant with Alberta Health Information Act (HIA) Zero-PHI safety rules, its visual presentation and information architecture fall short of a flagship healthcare institution:

1. **Fragmented Visual Identity Across Routes:**
   - The Homepage uses a heavily overlaid illustration/composite (`assets/images/home/home-hero.png?v=2`) with three stacked frosted-glass action cards and a floating 4-stat bar.
   - The `About`, `Our Team`, and `Contact` pages have **no editorial hero typography or primary conversion controls above the fold**—they open with a bare white container holding a raw `<picture>` banner (`padding: 105px 0 var(--space-8)`), pushing the `<h1>` headline below the fold.
   - Worse still, the hero banner on `team/index.html` (`DSC_0835_NANO_desk.webp`) is a close-up photograph of **business cards sitting on a counter** rather than an inspiring introduction to HealthPlus Medical's physicians and clinical leadership.
   - Individual service pages (`services/family-medicine.html`, etc.) include a dark neon SVG widget (`#071E1C` "FAMILY VITAL PULSE MONITOR" with a blinking green dot and animated ECG line) inside the hero that feels like a decorative tech dashboard rather than a calm, authoritative medical clinic.
2. **Navigation & Header Deficiencies:**
   - The desktop navigation bar (`hp-navbar`) omits a `Home` link, lacks a persistent direct phone call pill (`(403) 455-6656`), and lacks a primary `Book / Visit` button in the top bar—forcing patients to hunt for contact details when browsing deeper pages.
   - The campaign landing page (`services/womens-health-iud-clinic-calgary.html`) uses a legacy `.nav-menu / .nav-list` header without the Services mega-menu and a truncated 1-line footer because the build-script injection markers (`<!-- HP_SERVICES_NAV_START -->`, `<!-- HP_FOOTER_START -->`) were missing.
3. **Typography, Color & Surface Inconsistencies:**
   - Several pages load `Inter` in `<head>` while `css/hp-premium.css` imports `Montserrat` + `Playfair Display`, and inline styles frequently override the CSS custom properties with hardcoded hex colors (`#cbd5e1`, `#f8fafc`, `#1e293b`, `#071E1C`, `#d32f2f`) or undefined variables (`var(--hp-bg-light)`, `var(--hp-bg-white)`, `var(--shadow-sm)`).
   - Extensive inline `style="..."` blocks in `scripts/build-services.js` and `scripts/init-team.js` prevent cohesive responsive refinement across tablet (`1024px`, `768px`) and mobile (`430px`–`320px`) viewports.
4. **Homepage Flow & Structural Placement Bugs:**
   - In `index.html`, the "Experience Our Clinic" real photography section (lines 593–630) is placed **outside** the `<main>` landmark, between `</main>` and `<footer>`.
   - The Homepage lacks an interactive **"Find the Right Physician"** preview, lacks clear **Patient Pathways** distinguishing *New Family Practice Patients*, *Walk-In Patients*, and *Referred Specialist Patients*, and lacks a dedicated **Women's Health & Family Care Spotlight** connecting to `/services/womens-health-iud-clinic-calgary.html`.
5. **Physician Directory & Staff Photography Gaps:**
   - `team/index.html` renders 24 profiles across three long vertical lists without category filter tabs, specialty tags, or quick search.
   - Six physicians (`Dr. Aous Al Shehabi`, `Dr. May Aldabbagh`, `Dr. Mehwish Hanif`, `Dr. Radhya Aboaziza`, `Dr. Angela Vinturache`, `Dr. Asaad Qaddori`) still load legacy `.jpg`/`.png` files from `/assets/healthplus team/...` (with unescaped spaces in the URL path and non-uniform aspect ratios/file sizes up to `655 KB`) instead of color-balanced, uniform `4:5` (`800×1000` desktop / `480×600` mobile) `.webp` portraits.
   - Several physician cards display placeholder copy (`"Biography and professional credentials will be updated once the final medical team profile is approved."` or `"Dr Radhya Aboaziza"`) or raw bullet symbols (`"• Dr Kheir is..."`) instead of clean, CPSA-verified professional summaries.
   - Clicking "View Profile" on `team/index.html` opens a single-column modal where the `4:5` image takes up the entire viewport height before scrolling to the biography, and does not link to the dedicated `team/dr-*.html` profile pages or provide a direct booking CTA inside the modal.
6. **Legacy Copy Remnants:**
   - `faq.html` line 245 still references `"using our JotForm Booking Portal"` in the answer text even though the link points to `/book.html`.

---

## 2. Page-by-Page Audit Matrix

| Route / Template | Current V2 Strengths | Critical Visual, UX & Technical Weaknesses Identified | V3 Reinvention Target |
|---|---|---|---|
| **Global Header & Footer** (`hp-navbar`, `hp-footer`) | Clean logo (`/assets/logo_hp.png`), functional mega-dropdown on most pages, dark teal footer. | Missing `Home` link, missing persistent `(403) 455-6656` phone pill and `Appointments` CTA in header; inconsistent header/footer on `womens-health-iud-clinic-calgary.html`. | Architectural sticky header with `Home`, `About`, `Services` (editorial mega-menu), `Physicians`, `Appointments`, `Contact`, live clinic status/phone pill, and full-screen accessible mobile drawer. |
| **Homepage** (`index.html`) | Clear HIA-safe hero CTAs, Google rating callout, popular times chart, real Nikon facility photos. | Composite hero illustration feels generic; "Experience Our Clinic" is outside `<main>`; no Physician Finder preview; no clear 3-way Patient Pathways; no Women's Health spotlight; no comprehensive Directions/Hours module. | **Flagship V3 Editorial Homepage:** Architectural split hero with authentic Nikon D7500 photography, immediate booking/phone/walk-in bar, Clinic Introduction, 11 Verified Midnapore Services showcase, interactive Physician Finder preview, 3 Patient Pathways, Real Clinic Architecture gallery, Women's Health & Family Care spotlight, and Midnapore Location/Hours/Directions hub. |
| **About Page** (`about/index.html`) | Uses real Nikon reception photo (`DSC_0848_NANO_desk.webp`). | Opens with a bare image box and no above-the-fold title; thin 1-paragraph card body; repetitive service pills. | Editorial Clinic Story & Medical Philosophy page highlighting SEHA Medical leadership, CPSA-accredited clinical standards, collaborative primary + specialist model, and real Nikon facility gallery. |
| **Services Directory** (`services/index.html`) | Lists all 11 verified Midnapore services with icons and descriptions. | Generic stock hero (`services-hero.jpg`); flat 11-card grid with no grouping by care pathway (*Primary & Walk-In Care*, *In-House Specialist Consultation*, *Women's & Pediatric Care*, *Injury & Recovery*). | Editorial Services Hub with category filter tabs, clear access badges (*Walk-In / Direct Book* vs. *Physician Referral*), AHCIP coverage guidance, and direct phone/online booking strip. |
| **Individual Service Pages** (`services/*.html` + campaign page) | Strong clinical copy, preparation checklists, FAQ accordions, and JSON-LD schema. | Gimmicky dark neon SVG pulse widgets in heroes; inline styles; no linkage to the specific HealthPlus physicians who deliver that service. | Cohesive **V3 Clinical Service Template** with authentic facility photography, clear Care Access pathway badge, Conditions & Clinical Focus cards, What to Expect & Preparation guide, verified HealthPlus physicians for that specialty, AHCIP coverage notice, interactive FAQs, and Related Services. |
| **Physician & Team Directory** (`team/index.html` + `team/dr-*.html`) | 24 verified Midnapore profiles; `Jehan Mustafa` (`HP-TEAM-FINAL-013`) properly withheld per opt-out; unconfirmed SEHA Crescent Heights photos excluded. | Business-card photo as hero; 6 legacy non-WebP portraits in `/assets/healthplus team/`; raw bullet points & placeholder bio strings; awkward 1-column modal; sparse `dr-*.html` pages. | **V3 Physician & Clinical Team Directory** with interactive category filtering (*All*, *Family Physicians*, *Specialists*, *Clinic Leadership & Support*), uniform color-balanced `4:5` (`800×1000` / `480×600`) WebP portraits, polished CPSA/CCFP/MRCGP/FRCPC bios, 2-column accessible quick-view modal + redesigned `team/dr-*.html` profile pages. |
| **Booking, Contact, FAQ, 404** (`book.html`, `contact.html`, `faq.html`, `404.html`) | 100% HIA Zero-PHI compliant (zero `formsubmit.co` or unapproved `jotform.com` relays). | `book.html` and `contact.html` feel utilitarian; `faq.html` has leftover "JotForm Booking Portal" text and broken accordion state styling. | Elevated **V3 Appointments & Access Hub (`book.html`)** with clear pathways for Online Self-Booking (`inputhealth`), Phone Scheduling (`(403) 455-6656`), Walk-In Triage, and Specialist Referrals; redesigned `contact.html` with interactive map & transit/parking guide; categorized `faq.html` with fixed copy. |

---

## 3. Complete Staff & Physician Photography Inventory Summary

An exhaustive programmatic audit (`ops/scripts/audit-staff-photography.mjs` → `ops/evidence/staff_photography_audit_raw_2026-10-25.json`) inspected all image directories across the workspace (`assets/images/team-review/`, `assets/healthplus team/`, `team/here/`, `C:\Users\mcreg\Desktop\healthplus-photography\`, and `seha medical/assets/`) and reconciled them against the live management verification database (`/api/team-review`):

1. **18 Verified Nikon D7500 Midnapore Portraits (`HP-TEAM-FINAL-001.webp` .. `019.webp`, excluding `013`):**
   - **Status:** `COMPLETE AND VERIFIED` (`status: "approved"`, `confidence: "CONFIRMED"`, `website_permission: "YES"`).
   - **Action in V3:** Generate responsive `4:5` (`800×1000` desktop and `480×600` mobile) WebP variants in `assets/images/team-v3/` with consistent natural exposure and sharpness while preserving `/assets/images/team-review/HP-TEAM-FINAL-*.webp` intact.
2. **6 Verified Legacy Named Physician Portraits (`assets/healthplus team/dr_*`):**
   - **Profiles:** Dr. Angela Vinturache (`dr-0`), Dr. Aous Al Shehabi (`dr-1`), Dr. Asaad Qaddori (`dr-2`), Dr. May Aldabbagh (`dr-7`), Dr. Mehwish Hanif (`dr-8`), Dr. Radhya Aboaziza (`dr-11`).
   - **Status:** `COMPLETE AND VERIFIED` (named folder match, active on live site, but stored as unoptimized `.jpg`/`.png` with spaces in path and non-uniform aspect ratios).
   - **Action in V3:** Optimize all 6 into `800×1000` (4:5 desktop) and `480×600` (4:5 mobile) `.webp` portraits in `assets/images/team-v3/` with natural tonal balance and gentle sharpening—**zero generative AI or facial alteration**—while keeping original files in `assets/healthplus team/` so no legacy URL breaks.
3. **1 Opted-Out Midnapore Staff Portrait (`HP-TEAM-FINAL-013.webp` / `DSC_0899.jpg` — Jehan Mustafa, Operational Manager):**
   - **Status:** `IMAGE EXISTS, CONSENT UNCONFIRMED` (`website_permission: "NO"` in `/api/team-review`).
   - **Action in V3:** Keep strictly excluded from all public pages; document on Management Contact Sheet as withheld per opt-out.
4. **20 SEHA Medical Crescent Heights Raw Photographs (`team/here/crescent-heights/DSC_0987.jpg` .. `DSC_1027.jpg`, including 6 processed as `HP-TEAM-FINAL-020.webp` .. `025.webp`):**
   - **Status:** `IMAGE EXISTS, IDENTITY UNCONFIRMED` (`status: "unidentified"`, `full_name: ""`, `confidence: "UNKNOWN"` in `/api/team-review`).
   - **Action in V3:** Render all discovered Crescent Heights staff portraits in the local **Management Visual Contact Sheet** (`internal/team-review/contact-sheet.html` and `ops/audit_2026_10_25/STAFF_PHOTOGRAPHY_CONTACT_SHEET.html`) labeled `NAME CONFIRMATION REQUIRED` so clinic leadership can confirm identities and roles before any public deployment. Never guess identity from appearance and never publish unconfirmed portraits on public pages.
