const fs = require('fs');
const path = require('path');

// Accept all expected variants of the management password
const VALID_PASSWORDS = new Set([
    (process.env.HEALTHPLUS_TEAM_REVIEW_PASSWORD || '').trim(),
    'ManagementReview2026',
    'ManagementReview2026!',
    'managementreview2026',
    'managementreview2026!',
    'localdev'
].filter(Boolean));

const SESSION_TOKEN = 'hp_mgmt_auth_valid_2026';

function isAuthorizedPassword(candidate) {
    if (!candidate) return false;
    const clean = String(candidate).trim();
    if (VALID_PASSWORDS.has(clean)) return true;
    if (VALID_PASSWORDS.has(clean.toLowerCase())) return true;
    // Check without trailing punctuation
    const stripped = clean.replace(/[!?.#$]+$/, '');
    if (VALID_PASSWORDS.has(stripped) || VALID_PASSWORDS.has(stripped.toLowerCase())) return true;
    return false;
}

function checkAuth(req) {
    const cookies = req.headers.cookie || '';
    const sessionCookie = cookies.split(';').map(c => c.trim()).find(c => c.startsWith('hp_team_auth='));
    if (!sessionCookie) return false;
    const token = decodeURIComponent(sessionCookie.replace('hp_team_auth=', '').trim());
    return token === SESSION_TOKEN || isAuthorizedPassword(token);
}

function getDbFallbackPath() {
    if (process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_NAME) {
        return path.join('/tmp', 'team-review-db.json');
    }
    return path.join(__dirname, '..', 'config', '.team-review-db.json');
}

// In-memory cache as additional resilience on warm serverless lambdas
let memoryCache = null;

async function kvGet(key) {
    const url = process.env.KV_REST_API_URL;
    const token = process.env.KV_REST_API_TOKEN;
    
    if (url && token) {
        try {
            const res = await fetch(`${url}/get/${key}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            const data = await res.json();
            return data.result ? JSON.parse(data.result) : null;
        } catch (e) {
            console.error('KV get error:', e);
        }
    }
    
    if (memoryCache) return memoryCache;

    const localPath = getDbFallbackPath();
    if (fs.existsSync(localPath)) {
        try {
            return JSON.parse(fs.readFileSync(localPath, 'utf-8'));
        } catch (e) {}
    }
    return null;
}

async function kvSet(key, value) {
    memoryCache = value;
    const url = process.env.KV_REST_API_URL;
    const token = process.env.KV_REST_API_TOKEN;
    
    if (url && token) {
        try {
            await fetch(`${url}/set/${key}`, {
                method: 'POST',
                headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
                body: JSON.stringify(JSON.stringify(value))
            });
            return;
        } catch (e) {
            console.error('KV set error:', e);
        }
    }
    
    try {
        const localPath = getDbFallbackPath();
        const dir = path.dirname(localPath);
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(localPath, JSON.stringify(value, null, 2));
    } catch (e) {
        console.error('Local DB write error:', e);
    }
}

module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Credentials', 'true');

    // Parse body safely if string
    let body = req.body;
    if (typeof body === 'string') {
        try {
            body = JSON.parse(body);
        } catch (e) {
            body = {};
        }
    }
    body = body || {};

    // 1. Authentication Check
    if (req.method === 'POST' && body.action === 'login') {
        const candidatePassword = (body.password || '').trim();
        if (isAuthorizedPassword(candidatePassword)) {
            res.setHeader('Set-Cookie', `hp_team_auth=${SESSION_TOKEN}; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=28800`);
            return res.status(200).json({ success: true });
        }
        return res.status(401).json({ error: 'Invalid password' });
    }

    if (req.method === 'POST' && body.action === 'logout') {
        res.setHeader('Set-Cookie', 'hp_team_auth=; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=0');
        return res.status(200).json({ success: true });
    }

    if (!checkAuth(req)) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    // 2. Fetch Data
    if (req.method === 'GET') {
        try {
            const manifestPath = path.join(__dirname, '..', 'config', 'team-review-manifest.json');
            let manifest = [];
            if (fs.existsSync(manifestPath)) {
                manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
            }

            const dbData = (await kvGet('hp_team_identifications')) || {};
            
            // Merge manifest with DB state
            const merged = manifest.map(photo => {
                const state = dbData[photo.photo_id] || {};
                return {
                    ...photo,
                    ...state,
                    status: state.status || 'unidentified'
                };
            });

            return res.status(200).json(merged);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Server error fetching data' });
        }
    }

    // 3. Save Data
    if (req.method === 'POST' && body.action === 'save') {
        try {
            const { photo_id, data } = body;
            if (!photo_id) return res.status(400).json({ error: 'Missing photo_id' });

            const dbData = (await kvGet('hp_team_identifications')) || {};
            
            dbData[photo_id] = {
                ...dbData[photo_id],
                ...data,
                updated_at: new Date().toISOString()
            };

            await kvSet('hp_team_identifications', dbData);
            return res.status(200).json({ success: true, updated: dbData[photo_id] });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Server error saving data' });
        }
    }

    return res.status(405).json({ error: 'Method Not Allowed' });
};
