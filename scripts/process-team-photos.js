const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const SOURCE_DIR = path.join(__dirname, '../team/here');
const TARGET_DIR = path.join(__dirname, '../assets/images/team-review');
const MANIFEST_FILE = path.join(__dirname, '../config/team-review-manifest.json');

const SUPPORTED_EXTS = ['.jpg', '.jpeg', '.png', '.webp'];

function inferClinic(filename) {
    const match = filename.match(/DSC_(\d+)/i);
    if (match && parseInt(match[1], 10) >= 980) {
        return 'SEHA Medical (Crescent Heights)';
    }
    return 'HealthPlus (Midnapore)';
}

async function processPhotos() {
    if (!fs.existsSync(SOURCE_DIR)) {
        console.log(`Source directory not found: ${SOURCE_DIR}`);
        fs.mkdirSync(SOURCE_DIR, { recursive: true });
        console.log("Created directory. Please add photos and run again.");
        return;
    }

    if (!fs.existsSync(TARGET_DIR)) {
        fs.mkdirSync(TARGET_DIR, { recursive: true });
    }

    const files = fs.readdirSync(SOURCE_DIR)
        .filter(file => SUPPORTED_EXTS.includes(path.extname(file).toLowerCase()))
        .sort(); // Natural sort by filename

    if (files.length === 0) {
        console.log("No supported photos found in team/here/");
        return;
    }

    let manifest = [];
    if (fs.existsSync(MANIFEST_FILE)) {
        manifest = JSON.parse(fs.readFileSync(MANIFEST_FILE, 'utf-8'));
    }

    console.log(`Found ${files.length} photos. Processing...`);

    let index = manifest.length;

    for (const file of files) {
        const existing = manifest.find(m => m.source_filename === file);
        if (existing) {
            if (!existing.clinic) {
                existing.clinic = inferClinic(file);
            }
            console.log(`Skipping already processed: ${file} (${existing.clinic})`);
            continue;
        }

        index++;
        const photoId = `HP-TEAM-FINAL-${String(index).padStart(3, '0')}`;
        const targetFilename = `${photoId}.webp`;
        const targetPath = path.join(TARGET_DIR, targetFilename);
        const clinic = inferClinic(file);

        console.log(`Processing ${file} -> ${photoId} (${clinic})...`);

        try {
            await sharp(path.join(SOURCE_DIR, file))
                .rotate() // Auto-orient based on EXIF
                .resize({
                    width: 800,
                    height: 1000,
                    fit: 'cover',
                    position: 'attention'
                })
                .webp({ quality: 80 })
                .toFile(targetPath);

            manifest.push({
                photo_id: photoId,
                source_filename: file,
                clinic: clinic,
                review_url: `/assets/images/team-review/${targetFilename}`,
                created_at: new Date().toISOString()
            });
        } catch (err) {
            console.error(`Error processing ${file}:`, err);
        }
    }

    // Ensure config dir exists
    if (!fs.existsSync(path.dirname(MANIFEST_FILE))) {
        fs.mkdirSync(path.dirname(MANIFEST_FILE), { recursive: true });
    }

    fs.writeFileSync(MANIFEST_FILE, JSON.stringify(manifest, null, 2));
    console.log(`\nSuccessfully processed ${manifest.length} photos. Manifest saved to config/team-review-manifest.json`);
}

processPhotos().catch(console.error);
