const fs = require('fs');
const path = require('path');

// Security middleware
function checkAuth(req) {
    const cookies = req.headers.cookie || '';
    const sessionCookie = cookies.split(';').find(c => c.trim().startsWith('hp_team_auth='));
    const password = process.env.HEALTHPLUS_TEAM_REVIEW_PASSWORD || 'localdev';
    
    if (!sessionCookie) return false;
    const token = sessionCookie.split('=')[1];
    return token === password;
}

// KV Backend using standard Fetch (Zero Dependency!)
async function kvGet(key) {
    const url = process.env.KV_REST_API_URL;
    const token = process.env.KV_REST_API_TOKEN;
    
    if (url && token) {
        const res = await fetch(`${url}/get/${key}`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        const data = await res.json();
        return data.result ? JSON.parse(data.result) : null;
    }
    
    // Local Fallback
    const localPath = path.join(__dirname, '..', 'config', '.team-review-db.json');
    if (fs.existsSync(localPath)) {
        return JSON.parse(fs.readFileSync(localPath, 'utf-8'));
    }
    return null;
}

async function kvSet(key, value) {
    const url = process.env.KV_REST_API_URL;
    const token = process.env.KV_REST_API_TOKEN;
    
    if (url && token) {
        await fetch(`${url}/set/${key}`, {
            method: 'POST',
            headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
            body: JSON.stringify(JSON.stringify(value))
        });
        return;
    }
    
    // Local Fallback
    const localPath = path.join(__dirname, '..', 'config', '.team-review-db.json');
    fs.writeFileSync(localPath, JSON.stringify(value, null, 2));
}

module.exports = async (req, res) => {
    // 1. Authentication Check
    if (req.method === 'POST' && req.body && req.body.action === 'login') {
        const password = process.env.HEALTHPLUS_TEAM_REVIEW_PASSWORD || 'localdev';
        if (req.body.password === password) {
            res.setHeader('Set-Cookie', `hp_team_auth=${password}; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=28800`);
            return res.status(200).json({ success: true });
        }
        return res.status(401).json({ error: 'Invalid password' });
    }

    if (req.method === 'POST' && req.body && req.body.action === 'logout') {
        res.setHeader('Set-Cookie', 'hp_team_auth=; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=0');
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

            const dbData = await kvGet('hp_team_identifications') || {};
            
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
    if (req.method === 'POST' && req.body && req.body.action === 'save') {
        try {
            const { photo_id, data } = req.body;
            if (!photo_id) return res.status(400).json({ error: 'Missing photo_id' });

            const dbData = await kvGet('hp_team_identifications') || {};
            
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
