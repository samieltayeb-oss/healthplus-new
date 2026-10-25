import {
  siteConfig,
  services,
  teamMembers,
  serviceHeroPhotos,
  JOTFORM_APPOINTMENT_URL,
  JOTFORM_CALLBACK_URL,
  renderHead,
  renderHeader,
  renderFooter,
  renderTeamCard,
  renderTeamModal
} from './v3-components.mjs';

export function buildHomePage() {
  const head = renderHead({
    title: 'HealthPlus Medical | Primary, Walk-In & Specialist Care in Midnapore, Calgary',
    description: 'HealthPlus by SEHA Medical provides comprehensive family medicine, walk-in care, women\'s health, pediatrics, internal medicine, psychiatry, and sports medicine at 100-290 Midpark Way SE, Calgary.',
    canonical: 'https://healthplusmed.ca/',
    ogImage: 'https://healthplusmed.ca/assets/images/global/social-share.png',
    depth: 0,
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'MedicalClinic',
        '@id': 'https://healthplusmed.ca/#clinic',
        name: 'HealthPlus by SEHA Medical',
        alternateName: 'HealthPlus Medical',
        url: 'https://healthplusmed.ca/',
        logo: 'https://healthplusmed.ca/assets/logo_hp.png',
        image: 'https://healthplusmed.ca/assets/images/home/home-hero.png',
        description: 'Comprehensive family medicine, walk-in care, and integrated medical specialists in Midnapore, Calgary, Alberta.',
        telephone: '+1-403-455-6656',
        faxNumber: '+1-403-648-1876',
        email: 'admin@healthplusmed.ca',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '100-290 Midpark Way SE',
          addressLocality: 'Calgary',
          addressRegion: 'AB',
          postalCode: 'T2X 1P1',
          addressCountry: 'CA'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 50.9098,
          longitude: -114.0631
        },
        openingHoursSpecification: [
          { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], opens: '09:00', closes: '18:30' },
          { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Friday'], opens: '09:00', closes: '16:30' },
          { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '10:00', closes: '14:00' }
        ],
        medicalSpecialty: [
          'Family Medicine',
          'Walk-In Clinic',
          'Internal Medicine',
          'Obstetrics and Gynecology',
          'Pediatrics',
          'Psychiatry',
          'Sports Medicine'
        ],
        isAcceptingNewPatients: true
      }
    ]
  });

  const serviceCardsHtml = services.map(s => {
    const isReferral = ['internal-medicine', 'obstetrics-gynecology'].includes(s.slug);
    return `
        <article class="v3-service-card">
          <div class="v3-service-card-top">
            <div class="v3-service-icon">${s.icon}</div>
            <span class="v3-service-cat">${isReferral ? 'Referral Specialist' : s.category}</span>
          </div>
          <h3>${s.title}</h3>
          <p>${s.shortDescription}</p>
          <a href="/services/${s.slug}.html" class="v3-service-link" aria-label="Explore ${s.title} at HealthPlus Midnapore">
            <span>Explore ${s.title}</span>
            <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd"/></svg>
          </a>
        </article>`;
  }).join('');

  // Featured physicians on homepage (8 diverse physicians & specialists)
  const featuredSlugs = ['dr-6', 'dr-8', 'dr-0', 'dr-2', 'dr-4', 'dr-14', 'dr-13', 'dr-5'];
  const featuredDocs = featuredSlugs.map(slug => teamMembers.find(m => m.slug === slug)).filter(Boolean);
  const featuredDocCards = featuredDocs.map(m => renderTeamCard(m, { showModalTrigger: true })).join('');
  const featuredDocModals = featuredDocs.map(m => renderTeamModal(m)).join('');

  return `${head}
<body>
${renderHeader('home', 0)}

<main>
  <!-- ═══════════════════════════════════════════════════════════════
       1. HERO SECTION — THE MODERN CARE EXPERIENCE
  ═══════════════════════════════════════════════════════════════ -->
  <section class="v3-hero">
    <div class="container">
      <div class="v3-hero-grid">
        <div class="v3-hero-copy">
          <div class="v3-hero-badges">
            <span class="v3-hero-badge primary">
              <span class="v3-status-dot"></span>
              <span>Accepting New Patients &amp; Walk-Ins</span>
            </span>
            <span class="v3-hero-badge">Midnapore · SE Calgary</span>
            <span class="v3-hero-badge">AHCIP Insured Care</span>
          </div>

          <h1>Modern Family Medicine &amp; Specialist Care, <em>Designed Around You.</em></h1>
          <p class="v3-hero-lead">
            Welcome to HealthPlus by SEHA Medical in Midnapore. We bring together <strong>11 Family Physicians</strong>, a responsive <strong>Same-Day Walk-In Clinic</strong>, and <strong>5 In-House Specialist Consultants</strong> under one calm, purpose-built medical roof in South Calgary.
          </p>

          <!-- 3 Primary Conversion Pathways -->
          <div class="v3-hero-actions-grid" role="group" aria-label="Patient Booking Options">
            <a href="${JOTFORM_APPOINTMENT_URL}" target="_blank" rel="noopener" class="v3-action-card primary-card">
              <div class="v3-action-card-top">
                <div class="v3-action-icon">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"/></svg>
                </div>
                <span class="v3-action-arrow">↗</span>
              </div>
              <div class="v3-action-title">Request Appointment</div>
              <p class="v3-action-desc">Complete our online appointment request form for family &amp; clinic visits.</p>
            </a>

            <a href="tel:4034556656" class="v3-action-card">
              <div class="v3-action-card-top">
                <div class="v3-action-icon">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.864-1.051l-3.213-.535a2.25 2.25 0 00-2.237.615l-1.52 1.52a14.122 14.122 0 01-6.578-6.578l1.52-1.52a2.25 2.25 0 00.615-2.237l-.535-3.213C7.716 2.601 7.266 2.25 6.75 2.25H5.378A2.25 2.25 0 003.15 4.312 15.91 15.91 0 002.25 6.75z"/></svg>
                </div>
                <span class="v3-action-arrow">→</span>
              </div>
              <div class="v3-action-title">Call (403) 455-6656</div>
              <p class="v3-action-desc">Speak directly with our Midnapore reception &amp; triage team.</p>
            </a>

            <a href="${JOTFORM_CALLBACK_URL}" target="_blank" rel="noopener" class="v3-action-card">
              <div class="v3-action-card-top">
                <div class="v3-action-icon">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"/></svg>
                </div>
                <span class="v3-action-arrow">↗</span>
              </div>
              <div class="v3-action-title">Request Call-Back</div>
              <p class="v3-action-desc">Have our clinic team call you back to schedule your visit or Meet &amp; Greet.</p>
            </a>
          </div>
        </div>

        <div class="v3-hero-visual">
          <div class="v3-hero-frame">
            <img src="/assets/images/home/home-hero.png" alt="HealthPlus by SEHA Medical Clinic Team and Facility in Midnapore, Calgary" width="1200" height="900" fetchpriority="high" decoding="async">
            <div class="v3-hero-floating-card">
              <div class="v3-hero-floating-left">
                <strong>100-290 Midpark Way SE, Calgary</strong>
                <span>Mon–Thu 9:00–6:30 · Fri 9:00–4:30 · Sat 10:00–2:00</span>
              </div>
              <div class="v3-hero-stat-pill">16 Physicians · 11 Specialties</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Trust Bar -->
      <div class="v3-trust-bar">
        <div class="v3-trust-item">
          <div class="v3-trust-icon">
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          </div>
          <div>
            <strong>11 Family Physicians</strong>
            <span>CCFP &amp; MRCGP certified primary care</span>
          </div>
        </div>
        <div class="v3-trust-item">
          <div class="v3-trust-icon">
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"/></svg>
          </div>
          <div>
            <strong>5 In-House Specialists</strong>
            <span>OB/GYN, Pediatrics, Internal Med, Psychiatry &amp; Sport Med</span>
          </div>
        </div>
        <div class="v3-trust-item">
          <div class="v3-trust-icon">
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          </div>
          <div>
            <strong>Open 6 Days a Week</strong>
            <span>Walk-in &amp; scheduled care Mon–Sat</span>
          </div>
        </div>
        <div class="v3-trust-item">
          <div class="v3-trust-icon">
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/></svg>
          </div>
          <div>
            <strong>Free Surface Parking</strong>
            <span>Suite 100, 290 Midpark Way SE</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ═══════════════════════════════════════════════════════════════
       2. CLINIC INTRODUCTION — REINVENTING COMMUNITY MEDICAL CARE
  ═══════════════════════════════════════════════════════════════ -->
  <section class="v3-section">
    <div class="container">
      <div class="v3-intro-split">
        <div>
          <span class="v3-eyebrow">HealthPlus by SEHA Medical · Midnapore</span>
          <h2 class="v3-section-title">One Connected Medical Home for Every Stage of Life.</h2>
          <p class="v3-section-lead" style="margin-bottom:20px;">
            HealthPlus Medical was reinvented under SEHA Medical leadership with a clear clinical mission: to eliminate the fragmentation between everyday family medicine, urgent walk-in care, and specialist consultations.
          </p>
          <p style="color:var(--hp-text-muted);line-height:1.75;">
            When your family physician practices in the same clinic as your Obstetrician-Gynecologist, Pediatrician, Internist, Consultant Psychiatrist, and Sport Medicine Specialist, referrals happen smoothly, diagnostic records stay unified, and your care feels personal.
          </p>
          <div class="v3-intro-metrics">
            <div class="v3-metric-box">
              <div class="v3-metric-num">16</div>
              <div class="v3-metric-label">Licensed Physicians &amp; Specialists on Our Active Roster</div>
            </div>
            <div class="v3-metric-box">
              <div class="v3-metric-num">11</div>
              <div class="v3-metric-label">Integrated Primary, Urgent &amp; Specialty Care Programs</div>
            </div>
            <div class="v3-metric-box">
              <div class="v3-metric-num">100%</div>
              <div class="v3-metric-label">AHCIP Insured Medically Necessary Physician Visits</div>
            </div>
            <div class="v3-metric-box">
              <div class="v3-metric-num">6 Days</div>
              <div class="v3-metric-label">Monday through Saturday Extended &amp; Walk-In Access</div>
            </div>
          </div>
        </div>
        <div class="v3-intro-mosaic">
          <div class="v3-mosaic-img tall">
            <picture>
              <source media="(max-width: 768px)" srcset="/assets/images/clinic-nano/mobile/DSC_0848_NANO_mob.webp">
              <img src="/assets/images/clinic-nano/desktop/DSC_0848_NANO_desk.webp" alt="Main Reception &amp; Patient Welcome Desk at HealthPlus Medical" width="800" height="1000" loading="lazy" decoding="async">
            </picture>
          </div>
          <div class="v3-mosaic-img">
            <picture>
              <source media="(max-width: 768px)" srcset="/assets/images/clinic-nano/mobile/DSC_0817_NANO_mob.webp">
              <img src="/assets/images/clinic-nano/desktop/DSC_0817_NANO_desk.webp" alt="Physician and nurse entering an equipped clinical examination room at HealthPlus Midnapore" width="800" height="600" loading="lazy" decoding="async">
            </picture>
          </div>
          <div class="v3-mosaic-img">
            <picture>
              <source media="(max-width: 768px)" srcset="/assets/images/clinic-nano/mobile/DSC_0823_NANO_mob.webp">
              <img src="/assets/images/clinic-nano/desktop/DSC_0823_NANO_desk.webp" alt="Clinical Staff &amp; Triage Station at HealthPlus Medical" width="800" height="600" loading="lazy" decoding="async">
            </picture>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ═══════════════════════════════════════════════════════════════
       3. MEDICAL SERVICES SHOWCASE (ALL 11 VERIFIED SERVICES)
  ═══════════════════════════════════════════════════════════════ -->
  <section class="v3-section v3-section-alt">
    <div class="container">
      <div class="v3-section-header-row">
        <div>
          <span class="v3-eyebrow">Clinical Specialties &amp; Programs</span>
          <h2 class="v3-section-title">Comprehensive Primary, Walk-In &amp; Specialist Services</h2>
          <p class="v3-section-lead">Explore all 11 clinical services available at our Midnapore medical centre—from routine family check-ups and same-day walk-in care to referred specialist consultations.</p>
        </div>
        <a href="/services/" class="btn btn-secondary">View Full Services Directory →</a>
      </div>

      <!-- HP_FEATURED_SERVICES_START -->
      <div class="v3-services-grid">${serviceCardsHtml}
      </div>
      <!-- HP_FEATURED_SERVICES_END -->
    </div>
  </section>

  <!-- ═══════════════════════════════════════════════════════════════
       4. FIND THE RIGHT PHYSICIAN (INTERACTIVE DIRECTORY PREVIEW)
  ═══════════════════════════════════════════════════════════════ -->
  <section class="v3-section">
    <div class="container">
      <div class="v3-section-header-row">
        <div>
          <span class="v3-eyebrow">Our Medical Team · Verified CPSA Roster</span>
          <h2 class="v3-section-title">Meet Our Family Physicians &amp; Specialist Consultants</h2>
          <p class="v3-section-lead">Every physician at HealthPlus Medical brings rigorous clinical training, compassionate communication, and a commitment to long-term patient trust.</p>
        </div>
        <div style="display:flex;gap:12px;flex-wrap:wrap;">
          <a href="/team/" class="btn btn-primary">Meet All 24 Team Members →</a>
        </div>
      </div>

      <div class="v3-filter-bar" role="toolbar" aria-label="Filter Featured Physicians">
        <div class="v3-filter-tabs">
          <button type="button" class="v3-filter-btn active" data-team-filter="all">Featured Roster <span class="count">8</span></button>
          <button type="button" class="v3-filter-btn" data-team-filter="Physicians">Family Physicians</button>
          <button type="button" class="v3-filter-btn" data-team-filter="Specialists">Specialist Consultants</button>
        </div>
        <div style="font-size:var(--text-xs);color:var(--hp-text-muted);font-weight:600;">
          Click <strong>Full Biography</strong> on any portrait to review credentials &amp; clinical focus
        </div>
      </div>

      <div class="v3-team-grid">
        ${featuredDocCards}
      </div>

      <div style="text-align:center;margin-top:var(--space-10);">
        <a href="/team/" class="btn btn-secondary btn-lg">Explore Complete 24-Member Physician &amp; Clinical Team Directory →</a>
      </div>
    </div>
  </section>

  <!-- ═══════════════════════════════════════════════════════════════
       5. PATIENT PATHWAYS — HOW TO ACCESS CARE
  ═══════════════════════════════════════════════════════════════ -->
  <section class="v3-section v3-section-alt">
    <div class="container">
      <div class="v3-section-header center">
        <span class="v3-eyebrow">Clear Patient Pathways</span>
        <h2 class="v3-section-title">How to Book or Visit HealthPlus Midnapore</h2>
        <p class="v3-section-lead">Whether you are looking for a permanent family doctor, need same-day walk-in attention, or require a specialist consultation, we make your next step clear.</p>
      </div>

      <div class="v3-pathways-grid">
        <article class="v3-pathway-card">
          <div class="v3-pathway-step">01</div>
          <span class="v3-pathway-tag">Longitudinal Primary Care</span>
          <h3>New Family Practice Patients</h3>
          <p>Looking for a dedicated family physician in South Calgary? Several of our CCFP and MRCGP-certified family doctors are actively accepting new patients and families.</p>
          <ul class="v3-pathway-list">
            <li>
              <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"/></svg>
              <span>Schedule a structured <strong>Meet &amp; Greet Appointment</strong> online or by phone.</span>
            </li>
            <li>
              <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"/></svg>
              <span>Bring your valid Alberta Health Care (AHCIP) card and current medication list.</span>
            </li>
            <li>
              <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"/></svg>
              <span>Seamless care for infants, children, adults, and seniors.</span>
            </li>
          </ul>
          <a href="${JOTFORM_APPOINTMENT_URL}" target="_blank" rel="noopener" class="btn btn-primary" style="width:100%;">Request Meet &amp; Greet Online →</a>
        </article>

        <article class="v3-pathway-card">
          <div class="v3-pathway-step">02</div>
          <span class="v3-pathway-tag">Immediate Non-Emergency Care</span>
          <h3>Same-Day Walk-In Patients</h3>
          <p>Experiencing an unexpected illness, minor injury, infection, or urgent prescription renewal? Our walk-in clinic welcomes all patients—no prior registration required.</p>
          <ul class="v3-pathway-list">
            <li>
              <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"/></svg>
              <span>Walk in Monday–Saturday during clinic operating hours at 100-290 Midpark Way SE.</span>
            </li>
            <li>
              <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"/></svg>
              <span>Call <a href="tel:4034556656" style="color:var(--hp-teal-primary);font-weight:700;">(403) 455-6656</a> to check current walk-in availability.</span>
            </li>
            <li>
              <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"/></svg>
              <span>On-site lab requisitions, imaging referrals, and MVA/injury documentation.</span>
            </li>
          </ul>
          <a href="/services/walk-in-clinic.html" class="btn btn-secondary" style="width:100%;">Walk-In Clinic Details →</a>
        </article>

        <article class="v3-pathway-card">
          <div class="v3-pathway-step">03</div>
          <span class="v3-pathway-tag">In-House Specialty Consultations</span>
          <h3>Referred Specialist Patients</h3>
          <p>Our Midnapore facility hosts specialist consultants in <strong>Obstetrics &amp; Gynecology</strong>, <strong>Pediatrics</strong>, <strong>Internal Medicine &amp; Infectious Diseases</strong>, <strong>Psychiatry</strong>, and <strong>Sport Medicine</strong>.</p>
          <ul class="v3-pathway-list">
            <li>
              <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"/></svg>
              <span>Request a referral from a HealthPlus family/walk-in doctor or your external physician.</span>
            </li>
            <li>
              <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"/></svg>
              <span>Referring clinics can fax referrals directly to <strong>(403) 648-1876</strong>.</span>
            </li>
            <li>
              <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"/></svg>
              <span>Our specialist coordinator contacts you directly to confirm your appointment.</span>
            </li>
          </ul>
          <a href="/book.html" class="btn btn-secondary" style="width:100%;">Referral &amp; Booking Guide →</a>
        </article>
      </div>
    </div>
  </section>

  <!-- ═══════════════════════════════════════════════════════════════
       6. WOMEN'S HEALTH, CONTRACEPTION & FAMILY CARE SPOTLIGHT
  ═══════════════════════════════════════════════════════════════ -->
  <section class="v3-section" style="padding-top:0;">
    <div class="container">
      <div class="v3-spotlight">
        <div class="v3-spotlight-grid">
          <div class="v3-spotlight-copy">
            <span class="v3-eyebrow">Dedicated Clinical Program · Midnapore SE Calgary</span>
            <h2>Women's Health, Preventive Screening &amp; Contraception Clinic</h2>
            <p>
              From routine cervical screening (Pap tests) and contraception or IUD consultations to prenatal care and menopause management, HealthPlus offers confidential, trauma-informed care led by experienced female family physicians and our in-house Obstetrician-Gynecologist.
            </p>
            <div class="v3-spotlight-pills">
              <span class="v3-spotlight-pill">Pap &amp; Cervical Screening</span>
              <span class="v3-spotlight-pill">IUD &amp; Contraception Counseling</span>
              <span class="v3-spotlight-pill">Prenatal &amp; Postpartum Care</span>
              <span class="v3-spotlight-pill">Perimenopause &amp; Menopause</span>
              <span class="v3-spotlight-pill">In-House OB/GYN Specialist</span>
            </div>
            <div style="display:flex;gap:12px;flex-wrap:wrap;">
              <a href="/services/womens-health-iud-clinic-calgary.html" class="btn btn-teal-glow">Explore Women's &amp; IUD Clinic →</a>
              <a href="/services/obstetrics-gynecology.html" class="btn btn-ghost-light">Obstetrics &amp; Gynecology</a>
            </div>
          </div>

          <div class="v3-spotlight-Avatars">
            <a href="/team/dr-0.html" class="v3-spotlight-doc" style="text-decoration:none;">
              <img src="/assets/images/team-v3/mobile/dr-angela-vinturache.webp" alt="Dr. Angela Vinturache" width="60" height="75" loading="lazy">
              <div class="v3-spotlight-doc-info">
                <strong>Dr. Angela Vinturache, MD, PhD</strong>
                <span>Obstetrics &amp; Gynecology Specialist · Menopause, Prenatal &amp; Complex GYN</span>
              </div>
            </a>
            <a href="/team/dr-8.html" class="v3-spotlight-doc" style="text-decoration:none;">
              <img src="/assets/images/team-v3/mobile/dr-mehwish-hanif.webp" alt="Dr. Mehwish Hanif" width="60" height="75" loading="lazy">
              <div class="v3-spotlight-doc-info">
                <strong>Dr. Mehwish Hanif, MD, CCFP</strong>
                <span>Family Physician (UCalgary) · Women's Health, Contraception &amp; IUD Care</span>
              </div>
            </a>
            <a href="/team/dr-16.html" class="v3-spotlight-doc" style="text-decoration:none;">
              <img src="/assets/images/team-v3/mobile/dr-sidra-feroz.webp" alt="Dr. Sidra Feroz" width="60" height="75" loading="lazy">
              <div class="v3-spotlight-doc-info">
                <strong>Dr. Sidra Feroz, MBBS</strong>
                <span>Family Physician · Women's Health, Preventive &amp; Family Medicine</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ═══════════════════════════════════════════════════════════════
       7. REAL CLINIC PHOTOGRAPHY SHOWCASE
  ═══════════════════════════════════════════════════════════════ -->
  <section class="v3-section v3-section-alt">
    <div class="container">
      <div class="v3-section-header-row">
        <div>
          <span class="v3-eyebrow">Inside HealthPlus Midnapore</span>
          <h2 class="v3-section-title">A Calm, Purpose-Built Clinical Environment</h2>
          <p class="v3-section-lead">Explore our Midnapore medical centre at 100-290 Midpark Way SE—featuring bright reception lounges, private consultation suites, and modern diagnostic rooms.</p>
        </div>
        <a href="/about/" class="btn btn-secondary">Tour Our Facility →</a>
      </div>

      <div class="v3-gallery-grid">
        <figure class="v3-gallery-item span-6" style="margin:0;">
          <picture>
            <source media="(max-width: 768px)" srcset="/assets/images/clinic-nano/mobile/DSC_0848_NANO_mob.webp">
            <img src="/assets/images/clinic-nano/desktop/DSC_0848_NANO_desk.webp" alt="Main Patient Check-In &amp; Reception Desk at HealthPlus Medical" width="1200" height="675" loading="lazy" decoding="async">
          </picture>
          <figcaption class="v3-gallery-caption">Main Reception &amp; Patient Welcome Desk</figcaption>
        </figure>

        <figure class="v3-gallery-item span-6" style="margin:0;">
          <picture>
            <source media="(max-width: 768px)" srcset="/assets/images/clinic-nano/mobile/DSC_0845_NANO_mob.webp">
            <img src="/assets/images/clinic-nano/desktop/DSC_0845_NANO_desk.webp" alt="Patient Arrival at HealthPlus Medical" width="1200" height="675" loading="lazy" decoding="async">
          </picture>
          <figcaption class="v3-gallery-caption">Patient Arrival at HealthPlus Medical</figcaption>
        </figure>

        <figure class="v3-gallery-item span-4" style="margin:0;">
          <picture>
            <source media="(max-width: 768px)" srcset="/assets/images/clinic-nano/mobile/DSC_0811_NANO_mob.webp">
            <img src="/assets/images/clinic-nano/desktop/DSC_0811_NANO_desk.webp" alt="Physician welcoming a patient in the clinical hallway at HealthPlus Medical" width="800" height="500" loading="lazy" decoding="async">
          </picture>
          <figcaption class="v3-gallery-caption">Warm Physician &amp; Patient Welcome</figcaption>
        </figure>

        <figure class="v3-gallery-item span-4" style="margin:0;">
          <picture>
            <source media="(max-width: 768px)" srcset="/assets/images/clinic-nano/mobile/DSC_0821_NANO_mob.webp">
            <img src="/assets/images/clinic-nano/desktop/DSC_0821_NANO_desk.webp" alt="Compassionate Senior and Family Care at HealthPlus" width="800" height="500" loading="lazy" decoding="async">
          </picture>
          <figcaption class="v3-gallery-caption">Compassionate Senior &amp; Family Care</figcaption>
        </figure>

        <figure class="v3-gallery-item span-4" style="margin:0;">
          <picture>
            <source media="(max-width: 768px)" srcset="/assets/images/clinic-nano/mobile/DSC_0823_NANO_mob.webp">
            <img src="/assets/images/clinic-nano/desktop/DSC_0823_NANO_desk.webp" alt="Clinical Staff and Triage Station at HealthPlus Medical" width="800" height="500" loading="lazy" decoding="async">
          </picture>
          <figcaption class="v3-gallery-caption">Clinical Staff &amp; Triage Station</figcaption>
        </figure>
      </div>
    </div>
  </section>

  <!-- ═══════════════════════════════════════════════════════════════
       8. CLINIC INFORMATION, HOURS & DIRECTIONS
  ═══════════════════════════════════════════════════════════════ -->
  <section class="v3-section">
    <div class="container">
      <div class="v3-location-grid">
        <div class="v3-location-card">
          <span class="v3-eyebrow">Visit HealthPlus Midnapore</span>
          <h2 style="font-size:1.85rem;margin-bottom:8px;">Hours, Location &amp; Direct Contact</h2>
          <p style="color:var(--hp-text-muted);font-size:var(--text-sm);margin-bottom:20px;">
            Conveniently located off Macleod Trail &amp; Midpark Way SE in Midnapore, with free surface parking and step-free ground-floor access.
          </p>

          <div class="v3-info-list">
            <div class="v3-info-item">
              <div class="v3-info-icon">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/></svg>
              </div>
              <div>
                <strong>Clinic Address</strong>
                <span>100-290 Midpark Way SE, Calgary, AB T2X 1P1</span>
              </div>
            </div>

            <div class="v3-info-item">
              <div class="v3-info-icon">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.864-1.051l-3.213-.535a2.25 2.25 0 00-2.237.615l-1.52 1.52a14.122 14.122 0 01-6.578-6.578l1.52-1.52a2.25 2.25 0 00.615-2.237l-.535-3.213C7.716 2.601 7.266 2.25 6.75 2.25H5.378A2.25 2.25 0 003.15 4.312 15.91 15.91 0 002.25 6.75z"/></svg>
              </div>
              <div>
                <strong>Reception &amp; Walk-In Telephone</strong>
                <span><a href="tel:4034556656">(403) 455-6656</a> · Clinical Fax: (403) 648-1876</span>
              </div>
            </div>

            <div class="v3-info-item">
              <div class="v3-info-icon">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/></svg>
              </div>
              <div>
                <strong>Administrative Email (Non-Clinical Only)</strong>
                <span><a href="mailto:admin@healthplusmed.ca">admin@healthplusmed.ca</a></span>
              </div>
            </div>
          </div>

          <table class="v3-hours-table" aria-label="Clinic Opening Hours">
            <tbody>
              <tr><td>Monday – Thursday</td><td>9:00 AM – 6:30 PM</td></tr>
              <tr><td>Friday</td><td>9:00 AM – 4:30 PM</td></tr>
              <tr><td>Saturday</td><td>10:00 AM – 2:00 PM</td></tr>
              <tr><td>Sunday &amp; Stat Holidays</td><td class="closed">Closed</td></tr>
            </tbody>
          </table>

          <div style="display:flex;gap:12px;flex-wrap:wrap;margin-top:24px;">
            <a href="${JOTFORM_APPOINTMENT_URL}" target="_blank" rel="noopener" class="btn btn-primary">Request Appointment Online →</a>
            <a href="${JOTFORM_CALLBACK_URL}" target="_blank" rel="noopener" class="btn btn-secondary">Request Call-Back ↗</a>
            <a href="https://maps.google.com/?q=100-290+Midpark+Way+SE+Calgary+AB+T2X+1P1" target="_blank" rel="noopener" class="btn btn-outline-teal">Get Google Directions ↗</a>
          </div>
        </div>

        <div class="v3-map-frame">
          <iframe
            title="HealthPlus by SEHA Medical Map — 100-290 Midpark Way SE, Calgary"
            src="https://www.google.com/maps?q=100-290+Midpark+Way+SE,+Calgary,+AB+T2X+1P1&output=embed"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            allowfullscreen>
          </iframe>
        </div>
      </div>
    </div>
  </section>
</main>

<!-- Physician Modals -->
${featuredDocModals}

${renderFooter(0, true)}`;
}

