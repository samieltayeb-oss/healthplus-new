
function getServiceMotionHUD(slug, title) {
    let animSvg = '';
    let statusLabel = '';
    let statusValue = '';
    let metaItems = '';
    
    switch(slug) {
        case 'concussion-care':
            statusLabel = 'NEUROLOGICAL SCAN MONITOR';
            statusValue = 'COMPLETE CONCUSSIONS™ CERTIFIED';
            animSvg = `<svg viewBox='0 0 400 100' style='width:100%;height:auto;display:block;' xmlns='http://www.w3.org/2000/svg'>
                <defs><pattern id='cgrid' width='20' height='20' patternUnits='userSpaceOnUse'><path d='M 20 0 L 0 0 0 20' fill='none' stroke='rgba(115,201,190,0.08)' stroke-width='1'/></pattern></defs>
                <rect width='400' height='100' fill='url(#cgrid)'/>
                <path d='M 0 50 L 60 50 L 78 15 L 96 85 L 114 5 L 132 95 L 150 50 L 400 50' fill='none' stroke='#73C9BE' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'>
                    <animate attributeName='stroke-dasharray' values='0,700;700,0;0,700' dur='3s' repeatCount='indefinite'/>
                </path>
                <circle cx='114' cy='5' r='6' fill='#10b981'><animate attributeName='r' values='3;9;3' dur='1.5s' repeatCount='indefinite'/></circle>
                <circle cx='132' cy='95' r='5' fill='#73C9BE'><animate attributeName='r' values='2;7;2' dur='1.2s' repeatCount='indefinite'/></circle>
            </svg>`;
            metaItems = `<div style='background:rgba(255,255,255,0.07);padding:10px;border-radius:8px;text-align:center;'><div style='color:rgba(255,255,255,0.55);font-size:10px;text-transform:uppercase;letter-spacing:0.5px;'>Protocol</div><div style='color:#fff;font-weight:700;font-size:12px;margin-top:2px;'>Evidence-Based</div></div><div style='background:rgba(255,255,255,0.07);padding:10px;border-radius:8px;text-align:center;'><div style='color:rgba(255,255,255,0.55);font-size:10px;text-transform:uppercase;letter-spacing:0.5px;'>App Sync</div><div style='color:#73C9BE;font-weight:700;font-size:12px;margin-top:2px;'>Tracker Live</div></div><div style='background:rgba(255,255,255,0.07);padding:10px;border-radius:8px;text-align:center;'><div style='color:rgba(255,255,255,0.55);font-size:10px;text-transform:uppercase;letter-spacing:0.5px;'>Coverage</div><div style='color:#fff;font-weight:700;font-size:12px;margin-top:2px;'>AHCIP Covered</div></div>`;
            break;

        case 'walk-in-clinic':
            statusLabel = 'LIVE WALK-IN AVAILABILITY';
            statusValue = 'NO APPOINTMENT NEEDED';
            animSvg = `<svg viewBox='0 0 400 100' style='width:100%;height:auto;display:block;' xmlns='http://www.w3.org/2000/svg'>
                <circle cx='200' cy='50' r='42' fill='none' stroke='rgba(115,201,190,0.2)' stroke-width='3'/>
                <circle cx='200' cy='50' r='42' fill='none' stroke='#10b981' stroke-width='4' stroke-dasharray='264' stroke-dashoffset='66' stroke-linecap='round'>
                    <animateTransform attributeName='transform' type='rotate' from='0 200 50' to='360 200 50' dur='5s' repeatCount='indefinite'/>
                </circle>
                <circle cx='200' cy='50' r='28' fill='none' stroke='rgba(115,201,190,0.15)' stroke-width='2'/>
                <text x='200' y='44' text-anchor='middle' fill='rgba(255,255,255,0.7)' font-size='11' font-family='sans-serif'>ESTIMATED WAIT</text>
                <text x='200' y='63' text-anchor='middle' fill='#10b981' font-size='17' font-weight='800' font-family='sans-serif'>&lt; 15 min</text>
            </svg>`;
            metaItems = `<div style='background:rgba(255,255,255,0.07);padding:10px;border-radius:8px;text-align:center;'><div style='color:rgba(255,255,255,0.55);font-size:10px;text-transform:uppercase;letter-spacing:0.5px;'>Physician</div><div style='color:#fff;font-weight:700;font-size:12px;margin-top:2px;'>On-Site Now</div></div><div style='background:rgba(255,255,255,0.07);padding:10px;border-radius:8px;text-align:center;'><div style='color:rgba(255,255,255,0.55);font-size:10px;text-transform:uppercase;letter-spacing:0.5px;'>Access</div><div style='color:#73C9BE;font-weight:700;font-size:12px;margin-top:2px;'>Same-Day Care</div></div><div style='background:rgba(255,255,255,0.07);padding:10px;border-radius:8px;text-align:center;'><div style='color:rgba(255,255,255,0.55);font-size:10px;text-transform:uppercase;letter-spacing:0.5px;'>Coverage</div><div style='color:#fff;font-weight:700;font-size:12px;margin-top:2px;'>AHCIP Covered</div></div>`;
            break;

        case 'family-medicine':
            statusLabel = 'FAMILY VITAL PULSE MONITOR';
            statusValue = 'ACCEPTING NEW PATIENTS';
            animSvg = `<svg viewBox='0 0 400 100' style='width:100%;height:auto;display:block;' xmlns='http://www.w3.org/2000/svg'>
                <path d='M 0 50 L 80 50 L 100 15 L 120 85 L 140 10 L 160 90 L 180 50 L 400 50' fill='none' stroke='#73C9BE' stroke-width='3.5' stroke-linecap='round' stroke-linejoin='round'>
                    <animate attributeName='stroke-dasharray' values='0,700;700,0;0,700' dur='2.2s' repeatCount='indefinite'/>
                </path>
                <circle cx='140' cy='10' r='5' fill='#10b981'><animate attributeName='opacity' values='1;0;1' dur='0.8s' repeatCount='indefinite'/></circle>
            </svg>`;
            metaItems = `<div style='background:rgba(255,255,255,0.07);padding:10px;border-radius:8px;text-align:center;'><div style='color:rgba(255,255,255,0.55);font-size:10px;text-transform:uppercase;letter-spacing:0.5px;'>Care</div><div style='color:#fff;font-weight:700;font-size:12px;margin-top:2px;'>Lifelong Health</div></div><div style='background:rgba(255,255,255,0.07);padding:10px;border-radius:8px;text-align:center;'><div style='color:rgba(255,255,255,0.55);font-size:10px;text-transform:uppercase;letter-spacing:0.5px;'>Coverage</div><div style='color:#73C9BE;font-weight:700;font-size:12px;margin-top:2px;'>100% AHCIP</div></div><div style='background:rgba(255,255,255,0.07);padding:10px;border-radius:8px;text-align:center;'><div style='color:rgba(255,255,255,0.55);font-size:10px;text-transform:uppercase;letter-spacing:0.5px;'>New Patients</div><div style='color:#10b981;font-weight:700;font-size:12px;margin-top:2px;'>Now Open</div></div>`;
            break;

        case 'mental-health':
            statusLabel = 'MENTAL WELLNESS TRACKER';
            statusValue = 'CONFIDENTIAL CARE';
            animSvg = `<svg viewBox='0 0 400 100' style='width:100%;height:auto;display:block;' xmlns='http://www.w3.org/2000/svg'>
                <path d='M 0 50 Q 50 10 100 50 T 200 50 T 300 50 T 400 50' fill='none' stroke='rgba(115,201,190,0.3)' stroke-width='2'/>
                <path d='M 0 50 Q 50 90 100 50 T 200 50 T 300 50 T 400 50' fill='none' stroke='#73C9BE' stroke-width='3.5'>
                    <animate attributeName='d' dur='3s' repeatCount='indefinite' values='M 0 50 Q 50 90 100 50 T 200 50 T 300 50 T 400 50;M 0 50 Q 50 10 100 50 T 200 50 T 300 50 T 400 50;M 0 50 Q 50 90 100 50 T 200 50 T 300 50 T 400 50'/>
                </path>
            </svg>`;
            metaItems = `<div style='background:rgba(255,255,255,0.07);padding:10px;border-radius:8px;text-align:center;'><div style='color:rgba(255,255,255,0.55);font-size:10px;text-transform:uppercase;letter-spacing:0.5px;'>Approach</div><div style='color:#fff;font-weight:700;font-size:12px;margin-top:2px;'>Holistic Therapy</div></div><div style='background:rgba(255,255,255,0.07);padding:10px;border-radius:8px;text-align:center;'><div style='color:rgba(255,255,255,0.55);font-size:10px;text-transform:uppercase;letter-spacing:0.5px;'>Privacy</div><div style='color:#73C9BE;font-weight:700;font-size:12px;margin-top:2px;'>Fully Private</div></div><div style='background:rgba(255,255,255,0.07);padding:10px;border-radius:8px;text-align:center;'><div style='color:rgba(255,255,255,0.55);font-size:10px;text-transform:uppercase;letter-spacing:0.5px;'>Coverage</div><div style='color:#fff;font-weight:700;font-size:12px;margin-top:2px;'>AHCIP Covered</div></div>`;
            break;

        case 'sports-medicine':
            statusLabel = 'ATHLETIC RECOVERY DASHBOARD';
            statusValue = 'RETURN-TO-SPORT PROTOCOL';
            animSvg = `<svg viewBox='0 0 400 100' style='width:100%;height:auto;display:block;' xmlns='http://www.w3.org/2000/svg'>
                <path d='M 20 85 A 175 175 0 0 1 380 85' fill='none' stroke='rgba(115,201,190,0.2)' stroke-width='8' stroke-linecap='round'/>
                <path d='M 20 85 A 175 175 0 0 1 290 28' fill='none' stroke='#10b981' stroke-width='8' stroke-linecap='round' stroke-dasharray='330' stroke-dashoffset='330'>
                    <animate attributeName='stroke-dashoffset' values='330;0;330' dur='3.5s' repeatCount='indefinite'/>
                </path>
                <text x='200' y='72' text-anchor='middle' fill='#fff' font-size='22' font-weight='800' font-family='sans-serif'>87%</text>
                <text x='200' y='90' text-anchor='middle' fill='#73C9BE' font-size='10' font-weight='600' font-family='sans-serif'>RECOVERY SCORE</text>
            </svg>`;
            metaItems = `<div style='background:rgba(255,255,255,0.07);padding:10px;border-radius:8px;text-align:center;'><div style='color:rgba(255,255,255,0.55);font-size:10px;text-transform:uppercase;letter-spacing:0.5px;'>Return to Sport</div><div style='color:#fff;font-weight:700;font-size:12px;margin-top:2px;'>Guided Protocol</div></div><div style='background:rgba(255,255,255,0.07);padding:10px;border-radius:8px;text-align:center;'><div style='color:rgba(255,255,255,0.55);font-size:10px;text-transform:uppercase;letter-spacing:0.5px;'>Coverage</div><div style='color:#73C9BE;font-weight:700;font-size:12px;margin-top:2px;'>AHCIP Covered</div></div><div style='background:rgba(255,255,255,0.07);padding:10px;border-radius:8px;text-align:center;'><div style='color:rgba(255,255,255,0.55);font-size:10px;text-transform:uppercase;letter-spacing:0.5px;'>Injury Rehab</div><div style='color:#10b981;font-weight:700;font-size:12px;margin-top:2px;'>Evidence-Based</div></div>`;
            break;

        case 'mva-care':
            statusLabel = 'MVA INJURY ASSESSMENT HUB';
            statusValue = 'WCB & INSURANCE SUPPORTED';
            animSvg = `<svg viewBox='0 0 400 100' style='width:100%;height:auto;display:block;' xmlns='http://www.w3.org/2000/svg'>
                <circle cx='75' cy='50' r='38' fill='none' stroke='rgba(115,201,190,0.2)' stroke-width='2'/>
                <circle cx='75' cy='50' r='38' fill='none' stroke='#73C9BE' stroke-width='3' stroke-dasharray='238' stroke-dashoffset='60'>
                    <animateTransform attributeName='transform' type='rotate' from='0 75 50' to='360 75 50' dur='6s' repeatCount='indefinite'/>
                </circle>
                <circle cx='75' cy='50' r='12' fill='#10b981'><animate attributeName='r' values='7;14;7' dur='2s' repeatCount='indefinite'/></circle>
                <line x1='140' y1='28' x2='390' y2='28' stroke='rgba(115,201,190,0.35)' stroke-width='1'/>
                <line x1='140' y1='50' x2='390' y2='50' stroke='rgba(115,201,190,0.6)' stroke-width='2'/>
                <line x1='140' y1='72' x2='330' y2='72' stroke='rgba(115,201,190,0.25)' stroke-width='1'/>
                <text x='155' y='46' fill='rgba(255,255,255,0.65)' font-size='11' font-family='sans-serif'>Documentation</text>
                <text x='155' y='66' fill='#73C9BE' font-size='14' font-weight='700' font-family='sans-serif'>Assessment Active</text>
            </svg>`;
            metaItems = `<div style='background:rgba(255,255,255,0.07);padding:10px;border-radius:8px;text-align:center;'><div style='color:rgba(255,255,255,0.55);font-size:10px;text-transform:uppercase;letter-spacing:0.5px;'>Insurance</div><div style='color:#fff;font-weight:700;font-size:12px;margin-top:2px;'>All Providers</div></div><div style='background:rgba(255,255,255,0.07);padding:10px;border-radius:8px;text-align:center;'><div style='color:rgba(255,255,255,0.55);font-size:10px;text-transform:uppercase;letter-spacing:0.5px;'>WCB</div><div style='color:#73C9BE;font-weight:700;font-size:12px;margin-top:2px;'>Accepted</div></div><div style='background:rgba(255,255,255,0.07);padding:10px;border-radius:8px;text-align:center;'><div style='color:rgba(255,255,255,0.55);font-size:10px;text-transform:uppercase;letter-spacing:0.5px;'>Coverage</div><div style='color:#fff;font-weight:700;font-size:12px;margin-top:2px;'>AHCIP Covered</div></div>`;
            break;

        case 'obstetrics-gynecology':
            statusLabel = 'PRENATAL HEALTH MONITOR';
            statusValue = 'OBSTETRICS & GYNECOLOGY';
            animSvg = `<svg viewBox='0 0 400 100' style='width:100%;height:auto;display:block;' xmlns='http://www.w3.org/2000/svg'>
                <path d='M 0 50 Q 100 0 200 50 T 400 50' fill='none' stroke='rgba(115,201,190,0.3)' stroke-width='2'/>
                <path d='M 0 50 Q 100 100 200 50 T 400 50' fill='none' stroke='#73C9BE' stroke-width='3.5'>
                    <animate attributeName='d' dur='2s' repeatCount='indefinite' values='M 0 50 Q 100 100 200 50 T 400 50;M 0 50 Q 100 0 200 50 T 400 50;M 0 50 Q 100 100 200 50 T 400 50'/>
                </path>
                <circle cx='200' cy='50' r='9' fill='#fff'><animate attributeName='r' values='5;14;5' dur='1s' repeatCount='indefinite'/></circle>
                <circle cx='200' cy='50' r='4' fill='#10b981'/>
            </svg>`;
            metaItems = `<div style='background:rgba(255,255,255,0.07);padding:10px;border-radius:8px;text-align:center;'><div style='color:rgba(255,255,255,0.55);font-size:10px;text-transform:uppercase;letter-spacing:0.5px;'>Prenatal</div><div style='color:#fff;font-weight:700;font-size:12px;margin-top:2px;'>Full OB Care</div></div><div style='background:rgba(255,255,255,0.07);padding:10px;border-radius:8px;text-align:center;'><div style='color:rgba(255,255,255,0.55);font-size:10px;text-transform:uppercase;letter-spacing:0.5px;'>Coverage</div><div style='color:#73C9BE;font-weight:700;font-size:12px;margin-top:2px;'>AHCIP Covered</div></div><div style='background:rgba(255,255,255,0.07);padding:10px;border-radius:8px;text-align:center;'><div style='color:rgba(255,255,255,0.55);font-size:10px;text-transform:uppercase;letter-spacing:0.5px;'>Gynecology</div><div style='color:#fff;font-weight:700;font-size:12px;margin-top:2px;'>Annual Exam</div></div>`;
            break;

        case 'pediatric-care':
            statusLabel = 'PEDIATRIC WELLNESS HUB';
            statusValue = 'CHILD-CENTERED CARE';
            animSvg = `<svg viewBox='0 0 400 100' style='width:100%;height:auto;display:block;' xmlns='http://www.w3.org/2000/svg'>
                <circle cx='100' cy='50' r='32' fill='none' stroke='#73C9BE' stroke-width='2' stroke-dasharray='8 4'>
                    <animateTransform attributeName='transform' type='rotate' from='0 100 50' to='360 100 50' dur='8s' repeatCount='indefinite'/>
                </circle>
                <circle cx='200' cy='50' r='22' fill='none' stroke='#10b981' stroke-width='2' stroke-dasharray='6 3'>
                    <animateTransform attributeName='transform' type='rotate' from='0 200 50' to='-360 200 50' dur='5s' repeatCount='indefinite'/>
                </circle>
                <circle cx='300' cy='50' r='28' fill='none' stroke='#73C9BE' stroke-width='2' stroke-dasharray='10 5'>
                    <animateTransform attributeName='transform' type='rotate' from='0 300 50' to='360 300 50' dur='10s' repeatCount='indefinite'/>
                </circle>
                <circle cx='100' cy='50' r='6' fill='#73C9BE'><animate attributeName='r' values='4;9;4' dur='2s' repeatCount='indefinite'/></circle>
                <circle cx='200' cy='50' r='5' fill='#10b981'><animate attributeName='r' values='3;8;3' dur='1.5s' repeatCount='indefinite'/></circle>
                <circle cx='300' cy='50' r='6' fill='#73C9BE'><animate attributeName='r' values='4;10;4' dur='2.5s' repeatCount='indefinite'/></circle>
            </svg>`;
            metaItems = `<div style='background:rgba(255,255,255,0.07);padding:10px;border-radius:8px;text-align:center;'><div style='color:rgba(255,255,255,0.55);font-size:10px;text-transform:uppercase;letter-spacing:0.5px;'>Ages Served</div><div style='color:#fff;font-weight:700;font-size:12px;margin-top:2px;'>0 – 17 Years</div></div><div style='background:rgba(255,255,255,0.07);padding:10px;border-radius:8px;text-align:center;'><div style='color:rgba(255,255,255,0.55);font-size:10px;text-transform:uppercase;letter-spacing:0.5px;'>Coverage</div><div style='color:#73C9BE;font-weight:700;font-size:12px;margin-top:2px;'>AHCIP Covered</div></div><div style='background:rgba(255,255,255,0.07);padding:10px;border-radius:8px;text-align:center;'><div style='color:rgba(255,255,255,0.55);font-size:10px;text-transform:uppercase;letter-spacing:0.5px;'>Immunizations</div><div style='color:#10b981;font-weight:700;font-size:12px;margin-top:2px;'>On Schedule</div></div>`;
            break;

        case 'virtual-care':
            statusLabel = 'VIRTUAL CLINIC PORTAL';
            statusValue = 'SECURE TELEHEALTH SESSION';
            animSvg = `<svg viewBox='0 0 400 100' style='width:100%;height:auto;display:block;' xmlns='http://www.w3.org/2000/svg'>
                <rect x='20' y='8' width='360' height='84' rx='10' fill='none' stroke='rgba(115,201,190,0.25)' stroke-width='2'/>
                <line x1='20' y1='28' x2='380' y2='28' stroke='rgba(115,201,190,0.15)' stroke-width='1'/>
                <circle cx='36' cy='18' r='4' fill='#10b981'><animate attributeName='opacity' values='1;0.2;1' dur='1.4s' repeatCount='indefinite'/></circle>
                <circle cx='50' cy='18' r='4' fill='#73C9BE'/>
                <circle cx='64' cy='18' r='4' fill='rgba(255,255,255,0.25)'/>
                <text x='200' y='57' text-anchor='middle' fill='#fff' font-size='14' font-weight='700' font-family='sans-serif'>&#9679; VIDEO CONSULT ACTIVE</text>
                <text x='200' y='76' text-anchor='middle' fill='#73C9BE' font-size='10' font-family='sans-serif'>Secure · Encrypted · Confidential</text>
            </svg>`;
            metaItems = `<div style='background:rgba(255,255,255,0.07);padding:10px;border-radius:8px;text-align:center;'><div style='color:rgba(255,255,255,0.55);font-size:10px;text-transform:uppercase;letter-spacing:0.5px;'>Platform</div><div style='color:#fff;font-weight:700;font-size:12px;margin-top:2px;'>Any Device</div></div><div style='background:rgba(255,255,255,0.07);padding:10px;border-radius:8px;text-align:center;'><div style='color:rgba(255,255,255,0.55);font-size:10px;text-transform:uppercase;letter-spacing:0.5px;'>Security</div><div style='color:#73C9BE;font-weight:700;font-size:12px;margin-top:2px;'>End-to-End</div></div><div style='background:rgba(255,255,255,0.07);padding:10px;border-radius:8px;text-align:center;'><div style='color:rgba(255,255,255,0.55);font-size:10px;text-transform:uppercase;letter-spacing:0.5px;'>Coverage</div><div style='color:#fff;font-weight:700;font-size:12px;margin-top:2px;'>AHCIP Covered</div></div>`;
            break;

        case 'internal-medicine':
            statusLabel = 'INTERNAL DIAGNOSTICS HUB';
            statusValue = 'SPECIALIST REFERRAL NETWORK';
            animSvg = `<svg viewBox='0 0 400 100' style='width:100%;height:auto;display:block;' xmlns='http://www.w3.org/2000/svg'>
                <circle cx='200' cy='50' r='42' fill='none' stroke='rgba(115,201,190,0.12)' stroke-width='2'/>
                <circle cx='200' cy='50' r='30' fill='none' stroke='rgba(115,201,190,0.2)' stroke-width='2'/>
                <circle cx='200' cy='50' r='18' fill='none' stroke='#73C9BE' stroke-width='2' stroke-dasharray='6 3'>
                    <animateTransform attributeName='transform' type='rotate' from='0 200 50' to='360 200 50' dur='4s' repeatCount='indefinite'/>
                </circle>
                <line x1='200' y1='50' x2='200' y2='12' stroke='#10b981' stroke-width='2.5' stroke-linecap='round'>
                    <animateTransform attributeName='transform' type='rotate' from='0 200 50' to='360 200 50' dur='3s' repeatCount='indefinite'/>
                </line>
                <line x1='200' y1='50' x2='232' y2='50' stroke='#73C9BE' stroke-width='1.5' stroke-linecap='round'>
                    <animateTransform attributeName='transform' type='rotate' from='0 200 50' to='360 200 50' dur='12s' repeatCount='indefinite'/>
                </line>
                <circle cx='200' cy='50' r='5' fill='#fff'/>
            </svg>`;
            metaItems = `<div style='background:rgba(255,255,255,0.07);padding:10px;border-radius:8px;text-align:center;'><div style='color:rgba(255,255,255,0.55);font-size:10px;text-transform:uppercase;letter-spacing:0.5px;'>Diagnostics</div><div style='color:#fff;font-weight:700;font-size:12px;margin-top:2px;'>Full Panel</div></div><div style='background:rgba(255,255,255,0.07);padding:10px;border-radius:8px;text-align:center;'><div style='color:rgba(255,255,255,0.55);font-size:10px;text-transform:uppercase;letter-spacing:0.5px;'>Referrals</div><div style='color:#73C9BE;font-weight:700;font-size:12px;margin-top:2px;'>Specialist Network</div></div><div style='background:rgba(255,255,255,0.07);padding:10px;border-radius:8px;text-align:center;'><div style='color:rgba(255,255,255,0.55);font-size:10px;text-transform:uppercase;letter-spacing:0.5px;'>Coverage</div><div style='color:#fff;font-weight:700;font-size:12px;margin-top:2px;'>AHCIP Covered</div></div>`;
            break;

        case 'womens-health':
            statusLabel = "WOMEN'S HEALTH MONITOR";
            statusValue = 'COMPREHENSIVE CARE';
            animSvg = `<svg viewBox='0 0 400 100' style='width:100%;height:auto;display:block;' xmlns='http://www.w3.org/2000/svg'>
                <path d='M 0 50 Q 50 20 100 50 T 200 50 T 300 50 T 400 50' fill='none' stroke='rgba(115,201,190,0.3)' stroke-width='2'/>
                <path d='M 0 50 Q 50 80 100 50 T 200 50 T 300 50 T 400 50' fill='none' stroke='#73C9BE' stroke-width='3.5'>
                    <animate attributeName='d' dur='2.5s' repeatCount='indefinite' values='M 0 50 Q 50 80 100 50 T 200 50 T 300 50 T 400 50;M 0 50 Q 50 20 100 50 T 200 50 T 300 50 T 400 50;M 0 50 Q 50 80 100 50 T 200 50 T 300 50 T 400 50'/>
                </path>
                <circle cx='100' cy='50' r='7' fill='#10b981'><animate attributeName='cy' values='50;20;80;50' dur='2.5s' repeatCount='indefinite'/></circle>
            </svg>`;
            metaItems = `<div style='background:rgba(255,255,255,0.07);padding:10px;border-radius:8px;text-align:center;'><div style='color:rgba(255,255,255,0.55);font-size:10px;text-transform:uppercase;letter-spacing:0.5px;'>Speciality</div><div style='color:#fff;font-weight:700;font-size:12px;margin-top:2px;'>Full Women's Care</div></div><div style='background:rgba(255,255,255,0.07);padding:10px;border-radius:8px;text-align:center;'><div style='color:rgba(255,255,255,0.55);font-size:10px;text-transform:uppercase;letter-spacing:0.5px;'>Coverage</div><div style='color:#73C9BE;font-weight:700;font-size:12px;margin-top:2px;'>AHCIP Covered</div></div><div style='background:rgba(255,255,255,0.07);padding:10px;border-radius:8px;text-align:center;'><div style='color:rgba(255,255,255,0.55);font-size:10px;text-transform:uppercase;letter-spacing:0.5px;'>Preventive</div><div style='color:#10b981;font-weight:700;font-size:12px;margin-top:2px;'>Annual Exam</div></div>`;
            break;

        default:
            statusLabel = 'CLINICAL DIAGNOSTIC SCANNER';
            statusValue = 'BOARD CERTIFIED SPECIALISTS';
            animSvg = `<svg viewBox='0 0 400 100' style='width:100%;height:auto;display:block;' xmlns='http://www.w3.org/2000/svg'>
                <circle cx='200' cy='50' r='40' fill='none' stroke='rgba(115,201,190,0.18)' stroke-width='2'/>
                <circle cx='200' cy='50' r='28' fill='none' stroke='#73C9BE' stroke-width='2.5' stroke-dasharray='12 5'>
                    <animateTransform attributeName='transform' type='rotate' from='0 200 50' to='360 200 50' dur='5s' repeatCount='indefinite'/>
                </circle>
                <circle cx='200' cy='50' r='13' fill='#10b981'><animate attributeName='r' values='8;16;8' dur='2s' repeatCount='indefinite'/></circle>
            </svg>`;
            metaItems = `<div style='background:rgba(255,255,255,0.07);padding:10px;border-radius:8px;text-align:center;'><div style='color:rgba(255,255,255,0.55);font-size:10px;text-transform:uppercase;letter-spacing:0.5px;'>Specialty</div><div style='color:#fff;font-weight:700;font-size:12px;margin-top:2px;'>Advanced Care</div></div><div style='background:rgba(255,255,255,0.07);padding:10px;border-radius:8px;text-align:center;'><div style='color:rgba(255,255,255,0.55);font-size:10px;text-transform:uppercase;letter-spacing:0.5px;'>Coverage</div><div style='color:#73C9BE;font-weight:700;font-size:12px;margin-top:2px;'>AHCIP Covered</div></div>`;
    }

    return `<div style='background:rgba(11,40,36,0.95); border:1px solid rgba(115,201,190,0.35); border-radius:16px; padding:20px 20px 16px; box-shadow:0 24px 48px rgba(0,0,0,0.45); backdrop-filter:blur(12px);'>
        <div style='display:flex; justify-content:space-between; align-items:center; margin-bottom:14px; flex-wrap:wrap; gap:8px;'>
            <span style='display:inline-flex; align-items:center; gap:8px; color:#10b981; font-weight:700; font-size:11px; font-family:sans-serif; text-transform:uppercase; letter-spacing:0.5px;'>
                <span style='width:9px;height:9px;background:#10b981;border-radius:50%;box-shadow:0 0 10px #10b981;animation:pulse 1.5s infinite;display:inline-block;flex-shrink:0;'></span>
                ${statusLabel}
            </span>
            <span style='color:#73C9BE; font-size:10px; font-weight:700; font-family:sans-serif; letter-spacing:0.3px;'>${statusValue}</span>
        </div>
        <div style='background:#071E1C; border-radius:12px; overflow:hidden; border:1px solid rgba(115,201,190,0.15); margin-bottom:14px;'>
            ${animSvg}
        </div>
        <div style='display:grid; grid-template-columns:repeat(auto-fit, minmax(90px, 1fr)); gap:8px;'>
            ${metaItems}
        </div>
    </div>`;
}

