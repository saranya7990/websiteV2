// Shared EN/DE helper, loaded after each page's own script.
// - Remembers the chosen language so every page opens in it.
// - Translates form placeholders (data-en-placeholder / data-de-placeholder).
// Each page's own [data-lang] handler still does the text switching.
(function () {
  var KEY = 'escLang';

  function saveLang(lang) {
    try { localStorage.setItem(KEY, lang); } catch (e) {}
  }
  function savedLang() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }
  function applyPlaceholders(lang) {
    document.querySelectorAll('[data-en-placeholder][data-de-placeholder]').forEach(function (el) {
      el.placeholder = el.getAttribute('data-' + lang + '-placeholder');
    });
  }

  var buttons = document.querySelectorAll('[data-lang]');
  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      saveLang(btn.dataset.lang);
      applyPlaceholders(btn.dataset.lang);
    });
  });

  var lang = savedLang();
  if (lang && lang !== 'en') {
    var target = document.querySelector('[data-lang="' + lang + '"]');
    if (target) target.click();
  }
})();
