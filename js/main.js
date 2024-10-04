document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    const preloader = document.getElementById('preloader');
    const content = document.getElementById('content');
    
    window.addEventListener('load', function() {
        setTimeout(function() {
            preloader.classList.add('hidden');
            content.classList.add('visible');
            document.body.classList.remove('overflow-hidden');
        }, 1000); // Ajusta este valor para controlar cuánto tiempo se muestra el preloader
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
            icon: 'penc il-alt',
            title: 'Diseño Gráfico',
            description: 'Creamos diseños atractivos y funcionales para diversos medios y plataformas.'
        },
        {
            icon: 'code',
            title: 'Desarrollo Web',
            description: 'Diseñamos y desarrollamos sitios web modernos, responsivos y optimizados para SEO.'
        },
        {
            icon: 'bullhorn',
            title: 'Marketing Digital',
            description: 'Implementamos estrategias de marketing digital para aumentar la visibilidad y las ventas.'
        }
    ];

    const servicesSlider = document.getElementById('services-slider');
    services.forEach(service => {
        const slide = document.createElement('div');
        slide.className = 'keen-slider__slide';
        slide.innerHTML = `
            <i class="fas fa-${service.icon} text-4xl text-accent mb-4"></i>
            <h3 class="text-xl font-bold mb-2">${service.title}</h3>
            <p>${service.description}</p>
        `;
        servicesSlider.appendChild(slide);
    });

    new KeenSlider('#services-slider', {
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
            }, 5000); // Cambia cada 5 segundos
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

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});