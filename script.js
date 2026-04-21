/* ========================================
   PORTAFOLIO - Main Script
   Full Light Mode + Impressive Animations
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
    initPageLoader();
});

function initAllSystems() {
    initCustomCursor();
    initBlob();
    initSplitText();
    initWordReveal();
    initScrollReveal();
    initScrollProgress();
    initMagnetic();
    initTilt();
    initParallax();
    initCountUp();
    initSoundToggle();
    initFooterTime();
    initSmoothScroll();
    initNavScroll();
    initMobileMenu();
}

/* ========================================
   PAGE LOADER
   ======================================== */

function initPageLoader() {
    const loader = document.getElementById('pageLoader');
    let initialized = false;

    function startSystems() {
        if (initialized) return;
        initialized = true;
        loader.classList.add('hidden');
        setTimeout(() => {
            initAllSystems();
        }, 300);
    }

    // Wait for everything to load, then reveal
    window.addEventListener('load', () => {
        setTimeout(startSystems, 2200);
    });

    // Fallback if load takes too long
    setTimeout(startSystems, 4000);
}

/* ========================================
   CUSTOM CURSOR (Enhanced)
   ======================================== */

function initCustomCursor() {
    const dot = document.getElementById('cursorDot');
    const outline = document.getElementById('cursorOutline');

    if (!dot || !outline || window.innerWidth <= 768) return;

    let mouseX = -100, mouseY = -100;
    let outlineX = -100, outlineY = -100;
    let isVisible = false;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        if (!isVisible) {
            isVisible = true;
            dot.style.opacity = '1';
            outline.style.opacity = '1';
        }

        dot.style.left = mouseX + 'px';
        dot.style.top = mouseY + 'px';
    });

    function animateOutline() {
        const dx = mouseX - outlineX;
        const dy = mouseY - outlineY;
        outlineX += dx * 0.12;
        outlineY += dy * 0.12;
        outline.style.left = outlineX + 'px';
        outline.style.top = outlineY + 'px';
        requestAnimationFrame(animateOutline);
    }
    animateOutline();

    // Hover effect
    const hoverTargets = document.querySelectorAll(
        'a, button, .sound-toggle, .social-link, .btn-contact, .btn-contact-arrow, .honors-badge, .project-card, .btn-accent, .btn-accent-arrow, .footer-link, .footer-social-link, .magnetic, .marquee-item'
    );

    hoverTargets.forEach(el => {
        el.addEventListener('mouseenter', () => {
            dot.classList.add('hover');
            outline.classList.add('hover');
        });
        el.addEventListener('mouseleave', () => {
            dot.classList.remove('hover');
            outline.classList.remove('hover');
        });
    });

    // Click effect
    document.addEventListener('mousedown', () => dot.classList.add('click'));
    document.addEventListener('mouseup', () => dot.classList.remove('click'));

    // Hide on leave
    document.addEventListener('mouseleave', () => {
        dot.style.opacity = '0';
        outline.style.opacity = '0';
        isVisible = false;
    });
    document.addEventListener('mouseenter', () => {
        dot.style.opacity = '1';
        outline.style.opacity = '1';
        isVisible = true;
    });
}

/* ========================================
   ANIMATED BLOB (Canvas - Enhanced)
   ======================================== */

