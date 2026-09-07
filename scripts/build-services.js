const fs = require('fs');
const path = require('path');
const services = require('../config/services.js');
const siteConfig = require('../config/site.js');
const teamMembers = require('../config/team.js');

const rootDir = path.join(__dirname, '..');
const pagesDir = path.join(rootDir, 'services');
const corePagesDir = rootDir;

// Component Generators
function generateNavDropdownLinks(depth = 0) {
    const prefix = depth === 0 ? 'services/' : depth === 1 ? '' : '../';
    const allServicesLink = depth === 0 ? 'services/index.html' : 'index.html';
    
    let html = `\n<div class="dropdown-menu mega-dropdown">
  <div class="dropdown-header">
    <span class="dropdown-kicker">Clinical Specialties & Care</span>
    <a href="${allServicesLink}" class="dropdown-view-all">All 11 Services →</a>
  </div>
  <div class="mega-dropdown-grid">\n`;

    services.forEach(service => {
        html += `    <a href="${prefix}${service.slug}.html" class="dropdown-service-item">
      <div class="service-item-icon">${service.icon}</div>
      <div class="service-item-content">
        <span class="service-item-title">${service.title}</span>
        <span class="service-item-cat">${service.category}</span>
      </div>
    </a>\n`;
    });

    html += `  </div>
  <div class="dropdown-footer">
    <div class="dropdown-badge-pill">
      <span class="pulse-dot"></span>
      <span>Walk-In Clinic & New Patients Welcome</span>
    </div>
    <a href="https://form.jotform.com/sehamanagementinv/-appointment-request-form" target="_blank" rel="noopener" class="dropdown-quick-book">Book Online</a>
  </div>
</div>\n`;
    return html;
}

function generateHomepageFeaturedCards() {
    const featured = services.filter(s => s.featured);
    let html = `\n<div class="services-grid" style="display:grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: var(--space-6);">\n`;
    
    featured.forEach(s => {
        html += `
    <div class="service-card" style="background: var(--hp-surface); border: 1px solid var(--hp-border); border-radius: var(--radius-xl); padding: var(--space-6); transition: transform 0.2s, box-shadow 0.2s;">
        <div class="service-icon" style="width: 48px; height: 48px; background: var(--hp-primary-ultra); color: var(--hp-primary-dark); border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center; margin-bottom: var(--space-4);">
            <div style="width: 24px; height: 24px;">${s.icon}</div>
        </div>
        <h3 style="font-size: var(--text-lg); margin-bottom: var(--space-2); color: var(--hp-heading);">${s.title}</h3>
        <p style="color: var(--hp-text-muted); font-size: var(--text-sm); margin-bottom: var(--space-5); line-height: 1.6;">${s.shortDescription}</p>
        <a href="services/${s.slug}.html" aria-label="Learn more about ${s.title}" style="display: inline-flex; align-items: center; gap: 4px; font-weight: 600; color: var(--hp-primary); text-decoration: none;">
            Learn More 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" style="width: 16px; height: 16px;"><path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd" /></svg>
        </a>
    </div>\n`;
    });
    
    html += `</div>\n`;
    html += `<div style="text-align: center; margin-top: var(--space-8);">
        <a href="services/index.html" class="btn btn-outline" style="display: inline-block; padding: 12px 24px; border: 2px solid var(--hp-primary); border-radius: var(--radius-full); color: var(--hp-primary); font-weight: 600; text-decoration: none;">View All Services</a>
    </div>\n`;
    
    return html;
}