const fs = require('fs');
const path = require('path');
const services = require('../config/services.js');

const rootDir = path.join(__dirname, '..');
const pagesDir = rootDir;
const servicesDir = path.join(pagesDir, 'services');

if (!fs.existsSync(servicesDir)) {
    fs.mkdirSync(servicesDir, { recursive: true });
}

// 1. Generate pages/services/index.html
const indexHtml = '<!DOCTYPE html>\n' +
'<html lang="en">\n' +
'<head>\n' +
'    <meta charset="UTF-8">\n' +
'    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n' +
'    <title>Medical Services | HealthPlus Medical Calgary</title>\n' +
'    <meta name="description" content="Comprehensive medical services at HealthPlus Medical. From family medicine and walk-in care to specialized internal medicine and pediatrics.">\n' +
'    <link rel="canonical" href="https://healthplusmed.ca/services">\n' +
'    <meta property="og:title" content="Medical Services | HealthPlus Medical Calgary">\n' +
'    <meta property="og:description" content="Comprehensive medical services at HealthPlus Medical. From family medicine and walk-in care to specialized internal medicine and pediatrics.">\n' +
'    <meta property="og:type" content="website">\n' +
'    <meta property="og:url" content="https://healthplusmed.ca/services">\n' +
'    <meta property="og:image" content="https://healthplusmed.ca/assets/social_share.webp">\n' +
'    \n' +
'    <link rel="preconnect" href="https://fonts.googleapis.com">\n' +
'    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n' +
'    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:ital,wght@0,600;0,700;1,600&display=swap" rel="stylesheet">\n' +
'    <link rel="stylesheet" href="../../css/hp-premium.css">\n' +
'</head>\n' +
'<body class="hp-body">\n' +
'\n' +
'<header>\n' +
'    <nav class="hp-navbar" aria-label="Main Navigation">\n' +
'        <div class="container nav-inner">\n' +
'            <a href="../../index.html" class="nav-logo" aria-label="HealthPlus Medical Home">\n' +
'                <img src="../../assets/logo_hp.png" alt="HealthPlus Medical">\n' +
'            </a>\n' +
'            <ul class="nav-links" role="list">\n' +
'                <li class="nav-dropdown" style="position:relative;">\n' +
'                    <a href="index.html" class="nav-link" aria-haspopup="true">Services</a>\n' +
'                    <!-- HP_SERVICES_NAV_START -->\n' +
'                    <!-- HP_SERVICES_NAV_END -->\n' +
'                </li>\n' +
'                <li><a href="../team/" class="nav-link">Our Team</a></li>\n' +
'                <li><a href="../about/" class="nav-link">About</a></li>\n' +
'                <li><a href="../faq.html" class="nav-link">FAQ</a></li>\n' +
'                <li><a href="../contact.html" class="nav-link">Contact</a></li>\n' +
'            </ul>\n' +
'            <a href="https://form.jotform.com/sehamanagementinv/-appointment-request-form" target="_blank" rel="noopener noreferrer" class="btn btn-primary nav-cta">Book Appointment</a>\n' +
'            <button class="nav-hamburger" aria-label="Open menu"><span></span><span></span><span></span></button>\n' +
'        </div>\n' +
'    </nav>\n' +
'</header>\n' +
'\n' +
'<main>\n' +
'    <section class="hp-hero" style="min-height: 40vh; display: flex; align-items: center; padding-top: 120px;">\n' +
'        <div class="hero-bg">\n' +
'            <div style="width:100%;height:100%;background:linear-gradient(135deg,var(--hp-primary-dark) 0%,var(--hp-primary) 100%);"></div>\n' +
'            <div class="hero-overlay"></div>\n' +
'        </div>\n' +
'        <div class="container hero-content" style="text-align: center; max-width: 800px; margin: 0 auto; display:block;">\n' +
'            <span class="eyebrow" style="color:var(--hp-primary-light);">Our Services</span>\n' +
'            <h1 style="color:#fff;margin:var(--space-4) 0;">Expert Medical Care for the Whole Family</h1>\n' +
'            <p class="lead" style="color:rgba(255,255,255,0.85);">We offer a comprehensive range of medical services to support your health at every stage of life.</p>\n' +
'        </div>\n' +
'    </section>\n' +
'\n' +
'    <section class="section">\n' +
'        <div class="container">\n' +
'            <!-- HP_SERVICES_DIRECTORY_START -->\n' +
'            <!-- HP_SERVICES_DIRECTORY_END -->\n' +
'        </div>\n' +
'    </section>\n' +
'</main>\n' +
'\n' +
'<footer class="hp-footer" style="margin-top:auto;">\n' +
'    <div class="container text-center" style="padding:var(--space-10) 0;">\n' +
'        <p>&copy; 2026 HealthPlus by SEHA Medical. All rights reserved.</p>\n' +
'    </div>\n' +
'</footer>\n' +
'\n' +
'<script src="../../js/hp-core.js"></script>\n' +
'</body>\n' +
'</html>';

