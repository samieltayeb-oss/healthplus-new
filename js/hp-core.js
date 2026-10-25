// HealthPlus Medical V3 — Core Interactive Engine
// Navigation, Accessible Modals, Physician Filter & Search, HIA Zero-PHI Form Guard

(function () {
  'use strict';

  /* ─── 1. Sticky Header Scroll Elevation ─── */
  const header = document.querySelector('.v3-header, .hp-navbar');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });
  }

  /* ─── 2. Mobile Navigation Drawer Toggle ─── */
  const mobileToggle = document.querySelector('.v3-mobile-toggle');
  const mobileDrawer = document.querySelector('.v3-mobile-drawer');
  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('is-open');
      mobileToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  /* ─── 3. Accessible Biography Modals ─── */
  window.openModal = function (id) {
    const modal = document.getElementById(id);
    if (modal) {
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    }
  };

  window.closeModal = function (id) {
    const modal = document.getElementById(id);
    if (modal) {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    }
  };

  document.addEventListener('click', (e) => {
    if (e.target && e.target.classList && e.target.classList.contains('v3-modal-backdrop')) {
      window.closeModal(e.target.id);
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.v3-modal-backdrop').forEach(m => {
        if (m.style.display !== 'none') window.closeModal(m.id);
      });
      if (mobileDrawer && mobileDrawer.classList.contains('is-open')) {
        mobileDrawer.classList.remove('is-open');
        if (mobileToggle) mobileToggle.setAttribute('aria-expanded', 'false');
      }
    }
  });

  /* ─── 4. Team Directory Category Filter & Search ─── */
  const filterBtns = document.querySelectorAll('[data-team-filter]');
  const searchInput = document.querySelector('[data-team-search]');

  function applyTeamFilters() {
    const activeBtn = document.querySelector('[data-team-filter].active');
    const activeCat = activeBtn ? activeBtn.getAttribute('data-team-filter') : 'all';
    const query = searchInput ? searchInput.value.trim().toLowerCase() : '';

    document.querySelectorAll('[data-team-card]').forEach(card => {
      const cat = card.getAttribute('data-category') || '';
      const searchBlob = (card.getAttribute('data-search') || '').toLowerCase();
      const catMatch = activeCat === 'all' || cat === activeCat;
      const queryMatch = !query || searchBlob.includes(query);
      card.style.display = (catMatch && queryMatch) ? '' : 'none';
    });

    document.querySelectorAll('[data-team-section]').forEach(sec => {
      const secCat = sec.getAttribute('data-team-section');
      const visibleInSec = sec.querySelectorAll('[data-team-card]:not([style*="display: none"])');
      const secCatMatch = activeCat === 'all' || activeCat === secCat;
      sec.style.display = (secCatMatch && visibleInSec.length > 0) ? '' : 'none';
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      applyTeamFilters();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', applyTeamFilters);
  }

  /* ─── 5. HIA Zero-PHI Form Safety Guard ─── */
  window.HealthPlusConfig = window.HealthPlusConfig || {};
  window.HealthPlusConfig.Forms = {
    endpoints: { contact: null, appointment: null, careers: null },
    defaultMethod: 'POST'
  };
})();
