const https = require('https');
const cheerio = require('cheerio');

function fetchUrl(url) {
    return new Promise((resolve, reject) => {
        https.get(url, res => {
            if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                return fetchUrl(res.headers.location).then(resolve).catch(reject);
            }
            let d = '';
            res.on('data', c => d += c);
            res.on('end', () => resolve(d));
        }).on('error', reject);
    });
}

async function run() {
    let links = new Set();
    const urls = [
        'https://healthplusmed.ca/meet-our-team/',
        'https://healthplusmed.ca/family_physicians/',
        'https://healthplusmed.ca/specialists/',
        'https://healthplusmed.ca/staff/'
    ];
    for (let u of urls) {
        let h = await fetchUrl(u);
        let $ = cheerio.load(h);
        $('a').each((i, e) => {
            let href = $(e).attr('href');
            if (href && href.startsWith('https://healthplusmed.ca/') && !href.includes('blog') && !href.includes('category')) {
                // filter out main nav stuff
                const ignore = ['contact', 'about', 'services', 'facility', 'join-our-team', 'meet-our-team', 'family_physicians', 'specialists', 'staff'];
                const basename = href.split('/').filter(Boolean).pop();
                if (!ignore.includes(basename)) {
                    links.add(href);
                }
            }
        });
    }
    console.log(Array.from(links).join('\n'));
}
run();
