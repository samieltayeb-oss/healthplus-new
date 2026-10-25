import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const require = createRequire(import.meta.url);
export const siteConfig = require('../config/site.js');
export const services = require('../config/services.js');
export const teamMembers = require('../config/team.js');

export const JOTFORM_APPOINTMENT_URL = 'https://form.jotform.com/sehamanagementinv/-appointment-request-form';
export const JOTFORM_CALLBACK_URL = 'https://form.jotform.com/sehamanagementinv/call-back-request-form';

export const serviceHeroPhotos = {
  'family-medicine': 'DSC_0808_NANO',
  'walk-in-clinic': 'DSC_0817_NANO',
  'internal-medicine': 'DSC_0838_NANO',
  'mental-health': 'DSC_0810_NANO',
  'mva-care': 'DSC_0830_NANO',
  'obstetrics-gynecology': 'DSC_0828_NANO',
  'pediatric-care': 'DSC_0814_NANO',
  'sports-medicine': 'DSC_0834_NANO',
  'virtual-care': 'DSC_0826_NANO',
  'womens-health': 'DSC_0820_NANO',
  'concussion-care': 'DSC_0840_NANO'
};

export const serviceHeroAlts = {
  'family-medicine': 'Modern physician consultation and examination room at HealthPlus by SEHA Medical',
  'walk-in-clinic': 'Wide view of the pristine clinical hallways at HealthPlus by SEHA Medical',
  'internal-medicine': 'State-of-the-art examination suite with precision medical equipment at HealthPlus',
  'mental-health': 'Calm and private mental health consultation room at HealthPlus Medical',
  'mva-care': 'Adult patient discussing recovery in MVA care suite at HealthPlus',
  'obstetrics-gynecology': 'Physician reviewing chart with patient in Obstetrics and Gynecology suite',
  'pediatric-care': 'Bright and welcoming pediatric care and family area at HealthPlus',
  'sports-medicine': 'Active adult consulting with sports medicine clinician at HealthPlus',
  'virtual-care': 'Physician participating in telehealth virtual care consultation',
  'womens-health': 'Private consultation and women\'s health suite at HealthPlus Midnapore',
  'concussion-care': 'Clinician performing non-invasive concussion assessment at HealthPlus'
};

export function renderHead({ title, description, canonical, ogImage, robots = 'index, follow', depth = 0, jsonLd = [] }) {
  const prefix = depth === 0 ? '' : '../';
  const ldBlocks = (Array.isArray(jsonLd) ? jsonLd : [jsonLd]).filter(Boolean).map(obj =>
    `  <script type="application/ld+json">\n${JSON.stringify(obj, null, 2)}\n  </script>`
  ).join('\n');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <meta name="description" content="${description.replace(/"/g, '&quot;')}">
  <meta name="robots" content="${robots}">
  <link rel="canonical" href="${canonical}">
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png">
  <link rel="icon" type="image/x-icon" href="/favicon.ico">
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  <meta property="og:title" content="${title.replace(/"/g, '&quot;')}">
  <meta property="og:description" content="${description.replace(/"/g, '&quot;')}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${ogImage || 'https://healthplusmed.ca/assets/images/global/social-share.png'}">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="${prefix}css/hp-premium.css">
${ldBlocks}
</head>`;
}

export function renderHeader(activeSection = 'home', depth = 0) {
  const p = depth === 0 ? '' : '../';
  const megaItems = services.map(s => `
              <a href="/services/${s.slug}.html" class="v3-mega-item">
                <div class="v3-mega-icon">${s.icon}</div>
                <div>
                  <span class="v3-mega-title">${s.title}</span>
                  <span class="v3-mega-cat">${s.category}</span>
                </div>
              </a>`).join('');

  return `
<!-- ═══════════════════════════════════════════════════════════════
     GLOBAL TOPBAR & ARCHITECTURAL HEADER (HEALTHPLUS V3)
═══════════════════════════════════════════════════════════════ -->
<div class="v3-topbar" role="region" aria-label="Clinic Status and Location">
  <div class="container v3-topbar-inner">
    <div class="v3-topbar-left">
      <span class="v3-status-pill" data-clinic-status>
        <span class="v3-status-dot"></span>
        <span data-status-text>Open Mon–Sat · Walk-Ins &amp; New Patients Welcome</span>
      </span>
      <span>📍 100-290 Midpark Way SE, Midnapore, Calgary, AB T2X 1P1</span>
    </div>
    <div class="v3-topbar-right">
      <a href="tel:4034556656">📞 (403) 455-6656</a>
      <span>·</span>
      <a href="${JOTFORM_CALLBACK_URL}" target="_blank" rel="noopener">Request Call-Back ↗</a>
      <span>·</span>
      <a href="${JOTFORM_APPOINTMENT_URL}" target="_blank" rel="noopener">Request Appointment Online ↗</a>
    </div>
  </div>
