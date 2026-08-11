/* ========================================
   PROJECT DETAIL - Dynamic Data & Rendering
   ======================================== */

const PROJECTS = {
    retech: {
        title: 'ReTech',
        subtitle: 'Aplicación responsive para la gestión de la logística inversa aplicado en empresas tecnológicas con modelo de economía circular en Venezuela.',
        tags: ['Logística Inversa', 'Economía Circular', 'Full-Stack', 'Responsive'],
        mainImage: '../assets/proyecto1foto1.png',
        mainImageAlt: 'ReTech - Gestión de Logística Inversa',
        sections: [
            {
                heading: 'Descripción',
                text: 'ReTech es una aplicación responsive desarrollada para la gestión de la logística inversa en empresas tecnológicas con modelo de economía circular en Venezuela. Su propósito es facilitar el registro de productos devueltos, la clasificación, las piezas recuperadas y los envíos, mejorando la trazabilidad de la información y reduciendo la dependencia de métodos manuales.'
            },
            {
                heading: 'El Reto',
                text: 'Las empresas tecnológicas con modelo de economía circular en Venezuela enfrentaban dificultades significativas para gestionar el flujo inverso de productos devueltos. La falta de herramientas digitales adecuadas generaba procesos manuales ineficientes, pérdida de trazabilidad y dificultad en la clasificación y seguimiento de componentes recuperados.'
            },
            {
                heading: 'La Solución',
                text: 'Se diseñó y desarrolló una aplicación responsive funcional que facilita el registro, clasificación y seguimiento de los productos devueltos. Se implementó una metodología híbrida combinando los enfoques de Beck (1999), Powell (2001) y Kendall y Kendall (2005), definida en cinco fases: Planificación, Diseño, Codificación, Pruebas, y Desarrollo y documentación del software.'
            },
            {
                heading: 'Investigación',
                text: 'La investigación se sustentó de los aportes teóricos de Cecibel (2023), Loaiza (2023), Das y Pandey (2024), Gómez (2024), García y Moran (2019), entre otros. Con base al tipo de investigación, es de tipo descriptiva y proyectiva, con un diseño no experimental y de campo. La población comprendida estuvo conformada por tres (3) ingenieros industriales, dos (2) licenciados en ciencias ambientales y un (1) licenciado en administración de empresas. Para la recolección de datos se aplicó la técnica de entrevista semi-estructurada.'
            }
        ],
        meta: {
            rol: 'Desarrollador Full-Stack',
            anio: '2026',
            tipo: 'Aplicación Web Responsive'
        },
        tecnologias: ['HTML', 'CSS', 'JavaScript', 'PHP', 'phpMyAdmin'],
        highlights: [
            {
                icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>',
                title: 'Resultado Destacado',
                text: 'Aplicación funcional alojada en producción que mejora la trazabilidad y reduce la dependencia de métodos manuales en la gestión de logística inversa.'
            },
            {
                icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>',
                title: 'Oportunidad Comercial',
                text: 'Sistema escalable y listo para producción. Arquitectura disponible para licenciamiento comercial o implementación a medida.'
            }
        ],
        visitUrl: 'https://retech.iceiy.com',
        gallery: [
            { src: '../assets/proyecto1foto2.png', alt: 'ReTech - Captura 1' },
            { src: '../assets/proyecto1foto3.png', alt: 'ReTech - Captura 2' }
        ]
    },

    ijamtech: {
        title: 'IjamTech',
        subtitle: 'Plataforma web enfocada en el sector tecnológico y gaming, diseñada con una interfaz moderna y optimizada para ofrecer una experiencia de usuario inmersiva y de alto rendimiento.',
        tags: ['Desarrollo Web', 'Full-Stack', 'Gaming', 'Responsive'],
        mainImage: '../assets/proyecto2foto1.png',
        mainImageAlt: 'IjamTech - Plataforma Gaming',
        sections: [
            {
                heading: 'Descripción',
                text: 'IjamTech es una plataforma web responsive desarrollada para centralizar contenido y servicios del ecosistema tecnológico y gamer. Su propósito es brindar una interfaz visualmente impactante y fluida, gestionando de manera eficiente las sesiones de usuario y las conexiones a la base de datos para garantizar una navegación rápida y sin interrupciones, mejorando la interacción directa con la comunidad.'
            },
            {
                heading: 'El Reto',
                text: 'El mercado tecnológico actual exige plataformas que no solo sean funcionales, sino que transmitan la identidad visual del nicho gamer. El principal desafío fue construir una arquitectura robusta desde cero que soportara una interfaz gráfica atractiva (tema oscuro) sin sacrificar la velocidad de carga ni la capacidad de respuesta (responsiveness) en dispositivos móviles, resolviendo además la sincronización eficiente de datos en el servidor.'
            },
            {
                heading: 'La Solución',
                text: 'Se diseñó y desarrolló una plataforma full-stack aplicando las mejores prácticas de estructuración de código. Se implementó un frontend dinámico y adaptable, respaldado por un backend sólido para el control de sesiones y gestión de la base de datos. Esto resultó en un sistema altamente funcional, escalable y con una identidad de marca muy bien definida que conecta directamente con su público objetivo.'
            }
        ],
        meta: {
            rol: 'Desarrollador Full-Stack',
            anio: '2026',
            tipo: 'Plataforma Web Responsive'
        },
        tecnologias: ['HTML', 'CSS', 'JavaScript', 'PHP', 'phpMyAdmin'],
        highlights: [
            {
                icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>',
                title: 'Resultado Destacado',
                text: 'Plataforma alojada en producción con una gestión de base de datos eficiente y una interfaz gamer totalmente funcional y adaptable a cualquier pantalla.'
            }
        ],
        visitUrl: 'https://ignacioamutio.vercel.app',
        gallery: [
            { src: '../assets/proyecto2foto2.png', alt: 'IjamTech - Captura 1' },
            { src: '../assets/proyecto2foto3.png', alt: 'IjamTech - Captura 2' }
        ]
    }
};


