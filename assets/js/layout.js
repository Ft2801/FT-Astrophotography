const siteConfig = {
    name: "Fabio Tempera",
    root: "/", 
};

function getPathPrefix() {
    // Robust check for pages directory, handling both slashes
    const path = window.location.pathname.replace(/\\/g, '/');
    return path.includes('/pages/') ? '../' : '';
}

function renderHeader() {
    // Cleanup existing to preventing duplicates/stale links
    const old = document.querySelector('.navbar');
    if(old) old.remove();

    const prefix = getPathPrefix();
    // If we are in root, prefix is empty. Link to pages/gallery.html
    // If we are in pages, prefix is ../. Link to ../pages/gallery.html -> root/pages/gallery.html (correct)
    
    const headerHTML = `
    <nav class="navbar">
        <div class="container nav-container">
            <a href="${prefix}index.html" class="logo ajax-link">Fabio Tempera</a>
            
            <button class="hamburger" aria-label="Menu">
                <span></span>
                <span></span>
                <span></span>
            </button>

            <ul class="nav-links">
                <li><a href="${prefix}index.html" class="ajax-link">Home</a></li>
                <li><a href="${prefix}pages/gallery.html" class="ajax-link">Galleria</a></li>
                <li><a href="${prefix}pages/software.html" class="ajax-link">Software</a></li>
                <li><a href="${prefix}pages/tutorials.html" class="ajax-link">Tutorial</a></li>
                <li><a href="${prefix}pages/about.html" class="ajax-link">La mia Storia</a></li>
                <li><a href="https://github.com/Ft2801" target="_blank">GitHub</a></li>
            </ul>
        </div>
    </nav>
    <div class="mobile-nav-overlay"></div>
    `;
    
    // Insert at start of body, but BEFORE main content if possible
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

        if(hamburger) {
            hamburger.addEventListener('click', toggleMenu);
        }
        
        if(overlay) {
            overlay.addEventListener('click', toggleMenu);
        }

        // Close menu when a link is clicked
        if(navLinks) {
             navLinks.querySelectorAll('a').forEach(link => {
                 link.addEventListener('click', () => {
                     if(navLinks.classList.contains('active')) toggleMenu();
                 });
             });
        }
    }, 50); // Small delay to ensure DOM insertion
}

function renderFooter() {
    // Cleanup existing
    const old = document.querySelector('footer');
    if(old) old.remove();

    const prefix = getPathPrefix();

    const footerHTML = `
    <footer>
        <div class="container">
            <div class="footer-grid">
                <div class="footer-brand">
                    <h3>Fabio Tempera</h3>
                    <p>Ingegneria Informatica applicata all'Astronomia. Sviluppo di tecnologie avanzate per l'imaging scientifico.</p>
                </div>
                
                <div class="footer-links">
                    <h4>Navigazione</h4>
                    <ul>
                        <li><a href="${prefix}index.html" class="ajax-link">Home</a></li>
                        <li><a href="${prefix}pages/gallery.html" class="ajax-link">Galleria</a></li>
                        <li><a href="${prefix}pages/about.html" class="ajax-link">La mia Storia</a></li>
                        <li><a href="${prefix}pages/software.html" class="ajax-link">Software TStar</a></li>
                        <li><a href="${prefix}pages/tutorials.html" class="ajax-link">Tutorials</a></li>
                    </ul>
                </div>

                <div class="footer-links">
                    <h4>Connettiti</h4>
                    <ul>
                        <li><a href="https://github.com/Ft2801" target="_blank">GitHub</a></li>
                        <li><a href="https://ft2801.github.io/Portfolio" target="_blank">Portfolio</a></li>
                        <li><a href="mailto:info@fabiotempera.it">Contatti</a></li>
                    </ul>
                </div>
            </div>

            <div class="footer-bottom">
                <p>&copy; 2026 Fabio Tempera. All rights reserved.</p>
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
        // Simple logic: check if href filename is in current path
        const filename = href.split('/').pop();
        
        // Remove active class first
        link.classList.remove('active');
        link.style.color = ''; // Cleanup old inline styles

        // Special case for Home
        if (filename === 'index.html') {
             if (currentPath.endsWith('index.html') || currentPath.endsWith('/') || !currentPath.endsWith('.html')) {
                 // Check if we are really in root for index
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
