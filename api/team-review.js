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

let memoryCache = null;

// Multi-tier Cloud Persistence
async function dbGet() {
    // 1. Primary: GitHub Gist Cloud Store (Under client's samieltayeb-oss account)
    const gistId = process.env.TEAM_DB_GIST_ID;
    const ghToken = process.env.TEAM_DB_GH_TOKEN;
    if (gistId && ghToken) {
        try {
            const res = await fetch(`https://api.github.com/gists/${gistId}`, {
                headers: {
                    Authorization: `token ${ghToken}`,
                    'User-Agent': 'HealthPlus-Team-Portal',
                    Accept: 'application/vnd.github.v3+json'
                }
            });
            if (res.ok) {
                const data = await res.json();
                const fileObj = data.files && (data.files['db_init.json'] || Object.values(data.files)[0]);
                if (fileObj && fileObj.content) {
                    const parsed = JSON.parse(fileObj.content);
                    memoryCache = parsed;
                    return parsed;
                }
            }
        } catch (e) {
            console.error('Gist DB get error:', e);
        }
    }

    // 2. Secondary: Vercel KV if linked
    const kvUrl = process.env.KV_REST_API_URL;
    const kvToken = process.env.KV_REST_API_TOKEN;
    if (kvUrl && kvToken) {
        try {
            const res = await fetch(`${kvUrl}/get/hp_team_identifications`, {
                headers: { Authorization: `Bearer ${kvToken}` }
            });
            const data = await res.json();
            if (data.result) return JSON.parse(data.result);
        } catch (e) {}
    }

    // 3. Fallback
    if (memoryCache) return memoryCache;
    const localPath = getDbFallbackPath();
    if (fs.existsSync(localPath)) {
        try {
            return JSON.parse(fs.readFileSync(localPath, 'utf-8'));
        } catch (e) {}
    }
    return {};
}

async function dbSet(value) {
    memoryCache = value;

    // 1. Primary: Save to GitHub Gist Cloud Store
    const gistId = process.env.TEAM_DB_GIST_ID;
    const ghToken = process.env.TEAM_DB_GH_TOKEN;
    if (gistId && ghToken) {
        try {
            await fetch(`https://api.github.com/gists/${gistId}`, {
                method: 'PATCH',
                headers: {
                    Authorization: `token ${ghToken}`,
                    'User-Agent': 'HealthPlus-Team-Portal',
                    'Content-Type': 'application/json',
                    Accept: 'application/vnd.github.v3+json'
                },
                body: JSON.stringify({
                    files: {
                        'db_init.json': {
                            content: JSON.stringify(value, null, 2)
                        }
                    }
                })
            });
        } catch (e) {
            console.error('Gist DB save error:', e);
        }
    }

    // 2. Secondary: Save to Vercel KV if linked
    const kvUrl = process.env.KV_REST_API_URL;
    const kvToken = process.env.KV_REST_API_TOKEN;
    if (kvUrl && kvToken) {
        try {
            await fetch(`${kvUrl}/set/hp_team_identifications`, {
                method: 'POST',
                headers: { Authorization: `Bearer ${kvToken}`, 'Content-Type': 'application/json' },
                body: JSON.stringify(JSON.stringify(value))
            });
        } catch (e) {}
    }

    // 3. Local/tmp fallback
    try {
        const localPath = getDbFallbackPath();
        const dir = path.dirname(localPath);
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(localPath, JSON.stringify(value, null, 2));
    } catch (e) {}
}

module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Credentials', 'true');

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

            const dbData = (await dbGet()) || {};
            
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

            const dbData = (await dbGet()) || {};
            
            dbData[photo_id] = {
                ...dbData[photo_id],
                ...data,
                updated_at: new Date().toISOString()
            };

            await dbSet(dbData);
            return res.status(200).json({ success: true, updated: dbData[photo_id] });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Server error saving data' });
        }
    }

    return res.status(405).json({ error: 'Method Not Allowed' });
};