function initBlob() {
    const canvas = document.getElementById('blobCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    let width, height;
    let mouseX = 0.5, mouseY = 0.5;
    let targetMouseX = 0.5, targetMouseY = 0.5;
    let time = 0;

    function resize() {
        const rect = canvas.getBoundingClientRect();
        width = rect.width;
        height = rect.height;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    resize();
    window.addEventListener('resize', resize);

    document.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        targetMouseX = (e.clientX - rect.left) / width;
        targetMouseY = (e.clientY - rect.top) / height;
    });

    function drawBlob(cx, cy, radius, t, detail) {
        const points = detail || 150;
        const angleStep = (Math.PI * 2) / points;

        ctx.beginPath();
        for (let i = 0; i <= points; i++) {
            const angle = i * angleStep;
            const n1 = Math.sin(angle * 3 + t * 0.7) * 0.12;
            const n2 = Math.cos(angle * 5 + t * 1.1) * 0.07;
            const n3 = Math.sin(angle * 7 + t * 0.4) * 0.04;
            const n4 = Math.cos(angle * 2 + t * 1.6) * 0.06;
            const n5 = Math.sin(angle * 11 + t * 0.3) * 0.02;

            const mx = (mouseX - 0.5) * 0.18;
            const my = (mouseY - 0.5) * 0.18;
            const mouseInfluence = Math.sin(angle + t) * mx + Math.cos(angle + t) * my;

            const breathing = Math.sin(t * 0.5) * 0.03;

            const r = radius * (1 + n1 + n2 + n3 + n4 + n5 + mouseInfluence + breathing);
            const x = cx + Math.cos(angle) * r;
            const y = cy + Math.sin(angle) * r;

            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.closePath();
    }

    function render() {
        time += 0.006;

        // Smooth mouse follow
        mouseX += (targetMouseX - mouseX) * 0.05;
        mouseY += (targetMouseY - mouseY) * 0.05;

        ctx.clearRect(0, 0, width, height);

        const cx = width / 2;
        const cy = height / 2;
        const baseRadius = Math.min(width, height) * 0.33;

        // Outer glow
        const glowGrad = ctx.createRadialGradient(cx, cy, baseRadius * 0.8, cx, cy, baseRadius * 1.5);
        glowGrad.addColorStop(0, 'hsla(0, 0%, 70%, 0.08)');
        glowGrad.addColorStop(1, 'hsla(0, 0%, 70%, 0)');
        drawBlob(cx, cy, baseRadius * 1.3, time * 0.5, 80);
        ctx.fillStyle = glowGrad;
        ctx.fill();

        // Main blob - grayscale
        const light1 = 55 + Math.sin(time * 0.3) * 10;
        const light2 = 65 + Math.sin(time * 0.5) * 8;
        const light3 = 75 + Math.cos(time * 0.4) * 8;
        const light4 = 45 + Math.sin(time * 0.6) * 10;

        const gradient = ctx.createRadialGradient(
            cx + Math.sin(time * 0.8) * 40, cy + Math.cos(time * 0.6) * 30,
            baseRadius * 0.05, cx, cy, baseRadius * 1.2
        );
        gradient.addColorStop(0, `hsla(0, 0%, ${light1}%, 0.95)`);
        gradient.addColorStop(0.25, `hsla(0, 0%, ${light2}%, 0.75)`);
        gradient.addColorStop(0.55, `hsla(0, 0%, ${light3}%, 0.55)`);
        gradient.addColorStop(0.85, `hsla(0, 0%, ${light4}%, 0.25)`);
        gradient.addColorStop(1, 'hsla(0, 0%, 100%, 0)');

        drawBlob(cx, cy, baseRadius, time);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Inner highlight - grayscale
        const innerLight = 80 + Math.sin(time * 0.7) * 8;
        drawBlob(cx, cy, baseRadius * 0.7, time * 1.4, 100);
        const innerGrad = ctx.createRadialGradient(
            cx + Math.cos(time * 0.6) * 25, cy + Math.sin(time * 0.5) * 20,
            0, cx, cy, baseRadius * 0.75
        );
        innerGrad.addColorStop(0, `hsla(0, 0%, ${innerLight}%, 0.55)`);
        innerGrad.addColorStop(0.4, `hsla(0, 0%, ${innerLight - 10}%, 0.3)`);
        innerGrad.addColorStop(1, 'hsla(0, 0%, 100%, 0)');
        ctx.fillStyle = innerGrad;
        ctx.fill();

        // Glass specular
        drawBlob(cx - baseRadius * 0.18, cy - baseRadius * 0.22, baseRadius * 0.35, time * 0.8, 60);
        const specGrad = ctx.createRadialGradient(
            cx - baseRadius * 0.18, cy - baseRadius * 0.22, 0,
            cx - baseRadius * 0.18, cy - baseRadius * 0.22, baseRadius * 0.4
        );
        specGrad.addColorStop(0, 'hsla(0, 0%, 100%, 0.45)');
        specGrad.addColorStop(0.5, 'hsla(0, 0%, 100%, 0.1)');
        specGrad.addColorStop(1, 'hsla(0, 0%, 100%, 0)');
        ctx.fillStyle = specGrad;
        ctx.fill();

        requestAnimationFrame(render);
    }

    render();
}

/* ========================================
   SPLIT TEXT - Character Animation
   ======================================== */

function initSplitText() {
    const lines = document.querySelectorAll('.title-line-3d');
    let globalCharIndex = 0;

    lines.forEach((line, lineIndex) => {
        const text = line.getAttribute('data-text');
        const isLast = lineIndex === lines.length - 1;

        [...text].forEach((char) => {
            const letterEl = document.createElement('span');
            letterEl.classList.add('letter-3d');

            if (char === ' ') {
                letterEl.classList.add('space-letter');
                letterEl.innerHTML = '&nbsp;';
            } else {
                letterEl.textContent = char;
            }

            // Each letter gets its own unique timing
            const floatDuration = 3.5 + Math.random() * 4.5;
            const entryDelay = 0.5 + globalCharIndex * 0.025;
            // Float starts exactly when this letter's entry animation ends
            const entryEndTime = entryDelay + 0.8;

            letterEl.style.setProperty('--float-duration', floatDuration + 's');
            letterEl.style.setProperty('--entry-delay', entryDelay + 's');
            letterEl.style.setProperty('--entry-end-time', entryEndTime + 's');

            line.appendChild(letterEl);
            globalCharIndex++;
        });
    });

    // Single trigger — both entry + float run via CSS with no class swap
    const allLetters = document.querySelectorAll('.letter-3d');
    setTimeout(() => {
        allLetters.forEach(l => l.classList.add('animate'));
    }, 100);

    // Animate greeting
    const greeting = document.getElementById('heroGreeting');
    if (greeting) {
        setTimeout(() => greeting.classList.add('animate'), 500);
    }
}

/* ========================================
   WORD REVEAL - About Text Animation
   ======================================== */

function initWordReveal() {
    const aboutText = document.getElementById('aboutText');
    if (!aboutText) return;

    const html = aboutText.innerHTML;
    // Split into words while preserving <em> tags
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;

    let wordIndex = 0;
    const outputHTML = [];

    function processNode(node) {
        if (node.nodeType === Node.TEXT_NODE) {
            const words = node.textContent.split(/(\s+)/);
            words.forEach(word => {
                if (word.trim() === '') {
                    outputHTML.push(word);
                } else {
                    outputHTML.push(`<span class="about-word" style="transition-delay:${wordIndex * 0.04}s">${word}</span>`);
                    wordIndex++;
                }
            });
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            outputHTML.push(`<${node.tagName.toLowerCase()}>`);
            node.childNodes.forEach(child => processNode(child));
            outputHTML.push(`</${node.tagName.toLowerCase()}>`);
        }
    }

    tempDiv.childNodes.forEach(child => processNode(child));
    aboutText.innerHTML = outputHTML.join('');
}

/* ========================================
   SCROLL REVEAL (IntersectionObserver)
   ======================================== */

function initScrollReveal() {
    const revealElements = document.querySelectorAll('[data-reveal]');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                // Trigger word reveals inside about text
                if (entry.target.closest('#about') || entry.target.id === 'aboutText') {
                    const words = document.querySelectorAll('.about-word');
                    words.forEach(w => w.classList.add('visible'));

                    // Highlight <em> tags
                    setTimeout(() => {
                        document.querySelectorAll('.about-text em').forEach(em => {
                            em.classList.add('highlight');
                        });
                    }, 800);
                }
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

    revealElements.forEach(el => observer.observe(el));

    // About text word reveal on its own observer
    const aboutText = document.getElementById('aboutText');
    if (aboutText) {
        const aboutObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const words = aboutText.querySelectorAll('.about-word');
                    words.forEach(w => w.classList.add('visible'));
                    setTimeout(() => {
                        aboutText.querySelectorAll('em').forEach(em => em.classList.add('highlight'));
                    }, 800);
                }
            });
        }, { threshold: 0.2 });
        aboutObserver.observe(aboutText);
    }
}