</div>

<header class="v3-header">
  <div class="container v3-header-inner">
    <a href="/index.html" class="v3-brand" aria-label="HealthPlus by SEHA Medical Home">
      <img src="${p}assets/logo_hp.png" alt="HealthPlus by SEHA Medical" width="180" height="46">
    </a>

    <nav class="v3-nav" aria-label="Primary Navigation">
      <ul class="v3-nav-list" role="list">
        <li class="v3-nav-item">
          <a href="/index.html" class="v3-nav-link ${activeSection === 'home' ? 'active' : ''}">Home</a>
        </li>
        <li class="v3-nav-item">
          <a href="/about/" class="v3-nav-link ${activeSection === 'about' ? 'active' : ''}">About</a>
        </li>
        <li class="v3-nav-item">
          <a href="/services/" class="v3-nav-link ${activeSection === 'services' ? 'active' : ''}" aria-haspopup="true">
            <span>Services</span>
            <svg class="v3-nav-chevron" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"/></svg>
          </a>
          <!-- HP_SERVICES_NAV_START -->
          <div class="v3-mega-menu" role="region" aria-label="Medical Services Directory">
            <div class="v3-mega-header">
              <span class="v3-mega-kicker">Midnapore Clinical Specialties (11 Services)</span>
              <a href="/services/" class="v3-mega-all">Explore All 11 Specialties →</a>
            </div>
            <div class="v3-mega-grid">${megaItems}
            </div>
            <div class="v3-mega-footer">
              <div class="v3-mega-footer-note">
                <span class="v3-status-dot"></span>
                <span>Accepting New Family Practice Patients, Same-Day Walk-Ins &amp; Specialist Referrals</span>
              </div>
              <div style="display:flex;gap:10px;align-items:center;">
                <a href="/services/womens-health-iud-clinic-calgary.html" class="btn btn-sm btn-secondary">Women's &amp; IUD Clinic</a>
                <a href="${JOTFORM_APPOINTMENT_URL}" target="_blank" rel="noopener" class="btn btn-sm btn-primary">Book Online →</a>
              </div>
            </div>
          </div>
          <!-- HP_SERVICES_NAV_END -->
        </li>
        <li class="v3-nav-item">
          <a href="/team/" class="v3-nav-link ${activeSection === 'team' ? 'active' : ''}">Physicians</a>
        </li>
        <li class="v3-nav-item">
          <a href="/book.html" class="v3-nav-link ${activeSection === 'book' ? 'active' : ''}">Appointments</a>
        </li>
        <li class="v3-nav-item">
          <a href="/faq.html" class="v3-nav-link ${activeSection === 'faq' ? 'active' : ''}">FAQ</a>
        </li>
        <li class="v3-nav-item">
          <a href="/contact.html" class="v3-nav-link ${activeSection === 'contact' ? 'active' : ''}">Contact</a>
        </li>
      </ul>
    </nav>

    <div class="v3-header-actions">
      <a href="tel:4034556656" class="v3-phone-pill" aria-label="Call HealthPlus Reception at 403-455-6656">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.864-1.051l-3.213-.535a2.25 2.25 0 00-2.237.615l-1.52 1.52a14.122 14.122 0 01-6.578-6.578l1.52-1.52a2.25 2.25 0 00.615-2.237l-.535-3.213C7.716 2.601 7.266 2.25 6.75 2.25H5.378A2.25 2.25 0 003.15 4.312 15.91 15.91 0 002.25 6.75z"/></svg>
        <span>(403) 455-6656</span>
      </a>
      <a href="${JOTFORM_APPOINTMENT_URL}" target="_blank" rel="noopener" class="btn btn-primary btn-sm">
        <span>Book Online</span>
        <svg width="15" height="15" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd"/></svg>
      </a>
      <button class="v3-mobile-toggle" aria-label="Toggle navigation menu" aria-expanded="false">
        <span class="v3-hamburger-lines">
          <span></span><span></span><span></span>
        </span>
      </button>
    </div>
  </div>
