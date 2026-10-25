import {
  services,
  teamMembers,
  serviceHeroPhotos,
  serviceHeroAlts,
  JOTFORM_APPOINTMENT_URL,
  JOTFORM_CALLBACK_URL,
  renderHead,
  renderHeader,
  renderFooter
} from './v3-components.mjs';

export function buildServicesDirectoryPage() {
  const head = renderHead({
    title: 'Medical Services & Clinical Specialties | HealthPlus by SEHA Medical Calgary',
    description: 'Explore all 11 medical services at HealthPlus by SEHA Medical in Midnapore, Calgary: Family Medicine, Walk-In Clinic, OB/GYN, Pediatrics, Internal Medicine, Psychiatry, Sports Medicine, MVA, and Concussion Care.',
    canonical: 'https://healthplusmed.ca/services/',
    ogImage: 'https://healthplusmed.ca/assets/images/global/social-share.png',
    depth: 1,
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Medical Services & Clinical Specialties — HealthPlus by SEHA Medical',
        url: 'https://healthplusmed.ca/services/',
        description: 'Directory of 11 primary, walk-in, and specialist medical services at HealthPlus by SEHA Medical in Midnapore, Calgary.'
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
          <h2 style="font-size:1.35rem;margin-bottom:var(--space-3);">${s.title}</h2>
          <p>${s.shortDescription}</p>
          <a href="/services/${s.slug}.html" class="v3-service-link" aria-label="Learn more about ${s.title}">
            <span>Explore ${s.title}</span>
            <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd"/></svg>
          </a>
        </article>`;
  }).join('');

  return `${head}
<body>
${renderHeader('services', 1)}

<main>
  <section class="v3-page-hero">
    <div class="container v3-page-hero-grid">
      <div>
        <nav class="v3-breadcrumbs" aria-label="Breadcrumb">
          <a href="/index.html">Home</a>
          <span>/</span>
          <span aria-current="page">Medical Services</span>
        </nav>
        <h1>11 Integrated Medical Specialties Under One Roof.</h1>
        <p class="v3-page-hero-lead">
          From longitudinal Family Medicine and same-day Walk-In care to referred consultations in Obstetrics &amp; Gynecology, Pediatrics, Internal Medicine, Psychiatry, and Sport Medicine, HealthPlus Midnapore coordinates your complete care journey.
        </p>
        <div class="v3-page-hero-meta">
          <span class="v3-meta-chip">✓ AHCIP Insured Physician Visits</span>
          <span class="v3-meta-chip">✓ Direct Walk-In &amp; Scheduled Primary Care</span>
          <span class="v3-meta-chip">✓ In-House Specialist Referral Network</span>
        </div>
      </div>

      <div class="v3-page-hero-photo">
        <img src="/assets/images/services-hero.jpg" alt="HealthPlus Clinic Team at 100-290 Midpark Way SE, Midnapore, Calgary" width="1000" height="750" fetchpriority="high" decoding="async">
      </div>
    </div>
  </section>

  <section class="v3-section">
    <div class="container">
      <!-- HP_SERVICES_DIRECTORY_START -->
      <div class="v3-services-grid">${serviceCardsHtml}
      </div>
      <!-- HP_SERVICES_DIRECTORY_END -->
    </div>
  </section>

  <!-- Campaign Spotlight Banner -->
  <section class="v3-section" style="padding-top:0;">
    <div class="container">
      <div class="v3-spotlight">
        <div class="v3-spotlight-grid">
          <div class="v3-spotlight-copy">
            <span class="v3-eyebrow">Specialized Midnapore Program</span>
            <h2>Women's Health, Contraception &amp; IUD Consultation Clinic</h2>
            <p>Dedicated cervical screening, contraception counseling, IUD insertion/removal planning, prenatal care, and menopause support with our female family physicians and in-house OB/GYN specialist.</p>
            <div style="display:flex;gap:12px;flex-wrap:wrap;">
              <a href="/services/womens-health-iud-clinic-calgary.html" class="btn btn-teal-glow">Explore Women's &amp; IUD Clinic →</a>
              <a href="${JOTFORM_APPOINTMENT_URL}" target="_blank" rel="noopener" class="btn btn-ghost-light">Request Appointment</a>
            </div>
          </div>
          <div style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.14);border-radius:var(--radius-xl);padding:var(--space-6);color:#fff;">
            <div style="font-size:11px;text-transform:uppercase;letter-spacing:0.08em;color:var(--hp-teal-mint);font-weight:700;margin-bottom:8px;">How Specialist Referrals Work</div>
            <h3 style="color:#fff;font-size:1.3rem;margin-bottom:10px;">Need to See a Specialist?</h3>
            <p style="color:rgba(255,255,255,0.82);font-size:var(--text-sm);line-height:1.65;margin-bottom:16px;">
              Consultations for Internal Medicine, Obstetrics &amp; Gynecology, Pediatrics, and Psychiatry require a physician referral. Any HealthPlus family or walk-in doctor can assess you and initiate an in-house referral.
            </p>
            <a href="tel:4034556656" class="btn btn-ghost-light btn-sm">Call Reception: (403) 455-6656</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>

${renderFooter(1, false)}`;
}

export function buildIndividualServicePage(service) {
  const photoBase = serviceHeroPhotos[service.slug] || 'DSC_0808_NANO';
  const photoAlt = serviceHeroAlts[service.slug] || `${service.title} at HealthPlus by SEHA Medical in Midnapore, Calgary`;
  const isReferral = ['internal-medicine', 'obstetrics-gynecology'].includes(service.slug);
  const isConcussion = service.slug === 'concussion-care';
  const accessBadge = isReferral
    ? 'Physician Referral Required (Available via HealthPlus Walk-In)'
    : 'Direct Booking & Walk-In Available';

  // Find physicians offering this service
  const servicePhysicians = teamMembers.filter(
    m => m.category !== 'Staff' && (m.specialties || []).includes(service.slug)
  );

  // Related services
  const relatedList = (service.relatedServices || [])
    .map(slug => services.find(rs => rs.slug === slug))
    .filter(Boolean);

  const faqSchemaEntities = (service.faq || []).map(item => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.a
    }
  }));

  const head = renderHead({
    title: service.seoTitle || `${service.title} Calgary | HealthPlus by SEHA Medical`,
    description: service.seoDescription || service.shortDescription,
    canonical: service.canonicalUrl || `https://healthplusmed.ca/services/${service.slug}`,
    ogImage: `https://healthplusmed.ca/${service.heroImage || 'assets/images/global/social-share.png'}`,
    depth: 1,
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'MedicalClinic',
            '@id': 'https://healthplusmed.ca/#clinic',
            name: 'HealthPlus by SEHA Medical',
            url: 'https://healthplusmed.ca/',
            telephone: '+1-403-455-6656',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '100-290 Midpark Way SE',
              addressLocality: 'Calgary',
              addressRegion: 'AB',
              postalCode: 'T2X 1P1',
              addressCountry: 'CA'
            }
          },
          {
            '@type': 'MedicalWebPage',
            '@id': `${service.canonicalUrl}#webpage`,
            name: service.seoTitle || service.title,
            url: service.canonicalUrl,
            description: service.seoDescription || service.shortDescription,
            provider: { '@id': 'https://healthplusmed.ca/#clinic' }
          },
          ...(faqSchemaEntities.length > 0 ? [{
            '@type': 'FAQPage',
            '@id': `${service.canonicalUrl}#faq`,
            mainEntity: faqSchemaEntities
          }] : [])
        ]
      }
    ]
  });

  const concussionSpecialtyBlock = isConcussion ? `
          <!-- Complete Concussions Certified Clinic Block -->
          <div class="v3-content-card" style="background:linear-gradient(135deg, #071E1C 0%, #0D3D38 100%);color:#fff;border:1px solid rgba(115,201,190,0.35);">
            <img src="../assets/services/concussion/COMPLETE%20CONCUSSIONS%20LOGO/full/white/Complete-Concussions_Logo-White.svg" alt="Complete Concussions Logo" style="height:56px;width:auto;margin-bottom:16px;display:block;">
            <span class="v3-eyebrow" style="color:#97E2DC;">Complete Concussions™ Certified Clinic</span>
            <h2 style="color:#fff;margin-bottom:12px;">Evidence-Based Concussion Management Program</h2>
            <p style="color:rgba(255,255,255,0.88);line-height:1.75;margin-bottom:20px;">
              HealthPlus by SEHA Medical is proud to offer the Complete Concussions™ Program at our Midnapore clinic. As a certified location, we provide a full evidence-based concussion assessment, treatment, and baseline testing program—helping patients and athletes safely return to learn, work, and sport.
            </p>
            <div style="display:flex;gap:14px;flex-wrap:wrap;align-items:center;">
              <a href="https://apps.apple.com/ca/app/concussion-tracker/id1166290027" target="_blank" rel="noopener" style="display:inline-block;">
                <img src="../assets/services/concussion/CONCUSSION%20TRACKER%20APP/App-Store-Icon-AppStore.png" alt="Download Concussion Tracker on App Store" style="height:44px;width:auto;">
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.completeconcussions.concussiontracker&hl=en_CA" target="_blank" rel="noopener" style="display:inline-block;">
                <img src="../assets/services/concussion/CONCUSSION%20TRACKER%20APP/App-Store-Icon-GooglePlay.png" alt="Get Concussion Tracker on Google Play" style="height:44px;width:auto;">
              </a>
            </div>
          </div>

          <div class="v3-content-card">
            <span class="v3-eyebrow">Complete Concussions™ Clinical Pathway</span>
            <h2>Concussion Recovery &amp; Treatment Strategy</h2>
            <p style="color:var(--hp-text-muted);line-height:1.75;margin-bottom:20px;">
              Following a suspected concussion, early evaluation by a trained clinician significantly improves recovery outcomes. Our team evaluates cognitive, visual, vestibular, and cervical subsystems to tailor your step-by-step rehabilitation plan.
            </p>
            <div style="margin-bottom:24px;border-radius:var(--radius-xl);overflow:hidden;border:1px solid var(--hp-border-subtle);box-shadow:var(--shadow-sm);">
              <img src="../assets/services/concussion/CONCUSSION%20TREATMENT%20INFOGRAPHIC/1920x1280-CompleteConcussions-Treatment-Infographic.png" alt="Complete Concussions Treatment Infographic" style="width:100%;height:auto;display:block;" loading="lazy">
            </div>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:var(--space-6);">
              <div style="background:var(--hp-bg-ivory);padding:var(--space-5);border-radius:var(--radius-lg);border:1px solid var(--hp-border-subtle);">
                <h3 style="font-size:1.15rem;margin-bottom:8px;">Comprehensive Care Protocol</h3>
                <p style="color:var(--hp-text-muted);font-size:var(--text-sm);line-height:1.65;margin:0;">
                  After an initial 24–48 hour period of relative symptom-limited rest, our clinicians guide you through a structured, graduated return-to-school, return-to-work, and return-to-sport protocol.
                </p>
              </div>
              <div style="background:var(--hp-bg-ivory);padding:var(--space-5);border-radius:var(--radius-lg);border:1px solid var(--hp-border-subtle);">
                <h3 style="font-size:1.15rem;margin-bottom:8px;">Multimodal Baseline Testing</h3>
                <p style="color:var(--hp-text-muted);font-size:var(--text-sm);line-height:1.65;margin:0;">
                  Pre-season baseline testing measures balance, reaction time, memory, and visual tracking so that any in-season injury can be objectively compared against your personal healthy baseline.
                </p>
              </div>
            </div>
          </div>` : '';

  return `${head}
<body>
${renderHeader('services', 1)}

<main>
  <!-- Editorial Clinical Service Hero -->
  <section class="v3-page-hero">
    <div class="container v3-page-hero-grid">
      <div>
        <nav class="v3-breadcrumbs" aria-label="Breadcrumb">
          <a href="/index.html">Home</a>
          <span>/</span>
          <a href="/services/">Services</a>
          <span>/</span>
          <span aria-current="page">${service.title}</span>
        </nav>
        <h1>${service.title} in Midnapore, Calgary</h1>
        <p class="v3-page-hero-lead">${service.shortDescription}</p>
        ${isConcussion ? `<img src="../assets/services/concussion/COMPLETE%20CONCUSSIONS%20LOGO/full/mixed/Complete-Concussions_Logo-Mixed.svg" alt="Complete Concussions Certified Clinic Logo" style="height:58px;width:auto;margin-bottom:20px;display:block;">` : ''}
        <div class="v3-page-hero-meta" style="margin-bottom:var(--space-6);">
          <span class="v3-meta-chip">✓ ${accessBadge}</span>
          <span class="v3-meta-chip">✓ AHCIP Insured Visits</span>
          <span class="v3-meta-chip">📍 100-290 Midpark Way SE</span>
        </div>
        <div style="display:flex;gap:12px;flex-wrap:wrap;">
          <a href="${JOTFORM_APPOINTMENT_URL}" target="_blank" rel="noopener" class="btn btn-teal-glow">Request Appointment Online →</a>
          <a href="tel:4034556656" class="btn btn-ghost-light">Call (403) 455-6656</a>
        </div>
      </div>

      <div class="v3-page-hero-photo">
        ${isConcussion ? `
        <img src="/assets/images/services/concussion-care.png" alt="${photoAlt}" width="1000" height="750" fetchpriority="high" decoding="async">` : `
        <picture>
          <source media="(max-width: 768px)" srcset="/assets/images/clinic-nano/mobile/${photoBase}_mob.webp">
          <img src="/assets/images/clinic-nano/desktop/${photoBase}_desk.webp" alt="${photoAlt}" width="1000" height="750" fetchpriority="high" decoding="async">
        </picture>`}
      </div>
    </div>
  </section>

  <!-- Main Clinical Content + Sticky Sidebar -->
  <section class="v3-section">
    <div class="container">
      <div class="v3-service-layout">
        <!-- Left Column: Clinical Guidance -->
        <div>
          ${concussionSpecialtyBlock}

          <!-- Key Patient Benefits -->
          <div class="v3-content-card">
            <span class="v3-eyebrow">${service.category} · Clinical Overview</span>
            <h2>What to Expect at Your ${service.title} Visit</h2>
            <div class="v3-prose">
              <p>${service.whatToExpect}</p>
            </div>
            <div class="v3-conditions-grid" style="margin-top:24px;">
              ${(service.benefits || []).map(b => `
              <div class="v3-condition-item">
                <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"/></svg>
                <span>${b}</span>
              </div>`).join('')}
            </div>
          </div>

          <!-- Conditions & Clinical Focus Areas -->
          <div class="v3-content-card">
            <span class="v3-eyebrow">Scope of Care</span>
            <h2>Conditions &amp; Clinical Needs We Address</h2>
            <p style="color:var(--hp-text-muted);margin-bottom:8px;">Our Midnapore medical team evaluates, diagnoses, and coordinates care for:</p>
            <div class="v3-conditions-grid">
              ${(service.conditions || []).map(c => `
              <div class="v3-condition-item">
                <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"/></svg>
                <span>${c}</span>
              </div>`).join('')}
            </div>
          </div>

          <!-- Who It Is For & How to Prepare -->
          <div class="v3-content-card">
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:var(--space-8);">
              <div>
                <span class="v3-eyebrow">Patient Eligibility</span>
                <h3 style="font-size:1.35rem;margin-bottom:12px;">Who This Service Is For</h3>
                <div class="v3-prose">
                  <p>${service.whoItIsFor}</p>
                </div>
              </div>
              <div>
                <span class="v3-eyebrow">Before Your Visit</span>
                <h3 style="font-size:1.35rem;margin-bottom:12px;">How to Prepare</h3>
                <div class="v3-prose">
                  <p>${service.preparation}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Physicians Providing This Service -->
          ${servicePhysicians.length > 0 ? `
          <div class="v3-content-card">
            <span class="v3-eyebrow">Verified HealthPlus Medical Roster</span>
            <h2>Physicians &amp; Specialists Providing ${service.title}</h2>
            <p style="color:var(--hp-text-muted);margin-bottom:20px;">Meet the licensed physicians and specialists at HealthPlus Midnapore who provide or coordinate ${service.title}:</p>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:var(--space-4);">
              ${servicePhysicians.slice(0, 6).map(doc => `
              <a href="/team/${doc.slug}.html" style="display:flex;align-items:center;gap:14px;padding:12px;border:1px solid var(--hp-border-subtle);border-radius:var(--radius-lg);background:var(--hp-bg-ivory);text-decoration:none;transition:transform 0.2s,border-color 0.2s;">
                <img src="/${doc.photoMobile || doc.photo}" alt="Dr. ${doc.firstName} ${doc.lastName}" width="56" height="70" loading="lazy" style="width:56px;height:70px;object-fit:cover;object-position:center top;border-radius:10px;flex-shrink:0;">
                <div>
                  <div style="font-weight:700;color:var(--hp-text-heading);font-size:var(--text-sm);">Dr. ${doc.firstName} ${doc.lastName}</div>
                  <div style="font-size:11.5px;color:var(--hp-teal-primary);font-weight:600;">${doc.role}</div>
                  <div style="font-size:11px;color:var(--hp-text-muted);margin-top:2px;">${doc.credentials || ''}</div>
                </div>
              </a>`).join('')}
            </div>
          </div>` : ''}

          <!-- Frequently Asked Questions -->
          ${(service.faq && service.faq.length > 0) ? `
          <div class="v3-content-card">
            <span class="v3-eyebrow">Patient Questions</span>
            <h2>Frequently Asked Questions About ${service.title}</h2>
            <div class="v3-faq-list" style="margin-top:20px;">
              ${service.faq.map((item, idx) => `
              <details class="v3-faq-item" ${idx === 0 ? 'open' : ''}>
                <summary>
                  <span>${item.q}</span>
                  <span class="v3-faq-icon" aria-hidden="true">+</span>
                </summary>
                <div class="v3-faq-answer">${item.a}</div>
              </details>`).join('')}
            </div>
          </div>` : ''}
        </div>

        <!-- Right Column: Sticky Care Sidebar -->
        <aside class="v3-sidebar-sticky">
          <div class="v3-sidebar-card dark">
            <span class="v3-eyebrow" style="color:var(--hp-teal-mint);">Book ${service.title}</span>
            <h3>Schedule Your Visit in Midnapore</h3>
            <p>
              ${isReferral
                ? 'This specialist service requires a physician referral. Need a referral? Book a consultation or walk in to see one of our HealthPlus family physicians.'
                : 'Request an appointment online, request a clinic call-back, call our reception desk, or walk in during clinic hours.'}
            </p>
            <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:18px;">
              <a href="${JOTFORM_APPOINTMENT_URL}" target="_blank" rel="noopener" class="btn btn-teal-glow" style="width:100%;">Request Appointment Online →</a>
              <a href="${JOTFORM_CALLBACK_URL}" target="_blank" rel="noopener" class="btn btn-ghost-light" style="width:100%;">Request Call-Back ↗</a>
              <a href="tel:4034556656" class="btn btn-ghost-light" style="width:100%;">Call (403) 455-6656</a>
            </div>
            <div style="font-size:11.5px;color:rgba(255,255,255,0.75);border-top:1px solid rgba(255,255,255,0.12);padding-top:12px;">
              📍 <strong>100-290 Midpark Way SE</strong>, Calgary, AB T2X 1P1<br>
              📠 Referral Fax: <strong>(403) 648-1876</strong>
            </div>
          </div>

          <div class="v3-sidebar-card">
            <h3>Clinic Opening Hours</h3>
            <table class="v3-hours-table" style="margin-top:8px;">
              <tbody>
                <tr><td>Mon – Thu</td><td>9:00 AM – 6:30 PM</td></tr>
                <tr><td>Friday</td><td>9:00 AM – 4:30 PM</td></tr>
                <tr><td>Saturday</td><td>10:00 AM – 2:00 PM</td></tr>
                <tr><td>Sun &amp; Holidays</td><td class="closed">Closed</td></tr>
              </tbody>
            </table>
            <div class="v3-privacy-notice" style="margin-top:16px;">
              <strong>HIA Privacy Protection:</strong> Please do not send Personal Health Numbers or clinical symptoms by email. Call <a href="tel:4034556656" style="color:var(--hp-teal-primary);font-weight:700;">(403) 455-6656</a>.
            </div>
          </div>
        </aside>
      </div>
    </div>
  </section>

  <!-- Related Services -->
  ${relatedList.length > 0 ? `
  <section class="v3-section v3-section-alt">
    <div class="container">
      <div class="v3-section-header">
        <span class="v3-eyebrow">Connected Care at HealthPlus</span>
        <h2 class="v3-section-title">Related Medical Services</h2>
      </div>
      <!-- HP_RELATED_SERVICES_START -->
      <div class="v3-services-grid">
        ${relatedList.map(rs => `
        <article class="v3-service-card">
          <div class="v3-service-card-top">
            <div class="v3-service-icon">${rs.icon}</div>
            <span class="v3-service-cat">${rs.category}</span>
          </div>
          <h3>${rs.title}</h3>
          <p>${rs.shortDescription}</p>
          <a href="/services/${rs.slug}.html" class="v3-service-link">
            <span>Explore ${rs.title}</span>
            <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd"/></svg>
          </a>
        </article>`).join('')}
      </div>
      <!-- HP_RELATED_SERVICES_END -->
    </div>
  </section>` : ''}
</main>

${renderFooter(1, false)}`;
}

