const fs = require('fs');
const https = require('https');

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
    'https://healthplusmed.ca/dr_ayman_habiba/',
    'https://healthplusmed.ca/meet-our-team/',
    'https://healthplusmed.ca/family_physicians/',
    'https://healthplusmed.ca/specialists/'
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

async function checkAll() {
    let allLinks = new Set();
    for (const link of LINKS) {
        try {
            const html = await fetchUrl(link);
            const matches = html.match(/href=[\"']([^\"']*linkedin[^\"]*)[\"']/gi);
            if (matches) {
                matches.forEach(m => {
                    const clean = m.replace(/href=[\"']/i, '').replace(/[\"']$/, '');
                    allLinks.add(clean);
                });
            }
        } catch(e) {}
    }
    console.log('All LinkedIn links found on the site:');
    console.log(Array.from(allLinks).join('\n'));
}

checkAll();
