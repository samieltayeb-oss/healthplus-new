// HealthPlus Medical V2 — Core JavaScript Engine
// Scroll Reveals, Accordion, Tabs, Navbar, Smooth UX

(function () {
    'use strict';

    /* ─── Navbar Scroll State ─── */
    const navbar = document.querySelector('.hp-navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            navbar.classList.toggle('scrolled', window.scrollY > 40);
        }, { passive: true });
    }

    /* ─── Mobile Nav Toggle ─── */
    const hamburger = document.querySelector('.nav-hamburger');
    const navLinks  = document.querySelector('.nav-links');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            const open = navLinks.classList.toggle('nav-open');
            hamburger.setAttribute('aria-expanded', open);
        });
    }

    // ==========================================
    // Modals
    // ==========================================
    
    window.openModal = function(id) {
        const modal = document.getElementById(id);
        if (modal) {
            modal.style.display = 'flex';
            // trigger reflow
            void modal.offsetWidth;
            modal.classList.add('is-open');
            document.body.style.overflow = 'hidden';
        }
    };

    window.closeModal = function(id) {
        const modal = document.getElementById(id);
        if (modal) {
            modal.classList.remove('is-open');
            setTimeout(() => {
                modal.style.display = 'none';
                document.body.style.overflow = '';
            }, 300); // matches transition
        }
    };

    // Close modal on outside click
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('hp-modal')) {
            window.closeModal(e.target.id);
        }
    });

    // Close modal on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const openModal = document.querySelector('.hp-modal.is-open');
            if (openModal) {
                window.closeModal(openModal.id);
            }
        }
    });

    /* ─── Scroll Reveal (IntersectionObserver) ─── */
    const revealEls = document.querySelectorAll('.reveal');
    if (revealEls.length) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
        revealEls.forEach(el => observer.observe(el));
    }

    /* ─── Accordion / FAQ ─── */
    document.querySelectorAll('.accordion-trigger').forEach(trigger => {
        trigger.addEventListener('click', () => {
            const expanded = trigger.getAttribute('aria-expanded') === 'true';
            // Close all
            document.querySelectorAll('.accordion-trigger').forEach(t => {
                t.setAttribute('aria-expanded', 'false');
                const c = t.nextElementSibling;
                if (c) c.classList.remove('open');
            });
            // Open clicked
            if (!expanded) {
                trigger.setAttribute('aria-expanded', 'true');
                const content = trigger.nextElementSibling;
                if (content) content.classList.add('open');
            }
        });
    });

    /* ─── Tabs ─── */
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const tabGroup = btn.closest('.tabs-container');
            if (!tabGroup) return;
            tabGroup.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            tabGroup.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
            btn.classList.add('active');
            const panel = tabGroup.querySelector(`#${btn.dataset.tab}`);
            if (panel) panel.classList.add('active');
        });
    });

    /* ─── Animated Counters ─── */
    function animateCounter(el) {
        const target = parseInt(el.dataset.target, 10);
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        const tick = () => {
            current = Math.min(current + step, target);
            el.textContent = Math.floor(current).toLocaleString() + (el.dataset.suffix || '');
            if (current < target) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
    }

    const counterEls = document.querySelectorAll('[data-target]');
    if (counterEls.length) {
        const counterObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        counterEls.forEach(el => counterObserver.observe(el));
    }

    /* ─── Smooth scroll for anchor links ─── */
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

})();
