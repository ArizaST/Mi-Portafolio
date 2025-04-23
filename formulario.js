function enviarFormulario() {
    const nombre = document.getElementById('nombre').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const email = document.getElementById('email').value.trim();
    const tema = document.getElementById('tema').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    if (!nombre || !email || !mensaje) {
        alert('Por favor, complete los campos obligatorios: Nombre, Email y Mensaje');
        return false;
    }

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, ingrese un correo electrónico válido.');
        return false;
    }

    // Validación de teléfono (opcional)
    if (telefono && !/^\d+$/.test(telefono)) {
        alert('Por favor, ingrese un número de teléfono válido.');
        return false;
    }

    // Cambia el texto del botón para indicar envío
    const boton = document.querySelector('.Boton_Contacto');
    if (boton) {
        boton.innerHTML = 'Enviando... <i class="fa-solid fa-spinner fa-spin"></i>';
        boton.disabled = true;
    }

    // Permitir que el formulario se envíe a Formspree
    return true;
}

document.addEventListener('DOMContentLoaded', function() {
    // Verificar que el formulario exista antes de agregar el listener
    const formulario = document.getElementById('formulario-contacto');
    if (formulario) {
        formulario.addEventListener('submit', function(event) {
            if (!enviarFormulario()) {
                event.preventDefault(); // Detiene el envío si la validación falla
            }
        });
    }
});