export function buildWomensHealthCampaignPage() {
  const womensDocs = ['dr-0', 'dr-8', 'dr-16', 'dr-7', 'dr-11', 'dr-6']
    .map(slug => teamMembers.find(m => m.slug === slug))
    .filter(Boolean);

  const head = renderHead({
    title: "Women's Health, Contraception & IUD Clinic in SE Calgary | HealthPlus by SEHA Medical",
    description: "Women's health, contraception counseling, Pap screening, and IUD consultation clinic in Midnapore, SE Calgary (100-290 Midpark Way SE). AHCIP-covered primary and specialist care.",
    canonical: 'https://healthplusmed.ca/services/womens-health-iud-clinic-calgary',
    ogImage: 'https://healthplusmed.ca/assets/images/services/womens-health.png',
    depth: 1,
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'MedicalClinic',
            '@id': 'https://healthplusmed.ca/#clinic',
            name: 'HealthPlus by SEHA Medical',
            url: 'https://healthplusmed.ca/',
            telephone: '403-455-6656',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '100-290 Midpark Way SE',
              addressLocality: 'Calgary',
              addressRegion: 'AB',
              postalCode: 'T2X 1P1',
              addressCountry: 'CA'
            }
          },
          {
            '@type': 'MedicalWebPage',
            '@id': 'https://healthplusmed.ca/services/womens-health-iud-clinic-calgary#webpage',
            name: "Women's Health, Contraception & IUD Consultation Clinic — Midnapore, SE Calgary",
            url: 'https://healthplusmed.ca/services/womens-health-iud-clinic-calgary',
            description: "Dedicated women's health, cervical screening, contraception counseling, IUD consultation, and menopause support at HealthPlus by SEHA Medical in Midnapore, Calgary.",
            provider: { '@id': 'https://healthplusmed.ca/#clinic' }
          },
          {
            '@type': 'FAQPage',
            '@id': 'https://healthplusmed.ca/services/womens-health-iud-clinic-calgary#faq',
            mainEntity: [
              {
                '@type': 'Question',
                name: "Do I need a referral for a women's health or contraception consultation at HealthPlus Midnapore?",
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "Primary women's health consultations, Pap screenings, and contraception counseling can be booked directly with our Midnapore clinic at 403-455-6656. Specialist Obstetrics & Gynecology consultations are coordinated by physician referral."
                }
              },
              {
                '@type': 'Question',
                name: "Are women's health visits covered by Alberta Health Care (AHCIP)?",
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. Medically necessary consultations, cervical screenings, and clinical procedures are covered with a valid Alberta Health Care Insurance Plan (AHCIP) card. Prescription devices (such as an IUD) are dispensed through a pharmacy and may be covered by your private or provincial drug plan.'
                }
              },
              {
                '@type': 'Question',
                name: "Can I request a female physician for my women's health appointment?",
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. HealthPlus by SEHA Medical has experienced female physicians on our Midnapore medical team. Please let our reception team know your preference when booking at 403-455-6656.'
                }
              }
            ]
          }
        ]
      }
    ]
  });

  return `${head}
<body>
${renderHeader('services', 1)}

<main>
  <section class="v3-page-hero">
    <div class="container v3-page-hero-grid">
      <div>
        <nav class="v3-breadcrumbs" aria-label="Breadcrumb">
          <a href="/index.html">Home</a>
          <span>/</span>
          <a href="/services/">Services</a>
          <span>/</span>
          <a href="/services/womens-health.html">Women's Health</a>
          <span>/</span>
          <span aria-current="page">Preventive Screening &amp; Contraception Clinic</span>
        </nav>
        <h1>Women's Health, Preventive Screening &amp; Contraception Clinic</h1>
        <p class="v3-page-hero-lead">
          Confidential, evidence-based women's healthcare at HealthPlus by SEHA Medical in Midnapore (100-290 Midpark Way SE). Supporting cervical screening, contraception and IUD consultations, prenatal care, and menopause management with our female family physicians and in-house Obstetrics &amp; Gynecology specialist.
        </p>
        <div class="v3-page-hero-meta" style="margin-bottom:var(--space-6);">
          <span class="v3-meta-chip">✓ Female Family Physicians &amp; OB/GYN Specialist</span>
          <span class="v3-meta-chip">✓ AHCIP Insured Visits</span>
          <span class="v3-meta-chip">✓ Direct Booking &amp; Walk-In Access</span>
        </div>
        <div style="display:flex;gap:12px;flex-wrap:wrap;">
          <a href="${JOTFORM_APPOINTMENT_URL}" target="_blank" rel="noopener" class="btn btn-teal-glow">Request Appointment Online →</a>
          <a href="tel:4034556656" class="btn btn-ghost-light">Call (403) 455-6656</a>
        </div>
      </div>

      <div class="v3-page-hero-photo">
        <picture>
          <source media="(max-width: 768px)" srcset="/assets/images/clinic-nano/mobile/DSC_0820_NANO_mob.webp">
          <img src="/assets/images/clinic-nano/desktop/DSC_0820_NANO_desk.webp" alt="Private consultation room for Women's Health at HealthPlus Midnapore" width="1000" height="750" fetchpriority="high" decoding="async">
        </picture>
      </div>
    </div>
  </section>

  <section class="v3-section">
    <div class="container">
      <div class="v3-service-layout">
        <div>
          <div class="v3-content-card">
            <span class="v3-eyebrow">Midnapore · South Calgary Clinical Program</span>
            <h2>Comprehensive Women's Health Services at Every Life Stage</h2>
            <div class="v3-prose">
              <p>At HealthPlus by SEHA Medical, our physicians provide respectful, trauma-informed, and individualized care across every stage of a woman's life. Whether you are scheduling routine cervical screening, exploring hormonal or non-hormonal contraception, planning a pregnancy, or seeking support for perimenopause and menopause, our clinical team offers clear guidance in a private setting.</p>
            </div>

            <div class="v3-conditions-grid" style="margin-top:24px;">
              <div class="v3-condition-item">
                <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"/></svg>
                <span><strong>Preventive &amp; Cervical Screening:</strong> Routine Pap smears, HPV/STI screening, and breast health exams.</span>
              </div>
              <div class="v3-condition-item">
                <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"/></svg>
                <span><strong>Contraception &amp; IUD Clinic:</strong> Hormonal &amp; copper IUD consultations, insertion, removal, and family planning.</span>
              </div>
              <div class="v3-condition-item">
                <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"/></svg>
                <span><strong>Preconception &amp; Prenatal Care:</strong> Early pregnancy monitoring and in-house OB/GYN specialist coordination.</span>
              </div>
              <div class="v3-condition-item">
                <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"/></svg>
                <span><strong>Perimenopause &amp; Menopause:</strong> Symptom evaluation, HRT discussion, bone density &amp; cardiovascular wellness.</span>
              </div>
            </div>
          </div>

          <div class="v3-content-card">
            <span class="v3-eyebrow">Dedicated Medical Team</span>
            <h2>Women's Health Physicians &amp; OB/GYN Specialist</h2>
            <p style="color:var(--hp-text-muted);margin-bottom:20px;">Our Midnapore clinic features experienced female family physicians alongside Dr. Angela Vinturache (Obstetrics &amp; Gynecology Specialist):</p>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:var(--space-4);">
              ${womensDocs.map(doc => `
              <a href="/team/${doc.slug}.html" style="display:flex;align-items:center;gap:14px;padding:12px;border:1px solid var(--hp-border-subtle);border-radius:var(--radius-lg);background:var(--hp-bg-ivory);text-decoration:none;">
                <img src="/${doc.photoMobile || doc.photo}" alt="Dr. ${doc.firstName} ${doc.lastName}" width="56" height="70" loading="lazy" style="width:56px;height:70px;object-fit:cover;object-position:center top;border-radius:10px;flex-shrink:0;">
                <div>
                  <div style="font-weight:700;color:var(--hp-text-heading);font-size:var(--text-sm);">Dr. ${doc.firstName} ${doc.lastName}</div>
                  <div style="font-size:11.5px;color:var(--hp-teal-primary);font-weight:600;">${doc.role}</div>
                  <div style="font-size:11px;color:var(--hp-text-muted);margin-top:2px;">${doc.credentials || ''}</div>
                </div>
              </a>`).join('')}
            </div>
          </div>

          <div class="v3-content-card">
            <span class="v3-eyebrow">Patient Questions</span>
            <h2>Frequently Asked Questions</h2>
            <div class="v3-faq-list" style="margin-top:20px;">
              <details class="v3-faq-item" open>
                <summary>
                  <span>Do I need a referral for a women's health or contraception consultation at HealthPlus Midnapore?</span>
                  <span class="v3-faq-icon">+</span>
                </summary>
                <div class="v3-faq-answer">Primary women's health consultations, Pap screenings, and contraception counseling can be booked directly with our Midnapore clinic at (403) 455-6656 or online. Specialist Obstetrics &amp; Gynecology consultations are coordinated by physician referral.</div>
              </details>
              <details class="v3-faq-item">
                <summary>
                  <span>Are women's health visits covered by Alberta Health Care (AHCIP)?</span>
                  <span class="v3-faq-icon">+</span>
                </summary>
                <div class="v3-faq-answer">Yes. Medically necessary consultations, cervical screenings, and clinical procedures are covered with a valid Alberta Health Care Insurance Plan (AHCIP) card. Prescription devices (such as an IUD) are dispensed through a pharmacy and may be covered by your private or provincial drug plan.</div>
              </details>
              <details class="v3-faq-item">
                <summary>
                  <span>Can I request a female physician for my women's health appointment?</span>
                  <span class="v3-faq-icon">+</span>
                </summary>
                <div class="v3-faq-answer">Yes. HealthPlus by SEHA Medical has experienced female family physicians and a female Obstetrician-Gynecologist on our Midnapore team. Please let our reception team know your preference when booking at (403) 455-6656.</div>
              </details>
            </div>
          </div>
        </div>

        <aside class="v3-sidebar-sticky">
          <div class="v3-sidebar-card dark">
            <span class="v3-eyebrow" style="color:var(--hp-teal-mint);">Midnapore Clinic</span>
            <h3>Book Your Consultation</h3>
            <p>Schedule your Women's Health, Pap screening, or Contraception/IUD consultation online or by calling our Midnapore reception desk.</p>
            <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:16px;">
              <a href="${JOTFORM_APPOINTMENT_URL}" target="_blank" rel="noopener" class="btn btn-teal-glow" style="width:100%;">Request Appointment Online →</a>
              <a href="${JOTFORM_CALLBACK_URL}" target="_blank" rel="noopener" class="btn btn-ghost-light" style="width:100%;">Request Call-Back ↗</a>
              <a href="tel:4034556656" class="btn btn-ghost-light" style="width:100%;">Call (403) 455-6656</a>
            </div>
            <div style="font-size:11.5px;color:rgba(255,255,255,0.78);border-top:1px solid rgba(255,255,255,0.12);padding-top:12px;">
              <strong>Alberta Health Privacy Notice (Zero-PHI Boundary):</strong> Please do not submit personal health numbers (PHN), dates of birth, or clinical symptoms via general email.
            </div>
          </div>
        </aside>
      </div>
    </div>
  </section>
</main>

${renderFooter(1, false)}`;
}
