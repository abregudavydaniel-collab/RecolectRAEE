document.addEventListener('DOMContentLoaded', () => {
    
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if(this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 70,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    const btnAcceder = document.querySelector('.roles-section .card-actions a:first-child');
    const btnPostular = document.querySelector('.roles-section .card-actions a:last-child');

    if (btnAcceder) {
        btnAcceder.addEventListener('click', (e) => {
            e.preventDefault();
            alert("Redirigiendo al Módulo de Autenticación (6.0)...");
        });
    }

    if (btnPostular) {
        btnPostular.addEventListener('click', (e) => {
            e.preventDefault();
            alert("Abriendo formulario de Postulación de Sede Aliada (5.0)...");
        });
    }
});