// Theme toggle functionality
        function toggleTheme() {
            const body = document.body;
            const themeToggle = document.querySelector('.theme-toggle i');
            const currentTheme = body.getAttribute('data-theme');
            
            if (currentTheme === 'light') {
                body.setAttribute('data-theme', 'dark');
                themeToggle.className = 'fas fa-moon';
                localStorage.setItem('theme', 'dark');
            } else {
                body.setAttribute('data-theme', 'light');
                themeToggle.className = 'fas fa-sun';
                localStorage.setItem('theme', 'light');
            }
        }

        // Load saved theme on page load
        document.addEventListener('DOMContentLoaded', function() {
            const savedTheme = localStorage.getItem('theme') || 'dark';
            const themeToggle = document.querySelector('.theme-toggle i');
            
            document.body.setAttribute('data-theme', savedTheme);
            
            if (savedTheme === 'light') {
                themeToggle.className = 'fas fa-sun';
            } else {
                themeToggle.className = 'fas fa-moon';
            }
        });

// Form validation and submission with AJAX
function enviarFormulario(event) {
    // Prevent default form submission
    if (event) {
        event.preventDefault();
    }
    const nombre = document.getElementById('nombre').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const email = document.getElementById('email').value.trim();
    const tema = document.getElementById('tema').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    // Get current language for error messages
    const errorMessages = {
        es: {
            required: 'Por favor, complete los campos obligatorios: Nombre, Email y Mensaje',
            invalidEmail: 'Por favor, ingrese un correo electrónico válido.',
            invalidPhone: 'Por favor, ingrese un número de teléfono válido.',
            sending: 'Enviando...',
            success: '✅ ¡Mensaje enviado exitosamente!\n\nGracias por contactarme. Te responderé pronto.',
            error: '❌ Error al enviar el mensaje.\n\nPor favor, intenta nuevamente o contacta directamente por WhatsApp.'
        },
        en: {
            required: 'Please complete the required fields: Name, Email and Message',
            invalidEmail: 'Please enter a valid email address.',
            invalidPhone: 'Please enter a valid phone number.',
            sending: 'Sending...',
            success: '✅ Message sent successfully!\n\nThank you for contacting me. I will respond soon.',
            error: '❌ Error sending message.\n\nPlease try again or contact directly via WhatsApp.'
        }
    };

    const messages = errorMessages[currentLanguage] || errorMessages['es'];

    if (!nombre || !email || !mensaje) {
        alert(messages.required);
        return false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert(messages.invalidEmail);
        return false;
    }

    // Phone validation (optional)
    if (telefono && !/^\+?[\d\s\-\(\)]+$/.test(telefono)) {
        alert(messages.invalidPhone);
        return false;
    }

    // Change button text to indicate sending
    const boton = document.querySelector('.contact-submit-btn');
    const buttonText = boton.querySelector('span');
    const buttonIcon = boton.querySelector('i');
    
    if (boton && buttonText && buttonIcon) {
        buttonText.textContent = messages.sending;
        buttonIcon.className = 'fa-solid fa-spinner fa-spin';
        boton.disabled = true;
        boton.style.opacity = '0.7';
    }

    // Prepare form data
    const formData = new FormData();
    formData.append('nombre', nombre);
    formData.append('telefono', telefono);
    formData.append('email', email);
    formData.append('tema', tema);
    formData.append('mensaje', mensaje);

    // Send form with AJAX
    fetch('https://formspree.io/f/xldjpddq', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            // Success
            alert(messages.success);
            document.getElementById('formulario-contacto').reset();
        } else {
            // Error
            throw new Error('Form submission failed');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert(messages.error);
    })
    .finally(() => {
        // Restore button
        if (boton && buttonText && buttonIcon) {
            const sendText = currentLanguage === 'es' ? 'Enviar Mensaje' : 'Send Message';
            buttonText.textContent = sendText;
            buttonIcon.className = 'fas fa-paper-plane';
            boton.disabled = false;
            boton.style.opacity = '1';
        }
    });

    // No need to return false since we're using event.preventDefault()
}

// Update the form event listener setup
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            enviarFormulario(event);
        });
    }
});

        // Download CV function - VERSIÓN BILINGÜE COMPLETA
