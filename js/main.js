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
        { title: "Branding 1", category: "branding", image: "path/to/branding1.jpg", description: "Descripción del proyecto de branding 1", link: "#" },
        { title: "Branding 2", category: "branding", image: "path/to/branding2.jpg", description: "Descripción del proyecto de branding 2", link: "#" },
        { title: "Branding 3", category: "branding", image: "path/to/branding3.jpg", description: "Descripción del proyecto de branding 3", link: "#" },
        { title: "Contenido 1", category: "contenido", image: "path/to/contenido1.jpg", description: "Descripción del proyecto de contenido 1", link: "#" },
        { title: "Contenido 2", category: "contenido", image: "path/to/contenido2.jpg", description: "Descripción del proyecto de contenido 2", link: "#" },
        { title: "Contenido 3", category: "contenido", image: "path/to/contenido3.jpg", description: "Descripción del proyecto de contenido 3", link: "#" },
        { title: "Producción 1", category: "produccion", image: "path/to/produccion1.jpg", description: "Descripción del proyecto de producción 1", link: "#" },
        { title: "Producción 2", category: "produccion", image: "path/to/produccion2.jpg", description: "Descripción del proyecto de producción 2", link: "#" },
        { title: "Producción 3", category: "produccion", image: "path/to/produccion3.jpg", description: "Descripción del proyecto de producción 3", link: "#" },
        { title: "Rahco", category: "tienda", image: "path/to/rahco.jpg", description: "Tienda online para Rahco", link: "#" },
        { title: "Edific", category: "tienda", image: "path/to/edific.jpg", description: "Tienda online para Edific", link: "#" },
        { title: "Hakuna Sport", category: "tienda", image: "path/to/hakuna-sport.jpg", description: "Tienda online para Hakuna Sport", link: "#" },
    ];

    const portfolioGrid = document.querySelector('.portfolio-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');

    function renderPortfolio(items) {
        portfolioGrid.innerHTML = '';
        items.forEach((item) => {
            const portfolioItem = document.createElement('div');
            portfolioItem.classList.add('portfolio-item');
            portfolioItem.dataset.category = item.category;
            portfolioItem.innerHTML = `
                <img src="${item.image}" alt="${item.title}" loading="lazy">
                <h3 class="the-season-light">${item.title}</h3>
            `;
            portfolioItem.addEventListener('click', () => openModal(item));
            portfolioGrid.appendChild(portfolioItem);
        });
    }

    renderPortfolio(portfolioData);

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.dataset.filter;
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            if (filter === 'all') {
                renderPortfolio(portfolioData);
            } else {
                const filteredItems = portfolioData.filter(item => item.category === filter);
                renderPortfolio(filteredItems);
            }
        });
    });

    // Modal functionality
    const modal = document.getElementById('gallery-modal');
    const closeModal = document.getElementsByClassName('close')[0];

    function openModal(item) {
        document.getElementById('modal-title').textContent = item.title;
        const modalImage = document.getElementById('modal-image');
        modalImage.src = item.image;
        modalImage.alt = item.title;
        document.getElementById('modal-description').textContent = item.description;
        document.getElementById('modal-link').href = item.link || '#';
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
        
        // Ajustar la imagen después de que se cargue
        modalImage.onload = function() {
            if (this.naturalHeight > window.innerHeight * 0.7) {
                this.style.height = '70vh';
                this.style.width = 'auto';
            } else {
                this.style.height = 'auto';
                this.style.width = '100%';
            }
        }
    }

    closeModal.onclick = function() {
        modal.style.display = 'none';
        document.body.style.overflow = ''; // Restore scrolling
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            document.body.style.overflow = ''; // Restore scrolling
        }
    }

    window.addEventListener('resize', function() {
        if (modal.style.display === 'block') {
            const modalImage = document.getElementById('modal-image');
            if (modalImage.naturalHeight > window.innerHeight * 0.7) {
                modalImage.style.height = '70vh';
                modalImage.style.width = 'auto';
            } else {
                modalImage.style.height = 'auto';
                modalImage.style.width = '100%';
            }
        }
    });

    // Form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(contactForm);
        fetch(contactForm.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                alert('Formulario enviado con éxito!');
                contactForm.reset();
            } else {
                throw new Error('Error en el envío del formulario');
            }
        }).catch(error => {
            alert('Hubo un problema al enviar el formulario. Por favor, inténtalo de nuevo.');
        });
    });

    // Advertising banner slider
    const adSlider = document.querySelector('.ad-slider');
    const adSlides = adSlider.children;
    let adCurrentSlide = 0;

    function nextAdSlide() {
        adSlides[adCurrentSlide].style.display = 'none';
        adCurrentSlide = (adCurrentSlide + 1) % adSlides.length;
        adSlides[adCurrentSlide].style.display = 'block';
    }

    setInterval(nextAdSlide, 7000);

    // Schedule meeting button
    const scheduleMeetingBtn = document.getElementById('schedule-meeting');
    scheduleMeetingBtn.addEventListener('click', function(e) {
        e.preventDefault();
        // Implementación de la funcionalidad de agendar una reunión
        const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const currentDate = new Date().toISOString().split('T')[0];
        const calendarUrl = `https://calendly.com/tu-usuario/30min?date=${currentDate}&timezone=${userTimeZone}`;
        window.open(calendarUrl, '_blank');
    });

    // WhatsApp float button functionality
    const whatsappFloat = document.querySelector('.whatsapp-float');
    whatsappFloat.addEventListener('click', function(e) {
        e.preventDefault();
        window.open(this.href, '_blank');
    });

    // Lazy loading for images
    const images = document.querySelectorAll('img[loading="lazy"]');
    const config = {
        rootMargin: '0px 0px 50px 0px',
        threshold: 0
    };

    let observer = new IntersectionObserver(function (entries, self) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                preloadImage(entry.target);
                self.unobserve(entry.target);
            }
        });
    }, config);

    images.forEach(image => {
        observer.observe(image);
    });

    function preloadImage(img) {
        const src = img.getAttribute('src');
        if (!src) { return; }
        img.src = src;
    }

    // Testimonial slider
    const testimonialSlider = document.querySelector('.testimonial-slider');
    if (testimonialSlider) {
        const testimonials = [
            { text: "RNW Studio transformó nuestra marca. Su enfoque creativo y estratégico nos ayudó a destacar en el mercado.", author: "Cliente Satisfecho 1" },
            { text: "El equipo de RNW Studio es increíblemente profesional y talentoso. Superaron nuestras expectativas.", author: "Cliente Satisfecho 2" },
            { text: "Gracias a RNW Studio, nuestra presencia en línea ha mejorado significativamente. Altamente recomendados.", author: "Cliente Satisfecho 3" }
        ];

        testimonials.forEach(testimonial => {
            const testimonialElement = document.createElement('div');
            testimonialElement.classList.add('testimonial');
            testimonialElement.innerHTML = `
                <p class="montserrat">"${testimonial.text}"</p>
                <p class="the-season-light">- ${testimonial.author}</p>
            `;
            testimonialSlider.appendChild(testimonialElement);
        });

        let currentTestimonial = 0;
        const testimonialElements = testimonialSlider.children;

        function nextTestimonial() {
            testimonialElements[currentTestimonial].style.display = 'none';
            currentTestimonial = (currentTestimonial + 1) % testimonialElements.length;
            testimonialElements[currentTestimonial].style.display = 'block';
        }

        setInterval(nextTestimonial, 5000);
    }

    // Scroll to top button
    const scrollToTopButton = document.createElement('button');
    scrollToTopButton.innerHTML = '&#8593;';
    scrollToTopButton.setAttribute('aria-label', 'Volver arriba');
    scrollToTopButton.classList.add('scroll-to-top');
    document.body.appendChild(scrollToTopButton);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            scrollToTopButton.classList.add('show');
        } else {
            scrollToTopButton.classList.remove('show');
        }
    });

    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});