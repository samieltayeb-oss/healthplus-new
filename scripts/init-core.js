const fs = require('fs');
const path = require('path');
const siteConfig = require('../config/site.js');
const teamMembers = require('../config/team.js');

const rootDir = path.join(__dirname, '..');
const pagesDir = path.join(rootDir, 'pages');

const directories = ['about', 'team'];
directories.forEach(dir => {
    const p = path.join(pagesDir, dir);
    if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
});

function getHeader(depth, title, description, schemaStr = '') {
    const prefix = depth === 0 ? 'pages/' : depth === 1 ? '' : '../';
    const rootPrefix = depth === 0 ? '' : depth === 1 ? '../' : '../../';
    
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <meta name="description" content="${description}">
    <link rel="canonical" href="https://healthplusmed.ca/">
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${description}">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://healthplusmed.ca/">
    <meta property="og:image" content="https://healthplusmed.ca/assets/social_share.webp">
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:ital,wght@0,600;0,700;1,600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="${rootPrefix}css/hp-premium.css">
    ${schemaStr}
</head>
<body class="hp-body">

<header>
    <nav class="hp-navbar" aria-label="Main Navigation">
        <div class="container nav-inner">
            <a href="${rootPrefix}index.html" class="nav-logo" aria-label="HealthPlus Medical Home">
                <img src="${rootPrefix}assets/logo_hp.png" alt="HealthPlus Medical">
            </a>
            <ul class="nav-links" role="list">
                <li class="nav-dropdown" style="position:relative;">
                    <a href="${rootPrefix}pages/services/index.html" class="nav-link" aria-haspopup="true">Services</a>
                    <!-- HP_SERVICES_NAV_START -->
                    <!-- HP_SERVICES_NAV_END -->
                </li>
                <li><a href="${rootPrefix}pages/team/index.html" class="nav-link">Our Team</a></li>
                <li><a href="${rootPrefix}pages/about/index.html" class="nav-link">About</a></li>
                <li><a href="${rootPrefix}pages/faq.html" class="nav-link">FAQ</a></li>
                <li><a href="${rootPrefix}pages/contact.html" class="nav-link">Contact</a></li>
            </ul>
            <a href="https://form.jotform.com/sehamanagementinv/-appointment-request-form" target="_blank" rel="noopener noreferrer" class="btn btn-primary nav-cta">Book Appointment</a>
            <button class="nav-hamburger" aria-label="Open menu"><span></span><span></span><span></span></button>
        </div>
    </nav>
</header>
<main>
`;
}

function getFooter(depth) {
    const rootPrefix = depth === 0 ? '' : depth === 1 ? '../' : '../../';
    return `</main>
<footer class="hp-footer" style="margin-top:auto;">
    <div class="container text-center" style="padding:var(--space-10) 0;">
        <p>&copy; 2026 HealthPlus by SEHA Medical. All rights reserved.</p>
    </div>
</footer>
<script src="${rootPrefix}js/hp-core.js"></script>
</body>
</html>`;
}

// 1. About Page (pages/about/index.html)
const aboutSchema = `
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "mainEntity": {
    "@type": "MedicalOrganization",
    "name": "HealthPlus Medical"
  }
}
</script>`;
let aboutHtml = getHeader(2, "About Us | HealthPlus Medical", "Learn about HealthPlus Medical's mission, vision, and values.", aboutSchema);
aboutHtml += `
    <section class="hp-hero" style="min-height: 40vh; display: flex; align-items: center; padding-top: 120px; background:var(--hp-primary-ultra);">
        <div class="container text-center">
            <span class="eyebrow" style="color:var(--hp-primary);">Our Story</span>
            <h1 style="color:var(--hp-heading);margin:var(--space-4) 0;">Rooted in Calgary, Built on Trust.</h1>
            <p class="lead" style="color:var(--hp-text-muted);max-width:700px;margin:0 auto;">HealthPlus Medical was founded with a clear philosophy: healthcare should be accessible, comprehensive, and centered around the patient.</p>
        </div>
    </section>
    <section class="section">
        <div class="container" style="max-width:800px; margin:0 auto; line-height: 1.8;">
            <h2 style="color:var(--hp-heading);margin-bottom:var(--space-4);">Our Mission</h2>
            <p style="margin-bottom:var(--space-8);">[Mission Placeholder]</p>
            
            <h2 style="color:var(--hp-heading);margin-bottom:var(--space-4);">Our Vision</h2>
            <p style="margin-bottom:var(--space-8);">[Vision Placeholder]</p>
            
            <h2 style="color:var(--hp-heading);margin-bottom:var(--space-4);">Our Values</h2>
            <ul>
                <li><strong>Compassion:</strong> [Value 1 Placeholder]</li>
                <li><strong>Excellence:</strong> [Value 2 Placeholder]</li>
                <li><strong>Community:</strong> [Value 3 Placeholder]</li>
            </ul>
        </div>
    </section>
    <section class="section" style="background:var(--hp-bg-section);">
        <div class="container text-center">
            <h2 style="color:var(--hp-heading);margin-bottom:var(--space-4);">Integrated Care Approach</h2>
            <p style="margin-bottom:var(--space-6);max-width:600px;margin:0 auto var(--space-8);">[Integrated Care Placeholder]</p>
            <a href="../team/index.html" class="btn btn-primary">Meet Our Team</a>
        </div>
    </section>
