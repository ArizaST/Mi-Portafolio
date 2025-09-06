/**
 * ====================================================
 * SISTEMA DE IDIOMAS COMPLETO
 * Portafolio Stiven Ariza - Español ↔ Inglés
 * Versión Final - Limpia y Optimizada
 * ====================================================
 */

// ====================================
// CONFIGURACIÓN GLOBAL
// ====================================

let currentLanguage = 'es';

// ====================================
// BASE DE DATOS DE TRADUCCIONES
// ====================================

// NAVEGACIÓN
const navigationTranslations = {
    es: {
        home: 'Inicio',
        skills: 'Habilidades',
        projects: 'Proyectos',
        about: 'Sobre Mí',
        contact: 'Contacto'
    },
    en: {
        home: 'Home',
        skills: 'Skills',
        projects: 'Projects',
        about: 'About Me',
        contact: 'Contact'
    }
};

// SECCIÓN HERO
const heroTranslations = {
    es: {
        subtitle: 'Ingeniero Multimedia',
        title: 'Soluciones Digitales y Excelencia 3D',
        description: 'Como Ingeniero Multimedia, combino creatividad y tecnología para desarrollar sitios web únicos y modelos 3D que cobran vida. Cada proyecto es una oportunidad de innovar y crear algo extraordinario.',
        btnWork: 'Ver Mi Trabajo',
        btnCV: 'Descargar CV'
    },
    en: {
        subtitle: 'Multimedia Engineer',
        title: 'Digital Solutions & 3D Excellence',
        description: 'As a Multimedia Engineer, I combine creativity and technology to develop unique websites and 3D models that come to life. Each project is an opportunity to innovate and create something extraordinary.',
        btnWork: 'View My Work',
        btnCV: 'Download CV'
    }
};

// SECCIÓN SKILLS
const skillsTranslations = {
    es: {
        subtitle: 'Habilidades',
        title: 'Stack Tecnológico y Especialidades',
        description: 'Dominio técnico en múltiples disciplinas del desarrollo multimedia y diseño digital',
        categories: ['Desarrollo Web', 'Modelado 3D', 'Diseño UI/UX'],
        individualSkills: {
            'Animation': 'Animación',
            'Rendering': 'Renderizado', 
            'Texturing': 'Texturizado',
            'UX Research': 'Investigación UX',
            'Prototyping': 'Prototipado',
            'UI/UX Design': 'Diseño UI/UX',
            'Animación': 'Animación',
            'Renderizado': 'Renderizado',
            'Texturizado': 'Texturizado',
            'Investigación UX': 'Investigación UX',
            'Prototipado': 'Prototipado',
            'Diseño UI/UX': 'Diseño UI/UX',
            'Wireframing': 'Wireframing',
            'Testing': 'Testing'
        }
    },
    en: {
        subtitle: 'Skills',
        title: 'Tech Stack & Specialties',
        description: 'Technical mastery in multiple disciplines of multimedia development and digital design',
        categories: ['Web Development', '3D Modeling', 'UI/UX Design'],
        individualSkills: {
            'Animación': 'Animation',
            'Renderizado': 'Rendering',
            'Texturizado': 'Texturing', 
            'Investigación UX': 'UX Research',
            'Prototipado': 'Prototyping',
            'Diseño UI/UX': 'UI/UX Design',
            'Animation': 'Animation',
            'Rendering': 'Rendering',
            'Texturing': 'Texturing',
            'UX Research': 'UX Research',
            'Prototyping': 'Prototyping',
            'UI/UX Design': 'UI/UX Design',
            'Wireframing': 'Wireframing',
            'Testing': 'Testing'
        }
    }
};

// SECCIÓN PROYECTOS
const projectsTranslations = {
    es: {
        subtitle: 'Portfolio',
        title: 'Proyectos Destacados',
        description: 'Una selección de mis trabajos más representativos en desarrollo web y modelado 3D',
        filters: {
            all: 'Todos',
            web: 'Desarrollo Web',
            '3d': 'Modelado 3D',
            multimedia: 'Multimedia'
        }
    },
    en: {
        subtitle: 'Portfolio',
        title: 'Featured Projects',
        description: 'A selection of my most representative work in web development and 3D modeling',
        filters: {
            all: 'All',
            web: 'Web Development',
            '3d': '3D Modeling',
            multimedia: 'Multimedia'
        }
    }
};