function generateDirectoryCards() {
    let html = `\n<div class="services-grid" style="display:grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: var(--space-6);">\n`;
    
    services.forEach(s => {
        html += `
    <div class="service-card" style="background: var(--hp-surface); border: 1px solid var(--hp-border); border-radius: var(--radius-xl); padding: var(--space-6); transition: transform 0.2s, box-shadow 0.2s;">
        <div class="service-icon" style="width: 48px; height: 48px; background: var(--hp-primary-ultra); color: var(--hp-primary-dark); border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center; margin-bottom: var(--space-4);">
            <div style="width: 24px; height: 24px;">${s.icon}</div>
        </div>
        <h2 style="font-size: var(--text-xl); margin-bottom: var(--space-2); color: var(--hp-heading);">${s.title}</h2>
        <p style="color: var(--hp-text-muted); font-size: var(--text-base); margin-bottom: var(--space-5); line-height: 1.6;">${s.shortDescription}</p>
        <a href="${s.slug}.html" aria-label="Learn more about ${s.title}" style="display: inline-flex; align-items: center; gap: 4px; font-weight: 600; color: var(--hp-primary); text-decoration: none;">
            Learn More 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" style="width: 16px; height: 16px;"><path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd" /></svg>
        </a>
    </div>\n`;
    });
    
    html += `</div>\n`;
    return html;
}

function generateRelatedServices(currentServiceSlug) {
    const service = services.find(s => s.slug === currentServiceSlug);
    if (!service || !service.relatedServices || service.relatedServices.length === 0) return '';

    let html = `\n<div class="related-services-grid" style="display:grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: var(--space-6);">\n`;
    
    service.relatedServices.forEach(relatedSlug => {
        const s = services.find(rs => rs.slug === relatedSlug);
        if (s) {
            html += `
        <div class="service-card" style="background: var(--hp-surface); border: 1px solid var(--hp-border); border-radius: var(--radius-xl); padding: var(--space-5);">
            <div class="service-icon" style="width: 40px; height: 40px; background: var(--hp-primary-ultra); color: var(--hp-primary-dark); border-radius: var(--radius-sm); display: flex; align-items: center; justify-content: center; margin-bottom: var(--space-3);">
                <div style="width: 20px; height: 20px;">${s.icon}</div>
            </div>
            <h3 style="font-size: var(--text-lg); margin-bottom: var(--space-2); color: var(--hp-heading);">${s.title}</h3>
            <p style="color: var(--hp-text-muted); font-size: var(--text-sm); margin-bottom: var(--space-4); line-height: 1.5;">${s.shortDescription}</p>
            <a href="${s.slug}.html" aria-label="Learn more about ${s.title}" style="display: inline-flex; align-items: center; gap: 4px; font-weight: 600; color: var(--hp-primary); text-decoration: none; font-size: var(--text-sm);">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" style="width: 14px; height: 14px;"><path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd" /></svg>
            </a>
        </div>\n`;
        }
    });
    
    html += `</div>\n`;
    return html;
}