export function buildTeamDirectoryPage() {
  const physicians = teamMembers.filter(m => m.category === 'Physicians');
  const specialists = teamMembers.filter(m => m.category === 'Specialists');
  const staff = teamMembers.filter(m => m.category === 'Staff');

  const head = renderHead({
    title: 'Our Physicians & Medical Team | HealthPlus by SEHA Medical Calgary',
    description: 'Meet the 16 licensed Family Physicians and Specialist Consultants and 8 clinical support staff at HealthPlus by SEHA Medical in Midnapore, Calgary.',
    canonical: 'https://healthplusmed.ca/team/',
    ogImage: 'https://healthplusmed.ca/assets/images/global/social-share.png',
    depth: 1,
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Our Physicians & Medical Team — HealthPlus by SEHA Medical',
        url: 'https://healthplusmed.ca/team/',
        description: 'Directory of 16 licensed Family Physicians and Specialist Consultants and 8 clinical leadership and support staff at HealthPlus by SEHA Medical in Midnapore, Calgary.'
      }
    ]
  });

  const allModals = [...physicians, ...specialists].map(m => renderTeamModal(m)).join('');

  return `${head}
<body>
${renderHeader('team', 1)}

<main>
  <!-- Editorial Hero -->
  <section class="v3-page-hero">
    <div class="container v3-page-hero-grid">
      <div>
        <nav class="v3-breadcrumbs" aria-label="Breadcrumb">
          <a href="/index.html">Home</a>
          <span>/</span>
          <span aria-current="page">Physicians &amp; Medical Team</span>
        </nav>
        <h1>Meet the Physicians &amp; Care Team Behind HealthPlus.</h1>
        <p class="v3-page-hero-lead">
          Our Midnapore clinic brings together <strong>11 Family Physicians</strong>, <strong>5 Specialist Consultants</strong>, and <strong>8 Dedicated Clinical Operations &amp; Support Staff</strong>—working collaboratively under one roof to deliver attentive, evidence-based healthcare.
        </p>
        <div class="v3-page-hero-meta">
          <span class="v3-meta-chip">✓ CPSA Licensed Physicians</span>
          <span class="v3-meta-chip">✓ CCFP &amp; MRCGP Certified Family Doctors</span>
          <span class="v3-meta-chip">✓ In-House OB/GYN, Pediatrics, Internal Med, Psychiatry &amp; Sport Med</span>
        </div>
      </div>

      <div class="v3-page-hero-photo">
        <img src="/assets/images/core/team-hero.png" alt="HealthPlus by SEHA Medical Physicians and Clinical Team in Midnapore, Calgary" width="1000" height="750" fetchpriority="high" decoding="async">
      </div>
    </div>
  </section>

  <section class="v3-section">
    <div class="container">
      <!-- Interactive Filter & Search Bar -->
      <div class="v3-filter-bar" role="region" aria-label="Filter and Search Medical Team">
        <div class="v3-filter-tabs">
          <button type="button" class="v3-filter-btn active" data-team-filter="all">
            All Team <span class="count">${teamMembers.length}</span>
          </button>
          <button type="button" class="v3-filter-btn" data-team-filter="Physicians">
            Family Physicians <span class="count">${physicians.length}</span>
          </button>
          <button type="button" class="v3-filter-btn" data-team-filter="Specialists">
            Specialist Consultants <span class="count">${specialists.length}</span>
          </button>
          <button type="button" class="v3-filter-btn" data-team-filter="Staff">
            Leadership &amp; Support <span class="count">${staff.length}</span>
          </button>
        </div>

        <div class="v3-search-input-wrap">
          <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd"/></svg>
          <input type="search" class="v3-search-input" data-team-search placeholder="Search by doctor name, specialty, or focus..." aria-label="Search medical team by name or specialty">
        </div>
      </div>

      <!-- 1. Family Physicians Section -->
      <div data-team-section="Physicians" style="margin-bottom:var(--space-16);">
        <div class="v3-section-header">
          <span class="v3-eyebrow">Primary &amp; Longitudinal Care · 11 Physicians</span>
          <h2 class="v3-section-title">Family Physicians</h2>
          <p class="v3-section-lead">Providing comprehensive family medicine, preventive screenings, chronic disease management, women's health, and same-day walk-in care.</p>
        </div>
        <!-- HP_TEAM_PHYSICIANS_START -->
        <div class="v3-team-grid">
          ${physicians.map(m => renderTeamCard(m, { showModalTrigger: true })).join('')}
        </div>
        <!-- HP_TEAM_PHYSICIANS_END -->
      </div>

      <!-- 2. Specialist Consultants Section -->
      <div data-team-section="Specialists" style="margin-bottom:var(--space-16);">
        <div class="v3-section-header">
          <span class="v3-eyebrow">Referred Specialty Care · 5 Consultants</span>
          <h2 class="v3-section-title">In-House Specialist Consultants</h2>
          <p class="v3-section-lead">Working alongside our family physicians to provide specialist consultations in Obstetrics &amp; Gynecology, Pediatrics, Internal Medicine &amp; Infectious Diseases, Psychiatry, and Sport Medicine.</p>
        </div>
        <!-- HP_TEAM_SPECIALISTS_START -->
        <div class="v3-team-grid">
          ${specialists.map(m => renderTeamCard(m, { showModalTrigger: true })).join('')}
        </div>
        <!-- HP_TEAM_SPECIALISTS_END -->
      </div>

      <!-- 3. Clinic Leadership & Support Staff Section -->
      <div data-team-section="Staff">
        <div class="v3-section-header">
          <span class="v3-eyebrow">Patient Experience &amp; Clinical Operations · 8 Staff</span>
          <h2 class="v3-section-title">Clinic Leadership, Reception &amp; Medical Office Assistants</h2>
          <p class="v3-section-lead">Our administrative leaders, receptionists, and Medical Office Assistants ensure every visit to HealthPlus Midnapore is welcoming, organized, and supportive.</p>
        </div>
        <!-- HP_TEAM_STAFF_START -->
        <div class="v3-team-grid">
          ${staff.map(m => renderTeamCard(m, { showModalTrigger: false })).join('')}
        </div>
        <!-- HP_TEAM_STAFF_END -->
      </div>
    </div>
  </section>
</main>

<!-- HP_TEAM_MODALS_START -->
${allModals}
<!-- HP_TEAM_MODALS_END -->

${renderFooter(1, false)}`;
}

