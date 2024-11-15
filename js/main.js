document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    const preloader = document.getElementById('preloader');
    const content = document.getElementById('content');
    
    window.addEventListener('load', function() {
        setTimeout(function() {
            preloader.classList.add('hidden');
            content.classList.add('visible');
            document.body.classList.remove('overflow-hidden');
        }, 2000);
    });

    // Menú móvil
    const menuToggle = document.getElementById('menu-toggle');
    const mobileNav = document.getElementById('mobile-nav');

    menuToggle.addEventListener('click', function() {
        mobileNav.classList.toggle('active');
    });

    // Cerrar menú móvil al hacer clic en un enlace
    const mobileNavLinks = mobileNav.querySelectorAll('a');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileNav.classList.remove('active');
        });
    });

    // Promo Banner Slider
    new KeenSlider('#promo-slider', {
        loop: true,
        mode: "free",
        slides: {
            perView: 1,
            spacing: 15,
        },
        created: function (instance) {
            setInterval(() => {
                instance.next();
            }, 3000);
        },
    });

    // Hero Slider
    new KeenSlider('#hero-slider', {
        loop: true,
        mode: "fade",
        duration: 3000,
        dragStart: () => false,
        dragEnd: () => false,
        created: function (instance) {
            setInterval(() => {
                instance.next();
            }, 5000);
        },
    });

    // Servicios
    const services = [
        {
            icon: 'paint-brush',
            title: 'Branding',
            description: 'Creamos una identidad de marca única y distintiva que se destaca en el mercado.'
        },
        {
            icon: 'sync-alt',
            title: 'Rebranding',
            description: 'Renovamos la identidad de marcas existentes para mantenerlas relevantes y en sintonía con el mercado.'
        },
        {
            icon: 'camera',
            title: 'Producción & Estilismo',
            description: 'Planificamos y ejecutamos producciones de fotos y videos para crear contenido visual coherente y efectivo.'
        },
        {
            icon: 'comments',
            title: 'Gestión de Contenido y Redes Sociales',
            description: 'Desarrollamos y gestionamos contenido visual y escrito que refleja la identidad de tu marca, construyendo una presencia sólida y coherente en redes sociales.'
        },
        {
            icon: 'users',
            title: 'Community Manager',
            description: 'Administramos y gestionamos la presencia de tu marca en redes sociales.'
        },
        {
            icon: 'ad',
            title: 'Paid Media',
            description: 'Gestionamos la publicidad estratégica en plataformas clave, optimizando la visibilidad y alcance de tu marca.'
        },
        {
            icon: 'laptop-code',
            title: 'Website',
            description: 'Desarrollo de sitios web funcionales y atractivos, pensados para brindar una experiencia de usuario fluida.'
        }
    ];

    const servicesSlider = document.getElementById('services-slider');
    let servicesKeenSlider;

    function initServicesSlider(slidesToShow) {
        if (servicesKeenSlider) {
            servicesKeenSlider.destroy();
        }

        servicesSlider.innerHTML = '';
        
        services.slice(0, slidesToShow).forEach(service => {
            const slide = document.createElement('div');
            slide.className = 'keen-slider__slide';
            slide.innerHTML = `
                <i class="fas fa-${service.icon} text-4xl text-accent mb-4"></i>
                <h3 class="text-xl font-bold mb-2">${service.title}</h3>
                <p>${service.description}</p>
            `;
            servicesSlider.appendChild(slide);
        });

        servicesKeenSlider = new KeenSlider('#services-slider', {
            loop: true,
            mode: "free-snap",
            slides: {
                perView: 1,
                spacing: 15,
            },
            breakpoints: {
                "(min-width: 768px)": {
                    slides: {
                        perView: 2,
                        spacing: 15,
                    }
                },
                "(min-width: 1024px)": {
                    slides: {
                        perView: 3,
                        spacing: 15,
                    }
                }
            }
        });
    }

    initServicesSlider(3);

    const verMasServiciosBtn = document.getElementById('ver-mas-servicios');
    verMasServiciosBtn.addEventListener('click', function() {
        if (services.length > 3) {
            initServicesSlider(services.length);
            this.style.display = 'none';
        }
    });

    // Banner Publicitario Slider
    new KeenSlider('#ad-slider', {
        loop: true,
        mode: "free-snap",
        slides: {
            perView: 1,
            spacing: 15,
        },
        created: function (instance) {
            setInterval(() => {
                instance.next();
            }, 5000);
        },
    });

    // Portfolio
    const portfolioItems = [
        { category: 'branding', image: 'images/portfolio-1.jpg', title: 'Proyecto 1', description: 'Branding para empresa de tecnología' },
        { category: 'web', image: 'images/portfolio-2.jpg', title: 'Proyecto 2', description: 'Desarrollo web para e-commerce' },
        { category: 'photo', image: 'images/portfolio-3.jpg', title: 'Proyecto 3', description: 'Sesión fotográfica para marca de moda' },
        { category: 'branding', image: 'images/portfolio-4.jpg', title: 'Proyecto 4', description: 'Rebranding para restaurante' },
        { category: 'web', image: 'images/portfolio-5.jpg', title: 'Proyecto 5', description: 'Diseño UX/UI para aplicación móvil' },
        { category: 'photo', image: 'images/portfolio-6.jpg', title: 'Proyecto 6', description: 'Producción de video para campaña publicitaria' },
    ];

    const portfolioGrid = document.getElementById('portfolio-grid');
    portfolioItems.forEach(item => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = `portfolio-item ${item.category}`;
        portfolioItem.innerHTML = `
            <div class="relative overflow-hidden rounded-lg">
                <img src="${item.image}" alt="${item.title}" class="w-full h-64 object-cover">
                <div class="portfolio-overlay absolute inset-0 flex items-center justify-center">
                    <div class="text-center">
                        <h3 class="text-white text-xl font-bold mb-2">${item.title}</h3>
                        <p class="text-white">${item.description}</p>
                    </div>
                </div>
            </div>
        `;
        portfolioGrid.appendChild(portfolioItem);
    });

    // Filtro de Portfolio
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const portfolioItems = document.querySelectorAll('.portfolio-item');
            portfolioItems.forEach(item => {
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Formulario de contacto
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Aquí puedes agregar la lógica para enviar el formulario
        alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
        contactForm.reset();
    });

    // Agendar reunión
    const scheduleMeetingBtn = document.getElementById('schedule-meeting');
    scheduleMeetingBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const calendlyURL = 'https://calendly.com/tu-usuario/30min'; // Reemplaza con tu URL de Calendly
        window.open(calendlyURL, '_blank');
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Modal de Galería
    const galleryModal = document.getElementById('gallery-modal');
    const closeModal = document.getElementById('close-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalImage = document.getElementById('modal-image');
    const modalDescription = document.getElementById('modal-description');
    const modalLink = document.getElementById('modal-link');

    portfolioGrid.addEventListener('click', function(e) {
        const portfolioItem = e.target.closest('.portfolio-item');
        if (portfolioItem) {
            const title = portfolioItem.querySelector('h3').textContent;
            const description = portfolioItem.querySelector('p').textContent;
            const imageSrc = portfolioItem.querySelector('img').src;

            modalTitle.textContent = title;
            modalImage.src = imageSrc;
            modalImage.alt = title;
            modalDescription.textContent = description;
            modalLink.href = '#'; // Actualiza esto con el enlace real al proyecto

            galleryModal.classList.remove('hidden');
            galleryModal.classList.add('flex');
        }
    });

    closeModal.addEventListener('click', function() {
        galleryModal.classList.add('hidden');
        galleryModal.classList.remove('flex');
    });

    galleryModal.addEventListener('click', function(e) {
        if (e.target === galleryModal) {
            galleryModal.classList.add('hidden');
            galleryModal.classList.remove('flex');
        }
    });
});