function generateContactInfo() {
    return `
    <div style="background:var(--hp-surface);border:1px solid var(--hp-border);border-radius:var(--radius-xl);padding:var(--space-8);margin-bottom:var(--space-6);">
        <h2 style="font-size:var(--text-xl);margin-bottom:var(--space-6);color:var(--hp-heading);font-family:var(--font-heading);">Get in touch</h2>
        
        <div style="display:flex;gap:var(--space-4);margin-bottom:var(--space-4);">
            <svg style="width:24px;color:var(--hp-primary);flex-shrink:0;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
            <div>
                <h3 style="font-size:var(--text-sm);color:var(--hp-text-muted);margin-bottom:4px;">Address</h3>
                <p style="color:var(--hp-text);font-weight:500;">${siteConfig.contact.address.street}<br>${siteConfig.contact.address.city}, ${siteConfig.contact.address.province} ${siteConfig.contact.address.postalCode}</p>
            </div>
        </div>
        
        <div style="display:flex;gap:var(--space-4);margin-bottom:var(--space-4);">
            <svg style="width:24px;color:var(--hp-primary);flex-shrink:0;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.864-1.051l-3.213-.535a2.25 2.25 0 00-2.237.615l-1.52 1.52a14.122 14.122 0 01-6.578-6.578l1.52-1.52a2.25 2.25 0 00.615-2.237l-.535-3.213C7.716 2.601 7.266 2.25 6.75 2.25H5.378A2.25 2.25 0 003.15 4.312 15.91 15.91 0 002.25 6.75z" /></svg>
            <div>
                <h3 style="font-size:var(--text-sm);color:var(--hp-text-muted);margin-bottom:4px;">Phone</h3>
                <p style="color:var(--hp-text);font-weight:500;"><a href="tel:${siteConfig.contact.phone.replace(/[^0-9]/g, '')}" style="color:inherit;text-decoration:none;">${siteConfig.contact.phone}</a></p>
            </div>
        </div>

        <div style="display:flex;gap:var(--space-4);margin-bottom:var(--space-4);">
            <svg style="width:24px;color:var(--hp-primary);flex-shrink:0;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z" /></svg>
            <div>
                <h3 style="font-size:var(--text-sm);color:var(--hp-text-muted);margin-bottom:4px;">Fax</h3>
                <p style="color:var(--hp-text);font-weight:500;">${siteConfig.contact.fax}</p>
            </div>
        </div>
        
        <div style="display:flex;gap:var(--space-4);margin-bottom:var(--space-6);">
            <svg style="width:24px;color:var(--hp-primary);flex-shrink:0;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
            <div>
                <h3 style="font-size:var(--text-sm);color:var(--hp-text-muted);margin-bottom:4px;">Email</h3>
                <p style="color:var(--hp-text);font-weight:500;"><a href="mailto:${siteConfig.contact.email}" style="color:inherit;text-decoration:none;">${siteConfig.contact.email}</a></p>
            </div>
        </div>
        
        <hr style="border:none;height:1px;background:var(--hp-border);margin:var(--space-6) 0;">
        
        <h3 style="font-size:var(--text-lg);margin-bottom:var(--space-2);color:var(--hp-heading);font-family:var(--font-heading);">Opening Hours</h3>
        <p style="font-size:var(--text-xs);color:var(--hp-text-muted);margin-bottom:var(--space-4);">Open Monday to Saturday for appointments and walk-ins</p>
        
        <div style="background:rgba(115,201,190,0.12);border-left:3px solid var(--hp-primary);padding:10px 14px;border-radius:var(--radius-sm);margin-bottom:var(--space-5);">
            <p style="margin:0;font-size:var(--text-xs);font-weight:600;color:var(--hp-primary-dark);line-height:1.5;">WE ARE ACCEPTING NEW PATIENTS. (<a href="https://form.jotform.com/sehamanagementinv/-appointment-request-form" target="_blank" rel="noopener" style="color:#d32f2f;text-decoration:underline;">Click here to request a MEET & GREET APPOINTMENT</a>)</p>
        </div>

        <ul style="list-style:none;padding:0;margin:0;">
            <li style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px dashed var(--hp-border);color:var(--hp-text);font-size:var(--text-sm);"><span style="font-weight:500;">Monday</span> <span>${siteConfig.hours.days.monday}</span></li>
            <li style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px dashed var(--hp-border);color:var(--hp-text);font-size:var(--text-sm);"><span style="font-weight:500;">Tuesday</span> <span>${siteConfig.hours.days.tuesday}</span></li>
            <li style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px dashed var(--hp-border);color:var(--hp-text);font-size:var(--text-sm);"><span style="font-weight:500;">Wednesday</span> <span>${siteConfig.hours.days.wednesday}</span></li>
            <li style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px dashed var(--hp-border);color:var(--hp-text);font-size:var(--text-sm);"><span style="font-weight:500;">Thursday</span> <span>${siteConfig.hours.days.thursday}</span></li>
            <li style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px dashed var(--hp-border);color:var(--hp-text);font-size:var(--text-sm);"><span style="font-weight:500;">Friday</span> <span>${siteConfig.hours.days.friday}</span></li>
            <li style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px dashed var(--hp-border);color:var(--hp-text);font-size:var(--text-sm);"><span style="font-weight:500;">Saturday</span> <span>${siteConfig.hours.days.saturday}</span></li>
            <li style="display:flex;justify-content:space-between;padding:8px 0;color:var(--hp-text-muted);font-size:var(--text-sm);"><span style="font-weight:500;">Sunday</span> <span style="color:var(--hp-primary);font-weight:500;">Closed</span></li>
        </ul>
    </div>`;
}

