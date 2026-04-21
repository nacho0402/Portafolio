/* ========================================
   PROJECT DETAIL - Animations & Lightbox
   ======================================== */

// Init scroll reveal for project page
function initProjectAnimations() {
    const animElements = document.querySelectorAll('.project-info-anim');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    animElements.forEach(el => observer.observe(el));
}

// Image lightbox on click
function initLightbox() {
    const galleryItems = document.querySelectorAll('.project-gallery-item img, .project-detail-image-main img');
    
    galleryItems.forEach(img => {
        img.addEventListener('click', () => {
            const lightbox = document.createElement('div');
            lightbox.className = 'project-lightbox';
            lightbox.innerHTML = `
                <div class="project-lightbox-backdrop"></div>
                <div class="project-lightbox-content">
                    <img src="${img.src}" alt="${img.alt}">
                    <button class="project-lightbox-close">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>
            `;
            document.body.appendChild(lightbox);
            
            requestAnimationFrame(() => lightbox.classList.add('active'));

            const close = () => {
                lightbox.classList.remove('active');
                setTimeout(() => lightbox.remove(), 400);
            };

            lightbox.querySelector('.project-lightbox-backdrop').addEventListener('click', close);
            lightbox.querySelector('.project-lightbox-close').addEventListener('click', close);
            document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); }, { once: true });
        });
    });
}

// Init
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    setTimeout(() => {
        initProjectAnimations();
        initLightbox();
    }, 100);
});

/* ========================================
   MOBILE MENU
   ======================================== */

function initMobileMenu() {
    const hamburger = document.getElementById('hamburgerBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    if (!hamburger || !mobileMenu) return;

    function toggleMenu() {
        const isOpen = mobileMenu.classList.contains('active');
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = isOpen ? '' : 'hidden';
    }

    function closeMenu() {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    }

    hamburger.addEventListener('click', toggleMenu);

    mobileMenu.querySelectorAll('.mobile-menu-link').forEach(link => {
        link.addEventListener('click', () => closeMenu());
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) closeMenu();
    });
}