</header>

<div class="v3-mobile-drawer" aria-label="Mobile Navigation Drawer">
  <div class="v3-mobile-nav-list">
    <a href="/index.html" class="v3-mobile-nav-link"><span>Home</span><span>→</span></a>
    <a href="/about/" class="v3-mobile-nav-link"><span>About HealthPlus</span><span>→</span></a>
    <a href="/services/" class="v3-mobile-nav-link"><span>All 11 Medical Services</span><span>→</span></a>
    <div class="v3-mobile-subgrid">
      ${services.map(s => `<a href="/services/${s.slug}.html" class="v3-mobile-sublink">${s.title}</a>`).join('\n      ')}
      <a href="/services/womens-health-iud-clinic-calgary.html" class="v3-mobile-sublink">Women's &amp; IUD Clinic</a>
    </div>
    <a href="/team/" class="v3-mobile-nav-link"><span>Physicians &amp; Medical Team (24)</span><span>→</span></a>
    <a href="/book.html" class="v3-mobile-nav-link"><span>Appointments &amp; Walk-In Info</span><span>→</span></a>
    <a href="/faq.html" class="v3-mobile-nav-link"><span>Patient FAQ</span><span>→</span></a>
    <a href="/contact.html" class="v3-mobile-nav-link"><span>Contact, Hours &amp; Directions</span><span>→</span></a>
  </div>
  <div class="v3-mobile-cta-stack">
    <a href="${JOTFORM_APPOINTMENT_URL}" target="_blank" rel="noopener" class="btn btn-primary btn-lg" style="width:100%;">Request Appointment Online →</a>
    <a href="${JOTFORM_CALLBACK_URL}" target="_blank" rel="noopener" class="btn btn-secondary btn-lg" style="width:100%;">Request Call-Back →</a>
    <a href="tel:4034556656" class="btn btn-outline-teal btn-lg" style="width:100%;">Call Reception: (403) 455-6656</a>
  </div>
</div>`;
}

export function renderFooter(depth = 0, includeGoogleScript = false) {
  const p = depth === 0 ? '' : '../';
  return `
