import fs from 'fs';
import path from 'path';
import { services, teamMembers } from './v3-components.mjs';
import { buildHomePage, buildTeamDirectoryPage, buildPhysicianProfilePage } from './v3-pages-home-team.mjs';
import { buildServicesDirectoryPage, buildIndividualServicePage, buildWomensHealthCampaignPage } from './v3-pages-services.mjs';
import { buildAboutPage, buildBookPage, buildContactPage, buildFaqPage, build404Page } from './v3-pages-core.mjs';

const ROOT = 'C:/Users/mcreg/Desktop/healthplus/seha medical/healthplusnew';

function writePage(relPath, html) {
  const fullPath = path.join(ROOT, relPath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, html, 'utf8');
  console.log(`✓ Built ${relPath} (${(Buffer.byteLength(html, 'utf8') / 1024).toFixed(1)} KB)`);
}

console.log('=== Building HealthPlus V3 ("The Modern Care Experience") ===');

// 1. Core Root Pages
writePage('index.html', buildHomePage());
writePage('about/index.html', buildAboutPage());
writePage('book.html', buildBookPage());
writePage('contact.html', buildContactPage());
writePage('faq.html', buildFaqPage());
writePage('404.html', build404Page());

// 2. Services Directory + 11 Services + Campaign Page
writePage('services/index.html', buildServicesDirectoryPage());
for (const service of services) {
  writePage(`services/${service.slug}.html`, buildIndividualServicePage(service));
}
writePage('services/womens-health-iud-clinic-calgary.html', buildWomensHealthCampaignPage());

// 3. Team Directory + 16 Physician Profile Pages
writePage('team/index.html', buildTeamDirectoryPage());
for (const member of teamMembers) {
  if (member.category !== 'Staff') {
    writePage(`team/${member.slug}.html`, buildPhysicianProfilePage(member));
  }
}

console.log('=== HealthPlus V3 Build Complete (35 HTML pages generated) ===');