function generateFooter(depth = 0) {
    const rootPrefix = depth === 0 ? '' : depth === 1 ? '../' : '../../';
    const logoSrc = `${rootPrefix}assets/logo_hp.png`;
    const servicesLink = `${rootPrefix}services/`;
    const teamLink = `${rootPrefix}team/`;
    const aboutLink = `${rootPrefix}about/`;
    const faqLink = `${rootPrefix}faq.html`;
    const contactLink = `${rootPrefix}contact.html`;
    const bookLink = `${rootPrefix}book.html`;
    const bookingFormLink = 'https://form.jotform.com/sehamanagementinv/-appointment-request-form';
    const callBackLink = 'https://form.jotform.com/sehamanagementinv/call-back-request-form';

    return `\n<footer class="hp-footer" style="margin-top:auto; background: linear-gradient(180deg, #092823 0%, #051A17 100%); border-top: 1px solid rgba(115, 201, 190, 0.22); color: #E2E8F0; padding-top: var(--space-16);">
    <!-- Pre-Footer Quick Action Strip -->
    <div class="container" style="margin-bottom: var(--space-12); padding-bottom: var(--space-10); border-bottom: 1px solid rgba(255, 255, 255, 0.08);">
        <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: var(--space-6); background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: var(--radius-2xl); padding: var(--space-6) var(--space-8); backdrop-filter: blur(12px);">
            <div style="display: flex; align-items: center; gap: 16px;">
                <div style="width: 48px; height: 48px; border-radius: 14px; background: rgba(115, 201, 190, 0.18); color: #97E2DC; border: 1px solid rgba(151, 226, 220, 0.35); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></svg>
                </div>
                <div>
                    <h3 style="color: #FFFFFF; font-size: var(--text-lg); margin: 0 0 4px; font-family: var(--font-heading); font-weight: 600;">Accepting New Patients & Walk-Ins</h3>
                    <p style="color: rgba(255, 255, 255, 0.7); font-size: var(--text-sm); margin: 0;">Midnapore, Calgary, AB · Family Practice, Specialists & Allied Care</p>
                </div>
            </div>
            <div style="display: flex; gap: 12px; flex-wrap: wrap;">
                <a href="tel:${siteConfig.contact.phone.replace(/[^0-9]/g, '')}" class="btn btn-outline" style="color: #FFFFFF; border-color: rgba(255, 255, 255, 0.3); padding: 10px 18px; font-size: var(--text-sm); border-radius: var(--radius-full); text-decoration: none; display: inline-flex; align-items: center; gap: 8px;">
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.864-1.051l-3.213-.535a2.25 2.25 0 00-2.237.615l-1.52 1.52a14.122 14.122 0 01-6.578-6.578l1.52-1.52a2.25 2.25 0 00.615-2.237l-.535-3.213C7.716 2.601 7.266 2.25 6.75 2.25H5.378A2.25 2.25 0 003.15 4.312 15.91 15.91 0 002.25 6.75z"/></svg>
                    <span>${siteConfig.contact.phone}</span>
                </a>
                <a href="${bookLink}" class="btn btn-primary" style="background: linear-gradient(135deg, #00897B 0%, #0D4E47 100%); color: #FFFFFF; padding: 10px 22px; font-size: var(--text-sm); font-weight: 600; border-radius: var(--radius-full); text-decoration: none; border: 1px solid rgba(151, 226, 220, 0.6); box-shadow: 0 4px 14px rgba(0, 137, 123, 0.35);">
                    Book Online 24/7 →
                </a>
            </div>
        </div>
    </div>

    <!-- Main 4-Column Footer Grid -->
    <div class="container footer-main-grid" style="display: grid; grid-template-columns: 1.3fr 1fr 1fr 1.2fr; gap: var(--space-10); padding-bottom: var(--space-12);">
        
        <!-- Column 1: Brand Section -->
        <div>
            <a href="${rootPrefix}index.html" style="display:inline-block; margin-bottom:var(--space-5);">
                <img src="${logoSrc}" alt="HealthPlus Medical" style="height: 52px; width: auto; max-width: 240px; object-fit: contain; filter: brightness(0) invert(1);">
            </a>
            <p style="color: rgba(255, 255, 255, 0.72); line-height: 1.7; font-size: var(--text-sm); margin-bottom: var(--space-5);">Providing exceptional, compassionate, and comprehensive medical care to Calgary and surrounding communities since 2006.</p>
            <div style="display: inline-flex; align-items: center; gap: 8px; background: rgba(255, 255, 255, 0.06); border: 1px solid rgba(255, 255, 255, 0.15); border-radius: var(--radius-full); padding: 5px 12px; font-size: 11.5px; color: #97E2DC;">
                <span style="width: 7px; height: 7px; border-radius: 50%; background: #10B981; display: inline-block;"></span>
                <span>Accredited Medical Clinic</span>
            </div>
        </div>

        <!-- Column 2: Clinical Services -->
        <div>
            <h4 style="color: #FFFFFF; margin-bottom: var(--space-5); font-family: var(--font-heading); font-size: 1.1rem; font-weight: 600; letter-spacing: 0.2px;">Clinical Care</h4>
            <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 11px;">
                <li><a href="${rootPrefix}services/family-medicine.html" style="color: rgba(255, 255, 255, 0.75); text-decoration: none; font-size: var(--text-sm); transition: color 0.2s;">Family Medicine</a></li>
                <li><a href="${rootPrefix}services/walk-in-clinic.html" style="color: rgba(255, 255, 255, 0.75); text-decoration: none; font-size: var(--text-sm); transition: color 0.2s;">Walk-In Clinic</a></li>
                <li><a href="${rootPrefix}services/internal-medicine.html" style="color: rgba(255, 255, 255, 0.75); text-decoration: none; font-size: var(--text-sm); transition: color 0.2s;">Internal Medicine</a></li>
                <li><a href="${rootPrefix}services/pediatric-care.html" style="color: rgba(255, 255, 255, 0.75); text-decoration: none; font-size: var(--text-sm); transition: color 0.2s;">Pediatric Care</a></li>
                <li><a href="${rootPrefix}services/mental-health.html" style="color: rgba(255, 255, 255, 0.75); text-decoration: none; font-size: var(--text-sm); transition: color 0.2s;">Mental Health</a></li>
                <li><a href="${rootPrefix}services/womens-health.html" style="color: rgba(255, 255, 255, 0.75); text-decoration: none; font-size: var(--text-sm); transition: color 0.2s;">Women's Health & OB/GYN</a></li>
                <li><a href="${servicesLink}" style="color: #97E2DC; text-decoration: none; font-size: var(--text-sm); font-weight: 600; margin-top: 4px; display: inline-block;">All 11 Specialties →</a></li>
            </ul>
        </div>

        <!-- Column 3: Patient Hub -->
        <div>
            <h4 style="color: #FFFFFF; margin-bottom: var(--space-5); font-family: var(--font-heading); font-size: 1.1rem; font-weight: 600; letter-spacing: 0.2px;">Patient Hub</h4>
            <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 11px;">
                <li><a href="${teamLink}" style="color: rgba(255, 255, 255, 0.75); text-decoration: none; font-size: var(--text-sm); transition: color 0.2s;">Our Medical Team</a></li>
                <li><a href="${aboutLink}" style="color: rgba(255, 255, 255, 0.75); text-decoration: none; font-size: var(--text-sm); transition: color 0.2s;">About HealthPlus</a></li>
                <li><a href="${faqLink}" style="color: rgba(255, 255, 255, 0.75); text-decoration: none; font-size: var(--text-sm); transition: color 0.2s;">Patient FAQ</a></li>
                <li><a href="${callBackLink}" target="_blank" rel="noopener" style="color: rgba(255, 255, 255, 0.75); text-decoration: none; font-size: var(--text-sm); transition: color 0.2s;">Request Call-Back</a></li>
                <li><a href="${contactLink}" style="color: rgba(255, 255, 255, 0.75); text-decoration: none; font-size: var(--text-sm); transition: color 0.2s;">Contact & Map</a></li>
                <li><a href="https://search.google.com/local/writereview?placeid=ChIJm-3P4A2wcVMRq4lXW_m9L3M" target="_blank" rel="noopener" style="color: #FCD34D; text-decoration: none; font-size: var(--text-sm); font-weight: 500; margin-top: 4px; display: inline-block;">★ Leave a Review</a></li>
            </ul>
        </div>

        <!-- Column 4: Hours & Location Glass Card -->
        <div>
            <div style="background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: var(--radius-xl); padding: var(--space-6); backdrop-filter: blur(12px);">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: var(--space-4);">
                    <h4 style="color: #FFFFFF; margin: 0; font-family: var(--font-heading); font-size: 1.05rem; font-weight: 600;">Clinic Hours</h4>
                    <span style="font-size: 11px; background: rgba(16, 185, 129, 0.15); color: #A7F3D0; border: 1px solid rgba(16, 185, 129, 0.3); padding: 3px 8px; border-radius: var(--radius-full); font-weight: 600;">Mon–Sat</span>
                </div>
                
                <ul style="list-style: none; padding: 0; margin: 0 0 var(--space-5); display: flex; flex-direction: column; gap: 9px; font-size: var(--text-xs);">
                    <li style="display: flex; justify-content: space-between; color: rgba(255, 255, 255, 0.85); border-bottom: 1px solid rgba(255, 255, 255, 0.06); padding-bottom: 7px;">
                        <span>Mon – Thu</span>
                        <span style="font-weight: 600; color: #FFFFFF;">${siteConfig.hours.monThu}</span>
                    </li>
                    <li style="display: flex; justify-content: space-between; color: rgba(255, 255, 255, 0.85); border-bottom: 1px solid rgba(255, 255, 255, 0.06); padding-bottom: 7px;">
                        <span>Friday</span>
                        <span style="font-weight: 600; color: #FFFFFF;">${siteConfig.hours.friday}</span>
                    </li>
                    <li style="display: flex; justify-content: space-between; color: rgba(255, 255, 255, 0.85); border-bottom: 1px solid rgba(255, 255, 255, 0.06); padding-bottom: 7px;">
                        <span>Saturday</span>
                        <span style="font-weight: 600; color: #FFFFFF;">${siteConfig.hours.saturday}</span>
                    </li>
                    <li style="display: flex; justify-content: space-between; color: rgba(255, 255, 255, 0.85); padding-top: 2px;">
                        <span>Sun & Holidays</span>
                        <span style="font-weight: 600; color: #F87171;">${siteConfig.hours.sunday}</span>
                    </li>
                </ul>

                <div style="font-size: var(--text-xs); color: rgba(255, 255, 255, 0.65); line-height: 1.5; margin-bottom: var(--space-4);">
                    📍 ${siteConfig.contact.address.street}, Calgary, AB ${siteConfig.contact.address.postalCode}
                </div>

                <a href="${bookingFormLink}" target="_blank" rel="noopener" class="btn btn-sm btn-primary" style="display: block; text-align: center; background: linear-gradient(135deg, #00897B 0%, #0D4E47 100%); color: #FFFFFF; padding: 8px 14px; font-size: var(--text-xs); font-weight: 600; border-radius: var(--radius-full); text-decoration: none; border: 1px solid rgba(151, 226, 220, 0.5);">
                    Request Appointment Online
                </a>
            </div>
        </div>

    </div>
    
    <!-- Footer Bottom Bar -->
    <div style="border-top: 1px solid rgba(255, 255, 255, 0.08); background: rgba(0, 0, 0, 0.25);">
        <div class="container" style="padding: var(--space-6) 0; display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: var(--space-4);">
            <p style="color: rgba(255, 255, 255, 0.55); font-size: var(--text-xs); margin: 0;">&copy; 2026 HealthPlus by SEHA Medical. All rights reserved. Midnapore, Calgary, Alberta.</p>
            <p style="color: rgba(255, 255, 255, 0.55); font-size: var(--text-xs); margin: 0;">Built with care by <a href="https://nexorayyc.io" target="_blank" rel="noopener" style="color: #97E2DC; font-weight: 600; text-decoration: none;">Nexora</a></p>
        </div>
    </div>
</footer>\n`;
}

