import {
  services,
  JOTFORM_APPOINTMENT_URL,
  JOTFORM_CALLBACK_URL,
  renderHead,
  renderHeader,
  renderFooter
} from './v3-components.mjs';

export function buildAboutPage() {
  const head = renderHead({
    title: 'About HealthPlus by SEHA Medical | Midnapore Medical Clinic Calgary',
    description: 'Learn about HealthPlus by SEHA Medical in Midnapore, Calgary: our mission, integrated primary and specialist care model, modern facility, and commitment to patient trust.',
    canonical: 'https://healthplusmed.ca/about/',
    ogImage: 'https://healthplusmed.ca/assets/images/global/social-share.png',
    depth: 1,
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        mainEntity: {
          '@type': 'MedicalOrganization',
          name: 'HealthPlus by SEHA Medical',
          url: 'https://healthplusmed.ca/'
        }
      }
    ]
  });

  const galleryPhotos = [
    { base: 'DSC_0848_NANO', caption: 'Main Patient Reception & Welcome Desk' },
    { base: 'DSC_0817_NANO', caption: 'Modern Clinical Examination Suite' },
    { base: 'DSC_0811_NANO', caption: 'Warm Physician & Patient Welcome' },
    { base: 'DSC_0821_NANO', caption: 'Compassionate Senior & Family Care' },
    { base: 'DSC_0808_NANO', caption: 'Family Consultation & Examination Room' },
    { base: 'DSC_0823_NANO', caption: 'Clinical Staff & Triage Station' }
  ];

  return `${head}
<body>
${renderHeader('about', 1)}

<main>
  <section class="v3-page-hero">
    <div class="container v3-page-hero-grid">
      <div>
        <nav class="v3-breadcrumbs" aria-label="Breadcrumb">
          <a href="/index.html">Home</a>
          <span>/</span>
          <span aria-current="page">About HealthPlus</span>
        </nav>
        <h1>Reinventing Community Healthcare in South Calgary.</h1>
        <p class="v3-page-hero-lead">
          Under SEHA Medical leadership, HealthPlus Medical has been completely reimagined into a modern, multidisciplinary medical centre in Midnapore—bringing together 11 Family Physicians, Same-Day Walk-In Care, and 5 In-House Specialist Consultants.
        </p>
        <div class="v3-page-hero-meta">
          <span class="v3-meta-chip">✓ Part of the SEHA Medical Network</span>
          <span class="v3-meta-chip">✓ 16 Licensed Physicians &amp; Specialists</span>
          <span class="v3-meta-chip">✓ 100-290 Midpark Way SE, Calgary</span>
        </div>
      </div>

      <div class="v3-page-hero-photo">
        <picture>
          <source media="(max-width: 768px)" srcset="/assets/images/clinic-nano/mobile/DSC_0848_NANO_mob.webp">
          <img src="/assets/images/clinic-nano/desktop/DSC_0848_NANO_desk.webp" alt="HealthPlus by SEHA Medical modern reception desk in Midnapore, Calgary" width="1000" height="750" fetchpriority="high" decoding="async">
        </picture>
      </div>
    </div>
  </section>

  <section class="v3-section">
    <div class="container">
      <div class="v3-intro-split">
        <div>
          <span class="v3-eyebrow">Our Clinical Philosophy</span>
          <h2 class="v3-section-title">Primary Care &amp; Specialist Expertise Under One Roof</h2>
          <div class="v3-prose">
            <p>After an extensive facility renewal and under the clinical governance of SEHA Medical, HealthPlus Medical was built to solve one of the most common frustrations in Canadian healthcare: disconnected care between family physicians, walk-in clinics, and medical specialists.</p>
            <p>At our Midnapore clinic (100-290 Midpark Way SE), your family physician collaborates directly with in-house specialists in <strong>Obstetrics &amp; Gynecology</strong>, <strong>Pediatrics</strong>, <strong>Internal Medicine &amp; Infectious Diseases</strong>, <strong>Psychiatry</strong>, and <strong>Sport &amp; Exercise Medicine</strong>. That means shared clinical communication, faster diagnostic clarity, and continuity for your entire family.</p>
          </div>
          <div style="display:flex;gap:12px;flex-wrap:wrap;margin-top:24px;">
            <a href="/team/" class="btn btn-primary">Meet Our 16 Physicians →</a>
            <a href="/services/" class="btn btn-secondary">Explore All 11 Specialties</a>
          </div>
        </div>

        <div class="v3-intro-metrics" style="margin-top:0;">
          <div class="v3-metric-box">
            <div class="v3-metric-num">11</div>
            <div class="v3-metric-label">Family Physicians Providing Longitudinal &amp; Walk-In Care</div>
          </div>
          <div class="v3-metric-box">
            <div class="v3-metric-num">5</div>
            <div class="v3-metric-label">In-House Specialist Consultants Accepting Referrals</div>
          </div>
          <div class="v3-metric-box">
            <div class="v3-metric-num">8</div>
            <div class="v3-metric-label">Dedicated Operations, Reception &amp; MOA Professionals</div>
          </div>
          <div class="v3-metric-box">
            <div class="v3-metric-num">11</div>
            <div class="v3-metric-label">Comprehensive Primary, Urgent &amp; Specialty Care Programs</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Facility Photography Tour -->
  <section class="v3-section v3-section-alt">
    <div class="container">
      <div class="v3-section-header center">
        <span class="v3-eyebrow">Authentic Clinic Photography</span>
        <h2 class="v3-section-title">Inside Our Midnapore Medical Facility</h2>
        <p class="v3-section-lead">Every detail of our clinic at 100-290 Midpark Way SE was designed to feel calm, accessible, and clinically modern.</p>
      </div>

      <div class="v3-gallery-grid">
        ${galleryPhotos.map(item => `
        <figure class="v3-gallery-item span-4" style="margin:0;">
          <picture>
            <source media="(max-width: 768px)" srcset="/assets/images/clinic-nano/mobile/${item.base}_mob.webp">
            <img src="/assets/images/clinic-nano/desktop/${item.base}_desk.webp" alt="${item.caption} at HealthPlus by SEHA Medical" width="800" height="500" loading="lazy" decoding="async">
          </picture>
          <figcaption class="v3-gallery-caption">${item.caption}</figcaption>
        </figure>`).join('')}
      </div>
    </div>
  </section>
</main>

${renderFooter(1, false)}`;
}