`;
aboutHtml += getFooter(2);
fs.writeFileSync(path.join(pagesDir, 'about', 'index.html'), aboutHtml, 'utf8');

// 2. Team Directory (pages/team/index.html)
const teamSchema = `
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Our Medical Team"
}
</script>`;
let teamHtml = getHeader(2, "Our Team | HealthPlus Medical", "Meet the experienced physicians and staff at HealthPlus Medical.", teamSchema);
teamHtml += `
    <section class="hp-hero" style="min-height: 40vh; display: flex; align-items: center; padding-top: 120px; background:var(--hp-surface);">
        <div class="container text-center">
            <span class="eyebrow" style="color:var(--hp-primary);">Dedicated Professionals</span>
            <h1 style="color:var(--hp-heading);margin:var(--space-4) 0;">Meet Our Medical Team</h1>
            <p class="lead" style="color:var(--hp-text-muted);max-width:700px;margin:0 auto;">Experienced, compassionate physicians dedicated to your long-term health.</p>
        </div>
    </section>
    <section class="section">
        <div class="container">
            <!-- HP_TEAM_DIRECTORY_START -->
            <!-- HP_TEAM_DIRECTORY_END -->
        </div>
    </section>
`;
teamHtml += getFooter(2);
fs.writeFileSync(path.join(pagesDir, 'team', 'index.html'), teamHtml, 'utf8');

// 3. Contact Page (pages/contact.html)
const contactSchema = `
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "mainEntity": {
    "@type": "MedicalOrganization",
    "name": "HealthPlus Medical"
  }
}
</script>`;
let contactHtml = getHeader(1, "Contact Us | HealthPlus Medical", "Get in touch with HealthPlus Medical for general inquiries.", contactSchema);
contactHtml += `
    <section class="hp-hero" style="min-height: 30vh; display: flex; align-items: center; padding-top: 120px; background:var(--hp-primary-ultra);">
        <div class="container text-center">
            <h1 style="color:var(--hp-heading);margin:var(--space-4) 0;">Contact Us</h1>
            <p class="lead" style="color:var(--hp-text-muted);max-width:700px;margin:0 auto;">We're here to help. Reach out with any general questions.</p>
        </div>
    </section>
    <section class="section">
        <div class="container" style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-12);">
            <div>
                <!-- HP_CONTACT_INFO_START -->
                <!-- HP_CONTACT_INFO_END -->
                
                <div style="background:var(--hp-surface);border:1px solid #ffcdd2;border-left:4px solid #f44336;padding:var(--space-5);border-radius:var(--radius-md);margin-top:var(--space-8);">
                    <h3 style="color:#d32f2f;margin-bottom:var(--space-2);font-size:var(--text-md);">Medical Emergency Notice</h3>
                    <p style="color:var(--hp-text);font-size:var(--text-sm);margin:0;">${siteConfig.emergencyNotice}</p>
                </div>
            </div>
            <div style="background:var(--hp-surface);border:1px solid var(--hp-border);border-radius:var(--radius-xl);padding:var(--space-8);">
                <h2 style="font-size:var(--text-xl);margin-bottom:var(--space-6);">General Inquiry</h2>
                <form onsubmit="event.preventDefault(); alert('This form is currently in demonstration mode. No data was transmitted.');">
                    <div style="margin-bottom:var(--space-4);">
                        <label style="display:block;margin-bottom:var(--space-2);font-weight:500;">Name</label>
                        <input type="text" style="width:100%;padding:12px;border:1px solid var(--hp-border);border-radius:var(--radius-md);" required>
                    </div>
                    <div style="margin-bottom:var(--space-4);">
                        <label style="display:block;margin-bottom:var(--space-2);font-weight:500;">Email</label>
                        <input type="email" style="width:100%;padding:12px;border:1px solid var(--hp-border);border-radius:var(--radius-md);" required>
                    </div>
                    <div style="margin-bottom:var(--space-4);">
                        <label style="display:block;margin-bottom:var(--space-2);font-weight:500;">Message</label>
                        <textarea rows="4" style="width:100%;padding:12px;border:1px solid var(--hp-border);border-radius:var(--radius-md);" required></textarea>
                    </div>
                    <p style="font-size:12px;color:var(--hp-text-muted);margin-bottom:var(--space-4);">Privacy Notice: Please do not include sensitive medical information in this form.</p>
                    <button type="submit" class="btn btn-primary" style="width:100%;justify-content:center;">Send Message</button>
                </form>
            </div>
        </div>
    </section>
