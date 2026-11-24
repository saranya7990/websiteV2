(() => {
  // Mobile menu toggle
  document.getElementById('menu')?.addEventListener('click', () => {
    document.querySelector('.navrow nav')?.classList.toggle('open');
  });
  document.querySelectorAll('.navrow nav a').forEach(a => {
    a.addEventListener('click', () => document.querySelector('.navrow nav')?.classList.remove('open'));
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').replace('#', '');
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.replaceState(null, '', '#' + targetId);
      }
    });
  });

  // EN / DE Language toggle
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