function generateTeamDirectory() {
    let html = '<div class="team-grid" style="display:grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: var(--space-8);">';
    teamMembers.forEach(member => {
        html += `
        <div class="team-card" style="background:var(--hp-surface);border:1px solid var(--hp-border);border-radius:var(--radius-xl);overflow:hidden;transition:transform 0.2s, box-shadow 0.2s;">
            <div style="aspect-ratio:4/3;background:#e2e8f0;overflow:hidden;">
                <img src="../${member.photo}" alt="Dr. ${member.lastName}" style="width:100%;height:100%;object-fit:cover;">
            </div>
            <div style="padding:var(--space-6);">
                <p style="color:var(--hp-primary);font-size:var(--text-xs);font-weight:600;text-transform:uppercase;letter-spacing:1px;margin-bottom:4px;">${member.role}</p>
                <h3 style="font-size:var(--text-xl);color:var(--hp-heading);margin-bottom:var(--space-2);">Dr. ${member.firstName} ${member.lastName}</h3>
                <p style="color:var(--hp-text-muted);font-size:var(--text-sm);margin-bottom:var(--space-5);line-height:1.6;">${member.shortBio}</p>
                <div style="display:flex;gap:12px;align-items:center;">
                    <a href="${member.slug}.html" class="btn btn-outline" style="flex:1;text-align:center;padding:8px;border-radius:var(--radius-full);color:var(--hp-primary);border:2px solid var(--hp-primary);text-decoration:none;font-weight:600;font-size:var(--text-sm);">View Profile</a>
                </div>
            </div>
        </div>`;
    });
    html += '</div>';
    return html;
}

