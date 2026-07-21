const fs = require('fs');
const path = require('path');
const teamMembers = require('../config/team.js');

const rootDir = path.join(__dirname, '..');
const teamHtmlPath = path.join(rootDir, 'team', 'index.html');

function generateCardsAndModals(category) {
    let cardsHtml = `<div class="team-grid" style="display:grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: var(--space-8);">\n`;
    let modalsHtml = '';
    
    const members = teamMembers.filter(m => m.category === category);
    
    members.forEach((member, index) => {
        const name = `Dr. ${member.firstName} ${member.lastName}`;
        const role = member.role;
        const imgPath = `/${member.photo}`;
        const modalId = `modal-${category.toLowerCase()}-${index}`;
        
        cardsHtml += `
        <!-- <meta name="robots" content="noindex, nofollow"> -->
        <div class="team-card" style="background:var(--hp-surface);border:1px solid var(--hp-border);border-radius:var(--radius-xl);overflow:hidden;transition:transform 0.2s, box-shadow 0.2s;display:flex;flex-direction:column;">
            <div style="aspect-ratio:4/5;background:#e2e8f0;overflow:hidden;">
                <img src="${imgPath}" alt="${name}" width="1200" height="1500" decoding="async" loading="lazy" style="width:100%;height:100%;object-fit:cover;object-position:center;">
            </div>
            <div style="padding:var(--space-6);flex:1;display:flex;flex-direction:column;">
                <p style="color:var(--hp-primary);font-size:var(--text-xs);font-weight:600;text-transform:uppercase;letter-spacing:1px;margin-bottom:4px;">${role}</p>
                <h3 style="font-size:var(--text-xl);color:var(--hp-heading);margin-bottom:var(--space-2);">${name}</h3>
                <p style="color:var(--hp-text-muted);font-size:var(--text-sm);margin-bottom:var(--space-5);line-height:1.6;flex:1;">${member.bio ? (member.bio.length > 150 ? member.bio.substring(0, 150).trim() + '...' : member.bio) : 'Biography and professional credentials will be updated once the final medical team profile is approved.'}</p>
                <button onclick="openModal('${modalId}')" class="btn btn-outline" style="width:100%;text-align:center;padding:8px;border-radius:var(--radius-full);color:var(--hp-primary);border:2px solid var(--hp-primary);background:transparent;cursor:pointer;font-weight:600;font-size:var(--text-sm);">View Profile</button>
            </div>
        </div>\n`;

        modalsHtml += `
        <div id="${modalId}" class="hp-modal" style="display:none;position:fixed;top:0;left:0;width:100%;height:100%;z-index:1000;background:rgba(15,23,42,0.6);backdrop-filter:blur(4px);align-items:center;justify-content:center;padding:var(--space-4);">
            <div class="hp-modal-content" style="background:var(--hp-surface);border-radius:var(--radius-2xl);width:100%;max-width:800px;max-height:90vh;overflow-y:auto;position:relative;box-shadow:0 25px 50px -12px rgba(0,0,0,0.25);transform:translateY(20px);transition:all 0.3s ease-out;">
                <button onclick="closeModal('${modalId}')" style="position:absolute;top:var(--space-4);right:var(--space-4);background:rgba(0,0,0,0.05);border:none;width:36px;height:36px;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--hp-text);z-index:10;" aria-label="Close modal">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
                <div style="display:grid;grid-template-columns:1fr;gap:0;">
                    <div style="aspect-ratio:4/5;background:#e2e8f0;overflow:hidden;">
                        <img src="${imgPath}" alt="${name}" width="1200" height="1500" decoding="async" loading="lazy" style="width:100%;height:100%;object-fit:cover;object-position:center;">
                    </div>
                    <div style="padding:var(--space-8);">
                        <p style="color:var(--hp-primary);font-size:var(--text-sm);font-weight:600;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">${role}</p>
                        <h2 style="font-size:var(--text-3xl);color:var(--hp-heading);margin-bottom:var(--space-6);font-family:var(--font-heading);">${name}</h2>
                        <p style="margin-bottom:var(--space-3);line-height:1.6;color:var(--hp-text);">${member.bio || 'Biography and professional credentials will be updated once the final medical team profile is approved.'}</p>
                    </div>
                </div>
            </div>
        </div>\n`;
    });

    cardsHtml += `</div>\n`;

    return { cards: cardsHtml, modals: modalsHtml };
}

function initTeam() {
    console.log('Generating Team Page...');
    let html = fs.readFileSync(teamHtmlPath, 'utf8');

    const physData = generateCardsAndModals('Physicians');
    const specData = generateCardsAndModals('Specialists');

    html = html.replace(/<!-- HP_TEAM_PHYSICIANS_START -->[\s\S]*?<!-- HP_TEAM_PHYSICIANS_END -->/, 
        `<!-- HP_TEAM_PHYSICIANS_START -->\n${physData.cards}<!-- HP_TEAM_PHYSICIANS_END -->`);

    html = html.replace(/<!-- HP_TEAM_SPECIALISTS_START -->[\s\S]*?<!-- HP_TEAM_SPECIALISTS_END -->/, 
        `<!-- HP_TEAM_SPECIALISTS_START -->\n${specData.cards}<!-- HP_TEAM_SPECIALISTS_END -->`);

    html = html.replace(/<!-- HP_TEAM_MODALS_START -->[\s\S]*?<!-- HP_TEAM_MODALS_END -->/, 
        `<!-- HP_TEAM_MODALS_START -->\n${physData.modals}\n${specData.modals}<!-- HP_TEAM_MODALS_END -->`);

    fs.writeFileSync(teamHtmlPath, html, 'utf8');
    console.log('Team Page generated successfully!');
}

initTeam();