`;
contactHtml += getFooter(1);
fs.writeFileSync(path.join(pagesDir, 'contact.html'), contactHtml, 'utf8');

// 4. Book Appointment Page (pages/book.html)
const bookSchema = `
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Request an Appointment"
}
</script>`;
let bookHtml = getHeader(1, "Request Appointment | HealthPlus Medical", "Request a non-emergency appointment with HealthPlus Medical.", bookSchema);
bookHtml += `
    <section class="hp-hero" style="min-height: 30vh; display: flex; align-items: center; padding-top: 120px; background:var(--hp-surface);">
        <div class="container text-center">
            <h1 style="color:var(--hp-heading);margin:var(--space-4) 0;">Request an Appointment</h1>
            <p class="lead" style="color:var(--hp-text-muted);max-width:700px;margin:0 auto;">Complete the form below to request a time. This is a request flow, not a guaranteed booking.</p>
        </div>
    </section>
    <section class="section">
        <div class="container" style="max-width:600px;margin:0 auto;">
            <div style="background:var(--hp-surface);border:1px solid var(--hp-border);border-radius:var(--radius-xl);padding:var(--space-8);">
                <form onsubmit="event.preventDefault(); alert('This form is currently in demonstration mode. No data was transmitted.');">
                    <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-4);margin-bottom:var(--space-4);">
                        <div>
                            <label style="display:block;margin-bottom:var(--space-2);font-weight:500;">First Name *</label>
                            <input type="text" style="width:100%;padding:12px;border:1px solid var(--hp-border);border-radius:var(--radius-md);" required>
                        </div>
                        <div>
                            <label style="display:block;margin-bottom:var(--space-2);font-weight:500;">Last Name *</label>
                            <input type="text" style="width:100%;padding:12px;border:1px solid var(--hp-border);border-radius:var(--radius-md);" required>
                        </div>
                    </div>
                    
                    <div style="margin-bottom:var(--space-4);">
                        <label style="display:block;margin-bottom:var(--space-2);font-weight:500;">Phone Number *</label>
                        <input type="tel" style="width:100%;padding:12px;border:1px solid var(--hp-border);border-radius:var(--radius-md);" required>
                    </div>
                    <div style="margin-bottom:var(--space-4);">
                        <label style="display:block;margin-bottom:var(--space-2);font-weight:500;">Email Address *</label>
                        <input type="email" style="width:100%;padding:12px;border:1px solid var(--hp-border);border-radius:var(--radius-md);" required>
                    </div>

                    <div style="margin-bottom:var(--space-4);">
                        <label style="display:block;margin-bottom:var(--space-2);font-weight:500;">Preferred Service</label>
                        <select style="width:100%;padding:12px;border:1px solid var(--hp-border);border-radius:var(--radius-md);">
                            <option>General Consultation</option>
                            <option>Family Medicine</option>
                            <option>Walk-In Clinic</option>
                            <option>Other</option>
                        </select>
                    </div>

                    <div style="margin-bottom:var(--space-6);">
                        <label style="display:flex;align-items:center;gap:12px;cursor:pointer;font-size:var(--text-sm);">
                            <input type="checkbox" required>
                            I understand this is a request and I will not include private medical information.
                        </label>
                    </div>
                    
                    <button type="button" class="btn btn-primary" style="width:100%;justify-content:center;" onclick="alert('Form submission is disabled until backend integration.')">Submit Request</button>
                </form>
            </div>
            
            <div style="background:var(--hp-surface);border:1px solid #ffcdd2;border-left:4px solid #f44336;padding:var(--space-5);border-radius:var(--radius-md);margin-top:var(--space-8);">
                <p style="color:var(--hp-text);font-size:var(--text-sm);margin:0;font-weight:600;">For a medical emergency, call 911 or go to the nearest emergency department immediately.</p>
            </div>
        </div>
    </section>
