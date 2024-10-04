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

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Hero Slider
    const heroSlides = document.querySelectorAll('.hero-slider .slide');
    let currentHeroSlide = 0;

    function showHeroSlide(n) {
        heroSlides[currentHeroSlide].classList.remove('active');
        currentHeroSlide = (n + heroSlides.length) % heroSlides.length;
        heroSlides[currentHeroSlide].classList.add('active');
    }

    setInterval(() => showHeroSlide(currentHeroSlide + 1), 5000);

    // Top Banner Slider
    const topBannerSlides = document.querySelectorAll('.top-banner .slide');
    let currentTopBannerSlide = 0;

    function showTopBannerSlide(n) {
        topBannerSlides[currentTopBannerSlide].classList.remove('active');
        currentTopBannerSlide = (n + topBannerSlides.length) % topBannerSlides.length;
        topBannerSlides[currentTopBannerSlide].classList.add('active');
    }

    setInterval(() => showTopBannerSlide(currentTopBannerSlide + 1), 3000);

    // Ad Banner Slider
    const adBannerSlides = document.querySelectorAll('.ad-banner .slide');
    let currentAdBannerSlide = 0;

    function showAdBannerSlide(n) {
        adBannerSlides[currentAdBannerSlide].classList.remove('active');
        currentAdBannerSlide = (n + adBannerSlides.length) % adBannerSlides.length;
        adBannerSlides[currentAdBannerSlide].classList.add('active');
    }

    setInterval(() => showAdBannerSlide(currentAdBannerSlide + 1), 4000);

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
});