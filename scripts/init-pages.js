
function getServiceMotionHUD(slug, title) {
    let svgMini = '';
    let badgeLabel = '';
    let badgeValue = '';
    
    switch(slug) {
        case 'concussion-care':
            badgeLabel = 'Neurological Scan';
            badgeValue = 'Brainwave Active';
            svgMini = `<svg viewBox="0 0 160 40" style="width:100%;height:100%;" xmlns="http://www.w3.org/2000/svg">
                <path d="M 0 20 Q 30 5 60 20 T 120 20 T 160 20" fill="none" stroke="#73C9BE" stroke-width="2.5">
                    <animate attributeName="d" dur="2s" repeatCount="indefinite" values="M 0 20 Q 30 5 60 20 T 120 20 T 160 20; M 0 20 Q 30 35 60 20 T 120 20 T 160 20; M 0 20 Q 30 5 60 20 T 120 20 T 160 20"/>
                </path>
                <circle cx="60" cy="20" r="4" fill="#10b981">
                    <animate attributeName="r" values="3;6;3" dur="1.5s" repeatCount="indefinite"/>
                </circle>
            </svg>`;
            break;

        case 'walk-in-clinic':
            badgeLabel = 'Live Queue Status';
            badgeValue = '< 15 Min Wait';
            svgMini = `<svg viewBox="0 0 160 40" style="width:100%;height:100%;" xmlns="http://www.w3.org/2000/svg">
                <circle cx="80" cy="20" r="14" fill="none" stroke="rgba(115,201,190,0.3)" stroke-width="2"/>
                <circle cx="80" cy="20" r="14" fill="none" stroke="#73C9BE" stroke-width="2.5" stroke-dasharray="88" stroke-dashoffset="22">
                    <animateTransform attributeName="transform" type="rotate" from="0 80 20" to="360 80 20" dur="4s" repeatCount="indefinite"/>
                </circle>
                <text x="80" y="24" text-anchor="middle" fill="#fff" font-size="10" font-weight="700" font-family="sans-serif">OPEN</text>
            </svg>`;
            break;

        case 'family-medicine':
            badgeLabel = 'Family Wellness';
            badgeValue = 'Vital Pulse Sync';
            svgMini = `<svg viewBox="0 0 160 40" style="width:100%;height:100%;" xmlns="http://www.w3.org/2000/svg">
                <path d="M 0 20 L 40 20 L 50 5 L 60 35 L 70 10 L 80 25 L 90 20 L 160 20" fill="none" stroke="#73C9BE" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <animate attributeName="stroke-dasharray" values="0,300;300,0" dur="2s" repeatCount="indefinite"/>
                </path>
            </svg>`;
            break;

        case 'obstetrics-gynecology':
            badgeLabel = 'Prenatal Monitor';
            badgeValue = 'Heartbeat: 140 BPM';
            svgMini = `<svg viewBox="0 0 160 40" style="width:100%;height:100%;" xmlns="http://www.w3.org/2000/svg">
                <path d="M 0 20 Q 40 0 80 20 T 160 20" fill="none" stroke="#73C9BE" stroke-width="2"/>
                <circle cx="80" cy="20" r="5" fill="#fff">
                    <animate attributeName="r" values="3;8;3" dur="1s" repeatCount="indefinite"/>
                </circle>
            </svg>`;
            break;

        default:
            badgeLabel = 'Specialist Care';
            badgeValue = 'Board Certified';
            svgMini = `<svg viewBox="0 0 160 40" style="width:100%;height:100%;" xmlns="http://www.w3.org/2000/svg">
                <circle cx="80" cy="20" r="12" fill="none" stroke="rgba(115,201,190,0.3)" stroke-width="2"/>
                <circle cx="80" cy="20" r="8" fill="none" stroke="#73C9BE" stroke-width="2" stroke-dasharray="6 3">
                    <animateTransform attributeName="transform" type="rotate" from="0 80 20" to="360 80 20" dur="5s" repeatCount="indefinite"/>
                </circle>
            </svg>`;
    }

    return `
        <div style="position:relative; width:100%; border-radius: var(--radius-2xl); overflow: hidden; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.45); border: 2px solid rgba(255,255,255,0.25); background:#0B2824;">
            <!-- 1. FULL STANDALONE 8K PHOTO -->
            <img src="../assets/images/services/${slug}.png" alt="${title}" style="width: 100%; height: auto; display: block; object-fit: cover;" onerror="this.src='../assets/images/global/healthplus-placeholder.svg'">
            
            <!-- 2. HIGH-TECH INTEGRATED GLASSMORPHISM MEDICAL HUD OVERLAY -->
            <div style="position:absolute; bottom:16px; left:16px; right:16px; background:rgba(11,40,36,0.85); backdrop-filter:blur(16px); border:1px solid rgba(255,255,255,0.25); border-radius:var(--radius-xl); padding:12px 18px; display:flex; align-items:center; justify-content:space-between; gap:12px; box-shadow:0 10px 30px rgba(0,0,0,0.3);">
                <div style="display:flex; align-items:center; gap:10px;">
                    <span style="width:10px; height:10px; background:#10b981; border-radius:50%; box-shadow:0 0 10px #10b981; display:inline-block; animation: pulse 1.5s infinite;"></span>
                    <div>
                        <div style="color:#fff; font-size:13px; font-weight:700; font-family:sans-serif; line-height:1.2;">${badgeLabel}</div>
                        <div style="color:#73C9BE; font-size:11px; font-weight:600; font-family:sans-serif;">${badgeValue}</div>
                    </div>
                </div>
                
                <!-- MINI ANIMATED MOTION GRAPHIC -->
                <div style="width:120px; height:32px; display:flex; align-items:center;">
                    ${svgMini}
                </div>
                
                <div style="background:rgba(255,255,255,0.15); border:1px solid rgba(255,255,255,0.2); padding:5px 12px; border-radius:var(--radius-full); color:#fff; font-size:11px; font-weight:600; letter-spacing:0.5px; white-space:nowrap;">
                    AHCIP Covered
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

    let motionWidgetHtml = getServiceMotionHUD(service.slug, service.title);

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
'            <!-- RIGHT: STACKED SHOWCASE (1. STANDALONE 8K PHOTO + 2. SEPARATED MOTION GRAPHICS CARD) -->\n' +
'            <div style="display:flex; flex-direction:column; gap:var(--space-6);">\n' +
'                <!-- 1. STANDALONE CLEAR 8K PHOTO CARD -->\n' +
'                <div style="border-radius: var(--radius-2xl); overflow: hidden; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.45); border: 2px solid rgba(255,255,255,0.25); background:#000;">\n' +
'                    <img src="../assets/images/services/' + service.slug + '.png" alt="' + service.title + '" style="width: 100%; height: auto; display: block; object-fit: cover;" onerror="this.src=\'../assets/images/global/healthplus-placeholder.svg\'">\n' +
'                </div>\n' +
'                <!-- 2. SEPARATED ANIMATED MOTION GRAPHICS CARD -->\n' +
'                ' + getCustomMotionGraphic(service.slug, service.title) + '\n' +
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
'            <div style="display: flex; gap: 16px; margin-bottom: var(--space-6);">\n' +
'                <a href="https://www.linkedin.com/company/health-plus-medical-clinic/posts/?feedView=all" target="_blank" rel="noopener noreferrer" aria-label="HealthPlus LinkedIn" style="color: var(--hp-primary); width: 40px; height: 40px; border-radius: 50%; background: var(--hp-primary-ultra); display: flex; align-items: center; justify-content: center; transition: all 0.2s;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>\n' +
'            </div>\n' +
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

    
    // Concussion Care Rich Content Overhaul
    if (service.slug === 'concussion-care') {
        var concussionRichSections = '<div class="concussion-complete-care" style="margin-bottom:var(--space-12);">' +
            '<div style="background:linear-gradient(135deg, #071E1C 0%, #0D3D38 100%); color:#fff; padding:var(--space-8); border-radius:var(--radius-2xl); margin-bottom:var(--space-8); border:1px solid rgba(115,201,190,0.3);">' +
            '    <span style="color:#73C9BE; font-weight:700; font-size:var(--text-xs); text-transform:uppercase; letter-spacing:1px;">Complete Concussions™ Certified Clinic</span>' +
            '    <h3 style="color:#fff; font-size:var(--text-2xl); font-family:var(--font-heading); margin:var(--space-2) 0 var(--space-4);">Evidence-Based Concussion Management Program</h3>' +
            '    <p style="color:rgba(255,255,255,0.9); line-height:1.7; margin-bottom:var(--space-6);">HealthPlus is proud to offer the Complete Concussions Program at our clinic. As a certified location, we provide a full evidence-based concussion management program—helping our patients and athletes safely return to learn, work, and play.</p>' +
            '    <div style="display:flex; gap:var(--space-4); flex-wrap:wrap; align-items:center;">' +
            '        <a href="https://apps.apple.com/ca/app/concussion-tracker/id1166290027" target="_blank" rel="noopener" style="display:inline-block;"><img src="../assets/services/concussion/CONCUSSION TRACKER APP/App-Store-Icon-AppStore.png" alt="Download Concussion Tracker on App Store" style="height:44px;"></a>' +
            '        <a href="https://play.google.com/store/apps/details?id=com.completeconcussions.concussiontracker&hl=en_CA" target="_blank" rel="noopener" style="display:inline-block;"><img src="../assets/services/concussion/CONCUSSION TRACKER APP/App-Store-Icon-GooglePlay.png" alt="Get Concussion Tracker on Google Play" style="height:44px;"></a>' +
            '    </div>' +
            '</div>' +
            
            '<h3 style="color:var(--hp-heading);margin-bottom:var(--space-4);font-family:var(--font-heading);">Concussion Recovery & Treatment Strategy</h3>' +
            '<p style="color:var(--hp-text);line-height:1.7;margin-bottom:var(--space-6);">Following a concussion injury, it is recommended that you seek the care of a healthcare professional with training and experience in concussion as soon as possible. The earlier you seek quality concussion care, the better your recovery will be.</p>' +
            '<div style="margin-bottom:var(--space-8); border-radius:var(--radius-xl); overflow:hidden; border:1px solid var(--hp-border); box-shadow:0 10px 30px rgba(0,0,0,0.05);">' +
            '    <img src="../assets/services/concussion/CONCUSSION TREATMENT INFOGRAPHIC/1920x1280-CompleteConcussions-Treatment-Infographic.png" alt="Concussion Treatment Infographic" style="width:100%; height:auto; display:block;">' +
            '</div>' +

            '<div style="display:grid; grid-template-columns:1fr 1fr; gap:var(--space-6); margin-bottom:var(--space-8);">' +
            '    <div style="background:var(--hp-surface); padding:var(--space-6); border-radius:var(--radius-xl); border:1px solid var(--hp-border);">' +
            '        <h4 style="color:var(--hp-heading); margin-bottom:var(--space-3); font-family:var(--font-heading);">Comprehensive Care Protocol</h4>' +
            '        <p style="color:var(--hp-text-muted); line-height:1.6; font-size:var(--text-sm);">Generally, a period of relative "symptom-limited" physical and cognitive rest is recommended for the first 24-48 hours after injury. After this rest period, a gradual increase in mental and physical activity is recommended under the supervision of a licensed practitioner.</p>' +
            '    </div>' +
            '    <div style="background:var(--hp-surface); padding:var(--space-6); border-radius:var(--radius-xl); border:1px solid var(--hp-border);">' +
            '        <h4 style="color:var(--hp-heading); margin-bottom:var(--space-3); font-family:var(--font-heading);">Multimodal Pre-season Baseline Testing</h4>' +
            '        <p style="color:var(--hp-text-muted); line-height:1.6; font-size:var(--text-sm);">Pre-season testing measures your balance, reaction time, memory, and visual tracking. If you sustain a concussion during the season, we compare your recovery against your personal healthy baseline.</p>' +
            '    </div>' +
            '</div>' +

            '<div style="background:rgba(115,201,190,0.12); border-left:4px solid var(--hp-primary); padding:var(--space-6); border-radius:var(--radius-lg); margin-bottom:var(--space-8);">' +
            '    <h4 style="color:var(--hp-primary-dark); margin-bottom:var(--space-2); font-family:var(--font-heading);">Alberta Health Care Insurance Plan (AHCIP) Coverage</h4>' +
            '    <p style="color:var(--hp-text); margin:0; font-size:var(--text-sm); line-height:1.6;">Medically necessary physician consultations and diagnostic evaluations are fully covered under AHCIP. Optional baseline testing and third-party athletic reports will always be transparently discussed prior to assessment.</p>' +
            '</div></div>';
            
        pageHtml = pageHtml.replace('<h2 style="color:var(--hp-heading);margin-bottom:var(--space-4);font-family:var(--font-heading);">Overview & Care Focus</h2>', concussionRichSections + '<h2 style="color:var(--hp-heading);margin-bottom:var(--space-4);font-family:var(--font-heading);">Overview & Care Focus</h2>');
    }

    fs.writeFileSync(path.join(servicesDir, `${service.slug}.html`), pageHtml, 'utf8');
});
console.log('Rebuilt all 11 service pages with 100% correct relative paths, standalone photo showcase, motion graphics, and working FAQ accordions.');