fs.writeFileSync(path.join(servicesDir, 'index.html'), indexHtml, 'utf8');

// 2. Generate 11 individual service pages
services.forEach(service => {
    let faqHtml = '';
    if (service.faq && service.faq.length > 0) {
        service.faq.forEach((f, i) => {
            faqHtml += '<details ' + (i === 0 ? 'open' : '') + ' style="border:1px solid var(--hp-border); border-radius:var(--radius-lg); margin-bottom:var(--space-3); background:var(--hp-surface); overflow:hidden;">\n' +
                       '    <summary style="display:flex; justify-content:space-between; align-items:center; padding:var(--space-5) var(--space-6); color:var(--hp-heading); font-weight:600; font-family:var(--font-heading); font-size:1.05rem; cursor:pointer; list-style:none; user-select:none;">\n' +
                       '        <span>' + f.q + '</span>\n' +
                       '        <span class="faq-icon" style="width:26px; height:26px; border-radius:50%; background:var(--hp-primary-ultra); color:var(--hp-primary-dark); display:flex; align-items:center; justify-content:center; font-weight:700; font-size:1.1rem; flex-shrink:0; transition:transform 0.25s ease;">+</span>\n' +
                       '    </summary>\n' +
                       '    <div style="padding:0 var(--space-6) var(--space-5); color:var(--hp-text-muted); line-height:1.75; font-size:var(--text-sm);">' + f.a + '</div>\n' +
                       '</details>\n';
        });
    }

    let conditionsHtml = '';
    service.conditions.forEach(c => {
        conditionsHtml += '<li style="margin-bottom:var(--space-2);padding-left:24px;position:relative;color:var(--hp-text-muted);"><svg style="position:absolute;left:0;top:4px;width:16px;color:var(--hp-primary);" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>' + c + '</li>\n';
    });

    let motionWidgetHtml = getServiceMotionHUD(service.slug, service.title);

    let pageHtml = '<!DOCTYPE html>\n' +
'<html lang="en">\n' +
'<head>\n' +
'    <meta charset="UTF-8">\n' +
'    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n' +
'    <title>' + service.seoTitle + '</title>\n' +
'    <meta name="description" content="' + service.seoDescription + '">\n' +
'    <link rel="canonical" href="https://healthplusmed.ca/services/' + service.slug + '">\n' +
'    <meta property="og:title" content="' + service.seoTitle + '">\n' +
'    <meta property="og:description" content="' + service.seoDescription + '">\n' +
'    <meta property="og:type" content="website">\n' +
'    <meta property="og:url" content="https://healthplusmed.ca/services/' + service.slug + '">\n' +
'    <meta property="og:image" content="https://healthplusmed.ca/assets/images/services/' + service.slug + '.png">\n' +
'    \n' +
'    <link rel="preconnect" href="https://fonts.googleapis.com">\n' +
'    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n' +
'    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,600;0,700;1,600&display=swap" rel="stylesheet">\n' +
'    <link rel="stylesheet" href="../css/hp-premium.css">\n' +
'    \n' +
'    <script type="application/ld+json">\n' +
'    {\n' +
'      "@context": "https://schema.org",\n' +
'      "@type": "MedicalWebPage",\n' +
'      "name": "' + service.title + '",\n' +
'      "description": "' + service.shortDescription + '",\n' +
'      "provider": {\n' +
'        "@type": "MedicalClinic",\n' +
'        "name": "HealthPlus Medical"\n' +
'      }\n' +
'    }\n' +
'    </script>\n' +
'</head>\n' +
'<body class="hp-body">\n' +
'\n' +
'<header>\n' +
'    <nav class="hp-navbar" aria-label="Main Navigation">\n' +
'        <div class="container nav-inner">\n' +
'            <a href="../index.html" class="nav-logo" aria-label="HealthPlus Medical Home">\n' +
'                <img src="../assets/logo_hp.png" alt="HealthPlus Medical">\n' +
'            </a>\n' +
'            <ul class="nav-links" role="list">\n' +
'                <li class="nav-dropdown" style="position:relative;">\n' +
'                    <a href="index.html" class="nav-link" aria-haspopup="true">Services</a>\n' +
'                    <!-- HP_SERVICES_NAV_START -->\n' +
'                    <!-- HP_SERVICES_NAV_END -->\n' +
'                </li>\n' +
'                <li><a href="../team/" class="nav-link">Our Team</a></li>\n' +
'                <li><a href="../about/" class="nav-link">About</a></li>\n' +
'                <li><a href="../faq.html" class="nav-link">FAQ</a></li>\n' +
'                <li><a href="../contact.html" class="nav-link">Contact</a></li>\n' +
'            </ul>\n' +
'            <a href="https://form.jotform.com/sehamanagementinv/-appointment-request-form" target="_blank" rel="noopener noreferrer" class="btn btn-primary nav-cta">Book Appointment</a>\n' +
'            <button class="nav-hamburger" aria-label="Open menu"><span></span><span></span><span></span></button>\n' +
'        </div>\n' +
'    </nav>\n' +
'</header>\n' +
'\n' +
'<main>\n' +
'    <!-- HERO: LUXURY CINEMATIC SPLIT WITH STANDALONE 8K PHOTO CARD & MOTION GRAPHICS WIDGET -->\n' +
'    <section class="hp-hero" style="background: linear-gradient(135deg, #0B332F 0%, #134B45 50%, #1C635C 100%); padding-top: 110px; padding-bottom: 50px;">\n' +
'        <div class="container" style="display:grid; grid-template-columns: 1.1fr 1fr; gap: var(--space-8); align-items: center;">\n' +
'            <div>\n' +
'                <ul class="breadcrumbs" style="list-style:none;padding:0;margin:0 0 var(--space-3);display:flex;gap:var(--space-2);color:var(--hp-primary-light);font-size:var(--text-xs);">\n' +
'                    <li><a href="../index.html" style="color:inherit;text-decoration:none;">Home</a> /</li>\n' +
'                    <li><a href="index.html" style="color:inherit;text-decoration:none;">Services</a> /</li>\n' +
'                    <li>' + service.title + '</li>\n' +
'                </ul>\n' +
'                <span style="display:inline-block; background:rgba(255,255,255,0.15); backdrop-filter:blur(8px); color:#fff; padding:5px 16px; border-radius:var(--radius-full); font-size:var(--text-xs); font-weight:600; text-transform:uppercase; letter-spacing:1px; margin-bottom:var(--space-3);">' + (service.category || 'Specialized Healthcare') + '</span>\n' +
'                <h1 style="color:#fff; margin:var(--space-2) 0 var(--space-4); font-size: var(--text-4xl); font-family: var(--font-heading); font-weight: 700; line-height: 1.15;">' + service.title + '</h1>\n' +
'                <p class="lead" style="color:rgba(255,255,255,0.9); font-size: var(--text-base); line-height: 1.6; margin-bottom: var(--space-6); max-width: 580px;">' + service.shortDescription + '</p>\n' +
'                <div style="display:flex; gap:var(--space-3); flex-wrap:wrap;">\n' +
'                    <a href="https://form.jotform.com/sehamanagementinv/-appointment-request-form" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-lg">Book Appointment</a>\n' +
'                    <a href="tel:4032544633" class="btn btn-outline" style="border-color:rgba(255,255,255,0.4); color:#fff;">Call (403) 254-4633</a>\n' +
'                </div>\n' +
'            </div>\n' +
'            <!-- RIGHT: STANDALONE 8K PHOTO ABOVE + SEPARATED MOTION CARD BELOW -->\n' +
'            <div style="display:flex; flex-direction:column; gap:var(--space-5);">\n' +
'                <!-- STANDALONE 8K PHOTO CARD: full image, no overlay, no cropping -->\n' +
'                <div style="border-radius:16px; overflow:hidden; box-shadow:0 25px 55px rgba(0,0,0,0.5); border:2px solid rgba(255,255,255,0.22);">\n' +
'                    <img src="../assets/images/services/' + service.slug + '.png" alt="' + service.title + '" style="width:100%; height:auto; display:block;" onerror="this.src=\'../assets/images/global/healthplus-placeholder.svg\'" loading="eager">\n' +
'                </div>\n' +
'                <!-- SEPARATE ANIMATED MOTION GRAPHIC CARD (not touching the image) -->\n' +
'                ' + getServiceMotionHUD(service.slug, service.title) + '\n' +
'            </div>\n' +
'        </div>\n' +
'    </section>\n' +
'\n' +
'    <section class="section" style="padding-top: var(--space-16); padding-bottom: var(--space-16);">\n' +
'        <div class="container" style="display:grid;grid-template-columns:2fr 1fr;gap:var(--space-12);">\n' +
'            <div class="content-main">\n' +
'                <h2 style="color:var(--hp-heading);margin-bottom:var(--space-4);font-family:var(--font-heading);">Overview & Care Focus</h2>\n' +
'                <p style="color:var(--hp-text);line-height:1.7;margin-bottom:var(--space-8);font-size:var(--text-base);">' + service.whatToExpect + '</p>\n' +
'                \n' +
'                <h3 style="color:var(--hp-heading);margin-bottom:var(--space-3);font-family:var(--font-heading);">Who This Is For</h3>\n' +
'                <p style="color:var(--hp-text);line-height:1.7;margin-bottom:var(--space-8);font-size:var(--text-base);">' + service.whoItIsFor + '</p>\n' +
'                \n' +
'                <h3 style="color:var(--hp-heading);margin-bottom:var(--space-3);font-family:var(--font-heading);">Preparation & What To Bring</h3>\n' +
'                <p style="color:var(--hp-text);line-height:1.7;margin-bottom:var(--space-8);font-size:var(--text-base);">' + service.preparation + '</p>\n' +
'                <h3 style="color:var(--hp-heading);margin-bottom:var(--space-6);font-family:var(--font-heading);">Frequently Asked Questions</h3>\n' +
'                <div class="faq-list">\n' +
'                    ' + faqHtml + '\n' +
'                </div>\n' +
'            </div>\n' +
'            \n' +
'            <aside class="sidebar">\n' +
'                <div style="background:var(--hp-surface);border:1px solid var(--hp-border);border-radius:var(--radius-xl);padding:var(--space-6);margin-bottom:var(--space-8);">\n' +
'                    <h3 style="margin-bottom:var(--space-4);font-family:var(--font-heading);">Conditions & Focus</h3>\n' +
'                    <ul style="list-style:none;padding:0;margin:0;">\n' +
'                        ' + conditionsHtml + '\n' +
'                    </ul>\n' +
'                </div>\n' +
'                \n' +
'                <div style="background:var(--hp-primary-ultra);border-radius:var(--radius-xl);padding:var(--space-6);text-align:center;">\n' +
'                    <h3 style="color:var(--hp-primary-dark);margin-bottom:var(--space-3);font-family:var(--font-heading);">Ready to book?</h3>\n' +
'                    <p style="color:var(--hp-text);font-size:var(--text-sm);margin-bottom:var(--space-4);">Schedule your appointment easily online or over the phone.</p>\n' +
'                    <a href="https://form.jotform.com/sehamanagementinv/-appointment-request-form" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="width:100%;justify-content:center;">Book Now</a>\n' +
'                </div>\n' +
'            </aside>\n' +
'        </div>\n' +
'    </section>\n' +
'\n' +
'    <section class="section" style="background:var(--hp-bg-section);">\n' +
'        <div class="container">\n' +
'            <h2 style="color:var(--hp-heading);margin-bottom:var(--space-6);font-family:var(--font-heading);">Related Services</h2>\n' +
'            <!-- HP_RELATED_SERVICES_START -->\n' +
'            <!-- HP_RELATED_SERVICES_END -->\n' +
'        </div>\n' +
'    </section>\n' +
'</main>\n' +
'\n' +
'<!-- HP_FOOTER_START -->\n' +
'<footer class="hp-footer" style="margin-top:auto; background: var(--hp-surface); border-top: 1px solid var(--hp-border); padding-top: var(--space-16);">\n' +
'    <div class="container" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: var(--space-12); padding-bottom: var(--space-12);">\n' +
'        <div>\n' +
'            <a href="../index.html" style="display:inline-block; margin-bottom:var(--space-6);">\n' +
'                <img src="../assets/logo_hp.png" alt="HealthPlus Medical" style="height: 48px; width: auto;">\n' +
'            </a>\n' +
'            <p style="color: var(--hp-text-muted); line-height: 1.7; margin-bottom: var(--space-6);">Providing exceptional, compassionate, and comprehensive medical care to Calgary and surrounding communities since 2006.</p>\n' +
'            <div style="display: flex; gap: 16px; margin-bottom: var(--space-6);">\n' +
'                <a href="https://www.linkedin.com/company/health-plus-medical-clinic/posts/?feedView=all" target="_blank" rel="noopener noreferrer" aria-label="HealthPlus LinkedIn" style="color: var(--hp-primary); width: 40px; height: 40px; border-radius: 50%; background: var(--hp-primary-ultra); display: flex; align-items: center; justify-content: center; transition: all 0.2s;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>\n' +
'            </div>\n' +
'        </div>\n' +
'        <div>\n' +
'            <h4 style="color: var(--hp-heading); margin-bottom: var(--space-6); font-family: var(--font-heading); font-weight: 600;">Quick Links</h4>\n' +
'            <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 12px;">\n' +
'                <li><a href="index.html" style="color: var(--hp-text); text-decoration: none;">Our Services</a></li>\n' +
'                <li><a href="../team/" style="color: var(--hp-text); text-decoration: none;">Medical Team</a></li>\n' +
'                <li><a href="../about/" style="color: var(--hp-text); text-decoration: none;">About Clinic</a></li>\n' +
'                <li><a href="../faq.html" style="color: var(--hp-text); text-decoration: none;">Patient FAQ</a></li>\n' +
'                <li><a href="../contact.html" style="color: var(--hp-text); text-decoration: none;">Contact Us</a></li>\n' +
'            </ul>\n' +
'        </div>\n' +
'        <div>\n' +
'            <h4 style="color: var(--hp-heading); margin-bottom: var(--space-6); font-family: var(--font-heading); font-weight: 600;">Contact Us</h4>\n' +
'            <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 16px;">\n' +
'                <li style="color: var(--hp-text-muted);">227 153 Ave SE<br>Calgary, AB T2X 2K2</li>\n' +
'                <li style="color: var(--hp-text-muted);">(403) 254-4633</li>\n' +
'            </ul>\n' +
'        </div>\n' +
'        <div>\n' +
'            <h4 style="color: var(--hp-heading); margin-bottom: var(--space-6); font-family: var(--font-heading); font-weight: 600;">Clinic Hours</h4>\n' +
'            <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 12px;">\n' +
'                <li style="display: flex; justify-content: space-between; color: var(--hp-text);"><span>Mon - Fri</span> <span>9:00 AM - 5:00 PM</span></li>\n' +
'                <li style="display: flex; justify-content: space-between; color: var(--hp-text);"><span>Saturday</span> <span>10:00 AM - 2:00 PM</span></li>\n' +
'                <li style="display: flex; justify-content: space-between; color: var(--hp-primary);"><span>Sun & Holidays</span> <span>Closed</span></li>\n' +
'            </ul>\n' +
'        </div>\n' +
'    </div>\n' +
'    <div style="border-top: 1px solid var(--hp-border); background: #f8fafc;">\n' +
'        <div class="container" style="padding: var(--space-6) 0; display: flex; justify-content: space-between; align-items: center;">\n' +
'            <p style="color: var(--hp-text-muted); font-size: var(--text-sm); margin: 0;">&copy; 2026 HealthPlus by SEHA Medical. All rights reserved.</p>\n' +
'            <p style="color: var(--hp-text-muted); font-size: var(--text-sm); margin: 0;">Built by <a href="https://nexorayyc.io" target="_blank" rel="noopener" style="color: var(--hp-primary); font-weight: 600; text-decoration: none;">Nexora</a></p>\n' +
'        </div>\n' +
'    </div>\n' +
'</footer>\n' +
'<!-- HP_FOOTER_END -->\n' +
'\n' +
'<script src="../js/hp-core.js"></script>\n' +
'<script>\n' +
'    // Rotate FAQ icon on open/close\n' +
'    document.querySelectorAll("details").forEach(d => {\n' +
'        d.addEventListener("toggle", function() {\n' +
'            const icon = this.querySelector(".faq-icon");\n' +
'            if (icon) icon.style.transform = this.open ? "rotate(45deg)" : "rotate(0deg)";\n' +
'        });\n' +
'    });\n' +
'</script>\n' +
'</body>\n' +
'</html>';

    
    // Concussion Care Rich Content Overhaul
    if (service.slug === 'concussion-care') {
        var concussionRichSections = '<div class="concussion-complete-care" style="margin-bottom:var(--space-12);">' +
            '<div style="background:linear-gradient(135deg, #071E1C 0%, #0D3D38 100%); color:#fff; padding:var(--space-8); border-radius:var(--radius-2xl); margin-bottom:var(--space-8); border:1px solid rgba(115,201,190,0.3);">' +
            '    <span style="color:#73C9BE; font-weight:700; font-size:var(--text-xs); text-transform:uppercase; letter-spacing:1px;">Complete Concussions™ Certified Clinic</span>' +
            '    <h3 style="color:#fff; font-size:var(--text-2xl); font-family:var(--font-heading); margin:var(--space-2) 0 var(--space-4);">Evidence-Based Concussion Management Program</h3>' +
            '    <p style="color:rgba(255,255,255,0.9); line-height:1.7; margin-bottom:var(--space-6);">HealthPlus is proud to offer the Complete Concussions Program at our clinic. As a certified location, we provide a full evidence-based concussion management program—helping our patients and athletes safely return to learn, work, and play.</p>' +
            '    <div style="display:flex; gap:var(--space-4); flex-wrap:wrap; align-items:center;">' +
            '        <a href="https://apps.apple.com/ca/app/concussion-tracker/id1166290027" target="_blank" rel="noopener" style="display:inline-block;"><img src="../assets/services/concussion/CONCUSSION TRACKER APP/App-Store-Icon-AppStore.png" alt="Download Concussion Tracker on App Store" style="height:44px;"></a>' +
            '        <a href="https://play.google.com/store/apps/details?id=com.completeconcussions.concussiontracker&hl=en_CA" target="_blank" rel="noopener" style="display:inline-block;"><img src="../assets/services/concussion/CONCUSSION TRACKER APP/App-Store-Icon-GooglePlay.png" alt="Get Concussion Tracker on Google Play" style="height:44px;"></a>' +
            '    </div>' +
            '</div>' +
            
            '<h3 style="color:var(--hp-heading);margin-bottom:var(--space-4);font-family:var(--font-heading);">Concussion Recovery & Treatment Strategy</h3>' +
            '<p style="color:var(--hp-text);line-height:1.7;margin-bottom:var(--space-6);">Following a concussion injury, it is recommended that you seek the care of a healthcare professional with training and experience in concussion as soon as possible. The earlier you seek quality concussion care, the better your recovery will be.</p>' +
            '<div style="margin-bottom:var(--space-8); border-radius:var(--radius-xl); overflow:hidden; border:1px solid var(--hp-border); box-shadow:0 10px 30px rgba(0,0,0,0.05);">' +
            '    <img src="../assets/services/concussion/CONCUSSION TREATMENT INFOGRAPHIC/1920x1280-CompleteConcussions-Treatment-Infographic.png" alt="Concussion Treatment Infographic" style="width:100%; height:auto; display:block;">' +
            '</div>' +

            '<div style="display:grid; grid-template-columns:1fr 1fr; gap:var(--space-6); margin-bottom:var(--space-8);">' +
            '    <div style="background:var(--hp-surface); padding:var(--space-6); border-radius:var(--radius-xl); border:1px solid var(--hp-border);">' +
            '        <h4 style="color:var(--hp-heading); margin-bottom:var(--space-3); font-family:var(--font-heading);">Comprehensive Care Protocol</h4>' +
            '        <p style="color:var(--hp-text-muted); line-height:1.6; font-size:var(--text-sm);">Generally, a period of relative "symptom-limited" physical and cognitive rest is recommended for the first 24-48 hours after injury. After this rest period, a gradual increase in mental and physical activity is recommended under the supervision of a licensed practitioner.</p>' +
            '    </div>' +
            '    <div style="background:var(--hp-surface); padding:var(--space-6); border-radius:var(--radius-xl); border:1px solid var(--hp-border);">' +
            '        <h4 style="color:var(--hp-heading); margin-bottom:var(--space-3); font-family:var(--font-heading);">Multimodal Pre-season Baseline Testing</h4>' +
            '        <p style="color:var(--hp-text-muted); line-height:1.6; font-size:var(--text-sm);">Pre-season testing measures your balance, reaction time, memory, and visual tracking. If you sustain a concussion during the season, we compare your recovery against your personal healthy baseline.</p>' +
            '    </div>' +
            '</div>' +

            '<div style="background:rgba(115,201,190,0.12); border-left:4px solid var(--hp-primary); padding:var(--space-6); border-radius:var(--radius-lg); margin-bottom:var(--space-8);">' +
            '    <h4 style="color:var(--hp-primary-dark); margin-bottom:var(--space-2); font-family:var(--font-heading);">Alberta Health Care Insurance Plan (AHCIP) Coverage</h4>' +
            '    <p style="color:var(--hp-text); margin:0; font-size:var(--text-sm); line-height:1.6;">Medically necessary physician consultations and diagnostic evaluations are fully covered under AHCIP. Optional baseline testing and third-party athletic reports will always be transparently discussed prior to assessment.</p>' +
            '</div></div>';
            
        pageHtml = pageHtml.replace('<h2 style="color:var(--hp-heading);margin-bottom:var(--space-4);font-family:var(--font-heading);">Overview & Care Focus</h2>', concussionRichSections + '<h2 style="color:var(--hp-heading);margin-bottom:var(--space-4);font-family:var(--font-heading);">Overview & Care Focus</h2>');
    }

    fs.writeFileSync(path.join(servicesDir, `${service.slug}.html`), pageHtml, 'utf8');
});
console.log('Rebuilt all 11 service pages with 100% correct relative paths, standalone photo showcase, motion graphics, and working FAQ accordions.');
