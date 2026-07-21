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

function downloadImage(url, dest) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(url, (res) => {
            if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                file.close();
                return downloadImage(res.headers.location, dest).then(resolve).catch(reject);
            }
            res.pipe(file);
            file.on('finish', () => {
                file.close();
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(dest, () => {});
            reject(err);
        });
    });
}

function sanitizeDirName(name) {
    return name.trim().replace(/[^a-z0-9]/gi, '_').toLowerCase();
}

async function run() {
    try {
        if (!fs.existsSync(TARGET_DIR)) {
            fs.mkdirSync(TARGET_DIR, { recursive: true });
        }

        console.log(`Starting to scrape ${LINKS.length} specific profiles...`);

        for (const link of LINKS) {
            try {
                console.log(`Fetching profile: ${link}`);
                const profileHtml = await fetchUrl(link);
                const $p = cheerio.load(profileHtml);

                let name = $p('h1').first().text().trim() || $p('h2').first().text().trim();
                if (!name) {
                    name = link.split('/').filter(Boolean).pop().replace(/-/g, ' ');
                }
                
                let imgUrl = null;
                $p('img').each((i, el) => {
                    const src = $p(el).attr('src');
                    if (src && src.includes('uploads') && 
                        !src.includes('logo') && 
                        !src.includes('Screenshot') && 
                        !src.includes('favicon') && 
                        !src.includes('banner') &&
                        !src.includes('PNG-1.png') &&
                        !src.includes('cropped-PNG')) {
                        
                        if (!imgUrl) {
                            imgUrl = src;
                        }
                    }
                });
                
                let infoText = '';
                $p('.elementor-widget-text-editor, .elementor-text-editor').each((i, el) => {
                    const t = $p(el).text().trim();
                    if (t && !t.includes('Address:') && !t.includes('Phone:')) {
                        infoText += t + '\n\n';
                    }
                });
                
                const dirName = sanitizeDirName(name);
                const docDir = path.join(TARGET_DIR, dirName);
                
                if (!fs.existsSync(docDir)) {
                    fs.mkdirSync(docDir);
                }

                fs.writeFileSync(path.join(docDir, 'info.txt'), `Name: ${name}\nURL: ${link}\n\nInformation:\n${infoText}`);

                if (imgUrl) {
                    if (imgUrl.startsWith('//')) imgUrl = 'https:' + imgUrl;
                    else if (imgUrl.startsWith('/')) imgUrl = 'https://healthplusmed.ca' + imgUrl;
                    
                    const ext = path.extname(imgUrl.split('?')[0]) || '.jpg';
                    const imgDest = path.join(docDir, `${dirName}${ext}`);
                    await downloadImage(imgUrl, imgDest);
                    console.log(`Saved image for ${name}: ${imgUrl}`);
                } else {
                    console.log(`No image found for ${name}.`);
                }
            } catch (e) {
                console.error(`Failed to process ${link}:`, e.message);
            }
        }
        
        console.log('Done scraping.');
    } catch (err) {
        console.error('Error:', err);
    }
}

run();
