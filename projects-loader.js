// ====================================
// GESTOR DE CARGA - MÓVIL OPTIMIZADO
// ====================================

const isMobile = () => window.innerWidth <= 768;

// Función para cargar iframes (solo cuando el usuario hace clic)
function loadIframe(button) {
    const container = button.parentElement;
    const iframeSrc = container.getAttribute('data-src');
    
    if (!iframeSrc) return;
    
    // Crear iframe
    const iframe = document.createElement('iframe');
    iframe.src = iframeSrc;
    iframe.className = 'project-iframe';
    iframe.allow = 'autoplay; fullscreen; vr';
    iframe.style.opacity = '0';
    iframe.style.transition = 'opacity 0.5s ease';
    
    // Remover botón
    button.remove();
    
    // Obtener placeholder
    const placeholder = container.querySelector('.loading-placeholder');
    
    // Cuando cargue el iframe
    iframe.onload = function() {
        iframe.style.opacity = '1';
        if (placeholder) {
            placeholder.classList.add('loaded');
        }
    };
    
    // Timeout de seguridad (5 segundos)
    setTimeout(() => {
        if (placeholder) {
            placeholder.classList.add('loaded');
        }
    }, 5000);
    
    // Añadir iframe
    container.appendChild(iframe);
}

// Lazy loading de imágenes MEJORADO
function setupImageLazyLoading() {
    const projectImages = document.querySelectorAll('.project-image');
    
    projectImages.forEach(img => {
        const container = img.closest('.project-image-container');
        const placeholder = container ? container.querySelector('.loading-placeholder') : null;
        
        const hideLoader = () => {
            if (placeholder) {
                setTimeout(() => {
                    placeholder.classList.add('loaded');
                }, 100);
            }
        };
        
        // Si ya está cargada
        if (img.complete && img.naturalHeight !== 0) {
            hideLoader();
        } else {
            // Cuando se cargue
            img.addEventListener('load', hideLoader);
            
            // Timeout de seguridad más corto en móvil
            const timeout = isMobile() ? 2000 : 3000;
            setTimeout(hideLoader, timeout);
        }
        
        // Manejar errores
        img.addEventListener('error', () => {
            console.warn('Error cargando:', img.src);
            hideLoader();
        });
    });
}

// Observer SOLO para desktop
function setupDesktopObserver() {
    // No ejecutar en móvil
    if (isMobile()) return;
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px'
    };

    const projectObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Auto-cargar iframes en desktop
                const loadBtn = entry.target.querySelector('.load-iframe-btn');
                if (loadBtn) {
                    setTimeout(() => {
                        loadBtn.click();
                    }, 800);
                }
                
                projectObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observar tarjetas solo en desktop
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        projectObserver.observe(card);
    });
}

// Forzar visibilidad en móvil
function forceVisibilityOnMobile() {
    if (!isMobile()) return;
    
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.style.opacity = '1';
        card.style.transform = 'none';
    });
}

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    // Esperar a que todo cargue
    setTimeout(() => {
        setupImageLazyLoading();
        
        if (isMobile()) {
            forceVisibilityOnMobile();
        } else {
            setupDesktopObserver();
        }
    }, 200);
});

// Re-aplicar al cambiar filtros
document.addEventListener('DOMContentLoaded', function() {
    const filterBtnsProjects = document.querySelectorAll('.filter-btn');
    
    filterBtnsProjects.forEach(btn => {
        btn.addEventListener('click', () => {
            setTimeout(() => {
                setupImageLazyLoading();
                
                if (!isMobile()) {
                    setupDesktopObserver();
                } else {
                    forceVisibilityOnMobile();
                }
            }, 400);
        });
    });
});

// Re-evaluar al cambiar tamaño de pantalla
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        if (isMobile()) {
            forceVisibilityOnMobile();
        }
    }, 250);
});