/* ========================================
   RENDER PROJECT DATA
   ======================================== */

function getProjectId() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id') || 'retech';
}

function renderProject() {
    const id = getProjectId();
    const project = PROJECTS[id];
    if (!project) return;

    // Title & Subtitle
    document.getElementById('projectTitle').textContent = project.title;
    document.getElementById('projectSubtitle').textContent = project.subtitle;

    // Update page title & meta
    document.title = project.title + ' — Proyecto';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', project.subtitle);

    // Tags
    const tagsContainer = document.getElementById('projectTags');
    tagsContainer.innerHTML = project.tags.map(tag =>
        `<span class="project-tag">${tag}</span>`
    ).join('');

    // Main Image
    const mainImg = document.getElementById('projectMainImage');
    mainImg.src = project.mainImage;
    mainImg.alt = project.mainImageAlt;

    // Left Column - Info blocks
    const infoLeft = document.getElementById('projectInfoLeft');
    infoLeft.innerHTML = project.sections.map(section => `
        <div class="project-info-block project-info-anim">
            <h2 class="project-info-heading">${section.heading}</h2>
            <p class="project-info-text">${section.text}</p>
        </div>
    `).join('');

    // Right Column - Meta, Tech, Highlights, Visit Button
    const infoRight = document.getElementById('projectInfoRight');
    let rightHTML = '';

    // Meta card
    rightHTML += `
        <div class="project-meta-card project-info-anim">
            <div class="project-meta-item">
                <span class="project-meta-label">Rol</span>
                <span class="project-meta-value">${project.meta.rol}</span>
            </div>
            <div class="project-meta-divider"></div>
            <div class="project-meta-item">
                <span class="project-meta-label">Año</span>
                <span class="project-meta-value">${project.meta.anio}</span>
            </div>
            <div class="project-meta-divider"></div>
            <div class="project-meta-item">
                <span class="project-meta-label">Tipo</span>
                <span class="project-meta-value">${project.meta.tipo}</span>
            </div>
        </div>
    `;

    // Tech card
    rightHTML += `
        <div class="project-tech-card project-info-anim">
            <h3 class="project-tech-title">Tecnologías</h3>
            <div class="project-tech-tags">
                ${project.tecnologias.map(tech =>
                    `<span class="project-tech-tag"><span class="project-tech-dot"></span>${tech}</span>`
                ).join('')}
            </div>
        </div>
    `;

    // Highlight cards
    project.highlights.forEach(hl => {
        rightHTML += `
            <div class="project-highlight-card project-info-anim">
                <div class="project-highlight-icon">${hl.icon}</div>
                <div class="project-highlight-text">
                    <h4>${hl.title}</h4>
                    <p>${hl.text}</p>
                </div>
            </div>
        `;
    });

    // Visit button (only if URL exists)
    if (project.visitUrl) {
        rightHTML += `
            <a href="${project.visitUrl}" target="_blank" rel="noopener noreferrer" class="project-visit-btn project-info-anim">
                <span class="project-visit-btn-text">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Visitar Proyecto en Vivo
                </span>
            </a>
        `;
    }

    infoRight.innerHTML = rightHTML;

    // Gallery
    const galleryGrid = document.getElementById('projectGallery');
    galleryGrid.innerHTML = project.gallery.map(img => `
        <div class="project-gallery-item project-info-anim">
            <img src="${img.src}" alt="${img.alt}">
        </div>
    `).join('');
}


/* ========================================
   ANIMATIONS & LIGHTBOX
   ======================================== */

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


/* ========================================
   INIT
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
    renderProject();
    initMobileMenu();
    setTimeout(() => {
        initProjectAnimations();
        initLightbox();
    }, 100);
});
