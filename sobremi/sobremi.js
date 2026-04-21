/* ========================================
   ABOUT PAGE - JavaScript
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
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
