// --- Custom Cursor Logic ---
const cursor = document.getElementById('cursor');

// Starfield Parallax Variables
let mouseX = 0;
let mouseY = 0;

// Mouse move listener
document.addEventListener('mousemove', (e) => {
    // Directly set style for performance and instant tracking
    if (cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    }

    // Update global mouse coordinates for parallax
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Hover effect (delegated)
document.addEventListener('mouseover', (e) => {
    if (!cursor) return;
    if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('.card')) {
        cursor.classList.add('hovered');
    } else {
        const isInteractive = e.target.closest('a') || e.target.closest('button') || e.target.closest('.card');
        if (!isInteractive) {
            cursor.classList.remove('hovered');
        }
    }
});

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


// --- Starfield Canvas Logic ---
const canvas = document.getElementById('starfield');
if (canvas) {
    const ctx = canvas.getContext('2d');

    let width, height;
    let stars = [];
    const starCount = 500; // Increased count

    // Subtle star colors: White, Pale Blue, Pale Orange
    const starColors = ['255, 255, 255', '220, 240, 255', '255, 230, 210'];

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    }

    class Star {
        constructor() {
            this.baseX = Math.random() * width;
            this.baseY = Math.random() * height;
            this.z = Math.random() * 1.5 + 0.5; // depth between 0.5 and 2.0
            this.size = Math.random() * 1.5;
            // Pick a random color
            this.color = starColors[Math.floor(Math.random() * starColors.length)];
        }
        update() {
            // Simple drift downwards
            this.baseY += 0.1 * this.z;
            if (this.baseY > height) {
                this.baseY = -10; // Start slightly above
                this.baseX = Math.random() * width;
            }
        }
        draw() {
            // Parallax Logic: Move stars opposite to mouse direction
            // Calculate offset from center
            const centerX = width / 2;
            const centerY = height / 2;

            // If mouse hasn't moved yet (0,0), assume center
            const mx = (mouseX === 0 && mouseY === 0) ? centerX : mouseX;
            const my = (mouseY === 0 && mouseY === 0) ? centerY : mouseY;

            // Mouse Parallax - Significantly reduced sensitivity (0.05 -> 0.01)
            const offsetX = (mx - centerX) * 0.01 * this.z;
            const offsetY = (my - centerY) * 0.01 * this.z;

            // Scroll Parallax - Create depth feeling during scroll
            const scrollY = window.scrollY;
            const scrollOffset = (scrollY % height) * 0.1 * this.z;

            let x = this.baseX - offsetX;
            let y = this.baseY - offsetY - scrollOffset;

            // Infinite vertical wrap for scrolling
            // Ensure y stays within visible canvas height for continuous background
            if (height > 0) { // Safety check
                y = ((y % height) + height) % height;
            }

            // Use the star's specific color
            ctx.fillStyle = `rgba(${this.color}, ${this.z / 2.5})`; // dimmer if further away
            ctx.beginPath();
            ctx.arc(x, y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function initStars() {
        resize();
        stars = [];
        for (let i = 0; i < starCount; i++) stars.push(new Star());
    }

    function animateStars() {
        ctx.clearRect(0, 0, width, height);
        stars.forEach(s => {
            s.update();
            s.draw();
        });
        requestAnimationFrame(animateStars);
    }

    window.addEventListener('resize', () => {
        resize();
        initStars();
    });

    initStars();
    animateStars();
}



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

            // Get navbar height
            const navbar = document.querySelector('.navbar');
            const navbarHeight = navbar ? navbar.offsetHeight : 60;
            const extraPadding = 180; // Stop even higher as requested

            // Calculate target position
            const elementRect = targetElement.getBoundingClientRect();
            const targetPos = elementRect.top + window.pageYOffset - navbarHeight - extraPadding;
            const startPos = window.pageYOffset;
            const distance = targetPos - startPos;
            const duration = 500; // Faster 500ms smooth scroll
            let start = null;

            function step(timestamp) {
                if (!start) start = timestamp;
                const progress = timestamp - start;
                const percentage = Math.min(progress / duration, 1);

                // Ease-in-out cubic
                const ease = percentage < 0.5
                    ? 4 * percentage * percentage * percentage
                    : 1 - Math.pow(-2 * percentage + 2, 3) / 2;

                window.scrollTo(0, startPos + distance * ease);

                if (progress < duration) {
                    window.requestAnimationFrame(step);
                } else {
                    document.documentElement.style.scrollBehavior = ''; // Restore CSS smooth scroll
                }
            }

            // Disable CSS smooth scroll to prevent conflict with JS manual scroll
            document.documentElement.style.scrollBehavior = 'auto';

            window.requestAnimationFrame(step);
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

        // Scroll to top
        window.scrollTo(0, 0);

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
