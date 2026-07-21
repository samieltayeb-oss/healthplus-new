const fs = require('fs');
const path = require('path');
const siteConfig = require('../config/site.js');
const teamMembers = require('../config/team.js');

const rootDir = path.join(__dirname, '..');
const pagesDir = rootDir;

const directories = ['about', 'team'];
directories.forEach(dir => {
    const p = path.join(pagesDir, dir);
    if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
});

function getHeader(depth, title, description, schemaStr = '') {
    const prefix = depth === 0 ? '' : depth === 1 ? '../' : '../../';
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
    <meta property="og:image" content="https://healthplusmed.ca/assets/images/global/social-share.png">
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:ital,wght@0,600;0,700;1,600&display=swap" rel="stylesheet">
    <link rel="icon" type="image/png" href="${rootPrefix}assets/icons/favicon.png">
    <link rel="apple-touch-icon" href="${rootPrefix}assets/icons/apple-touch-icon.png">
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
                    <a href="${rootPrefix}services/index.html" class="nav-link" aria-haspopup="true">Services</a>
                    <!-- HP_SERVICES_NAV_START -->
                    <!-- HP_SERVICES_NAV_END -->
                </li>
                <li><a href="${rootPrefix}team/index.html" class="nav-link">Our Team</a></li>
                <li><a href="${rootPrefix}about/index.html" class="nav-link">About</a></li>
                <li><a href="${rootPrefix}faq.html" class="nav-link">FAQ</a></li>
                <li><a href="${rootPrefix}contact.html" class="nav-link">Contact</a></li>
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
<!-- HP_FOOTER_START -->
<footer class="hp-footer" style="margin-top:auto; background: var(--hp-surface); border-top: 1px solid var(--hp-border); padding-top: var(--space-16);">
    <div class="container" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: var(--space-12); padding-bottom: var(--space-12);">
        
        <!-- Brand Section -->
        <div>
            <a href="${rootPrefix}index.html" style="display:inline-block; margin-bottom:var(--space-6);">
                <img src="${rootPrefix}assets/logo_hp.png" alt="HealthPlus Medical" style="height: 48px; width: auto;">
            </a>
            <p style="color: var(--hp-text-muted); line-height: 1.7; margin-bottom: var(--space-6);">Providing exceptional, compassionate, and comprehensive medical care to Calgary and surrounding communities since 2006.</p>
            <div style="display: flex; gap: 16px;">
                <a href="#" style="color: var(--hp-primary); width: 40px; height: 40px; border-radius: 50%; background: var(--hp-primary-ultra); display: flex; align-items: center; justify-content: center; transition: all 0.2s;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
                <a href="#" style="color: var(--hp-primary); width: 40px; height: 40px; border-radius: 50%; background: var(--hp-primary-ultra); display: flex; align-items: center; justify-content: center; transition: all 0.2s;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
            </div>
        </div>

        <!-- Quick Links -->
        <div>
            <h4 style="color: var(--hp-heading); margin-bottom: var(--space-6); font-family: var(--font-heading); font-weight: 600;">Quick Links</h4>
            <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 12px;">
                <li><a href="${rootPrefix}services/" style="color: var(--hp-text); text-decoration: none; transition: color 0.2s;">Our Services</a></li>
                <li><a href="${rootPrefix}team/" style="color: var(--hp-text); text-decoration: none; transition: color 0.2s;">Medical Team</a></li>
                <li><a href="${rootPrefix}about/" style="color: var(--hp-text); text-decoration: none; transition: color 0.2s;">About Clinic</a></li>
                <li><a href="${rootPrefix}faq.html" style="color: var(--hp-text); text-decoration: none; transition: color 0.2s;">Patient FAQ</a></li>
                <li><a href="${rootPrefix}contact.html" style="color: var(--hp-text); text-decoration: none; transition: color 0.2s;">Contact Us</a></li>
            </ul>
        </div>

        <!-- Contact Info -->
        <div>
            <h4 style="color: var(--hp-heading); margin-bottom: var(--space-6); font-family: var(--font-heading); font-weight: 600;">Contact Us</h4>
            <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 16px;">
                <li style="display: flex; gap: 12px; align-items: flex-start; color: var(--hp-text-muted);">
                    <svg style="color: var(--hp-primary); flex-shrink: 0; margin-top: 4px;" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    <span>227 153 Ave SE<br>Calgary, AB T2X 2K2</span>
                </li>
                <li style="display: flex; gap: 12px; align-items: center; color: var(--hp-text-muted);">
                    <svg style="color: var(--hp-primary); flex-shrink: 0;" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    <span>(403) 254-4633</span>
                </li>
                <li style="display: flex; gap: 12px; align-items: center; color: var(--hp-text-muted);">
                    <svg style="color: var(--hp-primary); flex-shrink: 0;" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                    <span><a href="https://form.jotform.com/sehamanagementinv/-appointment-request-form" target="_blank" style="color:var(--hp-primary); text-decoration:none; font-weight:600;">Book Online</a></span>
                </li>
            </ul>
        </div>

        <!-- Hours -->
        <div>
            <h4 style="color: var(--hp-heading); margin-bottom: var(--space-6); font-family: var(--font-heading); font-weight: 600;">Clinic Hours</h4>
            <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 12px;">
                <li style="display: flex; justify-content: space-between; color: var(--hp-text); border-bottom: 1px dashed var(--hp-border); padding-bottom: 8px;">
                    <span>Mon - Fri</span>
                    <span style="font-weight: 500;">9:00 AM - 5:00 PM</span>
                </li>
                <li style="display: flex; justify-content: space-between; color: var(--hp-text); border-bottom: 1px dashed var(--hp-border); padding-bottom: 8px;">
                    <span>Saturday</span>
                    <span style="font-weight: 500;">10:00 AM - 2:00 PM</span>
                </li>
                <li style="display: flex; justify-content: space-between; color: var(--hp-text); padding-bottom: 8px;">
                    <span>Sun & Holidays</span>
                    <span style="font-weight: 500; color: var(--hp-primary);">Closed</span>
                </li>
            </ul>
        </div>

    </div>
    
    <div style="border-top: 1px solid var(--hp-border); background: #f8fafc;">
        <div class="container" style="padding: var(--space-6) 0; display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: var(--space-4);">
            <p style="color: var(--hp-text-muted); font-size: var(--text-sm); margin: 0;">&copy; 2026 HealthPlus by SEHA Medical. All rights reserved.</p>
            <p style="color: var(--hp-text-muted); font-size: var(--text-sm); margin: 0;">Built by <a href="https://nexora.com" target="_blank" rel="noopener" style="color: var(--hp-primary); font-weight: 600; text-decoration: none;">Nexora</a></p>
        </div>
    </div>
</footer>
<!-- HP_FOOTER_END -->
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
let aboutHtml = getHeader(1, "About Us | HealthPlus Medical", "Learn about HealthPlus Medical's mission, vision, and values.", aboutSchema);
aboutHtml += `
    <section class="hp-hero" style="position:relative; min-height: 50vh; display: flex; align-items: center; padding-top: 120px; background:var(--hp-primary-ultra); overflow:hidden;">
        <img src="../assets/images/global/healthplus-placeholder.svg" alt="" width="1920" height="1080" decoding="async" loading="eager" fetchpriority="high" style="position:absolute; top:0; left:0; width:100%; height:100%; object-fit:cover; object-position:center; z-index:0; opacity:0.15;">
        <div class="container text-center" style="position:relative; z-index:1;">
        <div class="container text-center">
            <span class="eyebrow" style="color:var(--hp-primary);">Our Story</span>
            <h1 class="display-title" style="color:var(--hp-heading);margin:var(--space-4) 0; font-size: var(--text-5xl);">A Passion for Better Medicine</h1>
            <p class="lead-text" style="color:var(--hp-text-muted);max-width:800px;margin:0 auto; font-size: var(--text-xl);">Health Plus Medical is a family practice and walk-in clinic providing primary healthcare to individuals and families in Midnapore and surrounding areas since <strong style="color:var(--hp-primary);">2006</strong>.</p>
        </div>
    </section>
    
    <section class="section" style="padding-top: var(--space-16);">
        <div class="container" style="max-width:900px; margin:0 auto; line-height: 1.8;">
            <div style="background: var(--hp-surface); padding: var(--space-8); border-radius: var(--radius-2xl); box-shadow: var(--hp-shadow-lg); border: 1px solid var(--hp-border); text-align: center; margin-bottom: var(--space-12);">
                <h2 style="color:var(--hp-primary); font-size: var(--text-3xl); margin-bottom: var(--space-6);">Reinventing Healthcare</h2>
                <p style="font-size: var(--text-lg); color: var(--hp-text); margin-bottom: var(--space-6);">After an extended closure and under a new management team, we have reinvented ourselves by building a modern facility with integrated allied medical services to provide exceptional healthcare to you and your families.</p>
                <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: var(--space-4); margin-top: var(--space-6);">
                    <span style="background: var(--hp-bg-section); padding: 8px 16px; border-radius: var(--radius-full); font-weight: 600; color: var(--hp-heading);">Family Medicine</span>
                    <span style="background: var(--hp-bg-section); padding: 8px 16px; border-radius: var(--radius-full); font-weight: 600; color: var(--hp-heading);">Walk-In Clinic</span>
                    <span style="background: var(--hp-bg-section); padding: 8px 16px; border-radius: var(--radius-full); font-weight: 600; color: var(--hp-heading);">Internal Medicine</span>
                    <span style="background: var(--hp-bg-section); padding: 8px 16px; border-radius: var(--radius-full); font-weight: 600; color: var(--hp-heading);">Mental Health</span>
                    <span style="background: var(--hp-bg-section); padding: 8px 16px; border-radius: var(--radius-full); font-weight: 600; color: var(--hp-heading);">MVA Care</span>
                    <span style="background: var(--hp-bg-section); padding: 8px 16px; border-radius: var(--radius-full); font-weight: 600; color: var(--hp-heading);">Obstetrics & Gynecology</span>
                    <span style="background: var(--hp-bg-section); padding: 8px 16px; border-radius: var(--radius-full); font-weight: 600; color: var(--hp-heading);">Pediatric Care</span>
                    <span style="background: var(--hp-bg-section); padding: 8px 16px; border-radius: var(--radius-full); font-weight: 600; color: var(--hp-heading);">Sports Medicine</span>
                    <span style="background: var(--hp-bg-section); padding: 8px 16px; border-radius: var(--radius-full); font-weight: 600; color: var(--hp-heading);">Virtual Care</span>
                    <span style="background: var(--hp-bg-section); padding: 8px 16px; border-radius: var(--radius-full); font-weight: 600; color: var(--hp-heading);">Women's Health</span>
                    <span style="background: var(--hp-bg-section); padding: 8px 16px; border-radius: var(--radius-full); font-weight: 600; color: var(--hp-heading);">Concussion Care</span>
                </div>
            </div>
            
            <div style="text-align: center; margin-top: var(--space-12);">
                <p style="font-size: var(--text-lg); color: var(--hp-text-muted); margin-bottom: var(--space-8);">All walk-in patients are welcome, or you can simply book your appointment online.</p>
                <div style="display: flex; gap: var(--space-4); justify-content: center; flex-wrap: wrap;">
                    <a href="../book.html" class="btn btn-primary btn-lg">Book Appointment Online</a>
                    <a href="../services/index.html" class="btn btn-secondary btn-lg">Explore Our Services</a>
                </div>
            </div>
        </div>
    </section>
`;
aboutHtml += getFooter(1);
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
let teamHtml = getHeader(1, "Our Team | HealthPlus Medical", "Meet the experienced physicians and staff at HealthPlus Medical.", teamSchema);
teamHtml += `
    <section class="hp-hero" style="position:relative; padding-top: 120px; padding-bottom: 60px; background:var(--hp-primary-ultra); overflow:hidden;">
        <img src="../assets/images/global/healthplus-placeholder.svg" alt="" width="1920" height="1080" decoding="async" loading="eager" fetchpriority="high" style="position:absolute; top:0; left:0; width:100%; height:100%; object-fit:cover; object-position:center; z-index:0; opacity:0.15;">
        <div class="container text-center" style="position:relative; z-index:1; max-width: 800px;">
            <p class="subtitle" style="color:var(--hp-secondary);font-weight:600;letter-spacing:1px;text-transform:uppercase;margin-bottom:var(--space-2);">Dedicated Professionals</p>
            <h1 class="display-title" style="color:var(--hp-primary);margin-bottom:var(--space-4);">Meet Our Medical Team</h1>
            <p class="lead-text" style="color:var(--hp-text-muted);">Experienced, compassionate physicians dedicated to your long-term health.</p>
        </div>
    </section>

    <!-- PHYSICIANS SECTION -->
    <section class="section" style="padding-top: 0;">
        <div class="container text-center">
            <h2 style="color:var(--hp-primary);margin-bottom:var(--space-8);">Family Physicians</h2>
            <div class="team-grid">
                <!-- HP_TEAM_PHYSICIANS_START -->
                <!-- HP_TEAM_PHYSICIANS_END -->
            </div>
        </div>
    </section>

    <!-- SPECIALISTS SECTION -->
    <section class="section" style="background:var(--hp-bg-section);">
        <div class="container text-center">
            <h2 style="color:var(--hp-primary);margin-bottom:var(--space-8);">Specialists</h2>
            <div class="team-grid">
                <!-- HP_TEAM_SPECIALISTS_START -->
                <!-- HP_TEAM_SPECIALISTS_END -->
            </div>
        </div>
    </section>

    <!-- MODALS CONTAINER -->
    <div id="hp-modals-container">
        <!-- HP_TEAM_MODALS_START -->
        <!-- HP_TEAM_MODALS_END -->
    </div>
`;
teamHtml += getFooter(1);
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
let contactHtml = getHeader(0, "Contact Us | HealthPlus Medical", "Get in touch with HealthPlus Medical for general inquiries.", contactSchema);
contactHtml += `
    <section class="hp-hero" style="position:relative; min-height: 30vh; display: flex; align-items: center; padding-top: 120px; background:var(--hp-primary-ultra); overflow:hidden;">
        <img src="../assets/images/global/healthplus-placeholder.svg" alt="" width="1920" height="1080" decoding="async" loading="eager" fetchpriority="high" style="position:absolute; top:0; left:0; width:100%; height:100%; object-fit:cover; object-position:center; z-index:0; opacity:0.15;">
        <div class="container text-center" style="position:relative; z-index:1;">
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
contactHtml += getFooter(0);
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
let bookHtml = getHeader(0, "Request Appointment | HealthPlus Medical", "Request a non-emergency appointment with HealthPlus Medical.", bookSchema);
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
bookHtml += getFooter(0);
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

    let profileHtml = getHeader(1, member.seoTitle, member.seoDescription, profileSchema);
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
    profileHtml += getFooter(1);
    fs.writeFileSync(path.join(pagesDir, 'team', `${member.slug}.html`), profileHtml, 'utf8');
});

// 6. 404 Error Page (404.html in root)
let notFoundHtml = getHeader(0, "Page Not Found | HealthPlus Medical", "The page you are looking for cannot be found.");
notFoundHtml += `
    <section class="hp-hero" style="min-height: 60vh; display: flex; align-items: center; padding-top: 120px; background:var(--hp-surface);">
        <div class="container text-center">
            <h1 style="color:var(--hp-heading);margin-bottom:var(--space-4);font-size:3rem;">404</h1>
            <h2 style="color:var(--hp-primary);margin-bottom:var(--space-6);">Page Not Found</h2>
            <p class="lead" style="color:var(--hp-text-muted);max-width:600px;margin:0 auto var(--space-8);">We can't seem to find the page you're looking for. It may have been moved or no longer exists.</p>
            <div style="display:flex;gap:var(--space-4);justify-content:center;">
                <a href="/index.html" class="btn btn-primary">Return Home</a>
                <a href="/contact.html" class="btn btn-secondary">Contact Us</a>
            </div>
        </div>
    </section>
`;
notFoundHtml += getFooter(0);
fs.writeFileSync(path.join(rootDir, '404.html'), notFoundHtml, 'utf8');

console.log('Successfully generated Core Page shells, Team Profiles, and 404 page.');
