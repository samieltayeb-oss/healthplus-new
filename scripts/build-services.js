const fs = require('fs');
const path = require('path');
const services = require('../config/services.js');
const siteConfig = require('../config/site.js');
const teamMembers = require('../config/team.js');

const rootDir = path.join(__dirname, '..');
const pagesDir = path.join(rootDir, 'pages', 'services');
const corePagesDir = path.join(rootDir, 'pages');

// Component Generators
function generateNavDropdownLinks(depth = 0) {
    const prefix = depth === 0 ? 'pages/services/' : depth === 1 ? '' : '../';
    
    let html = `\n<ul class="dropdown-menu">\n`;
    services.forEach(service => {
        html += `  <li><a href="${prefix}${service.slug}.html">${service.title}</a></li>\n`;
    });
    html += `  <li><hr class="dropdown-divider"></li>\n`;
    html += `  <li><a href="${depth === 0 ? 'pages/services/index.html' : 'index.html'}"><strong>View All Services</strong></a></li>\n`;
    html += `</ul>\n`;
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
        <a href="pages/services/${s.slug}.html" aria-label="Learn more about ${s.title}" style="display: inline-flex; align-items: center; gap: 4px; font-weight: 600; color: var(--hp-primary); text-decoration: none;">
            Learn More 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" style="width: 16px; height: 16px;"><path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd" /></svg>
        </a>
    </div>\n`;
    });
    
    html += `</div>\n`;
    html += `<div style="text-align: center; margin-top: var(--space-8);">
        <a href="pages/services/index.html" class="btn btn-outline" style="display: inline-block; padding: 12px 24px; border: 2px solid var(--hp-primary); border-radius: var(--radius-full); color: var(--hp-primary); font-weight: 600; text-decoration: none;">View All Services</a>
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
        <h2 style="font-size:var(--text-xl);margin-bottom:var(--space-6);">Clinic Information</h2>
        
        <div style="display:flex;gap:var(--space-4);margin-bottom:var(--space-4);">
            <svg style="width:24px;color:var(--hp-primary);" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
            <div>
                <h3 style="font-size:var(--text-sm);color:var(--hp-text-muted);margin-bottom:4px;">Address</h3>
                <p style="color:var(--hp-text);font-weight:500;">${siteConfig.contact.address.street}<br>${siteConfig.contact.address.city}, ${siteConfig.contact.address.province} ${siteConfig.contact.address.postalCode}</p>
            </div>
        </div>
        
        <div style="display:flex;gap:var(--space-4);margin-bottom:var(--space-4);">
            <svg style="width:24px;color:var(--hp-primary);" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.864-1.051l-3.213-.535a2.25 2.25 0 00-2.237.615l-1.52 1.52a14.122 14.122 0 01-6.578-6.578l1.52-1.52a2.25 2.25 0 00.615-2.237l-.535-3.213C7.716 2.601 7.266 2.25 6.75 2.25H5.378A2.25 2.25 0 003.15 4.312 15.91 15.91 0 002.25 6.75z" /></svg>
            <div>
                <h3 style="font-size:var(--text-sm);color:var(--hp-text-muted);margin-bottom:4px;">Phone</h3>
                <p style="color:var(--hp-text);font-weight:500;">${siteConfig.contact.phone}</p>
            </div>
        </div>
        
        <div style="display:flex;gap:var(--space-4);margin-bottom:var(--space-6);">
            <svg style="width:24px;color:var(--hp-primary);" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
            <div>
                <h3 style="font-size:var(--text-sm);color:var(--hp-text-muted);margin-bottom:4px;">Email</h3>
                <p style="color:var(--hp-text);font-weight:500;">${siteConfig.contact.email}</p>
            </div>
        </div>
        
        <hr style="border:none;height:1px;background:var(--hp-border);margin:var(--space-6) 0;">
        
        <h3 style="font-size:var(--text-lg);margin-bottom:var(--space-4);">Hours of Operation</h3>
        <ul style="list-style:none;padding:0;margin:0;">
            <li style="display:flex;justify-content:space-between;margin-bottom:8px;color:var(--hp-text);"><span style="font-weight:500;">Mon - Fri</span> <span>${siteConfig.hours.weekday}</span></li>
            <li style="display:flex;justify-content:space-between;margin-bottom:8px;color:var(--hp-text);"><span style="font-weight:500;">Saturday</span> <span>${siteConfig.hours.saturday}</span></li>
            <li style="display:flex;justify-content:space-between;margin-bottom:8px;color:var(--hp-text-muted);"><span style="font-weight:500;">Sunday</span> <span>${siteConfig.hours.sunday}</span></li>
        </ul>
    </div>`;
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

// 1. Inject Homepage Featured Cards
injectContent(path.join(rootDir, 'index.html'), { start: 'HP_FEATURED_SERVICES_START', end: 'HP_FEATURED_SERVICES_END' }, generateHomepageFeaturedCards);

// 2. Inject Homepage Nav Dropdown
injectContent(path.join(rootDir, 'index.html'), { start: 'HP_SERVICES_NAV_START', end: 'HP_SERVICES_NAV_END' }, generateNavDropdownLinks, 0);

// 3. Inject Services Directory Grid
injectContent(path.join(pagesDir, 'index.html'), { start: 'HP_SERVICES_DIRECTORY_START', end: 'HP_SERVICES_DIRECTORY_END' }, generateDirectoryCards);

// 4. Inject Directory Nav Dropdown
injectContent(path.join(pagesDir, 'index.html'), { start: 'HP_SERVICES_NAV_START', end: 'HP_SERVICES_NAV_END' }, generateNavDropdownLinks, 1);

// 5. Inject Individual Pages
services.forEach(service => {
    const pagePath = path.join(pagesDir, service.slug + '.html');
    injectContent(pagePath, { start: 'HP_SERVICES_NAV_START', end: 'HP_SERVICES_NAV_END' }, generateNavDropdownLinks, 1);
    injectContent(pagePath, { start: 'HP_RELATED_SERVICES_START', end: 'HP_RELATED_SERVICES_END' }, generateRelatedServices, service.slug);
});

// 6. Inject Core Pages
injectContent(path.join(corePagesDir, 'contact.html'), { start: 'HP_CONTACT_INFO_START', end: 'HP_CONTACT_INFO_END' }, generateContactInfo);
injectContent(path.join(corePagesDir, 'team', 'index.html'), { start: 'HP_TEAM_DIRECTORY_START', end: 'HP_TEAM_DIRECTORY_END' }, generateTeamDirectory);

console.log('--- Build Complete ---');