export function buildBookPage() {
  const head = renderHead({
    title: 'Book an Appointment or Walk-In Visit | HealthPlus by SEHA Medical',
    description: 'Schedule your appointment at HealthPlus by SEHA Medical in Midnapore, Calgary: online Appointment Request Form, Call-Back Request Form, telephone scheduling at (403) 455-6656, or same-day walk-in care.',
    canonical: 'https://healthplusmed.ca/book',
    ogImage: 'https://healthplusmed.ca/assets/images/global/social-share.png',
    depth: 0,
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Book an Appointment — HealthPlus by SEHA Medical',
        url: 'https://healthplusmed.ca/book'
      }
    ]
  });

  const serviceOptions = services.map(s => `<option value="${s.title}">${s.title} (${s.category})</option>`).join('');

  return `${head}
<body>
${renderHeader('book', 0)}

<main>
  <section class="v3-page-hero">
    <div class="container v3-page-hero-grid">
      <div>
        <nav class="v3-breadcrumbs" aria-label="Breadcrumb">
          <a href="/index.html">Home</a>
          <span>/</span>
          <span aria-current="page">Book an Appointment</span>
        </nav>
        <h1>Schedule Your Visit at HealthPlus Midnapore.</h1>
        <p class="v3-page-hero-lead">
          Choose the booking pathway that fits your needs—from our official SEHA Medical Online Appointment Request and Call-Back forms to direct telephone reception at (403) 455-6656 or same-day walk-in care.
        </p>
        <div class="v3-page-hero-meta" style="margin-bottom:var(--space-6);">
          <span class="v3-meta-chip">✓ Official SEHA Medical Request Forms</span>
          <span class="v3-meta-chip">✓ Direct Telephone &amp; Call-Back Scheduling</span>
          <span class="v3-meta-chip">✓ Accepting New Patients &amp; Walk-Ins</span>
        </div>
        <div style="display:flex;gap:12px;flex-wrap:wrap;">
          <a href="${JOTFORM_APPOINTMENT_URL}" target="_blank" rel="noopener" class="btn btn-teal-glow">Open Appointment Request Form ↗</a>
          <a href="${JOTFORM_CALLBACK_URL}" target="_blank" rel="noopener" class="btn btn-ghost-light">Open Call-Back Request Form ↗</a>
        </div>
      </div>

      <div class="v3-page-hero-photo">
        <picture>
          <source media="(max-width: 768px)" srcset="/assets/images/clinic-nano/mobile/DSC_0848_NANO_mob.webp">
          <img src="/assets/images/clinic-nano/desktop/DSC_0848_NANO_desk.webp" alt="HealthPlus Medical reception desk in Midnapore, Calgary" width="1000" height="750" fetchpriority="high" decoding="async">
        </picture>
      </div>
    </div>
  </section>

  <section class="v3-section">
    <div class="container">
      <!-- 3 Primary Booking Channels -->
      <div class="v3-pathways-grid" style="margin-bottom:var(--space-12);">
        <article class="v3-pathway-card" style="border-color:rgba(15,118,110,0.35);">
          <div class="v3-pathway-step">01</div>
          <span class="v3-pathway-tag">Online Appointment Request</span>
          <h3>Appointment Request Form</h3>
          <p>Use our official SEHA Medical Appointment Request Form to request family medicine appointments, routine follow-ups, Women's Health visits, and New Patient Meet &amp; Greet consultations.</p>
          <ul class="v3-pathway-list">
            <li>
              <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"/></svg>
              <span>Official SEHA Management secure online intake form.</span>
            </li>
            <li>
              <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"/></svg>
              <span>Our reception team confirms your appointment time promptly.</span>
            </li>
          </ul>
          <a href="${JOTFORM_APPOINTMENT_URL}" target="_blank" rel="noopener" class="btn btn-primary" style="width:100%;">Open Appointment Request Form ↗</a>
        </article>

        <article class="v3-pathway-card">
          <div class="v3-pathway-step">02</div>
          <span class="v3-pathway-tag">Call-Back &amp; Telephone Reception</span>
          <h3>Request Call-Back or Call (403) 455-6656</h3>
          <p>Prefer to have our front desk call you back or speak directly with our Midnapore reception team? Submit a Call-Back Request or call us during operating hours.</p>
          <ul class="v3-pathway-list">
            <li>
              <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"/></svg>
              <span>Official Call-Back Request Form for convenient scheduling.</span>
            </li>
            <li>
              <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"/></svg>
              <span>Direct telephone reception at <strong>(403) 455-6656</strong>.</span>
            </li>
          </ul>
          <div style="display:flex;gap:10px;flex-wrap:wrap;">
            <a href="${JOTFORM_CALLBACK_URL}" target="_blank" rel="noopener" class="btn btn-primary" style="flex:1;">Request Call-Back ↗</a>
            <a href="tel:4034556656" class="btn btn-secondary" style="flex:1;">Call (403) 455-6656</a>
          </div>
        </article>

        <article class="v3-pathway-card">
          <div class="v3-pathway-step">03</div>
          <span class="v3-pathway-tag">No Appointment Required</span>
          <h3>Walk-In Medical Clinic (Mon–Sat)</h3>
          <p>Visit us in person at <strong>100-290 Midpark Way SE, Calgary, AB T2X 1P1</strong> for acute non-emergency medical concerns, minor injuries, infections, and prescription renewals.</p>
          <ul class="v3-pathway-list">
            <li>
              <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"/></svg>
              <span>Mon–Thu 9:00 AM–6:30 PM · Fri 9:00 AM–4:30 PM · Sat 10:00 AM–2:00 PM.</span>
            </li>
            <li>
              <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"/></svg>
              <span>Bring your valid Alberta Health Care (AHCIP) card and photo ID.</span>
            </li>
          </ul>
          <a href="/contact.html" class="btn btn-secondary" style="width:100%;">View Directions &amp; Parking →</a>
        </article>
      </div>

      <!-- Interactive Appointment & Call-Back Launcher Form + Preparation Guide -->
      <div class="v3-service-layout">
        <div class="v3-content-card" style="margin-bottom:0;">
          <span class="v3-eyebrow">Official SEHA Medical Intake Portal</span>
          <h2>Quick Appointment &amp; Call-Back Request</h2>
          <p style="color:var(--hp-text-muted);margin-bottom:20px;">
            Select your visit type below to continue directly to our official SEHA Medical secure request form, or use the direct form links on the right.
          </p>
          <form action="${JOTFORM_APPOINTMENT_URL}" method="get" target="_blank" onsubmit="var sel=this.querySelector('[name=request_pathway]'); if(sel && sel.value==='callback'){ window.open('${JOTFORM_CALLBACK_URL}', '_blank', 'noopener'); return false; } window.open('${JOTFORM_APPOINTMENT_URL}', '_blank', 'noopener'); return false;">
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:16px;margin-bottom:16px;">
              <div>
                <label for="hp-req-type" style="display:block;font-weight:700;font-size:var(--text-sm);color:var(--hp-text-heading);margin-bottom:6px;">Request Pathway *</label>
                <select id="hp-req-type" name="request_pathway" style="width:100%;padding:12px 14px;border:1px solid var(--hp-border-strong);border-radius:var(--radius-md);font-family:var(--font-sans);font-size:var(--text-sm);background:#fff;">
                  <option value="appointment">Request an Appointment Online</option>
                  <option value="callback">Request a Reception Call-Back</option>
                </select>
              </div>
              <div>
                <label for="hp-service-select" style="display:block;font-weight:700;font-size:var(--text-sm);color:var(--hp-text-heading);margin-bottom:6px;">Clinical Service / Program *</label>
                <select id="hp-service-select" name="service" style="width:100%;padding:12px 14px;border:1px solid var(--hp-border-strong);border-radius:var(--radius-md);font-family:var(--font-sans);font-size:var(--text-sm);background:#fff;">
                  <option value="New Patient Meet & Greet">New Patient Meet &amp; Greet (Family Doctor)</option>
                  ${serviceOptions}
                </select>
              </div>
            </div>
            <div style="display:flex;gap:12px;flex-wrap:wrap;margin-top:20px;">
              <button type="submit" class="btn btn-primary btn-lg">Continue to Official Request Form ↗</button>
              <a href="${JOTFORM_CALLBACK_URL}" target="_blank" rel="noopener" class="btn btn-secondary btn-lg">Open Call-Back Form Directly ↗</a>
            </div>
          </form>
        </div>

        <aside class="v3-sidebar-sticky">
          <div class="v3-sidebar-card">
            <h3>What to Bring to Your Visit</h3>
            <div class="v3-conditions-grid" style="grid-template-columns:1fr;margin-top:12px;margin-bottom:16px;">
              <div class="v3-condition-item">
                <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"/></svg>
                <span>Valid <strong>Alberta Health Care (AHCIP)</strong> card &amp; photo ID.</span>
              </div>
              <div class="v3-condition-item">
                <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"/></svg>
                <span>Current medications, dosages, and allergies list.</span>
              </div>
            </div>
            <div class="v3-emergency-banner" style="margin-top:0;">
              <strong>Medical Emergency Notice:</strong> For chest pain, severe shortness of breath, or any life-threatening emergency, call <strong>911</strong> or go to the nearest emergency department immediately.
            </div>
          </div>
        </aside>
      </div>
    </div>
  </section>
</main>

${renderFooter(0, false)}`;
}

