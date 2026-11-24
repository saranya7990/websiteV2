(() => {
  const pills = Array.from(document.querySelectorAll('.svc-pill'));
  const sections = Array.from(document.querySelectorAll('.svc-detail-section'));

  function setActivePill(id) {
    pills.forEach(pill => {
      const isMatch = pill.dataset.target === id;
      pill.classList.toggle('active', isMatch);
      pill.setAttribute('aria-current', isMatch ? 'true' : 'false');
    });
  }

  function highlightTarget(id) {
    const el = document.getElementById(id);
    if (!el) return;
    setActivePill(id);
    el.classList.remove('svc-targeted');
    void el.offsetWidth;
    el.classList.add('svc-targeted');
    setTimeout(() => el.classList.remove('svc-targeted'), 1800);
  }

  // Smooth scroll when clicking quick-nav pills
  pills.forEach(pill => {
    pill.addEventListener('click', e => {
      const id = pill.dataset.target;
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        history.replaceState(null, '', '#' + id);
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        highlightTarget(id);
      }
    });
  });

  // Track active section while scrolling
  if ('IntersectionObserver' in window && sections.length) {
    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length) {
          setActivePill(visible[0].target.id);
        }
      },
      { rootMargin: '-25% 0px -45% 0px', threshold: [0.15, 0.4, 0.7] }
    );
    sections.forEach(sec => observer.observe(sec));
  }

  // Handle arriving from homepage service click via URL hash
  function handleHash() {
    const hashId = window.location.hash.replace('#', '');
    if (hashId && document.getElementById(hashId)) {
      setTimeout(() => {
        document.getElementById(hashId).scrollIntoView({ behavior: 'smooth', block: 'start' });
        highlightTarget(hashId);
      }, 80);
    }
  }
  window.addEventListener('hashchange', handleHash);
  if (window.location.hash) handleHash();

  // Back to top
  document.getElementById('backToTop')?.addEventListener('click', e => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Mobile menu toggle
  document.getElementById('menu')?.addEventListener('click', () => {
    document.querySelector('.navrow nav')?.classList.toggle('open');
  });
  document.querySelectorAll('.navrow nav a').forEach(a => {
    a.addEventListener('click', () => document.querySelector('.navrow nav')?.classList.remove('open'));
  });

  // EN / DE language toggle
  document.querySelectorAll('[data-lang]').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      document.querySelectorAll('[data-lang]').forEach(x => x.classList.toggle('chosen', x === btn));
      document.documentElement.lang = lang;
      document.querySelectorAll('[data-en][data-de]').forEach(el => {
        el.innerHTML = el.dataset[lang];
      });
    });
  });

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