export function buildPhysicianProfilePage(member) {
  const fullName = `Dr. ${member.firstName} ${member.lastName}`;
  const isSpecialist = member.category === 'Specialists';
  const paragraphs = (member.bio || '').split('\n\n').filter(Boolean).map(p => `<p>${p.replace(/•\s*/g, '')}</p>`).join('');
  const focusTags = (member.focusAreas || []).map(t => `<span class="v3-focus-tag">${t}</span>`).join('');
  const matchedServices = services.filter(s => (member.specialties || []).includes(s.slug));

  const head = renderHead({
    title: `${fullName} | ${member.role} | HealthPlus by SEHA Medical`,
    description: member.shortBio || `${fullName} is a ${member.role} at HealthPlus by SEHA Medical in Midnapore, Calgary.`,
    canonical: 'https://healthplusmed.ca/team/',
    ogImage: `https://healthplusmed.ca/${member.photo}`,
    robots: 'noindex, follow',
    depth: 1,
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'Physician',
        name: fullName,
        jobTitle: member.role,
        medicalSpecialty: member.role,
        image: `https://healthplusmed.ca/${member.photo}`,
        worksFor: {
          '@type': 'MedicalClinic',
          name: 'HealthPlus by SEHA Medical',
          telephone: '+1-403-455-6656',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '100-290 Midpark Way SE',
            addressLocality: 'Calgary',
            addressRegion: 'AB',
            postalCode: 'T2X 1P1',
            addressCountry: 'CA'
          }
        }
      }
    ]
  });

  return `${head}
<body>
${renderHeader('team', 1)}

<main>
  <section class="v3-page-hero" style="padding:var(--space-10) 0;">
    <div class="container">
      <nav class="v3-breadcrumbs" aria-label="Breadcrumb" style="margin-bottom:0;">
        <a href="/index.html">Home</a>
        <span>/</span>
        <a href="/team/">Physicians &amp; Medical Team</a>
        <span>/</span>
        <span aria-current="page">${fullName}</span>
      </nav>
    </div>
  </section>

  <section class="v3-section">
    <div class="container">
      <div class="v3-service-layout">
        <!-- Main Profile Column -->
        <div>
          <div class="v3-content-card" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:var(--space-8);align-items:start;">
            <div style="border-radius:var(--radius-xl);overflow:hidden;border:1px solid var(--hp-border-subtle);background:var(--hp-bg-ivory);">
              <picture>
                <source media="(max-width: 640px)" srcset="/${member.photoMobile || member.photo}">
                <img src="/${member.photo}" alt="${fullName} — ${member.role}" width="800" height="1000" style="width:100%;aspect-ratio:4/5;object-fit:cover;object-position:center top;">
              </picture>
            </div>
            <div>
              <span class="v3-eyebrow">${isSpecialist ? 'In-House Specialist Consultant' : 'Family Medicine & Primary Care'}</span>
              <h1 style="font-size:clamp(1.85rem, 3vw, 2.5rem);margin-bottom:6px;">${fullName}</h1>
              <div style="font-weight:700;color:var(--hp-teal-primary);font-size:var(--text-base);margin-bottom:6px;">${member.role}</div>
              <div style="font-size:var(--text-sm);color:var(--hp-text-muted);margin-bottom:16px;">${member.credentials || ''}</div>
              <div class="v3-team-focus-tags" style="margin-bottom:24px;">${focusTags}</div>
              <div class="v3-prose">
                ${paragraphs}
              </div>
            </div>
          </div>

          ${matchedServices.length > 0 ? `
          <div class="v3-content-card">
            <h2>Clinical Services &amp; Programs Provided by ${fullName}</h2>
            <p style="color:var(--hp-text-muted);margin-bottom:20px;">Explore the clinical programs at HealthPlus Midnapore associated with ${fullName}'s practice:</p>
            <div class="v3-conditions-grid">
              ${matchedServices.map(s => `
              <a href="/services/${s.slug}.html" class="v3-condition-item" style="text-decoration:none;">
                <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"/></svg>
                <span><strong>${s.title}</strong> — ${s.category}</span>
              </a>`).join('')}
            </div>
          </div>` : ''}
        </div>

        <!-- Sticky Booking Sidebar -->
        <aside class="v3-sidebar-sticky">
          <div class="v3-sidebar-card dark">
            <span class="v3-eyebrow" style="color:var(--hp-teal-mint);">${isSpecialist ? 'Referral Appointment' : 'Schedule a Consultation'}</span>
            <h3>Book with ${fullName}</h3>
            <p>
              ${isSpecialist
                ? `${fullName} accepts patients by physician referral at our Midnapore clinic. Ask your family doctor or a HealthPlus walk-in physician to send a referral to (403) 648-1876.`
                : `Schedule an appointment or New Patient Meet & Greet with ${fullName} via our online appointment request form or by calling Midnapore reception.`}
            </p>
            <div style="display:flex;flex-direction:column;gap:10px;">
              <a href="${JOTFORM_APPOINTMENT_URL}" target="_blank" rel="noopener" class="btn btn-teal-glow" style="width:100%;">Request Appointment Online →</a>
              <a href="${JOTFORM_CALLBACK_URL}" target="_blank" rel="noopener" class="btn btn-ghost-light" style="width:100%;">Request Call-Back ↗</a>
              <a href="tel:4034556656" class="btn btn-ghost-light" style="width:100%;">Call (403) 455-6656</a>
            </div>
          </div>

          <div class="v3-sidebar-card">
            <h3>Practice Location</h3>
            <p><strong>HealthPlus by SEHA Medical</strong><br>100-290 Midpark Way SE<br>Calgary, AB T2X 1P1</p>
            <a href="/team/" class="btn btn-secondary btn-sm" style="width:100%;">← Back to Full Medical Team</a>
          </div>
        </aside>
      </div>
    </div>
  </section>
</main>

${renderFooter(1, false)}`;
}
