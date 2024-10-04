document.addEventListener('DOMContentLoaded', function() {
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
            }, 3000); // Cambia cada 3 segundos
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
            }, 5000); // Cambia cada 5 segundos
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
            icon: 'pencil-alt',
            title: 'Creación de Contenido',
            description: 'Generamos material relevante y atractivo para promover tu marca y aumentar su visibilidad.'
        },
        {
            icon: 'ad',
            title: 'Pauta Publicitaria',
            description: 'Planificamos y ejecutamos estrategias publicitarias efectivas en diversos canales digitales.'
        }
    ];

    const servicesSlider = document.getElementById('services-slider');
    services.forEach(service => {
        const serviceItem = document.createElement('div');
        serviceItem.className = 'keen-slider__slide';
        serviceItem.innerHTML = `
            <i class="fas fa-${service.icon} text-4xl text-accent mb-4"></i>
            <h3 class="text-xl font-bold mb-2">${service.title}</h3>
            <p class="text-gray-600">${service.description}</p>
        `;
        servicesSlider.appendChild(serviceItem);
    });

    const servicesSliderInstance = new KeenSlider('#services-slider', {
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
                },
            },
            "(min-width: 1024px)": {
                slides: {
                    perView: 3,
                    spacing: 15,
                },
            },
        },
    });

    // Botón "Ver más servicios"
    const verMasServiciosBtn = document.getElementById('ver-mas-servicios');
    verMasServiciosBtn.addEventListener('click', function() {
        servicesSliderInstance.next();
    });

    // Banner publicitario slider
    new KeenSlider('#ad-slider', {
        loop: true,
        mode: "fade",
        duration: 3000,
        dragStart: () => false,
        dragEnd: () => false,
        created: function (instance) {
            setInterval(() => {
                instance.next();
            }, 5000); // Cambia cada 5 segundos
        },
    });

    // Portfolio
    const portfolioItems = [
        { category: 'branding', image: 'images/portfolio-1.jpg', title: 'Diseño de Logo' },
        { category: 'web', image: 'images/portfolio-2.jpg', title: 'Sitio Web E-commerce' },
        { category: 'photo', image: 'images/portfolio-3.jpg', title: 'Sesión de Fotos de Producto' },
        { category: 'branding', image: 'images/portfolio-4.jpg', title: 'Identidad Corporativa' },
        { category: 'web', image: 'images/portfolio-5.jpg', title: 'Aplicación Web' },
        { category: 'photo', image: 'images/portfolio-6.jpg', title: 'Campaña Publicitaria' }
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
                        <p class="text-accent">${item.category}</p>
                    </div>
                </div>
            </div>
        `;
        portfolioGrid.appendChild(portfolioItem);
    });

    // Filtros del portfolio
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
        alert('Gracias por contactarnos. Nos pondremos en contacto contigo pronto.');
        contactForm.reset();
    });

    // Botón de programar reunión
    const scheduleMeetingBtn = document.getElementById('schedule-meeting');
    scheduleMeetingBtn.addEventListener('click', function(e) {
        e.preventDefault();
        // Aquí puedes agregar la lógica para programar una reunión
        alert('Gracias por tu interés. Te contactaremos para programar una reunión.');
    });
});