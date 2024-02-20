/*
    ------------ Funcionalidad del icono de menú en la barra de navegación ------------
*/
let menuIcon = document.querySelector('#menu-icon'); // Selecciona el icono de menú
let navbar = document.querySelector('.navbar'); // Selecciona la barra de navegación

// Función para alternar entre abrir/cerrar el menú al hacer clic en el icono de menú
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Alterna entre las clases del icono de menú
    navbar.classList.toggle('active'); // Alterna entre activar/desactivar la barra de navegación
};

/*
    ------------ Resaltar enlaces de navegación según la sección visible en el scroll ------------
*/
let sections = document.querySelectorAll('section'); // Selecciona todas las secciones
let navLinks = document.querySelectorAll('header nav a'); // Selecciona todos los enlaces de navegación

// Función que se ejecuta al hacer scroll en la ventana
window.onscroll = () => {
    // Itera sobre todas las secciones
    sections.forEach(sec => {
        let top = window.scrollY; // Obtiene la posición de scroll actual
        let offset = sec.offsetTop - 150; // Obtiene el desplazamiento de la sección con un pequeño ajuste
        let height = sec.offsetHeight; // Obtiene la altura de la sección
        let id = sec.getAttribute('id'); // Obtiene el ID de la sección

        // Verifica si la sección actual está en el área visible en el scroll
        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active'); // Elimina la clase 'active' de todos los enlaces de navegación
                // Añade la clase 'active' al enlace de navegación correspondiente a la sección visible
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    /*
        ------------ Navbar fija al hacer scroll ------------
    */
    let header = document.querySelector('.header'); // Selecciona el encabezado
    header.classList.toggle('sticky', window.scrollY > 100); // Añade o elimina la clase 'sticky' según la posición de scroll

    /*
        ------------ Ocultar menú al hacer clic en un enlace de navegación (scroll) ------------
    */
    menuIcon.classList.remove('bx-x'); // Restaura el icono de menú
    navbar.classList.remove('active'); // Cierra la barra de navegación
};

/*
    ------------ Inicialización de Swiper ------------
*/
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

/*
    ------------ Scroll Reveal ------------
*/
ScrollReveal({
    distance: '80px', // Distancia de revelación
    duration: 2000, // Duración de la animación
    delay: 200 // Retardo antes de la animación
});

// Revela los elementos al hacer scroll según la dirección especificada
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });


document.addEventListener('DOMContentLoaded', function () {
    const darkModeIcon = document.getElementById('darkMode-icon');
    const body = document.body;

    // Recupera la preferencia del modo oscuro del localStorage
    const isDarkModeSaved = localStorage.getItem('darkMode') === 'true';
    if (isDarkModeSaved) {
        enableDarkMode();
    }

    darkModeIcon.addEventListener('click', function () {
        // Cambia entre modo oscuro y claro
        if (body.classList.contains('dark-mode')) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });

    function enableDarkMode() {
        darkModeIcon.classList.add('bx-sun');
        body.classList.add('dark-mode');

        // Guarda el modo actual en localStorage para recordar la preferencia del usuario
        localStorage.setItem('darkMode', 'true');

        // Aplica los estilos después de cambiar el modo oscuro
        applyDarkModeStyles();
    }

    function disableDarkMode() {
        darkModeIcon.classList.remove('bx-sun');
        body.classList.remove('dark-mode');

        // Guarda el modo actual en localStorage para recordar la preferencia del usuario
        localStorage.setItem('darkMode', 'false');

        // Aplica los estilos después de cambiar el modo oscuro
        applyDarkModeStyles();
    }

    // Función para cambiar el estilo de los elementos en función del modo oscuro
    function applyDarkModeStyles() {
        const elementsToStyle = document.querySelectorAll('.dark-mode-affected');

        elementsToStyle.forEach(element => {
            // Aquí puedes ajustar los estilos según tus necesidades
            element.style.backgroundColor = body.classList.contains('dark-mode') ? '#1a1a1a' : ''; // Color de fondo en modo oscuro
            element.style.color = body.classList.contains('dark-mode') ? '#ffffff' : ''; // Color del texto en modo oscuro
        });
    }
});