// Injector
function injectContent(filePath, markers, contentGenerator, arg) {
    if (!fs.existsSync(filePath)) {
        console.warn('File not found:', filePath);
        return;
    }
    
    let fileContent = fs.readFileSync(filePath, 'utf8');
    const startMarker = '<!-- ' + markers.start + ' -->';
    const endMarker = '<!-- ' + markers.end + ' -->';
    
    const startIndex = fileContent.indexOf(startMarker);
    const endIndex = fileContent.indexOf(endMarker);
    
    if (startIndex !== -1 && endIndex !== -1) {
        const newContent = contentGenerator(arg);
        const before = fileContent.substring(0, startIndex + startMarker.length);
        const after = fileContent.substring(endIndex);
        
        fs.writeFileSync(filePath, before + newContent + after, 'utf8');
        console.log('Injected ' + markers.start + ' into ' + path.basename(filePath));
    } else {
        console.warn('Markers ' + markers.start + ' / ' + markers.end + ' not found in ' + path.basename(filePath));
    }
}

// Run the build process
console.log('--- HealthPlus V2 Services Build Started ---');

// 1. Inject Homepage Featured Cards & Footer
injectContent(path.join(rootDir, 'index.html'), { start: 'HP_FEATURED_SERVICES_START', end: 'HP_FEATURED_SERVICES_END' }, generateHomepageFeaturedCards);
injectContent(path.join(rootDir, 'index.html'), { start: 'HP_SERVICES_NAV_START', end: 'HP_SERVICES_NAV_END' }, generateNavDropdownLinks, 0);
injectContent(path.join(rootDir, 'index.html'), { start: 'HP_FOOTER_START', end: 'HP_FOOTER_END' }, generateFooter, 0);

