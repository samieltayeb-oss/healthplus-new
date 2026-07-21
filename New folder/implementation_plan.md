# Services Architecture Implementation Plan

This plan outlines the approach to building the HealthPlus Medical V2 Services ecosystem as requested. 

## Proposed Changes

### 1. Centralized Data Source (`config/services.js`)
We will create a pure JavaScript configuration file containing the `hpServices` array. This will act as the single source of truth for all service information (metadata, slugs, descriptions, icons, features).

**Why this approach?**
- Allows us to maintain one file for content updates.
- Keeps the architecture 100% vanilla (no React, Next.js, etc.).
- Can be easily loaded into any page to dynamically render the navigation dropdown, related services, or homepage cards via a lightweight script.

### 2. Client-Side Rendering Script (`js/hp-services-renderer.js`)
A lightweight, vanilla JS script that reads from `config/services.js` to automatically inject:
1. The dropdown menu links in the main navigation.
2. The featured service cards on the Homepage.
3. The full grid of 11 service cards on the Services Directory page.
4. The "Related Services" cards at the bottom of individual service pages.

*Note: Individual service pages will have their core content hardcoded in HTML for perfect SEO, while peripheral elements (like the navigation and related services footer) will be populated by this script.*

### 3. Services Directory (`pages/services/index.html`)
A new premium index page featuring:
- A clean Hero section with an introductory trust statement.
- A dynamically generated grid of all 11 service cards (using the renderer script).
- A "Why choose HealthPlus" section.
- Clear routing to the booking flow and human handoff.

### 4. 11 Individual Service Pages (`pages/services/*.html`)
We will create 11 distinct static HTML files (e.g., `family-medicine.html`, `walk-in-clinic.html`).
Each page will follow a strict, reusable architecture:
- **SEO Elements**: Unique titles, descriptions, canonical URLs, and Open Graph tags.
- **Hero Area**: Specific to the service, with a placeholder hero image (e.g., `assets/images/services/family-medicine.webp`).
- **Core Content**: Custom-written, empathetic, and professional copy (Who it's for, What to expect, Preparation, FAQ).
- **Navigation & Breadcrumbs**: Proper internal linking.
- **Booking CTAs**: Sticky or prominent appointment links.

### 5. Content Generation Strategy
I will write entirely new copy for all 11 pages, ensuring the tone is warm, professional, and accessible. No guaranteed outcomes, overly technical jargon, or "world-class" fluff will be used. The copy will be tailored strictly to HealthPlus Medical's brand identity.

### 6. Adjustments to Existing Files
- **`index.html`**: Will be updated to include the `config/services.js` and `js/hp-services-renderer.js` scripts, replacing the current static services grid with a dynamic one featuring 6 curated services and a "View All Services" link. The navigation will be updated to include a "Services" dropdown.
- **`css/hp-premium.css`**: Will receive new styles for the service cards, breadcrumbs, and directory layout, adhering strictly to the established design system tokens.

## Verification Plan

1. **Routing & Links**: Ensure all 11 pages are reachable from the homepage and directory, and that no dead links exist.
2. **SEO & Accessibility**: Validate heading hierarchy (single H1), meta tags, alt text, and keyboard navigability across the new pages.
3. **Responsiveness**: Verify the directory grid and service page layouts down to 320px and up to 1440px.
4. **Data Injection**: Confirm the `hp-services-renderer.js` correctly populates the nav, homepage, and related services without layout shifts.

## User Review Required

> [!IMPORTANT]
> The plan proposes using **Client-Side Rendering (Vanilla JS)** for the Homepage service cards, the Services Directory grid, and the Navigation Dropdown. The 11 individual pages will still have fully hardcoded HTML content for their specific copy to ensure perfect SEO. 
> 
> Are you comfortable with client-side rendering for the *lists/menus* of services, or would you prefer everything to be 100% hardcoded HTML (which would mean manually updating the navigation on all 13+ pages if a service is added later)?
