document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    window.addEventListener('load', function() {
        document.getElementById('preloader').style.display = 'none';
    });

    // Responsive Navigation
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('nav ul');

    navToggle.addEventListener('click', function() {
        nav.classList.toggle('show');
        this.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInside = nav.contains(event.target) || navToggle.contains(event.target);
        if (!isClickInside && nav.classList.contains('show')) {
            nav.classList.remove('show');
            navToggle.classList.remove('active');
        }
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile menu after clicking a link
            if (nav.classList.contains('show')) {
                nav.classList.remove('show');
                navToggle.classList.remove('active');
            }
        });
    });

    // Sliders
    function createSlider(containerSelector, interval = 5000) {
        const slides = document.querySelectorAll(`${containerSelector} .slide`);
        let currentSlide = 0;

        function showSlide(n) {
            slides[currentSlide].classList.remove('active');
            currentSlide = (n + slides.length) % slides.length;
            slides[currentSlide].classList.add('active');
        }

        setInterval(() => showSlide(currentSlide + 1), interval);
    }

    createSlider('.hero-slider');
    createSlider('.top-banner .banner-slider', 3000);
    createSlider('.ad-banner .banner-slider', 4000);

    // Portfolio Filters
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.dataset.filter;
            
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            portfolioItems.forEach(item => {
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Form Validation
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        if (validateForm()) {
            // Here you would typically send the form data to a server
            alert('Formulario enviado con éxito!');
            contactForm.reset();
        }
    });

    function validateForm() {
        let isValid = true;
        const requiredFields = contactForm.querySelectorAll('[required]');
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                field.classList.add('error');
            } else {
                field.classList.remove('error');
            }
        });
        return isValid;
    }

    // Lazy Loading Images
    const lazyImages = document.querySelectorAll('img[data-src]');
    const lazyLoadOptions = {
        threshold: 0.5,
        rootMargin: "0px 0px 200px 0px"
    };

    const lazyLoadObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    }, lazyLoadOptions);

    lazyImages.forEach(img => lazyLoadObserver.observe(img));

    // Animate on Scroll
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    const animateOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const animateObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, animateOptions);

    animatedElements.forEach(el => animateObserver.observe(el));

    // Sticky Header
    const header = document.getElementById('main-header');
    const headerHeight = header.offsetHeight;
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop && scrollTop > headerHeight) {
            header.style.transform = `translateY(-${headerHeight}px)`;
        } else {
            header.style.transform = 'translateY(0)';
        }
        lastScrollTop = scrollTop;
    });
});

// Selección de elementos
const track = document.querySelector('.services-track');
const items = document.querySelectorAll('.service-item');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

// Variables de control del slider
let index = 0;
const itemWidth = items[0].offsetWidth + 30; // Ancho de cada item más el margen derecho

// Función para actualizar el desplazamiento del slider
function updateSlider() {
    const offset = index * itemWidth; // Cálculo del desplazamiento
    track.style.transform = `translateX(-${offset}px)`; // Aplicar el desplazamiento
}

// Evento para el botón "Anterior"
prevBtn.addEventListener('click', () => {
    if (index > 0) {
        index--;
    }
    updateSlider();
});

// Evento para el botón "Siguiente"
nextBtn.addEventListener('click', () => {
    if (index < items.length - 1) {
        index++;
    }
    updateSlider();
});

// Actualizar el slider en el resize para evitar problemas de tamaño
window.addEventListener('resize', updateSlider);