/* ========================================
   SCROLL PROGRESS & NAV STATE
   ======================================== */

function initScrollProgress() {
    const dots = document.querySelectorAll('.progress-dots .dot');
    const progressFill = document.getElementById('progressFill');
    const navLinks = document.querySelectorAll('.nav-link');
    const scrollIndicator = document.querySelector('.scroll-indicator');
    const sectionIds = ['hero', 'about', 'works'];

    function update() {
        const scrollY = window.scrollY + window.innerHeight / 3;
        let currentIndex = 0;

        sectionIds.forEach((id, i) => {
            const section = document.getElementById(id);
            if (section) {
                const top = section.offsetTop;
                const bottom = top + section.offsetHeight;
                if (scrollY >= top && scrollY < bottom) {
                    currentIndex = i;
                }
            }
        });

        navLinks.forEach(link => {
            link.classList.toggle('active', link.dataset.section === sectionIds[currentIndex]);
        });

        dots.forEach((dot, i) => dot.classList.toggle('active', i === currentIndex));

        if (progressFill) {
            progressFill.style.height = ((currentIndex + 1) / sectionIds.length * 100) + '%';
        }

        // Fade scroll indicator
        if (scrollIndicator) {
            const fade = Math.max(0, 1 - window.scrollY / 300);
            scrollIndicator.style.opacity = fade;
            scrollIndicator.style.transform = `translateY(${(1 - fade) * 15}px)`;
        }
    }

    window.addEventListener('scroll', update, { passive: true });
    update();
}