// 2. Inject Services Directory Grid & Footer
injectContent(path.join(pagesDir, 'index.html'), { start: 'HP_SERVICES_DIRECTORY_START', end: 'HP_SERVICES_DIRECTORY_END' }, generateDirectoryCards);
injectContent(path.join(pagesDir, 'index.html'), { start: 'HP_SERVICES_NAV_START', end: 'HP_SERVICES_NAV_END' }, generateNavDropdownLinks, 1);
injectContent(path.join(pagesDir, 'index.html'), { start: 'HP_FOOTER_START', end: 'HP_FOOTER_END' }, generateFooter, 1);

// 3. Inject Individual Service Pages & Footers
services.forEach(service => {
    const pagePath = path.join(pagesDir, service.slug + '.html');
    injectContent(pagePath, { start: 'HP_SERVICES_NAV_START', end: 'HP_SERVICES_NAV_END' }, generateNavDropdownLinks, 1);
    injectContent(pagePath, { start: 'HP_RELATED_SERVICES_START', end: 'HP_RELATED_SERVICES_END' }, generateRelatedServices, service.slug);
    injectContent(pagePath, { start: 'HP_FOOTER_START', end: 'HP_FOOTER_END' }, generateFooter, 1);
});

// 4. Inject Core Pages Nav Dropdown & Footers
const coreHtmlFiles = [
    { file: 'contact.html', depth: 0 },
    { file: 'book.html', depth: 0 },
    { file: 'faq.html', depth: 0 },
    { file: '404.html', depth: 0 },
    { file: path.join('about', 'index.html'), depth: 1 },
    { file: path.join('team', 'index.html'), depth: 1 }
];