// PROYECTOS INDIVIDUALES
const individualProjectsTranslations = {
    cdmafe: {
        es: {
            category: 'Desarrollo Web',
            title: 'CDMAFE - Sitio Web Corporativo',
            description: 'Desarrollo completo de sitio web para empresa de carpintería, con diseño responsive y enfoque en experiencia de usuario profesional.',
            links: {
                'Ver Sitio': 'Ver Sitio',
                'View Site': 'Ver Sitio'
            }
        },
        en: {
            category: 'Web Development',
            title: 'CDMAFE - Corporate Website',
            description: 'Complete website development for carpentry company, with responsive design and focus on professional user experience.',
            links: {
                'Ver Sitio': 'View Site',
                'View Site': 'View Site'
            }
        }
    },
    bellaroma: {
        es: {
            category: 'E-commerce',
            title: 'Bellaroma - Tienda Online',
            description: 'Plataforma de e-commerce para venta de perfumes con carrito de compras, catálogo dinámico y diseño elegante.',
            links: {
                'Demo': 'Demo',
                'Código': 'Código',
                'Code': 'Código'
            }
        },
        en: {
            category: 'E-commerce',
            title: 'Bellaroma - Online Store',
            description: 'E-commerce platform for perfume sales with shopping cart, dynamic catalog and elegant design.',
            links: {
                'Demo': 'Demo',
                'Código': 'Code',
                'Code': 'Code'
            }
        }
    },
    liana: {
        es: {
            category: 'Fashion Web',
            title: 'Liana - Tienda de Moda',
            description: 'Sitio web moderno para tienda de ropa con galería interactiva, diseño responsivo y animaciones suaves.',
            links: {
                'Demo': 'Demo',
                'Código': 'Código',
                'Code': 'Código'
            }
        },
        en: {
            category: 'Fashion Web',
            title: 'Liana - Fashion Store',
            description: 'Modern website for clothing store with interactive gallery, responsive design and smooth animations.',
            links: {
                'Demo': 'Demo',
                'Código': 'Code',
                'Code': 'Code'
            }
        }
    },
    car3d: {
        es: {
            category: 'Modelado 3D',
            title: 'Automóvil 3D',
            description: 'Modelo 3D detallado de automóvil con texturizado realista y optimización para visualización web interactiva.',
            links: {
                'Ver en Sketchfab': 'Ver en Sketchfab',
                'View on Sketchfab': 'Ver en Sketchfab'
            }
        },
        en: {
            category: '3D Modeling',
            title: '3D Automobile',
            description: 'Detailed 3D car model with realistic texturing and optimization for interactive web visualization.',
            links: {
                'Ver en Sketchfab': 'View on Sketchfab',
                'View on Sketchfab': 'View on Sketchfab'
            }
        }
    },
    dragon: {
        es: {
            category: 'Character Design',
            title: 'Dragon Drytron Gamma',
            description: 'Criatura fantástica modelada con gran detalle, inspirada en diseños de cartas coleccionables con acabados profesionales.',
            links: {
                'Ver en Sketchfab': 'Ver en Sketchfab',
                'View on Sketchfab': 'Ver en Sketchfab'
            }
        },
        en: {
            category: 'Character Design',
            title: 'Dragon Drytron Gamma',
            description: 'Fantasy creature modeled with great detail, inspired by collectible card designs with professional finishes.',
            links: {
                'Ver en Sketchfab': 'View on Sketchfab',
                'View on Sketchfab': 'View on Sketchfab'
            }
        }
    },
    room: {
        es: {
            category: 'Diseño de Interiores',
            title: 'Habitación Gaming/Trabajo 3D',
            description: 'Diseño moderno de habitación multifuncional con área de trabajo, gaming setup, cama contemporánea y elementos decorativos cuidadosamente seleccionados.',
            links: {
                'Ver en Sketchfab': 'Ver en Sketchfab',
                'View on Sketchfab': 'Ver en Sketchfab'
            }
        },
        en: {
            category: 'Interior Design',
            title: 'Gaming/Work Room 3D',
            description: 'Modern multifunctional room design with work area, gaming setup, contemporary bed and carefully selected decorative elements.',
            links: {
                'Ver en Sketchfab': 'View on Sketchfab',
                'View on Sketchfab': 'View on Sketchfab'
            }
        }
    },
    shark: {
        es: {
            category: 'Character Design',
            title: 'Tiburón Stylized 3D',
            description: 'Modelo de tiburón con estilo cartoon amigable, perfecto para videojuegos, animaciones infantiles y contenido educativo. Diseño colorido y expresivo.',
            links: {
                'Ver en Sketchfab': 'Ver en Sketchfab',
                'View on Sketchfab': 'Ver en Sketchfab'
            }
        },
        en: {
            category: 'Character Design',
            title: 'Stylized Shark 3D',
            description: 'Cartoon-style friendly shark model, perfect for video games, children\'s animations and educational content. Colorful and expressive design.',
            links: {
                'Ver en Sketchfab': 'View on Sketchfab',
                'View on Sketchfab': 'View on Sketchfab'
            }
        }
    },
    simulation: {
        es: {
            category: 'Simulación Física',
            title: 'Simulación de Cocina - Física de Fluidos',
            description: 'Simulación avanzada de cocina con múltiples elementos físicos: líquidos realistas (agua, jalea), efectos de humo dinámico y simulación de fuego. Demostración de física de fluidos y partículas en tiempo real.',
            links: {
                'Ver Demo': 'Ver Demo',
                'View Demo': 'Ver Demo'
            }
        },
        en: {
            category: 'Physics Simulation',
            title: 'Kitchen Simulation - Fluid Physics',
            description: 'Advanced kitchen simulation featuring multiple physical elements: realistic liquids (water, jelly), dynamic smoke effects and fire simulation. Real-time demonstration of fluid physics and particle systems.',
            links: {
                'Ver Demo': 'View Demo',
                'View Demo': 'View Demo'
            }
        }
    },
    dragonTransformation: {
        es: {
            category: 'Animación 3D',
            title: 'Dragon Drytron - Transformación Animada',
            description: 'Animación 3D cinematográfica del Dragon Drytron mostrando su proceso de transformación completo: desde las piezas individuales hasta el ensamblaje final del robot. Demostración de habilidades en animación, rigging y efectos visuales.',
            links: {
                'Ver Animación': 'Ver Animación',
                'View Animation': 'Ver Animación'
            }
        },
        en: {
            category: '3D Animation',
            title: 'Dragon Drytron - Animated Transformation',
            description: 'Cinematic 3D animation of Dragon Drytron showcasing its complete transformation process: from individual pieces to the final robot assembly. Demonstration of skills in animation, rigging and visual effects.',
            links: {
                'Ver Animación': 'View Animation',
                'View Animation': 'View Animation'
            }
        }
    }
};

