document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const header = document.querySelector('.header');
    const menuIcon = document.querySelector('.menu-icon i');
    const logo = document.querySelector('.logo');
    
    // Función para manejar el scroll y cambio de colores
    function handleSkillsSection() {
        const scrollPosition = window.scrollY;
        const skillsSection = document.getElementById('skills');
        
        if (!skillsSection) return;
        
        const skillsTop = skillsSection.offsetTop - 100;
        const skillsBottom = skillsTop + skillsSection.offsetHeight;
        
        if (scrollPosition >= skillsTop && scrollPosition <= skillsBottom) {
            // Estamos en la sección Skills
            header.classList.add('skills-active');
            
            // Forzar colores negros
            if (menuIcon) menuIcon.style.color = '#000';
            if (logo) logo.style.color = '#000';
        } else {
            // No estamos en Skills
            header.classList.remove('skills-active');
            
            // Restaurar colores originales SIEMPRE que no estemos en la sección Skills
            // Independientemente de si tiene la clase 'sticky' o no
            if (menuIcon) menuIcon.style.color = 'var(--text-color)';
            if (logo) logo.style.color = 'var(--text-color)';
        }
        
        // Manejar header sticky
        if (scrollPosition > 100) {
            header.classList.add('sticky');
            header.style.background = 'rgba(17, 46, 66, 0.9)';
        } else {
            header.classList.remove('sticky');
            header.style.background = 'transparent';
        }
    }
    
    // Configurar event listeners
    window.addEventListener('scroll', handleSkillsSection);
    handleSkillsSection(); // Ejecutar al cargar
});