`;
bookHtml += getFooter(1);
fs.writeFileSync(path.join(pagesDir, 'book.html'), bookHtml, 'utf8');

// 5. Doctor Profile Templates (pages/team/[slug].html)
teamMembers.forEach(member => {
    let profileSchema = '';
    // Only output physician schema if it's a real verified physician (we check for placeholder text)
    if (!member.firstName.includes('[') && !member.lastName.includes('[')) {
        profileSchema = `
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Physician",
  "name": "Dr. ${member.firstName} ${member.lastName}",
  "medicalSpecialty": "${member.specialty}"
}
</script>`;
    }

    let profileHtml = getHeader(2, member.seoTitle, member.seoDescription, profileSchema);
    profileHtml += `
    <section class="hp-hero" style="min-height: 20vh; display: flex; align-items: center; padding-top: 120px; background:var(--hp-surface);">
        <div class="container">
            <ul class="breadcrumbs" style="list-style:none;padding:0;margin:0 0 var(--space-4);display:flex;gap:var(--space-2);color:var(--hp-text-muted);font-size:var(--text-sm);">
                <li><a href="../../index.html" style="color:inherit;text-decoration:none;">Home</a> /</li>
                <li><a href="index.html" style="color:inherit;text-decoration:none;">Team</a> /</li>
                <li style="color:var(--hp-heading);font-weight:500;">Dr. ${member.firstName} ${member.lastName}</li>
            </ul>
        </div>
    </section>

    <section class="section" style="padding-top:0;">
        <div class="container" style="display:grid;grid-template-columns:300px 1fr;gap:var(--space-12);">
            <aside>
                <div style="border-radius:var(--radius-xl);overflow:hidden;margin-bottom:var(--space-6);box-shadow:var(--hp-shadow-md);">
                    <img src="../../${member.photo}" alt="Dr. ${member.lastName}" style="width:100%;height:auto;display:block;aspect-ratio:3/4;object-fit:cover;background:#e2e8f0;">
                </div>
                <div style="background:var(--hp-primary-ultra);border-radius:var(--radius-xl);padding:var(--space-6);text-align:center;">
                    <h3 style="color:var(--hp-primary-dark);margin-bottom:var(--space-3);">Book an Appointment</h3>
                    <p style="color:var(--hp-text);font-size:var(--text-sm);margin-bottom:var(--space-4);">Request a consultation with Dr. ${member.lastName}.</p>
                    <a href="https://form.jotform.com/sehamanagementinv/-appointment-request-form" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="width:100%;justify-content:center;">Book Now</a>
                </div>
            </aside>
            
            <div class="content-main">
                <h1 style="color:var(--hp-heading);margin-bottom:var(--space-2);">Dr. ${member.firstName} ${member.lastName}, ${member.credentials}</h1>
                <p style="color:var(--hp-primary);font-size:var(--text-lg);font-weight:600;margin-bottom:var(--space-6);">${member.role}</p>
                
                <h2 style="font-size:var(--text-xl);margin-bottom:var(--space-3);">Biography</h2>
                <p style="color:var(--hp-text);line-height:1.7;margin-bottom:var(--space-8);">${member.fullBio}</p>
                
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-8);margin-bottom:var(--space-8);">
                    <div>
                        <h3 style="font-size:var(--text-lg);margin-bottom:var(--space-3);">Clinical Interests</h3>
                        <ul style="padding-left:20px;color:var(--hp-text-muted);">
                            ${member.clinicalInterests.map(i => `<li style="margin-bottom:8px;">${i}</li>`).join('')}
                        </ul>
                    </div>
                    <div>
                        <h3 style="font-size:var(--text-lg);margin-bottom:var(--space-3);">Languages Spoken</h3>
                        <ul style="padding-left:20px;color:var(--hp-text-muted);">
                            ${member.languages.map(l => `<li style="margin-bottom:8px;">${l}</li>`).join('')}
                        </ul>
                    </div>
                </div>
                
                <h2 style="font-size:var(--text-xl);margin-bottom:var(--space-3);">Care Philosophy</h2>
                <div style="background:var(--hp-surface);border-left:4px solid var(--hp-primary);padding:var(--space-5);border-radius:var(--radius-md);font-style:italic;color:var(--hp-text-muted);margin-bottom:var(--space-8);">
                    "${member.carePhilosophy}"
                </div>
                
                <p style="font-size:var(--text-xs);color:var(--hp-text-muted);">Development Note: This is a placeholder profile template. Do not present this as a verified practitioner.</p>
            </div>
        </div>
    </section>
