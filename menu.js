document.addEventListener('DOMContentLoaded', function() {
    // Código existente para el menú responsive
    const menuIcon = document.querySelector('.menu-icon');
    const navbar = document.querySelector('.navbar');
    const header = document.querySelector('.header');
    
    menuIcon.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });
    
    // Cerrar el menú cuando se hace clic en un enlace
    const menuLinks = document.querySelectorAll('.menu-links a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            navbar.classList.remove('active');
        });
    });

    const sections = document.querySelectorAll('section[id]');
    
    // Función para actualizar el menú activo al hacer scroll
    function highlightMenuOnScroll() {
        // Obtener la posición actual de scroll
        const scrollY = window.pageYOffset;
        
        // Variable para detectar si estamos en la sección de skills
        let inSkillsSection = false;
        
        // Verificar cada sección para ver cuál está visible
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100; // Offset para activar un poco antes
            const sectionId = current.getAttribute('id');
            
            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                // Remover active de todos los enlaces
                menuLinks.forEach(link => {
                    link.classList.remove('active');
                });
                
                // Agregar active al enlace correspondiente a la sección actual
                document.querySelector('.menu-links a[href*=' + sectionId + ']').classList.add('active');
                
                // Comprobar si estamos en la sección de skills
                if(sectionId === 'skills') {
                    inSkillsSection = true;
                }
            }
        });
        
        // Actualizar la clase del header basado en si estamos en la sección de skills
        if(inSkillsSection) {
            header.classList.add('skills-active');
        } else {
            header.classList.remove('skills-active');
        }
    }
    
    // Ejecutar la función al cargar la página y al hacer scroll
    window.addEventListener('scroll', highlightMenuOnScroll);
    highlightMenuOnScroll(); // Ejecutar al cargar para establecer el estado inicial
});