# HEALTHPLUS MEDICAL V3 — DESIGN SYSTEM SPECIFICATION
## *"The Modern Care Experience"*

- **Project:** HealthPlus by SEHA Medical (`healthplusmed.ca`)
- **Workspace:** `C:\Users\mcreg\Desktop\healthplus\seha medical\healthplusnew\`
- **Branch:** `v3-modern-care`
- **Brand Benchmark:** Architectural clinical calm, warm human hospitality, international private-clinic polish, and effortless patient conversion.

---

## 1. Creative Direction & Brand Positioning

**HealthPlus V3 ("The Modern Care Experience")** transforms the Midnapore clinic's digital presence from a generic multi-card medical template into an architectural, deeply trustworthy healthcare flagship.

### Core Design Pillars
1. **Architectural Calm Over Clinical Sterility:**
   - Replaces cold cyan-tinted backgrounds and heavy neon-dashboard widgets with warm alabaster ivory (`#FAF8F5`), pure clinical white (`#FFFFFF`), soft warm stone (`#F3EFEA`), and deep architectural medical teal (`#08221E` / `#0D4E47`).
2. **Authentic Human & Facility Photography:**
   - Every hero, service spotlight, and physician card showcases real Nikon D7500 photography captured inside HealthPlus by SEHA Medical (`100-290 Midpark Way SE`) and verified 4:5 physician portraits (`800×1000` desktop / `480×600` mobile `.webp`).
   - Zero synthetic faces, zero generative facial alterations, and zero unverified staff identities.
3. **Immediate, Zero-Friction Patient Triage:**
   - Every page provides instant access to the three real-world patient pathways at HealthPlus Midnapore:
     1. **24/7 Online Self-Booking** (`https://healthplusmedical.inputhealth.com/`)
     2. **Direct Reception & Callback Scheduling** (`(403) 455-6656` / `/book.html`)
     3. **Same-Day Walk-In Care & Specialist Referrals** (`100-290 Midpark Way SE`)
4. **Strict HIA Zero-PHI Safety & CPSA Accuracy:**
   - Zero `formsubmit.co` or unapproved `jotform.com` clinical intake forms.
   - All physician credentials (`MD`, `CCFP`, `MRCGP`, `FRCPC`, `FRCPCH`, `MBBS`, `PhD`) and clinic service scopes match verified Midnapore records.

---

## 2. Color System & Surface Tokens

| Token | Hex / Value | Role & Usage |
|---|---|---|
| `--hp-bg` | `#FAF8F5` | Warm Alabaster Ivory — Primary page canvas |
| `--hp-bg-section` | `#F3EFEA` | Warm Architectural Stone — Alternating editorial sections |
| `--hp-surface` | `#FFFFFF` | Pure Clinical White — Elevated cards, panels, modals |
| `--hp-surface-subtle` | `#F7F5F0` | Subtle warm card interior / table row tint |
| `--hp-obsidian` | `#071F1B` | Deep Forest Obsidian — Hero anchors, executive panels, footer |
| `--hp-heading` | `#0B2924` | Deep Medical Teal Ink — All primary headings (`H1`–`H6`) |
| `--hp-primary-dark` | `#0D4E47` | Rich Architectural Teal — Primary brand surfaces, active states |
| `--hp-primary` | `#00796B` | Clinical Emerald Teal — High-contrast interactive links & accents (WCAG AA compliant on white) |
| `--hp-primary-brand` | `#73C9BE` | Official HealthPlus Luminous Teal — Brand highlights on dark surfaces & icon badges |
| `--hp-primary-light` | `#97E2DC` | Soft Aqua Mint — Dark-mode kickers, badges, and subtle borders |
| `--hp-primary-ultra` | `#E6F4F1` | Soft Clinical Mint Tint — Icon wells, status pills, subtle callouts |
| `--hp-sand` | `#D8CFC2` | Warm Champagne Sand — Architecturalhairline dividers & card borders |
| `--hp-gold` | `#B4833E` | Restrained Warm Brass — Accreditation & excellence accents |
| `--hp-text` | `#1C2B28` | Deep Charcoal Slate — Primary body copy (15.4:1 contrast on `#FAF8F5`) |
| `--hp-text-muted` | `#4E615D` | Muted Clinical Slate — Supporting copy & metadata (6.3:1 contrast) |
| `--hp-border` | `#E4DFD7` | Refined Warm Border — Card & section hairlines |

> **Logo Integrity Rule:** The official HealthPlus logo (`/assets/logo_hp.png`) is preserved untouched in its original proportions and artwork across header and footer.

---

## 3. Typography & Editorial Hierarchy

