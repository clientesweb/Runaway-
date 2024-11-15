document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    window.addEventListener('load', function() {
        document.getElementById('preloader').style.display = 'none';
        document.getElementById('content').style.opacity = '1';
    });

    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');
    menuToggle.addEventListener('click', function() {
        mainNav.classList.toggle('active');
        menuToggle.setAttribute('aria-expanded', mainNav.classList.contains('active'));
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
                // Close mobile menu if open
                if (mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                    menuToggle.setAttribute('aria-expanded', 'false');
                }
            }
        });
    });

    // Top banner slider
    const topBannerSlider = document.querySelector('.top-banner-slider');
    const topBannerSlides = topBannerSlider.children;
    let topBannerCurrentSlide = 0;

    function nextTopBannerSlide() {
        topBannerSlides[topBannerCurrentSlide].style.display = 'none';
        topBannerCurrentSlide = (topBannerCurrentSlide + 1) % topBannerSlides.length;
        topBannerSlides[topBannerCurrentSlide].style.display = 'inline-block';
    }

    setInterval(nextTopBannerSlide, 5000);

    // Hero slider
    const heroSlider = document.querySelector('.hero-slider');
    const heroSlides = heroSlider.children;
    let heroCurrentSlide = 0;

    function nextHeroSlide() {
        heroCurrentSlide = (heroCurrentSlide + 1) % heroSlides.length;
        heroSlider.style.transform = `translateX(-${heroCurrentSlide * 100}%)`;
    }

    setInterval(nextHeroSlide, 5000);

    // Services grid
    const servicesData = [
        { 
            title: "Branding", 
            description: "Creamos una identidad de marca única y distintiva que se destaca en el mercado.",
            icon: "fas fa-paint-brush"
        },
        { 
            title: "Rebranding", 
            description: "Renovamos la identidad de marcas existentes para mejorar su relevancia y sintonía con el mercado.",
            icon: "fas fa-sync-alt"
        },
        { 
            title: "Producción & Estilismo", 
            description: "Planificamos y ejecutamos producciones de fotos o videos para crear contenido visual coherente y efectivo.",
            icon: "fas fa-camera"
        },
        { 
            title: "Creación de contenido", 
            description: "Generamos material relevante y atractivo para promover tu marca y fomentar la interacción con la audiencia.",
            icon: "fas fa-pencil-alt"
        },
        { 
            title: "Pauta Publicitaria", 
            description: "Planificamos estratégicamente la inversión publicitaria para maximizar el alcance y el retorno de inversión.",
            icon: "fas fa-ad"
        },
        { 
            title: "Gestión de Contenido y Redes Sociales", 
            description: "Desarrollamos y gestionamos contenido que refleja la identidad de tu marca en redes sociales.",
            icon: "fas fa-share-alt"
        },
        { 
            title: "Community Manager", 
            description: "Administramos y gestionamos la presencia de tu marca en redes sociales.",
            icon: "fas fa-users"
        },
        { 
            title: "Paid Media", 
            description: "Gestionamos la publicidad estratégica en plataformas clave para maximizar la visibilidad y el alcance de tu marca.",
            icon: "fas fa-bullhorn"
        },
        { 
            title: "Website", 
            description: "Desarrollamos sitios web funcionales y atractivos que reflejan la personalidad de tu marca en el entorno digital.",
            icon: "fas fa-laptop-code"
        }
    ];

    const servicesGrid = document.querySelector('.services-grid');
    servicesData.forEach((service) => {
        const serviceCard = document.createElement('div');
        serviceCard.classList.add('service-card');
        serviceCard.innerHTML = `
            <i class="${service.icon} service-icon" aria-hidden="true"></i>
            <h3 class="the-season-light">${service.title}</h3>
            <p class="montserrat">${service.description}</p>
        `;
        servicesGrid.appendChild(serviceCard);
    });

    // Portfolio grid
    const portfolioData = [
        { title: "Branding 1", category: "branding", image: "images/branding.png", description: "Brainding para Bel Divano", link: "https://www.instagram.com/beldivano.shop?igsh=ZzV5YXYyeTVxZXJp" },
        { title: "Branding 2", category: "branding", image: "images/branding2.jpg", description: "Descripción del proyecto de branding 2", link: "#" },
        { title: "Branding 3", category: "branding", image: "images/branding3.jpg", description: "Descripción del proyecto de branding 3", link: "#" },
        { title: "Contenido 1", category: "contenido", image: "images/redes.png", description: "Descripción del proyecto de contenido 1", link: "#" },
        { title: "Contenido 2", category: "contenido", image: "images/redes1.png", description: "Descripción del proyecto de contenido 2", link: "#" },
        { title: "Producción 1", category: "produccion", image: "images/produccion.jpg", description: "Descripción del proyecto de producción 1", link: "#" },
        { title: "Producción 2", category: "produccion", image: "images/produccion2.jpg", description: "Descripción del proyecto de producción 2", link: "#" },
        { title: "Bel Divano", category: "tienda", image: "images/baldivano.png", description: "Descripción del proyecto de tienda online 1", link: "https://beldivano.com.ar/" },
        { title: "Hakuna Sports", category: "tienda", image: "images/hakuna.png", description: "Descripción del proyecto de tienda online 1", link:"https://hakunamatata45.mitiendanube.com/" },
        { title: "RAHCO S.A.S", category: "tienda", image: "images/raco.png", description: "Descripción del proyecto de tienda online 1", link: "https://rahcosas.com.ar/" },
        { title: "GRAPE!", category: "tienda", image: "images/grape.png", description: "Descripción del proyecto de tienda online 1", link: "https://grapebarramovil.com/" },
        { title: "Perimetrales Las Flores", category: "tienda", image: "images/IMG-20241111-WA0040.jpg", description: "Descripción del proyecto de tienda online 1", link: "https://perimetraleslasflores.com/" },
        { title: "Pauta 1", category: "pauta", image: "images/pauta1.jpg", description: "Descripción del proyecto de pauta publicitaria 1", link: "#" },
        { title: "Pauta 2", category: "pauta", image: "images/pauta2.jpg", description: "Descripción del proyecto de pauta publicitaria 2", link: "#" }
    ];

    const portfolioGrid = document.querySelector('.portfolio-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');

    function createPortfolioItem(item) {
        const portfolioItem = document.createElement('div');
        portfolioItem.classList.add('portfolio-item');
        portfolioItem.dataset.category = item.category;
        portfolioItem.innerHTML = `
            <img src="images/placeholder.jpg" data-src="${item.image}" alt="${item.title}" loading="lazy">
        `;
        portfolioItem.addEventListener('click', () => openModal(item));
        return portfolioItem;
    }

    function filterPortfolio(category) {
        const items = portfolioGrid.children;
        for (let item of items) {
            if (category === 'all' || item.dataset.category === category) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        }
    }

    portfolioData.forEach((item) => {
        portfolioGrid.appendChild(createPortfolioItem(item));
    });

    filterButtons.forEach((button) => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            filterPortfolio(button.dataset.filter);
        });
    });

    // Modal functionality
    const modal = document.getElementById('gallery-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalImage = document.getElementById('modal-image');
    const modalDescription = document.getElementById('modal-description');
    const modalLink = document.getElementById('modal-link');
    const closeButton = modal.querySelector('.close');

    function openModal(item) {
        modalTitle.textContent = item.title;
        modalImage.src = item.image;
        modalImage.alt = item.title;
        modalDescription.textContent = item.description;
        modalLink.href = item.link;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    closeButton.addEventListener('click', closeModal);
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Testimonial slider
    const testimonials = [
        { text: "RNW Studio transformó completamente nuestra presencia en línea. Su enfoque estratégico y creatividad nos ayudaron a destacar en un mercado competitivo.", author: "María G., CEO de TechSolutions" },
        { text: "El equipo de RNW Studio no solo entendió nuestra visión, sino que la elevó a un nivel que no imaginábamos posible. Su trabajo en nuestro branding fue excepcional.", author: "Carlos R., Fundador de EcoLife" },
        { text: "Desde que comenzamos a trabajar con RNW Studio, nuestras ventas en línea han aumentado significativamente. Su experiencia en marketing digital es invaluable.", author: "Laura M., Directora de Marketing en FashionNow" }
    ];

    const testimonialSlider = document.querySelector('.testimonial-slider');
    let currentTestimonial = 0;

    function createTestimonialSlide(testimonial) {
        const slide = document.createElement('div');
        slide.classList.add('testimonial-slide');
        slide.innerHTML = `
            <p class="montserrat">"${testimonial.text}"</p>
            <p class="the-season-light author">- ${testimonial.author}</p>
        `;
        return slide;
    }

    testimonials.forEach(testimonial => {
        testimonialSlider.appendChild(createTestimonialSlide(testimonial));
    });

    function nextTestimonial() {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        testimonialSlider.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    }

    setInterval(nextTestimonial, 8000);

    // Form validation
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        if (validateForm()) {
            // Here you would typically send the form data to a server
            alert('Formulario enviado con éxito. Nos pondremos en contacto contigo pronto.');
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

    // Lazy loading images
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    const lazyImageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const lazyImage = entry.target;
                lazyImage.src = lazyImage.dataset.src;
                lazyImage.classList.add('loaded');
                observer.unobserve(lazyImage);
            }
        });
    });

    lazyImages.forEach(image => lazyImageObserver.observe(image));

    // Schedule meeting button
    const scheduleButton = document.getElementById('schedule-meeting');
    scheduleButton.addEventListener('click', function(e) {
        e.preventDefault();
        // Here you would typically open a scheduling tool or redirect to a scheduling page
        alert('Funcionalidad de programación de reuniones aún no implementada. Por favor, contáctanos directamente.');
    });

    // Ad slider
    const adSlider = document.querySelector('.ad-slider');
    const adSlides = adSlider.children;
    let currentAdSlide = 0;

    function nextAdSlide() {
        adSlides[currentAdSlide].style.display = 'none';
        currentAdSlide = (currentAdSlide + 1) % adSlides.length;
        adSlides[currentAdSlide].style.display = 'block';
    }

    setInterval(nextAdSlide, 10000);
});