export function buildContactPage() {
  const head = renderHead({
    title: 'Contact, Hours & Directions | HealthPlus by SEHA Medical Calgary',
    description: 'Contact HealthPlus by SEHA Medical at 100-290 Midpark Way SE, Calgary, AB T2X 1P1. Call (403) 455-6656 or use our online Appointment and Call-Back Request forms.',
    canonical: 'https://healthplusmed.ca/contact',
    ogImage: 'https://healthplusmed.ca/assets/images/global/social-share.png',
    depth: 0,
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Contact HealthPlus by SEHA Medical',
        url: 'https://healthplusmed.ca/contact'
      }
    ]
  });

  return `${head}
<body>
${renderHeader('contact', 0)}

<main>
  <section class="v3-page-hero">
    <div class="container v3-page-hero-grid">
      <div>
        <nav class="v3-breadcrumbs" aria-label="Breadcrumb">
          <a href="/index.html">Home</a>
          <span>/</span>
          <span aria-current="page">Contact, Hours &amp; Directions</span>
        </nav>
        <h1>Visit or Call HealthPlus Midnapore.</h1>
        <p class="v3-page-hero-lead">
          We are located at <strong>Suite 100, 290 Midpark Way SE, Calgary, AB T2X 1P1</strong>, with free on-site surface parking and convenient access from Macleod Trail SE and Fish Creek–Lacombe CTrain Station.
        </p>
        <div style="display:flex;gap:12px;flex-wrap:wrap;margin-top:var(--space-6);">
          <a href="tel:4034556656" class="btn btn-teal-glow">Call Reception: (403) 455-6656</a>
          <a href="${JOTFORM_APPOINTMENT_URL}" target="_blank" rel="noopener" class="btn btn-ghost-light">Request Appointment Online ↗</a>
          <a href="${JOTFORM_CALLBACK_URL}" target="_blank" rel="noopener" class="btn btn-ghost-light">Request Call-Back ↗</a>
        </div>
      </div>

      <div class="v3-page-hero-photo">
        <picture>
          <source media="(max-width: 768px)" srcset="/assets/images/clinic-nano/mobile/DSC_0852_NANO_mob.webp">
          <img src="/assets/images/clinic-nano/desktop/DSC_0852_NANO_desk.webp" alt="HealthPlus by SEHA Medical exterior sign at 100-290 Midpark Way SE, Midnapore, Calgary" width="1000" height="750" fetchpriority="high" decoding="async">
        </picture>
      </div>
    </div>
  </section>

  <section class="v3-section">
    <div class="container">
      <div class="v3-location-grid">
        <!-- HP_CONTACT_INFO_START -->
        <div class="v3-location-card">
          <span class="v3-eyebrow">Direct Clinic Contact &amp; Hours</span>
          <h2 style="font-size:1.75rem;margin-bottom:12px;">Get in Touch with Our Team</h2>
          <p style="color:var(--hp-text-muted);font-size:var(--text-sm);line-height:1.65;">
            Reach our Midnapore reception desk by telephone, submit an online Appointment Request or Call-Back Request form, or visit us in person during clinic hours.
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
                <strong>Primary Reception &amp; Walk-In Desk</strong>
                <span><a href="tel:4034556656">(403) 455-6656</a></span>
              </div>
            </div>

            <div class="v3-info-item">
              <div class="v3-info-icon">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18"/></svg>
              </div>
              <div>
                <strong>Clinical &amp; Specialist Referral Fax</strong>
                <span>(403) 648-1876</span>
              </div>
            </div>

            <div class="v3-info-item">
              <div class="v3-info-icon">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/></svg>
              </div>
              <div>
                <strong>Non-Clinical Administrative Email</strong>
                <span><a href="mailto:admin@healthplusmed.ca?subject=Non-Clinical%20Administrative%20Inquiry">admin@healthplusmed.ca</a></span>
              </div>
            </div>
          </div>

          <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:20px;">
            <a href="${JOTFORM_APPOINTMENT_URL}" target="_blank" rel="noopener" class="btn btn-primary btn-sm">Appointment Request Form ↗</a>
            <a href="${JOTFORM_CALLBACK_URL}" target="_blank" rel="noopener" class="btn btn-secondary btn-sm">Call-Back Request Form ↗</a>
          </div>

          <h3 style="font-size:1.15rem;margin-bottom:8px;">Opening Hours (Walk-In &amp; Scheduled)</h3>
          <table class="v3-hours-table">
            <tbody>
              <tr><td>Monday – Thursday</td><td>9:00 AM – 6:30 PM</td></tr>
              <tr><td>Friday</td><td>9:00 AM – 4:30 PM</td></tr>
              <tr><td>Saturday</td><td>10:00 AM – 2:00 PM</td></tr>
              <tr><td>Sunday &amp; Stat Holidays</td><td class="closed">Closed</td></tr>
            </tbody>
          </table>

          <div class="v3-privacy-notice" style="margin-top:20px;">
            <strong>Alberta Health Privacy Notice (Zero-PHI Boundary):</strong> Please do not include Personal Health Numbers (PHN), Dates of Birth, or medical symptoms in general emails. Use our official request forms or call (403) 455-6656.
          </div>

          <div class="v3-emergency-banner">
            <strong>Medical Emergency Notice:</strong> For a medical emergency, call <strong>911</strong> or go to the nearest hospital emergency department immediately.
          </div>
        </div>
        <!-- HP_CONTACT_INFO_END -->

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

${renderFooter(0, true)}`;
}

