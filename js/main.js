document.addEventListener('DOMContentLoaded', () => {
    // Preloader
    const preloader = document.getElementById('preloader');
    window.addEventListener('load', () => {
        preloader.style.display = 'none';
    });

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
                element.classList.add('animate');
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

    // Slider para el hero
    const heroSlider = document.querySelector('.hero-slider');
    const heroSlides = heroSlider.querySelectorAll('.slide');
    let currentHeroSlide = 0;

    const showHeroSlide = (index) => {
        heroSlides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    };

    const nextHeroSlide = () => {
        currentHeroSlide = (currentHeroSlide + 1) % heroSlides.length;
        showHeroSlide(currentHeroSlide);
    };

    setInterval(nextHeroSlide, 5000); // Cambiar slide cada 5 segundos

    // Slider para el banner publicitario
    const adBanner = document.querySelector('.banner-slider');
    const adSlides = adBanner.querySelectorAll('.slide');
    let currentAdSlide = 0;

    const showAdSlide = (index) => {
        adSlides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    };

    const nextAdSlide = () => {
        currentAdSlide = (currentAdSlide + 1) % adSlides.length;
        showAdSlide(currentAdSlide);
    };

    setInterval(nextAdSlide, 3000); // Cambiar slide cada 3 segundos

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
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        lastScrollTop = scrollTop;
    });
});