// SECCIÓN SOBRE MÍ
const aboutTranslations = {
    es: {
        subtitle: 'Conoce más',
        title: 'Sobre Mí',
        description: 'Mi pasión por la tecnología y el diseño me impulsa a crear experiencias digitales excepcionales',
        mainTitle: 'Ingeniero Multimedia Full-Stack Especializado',
        paragraphs: [
            'Soy Stiven Ariza Vargas, Ingeniero Multimedia graduado de la Universidad Militar Nueva Granada. Mi especialización abarca desarrollo web frontend y backend, modelado 3D profesional, diseño de experiencias de usuario centradas en el impacto visual y la funcionalidad, además de sistemas multimedia interactivos.',
            'Con un enfoque técnico sólido y una visión creativa innovadora, he desarrollado proyectos que combinan estética contemporánea con funcionalidad robusta. Mi experiencia incluye desde sitios web corporativos y plataformas e-commerce hasta modelado 3D de alta fidelidad, animaciones cinematográficas y simulaciones físicas realistas para diversas industrias.',
            'Mi stack tecnológico abarca HTML5, CSS3, JavaScript, Python, PHP y MySQL para desarrollo web, mientras que en el ámbito 3D domino Maya, Substance Painter y Unity. También tengo experiencia en diseño UI/UX con Figma y herramientas de prototipado avanzado.',
            'Actualmente enfocado en expandir mis conocimientos en tecnologías emergentes como inteligencia artificial aplicada al diseño, desarrollo de aplicaciones móviles, realidad virtual y aumentada, manteniéndome siempre a la vanguardia del diseño digital y desarrollo multimedia contemporáneo.',
            'Mi objetivo es crear experiencias digitales memorables que no solo cumplan los requisitos técnicos, sino que generen conexiones emocionales genuinas con los usuarios, combinando la precisión técnica con la narrativa visual impactante.'
        ]
    },
    en: {
        subtitle: 'Learn more',
        title: 'About Me',
        description: 'My passion for technology and design drives me to create exceptional digital experiences',
        mainTitle: 'Specialized Full-Stack Multimedia Engineer',
        paragraphs: [
            'I am Stiven Ariza Vargas, Multimedia Engineer graduated from Universidad Militar Nueva Granada. My specialization covers frontend and backend web development, professional 3D modeling, user experience design focused on visual impact and functionality, plus interactive multimedia systems.',
            'With a solid technical approach and innovative creative vision, I have developed projects that combine contemporary aesthetics with robust functionality. My experience ranges from corporate websites and e-commerce platforms to high-fidelity 3D modeling, cinematic animations and realistic physics simulations for various industries.',
            'My technology stack encompasses HTML5, CSS3, JavaScript, Python, PHP and MySQL for web development, while in the 3D realm I master Maya, Substance Painter and Unity. I also have experience in UI/UX design with Figma and advanced prototyping tools.',
            'Currently focused on expanding my knowledge in emerging technologies such as artificial intelligence applied to design, mobile app development, virtual and augmented reality, always staying at the forefront of contemporary digital design and multimedia development.',
            'My goal is to create memorable digital experiences that not only meet technical requirements, but generate genuine emotional connections with users, combining technical precision with impactful visual storytelling.'
        ]
    }
};

