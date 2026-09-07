// Interactive Google Business Profile & Popular Times
document.addEventListener('DOMContentLoaded', () => {
    const popularTimesData = {
        MON: {
            hours: [
                { time: '9am', label: '9 AM', pct: 45, desc: 'Moderate' },
                { time: '10am', label: '10 AM', pct: 65, desc: 'Busy' },
                { time: '11am', label: '11 AM', pct: 85, desc: 'Very busy' },
                { time: '12pm', label: '12 PM', pct: 95, desc: 'Peak walk-in volume' },
                { time: '1pm', label: '1 PM', pct: 90, desc: 'Peak walk-in volume' },
                { time: '2pm', label: '2 PM', pct: 75, desc: 'Busy' },
                { time: '3pm', label: '3 PM', pct: 70, desc: 'Busy' },
                { time: '4pm', label: '4 PM', pct: 60, desc: 'Moderate' },
                { time: '5pm', label: '5 PM', pct: 45, desc: 'Moderate' },
                { time: '6pm', label: '6 PM', pct: 30, desc: 'Usually quiet' }
            ],
            duration: '25 min to 1 hr',
            peakText: '12 p.m.: Peak walk-in volume'
        },
        TUE: {
            hours: [
                { time: '9am', label: '9 AM', pct: 40, desc: 'Moderate' },
                { time: '10am', label: '10 AM', pct: 60, desc: 'Busy' },
                { time: '11am', label: '11 AM', pct: 80, desc: 'Very busy' },
                { time: '12pm', label: '12 PM', pct: 90, desc: 'Peak volume' },
                { time: '1pm', label: '1 PM', pct: 85, desc: 'Very busy' },
                { time: '2pm', label: '2 PM', pct: 70, desc: 'Busy' },
                { time: '3pm', label: '3 PM', pct: 65, desc: 'Busy' },
                { time: '4pm', label: '4 PM', pct: 55, desc: 'Moderate' },
                { time: '5pm', label: '5 PM', pct: 40, desc: 'Moderate' },
                { time: '6pm', label: '6 PM', pct: 25, desc: 'Usually quiet' }
            ],
            duration: '25 min to 1 hr',
            peakText: '12 p.m.: Usually as busy as it gets'
        },
        WED: {
            hours: [
                { time: '9am', label: '9 AM', pct: 42, desc: 'Moderate' },
                { time: '10am', label: '10 AM', pct: 65, desc: 'Busy' },
                { time: '11am', label: '11 AM', pct: 85, desc: 'Very busy' },
                { time: '12pm', label: '12 PM', pct: 95, desc: 'Peak volume' },
                { time: '1pm', label: '1 PM', pct: 90, desc: 'Peak volume' },
                { time: '2pm', label: '2 PM', pct: 75, desc: 'Busy' },
                { time: '3pm', label: '3 PM', pct: 68, desc: 'Busy' },
                { time: '4pm', label: '4 PM', pct: 58, desc: 'Moderate' },
                { time: '5pm', label: '5 PM', pct: 42, desc: 'Moderate' },
                { time: '6pm', label: '6 PM', pct: 28, desc: 'Usually quiet' }
            ],
            duration: '25 min to 1 hr',
            peakText: '12 p.m.: Peak walk-in volume'
        },
        THU: {
            hours: [
                { time: '9am', label: '9 AM', pct: 48, desc: 'Moderate' },
                { time: '10am', label: '10 AM', pct: 70, desc: 'Busy' },
                { time: '11am', label: '11 AM', pct: 90, desc: 'Very busy' },
                { time: '12pm', label: '12 PM', pct: 100, desc: 'Usually as busy as it gets' },
                { time: '1pm', label: '1 PM', pct: 92, desc: 'Peak volume' },
                { time: '2pm', label: '2 PM', pct: 78, desc: 'Busy' },
                { time: '3pm', label: '3 PM', pct: 72, desc: 'Busy' },
                { time: '4pm', label: '4 PM', pct: 62, desc: 'Moderate' },
                { time: '5pm', label: '5 PM', pct: 50, desc: 'Moderate' },
                { time: '6pm', label: '6 PM', pct: 32, desc: 'Usually quiet' }
            ],
            duration: '25 min to 1 hr',
            peakText: '12 p.m.: Usually as busy as it gets'
        },
        FRI: {
            hours: [
                { time: '9am', label: '9 AM', pct: 50, desc: 'Moderate' },
                { time: '10am', label: '10 AM', pct: 75, desc: 'Busy' },
                { time: '11am', label: '11 AM', pct: 95, desc: 'Peak volume' },
                { time: '12pm', label: '12 PM', pct: 95, desc: 'Peak volume' },
                { time: '1pm', label: '1 PM', pct: 85, desc: 'Very busy' },
                { time: '2pm', label: '2 PM', pct: 75, desc: 'Busy' },
                { time: '3pm', label: '3 PM', pct: 65, desc: 'Busy' },
                { time: '4pm', label: '4 PM', pct: 45, desc: 'Closing soon' }
            ],
            duration: '25 min to 1 hr',
            peakText: '11 a.m. – 12 p.m.: Peak Friday volume'
        },
        SAT: {
            hours: [
                { time: '10am', label: '10 AM', pct: 60, desc: 'Moderate' },
                { time: '11am', label: '11 AM', pct: 85, desc: 'Busy' },
                { time: '12pm', label: '12 PM', pct: 90, desc: 'Peak volume' },
                { time: '1pm', label: '1 PM', pct: 65, desc: 'Moderate' }
            ],
            duration: '20 min to 45 min',
            peakText: '11 a.m. – 12 p.m.: Peak weekend volume'
        },
        SUN: {
            hours: [],
            duration: 'Closed',
            peakText: 'Clinic is closed on Sundays'
        }
    };

    // Calculate current Calgary (America/Edmonton) time and status
    function updateLiveStatus() {
        const statusEls = document.querySelectorAll('.live-calc-status');
        const badgeEls = document.querySelectorAll('.live-calc-badge');

        try {
            const now = new Date();
            const calgaryFormatter = new Intl.DateTimeFormat('en-US', {
                timeZone: 'America/Edmonton',
                weekday: 'short',
                hour: 'numeric',
                minute: 'numeric',
                hour12: false
            });
            const parts = calgaryFormatter.formatToParts(now);
            let day = '', hour = 0, min = 0;
            for (const p of parts) {
                if (p.type === 'weekday') day = p.value.toUpperCase().slice(0, 3);
                if (p.type === 'hour') hour = parseInt(p.value, 10);
                if (p.type === 'minute') min = parseInt(p.value, 10);
            }

            const currentMinutes = hour * 60 + min;
            let isOpen = false;
            let closeTimeStr = '';

            if (['MON', 'TUE', 'WED', 'THU'].includes(day)) {
                if (currentMinutes >= 9 * 60 && currentMinutes < (18 * 60 + 30)) {
                    isOpen = true;
                    closeTimeStr = '6:30 PM';
                }
            } else if (day === 'FRI') {
                if (currentMinutes >= 9 * 60 && currentMinutes < (16 * 60 + 30)) {
                    isOpen = true;
                    closeTimeStr = '4:30 PM';
                }
            } else if (day === 'SAT') {
                if (currentMinutes >= 10 * 60 && currentMinutes < (14 * 60)) {
                    isOpen = true;
                    closeTimeStr = '2:00 PM';
                }
            }

            badgeEls.forEach(b => {
                b.style.background = isOpen ? '#10b981' : '#ef4444';
            });

            statusEls.forEach(s => {
                if (isOpen) {
                    s.innerHTML = `<span style="color:#10b981;font-weight:700;">Open Now</span> · Closes at ${closeTimeStr}`;
                } else {
                    const nextOpen = (day === 'SAT' && currentMinutes >= 14 * 60) || day === 'SUN' ? 'Monday 9:00 AM' : '9:00 AM';
                    s.innerHTML = `<span style="color:#ef4444;font-weight:700;">Closed</span> · Opens ${nextOpen}`;
                }
            });
        } catch (e) {
            console.error('Error calculating status:', e);
        }
    }

    // Render Popular Times Chart for given Day on the page
    window.renderPopularDay = function(dayKey) {
        const dayTabs = document.querySelectorAll('.pop-day-tab');
        dayTabs.forEach(tab => {
            if (tab.dataset.day === dayKey) {
                tab.style.background = 'var(--hp-primary)';
                tab.style.color = '#ffffff';
                tab.style.borderColor = 'var(--hp-primary)';
                tab.style.fontWeight = '700';
                tab.style.boxShadow = '0 2px 6px rgba(0,137,123,0.3)';
            } else {
                tab.style.background = '#f8fafc';
                tab.style.color = '#1e293b';
                tab.style.borderColor = '#cbd5e1';
                tab.style.fontWeight = '700';
                tab.style.boxShadow = 'none';
            }
        });

        const dayData = popularTimesData[dayKey] || popularTimesData.THU;
        const peakIndicators = document.querySelectorAll('#pop-peak-text');
        const durationTexts = document.querySelectorAll('#pop-duration-text');
        const barsContainers = document.querySelectorAll('#pop-bars-container');

        peakIndicators.forEach(el => el.textContent = dayData.peakText);
        durationTexts.forEach(el => el.textContent = dayData.duration);

        barsContainers.forEach(container => {
            if (dayData.hours.length === 0) {
                container.innerHTML = `<div style="grid-column: 1 / -1; text-align:center; padding: 24px; color:#64748b; font-size:13px; font-weight:600;">Clinic Closed on Sundays</div>`;
                return;
            }

            let html = '';
            dayData.hours.forEach((h) => {
                const isPeak = h.pct >= 90;
                const barColor = isPeak ? '#0ea5e9' : '#00897b';
                html += `
                <div class="pop-bar-col" style="display:flex; flex-direction:column; align-items:center; justify-content:flex-end; height:100%; position:relative; cursor:pointer;" 
                     onmouseenter="document.querySelectorAll('#pop-peak-text').forEach(e => e.textContent = '${h.label}: ${h.desc}');" 
                     onmouseleave="document.querySelectorAll('#pop-peak-text').forEach(e => e.textContent = '${dayData.peakText}');">
                    <div style="width:100%; max-width:20px; height:${h.pct}%; background:${barColor}; border-radius:4px 4px 0 0; transition:height 0.3s, background 0.2s;" title="${h.label}: ${h.desc}"></div>
                    <span style="font-size:11px; font-weight:700; color:#334155; margin-top:8px;">${h.time}</span>
                </div>`;
            });
            container.innerHTML = html;
        });
    };

    // Auto-detect current day in Calgary to highlight by default
    function initDay() {
        try {
            const calgaryFormatter = new Intl.DateTimeFormat('en-US', {
                timeZone: 'America/Edmonton',
                weekday: 'short'
            });
            const curDay = calgaryFormatter.format(new Date()).toUpperCase().slice(0, 3);
            if (popularTimesData[curDay]) {
                window.renderPopularDay(curDay);
            } else {
                window.renderPopularDay('THU');
            }
        } catch (e) {
            window.renderPopularDay('THU');
        }
    }

    // Walk-In Clinic Live Estimated Wait Time & Today's Volume Gauge
    function initWalkInWidget() {
        const waitEl = document.getElementById('walkin-wait-time');
        const volumeEl = document.getElementById('walkin-volume-status');
        const todayDateEl = document.querySelector('.live-today-date');
        const walkinStatusEl = document.querySelector('.live-walkin-status');
        const miniBarsContainer = document.getElementById('walkin-mini-bars');

        if (!waitEl && !miniBarsContainer) return;

        try {
            const now = new Date();
            const calgaryFormatter = new Intl.DateTimeFormat('en-US', {
                timeZone: 'America/Edmonton',
                weekday: 'short',
                month: 'short',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                hour12: false
            });
            const parts = calgaryFormatter.formatToParts(now);
            let day = '', month = '', dayNum = '', hour = 0, min = 0;
            for (const p of parts) {
                if (p.type === 'weekday') day = p.value.toUpperCase().slice(0, 3);
                if (p.type === 'month') month = p.value;
                if (p.type === 'day') dayNum = p.value;
                if (p.type === 'hour') hour = parseInt(p.value, 10);
                if (p.type === 'minute') min = parseInt(p.value, 10);
            }

            if (todayDateEl) {
                todayDateEl.textContent = `TODAY (${day}, ${month} ${dayNum})`;
            }

            const currentMinutes = hour * 60 + min;
            let isOpen = false;
            let closeTime = '';

            if (['MON', 'TUE', 'WED', 'THU'].includes(day)) {
                if (currentMinutes >= 9 * 60 && currentMinutes < (18 * 60 + 30)) {
                    isOpen = true;
                    closeTime = '6:30 PM';
                }
            } else if (day === 'FRI') {
                if (currentMinutes >= 9 * 60 && currentMinutes < (16 * 60 + 30)) {
                    isOpen = true;
                    closeTime = '4:30 PM';
                }
            } else if (day === 'SAT') {
                if (currentMinutes >= 10 * 60 && currentMinutes < (14 * 60)) {
                    isOpen = true;
                    closeTime = '2:00 PM';
                }
            }

            if (walkinStatusEl) {
                if (isOpen) {
                    walkinStatusEl.innerHTML = `<span style="color:#10B981;font-weight:700;">OPEN NOW</span> · Closes ${closeTime}`;
                } else {
                    const nextOpen = (day === 'SAT' && currentMinutes >= 14 * 60) || day === 'SUN' ? 'Monday 9:00 AM' : 'Tomorrow 9:00 AM';
                    walkinStatusEl.innerHTML = `<span style="color:#EF4444;font-weight:700;">CLOSED NOW</span> · Opens ${nextOpen}`;
                }
            }

            const dayData = popularTimesData[day] || popularTimesData.THU;
            let currentHourData = null;
            let formattedHour = hour > 12 ? `${hour - 12}pm` : hour === 12 ? '12pm' : `${hour}am`;

            if (dayData && dayData.hours) {
                currentHourData = dayData.hours.find(h => h.time.toLowerCase() === formattedHour.toLowerCase());
            }

            if (waitEl) {
                if (!isOpen) {
                    waitEl.textContent = 'Next: 9 AM';
                    if (volumeEl) volumeEl.textContent = 'Clinic currently closed';
                } else if (currentHourData) {
                    if (currentHourData.pct >= 90) {
                        waitEl.textContent = '25–40 min';
                        if (volumeEl) volumeEl.textContent = 'Peak Walk-In Volume (Google Stats)';
                    } else if (currentHourData.pct >= 65) {
                        waitEl.textContent = '15–25 min';
                        if (volumeEl) volumeEl.textContent = 'Moderate Patient Flow (Google Stats)';
                    } else {
                        waitEl.textContent = '< 15 min';
                        if (volumeEl) volumeEl.textContent = 'Low Wait · Fast Triage';
                    }
                } else {
                    waitEl.textContent = '< 15 min';
                    if (volumeEl) volumeEl.textContent = 'Standard Patient Flow';
                }
            }

            if (miniBarsContainer && dayData && dayData.hours && dayData.hours.length > 0) {
                let html = '';
                dayData.hours.forEach(h => {
                    const isCur = h.time.toLowerCase() === formattedHour.toLowerCase() && isOpen;
                    const barBg = isCur ? '#10B981' : h.pct >= 90 ? 'rgba(14,165,233,0.7)' : 'rgba(115,201,190,0.4)';
                    const shadow = isCur ? 'box-shadow: 0 0 10px #10B981;' : '';
                    html += `
                    <div style="display:flex; flex-direction:column; align-items:center; justify-content:flex-end; height:100%;" title="${h.label}: ${h.desc}">
                        <div style="width:100%; max-width:14px; height:${Math.max(15, h.pct)}%; background:${barBg}; border-radius:3px 3px 0 0; ${shadow} transition: height 0.3s ease;"></div>
                        <span style="font-size:9px; font-weight:${isCur ? '700' : '500'}; color:${isCur ? '#6EE7B7' : 'rgba(255,255,255,0.6)'}; margin-top:3px;">${h.time}</span>
                    </div>`;
                });
                miniBarsContainer.innerHTML = html;
            } else if (miniBarsContainer) {
                miniBarsContainer.innerHTML = `<div style="grid-column: 1 / -1; text-align:center; padding:10px; color:rgba(255,255,255,0.6); font-size:11px;">Clinic closed today (Sunday)</div>`;
            }
        } catch (e) {
            console.error('Error initializing walkin widget:', e);
        }
    }

    // Try fetching live /api/google-profile if available to update counters
    fetch('/api/google-profile')
        .then(r => r.json())
        .then(data => {
            if (data.rating) {
                const ratingEls = document.querySelectorAll('.live-google-rating');
                ratingEls.forEach(el => el.textContent = data.rating.toFixed(1));
            }
            if (data.reviewCount) {
                const countEls = document.querySelectorAll('.live-google-reviews');
                countEls.forEach(el => el.textContent = `${data.reviewCount} Google reviews`);
                const statBox = document.querySelector('[data-target="204"]');
                if (statBox) statBox.setAttribute('data-target', data.reviewCount);
            }
        })
        .catch(() => {});

    updateLiveStatus();
    initDay();
    initWalkInWidget();
    setInterval(() => {
        updateLiveStatus();
        initWalkInWidget();
    }, 60000);
});