function downloadCV() {
    // Detectar idioma actual del sitio
    const language = typeof currentLanguage !== 'undefined' ? currentLanguage : 'es';
    
    // Configurar archivos según idioma
    const cvConfig = {
        es: {
            filename: 'Stiven_Ariza_CV_Espanol.pdf',
            downloadName: 'Stiven_Ariza_CV_Español.pdf',
            loadingText: 'Descargando CV...',
            errorMessage: 'CV no disponible temporalmente. Por favor contacta directamente.'
        },
        en: {
            filename: 'Stiven_Ariza_CV_English.pdf', 
            downloadName: 'Stiven_Ariza_CV_English.pdf',
            loadingText: 'Downloading CV...',
            errorMessage: 'CV temporarily unavailable. Please contact directly.'
        }
    };
    
    const config = cvConfig[language];
    
    // Encontrar elementos del botón
    const button = document.querySelector('.btn-secondary');
    const buttonSpan = button ? button.querySelector('span') : null;
    const buttonIcon = button ? button.querySelector('i') : null;
    
    // Guardar estado original
    let originalText = '';
    let originalIcon = '';
    
    if (buttonSpan && buttonIcon) {
        originalText = buttonSpan.textContent;
        originalIcon = buttonIcon.className;
        
        // Cambiar a estado de carga
        buttonSpan.textContent = config.loadingText;
        buttonIcon.className = 'fas fa-spinner fa-spin';
        button.style.pointerEvents = 'none';
        button.style.opacity = '0.7';
    }
    
    // Intentar descarga
    try {
        // Verificar si el archivo existe usando fetch
        fetch(config.filename, { method: 'HEAD' })
            .then(response => {
                if (response.ok) {
                    // El archivo existe, proceder con descarga
                    const link = document.createElement('a');
                    link.href = config.filename;
                    link.download = config.downloadName;
                    link.setAttribute('type', 'application/pdf');
                    
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    
                    console.log(`CV descargado: ${config.filename}`);
                } else {
                    // El archivo no existe, mostrar error
                    throw new Error('Archivo no encontrado');
                }
            })
            .catch(error => {
                console.error('Error al descargar CV:', error);
                alert(config.errorMessage);
                
                // Fallback: intentar abrir el archivo español si el inglés no existe
                if (language === 'en') {
                    window.open('Stiven_Ariza_CV_Espanol.pdf', '_blank');
                }
            });
            
    } catch (error) {
        console.error('Error:', error);
        alert(config.errorMessage);
    }
    
    // Restaurar botón después de 2 segundos
    setTimeout(() => {
        if (buttonSpan && buttonIcon) {
            buttonSpan.textContent = originalText;
            buttonIcon.className = originalIcon;
            button.style.pointerEvents = 'auto';
            button.style.opacity = '1';
        }
    }, 2000);
}

// Función alternativa más simple si prefieres enlaces directos
function updateCVButton() {
    const language = typeof currentLanguage !== 'undefined' ? currentLanguage : 'es';
    const button = document.querySelector('.btn-secondary');
    
    if (button) {
        const cvFiles = {
            es: 'Stiven_Ariza_CV_Espanol.pdf',
            en: 'Stiven_Ariza_CV_English.pdf'
        };
        
        const downloadNames = {
            es: 'Stiven_Ariza_CV_Español.pdf',
            en: 'Stiven_Ariza_CV_English.pdf'
        };
        
        // Actualizar atributos del enlace
        button.href = cvFiles[language];
        button.setAttribute('download', downloadNames[language]);
    }
}

// Función para llamar cuando cambie el idioma
function onLanguageChange() {
    updateCVButton();
    // Agregar a tu función toggleLanguage existente
}

        // Mobile menu toggle
        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');

        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    // Close mobile menu if open
                    navLinks.classList.remove('active');
                    menuToggle.classList.remove('active');
                }
            });
        });

        // Project filter functionality
        const filterBtns = document.querySelectorAll('.filter-btn');
        const projectCards = document.querySelectorAll('.project-card');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                filterBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                btn.classList.add('active');

                const filterValue = btn.dataset.filter;

                projectCards.forEach(card => {
                    if (filterValue === 'all' || card.dataset.category === filterValue) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, 10);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });

        // Navbar scroll effect
        const navbar = document.querySelector('.navbar');
        const navbarLinks = document.querySelectorAll('.nav-links a');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(10, 10, 10, 0.98)';
                navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
            } else {
                navbar.style.background = 'rgba(10, 10, 10, 0.95)';
                navbar.style.boxShadow = 'none';
            }

            // Update active navigation link based on scroll position
            const sections = document.querySelectorAll('section[id]');
            const scrollPos = window.scrollY + 200;

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');

                if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                    navbarLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        });

        // Form submission handling
        const contactForm = document.querySelector('.contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', function(event) {
                if (!enviarFormulario()) {
                    event.preventDefault(); // Stop submission if validation fails
                }
            });

            // Reset button after form submission (success or error)
            contactForm.addEventListener('submit', function() {
                setTimeout(() => {
                    const boton = document.querySelector('.contact-submit-btn');
                    const buttonText = boton.querySelector('span');
                    const buttonIcon = boton.querySelector('i');
                    
                    if (boton && buttonText && buttonIcon) {
                        const sendText = currentLanguage === 'es' ? 'Enviar Mensaje' : 'Send Message';
                        buttonText.textContent = sendText;
                        buttonIcon.className = 'fas fa-paper-plane';
                        boton.disabled = false;
                        boton.style.opacity = '1';
                    }
                }, 3000);
            });
        }

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe all sections for animation
        document.querySelectorAll('section').forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(section);
        });

        // Hero section is visible by default
        document.querySelector('#hero').style.opacity = '1';
        document.querySelector('#hero').style.transform = 'translateY(0)';