document.addEventListener('DOMContentLoaded', () => {
    // Navegación responsive
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('nav');

    navToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    // Cerrar menú al hacer clic en un enlace
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    });

    // Animación de entrada para elementos
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            if (elementTop < window.innerHeight && elementBottom > 0) {
                element.style.animationDelay = '0.2s';
                element.style.animationPlayState = 'running';
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Llamar inicialmente para animar elementos visibles

    // Smooth scroll para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Slider para el top banner
    const topBanner = document.querySelector('#top-banner');
    const topBannerSlides = topBanner.querySelectorAll('.slide');
    let currentTopBannerSlide = 0;

    const showTopBannerSlide = (index) => {
        topBannerSlides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    };

    const nextTopBannerSlide = () => {
        currentTopBannerSlide = (currentTopBannerSlide + 1) % topBannerSlides.length;
        showTopBannerSlide(currentTopBannerSlide);
    };

    setInterval(nextTopBannerSlide, 3000); // Cambiar slide cada 3 segundos
    showTopBannerSlide(currentTopBannerSlide); // Mostrar el primer slide

    // Filtros del portfolio
    const portfolioFilters = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    portfolioFilters.forEach(filter => {
        filter.addEventListener('click', () => {
            portfolioFilters.forEach(f => f.classList.remove('active'));
            filter.classList.add('active');
            const category = filter.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                if (category === 'all' || item.classList.contains(category)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Manejo del formulario de contacto
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para enviar el formulario y programar la reunión
        // Por ejemplo, puedes usar la API de Google Calendar para agendar la reunión
        alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto para agendar una reunión.');
    });

    // Animación del encabezado al hacer scroll
    const header = document.querySelector('header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 0) {
            header.classList.remove("scroll-up");
            return;
        }

        if (currentScroll > lastScroll && !header.classList.contains("scroll-down")) {
            header.classList.remove("scroll-up");
            header.classList.add("scroll-down");
        } else if (currentScroll < lastScroll && header.classList.contains("scroll-down")) {
            header.classList.remove("scroll-down");
            header.classList.add("scroll-up");
        }
        lastScroll = currentScroll;
    });
});