// SECCIÓN CONTACTO
const contactTranslations = {
    es: {
        subtitle: 'Conectemos',
        title: 'Contacto Profesional',
        description: '¿Tienes un proyecto en mente? Me encantaría colaborar contigo en tu próxima idea',
        infoTitle: 'Información de Contacto',
        labels: ['Ubicación', 'Teléfono', 'Email', 'WhatsApp'],
        whatsapp: 'Enviar mensaje',
        contactMe: 'Contáctame',
        formLabels: {
            name: 'Nombre Completo',
            phone: 'Teléfono (Opcional)',
            email: 'Correo Electrónico',
            subject: 'Asunto',
            message: 'Mensaje'
        },
        formPlaceholders: {
            name: 'Tu Nombre*',
            phone: 'Número telefónico',
            email: 'Dirección de correo*',
            subject: 'Asunto',
            message: 'Mensaje*'
        },
        formButton: 'Enviar Mensaje',
        formSending: 'Enviando...',
        errors: {
            required: 'Por favor, complete los campos obligatorios: Nombre, Email y Mensaje',
            invalidEmail: 'Por favor, ingrese un correo electrónico válido.',
            invalidPhone: 'Por favor, ingrese un número de teléfono válido.'
        }
    },
    en: {
        subtitle: 'Let\'s Connect',
        title: 'Professional Contact',
        description: 'Do you have a project in mind? I\'d love to collaborate with you on your next idea',
        infoTitle: 'Contact Information',
        labels: ['Location', 'Phone', 'Email', 'WhatsApp'],
        whatsapp: 'Send message',
        contactMe: 'Contact Me',
        formLabels: {
            name: 'Full Name',
            phone: 'Phone (Optional)',
            email: 'Email Address',
            subject: 'Subject',
            message: 'Message'
        },
        formPlaceholders: {
            name: 'Your Name*',
            phone: 'Phone Number',
            email: 'Email Address*',
            subject: 'Subject',
            message: 'Message*'
        },
        formButton: 'Send Message',
        formSending: 'Sending...',
        errors: {
            required: 'Please complete the required fields: Name, Email and Message',
            invalidEmail: 'Please enter a valid email address.',
            invalidPhone: 'Please enter a valid phone number.'
        }
    }
};

