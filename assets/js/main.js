
// --- Preloader Logic ---
function hidePreloader() {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.classList.add('hidden');
    }
}

if (document.readyState === 'complete') {
    hidePreloader();
} else {
    window.addEventListener('load', hidePreloader);
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
    // Add fade-in class to main sections
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
    const preloader = document.getElementById('preloader');
    
    // Show preloader
    if (preloader) preloader.classList.remove('hidden');

    // 1. GLOBAL Fade Out (Body dissolve)
    document.body.style.transition = 'opacity 0.4s ease';
    document.body.style.opacity = '0';

    // Wait for transition
    await new Promise(r => setTimeout(r, 400));

    try {
        // 2. Fetch
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');
        const text = await response.text();

        // 3. Parse and Swap
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, 'text/html');
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

        // 4. REFRESH LAYOUT
        if (window.renderHeader) window.renderHeader();
        if (window.renderFooter) window.renderFooter();
        if (window.updateActiveLink) window.updateActiveLink();

        // 5. GLOBAL Fade In (Cinematic appearance)
        requestAnimationFrame(() => {
            document.body.style.transition = 'none';
            document.body.style.opacity = '0';

            requestAnimationFrame(() => {
                document.body.style.transition = 'opacity 0.6s ease';
                document.body.style.opacity = '1';
                initPageAnimations();
                // Hide preloader after content is shown
                setTimeout(() => {
                    if (preloader) preloader.classList.add('hidden');
                }, 300);
            });
        });

    } catch (err) {
        console.warn('SPA Navigation failed, falling back to reload:', err);
        if (preloader) preloader.classList.add('hidden');
        window.location.href = url;
    }
}
