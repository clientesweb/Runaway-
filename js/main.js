document.addEventListener('DOMContentLoaded', () => {
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

    // Filtros de galería
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            portfolioItems.forEach(item => {
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

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

    // Reproducir video automáticamente cuando esté en vista
    const video = document.querySelector('#agency-video');
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                video.play();
            } else {
                video.pause();
            }
        });
    }, options);

    if (video) {
        observer.observe(video);
    }

    // Slider para el hero
    const heroSlider = document.querySelector('.hero.slider');
    const heroSlides = heroSlider.querySelectorAll('.slide');
    let currentSlide = 0;

    const showSlide = (index) => {
        heroSlides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    };

    const nextSlide = () => {
        currentSlide = (currentSlide + 1) % heroSlides.length;
        showSlide(currentSlide);
    };

    setInterval(nextSlide, 5000); // Cambiar slide cada 5 segundos
    showSlide(currentSlide); // Mostrar el primer slide

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

    // Slider para testimonios
    const testimonialSlider = document.querySelector('.testimonial-slider');
    const testimonials = testimonialSlider.querySelectorAll('.testimonial');
    let currentTestimonial = 0;

    const showTestimonial = (index) => {
        testimonials.forEach((testimonial, i) => {
            testimonial.style.display = i === index ? 'block' : 'none';
        });
    };

    const nextTestimonial = () => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    };

    setInterval(nextTestimonial, 6000); // Cambiar testimonio cada 6 segundos
    showTestimonial(currentTestimonial); // Mostrar el primer testimonio

    // Manejo del formulario de contacto
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Aquí puedes agregar la lógica para enviar el formulario y programar la reunión
            // Por ejemplo, puedes usar la API de Google Calendar para programar la reunión
            alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto para programar nuestra reunión.');
        });
    }
});