export function buildFaqPage() {
  const faqs = [
    {
      q: 'How do I book an appointment at HealthPlus Medical?',
      a: `You can request an appointment online using our official <a href="${JOTFORM_APPOINTMENT_URL}" target="_blank" rel="noopener" style="color:var(--hp-teal-primary);font-weight:700;">Appointment Request Form</a>, submit a <a href="${JOTFORM_CALLBACK_URL}" target="_blank" rel="noopener" style="color:var(--hp-teal-primary);font-weight:700;">Call-Back Request Form</a>, or call our Midnapore reception desk directly at <strong>(403) 455-6656</strong>.`
    },
    {
      q: 'Are you accepting new family practice patients?',
      a: 'Yes! Several of our CCFP and MRCGP-certified Family Physicians at 100-290 Midpark Way SE are actively accepting new patients and families. You can request a New Patient Meet &amp; Greet appointment online or by calling (403) 455-6656.'
    },
    {
      q: 'Do you accept walk-in patients without an appointment?',
      a: 'Yes. Our walk-in clinic welcomes both existing and non-registered patients Monday through Saturday during operating hours (Mon–Thu 9:00 AM–6:30 PM, Fri 9:00 AM–4:30 PM, Sat 10:00 AM–2:00 PM) for non-emergency medical concerns.'
    },
    {
      q: 'What should I bring to my first appointment?',
      a: 'Please bring your valid Alberta Health Care Insurance Plan (AHCIP) card, a piece of government-issued photo ID, and an up-to-date list of all current medications, dosages, and known allergies.'
    },
    {
      q: 'How do I see one of your in-house specialists (OB/GYN, Pediatrics, Internal Medicine, Psychiatry, Sport Medicine)?',
      a: 'Consultations with our specialist physicians require a physician referral. Any HealthPlus family or walk-in physician can assess your concern and submit an in-house referral, or your external family doctor can fax a referral to <strong>(403) 648-1876</strong>.'
    },
    {
      q: 'Do you offer virtual or telehealth appointments?',
      a: 'Yes. We offer secure, AHCIP-covered virtual consultations for appropriate non-emergency follow-ups, prescription renewals, and results reviews. Please call (403) 455-6656 or submit an online appointment request to see if your concern is suitable for virtual care.'
    },
    {
      q: 'Is there free parking available at the Midnapore clinic?',
      a: 'Yes. Free surface parking is available directly outside our ground-floor entrance at 100-290 Midpark Way SE, Calgary, AB T2X 1P1.'
    }
  ];

  const head = renderHead({
    title: 'Patient FAQ | HealthPlus by SEHA Medical Calgary',
    description: 'Frequently asked questions about booking appointments, walk-in hours, new patient Meet & Greet visits, specialist referrals, and AHCIP coverage at HealthPlus Medical.',
    canonical: 'https://healthplusmed.ca/faq',
    ogImage: 'https://healthplusmed.ca/assets/images/global/social-share.png',
    depth: 0,
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(f => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: f.a.replace(/<[^>]+>/g, '')
          }
        }))
      }
    ]
  });

  return `${head}
<body>
${renderHeader('faq', 0)}

<main>
  <section class="v3-page-hero">
    <div class="container v3-page-hero-grid">
      <div>
        <nav class="v3-breadcrumbs" aria-label="Breadcrumb">
          <a href="/index.html">Home</a>
          <span>/</span>
          <span aria-current="page">Patient FAQ</span>
        </nav>
        <h1>Frequently Asked Patient Questions.</h1>
        <p class="v3-page-hero-lead">
          Clear answers about online appointment requests, walk-in clinic hours, registering with a family physician, specialist referrals, and Alberta Health Care (AHCIP) coverage at HealthPlus Midnapore.
        </p>
      </div>
      <div class="v3-page-hero-photo">
        <picture>
          <source media="(max-width: 768px)" srcset="/assets/images/clinic-nano/mobile/DSC_0848_NANO_mob.webp">
          <img src="/assets/images/clinic-nano/desktop/DSC_0848_NANO_desk.webp" alt="HealthPlus Medical reception desk in Calgary" width="1000" height="750" fetchpriority="high" decoding="async">
        </picture>
      </div>
    </div>
  </section>

  <section class="v3-section">
    <div class="container">
      <div class="v3-service-layout">
        <div>
          <div class="v3-content-card">
            <span class="v3-eyebrow">Patient Information Hub</span>
            <h2>Appointments, Walk-In Care &amp; Clinic Policies</h2>
            <div class="v3-faq-list" style="margin-top:20px;">
              ${faqs.map((item, idx) => `
              <details class="v3-faq-item" ${idx === 0 ? 'open' : ''}>
                <summary>
                  <span>${item.q}</span>
                  <span class="v3-faq-icon" aria-hidden="true">+</span>
                </summary>
                <div class="v3-faq-answer">${item.a}</div>
              </details>`).join('')}
            </div>
          </div>
        </div>

        <aside class="v3-sidebar-sticky">
          <div class="v3-sidebar-card dark">
            <span class="v3-eyebrow" style="color:var(--hp-teal-mint);">Still Have Questions?</span>
            <h3>Speak with Midnapore Reception</h3>
            <p>Our Medical Office Assistants and reception team are happy to help you schedule the right appointment or answer questions about clinic services.</p>
            <div style="display:flex;flex-direction:column;gap:10px;">
              <a href="tel:4034556656" class="btn btn-teal-glow" style="width:100%;">Call (403) 455-6656</a>
              <a href="${JOTFORM_APPOINTMENT_URL}" target="_blank" rel="noopener" class="btn btn-ghost-light" style="width:100%;">Request Appointment Online →</a>
              <a href="${JOTFORM_CALLBACK_URL}" target="_blank" rel="noopener" class="btn btn-ghost-light" style="width:100%;">Request Call-Back ↗</a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </section>
</main>

${renderFooter(0, false)}`;
}

