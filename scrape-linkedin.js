const fs = require('fs');
const path = require('path');
const https = require('https');
const cheerio = require('cheerio');

const TARGET_DIR = 'C:\\Users\\mcreg\\Desktop\\healthplus\\seha medical\\healthplusnew\\assets\\healthplus team';

const LINKS = [
    'https://healthplusmed.ca/dr-hatim-kheir/',
    'https://healthplusmed.ca/dr-elhadi-mohammed/',
    'https://healthplusmed.ca/dr-nour-bukhres/',
    'https://healthplusmed.ca/draal-shohabi/',
    'https://healthplusmed.ca/drooyediran/',
    'https://healthplusmed.ca/drmaldabbagh/',
    'https://healthplusmed.ca/drmhanif/',
    'https://healthplusmed.ca/drskumar/',
    'https://healthplusmed.ca/draboaziza/',
    'https://healthplusmed.ca/dr-ahmed-enbya-2/',
    'https://healthplusmed.ca/dr-sidra-feroz/',
    'https://healthplusmed.ca/dr-angela-vinturache/',
    'https://healthplusmed.ca/dr-tyral-ramsamy/',
    'https://healthplusmed.ca/dr-bhavisha-ramsamy/',
    'https://healthplusmed.ca/dr-tariq-khan/',
    'https://healthplusmed.ca/dr-asaad-qaddori/',
    'https://healthplusmed.ca/dr_ayman_habiba/'
];

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

function sanitizeDirName(name) {
    return name.trim().replace(/[^a-z0-9]/gi, '_').toLowerCase();
}

function findDoctorFolder(dirName) {
    const physPath = path.join(TARGET_DIR, 'Physicians', dirName);
    if (fs.existsSync(physPath)) return physPath;
    const specPath = path.join(TARGET_DIR, 'Specialists', dirName);
    if (fs.existsSync(specPath)) return specPath;
    return null;
}

async function run() {
    for (const link of LINKS) {
        try {
            console.log(`Fetching profile: ${link}`);
            const profileHtml = await fetchUrl(link);
            const $p = cheerio.load(profileHtml);

            let name = $p('h1').first().text().trim() || $p('h2').first().text().trim();
            if (!name) {
                name = link.split('/').filter(Boolean).pop().replace(/-/g, ' ');
            }
            
            let linkedin = '';
            $p('a').each((i, el) => {
                const href = $p(el).attr('href');
                if (href && href.includes('linkedin.com')) {
                    linkedin = href;
                }
            });
            
            const dirName = sanitizeDirName(name);
            const folderPath = findDoctorFolder(dirName);
            
            if (folderPath && linkedin) {
                const infoPath = path.join(folderPath, 'info.txt');
                let info = fs.readFileSync(infoPath, 'utf8');
                if (!info.includes('LinkedIn:')) {
                    info = info.replace('Information:', `LinkedIn: ${linkedin}\n\nInformation:`);
                    fs.writeFileSync(infoPath, info);
                    console.log(`Added LinkedIn for ${name}: ${linkedin}`);
                }
            } else if (linkedin) {
                console.log(`Found LinkedIn for ${name} but folder not found!`);
            }
        } catch (e) {
            console.error(`Failed to process ${link}:`, e.message);
        }
    }
    console.log('Done grabbing LinkedIn URLs.');
}

run();