<!-- HP_FOOTER_START -->
<footer class="v3-footer">
  <div class="container">
    <div class="v3-footer-banner">
      <div class="v3-footer-banner-left">
        <div class="v3-footer-banner-icon" aria-hidden="true">
          <svg width="26" height="26" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"/></svg>
        </div>
        <div>
          <h3>Accepting New Family Practice Patients &amp; Walk-Ins</h3>
          <p>100-290 Midpark Way SE, Midnapore, Calgary · Family Medicine, Walk-In &amp; 5 In-House Specialist Clinics</p>
        </div>
      </div>
      <div style="display:flex;gap:12px;flex-wrap:wrap;">
        <a href="tel:4034556656" class="btn btn-ghost-light">Call (403) 455-6656</a>
        <a href="${JOTFORM_CALLBACK_URL}" target="_blank" rel="noopener" class="btn btn-ghost-light">Request Call-Back ↗</a>
        <a href="${JOTFORM_APPOINTMENT_URL}" target="_blank" rel="noopener" class="btn btn-teal-glow">Request Appointment Online →</a>
      </div>
    </div>

    <div class="v3-footer-grid">
      <div class="v3-footer-brand">
        <a href="/index.html" aria-label="HealthPlus Medical Home">
          <img src="${p}assets/logo_hp.png" alt="HealthPlus by SEHA Medical" width="190" height="48">
        </a>
        <p>Delivering compassionate, evidence-based family medicine, walk-in care, and integrated specialist consultations for South Calgary and surrounding communities.</p>
        <div class="v3-footer-accred">
          <span class="v3-status-dot"></span>
          <span>Accredited Alberta Medical Facility · AHCIP Insured</span>
        </div>
      </div>

      <div class="v3-footer-col">
        <h4>Primary &amp; Urgent Care</h4>
        <ul class="v3-footer-links">
          <li><a href="/services/family-medicine.html">Family Medicine</a></li>
          <li><a href="/services/walk-in-clinic.html">Walk-In Medical Clinic</a></li>
          <li><a href="/services/womens-health.html">Women's Health Clinic</a></li>
          <li><a href="/services/womens-health-iud-clinic-calgary.html">Contraception &amp; IUD Clinic</a></li>
          <li><a href="/services/virtual-care.html">Virtual Care &amp; Telehealth</a></li>
          <li><a href="/services/mva-care.html">Motor Vehicle Accident (MVA)</a></li>
          <li><a href="/services/concussion-care.html">Complete Concussions™ Care</a></li>
        </ul>
      </div>

      <div class="v3-footer-col">
        <h4>Specialist &amp; Patient Hub</h4>
        <ul class="v3-footer-links">
          <li><a href="/services/obstetrics-gynecology.html">Obstetrics &amp; Gynecology</a></li>
          <li><a href="/services/pediatric-care.html">Pediatric Specialist Care</a></li>
          <li><a href="/services/internal-medicine.html">Internal Medicine &amp; ID</a></li>
          <li><a href="/services/mental-health.html">Mental Health &amp; Psychiatry</a></li>
          <li><a href="/services/sports-medicine.html">Sport &amp; Exercise Medicine</a></li>
          <li><a href="/team/">Our 16 Physicians &amp; Team</a></li>
          <li><a href="${JOTFORM_APPOINTMENT_URL}" target="_blank" rel="noopener">Appointment Request Form ↗</a></li>
          <li><a href="${JOTFORM_CALLBACK_URL}" target="_blank" rel="noopener">Request Call-Back Form ↗</a></li>
          <li><a href="https://search.google.com/local/writereview?placeid=ChIJm-3P4A2wcVMRq4lXW_m9L3M" target="_blank" rel="noopener" style="color:#FCD34D;font-weight:600;">★ Leave a Google Review</a></li>
        </ul>
      </div>

      <div class="v3-footer-col">
        <div class="v3-footer-hours-card">
          <h4>Midnapore Clinic Hours</h4>
          <div class="v3-footer-hours-row">
            <span>Monday – Thursday</span>
            <strong>9:00 AM – 6:30 PM</strong>
          </div>
          <div class="v3-footer-hours-row">
            <span>Friday</span>
            <strong>9:00 AM – 4:30 PM</strong>
          </div>
          <div class="v3-footer-hours-row">
            <span>Saturday</span>
            <strong>10:00 AM – 2:00 PM</strong>
          </div>
          <div class="v3-footer-hours-row">
            <span>Sunday &amp; Stat Holidays</span>
            <strong class="closed">Closed</strong>
          </div>
          <p class="v3-footer-address">
            📍 <strong>100-290 Midpark Way SE</strong><br>
            Calgary, AB T2X 1P1 · Free Surface Parking<br>
            Tel: <a href="tel:4034556656" style="color:#97E2DC;">(403) 455-6656</a> · Fax: (403) 648-1876
          </p>
          <a href="${JOTFORM_APPOINTMENT_URL}" target="_blank" rel="noopener" class="btn btn-primary btn-sm" style="width:100%;">Request Appointment Online →</a>
        </div>
      </div>
    </div>
  </div>

  <div class="v3-footer-bottom">
    <div class="container v3-footer-bottom-inner">
      <p>&copy; 2026 HealthPlus by SEHA Medical. All rights reserved. 100-290 Midpark Way SE, Calgary, Alberta T2X 1P1.</p>
      <p>Part of the <a href="https://sehamedical.ca" target="_blank" rel="noopener">SEHA Medical Network</a> · Digital Experience by <a href="https://nexorayyc.io" target="_blank" rel="noopener">Nexora</a></p>
    </div>
  </div>