/* ========================================
   MAGNETIC EFFECT
   ======================================== */

function initMagnetic() {
    if (window.innerWidth <= 768) return;

    const magnetics = document.querySelectorAll('.magnetic');

    magnetics.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });

        el.addEventListener('mouseleave', () => {
            el.style.transform = 'translate(0, 0)';
        });
    });
}

/* ========================================
   TILT EFFECT ON PROJECT CARDS
   ======================================== */

function initTilt() {
    if (window.innerWidth <= 768) return;

    const cards = document.querySelectorAll('[data-tilt]');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;

            card.style.transform = `
                perspective(1000px)
                rotateY(${x * 8}deg)
                rotateX(${-y * 8}deg)
                translateY(-12px)
                scale(1.02)
            `;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
}

/* ========================================
   PARALLAX EFFECT
   ======================================== */

function initParallax() {
    if (window.innerWidth <= 768) return;

    const elements = document.querySelectorAll('[data-parallax]');

    window.addEventListener('mousemove', (e) => {
        const mx = (e.clientX / window.innerWidth - 0.5) * 2;
        const my = (e.clientY / window.innerHeight - 0.5) * 2;

        elements.forEach(el => {
            const speed = parseFloat(el.dataset.parallax) || 0.05;
            const x = mx * speed * 100;
            const y = my * speed * 100;
            el.style.transform = `translate(${x}px, ${y}px)`;
        });
    });
}

/* ========================================
   COUNT UP ANIMATION
   ======================================== */

function initCountUp() {
    const counters = document.querySelectorAll('.stat-number[data-count]');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.count, 10);
                animateCount(el, 0, target, 2200);
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}

function animateCount(el, start, end, duration) {
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 4); // ease-out quart
        el.textContent = Math.round(start + (end - start) * eased);
        if (progress < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
}

/* ========================================
   SOUND TOGGLE
   ======================================== */

function initSoundToggle() {
    const toggle = document.getElementById('soundToggle');
    if (!toggle) return;

    let isPlaying = true;

    toggle.addEventListener('click', () => {
        isPlaying = !isPlaying;
        toggle.querySelectorAll('.bar').forEach(bar => {
            bar.style.animationPlayState = isPlaying ? 'running' : 'paused';
        });
    });
}

/* ========================================
   FOOTER TIME
   ======================================== */

function initFooterTime() {
    const timeEl = document.getElementById('footerTime');
    if (!timeEl) return;

    function updateTime() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const offset = -now.getTimezoneOffset() / 60;
        const sign = offset >= 0 ? '+' : '';
        timeEl.textContent = `UTC${sign}${offset} · ${hours}:${minutes}`;
    }

    updateTime();
    setInterval(updateTime, 30000);
}

/* ========================================
   SMOOTH SCROLL
   ======================================== */

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId === '#') return;
            const targetEl = document.querySelector(targetId);
            if (targetEl) {
                e.preventDefault();
                targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

/* ========================================
   NAV SCROLL EFFECT (blur bg)
   ======================================== */

function initNavScroll() {
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });
}

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

        if (!isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }

    function closeMenu() {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    }

    hamburger.addEventListener('click', toggleMenu);

    // Close menu when clicking a link
    const menuLinks = mobileMenu.querySelectorAll('.mobile-menu-link');
    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');

            // If it's a hash link (same page), handle smooth scroll
            if (href.startsWith('#')) {
                e.preventDefault();
                closeMenu();

                // Small delay to let menu close animation play
                setTimeout(() => {
                    const target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }, 300);
            } else {
                // External link - just close menu
                closeMenu();
            }
        });
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
            closeMenu();
        }
    });
}
