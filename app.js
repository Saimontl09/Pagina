// This file contains the JavaScript code that handles user interactions for the modern web page.

// This file contains the JavaScript code that handles user interactions for the modern web page.

document.addEventListener('DOMContentLoaded', function() {
    const emailSection = document.getElementById('emailSection');
    const homepageSection = document.getElementById('homepageSection');
    const form = document.getElementById('emailForm');
    const emailInput = document.getElementById('emailInput');
    const feedback = document.getElementById('feedback');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = emailInput.value;

        if (validateEmail(email)) {
            feedback.textContent = `Bienvenido, ${email}! Redirigiendo a la página principal...`;
            feedback.style.color = 'black';
            setTimeout(() => {
                emailSection.style.display = 'none'; // Oculta la sección de ingreso del correo
                homepageSection.style.display = 'block'; // Muestra la página principal
            }, 2000); // Espera 2 segundos antes de mostrar la página principal
        } else {
            feedback.textContent = 'Por favor, ingresa un correo electrónico válido.';
            feedback.style.color = 'black';
        }
    });

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});


