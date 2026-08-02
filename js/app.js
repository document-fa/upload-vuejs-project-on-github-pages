// Dark Mode Toggle
(function () {
    var themeToggle = document.getElementById('themeToggle');
    var html = document.documentElement;
    var storageKey = 'theme-preference';

    // Get saved theme or detect system preference
    function getThemePreference() {
        var stored = localStorage.getItem(storageKey);
        if (stored) return stored;
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    // Apply theme
    function setTheme(theme) {
        if (theme === 'dark') {
            html.setAttribute('data-theme', 'dark');
        } else {
            html.removeAttribute('data-theme');
        }
        localStorage.setItem(storageKey, theme);
    }

    // Initialize theme on load
    setTheme(getThemePreference());

    // Toggle on click
    themeToggle.addEventListener('click', function () {
        var current = html.getAttribute('data-theme');
        var next = current === 'dark' ? 'light' : 'dark';
        setTheme(next);
    });

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
        if (!localStorage.getItem(storageKey)) {
            setTheme(e.matches ? 'dark' : 'light');
        }
    });
})();

// Show/hide scroll to top button
window.addEventListener('scroll', function () {
    var btn = document.getElementById('scrollTopBtn');
    if (window.scrollY > 400) {
        btn.classList.add('visible');
    } else {
        btn.classList.remove('visible');
    }
});

// Smooth scroll for TOC links
document.querySelectorAll('.toc-list a').forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        var target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});