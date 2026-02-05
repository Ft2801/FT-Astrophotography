

// --- Particle System Logic ---
const particleCanvas = document.getElementById('particles');
if (particleCanvas) {
    const ctx = particleCanvas.getContext('2d');
    let width, height;
    let particles = [];
    const particleCount = 60; // Lightweight count

    // Palette: Cyan, Purple, Blue
    const colors = ['#4a90e2', '#9b59b6', '#4a4eff'];

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        particleCanvas.width = width;
        particleCanvas.height = height;
    }

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.5; // Slow horizontal drift
            this.vy = (Math.random() - 0.5) * 0.5; // Slow vertical drift
            this.size = Math.random() * 6 + 4; // Larger (4-10px) for more visible blur
            this.color = colors[Math.floor(Math.random() * colors.length)];
            this.alpha = Math.random() * 0.5 + 0.2;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            // Wrap around screen
            if (this.x < 0) this.x = width;
            if (this.x > width) this.x = 0;
            if (this.y < 0) this.y = height;
            if (this.y > height) this.y = 0;
        }

        draw() {
            // Soft Particle using Radial Gradient
            ctx.globalAlpha = this.alpha;

            // Create gradient from center (white/color) to edges (transparent)
            const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
            gradient.addColorStop(0, this.color);
            gradient.addColorStop(0.1, this.color); // Tiny core
            gradient.addColorStop(1, 'rgba(0,0,0,0)'); // Fade out

            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.globalAlpha = 1.0;
        }
    }

    function initParticles() {
        resize();
        particles = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }

    function animateParticles() {
        ctx.clearRect(0, 0, width, height);
        // Optional: clear with specific color if needed, but transparent is fine for overlay
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        requestAnimationFrame(animateParticles);
    }

    window.addEventListener('resize', () => {
        resize();
        initParticles();
    });

    initParticles();
    animateParticles();
}


// --- Navbar Scrolled Logic ---
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});


// --- Lenis Smooth Scrolling ---
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);



// --- Single Page Application (SPA) Logic ---

function initPageAnimations() {
    // Add float-in class to main sections
    const sections = document.querySelectorAll('.section, .hero, .container > *');
    sections.forEach((el, index) => {
        // Only animate if not already animated/visible
        if (!el.classList.contains('float-in')) {
            el.style.animationDelay = `${index * 0.1}s`;
            el.classList.add('float-in');
        }
    });
}

// Initial Call
document.addEventListener('DOMContentLoaded', () => {
    initPageAnimations();
});

document.addEventListener('click', async (e) => {
    // Find closest anchor tag
    const link = e.target.closest('a');

    // Only intercept internal links, ignore hashes, download links, target blank
    if (!link) return;
    const href = link.getAttribute('href');

    // Safety checks
    if (!href || href.startsWith('mailto') || link.hasAttribute('download') || link.target === '_blank') return;
    // Don't exclude 'http' yet, check if it's external later

    // Parse URLs for robust comparison
    const linkUrl = new URL(link.href, window.location.origin);
    const currentUrl = new URL(window.location.href);

    // Check if it's a hash link on the same page
    if (linkUrl.pathname === currentUrl.pathname && linkUrl.search === currentUrl.search && linkUrl.hash) {
        e.preventDefault();
        const targetId = linkUrl.hash.substring(1);
        let targetElement = document.getElementById(targetId);

        if (targetElement) {
            // If it's the intro-section, scroll to the first card grid instead of the title
            if (targetId === 'intro-section') {
                const gridElement = targetElement.querySelector('.grid-3');
                if (gridElement) {
                    targetElement = gridElement;
                }
            }

            // Get navbar height for offset
            const navbar = document.querySelector('.navbar');
            const navbarHeight = navbar ? navbar.offsetHeight : 60;

            // Lenis Scroll
            lenis.scrollTo(targetElement, {
                offset: -navbarHeight - 20, // adjust offset
                duration: 1.5
            });
        }
        return;
    }

    // Ignore external links (now including absolute http/https links that aren't navigation)
    if (linkUrl.origin !== currentUrl.origin) return;

    // Check if it's a link to an asset (image/pdf)
    if (href.match(/\.(png|jpg|jpeg|gif|webp|pdf)$/i)) return;

    // Check strict file protocol - disable SPA fetch if local because of CORS
    if (window.location.protocol === 'file:') return;

    e.preventDefault();
    await navigateTo(href);
});

// Store last path to detect hash changes vs page changes
let lastPathname = window.location.pathname;

window.addEventListener('popstate', () => {
    const currentPathname = window.location.pathname;

    // If pathname hasn't changed (it's just a hash change), ignore SPA reload
    if (currentPathname === lastPathname) {
        return;
    }

    lastPathname = currentPathname;
    navigateTo(currentPathname, false);
});

async function navigateTo(url, pushState = true) {
    const mainContent = document.querySelector('#main-content');

    if (!mainContent) {
        // Fallback if structure is missing
        window.location.href = url;
        return;
    }

    // 1. Fade Out
    mainContent.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    mainContent.style.opacity = '0';
    mainContent.style.transform = 'translateY(20px)';

    // Wait for transition
    await new Promise(r => setTimeout(r, 300));

    try {
        // 2. Fetch
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');
        const text = await response.text();

        // 3. Parse and Swap
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, 'text/html');
        // Handle both full page and partial content if needed (but we aimed for full page files)
        const newContent = doc.querySelector('#main-content');

        if (!newContent) throw new Error('No #main-content in target page');

        if (pushState) {
            window.history.pushState({}, '', url);
            lastPathname = window.location.pathname; // Update tracker
        }

        // Update Title
        document.title = doc.title;

        // Replace content
        mainContent.innerHTML = newContent.innerHTML;

        // Scroll to top using Lenis
        if (typeof lenis !== 'undefined') {
            lenis.scrollTo(0, { immediate: true });
        } else {
            window.scrollTo(0, 0);
        }


        // 4. REFRESH LAYOUT: Correct relative paths for new depth
        if (window.renderHeader) window.renderHeader();
        if (window.renderFooter) window.renderFooter();

        // 4b. Update Active Links
        if (window.updateActiveLink) window.updateActiveLink();

        // 4c. Re-apply Translations (fix for SPA navigation)
        if (window.setLanguage) {
            const savedLang = localStorage.getItem('lang') || 'it';
            window.setLanguage(savedLang);
        }

        // 5. Fade In
        // Small delay to ensure DOM update is registered
        requestAnimationFrame(() => {
            mainContent.style.transition = 'none';
            mainContent.style.opacity = '0';
            mainContent.style.transform = 'translateY(20px)';

            requestAnimationFrame(() => {
                mainContent.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                mainContent.style.opacity = '1';
                mainContent.style.transform = 'translateY(0)';
                initPageAnimations();
            });
        });

    } catch (err) {
        console.warn('SPA Navigation failed, falling back to reload:', err);
        window.location.href = url;
    }
}
