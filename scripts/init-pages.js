const fs = require('fs');
const path = require('path');
const services = require('../config/services.js');

const rootDir = path.join(__dirname, '..');
const pagesDir = rootDir;
const servicesDir = path.join(pagesDir, 'services');

if (!fs.existsSync(servicesDir)) {
    fs.mkdirSync(servicesDir, { recursive: true });
}

// 1. Generate pages/services/index.html
const indexHtml = '<!DOCTYPE html>\n' +
'<html lang="en">\n' +
'<head>\n' +
'    <meta charset="UTF-8">\n' +
'    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n' +
'    <title>Medical Services | HealthPlus Medical Calgary</title>\n' +
'    <meta name="description" content="Comprehensive medical services at HealthPlus Medical. From family medicine and walk-in care to specialized internal medicine and pediatrics.">\n' +
'    <link rel="canonical" href="https://healthplusmed.ca/services">\n' +
'    <meta property="og:title" content="Medical Services | HealthPlus Medical Calgary">\n' +
'    <meta property="og:description" content="Comprehensive medical services at HealthPlus Medical. From family medicine and walk-in care to specialized internal medicine and pediatrics.">\n' +
'    <meta property="og:type" content="website">\n' +
'    <meta property="og:url" content="https://healthplusmed.ca/services">\n' +
'    <meta property="og:image" content="https://healthplusmed.ca/assets/social_share.webp">\n' +
'    \n' +
'    <link rel="preconnect" href="https://fonts.googleapis.com">\n' +
'    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n' +
'    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:ital,wght@0,600;0,700;1,600&display=swap" rel="stylesheet">\n' +
'    <link rel="stylesheet" href="../../css/hp-premium.css">\n' +
'</head>\n' +
'<body class="hp-body">\n' +
'\n' +
'<header>\n' +
'    <nav class="hp-navbar" aria-label="Main Navigation">\n' +
'        <div class="container nav-inner">\n' +
'            <a href="../../index.html" class="nav-logo" aria-label="HealthPlus Medical Home">\n' +
'                <img src="../../assets/logo_hp.png" alt="HealthPlus Medical">\n' +
'            </a>\n' +
'            <ul class="nav-links" role="list">\n' +
'                <li class="nav-dropdown" style="position:relative;">\n' +
'                    <a href="index.html" class="nav-link" aria-haspopup="true">Services</a>\n' +
'                    <!-- HP_SERVICES_NAV_START -->\n' +
'                    <!-- HP_SERVICES_NAV_END -->\n' +
'                </li>\n' +
'                <li><a href="../team/" class="nav-link">Our Team</a></li>\n' +
'                <li><a href="../about/" class="nav-link">About</a></li>\n' +
'                <li><a href="../faq.html" class="nav-link">FAQ</a></li>\n' +
'                <li><a href="../contact.html" class="nav-link">Contact</a></li>\n' +
'            </ul>\n' +
'            <a href="https://form.jotform.com/sehamanagementinv/-appointment-request-form" target="_blank" rel="noopener noreferrer" class="btn btn-primary nav-cta">Book Appointment</a>\n' +
'            <button class="nav-hamburger" aria-label="Open menu"><span></span><span></span><span></span></button>\n' +
'        </div>\n' +
'    </nav>\n' +
'</header>\n' +
'\n' +
'<main>\n' +
'    <section class="hp-hero" style="min-height: 40vh; display: flex; align-items: center; padding-top: 120px;">\n' +
'        <div class="hero-bg">\n' +
'            <div style="width:100%;height:100%;background:linear-gradient(135deg,var(--hp-primary-dark) 0%,var(--hp-primary) 100%);"></div>\n' +
'            <div class="hero-overlay"></div>\n' +
'        </div>\n' +
'        <div class="container hero-content" style="text-align: center; max-width: 800px; margin: 0 auto; display:block;">\n' +
'            <span class="eyebrow" style="color:var(--hp-primary-light);">Our Services</span>\n' +
'            <h1 style="color:#fff;margin:var(--space-4) 0;">Expert Medical Care for the Whole Family</h1>\n' +
'            <p class="lead" style="color:rgba(255,255,255,0.85);">We offer a comprehensive range of medical services to support your health at every stage of life.</p>\n' +
'        </div>\n' +
'    </section>\n' +
'\n' +
'    <section class="section">\n' +
'        <div class="container">\n' +
'            <!-- HP_SERVICES_DIRECTORY_START -->\n' +
'            <!-- HP_SERVICES_DIRECTORY_END -->\n' +
'        </div>\n' +
'    </section>\n' +
'</main>\n' +
'\n' +
'<footer class="hp-footer" style="margin-top:auto;">\n' +
'    <div class="container text-center" style="padding:var(--space-10) 0;">\n' +
'        <p>&copy; 2026 HealthPlus by SEHA Medical. All rights reserved.</p>\n' +
'    </div>\n' +
'</footer>\n' +
'\n' +
'<script src="../../js/hp-core.js"></script>\n' +
'</body>\n' +
'</html>';

