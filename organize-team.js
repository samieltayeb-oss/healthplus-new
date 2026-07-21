const fs = require('fs');
const path = require('path');
const https = require('https');
const cheerio = require('cheerio');

const TARGET_DIR = 'C:\\Users\\mcreg\\Desktop\\healthplus\\seha medical\\healthplusnew\\assets\\healthplus team';
const PHYSICIANS_DIR = path.join(TARGET_DIR, 'Physicians');
const SPECIALISTS_DIR = path.join(TARGET_DIR, 'Specialists');

function fetchUrl(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                return fetchUrl(res.headers.location).then(resolve).catch(reject);
            }
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(data));
        }).on('error', err => reject(err));
    });
}

async function run() {
    try {
        // First move everything back to TARGET_DIR to reorganize correctly
        if (fs.existsSync(PHYSICIANS_DIR)) {
            const pDirs = fs.readdirSync(PHYSICIANS_DIR, { withFileTypes: true });
            for (const d of pDirs) {
                if (d.isDirectory()) {
                    fs.renameSync(path.join(PHYSICIANS_DIR, d.name), path.join(TARGET_DIR, d.name));
                }
            }
        }
        if (fs.existsSync(SPECIALISTS_DIR)) {
            const sDirs = fs.readdirSync(SPECIALISTS_DIR, { withFileTypes: true });
            for (const d of sDirs) {
                if (d.isDirectory()) {
                    fs.renameSync(path.join(SPECIALISTS_DIR, d.name), path.join(TARGET_DIR, d.name));
                }
            }
        }

        const physiciansUrls = new Set();
        const specialistsUrls = new Set();

        // Get physicians links
        let html = await fetchUrl('https://healthplusmed.ca/family_physicians/');
        let $ = cheerio.load(html);
        $('a').each((i, el) => {
            const href = $(el).attr('href');
            if (href && href.startsWith('https://healthplusmed.ca/') && !href.includes('blog') && !href.includes('category')) {
                const basename = href.split('/').filter(Boolean).pop();
                if (!['contact', 'about', 'services', 'facility', 'join-our-team', 'meet-our-team', 'family_physicians', 'specialists', 'staff'].includes(basename)) {
                    physiciansUrls.add(href);
                }
            }
        });

        // Get specialists links
        html = await fetchUrl('https://healthplusmed.ca/specialists/');
        $ = cheerio.load(html);
        $('a').each((i, el) => {
            const href = $(el).attr('href');
            if (href && href.startsWith('https://healthplusmed.ca/') && !href.includes('blog') && !href.includes('category')) {
                const basename = href.split('/').filter(Boolean).pop();
                if (!['contact', 'about', 'services', 'facility', 'join-our-team', 'meet-our-team', 'family_physicians', 'specialists', 'staff'].includes(basename)) {
                    specialistsUrls.add(href);
                }
            }
        });
        
        // Let's remove thomas nel
        physiciansUrls.forEach(v => { if(v.includes('thomasnel') || v.includes('thomas-nel')) physiciansUrls.delete(v); });
        specialistsUrls.forEach(v => { if(v.includes('thomasnel') || v.includes('thomas-nel')) specialistsUrls.delete(v); });
        
        // Remove overlap if any (some might be listed in both? If so, default to physician)
        specialistsUrls.forEach(v => { if(physiciansUrls.has(v)) specialistsUrls.delete(v); });

        console.log(`Live site lists ${physiciansUrls.size} physicians and ${specialistsUrls.size} specialists.`);

        const dirs = fs.readdirSync(TARGET_DIR, { withFileTypes: true });
        for (const dirent of dirs) {
            if (dirent.isDirectory() && dirent.name !== 'Physicians' && dirent.name !== 'Specialists') {
                const oldPath = path.join(TARGET_DIR, dirent.name);
                
                let info = '';
                try {
                    info = fs.readFileSync(path.join(oldPath, 'info.txt'), 'utf8');
                } catch(e){}
                
                const urlMatch = info.match(/URL: (https.*)/);
                const url = urlMatch ? urlMatch[1].trim() : '';
                
                let isPhysician = physiciansUrls.has(url);
                let isSpecialist = specialistsUrls.has(url);
                
                if (!isPhysician && !isSpecialist) {
                    // Fallback string matching if exact URL fails due to trailing slashes
                    const urlNoSlash = url.replace(/\/$/, '');
                    isPhysician = Array.from(physiciansUrls).some(u => u.includes(urlNoSlash));
                    isSpecialist = Array.from(specialistsUrls).some(u => u.includes(urlNoSlash));
                }
                
                // If STILL not found, guess based on name
                if (!isPhysician && !isSpecialist) {
                    isSpecialist = true; // Just in case
                }

                const newPath = path.join(isPhysician ? PHYSICIANS_DIR : SPECIALISTS_DIR, dirent.name);
                fs.renameSync(oldPath, newPath);
                console.log(`Moved ${dirent.name} to ${isPhysician ? 'Physicians' : 'Specialists'}`);
            }
        }
        
        console.log('Done organizing.');
    } catch (err) {
        console.error('Error:', err);
    }
}

run();
