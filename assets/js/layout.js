const siteConfig = {
    name: "Fabio Tempera",
    root: "/",
};

function getPathPrefix() {
    // Robust check for pages directory, handling both slashes
    const path = window.location.pathname.replace(/\\/g, '/');
    return path.includes('/pages/') ? '../' : '';
}


// Language handling
let currentLang = 'it'; // Default

try {
    const saved = localStorage.getItem('lang');
    if (saved) currentLang = saved;
} catch (e) {
    console.warn('LocalStorage access denied', e);
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            // Check if it's an input button or normal element
            if (element.tagName === 'INPUT' && element.type === 'button') {
                element.value = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });

    // Dispatch event for other scripts
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: lang }));
}

function renderHeader() {
    // Cleanup existing to preventing duplicates/stale links
    const old = document.querySelector('.navbar');
    if (old) old.remove();

    const prefix = getPathPrefix();
    const t = translations[currentLang]; // Get current translations

    const headerHTML = `
    <nav class="navbar">
        <div class="container nav-container">
            <a href="${prefix}index.html" class="logo ajax-link">Fabio Tempera</a>
            
            <button class="hamburger" aria-label="Menu">
                <span class="hamburger-inner"></span>
            </button>

            <ul class="nav-links">
                <li><a href="${prefix}index.html" class="ajax-link" data-i18n="nav.home">${t["nav.home"]}</a></li>
                <li><a href="${prefix}pages/gallery.html" class="ajax-link" data-i18n="nav.gallery">${t["nav.gallery"]}</a></li>
                <li><a href="${prefix}pages/software.html" class="ajax-link" data-i18n="nav.software">${t["nav.software"]}</a></li>
                <li><a href="${prefix}pages/tutorials.html" class="ajax-link" data-i18n="nav.tutorials">${t["nav.tutorials"]}</a></li>
                <li><a href="${prefix}pages/about.html" class="ajax-link" data-i18n="nav.about">${t["nav.about"]}</a></li>
                <li><a href="https://github.com/Ft2801" target="_blank">GitHub</a></li>
            </ul>
        </div>
    </nav>
    <div class="mobile-nav-overlay"></div>
    `;

    // Insert at start of body
    const body = document.body;
    body.insertAdjacentHTML('afterbegin', headerHTML);

    // Initialize Hamburger Logic
    setTimeout(() => {
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        const overlay = document.querySelector('.mobile-nav-overlay');
        const links = document.querySelectorAll('.nav-links li');

        function toggleMenu() {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            overlay.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
        }

        if (hamburger) {
            hamburger.addEventListener('click', toggleMenu);
        }

        if (overlay) {
            overlay.addEventListener('click', toggleMenu);
        }

        // Close menu when a link is clicked
        if (navLinks) {
            navLinks.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    if (navLinks.classList.contains('active')) toggleMenu();
                });
            });
        }
    }, 50);
}

function renderFooter() {
    // Cleanup existing
    const old = document.querySelector('footer');
    if (old) old.remove();

    const prefix = getPathPrefix();
    const t = translations[currentLang];

    const footerHTML = `
    <footer>
        <div class="container">
            <div class="footer-grid">
                <div class="footer-brand">
                    <h3>Fabio Tempera</h3>
                    <p data-i18n="footer.brand.desc">${t["footer.brand.desc"]}</p>
                </div>
                
                <div class="footer-links">
                    <h4 data-i18n="footer.nav.title">${t["footer.nav.title"]}</h4>
                    <ul>
                        <li><a href="${prefix}index.html" class="ajax-link" data-i18n="nav.home">${t["nav.home"]}</a></li>
                        <li><a href="${prefix}pages/gallery.html" class="ajax-link" data-i18n="nav.gallery">${t["nav.gallery"]}</a></li>
                        <li><a href="${prefix}pages/about.html" class="ajax-link" data-i18n="nav.about">${t["nav.about"]}</a></li>
                        <li><a href="${prefix}pages/software.html" class="ajax-link" data-i18n="nav.software">${t["nav.software"]}</a></li>
                        <li><a href="${prefix}pages/tutorials.html" class="ajax-link" data-i18n="nav.tutorials">${t["nav.tutorials"]}</a></li>
                    </ul>
                </div>

                <div class="footer-links">
                    <h4 data-i18n="footer.connect.title">${t["footer.connect.title"]}</h4>
                    <ul>
                        <li><a href="https://github.com/Ft2801" target="_blank">GitHub</a></li>
                        <li><a href="https://ft2801.github.io/Portfolio" target="_blank">Portfolio</a></li>
                        <li><a href="mailto:info@fabiotempera.it">Contatti</a></li>
                    </ul>
                </div>
            </div>

            <div class="footer-bottom">
                <p data-i18n="footer.rights">${t["footer.rights"]}</p>
            </div>
        </div>
    </footer>
    `;

    document.body.insertAdjacentHTML('beforeend', footerHTML);
}

document.addEventListener('DOMContentLoaded', () => {
    // Initial Render
    renderHeader();
    renderFooter();

    updateActiveLink();

    // Language Toggle Listener
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const newLang = currentLang === 'it' ? 'en' : 'it';
            setLanguage(newLang);
        });
    }

    // Check if we need to apply language to static content
    if (typeof translations !== 'undefined') {
        setLanguage(currentLang);
    }
});

function updateActiveLink() {
    const currentPath = window.location.pathname.replace(/\\/g, '/');
    document.querySelectorAll('.nav-links a').forEach(link => {
        const href = link.getAttribute('href');
        const filename = href.split('/').pop();

        link.classList.remove('active');
        link.style.color = '';

        if (filename === 'index.html') {
            if (currentPath.endsWith('index.html') || currentPath.endsWith('/') || !currentPath.endsWith('.html')) {
                if (!currentPath.includes('/pages/')) {
                    link.classList.add('active');
                    return;
                }
            }
        }

        if (currentPath.includes(filename) && filename !== '') {
            link.classList.add('active');
        }
    });
}