// FOOTER
const footerTranslations = {
    es: '© 2025 Stiven Ariza. Todos los derechos reservados. Diseñado con pasión y dedicación.',
    en: '© 2025 Stiven Ariza. All rights reserved. Designed with passion and dedication.'
};

// ====================================
// FUNCIONES PRINCIPALES
// ====================================

function toggleLanguage() {
    currentLanguage = currentLanguage === 'es' ? 'en' : 'es';
    updateAllContent();
    saveLanguagePreference();
}

function updateAllContent() {
    updateLanguageButton();
    updateNavigation();
    updateHero();
    updateSkills();
    updateProjects();
    updateIndividualProjects();
    updateAbout();
    updateContact();
    updateFooter();
    updateAriaLabels();
    updateDataAttributes();
}

// ====================================
// FUNCIONES DE ACTUALIZACIÓN POR SECCIÓN
// ====================================

function updateLanguageButton() {
    const languageButton = document.getElementById('language-text');
    if (languageButton) {
        languageButton.textContent = currentLanguage === 'es' ? 'EN' : 'ES';
    }
}

function updateNavigation() {
    const nav = navigationTranslations[currentLanguage];
    updateElement('a[href="#hero"]', nav.home);
    updateElement('a[href="#skills"]', nav.skills);
    updateElement('a[href="#projects"]', nav.projects);
    updateElement('a[href="#about"]', nav.about);
    updateElement('a[href="#contact"]', nav.contact);
}

function updateHero() {
    const hero = heroTranslations[currentLanguage];
    updateElement('.hero-subtitle', hero.subtitle);
    updateElement('.hero-title', hero.title);
    updateElement('.hero-description', hero.description);
    
    const btnWork = document.querySelector('a[href="#projects"].btn-primary');
    const btnCV = document.querySelector('.btn-secondary span');
    
    if (btnWork) btnWork.textContent = hero.btnWork;
    if (btnCV) btnCV.textContent = hero.btnCV;
}

function updateSkills() {
    const skills = skillsTranslations[currentLanguage];
    
    updateElement('#skills .section-subtitle', skills.subtitle);
    updateElement('#skills .section-title', skills.title);
    updateElement('#skills .section-description', skills.description);
    
    // Categorías de habilidades
    const skillCategories = document.querySelectorAll('.skill-category h3');
    skillCategories.forEach((category, index) => {
        if (skills.categories[index]) {
            const icon = category.querySelector('i');
            const iconHTML = icon ? icon.outerHTML : '';
            category.innerHTML = iconHTML + ' ' + skills.categories[index];
        }
    });
    
    // Skills individuales
    const skillItems = document.querySelectorAll('.skill-item span');
    skillItems.forEach(skill => {
        const currentText = skill.textContent.trim();
        if (skills.individualSkills[currentText]) {
            skill.textContent = skills.individualSkills[currentText];
        }
    });
}

function updateProjects() {
    const projects = projectsTranslations[currentLanguage];
    
    updateElement('#projects .section-subtitle', projects.subtitle);
    updateElement('#projects .section-title', projects.title);
    updateElement('#projects .section-description', projects.description);
    
    // Filtros de proyectos
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        const filter = btn.getAttribute('data-filter');
        if (projects.filters[filter]) {
            btn.textContent = projects.filters[filter];
        }
    });
}

