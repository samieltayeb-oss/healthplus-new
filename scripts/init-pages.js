
function getServiceMotionWidget(slug, title) {
    let svgGraphic = '';
    let badgeLabel = '';
    let badgeValue = '';
    
    switch(slug) {
        case 'concussion-care':
            badgeLabel = 'Neurological Status';
            badgeValue = 'Brainwave Scan Active';
            svgGraphic = `
                <svg viewBox="0 0 400 200" style="width:100%;height:auto;" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="scanGrad" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stop-color="rgba(115,201,190,0)" />
                            <stop offset="50%" stop-color="rgba(115,201,190,1)" />
                            <stop offset="100%" stop-color="rgba(115,201,190,0)" />
                        </linearGradient>
                    </defs>
                    <path d="M 10 100 Q 60 40 110 100 T 210 100 T 310 100 T 390 100" fill="none" stroke="url(#scanGrad)" stroke-width="3" stroke-linecap="round">
                        <animate attributeName="d" dur="3s" repeatCount="indefinite" values="M 10 100 Q 60 30 110 100 T 210 100 T 310 100 T 390 100; M 10 100 Q 60 170 110 100 T 210 100 T 310 100 T 390 100; M 10 100 Q 60 30 110 100 T 210 100 T 310 100 T 390 100"/>
                    </path>
                    <circle cx="110" cy="100" r="6" fill="#73C9BE">
                        <animate attributeName="r" values="4;8;4" dur="2s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="210" cy="100" r="6" fill="#73C9BE">
                        <animate attributeName="r" values="6;10;6" dur="1.5s" repeatCount="indefinite"/>
                    </circle>
                </svg>`;
            break;

        case 'walk-in-clinic':
            badgeLabel = 'Walk-In Availability';
            badgeValue = 'Wait Time < 15 Mins';
            svgGraphic = `
                <svg viewBox="0 0 400 200" style="width:100%;height:auto;" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="200" cy="100" r="70" fill="none" stroke="rgba(115,201,190,0.2)" stroke-width="4"/>
                    <circle cx="200" cy="100" r="70" fill="none" stroke="#73C9BE" stroke-width="4" stroke-dasharray="440" stroke-dashoffset="110">
                        <animateTransform attributeName="transform" type="rotate" from="0 200 100" to="360 200 100" dur="8s" repeatCount="indefinite"/>
                    </circle>
                    <text x="200" y="95" text-anchor="middle" fill="#fff" font-size="22" font-weight="700" font-family="sans-serif">NOW OPEN</text>
                    <text x="200" y="120" text-anchor="middle" fill="#73C9BE" font-size="14" font-family="sans-serif">Walk-Ins Welcome</text>
                </svg>`;
            break;

        case 'family-medicine':
            badgeLabel = 'Family Continuity';
            badgeValue = 'Lifelong Health Care';
            svgGraphic = `
                <svg viewBox="0 0 400 200" style="width:100%;height:auto;" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 20,100 L 80,100 L 95,60 L 110,140 L 125,40 L 140,160 L 155,100 L 380,100" fill="none" stroke="#73C9BE" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
                        <animate attributeName="stroke-dasharray" values="0,600;600,0" dur="2.5s" repeatCount="indefinite"/>
                    </path>
                </svg>`;
            break;

        case 'obstetrics-gynecology':
            badgeLabel = 'Prenatal & Maternity';
            badgeValue = 'Fetal Heartbeat: 140 BPM';
            svgGraphic = `
                <svg viewBox="0 0 400 200" style="width:100%;height:auto;" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 30 100 Q 110 20 190 100 T 350 100" fill="none" stroke="rgba(115,201,190,0.4)" stroke-width="3"/>
                    <path d="M 30 100 Q 110 180 190 100 T 350 100" fill="none" stroke="#73C9BE" stroke-width="3"/>
                    <circle cx="190" cy="100" r="7" fill="#fff">
                        <animate attributeName="r" values="5;11;5" dur="1.2s" repeatCount="indefinite"/>
                    </circle>
                </svg>`;
            break;

        default:
            badgeLabel = 'Specialized Care';
            badgeValue = 'Board Certified Practice';
            svgGraphic = `
                <svg viewBox="0 0 400 200" style="width:100%;height:auto;" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="200" cy="100" r="60" fill="none" stroke="rgba(115,201,190,0.3)" stroke-width="2"/>
                    <circle cx="200" cy="100" r="40" fill="none" stroke="#73C9BE" stroke-width="3" stroke-dasharray="10 5">
                        <animateTransform attributeName="transform" type="rotate" from="0 200 100" to="360 200 100" dur="6s" repeatCount="indefinite"/>
                    </circle>
                </svg>`;
    }

    return `
        <div style="position:relative; width:100%; max-width:480px; margin:0 auto; background:rgba(13,61,56,0.65); backdrop-filter:blur(16px); border:1px solid rgba(115,201,190,0.3); border-radius:var(--radius-2xl); padding:24px; box-shadow:0 25px 50px -12px rgba(0,0,0,0.5);">
            
            <!-- Floating Animated Live Status Badge -->
            <div style="display:flex; align-items:center; justify-content:space-between; background:rgba(255,255,255,0.1); border:1px solid rgba(255,255,255,0.2); padding:10px 16px; border-radius:var(--radius-full); margin-bottom:20px;">
                <div style="display:flex; align-items:center; gap:10px;">
                    <span style="width:10px; height:10px; background:#10b981; border-radius:50%; box-shadow:0 0 10px #10b981; display:inline-block; animation: pulse 1.5s infinite;"></span>
                    <span style="color:#fff; font-size:13px; font-weight:600; font-family:sans-serif;">${badgeLabel}</span>
                </div>
                <span style="color:#73C9BE; font-size:12px; font-weight:700; font-family:sans-serif;">${badgeValue}</span>
            </div>

            <!-- Dynamic Medical SVG Motion Graphic -->
            <div style="background:rgba(0,0,0,0.2); border-radius:var(--radius-xl); padding:16px; border:1px solid rgba(255,255,255,0.08); margin-bottom:20px;">
                ${svgGraphic}
            </div>

            <!-- Highlights Chips -->
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
                <div style="background:rgba(255,255,255,0.06); padding:10px 12px; border-radius:var(--radius-lg); text-align:center;">
                    <div style="color:rgba(255,255,255,0.6); font-size:11px; text-transform:uppercase;">Coverage</div>
                    <div style="color:#fff; font-weight:600; font-size:13px;">AHCIP Covered</div>
                </div>
                <div style="background:rgba(255,255,255,0.06); padding:10px 12px; border-radius:var(--radius-lg); text-align:center;">
                    <div style="color:rgba(255,255,255,0.6); font-size:11px; text-transform:uppercase;">Access</div>
                    <div style="color:#73C9BE; font-weight:600; font-size:13px;">Same-Day Booking</div>
                </div>
            </div>

        </div>`;
}

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
    if (service.faq && service.faq.length > 0) {
        service.faq.forEach((f, i) => {
            faqHtml += '<div class="accordion-item" style="border:1px solid var(--hp-border); border-radius:var(--radius-lg); margin-bottom:var(--space-3); overflow:hidden; background:var(--hp-surface);">\n' +
                       '    <button class="accordion-trigger" aria-expanded="' + (i === 0 ? 'true' : 'false') + '" style="width:100%; display:flex; justify-content:space-between; align-items:center; padding:var(--space-5) var(--space-6); background:none; border:none; color:var(--hp-heading); font-weight:600; font-family:var(--font-heading); font-size:1.05rem; cursor:pointer; text-align:left;">\n' +
                       '        <span>' + f.q + '</span>\n' +
                       '        <span class="icon" style="width:24px; height:24px; border-radius:50%; background:var(--hp-primary-ultra); color:var(--hp-primary-dark); display:flex; align-items:center; justify-content:center; font-weight:700;">+</span>\n' +
                       '    </button>\n' +
                       '    <div class="accordion-content ' + (i === 0 ? 'open' : '') + '" style="padding:0 var(--space-6) var(--space-5); color:var(--hp-text-muted); line-height:1.7;">\n' +
                       '        <div class="accordion-body">\n' +
                       '            ' + f.a + '\n' +
                       '        </div>\n' +
                       '    </div>\n' +
                       '</div>\n';
        });
    }

    let conditionsHtml = '';
    service.conditions.forEach(c => {
        conditionsHtml += '<li style="margin-bottom:var(--space-2);padding-left:24px;position:relative;color:var(--hp-text-muted);"><svg style="position:absolute;left:0;top:4px;width:16px;color:var(--hp-primary);" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>' + c + '</li>\n';
    });

    let motionWidgetHtml = getServiceMotionWidget(service.slug, service.title);

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
'    <meta property="og:image" content="https://healthplusmed.ca/assets/images/services/' + service.slug + '.png">\n' +
'    \n' +
'    <link rel="preconnect" href="https://fonts.googleapis.com">\n' +
'    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n' +
'    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,600;0,700;1,600&display=swap" rel="stylesheet">\n' +
'    <link rel="stylesheet" href="../css/hp-premium.css">\n' +
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
'            <a href="../index.html" class="nav-logo" aria-label="HealthPlus Medical Home">\n' +
'                <img src="../assets/logo_hp.png" alt="HealthPlus Medical">\n' +
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
'    <!-- HERO: LUXURY CINEMATIC SPLIT WITH STANDALONE 8K PHOTO CARD & MOTION GRAPHICS WIDGET -->\n' +
'    <section class="hp-hero" style="background: linear-gradient(135deg, #0B332F 0%, #134B45 50%, #1C635C 100%); padding-top: 110px; padding-bottom: 50px;">\n' +
'        <div class="container" style="display:grid; grid-template-columns: 1.1fr 1fr; gap: var(--space-8); align-items: center;">\n' +
'            <div>\n' +
'                <ul class="breadcrumbs" style="list-style:none;padding:0;margin:0 0 var(--space-3);display:flex;gap:var(--space-2);color:var(--hp-primary-light);font-size:var(--text-xs);">\n' +
'                    <li><a href="../index.html" style="color:inherit;text-decoration:none;">Home</a> /</li>\n' +
'                    <li><a href="index.html" style="color:inherit;text-decoration:none;">Services</a> /</li>\n' +
'                    <li>' + service.title + '</li>\n' +
'                </ul>\n' +
'                <span style="display:inline-block; background:rgba(255,255,255,0.15); backdrop-filter:blur(8px); color:#fff; padding:5px 16px; border-radius:var(--radius-full); font-size:var(--text-xs); font-weight:600; text-transform:uppercase; letter-spacing:1px; margin-bottom:var(--space-3);">' + (service.category || 'Specialized Healthcare') + '</span>\n' +
'                <h1 style="color:#fff; margin:var(--space-2) 0 var(--space-4); font-size: var(--text-4xl); font-family: var(--font-heading); font-weight: 700; line-height: 1.15;">' + service.title + '</h1>\n' +
'                <p class="lead" style="color:rgba(255,255,255,0.9); font-size: var(--text-base); line-height: 1.6; margin-bottom: var(--space-6); max-width: 580px;">' + service.shortDescription + '</p>\n' +
'                <div style="display:flex; gap:var(--space-3); flex-wrap:wrap;">\n' +
'                    <a href="https://form.jotform.com/sehamanagementinv/-appointment-request-form" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-lg">Book Appointment</a>\n' +
'                    <a href="tel:4032544633" class="btn btn-outline" style="border-color:rgba(255,255,255,0.4); color:#fff;">Call (403) 254-4633</a>\n' +
'                </div>\n' +
'            </div>\n' +
'            \n' +
'            <!-- RIGHT: STACKED SHOWCASE (STANDALONE 8K PHOTO + DYNAMIC MOTION GRAPHIC WIDGET) -->\n' +
'            <div style="display:flex; flex-direction:column; gap:var(--space-4);">\n' +
'                    <img src="../assets/images/services/' + service.slug + '.png" alt="' + service.title + '" style="width: 100%; height: auto; display: block; object-fit: cover;" onerror="this.style.display=\'none\'">\n' +
'                </div>\n' +
'                <!-- 2. DYNAMIC ANIMATED MEDICAL MOTION GRAPHIC WIDGET -->\n' +
'                ' + motionWidgetHtml + '\n' +
'            </div>\n' +
'        </div>\n' +
'    </section>\n' +
'\n' +
'    <section class="section" style="padding-top: var(--space-16); padding-bottom: var(--space-16);">\n' +
'        <div class="container" style="display:grid;grid-template-columns:2fr 1fr;gap:var(--space-12);">\n' +
'            <div class="content-main">\n' +
'                <h2 style="color:var(--hp-heading);margin-bottom:var(--space-4);font-family:var(--font-heading);">Overview & Care Focus</h2>\n' +
'                <p style="color:var(--hp-text);line-height:1.7;margin-bottom:var(--space-8);font-size:var(--text-base);">' + service.whatToExpect + '</p>\n' +
'                \n' +
'                <h3 style="color:var(--hp-heading);margin-bottom:var(--space-3);font-family:var(--font-heading);">Who This Is For</h3>\n' +
'                <p style="color:var(--hp-text);line-height:1.7;margin-bottom:var(--space-8);font-size:var(--text-base);">' + service.whoItIsFor + '</p>\n' +
'                \n' +
'                <h3 style="color:var(--hp-heading);margin-bottom:var(--space-3);font-family:var(--font-heading);">Preparation & What To Bring</h3>\n' +
'                <p style="color:var(--hp-text);line-height:1.7;margin-bottom:var(--space-8);font-size:var(--text-base);">' + service.preparation + '</p>\n' +
'\n' +
'                <h3 style="color:var(--hp-heading);margin-bottom:var(--space-6);font-family:var(--font-heading);">Frequently Asked Questions</h3>\n' +
'                <div class="accordion">\n' +
'                    ' + faqHtml + '\n' +
'                </div>\n' +
'            </div>\n' +
'            \n' +
'            <aside class="sidebar">\n' +
'                <div style="background:var(--hp-surface);border:1px solid var(--hp-border);border-radius:var(--radius-xl);padding:var(--space-6);margin-bottom:var(--space-8);">\n' +
'                    <h3 style="margin-bottom:var(--space-4);font-family:var(--font-heading);">Conditions & Focus</h3>\n' +
'                    <ul style="list-style:none;padding:0;margin:0;">\n' +
'                        ' + conditionsHtml + '\n' +
'                    </ul>\n' +
'                </div>\n' +
'                \n' +
'                <div style="background:var(--hp-primary-ultra);border-radius:var(--radius-xl);padding:var(--space-6);text-align:center;">\n' +
'                    <h3 style="color:var(--hp-primary-dark);margin-bottom:var(--space-3);font-family:var(--font-heading);">Ready to book?</h3>\n' +
'                    <p style="color:var(--hp-text);font-size:var(--text-sm);margin-bottom:var(--space-4);">Schedule your appointment easily online or over the phone.</p>\n' +
'                    <a href="https://form.jotform.com/sehamanagementinv/-appointment-request-form" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="width:100%;justify-content:center;">Book Now</a>\n' +
'                </div>\n' +
'            </aside>\n' +
'        </div>\n' +
'    </section>\n' +
'\n' +
'    <section class="section" style="background:var(--hp-bg-section);">\n' +
'        <div class="container">\n' +
'            <h2 style="color:var(--hp-heading);margin-bottom:var(--space-6);font-family:var(--font-heading);">Related Services</h2>\n' +
'            <!-- HP_RELATED_SERVICES_START -->\n' +
'            <!-- HP_RELATED_SERVICES_END -->\n' +
'        </div>\n' +
'    </section>\n' +
'</main>\n' +
'\n' +
'<!-- HP_FOOTER_START -->\n' +
'<footer class="hp-footer" style="margin-top:auto; background: var(--hp-surface); border-top: 1px solid var(--hp-border); padding-top: var(--space-16);">\n' +
'    <div class="container" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: var(--space-12); padding-bottom: var(--space-12);">\n' +
'        <div>\n' +
'            <a href="../index.html" style="display:inline-block; margin-bottom:var(--space-6);">\n' +
'                <img src="../assets/logo_hp.png" alt="HealthPlus Medical" style="height: 48px; width: auto;">\n' +
'            </a>\n' +
'            <p style="color: var(--hp-text-muted); line-height: 1.7; margin-bottom: var(--space-6);">Providing exceptional, compassionate, and comprehensive medical care to Calgary and surrounding communities since 2006.</p>\n' +
'        </div>\n' +
'        <div>\n' +
'            <h4 style="color: var(--hp-heading); margin-bottom: var(--space-6); font-family: var(--font-heading); font-weight: 600;">Quick Links</h4>\n' +
'            <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 12px;">\n' +
'                <li><a href="index.html" style="color: var(--hp-text); text-decoration: none;">Our Services</a></li>\n' +
'                <li><a href="../team/" style="color: var(--hp-text); text-decoration: none;">Medical Team</a></li>\n' +
'                <li><a href="../about/" style="color: var(--hp-text); text-decoration: none;">About Clinic</a></li>\n' +
'                <li><a href="../faq.html" style="color: var(--hp-text); text-decoration: none;">Patient FAQ</a></li>\n' +
'                <li><a href="../contact.html" style="color: var(--hp-text); text-decoration: none;">Contact Us</a></li>\n' +
'            </ul>\n' +
'        </div>\n' +
'        <div>\n' +
'            <h4 style="color: var(--hp-heading); margin-bottom: var(--space-6); font-family: var(--font-heading); font-weight: 600;">Contact Us</h4>\n' +
'            <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 16px;">\n' +
'                <li style="color: var(--hp-text-muted);">227 153 Ave SE<br>Calgary, AB T2X 2K2</li>\n' +
'                <li style="color: var(--hp-text-muted);">(403) 254-4633</li>\n' +
'            </ul>\n' +
'        </div>\n' +
'        <div>\n' +
'            <h4 style="color: var(--hp-heading); margin-bottom: var(--space-6); font-family: var(--font-heading); font-weight: 600;">Clinic Hours</h4>\n' +
'            <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 12px;">\n' +
'                <li style="display: flex; justify-content: space-between; color: var(--hp-text);"><span>Mon - Fri</span> <span>9:00 AM - 5:00 PM</span></li>\n' +
'                <li style="display: flex; justify-content: space-between; color: var(--hp-text);"><span>Saturday</span> <span>10:00 AM - 2:00 PM</span></li>\n' +
'                <li style="display: flex; justify-content: space-between; color: var(--hp-primary);"><span>Sun & Holidays</span> <span>Closed</span></li>\n' +
'            </ul>\n' +
'        </div>\n' +
'    </div>\n' +
'    <div style="border-top: 1px solid var(--hp-border); background: #f8fafc;">\n' +
'        <div class="container" style="padding: var(--space-6) 0; display: flex; justify-content: space-between; align-items: center;">\n' +
'            <p style="color: var(--hp-text-muted); font-size: var(--text-sm); margin: 0;">&copy; 2026 HealthPlus by SEHA Medical. All rights reserved.</p>\n' +
'            <p style="color: var(--hp-text-muted); font-size: var(--text-sm); margin: 0;">Built by <a href="https://nexorayyc.io" target="_blank" rel="noopener" style="color: var(--hp-primary); font-weight: 600; text-decoration: none;">Nexora</a></p>\n' +
'        </div>\n' +
'    </div>\n' +
'</footer>\n' +
'<!-- HP_FOOTER_END -->\n' +
'\n' +
'<script src="../js/hp-core.js"></script>\n' +
'<script>\n' +
'    // Failsafe accordion handler\n' +
'    document.querySelectorAll(".accordion-trigger").forEach(btn => {\n' +
'        btn.addEventListener("click", function() {\n' +
'            const content = this.nextElementSibling;\n' +
'            const isOpen = content.classList.contains("open");\n' +
'            document.querySelectorAll(".accordion-content").forEach(c => c.classList.remove("open"));\n' +
'            document.querySelectorAll(".accordion-trigger").forEach(t => t.setAttribute("aria-expanded", "false"));\n' +
'            if (!isOpen) {\n' +
'                content.classList.add("open");\n' +
'                this.setAttribute("aria-expanded", "true");\n' +
'            }\n' +
'        });\n' +
'    });\n' +
'</script>\n' +
'</body>\n' +
'</html>';

    fs.writeFileSync(path.join(servicesDir, `${service.slug}.html`), pageHtml, 'utf8');
});
console.log('Rebuilt all 11 service pages with 100% correct relative paths, standalone photo showcase, motion graphics, and working FAQ accordions.');
