const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const teamHtmlPath = path.join(rootDir, 'team', 'index.html');
const assetsTeamDir = path.join(rootDir, 'assets', 'healthplus team');

function generateCardsAndModals(category) {
    const categoryDir = path.join(assetsTeamDir, category);
    if (!fs.existsSync(categoryDir)) return { cards: '', modals: '' };

    const doctors = fs.readdirSync(categoryDir, { withFileTypes: true })
        .filter(d => d.isDirectory())
        .map(d => d.name);

    let cardsHtml = `<div class="team-grid" style="display:grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: var(--space-8);">\n`;
    let modalsHtml = '';

    doctors.forEach(docDirName => {
        const docPath = path.join(categoryDir, docDirName);
        const files = fs.readdirSync(docPath);
        
        let imgName = files.find(f => f.endsWith('.jpg') || f.endsWith('.png') || f.endsWith('.jpeg')) || '';
        let infoText = '';
        try {
            infoText = fs.readFileSync(path.join(docPath, 'info.txt'), 'utf8');
        } catch(e){}

        const nameMatch = infoText.match(/Name:\s*(.*)/);
        const name = nameMatch ? nameMatch[1].trim() : docDirName;
        
        const linkedInMatch = infoText.match(/LinkedIn:\s*(.*)/);
        let linkedinUrl = linkedInMatch ? linkedInMatch[1].trim() : `https://www.linkedin.com/search/results/people/?keywords=${encodeURIComponent(name)}`;
        
        const bioLines = infoText.split('Information:')[1] || '';
        const bioParas = bioLines.split('\n').map(l => l.trim()).filter(Boolean);
        const shortBio = bioParas.length > 0 ? bioParas[0].substring(0, 150) + '...' : '';
        const fullBioHtml = bioParas.map(p => `<p style="margin-bottom:var(--space-3);line-height:1.6;color:var(--hp-text);">${p}</p>`).join('\n');

        const role = category === 'Physicians' ? 'Family Physician' : 'Specialist';
        const imgPath = imgName ? `../../assets/healthplus team/${category}/${docDirName}/${imgName}` : '../../assets/images/team/placeholder.webp';

        const modalId = `modal-${docDirName}`;
        
        const linkedinIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>`;

        cardsHtml += `
        <div class="team-card" style="background:var(--hp-surface);border:1px solid var(--hp-border);border-radius:var(--radius-xl);overflow:hidden;transition:transform 0.2s, box-shadow 0.2s;display:flex;flex-direction:column;">
            <div style="aspect-ratio:4/3;background:#e2e8f0;overflow:hidden;">
                <img src="${imgPath}" alt="${name}" style="width:100%;height:100%;object-fit:cover;object-position:top;">
            </div>
            <div style="padding:var(--space-6);flex:1;display:flex;flex-direction:column;">
                <p style="color:var(--hp-primary);font-size:var(--text-xs);font-weight:600;text-transform:uppercase;letter-spacing:1px;margin-bottom:4px;">${role}</p>
                <h3 style="font-size:var(--text-xl);color:var(--hp-heading);margin-bottom:var(--space-2);">${name}</h3>
                <p style="color:var(--hp-text-muted);font-size:var(--text-sm);margin-bottom:var(--space-5);line-height:1.6;flex:1;">${shortBio}</p>
                <div style="display:flex;gap:12px;align-items:center;">
                    <button onclick="openModal('${modalId}')" class="btn btn-outline" style="flex:1;text-align:center;padding:8px;border-radius:var(--radius-full);color:var(--hp-primary);border:2px solid var(--hp-primary);background:transparent;cursor:pointer;font-weight:600;font-size:var(--text-sm);transition:all 0.2s;">View Profile</button>
                    <a href="${linkedinUrl}" target="_blank" rel="noopener noreferrer" style="display:flex;align-items:center;justify-content:center;width:40px;height:40px;border-radius:50%;background:#f1f5f9;color:#0a66c2;transition:all 0.2s;" aria-label="LinkedIn Profile for ${name}">
                        ${linkedinIcon}
                    </a>
                </div>
            </div>
        </div>\n`;

        modalsHtml += `
        <div id="${modalId}" class="hp-modal" style="display:none;position:fixed;top:0;left:0;width:100%;height:100%;z-index:1000;background:rgba(15,23,42,0.6);backdrop-filter:blur(4px);align-items:center;justify-content:center;padding:var(--space-4);">
            <div class="hp-modal-content" style="background:var(--hp-surface);border-radius:var(--radius-2xl);width:100%;max-width:800px;max-height:90vh;overflow-y:auto;position:relative;box-shadow:0 25px 50px -12px rgba(0,0,0,0.25);transform:translateY(20px);transition:all 0.3s ease-out;">
                <button onclick="closeModal('${modalId}')" style="position:absolute;top:var(--space-4);right:var(--space-4);background:rgba(0,0,0,0.05);border:none;width:36px;height:36px;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--hp-text);z-index:10;transition:background 0.2s;" aria-label="Close modal">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
                <div style="display:grid;grid-template-columns:1fr;gap:0;">
                    <div style="aspect-ratio:16/9;background:#e2e8f0;overflow:hidden;">
                        <img src="${imgPath}" alt="${name}" style="width:100%;height:100%;object-fit:cover;object-position:top;">
                    </div>
                    <div style="padding:var(--space-8);">
                        <p style="color:var(--hp-primary);font-size:var(--text-sm);font-weight:600;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">${role}</p>
                        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:var(--space-6);">
                            <h2 style="font-size:var(--text-3xl);color:var(--hp-heading);margin:0;font-family:var(--font-heading);">${name}</h2>
                            <a href="${linkedinUrl}" target="_blank" rel="noopener noreferrer" style="display:flex;align-items:center;justify-content:center;width:44px;height:44px;border-radius:50%;background:rgba(10,102,194,0.1);color:#0a66c2;transition:all 0.2s;" aria-label="LinkedIn Profile for ${name}">
                                ${linkedinIcon}
                            </a>
                        </div>
                        ${fullBioHtml}
                        <div style="margin-top:var(--space-8);padding-top:var(--space-6);border-top:1px solid var(--hp-border);">
                            <a href="https://form.jotform.com/sehamanagementinv/-appointment-request-form" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="width:100%;text-align:center;">Book Appointment</a>
                        </div>
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