`;
    profileHtml += getFooter(2);
    fs.writeFileSync(path.join(pagesDir, 'team', `${member.slug}.html`), profileHtml, 'utf8');
});

// 6. 404 Error Page (404.html in root)
let notFoundHtml = getHeader(1, "Page Not Found | HealthPlus Medical", "The page you are looking for cannot be found.");
notFoundHtml += `
    <section class="hp-hero" style="min-height: 60vh; display: flex; align-items: center; padding-top: 120px; background:var(--hp-surface);">
        <div class="container text-center">
            <h1 style="color:var(--hp-heading);margin-bottom:var(--space-4);font-size:3rem;">404</h1>
            <h2 style="color:var(--hp-primary);margin-bottom:var(--space-6);">Page Not Found</h2>
            <p class="lead" style="color:var(--hp-text-muted);max-width:600px;margin:0 auto var(--space-8);">We can't seem to find the page you're looking for. It may have been moved or no longer exists.</p>
            <div style="display:flex;gap:var(--space-4);justify-content:center;">
                <a href="/index.html" class="btn btn-primary">Return Home</a>
                <a href="/pages/contact.html" class="btn btn-secondary">Contact Us</a>
            </div>
        </div>
    </section>
`;
notFoundHtml += getFooter(1);
fs.writeFileSync(path.join(rootDir, '404.html'), notFoundHtml, 'utf8');

console.log('Successfully generated Core Page shells, Team Profiles, and 404 page.');
