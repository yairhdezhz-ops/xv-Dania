// Countdown Timer
function initCountdown() {
    // Fecha del evento: 27 de diciembre de 2025 a las 17:00
    const eventDate = new Date('2025-12-27T17:00:00');
    
    function updateCountdown() {
        const now = new Date();
        const difference = eventDate - now;
        
        if (difference <= 0) {
            // Si la fecha ya pasó, mostrar ceros
            document.getElementById('days').textContent = '00';
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('seconds').textContent = '00';
            return;
        }
        
        // Calcular días, horas, minutos y segundos
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        // Actualizar el DOM con formato de dos dígitos
        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }
    
    // Actualizar inmediatamente
    updateCountdown();
    
    // Actualizar cada segundo
    setInterval(updateCountdown, 1000);
}

// Función para abrir mapa (puedes personalizar las URLs)
function openMap(location) {
    let mapUrl = '';
    
    if (location === 'ceremony') {
        // Enlace de Google Maps para la ceremonia
        mapUrl = 'https://maps.app.goo.gl/HP5Gwi6awhCX9tzu5?g_st=ipc';
    } else if (location === 'reception') {
        // Coordenadas aproximadas de Salón Viñedos, Los Mochis, Sinaloa
        mapUrl = 'https://maps.app.goo.gl/ktx8jNrLiHz8Cjau6?g_st=ipc';
    }
    
    if (mapUrl) {
        window.open(mapUrl, '_blank');
    }
}

// Función para confirmar asistencia
function confirmAttendance() {
    // URL del formulario de confirmación (reemplaza con tu link real)
    const rsvpUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSeXAtmrPhz34L9aIOTKwc6ytNcOL_hCAIxEI2M86CaZsU8m8A/viewform';
    
    // Abrir el formulario en una nueva ventana
    if (rsvpUrl && rsvpUrl !== 'https://forms.gle/gHjxAG4EEjA4ubpA8https://docs.google.com/forms/d/e/1FAIpQLSeXAtmrPhz34L9aIOTKwc6ytNcOL_hCAIxEI2M86CaZsU8m8A/viewform') {
        window.open(rsvpUrl, '_blank');
    } else {
        // Mensaje temporal mientras se configura el link
        alert('El formulario de confirmación estará disponible pronto. ¡Gracias por tu interés!');
    }
}

// Smooth scroll para mejor UX
function initSmoothScroll() {
    // Agregar comportamiento de scroll suave si es necesario
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Efectos de animación al hacer scroll
function initScrollAnimations() {
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
    
    // Observar todas las cajas de contenido
    document.querySelectorAll('.content-box').forEach(box => {
        box.style.opacity = '0';
        box.style.transform = 'translateY(30px)';
        box.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(box);
    });
}

// Inicializar todo cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    initCountdown();
    initSmoothScroll();
    initScrollAnimations();
    
    // Agregar efecto de carga suave
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Manejar cambios de orientación en dispositivos móviles
window.addEventListener('orientationchange', function() {
    // Forzar recálculo del viewport
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 100);
});

// Prevenir zoom en doble tap en iOS (opcional)
let lastTouchEnd = 0;
document.addEventListener('touchend', function(event) {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, false);

