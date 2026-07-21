const fs = require('fs');
const html = fs.readFileSync('spec.html', 'utf8');
const cheerio = require('cheerio');
const $ = cheerio.load(html);

const results = [];
$('.elementor-widget-container').each((i, el) => {
    const text = $(el).text();
    const link = $(el).find('a[href*="linkedin.com"]').attr('href');
    if (link) {
        results.push(link);
    }
});
console.log([...new Set(results)].join('\n'));