const teamDir = path.join(corePagesDir, 'team');
if (fs.existsSync(teamDir)) {
    fs.readdirSync(teamDir).forEach(f => {
        if (f.endsWith('.html') && f !== 'index.html') {
            coreHtmlFiles.push({ file: path.join('team', f), depth: 1 });
        }
    });
}

coreHtmlFiles.forEach(item => {
    const filePath = path.join(corePagesDir, item.file);
    if (fs.existsSync(filePath)) {
        injectContent(filePath, { start: 'HP_SERVICES_NAV_START', end: 'HP_SERVICES_NAV_END' }, generateNavDropdownLinks, item.depth);
        injectContent(filePath, { start: 'HP_FOOTER_START', end: 'HP_FOOTER_END' }, generateFooter, item.depth);
    }
});

// 5. Inject Contact Info & Team Directory into specific pages
injectContent(path.join(corePagesDir, 'contact.html'), { start: 'HP_CONTACT_INFO_START', end: 'HP_CONTACT_INFO_END' }, generateContactInfo);
if (fs.existsSync(path.join(corePagesDir, 'team', 'index.html'))) {
    injectContent(path.join(corePagesDir, 'team', 'index.html'), { start: 'HP_TEAM_DIRECTORY_START', end: 'HP_TEAM_DIRECTORY_END' }, generateTeamDirectory);
}

console.log('--- Build Complete ---');
