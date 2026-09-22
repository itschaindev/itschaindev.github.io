/* Light / dark theme toggle.
   The page follows the system setting until the visitor clicks the toggle.
   The choice is stored in localStorage and applied before first paint by
   the inline script in _includes/head.html. Choosing the theme that matches
   the system setting again clears the override so the site follows the system. */
(function () {
  var root = document.documentElement;
  var toggle = document.querySelector('[data-theme-toggle]');
  if (!toggle) { return; }

  var media = window.matchMedia('(prefers-color-scheme: dark)');

  function systemTheme() { return media.matches ? 'dark' : 'light'; }
  function currentTheme() { return root.getAttribute('data-theme') || systemTheme(); }

  function updateLabel() {
    var next = currentTheme() === 'dark' ? 'light' : 'dark';
    toggle.setAttribute('aria-label', 'Switch to ' + next + ' theme');
  }

  toggle.addEventListener('click', function () {
    var next = currentTheme() === 'dark' ? 'light' : 'dark';
    try {
      if (next === systemTheme()) {
        root.removeAttribute('data-theme');
        localStorage.removeItem('theme');
      } else {
        root.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
      }
    } catch (e) {
      root.setAttribute('data-theme', next);
    }
    updateLabel();
  });

  if (media.addEventListener) { media.addEventListener('change', updateLabel); }
  updateLabel();
})();
