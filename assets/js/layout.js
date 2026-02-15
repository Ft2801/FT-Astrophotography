const siteConfig = {
    name: "FT-Astrophotography",
    root: "/",
};

function getPathPrefix() {
    // Robust check for pages directory, handling both slashes
    const path = window.location.pathname.replace(/\\/g, '/');
    return path.includes('/pages/') ? '../' : '';
}

const currentLang = 'en';

function renderHeader() {
    // Cleanup existing to preventing duplicates/stale links
    const old = document.querySelector('.navbar');
    if (old) old.remove();

    const prefix = getPathPrefix();

    const headerHTML = `
    <nav class="navbar">
        <div class="container nav-container">
            <a href="${prefix}index.html" class="logo ajax-link">FT-Astrophotography</a>
            
            <button class="hamburger" aria-label="Menu">
                <span class="hamburger-inner"></span>
            </button>

            <ul class="nav-links">
                <li><a href="${prefix}index.html" class="ajax-link">Home</a></li>
                <li><a href="${prefix}pages/gallery.html" class="ajax-link">Gallery</a></li>
                <li><a href="${prefix}pages/software.html" class="ajax-link">Software</a></li>
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

    const footerHTML = `
    <footer>
        <div class="container">
            <div class="footer-grid">
                <div class="footer-brand">
                    <h3>FT-Astrophotography</h3>
                    <p>Computer Engineering applied to Astronomy. Development of advanced technologies for scientific imaging.</p>
                </div>
                
                <div class="footer-links">
                    <h4>Navigation</h4>
                    <ul>
                        <li><a href="${prefix}index.html" class="ajax-link">Home</a></li>
                        <li><a href="${prefix}pages/gallery.html" class="ajax-link">Gallery</a></li>
                        <li><a href="${prefix}pages/software.html" class="ajax-link">Software</a></li>
                    </ul>
                </div>

                <div class="footer-links">
                    <h4>Connect</h4>
                    <ul>
                        <li><a href="https://github.com/Ft2801" target="_blank">GitHub</a></li>
                        <li><a href="https://ft2801.github.io/Portfolio" target="_blank">Portfolio</a></li>
                    </ul>
                </div>
            </div>

            <div class="footer-bottom">
                <p>© 2026 Fabio Tempera. All rights reserved.</p>
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