function updateIndividualProjects() {
    // Mapear proyectos por contenido para identificarlos
    const projectMappings = {
        'CDMAFE - Sitio Web Corporativo': 'cdmafe',
        'CDMAFE - Corporate Website': 'cdmafe',
        'Bellaroma - Tienda Online': 'bellaroma',
        'Bellaroma - Online Store': 'bellaroma',
        'Liana - Tienda de Moda': 'liana',
        'Liana - Fashion Store': 'liana',
        'Automóvil 3D': 'car3d',
        '3D Automobile': 'car3d',
        'Dragon Drytron Gamma': 'dragon',
        'Habitación Gaming/Trabajo 3D': 'room',
        'Gaming/Work Room 3D': 'room',
        'Tiburón Stylized 3D': 'shark',
        'Stylized Shark 3D': 'shark',
        'Simulación de Partículas': 'simulation',
        'Particle Simulation': 'simulation',
        'Simulación de Cocina - Física de Fluidos': 'simulation',
        'Kitchen Simulation - Fluid Physics': 'simulation',
        'Dragon Drytron - Transformación Animada': 'dragonTransformation',
        'Dragon Drytron - Animated Transformation': 'dragonTransformation'
    };

    // Traducciones globales para todos los botones
    const globalLinkTranslations = {
        es: {
            'Ver Sitio': 'Ver Sitio',
            'View Site': 'Ver Sitio',
            'Demo': 'Demo',
            'Código': 'Código',
            'Code': 'Código',
            'Ver en Sketchfab': 'Ver en Sketchfab',
            'View on Sketchfab': 'Ver en Sketchfab',
            'Ver Demo': 'Ver Demo',
            'View Demo': 'Ver Demo',
            'Ver Animación': 'Ver Animación',
            'View Animation': 'Ver Animación'
        },
        en: {
            'Ver Sitio': 'View Site',
            'View Site': 'View Site',
            'Demo': 'Demo',
            'Código': 'Code',
            'Code': 'Code',
            'Ver en Sketchfab': 'View on Sketchfab',
            'View on Sketchfab': 'View on Sketchfab',
            'Ver Demo': 'View Demo',
            'View Demo': 'View Demo',
            'Ver Animación': 'View Animation',
            'View Animation': 'View Animation'
        }
    };

    // Actualizar cada tarjeta de proyecto
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        const titleElement = card.querySelector('.project-title');
        if (!titleElement) return;

        const currentTitle = titleElement.textContent.trim();
        const projectKey = projectMappings[currentTitle];
        
        if (projectKey && individualProjectsTranslations[projectKey]) {
            const translation = individualProjectsTranslations[projectKey][currentLanguage];
            
            // Actualizar categoría
            const categoryElement = card.querySelector('.project-category');
            if (categoryElement) {
                categoryElement.textContent = translation.category;
            }
            
            // Actualizar título
            titleElement.textContent = translation.title;
            
            // Actualizar descripción
            const descriptionElement = card.querySelector('.project-description');
            if (descriptionElement) {
                descriptionElement.textContent = translation.description;
            }
        }
        
        // Actualizar TODOS los enlaces usando las traducciones globales
        const linkSpans = card.querySelectorAll('.project-link span');
        linkSpans.forEach(span => {
            const currentLinkText = span.textContent.trim();
            const globalTranslations = globalLinkTranslations[currentLanguage];
            if (globalTranslations[currentLinkText]) {
                span.textContent = globalTranslations[currentLinkText];
            }
        });
    });
}

function updateAbout() {
    const about = aboutTranslations[currentLanguage];
    
    updateElement('#about .section-subtitle', about.subtitle);
    updateElement('#about .section-title', about.title);
    updateElement('#about .section-description', about.description);
    updateElement('.about-text h3', about.mainTitle);
    
    const aboutParagraphs = document.querySelectorAll('.about-text p');
    aboutParagraphs.forEach((paragraph, index) => {
        if (about.paragraphs[index]) {
            paragraph.textContent = about.paragraphs[index];
        }
    });
}