- **Display & Editorial Serif (`--font-heading`):** `'Playfair Display', Georgia, serif`
  - Used for primary page headlines (`H1`), section titles (`H2`), and featured physician names.
  - Tight tracking (`-0.02em`), balanced line-height (`1.12`–`1.2`), conveying established medical authority and warmth.
- **UI, Clinical & Body Sans (`--font-body`):** `'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif`
  - Loaded with `Montserrat` fallback compatibility so all existing classes remain seamless while delivering superior legibility for clinical descriptions, preparation checklists, hours, and navigation controls.

### Fluid Type Scale
- **Hero Display (`H1`):** `clamp(2.35rem, 4.4vw, 4.1rem)` · Line-height `1.08` · Weight `700`
- **Section Heading (`H2`):** `clamp(1.85rem, 3.2vw, 2.85rem)` · Line-height `1.15` · Weight `700`
- **Card / Subsection (`H3`):** `clamp(1.25rem, 1.8vw, 1.5rem)` · Line-height `1.28` · Weight `600`
- **Lead Copy (`.lead`):** `clamp(1.05rem, 1.25vw, 1.2rem)` · Line-height `1.7` · Max-width `64ch`
- **Body Copy:** `1rem` (`16px`) · Line-height `1.72` · Max-width `68ch`
- **Eyebrow / Kicker (`.eyebrow`):** `0.75rem` (`12px`) · Uppercase · Letter-spacing `0.16em` · Weight `700`

---

## 4. Layout Grid, Spacing & Responsive Breakpoints

- **Container Max-Width:** `1320px` with fluid horizontal padding (`clamp(1.25rem, 4vw, 3rem)`).
- **Section Vertical Rhythm:** `clamp(4rem, 7vw, 6.5rem)` (`--space-24` desktop, compacting gracefully on mobile).
- **Card Architecture:**
  - `16px`–`24px` border radius (`--radius-lg` / `--radius-xl`)
  - `1px solid var(--hp-border)` crisp hairline border
  - Subtle ambient elevation (`0 10px 30px -10px rgba(8, 34, 30, 0.06)`)
  - Smooth hover lift (`translateY(-3px)`) disabled automatically when `@media (prefers-reduced-motion: reduce)` is active.
- **8 Mandatory QA Viewports:**
  - **Desktop:** `1440px`, `1280px`
  - **Tablet:** `1024px`, `768px`
  - **Mobile:** `430px`, `390px`, `375px`, `320px` (strictly `0px` horizontal overflow across all 8 widths).

---

## 5. Signature V3 Components

1. **V3 Architectural Header (`hp-navbar`):**
   - Left: Official HealthPlus Logo (`/assets/logo_hp.png`).
   - Center: `Home`, `About`, `Services` (with 11-specialty categorized mega-menu), `Physicians` (`/team/`), `Appointments` (`/book.html`), `Contact` (`/contact.html`).
   - Right Action Zone: Direct clickable telephone pill (`(403) 455-6656`) + high-contrast `Book Online` button (`https://healthplusmedical.inputhealth.com/`).
   - Mobile (`<= 1024px`): Full-height accessible drawer with direct tap-to-call, walk-in hours badge, and accordion service links.
2. **Homepage Signature Split Hero:**
   - Left editorial column on deep obsidian-teal (`#071F1B` → `#0D4E47`) with Midnapore location badge, serif display headline, and 3 structured Patient Access cards (*24/7 Online Self-Booking*, *Reception Call / Callback*, *Family Physician Meet & Greet*).
   - Right architectural photography showcase featuring real Nikon D7500 photography of HealthPlus Midnapore (`DSC_0848` reception & clinical team) with a live clinic hours & walk-in status card.
3. **Interactive Physician Finder & Filterable Team Directory:**
   - Instant category filter tabs (*All Team (24)*, *Family Physicians (10)*, *Specialist Consultants (6)*, *Clinic Leadership & Support (8)*) + live search by name, specialty, or language/interest.
   - Uniform `4:5` (`800×1000` desktop / `480×600` mobile) WebP portraits with `object-position: center top`, credential pills, 2-column accessible quick-view modal, AND direct links to full `team/dr-*.html` profile pages.
4. **Unified Clinical Service Page Template (`services/*.html`):**
   - Replaces gimmicky dark SVG pulse animations with an authentic clinical split hero, Care Access badge (*Direct Booking & Walk-In* vs. *Physician Referral Required*), AHCIP coverage verification pill, Conditions Treated grid, What to Expect & Preparation guide, **Verified HealthPlus Physicians Offering This Service**, interactive FAQ accordion, and Related Services.