</footer>
<!-- HP_FOOTER_END -->
<script src="${p}js/hp-core.js"></script>${includeGoogleScript ? `\n<script src="${p}js/hp-google-profile.js"></script>` : ''}
</body>
</html>`;
}

export function renderTeamCard(member, options = { showModalTrigger: true }) {
  const isStaff = member.category === 'Staff';
  const fullName = isStaff ? `${member.firstName} ${member.lastName}` : `Dr. ${member.firstName} ${member.lastName}`;
  const catBadgeClass = member.category === 'Specialists' ? 'specialist' : isStaff ? 'staff' : '';
  const catLabel = member.category === 'Specialists' ? 'Specialist Consultant' : isStaff ? 'Clinic Leadership & Support' : 'Family Physician';
  const modalId = `modal-${member.id}`;
  const focusTags = (member.focusAreas || []).slice(0, 3).map(t => `<span class="v3-focus-tag">${t}</span>`).join('');
  const searchTerms = `${fullName} ${member.role} ${member.credentials || ''} ${(member.focusAreas || []).join(' ')} ${member.shortBio || ''}`.toLowerCase();

  return `
      <article class="v3-team-card" data-team-card data-category="${member.category}" data-search="${searchTerms.replace(/"/g, '&quot;')}">
        <div class="v3-team-portrait">
          <span class="v3-team-cat-badge ${catBadgeClass}">${catLabel}</span>
          <picture>
            <source media="(max-width: 640px)" srcset="/${member.photoMobile || member.photo}">
            <img src="/${member.photo}" alt="${fullName} — ${member.role} at HealthPlus by SEHA Medical" width="800" height="1000" loading="lazy" decoding="async">
          </picture>
        </div>
        <div class="v3-team-body">
          <div class="v3-team-role">${member.role}</div>
          <h3 class="v3-team-name">${fullName}</h3>
          <div class="v3-team-creds">${member.credentials || ''}</div>
          <p class="v3-team-bio">${member.shortBio || member.bio}</p>
          ${focusTags ? `<div class="v3-team-focus-tags">${focusTags}</div>` : ''}
          ${!isStaff ? `
          <div class="v3-team-actions">
            ${options.showModalTrigger
              ? `<button type="button" onclick="openModal('${modalId}')" class="btn btn-secondary btn-sm">Full Biography</button>`
              : `<a href="/team/${member.slug}.html" class="btn btn-secondary btn-sm">Full Profile</a>`
            }
            <a href="${JOTFORM_APPOINTMENT_URL}" target="_blank" rel="noopener" class="btn btn-primary btn-sm">${member.category === 'Specialists' ? 'Referral / Request' : 'Book Visit'}</a>
          </div>` : ''}
        </div>
      </article>`;
}

export function renderTeamModal(member) {
  if (member.category === 'Staff') return '';
  const fullName = `Dr. ${member.firstName} ${member.lastName}`;
  const modalId = `modal-${member.id}`;
  const paragraphs = (member.bio || '').split('\n\n').filter(Boolean).map(p => `<p>${p.replace(/•\s*/g, '')}</p>`).join('');
  const focusTags = (member.focusAreas || []).map(t => `<span class="v3-focus-tag">${t}</span>`).join('');
  const isSpecialist = member.category === 'Specialists';

  return `
  <div id="${modalId}" class="v3-modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="${modalId}-title" style="display:none;">
    <div class="v3-modal-dialog">
      <button type="button" class="v3-modal-close" onclick="closeModal('${modalId}')" aria-label="Close biography modal">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
      <div class="v3-modal-grid">
        <div class="v3-modal-photo">
          <img src="/${member.photo}" alt="${fullName}" width="800" height="1000" loading="lazy" decoding="async">
        </div>
        <div class="v3-modal-content">
          <div class="v3-team-role">${member.role}</div>
          <h2 id="${modalId}-title" class="v3-team-name" style="font-size:1.85rem;margin-bottom:4px;">${fullName}</h2>
          <div class="v3-team-creds" style="margin-bottom:16px;">${member.credentials || ''}</div>
          <div class="v3-team-focus-tags" style="margin-bottom:20px;">${focusTags}</div>
          <div class="v3-prose" style="margin-bottom:24px;">
            ${paragraphs}
          </div>
          <div class="v3-privacy-notice" style="margin-bottom:20px;">
            <strong>Clinic Location &amp; Access:</strong> HealthPlus by SEHA Medical · 100-290 Midpark Way SE, Calgary, AB T2X 1P1 · ${isSpecialist ? 'Specialist consultations are scheduled by physician referral. Ask your family or walk-in doctor to refer to HealthPlus Midnapore.' : 'Accepting appointments and Meet &amp; Greet consultations via online appointment request or reception.'}
          </div>
          <div style="display:flex;gap:12px;flex-wrap:wrap;">
            <a href="${JOTFORM_APPOINTMENT_URL}" target="_blank" rel="noopener" class="btn btn-primary">Request Appointment Online →</a>
            <a href="${JOTFORM_CALLBACK_URL}" target="_blank" rel="noopener" class="btn btn-secondary">Request Call-Back ↗</a>
            <a href="tel:4034556656" class="btn btn-outline-teal">Call (403) 455-6656</a>
            <a href="/team/${member.slug}.html" class="btn btn-outline-teal">Dedicated Profile Page</a>
          </div>
        </div>
      </div>
    </div>
  </div>`;
}