export function build404Page() {
  const head = renderHead({
    title: 'Page Not Found | HealthPlus by SEHA Medical',
    description: 'The page you are looking for cannot be found. Return to HealthPlus by SEHA Medical home or book an appointment.',
    canonical: 'https://healthplusmed.ca/',
    robots: 'noindex, nofollow',
    depth: 0
  });

  return `${head}
<body>
${renderHeader('', 0)}

<main>
  <section class="v3-section" style="min-height:62vh;display:flex;align-items:center;">
    <div class="container" style="max-width:680px;text-align:center;">
      <span class="v3-eyebrow">Error 404 · Page Not Found</span>
      <h1 style="font-size:clamp(2.25rem,4vw,3.25rem);margin-bottom:16px;">We Couldn't Find That Page.</h1>
      <p style="color:var(--hp-text-muted);font-size:var(--text-lg);margin-bottom:32px;">
        The link you followed may be outdated or the page may have moved. Use the links below to explore our medical services, meet our physicians, or schedule an appointment.
      </p>
      <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
        <a href="/index.html" class="btn btn-primary btn-lg">Return to Homepage →</a>
        <a href="/services/" class="btn btn-secondary btn-lg">Explore Services</a>
        <a href="${JOTFORM_APPOINTMENT_URL}" target="_blank" rel="noopener" class="btn btn-outline-teal btn-lg">Request Appointment</a>
      </div>
    </div>
  </section>
</main>

${renderFooter(0, false)}`;
}