function updateContact() {
    const contact = contactTranslations[currentLanguage];
    
    updateElement('#contact .section-subtitle', contact.subtitle);
    updateElement('#contact .section-title', contact.title);
    updateElement('#contact .section-description', contact.description);
    updateElement('.contact-info h3', contact.infoTitle);
    
    // Labels de información de contacto
    const contactItems = document.querySelectorAll('.contact-item div h4');
    contactItems.forEach((item, index) => {
        if (contact.labels[index]) {
            item.textContent = contact.labels[index];
        }
    });
    
    // WhatsApp
    const whatsappLink = document.querySelector('.contact-item a');
    if (whatsappLink) {
        whatsappLink.textContent = contact.whatsapp;
    }
    
    // Labels del formulario
    updateElement('label[for="nombre"]', contact.formLabels.name);
    updateElement('label[for="telefono"]', contact.formLabels.phone);
    updateElement('label[for="email"]', contact.formLabels.email);
    updateElement('label[for="tema"]', contact.formLabels.subject);
    updateElement('label[for="mensaje"]', contact.formLabels.message);
    
    // Placeholders del formulario
    updatePlaceholder('nombre', contact.formPlaceholders.name);
    updatePlaceholder('telefono', contact.formPlaceholders.phone);
    updatePlaceholder('email', contact.formPlaceholders.email);
    updatePlaceholder('tema', contact.formPlaceholders.subject);
    updatePlaceholder('mensaje', contact.formPlaceholders.message);
    
    // Botón de envío
    const submitBtn = document.querySelector('.contact-submit-btn span');
    if (submitBtn && !submitBtn.textContent.includes('...')) {
        submitBtn.textContent = contact.formButton;
    }
}

function updateFooter() {
    updateElement('.footer-text', footerTranslations[currentLanguage]);
}

function updateAriaLabels() {
    const themeToggle = document.querySelector('.theme-toggle');
    const langToggle = document.querySelector('.language-toggle');
    
    if (themeToggle) {
        const label = currentLanguage === 'es' ? 'Cambiar tema' : 'Toggle theme';
        themeToggle.setAttribute('aria-label', label);
    }
    if (langToggle) {
        const label = currentLanguage === 'es' ? 'Cambiar idioma' : 'Toggle language';
        langToggle.setAttribute('aria-label', label);
    }
}

function updateDataAttributes() {
    const elements = document.querySelectorAll('[data-es][data-en]');
    elements.forEach(element => {
        // Remover la exclusión de project-card para permitir traducciones
        const text = element.getAttribute(currentLanguage === 'es' ? 'data-es' : 'data-en');
        if (text) element.textContent = text;
    });
}

// ====================================
// FUNCIONES AUXILIARES
// ====================================

function updateElement(selector, text) {
    const element = document.querySelector(selector);
    if (element && text) {
        element.textContent = text;
    }
}

function updatePlaceholder(id, text) {
    const element = document.getElementById(id);
    if (element && text) {
        element.placeholder = text;
    }
}

function saveLanguagePreference() {
    try {
        localStorage.setItem('language', currentLanguage);
    } catch (error) {
        console.warn('No se pudo guardar la preferencia de idioma:', error);
    }
}

function loadLanguagePreference() {
    try {
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage && ['es', 'en'].includes(savedLanguage)) {
            currentLanguage = savedLanguage;
        }
    } catch (error) {
        console.warn('No se pudo cargar la preferencia de idioma:', error);
    }
    updateAllContent();
}

// ====================================
// FUNCIONES PÚBLICAS PARA FORMULARIO
// ====================================

function getFormErrorMessages() {
    return contactTranslations[currentLanguage].errors;
}

function getFormSendingText() {
    return contactTranslations[currentLanguage].formSending;
}

function getFormButtonText() {
    return contactTranslations[currentLanguage].formButton;
}

// ====================================
// INICIALIZACIÓN
// ====================================

document.addEventListener('DOMContentLoaded', function() {
    loadLanguagePreference();
});

// ====================================
// EXPORTAR FUNCIONES GLOBALES
// ====================================

window.toggleLanguage = toggleLanguage;
window.updateAllContent = updateAllContent;
window.getFormErrorMessages = getFormErrorMessages;
window.getFormSendingText = getFormSendingText;
window.getFormButtonText = getFormButtonText;