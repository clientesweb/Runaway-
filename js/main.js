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

    // Slider para el hero
    const heroSlider = document.querySelector('.hero.slider');
    const heroSlides = heroSlider.querySelectorAll('.slide');
    let currentHeroSlide = 0;

    const showHeroSlide = (index) => {
        heroSlides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    };

    const nextHeroSlide = () => {
        currentHeroSlide = (currentHeroSlide + 1) % heroSlides.length;
        showHeroSlide(currentHeroSlide);
    };

    setInterval(nextHeroSlide, 5000); // Cambiar slide cada 5 segundos
    showHeroSlide(currentHeroSlide); // Mostrar el primer slide

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
});