fs.writeFileSync(path.join(servicesDir, 'index.html'), indexHtml, 'utf8');

// 2. Generate 11 individual service pages
services.forEach(service => {
    let faqHtml = '';
    service.faq.forEach((f, i) => {
        faqHtml += '<div class="accordion-item" style="border:1px solid var(--hp-border);border-radius:var(--radius-md);margin-bottom:var(--space-3);overflow:hidden;">\n' +
                   '    <button class="accordion-trigger" aria-expanded="false" style="width:100%;text-align:left;padding:var(--space-4);background:var(--hp-surface);border:none;font-weight:600;color:var(--hp-heading);cursor:pointer;">\n' +
                   '        ' + f.q + '\n' +
                   '    </button>\n' +
                   '    <div class="accordion-content" style="padding:0 var(--space-4) var(--space-4);color:var(--hp-text-muted);display:none;">\n' +
                   '        ' + f.a + '\n' +
                   '    </div>\n' +
                   '</div>\n';
    });

    let conditionsHtml = '';
    service.conditions.forEach(c => {
        conditionsHtml += '<li style="margin-bottom:var(--space-2);padding-left:24px;position:relative;color:var(--hp-text-muted);"><svg style="position:absolute;left:0;top:4px;width:16px;color:var(--hp-primary);" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>' + c + '</li>\n';
    });

    let pageHtml = '<!DOCTYPE html>\n' +
'<html lang="en">\n' +
'<head>\n' +
'    <meta charset="UTF-8">\n' +
'    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n' +
'    <title>' + service.seoTitle + '</title>\n' +
'    <meta name="description" content="' + service.seoDescription + '">\n' +
'    <link rel="canonical" href="https://healthplusmed.ca/services/' + service.slug + '">\n' +
'    <meta property="og:title" content="' + service.seoTitle + '">\n' +
'    <meta property="og:description" content="' + service.seoDescription + '">\n' +
'    <meta property="og:type" content="website">\n' +
'    <meta property="og:url" content="https://healthplusmed.ca/services/' + service.slug + '">\n' +
'    <meta property="og:image" content="https://healthplusmed.ca/assets/social_share.webp">\n' +
'    \n' +
'    <link rel="preconnect" href="https://fonts.googleapis.com">\n' +
'    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n' +
'    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:ital,wght@0,600;0,700;1,600&display=swap" rel="stylesheet">\n' +
'    <link rel="stylesheet" href="../../css/hp-premium.css">\n' +
'    \n' +
'    <script type="application/ld+json">\n' +
'    {\n' +
'      "@context": "https://schema.org",\n' +
'      "@type": "MedicalWebPage",\n' +
'      "name": "' + service.title + '",\n' +
'      "description": "' + service.shortDescription + '",\n' +
'      "provider": {\n' +
'        "@type": "MedicalClinic",\n' +
'        "name": "HealthPlus Medical"\n' +
'      }\n' +
'    }\n' +
'    </script>\n' +
'</head>\n' +
'<body class="hp-body">\n' +
'\n' +
'<header>\n' +
'    <nav class="hp-navbar" aria-label="Main Navigation">\n' +
'        <div class="container nav-inner">\n' +
'            <a href="../../index.html" class="nav-logo" aria-label="HealthPlus Medical Home">\n' +
'                <img src="../../assets/logo_hp.png" alt="HealthPlus Medical">\n' +
'            </a>\n' +
'            <ul class="nav-links" role="list">\n' +
'                <li class="nav-dropdown" style="position:relative;">\n' +
'                    <a href="index.html" class="nav-link" aria-haspopup="true">Services</a>\n' +
'                    <!-- HP_SERVICES_NAV_START -->\n' +
'                    <!-- HP_SERVICES_NAV_END -->\n' +
'                </li>\n' +
'                <li><a href="../team/" class="nav-link">Our Team</a></li>\n' +
'                <li><a href="../about/" class="nav-link">About</a></li>\n' +
'                <li><a href="../faq.html" class="nav-link">FAQ</a></li>\n' +
'                <li><a href="../contact.html" class="nav-link">Contact</a></li>\n' +
'            </ul>\n' +
'            <a href="https://form.jotform.com/sehamanagementinv/-appointment-request-form" target="_blank" rel="noopener noreferrer" class="btn btn-primary nav-cta">Book Appointment</a>\n' +
'            <button class="nav-hamburger" aria-label="Open menu"><span></span><span></span><span></span></button>\n' +
'        </div>\n' +
'    </nav>\n' +
'</header>\n' +
'\n' +
'<main>\n' +
'    <section class="hp-hero" style="min-height: 40vh; display: flex; align-items: center; padding-top: 120px;">\n' +
'        <div class="hero-bg">\n' +
'            <img src="../../' + service.heroImage + '" alt="' + service.title + '" style="width:100%;height:100%;object-fit:cover;" onerror="this.parentElement.style.background=\'linear-gradient(135deg,var(--hp-primary-dark) 0%,var(--hp-primary) 100%)\'">\n' +
'            <div class="hero-overlay"></div>\n' +
'        </div>\n' +
'        <div class="container hero-content" style="display:block;">\n' +
'            <ul class="breadcrumbs" style="list-style:none;padding:0;margin:0 0 var(--space-4);display:flex;gap:var(--space-2);color:var(--hp-primary-light);font-size:var(--text-sm);">\n' +
'                <li><a href="../../index.html" style="color:inherit;text-decoration:none;">Home</a> /</li>\n' +
'                <li><a href="index.html" style="color:inherit;text-decoration:none;">Services</a> /</li>\n' +
'                <li>' + service.title + '</li>\n' +
'            </ul>\n' +
'            <h1 style="color:#fff;margin:var(--space-2) 0;">' + service.title + '</h1>\n' +
'            <p class="lead" style="color:rgba(255,255,255,0.85);max-width:600px;">' + service.shortDescription + '</p>\n' +
'        </div>\n' +
'    </section>\n' +
'\n' +
'    <section class="section">\n' +
'        <div class="container" style="display:grid;grid-template-columns:2fr 1fr;gap:var(--space-12);">\n' +
'            <div class="content-main">\n' +
'                <h2 style="color:var(--hp-heading);margin-bottom:var(--space-4);">Overview</h2>\n' +
'                <p style="color:var(--hp-text);line-height:1.7;margin-bottom:var(--space-8);">' + service.whatToExpect + '</p>\n' +
'                \n' +
'                <h3 style="color:var(--hp-heading);margin-bottom:var(--space-3);">Who This Is For</h3>\n' +
'                <p style="color:var(--hp-text);line-height:1.7;margin-bottom:var(--space-8);">' + service.whoItIsFor + '</p>\n' +
'                \n' +
'                <h3 style="color:var(--hp-heading);margin-bottom:var(--space-3);">Preparation</h3>\n' +
'                <p style="color:var(--hp-text);line-height:1.7;margin-bottom:var(--space-8);">' + service.preparation + '</p>\n' +
'\n' +
'                <h3 style="color:var(--hp-heading);margin-bottom:var(--space-4);">Frequently Asked Questions</h3>\n' +
'                <div class="accordion">\n' +
'                    ' + faqHtml + '\n' +
'                </div>\n' +
'            </div>\n' +
'            \n' +
'            <aside class="sidebar">\n' +
'                <div style="background:var(--hp-surface);border:1px solid var(--hp-border);border-radius:var(--radius-xl);padding:var(--space-6);margin-bottom:var(--space-8);">\n' +
'                    <h3 style="margin-bottom:var(--space-4);">Conditions & Focus</h3>\n' +
'                    <ul style="list-style:none;padding:0;margin:0;">\n' +
'                        ' + conditionsHtml + '\n' +
'                    </ul>\n' +
'                </div>\n' +
'                \n' +
'                <div style="background:var(--hp-primary-ultra);border-radius:var(--radius-xl);padding:var(--space-6);text-align:center;">\n' +
'                    <h3 style="color:var(--hp-primary-dark);margin-bottom:var(--space-3);">Ready to book?</h3>\n' +
'                    <p style="color:var(--hp-text);font-size:var(--text-sm);margin-bottom:var(--space-4);">Schedule your appointment easily online or over the phone.</p>\n' +
'                    <a href="https://form.jotform.com/sehamanagementinv/-appointment-request-form" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="width:100%;justify-content:center;">Book Now</a>\n' +
'                </div>\n' +
'            </aside>\n' +
'        </div>\n' +
'    </section>\n' +
'\n' +
'    <section class="section" style="background:var(--hp-bg-section);">\n' +
'        <div class="container">\n' +
'            <h2 style="color:var(--hp-heading);margin-bottom:var(--space-6);">Related Services</h2>\n' +
'            <!-- HP_RELATED_SERVICES_START -->\n' +
'            <!-- HP_RELATED_SERVICES_END -->\n' +
'        </div>\n' +
'    </section>\n' +
'</main>\n' +
'\n' +
'<!-- HP_FOOTER_START -->\n' +
'<footer class="hp-footer" style="margin-top:auto; background: var(--hp-surface); border-top: 1px solid var(--hp-border); padding-top: var(--space-16);">\n' +
'    <div class="container" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: var(--space-12); padding-bottom: var(--space-12);">\n' +
'        \n' +
'        <!-- Brand Section -->\n' +
'        <div>\n' +
'            <a href="../../index.html" style="display:inline-block; margin-bottom:var(--space-6);">\n' +
'                <img src="../../assets/logo_hp.png" alt="HealthPlus Medical" style="height: 48px; width: auto;">\n' +
'            </a>\n' +
'            <p style="color: var(--hp-text-muted); line-height: 1.7; margin-bottom: var(--space-6);">Providing exceptional, compassionate, and comprehensive medical care to Calgary and surrounding communities since 2006.</p>\n' +
'            <div style="display: flex; gap: 16px;">\n' +
'                <a href="#" style="color: var(--hp-primary); width: 40px; height: 40px; border-radius: 50%; background: var(--hp-primary-ultra); display: flex; align-items: center; justify-content: center; transition: all 0.2s;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>\n' +
'                <a href="#" style="color: var(--hp-primary); width: 40px; height: 40px; border-radius: 50%; background: var(--hp-primary-ultra); display: flex; align-items: center; justify-content: center; transition: all 0.2s;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>\n' +
'            </div>\n' +
'        </div>\n' +
'\n' +
'        <!-- Quick Links -->\n' +
'        <div>\n' +
'            <h4 style="color: var(--hp-heading); margin-bottom: var(--space-6); font-family: var(--font-heading); font-weight: 600;">Quick Links</h4>\n' +
'            <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 12px;">\n' +
'                <li><a href="../../services/" style="color: var(--hp-text); text-decoration: none; transition: color 0.2s;">Our Services</a></li>\n' +
'                <li><a href="../../team/" style="color: var(--hp-text); text-decoration: none; transition: color 0.2s;">Medical Team</a></li>\n' +
'                <li><a href="../../about/" style="color: var(--hp-text); text-decoration: none; transition: color 0.2s;">About Clinic</a></li>\n' +
'                <li><a href="../../faq.html" style="color: var(--hp-text); text-decoration: none; transition: color 0.2s;">Patient FAQ</a></li>\n' +
'                <li><a href="../../contact.html" style="color: var(--hp-text); text-decoration: none; transition: color 0.2s;">Contact Us</a></li>\n' +
'            </ul>\n' +
'        </div>\n' +
'\n' +
'        <!-- Contact Info -->\n' +
'        <div>\n' +
'            <h4 style="color: var(--hp-heading); margin-bottom: var(--space-6); font-family: var(--font-heading); font-weight: 600;">Contact Us</h4>\n' +
'            <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 16px;">\n' +
'                <li style="display: flex; gap: 12px; align-items: flex-start; color: var(--hp-text-muted);">\n' +
'                    <svg style="color: var(--hp-primary); flex-shrink: 0; margin-top: 4px;" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>\n' +
'                    <span>227 153 Ave SE<br>Calgary, AB T2X 2K2</span>\n' +
'                </li>\n' +
'                <li style="display: flex; gap: 12px; align-items: center; color: var(--hp-text-muted);">\n' +
'                    <svg style="color: var(--hp-primary); flex-shrink: 0;" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>\n' +
'                    <span>(403) 254-4633</span>\n' +
'                </li>\n' +
'                <li style="display: flex; gap: 12px; align-items: center; color: var(--hp-text-muted);">\n' +
'                    <svg style="color: var(--hp-primary); flex-shrink: 0;" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>\n' +
'                    <span><a href="https://form.jotform.com/sehamanagementinv/-appointment-request-form" target="_blank" style="color:var(--hp-primary); text-decoration:none; font-weight:600;">Book Online</a></span>\n' +
'                </li>\n' +
'            </ul>\n' +
'        </div>\n' +
'\n' +
'        <!-- Hours -->\n' +
'        <div>\n' +
'            <h4 style="color: var(--hp-heading); margin-bottom: var(--space-6); font-family: var(--font-heading); font-weight: 600;">Clinic Hours</h4>\n' +
'            <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 12px;">\n' +
'                <li style="display: flex; justify-content: space-between; color: var(--hp-text); border-bottom: 1px dashed var(--hp-border); padding-bottom: 8px;">\n' +
'                    <span>Mon - Fri</span>\n' +
'                    <span style="font-weight: 500;">9:00 AM - 5:00 PM</span>\n' +
'                </li>\n' +
'                <li style="display: flex; justify-content: space-between; color: var(--hp-text); border-bottom: 1px dashed var(--hp-border); padding-bottom: 8px;">\n' +
'                    <span>Saturday</span>\n' +
'                    <span style="font-weight: 500;">10:00 AM - 2:00 PM</span>\n' +
'                </li>\n' +
'                <li style="display: flex; justify-content: space-between; color: var(--hp-text); padding-bottom: 8px;">\n' +
'                    <span>Sun & Holidays</span>\n' +
'                    <span style="font-weight: 500; color: var(--hp-primary);">Closed</span>\n' +
'                </li>\n' +
'            </ul>\n' +
'        </div>\n' +
'\n' +
'    </div>\n' +
'    \n' +
'    <div style="border-top: 1px solid var(--hp-border); background: #f8fafc;">\n' +
'        <div class="container" style="padding: var(--space-6) 0; display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: var(--space-4);">\n' +
'            <p style="color: var(--hp-text-muted); font-size: var(--text-sm); margin: 0;">&copy; 2026 HealthPlus by SEHA Medical. All rights reserved.</p>\n' +
'            <p style="color: var(--hp-text-muted); font-size: var(--text-sm); margin: 0;">Built by <a href="https://nexorayyc.io" target="_blank" rel="noopener" style="color: var(--hp-primary); font-weight: 600; text-decoration: none;">Nexora</a></p>\n' +
'        </div>\n' +
'    </div>\n' +
'</footer>\n' +
'<!-- HP_FOOTER_END -->\n' +
'\n' +
'<script src="../../js/hp-core.js"></script>\n' +
'<script>\n' +
'    // Simple inline script for FAQ accordion on this page\n' +
'    document.querySelectorAll(".accordion-trigger").forEach(trigger => {\n' +
'        trigger.addEventListener("click", () => {\n' +
'            const content = trigger.nextElementSibling;\n' +
'            const isExpanded = trigger.getAttribute("aria-expanded") === "true";\n' +
'            trigger.setAttribute("aria-expanded", !isExpanded);\n' +
'            content.style.display = isExpanded ? "none" : "block";\n' +
'        });\n' +
'    });\n' +
'</script>\n' +
'</body>\n' +
'</html>';

    fs.writeFileSync(path.join(servicesDir, `${service.slug}.html`), pageHtml, 'utf8');
});

console.log('Successfully generated index.html and 11 service templates.');
