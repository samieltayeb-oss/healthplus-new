const fs = require('fs');
const path = require('path');
const services = require('../config/services.js');

const rootDir = path.join(__dirname, '..');
const pagesDir = path.join(rootDir, 'services');

console.log('--- Validating HealthPlus Services Architecture ---');

let errors = 0;

// 1. Validate 11 services exist
if (services.length !== 11) {
    console.error(`ERROR: Expected 11 services, found ${services.length}`);
    errors++;
}

const slugs = new Set();
services.forEach(s => {
    // 2. Validate slugs are unique
    if (slugs.has(s.slug)) {
        console.error(`ERROR: Duplicate slug found: ${s.slug}`);
        errors++;
    }
    slugs.add(s.slug);

    // 3. Validate required metadata
    const requiredProps = ['id', 'title', 'slug', 'shortDescription', 'heroImage', 'icon', 'category', 'seoTitle', 'seoDescription', 'canonicalUrl', 'status'];
    requiredProps.forEach(prop => {
        if (!s[prop]) {
            console.error(`ERROR: Service ${s.slug} is missing required property: ${prop}`);
            errors++;
        }
    });

    // 4. Validate Related Services
    if (s.relatedServices && s.relatedServices.length > 0) {
        s.relatedServices.forEach(rs => {
            if (!services.find(serv => serv.slug === rs)) {
                console.error(`ERROR: Service ${s.slug} references invalid related service: ${rs}`);
                errors++;
            }
        });
    }

    // 5. Validate File Exists (after build theoretically, but we can check if the templates exist)
    const pagePath = path.join(pagesDir, `${s.slug}.html`);
    if (!fs.existsSync(pagePath)) {
        console.error(`ERROR: Page template missing for ${s.slug}. Expected at: ${pagePath}`);
        errors++;
    }
});

// Check index.html exists
if (!fs.existsSync(path.join(pagesDir, 'index.html'))) {
    console.error(`ERROR: Services Directory index.html is missing`);
    errors++;
}

// Check Core Pages exist
const corePages = ['about/index.html', 'team/index.html', 'contact.html', 'book.html'];
corePages.forEach(page => {
    if (!fs.existsSync(path.join(rootDir, page))) {
        console.error(`ERROR: Core page missing: ${page}`);
        errors++;
    }
});

// Check Team Profiles exist
const teamMembers = require('../config/team.js');
teamMembers.forEach(member => {
    if (!fs.existsSync(path.join(rootDir, 'team', `${member.slug}.html`))) {
        console.error(`ERROR: Team profile missing: ${member.slug}`);
        errors++;
    }
});

if (errors > 0) {
    console.error(`\nValidation Failed with ${errors} errors.`);
    process.exit(1);
} else {
    console.log('\nValidation Passed! All 11 services, core pages, and team profiles are valid.');
    process.exit(0);
}
