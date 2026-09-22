/* Light / dark toggle. The site is light by default; clicking the button switches to dark
   and stores the choice in localStorage. The inline script in _includes/head.liquid
   re-applies a saved dark choice before first paint. */
(function () {
  var root = document.documentElement;
  var toggle = document.querySelector('[data-theme-toggle]');
  if (!toggle) { return; }

  function isDark() { return root.getAttribute('data-theme') === 'dark'; }

  function updateLabel() {
    toggle.setAttribute('aria-label', isDark() ? 'Switch to light theme' : 'Switch to dark theme');
  }

  toggle.addEventListener('click', function () {
    if (isDark()) {
      root.removeAttribute('data-theme');
    } else {
      root.setAttribute('data-theme', 'dark');
    }
    try {
      if (isDark()) { localStorage.setItem('theme', 'dark'); } else { localStorage.removeItem('theme'); }
    } catch (e) { /* storage unavailable: the choice lasts for this page only */ }
    updateLabel();
  });

  updateLabel();
})();
