document.addEventListener('DOMContentLoaded', function() {
    // Servicios
    const services = [
        {
            icon: 'paint-brush',
            title: 'Branding',
            description: 'Creamos una identidad de marca única y distintiva que se destaca en el mercado.',
            image: 'images/service-branding.jpg'
        },
        {
            icon: 'sync-alt',
            title: 'Rebranding',
            description: 'Renovamos la identidad de marcas existentes para mantenerlas relevantes y en sintonía con el mercado.',
            image: 'images/service-rebranding.jpg'
        },
        {
            icon: 'camera',
            title: 'Producción & Estilismo',
            description: 'Planificamos y ejecutamos producciones de fotos y videos para crear contenido visual coherente y efectivo.',
            image: 'images/service-produccion.jpg'
        },
        {
            icon: 'pencil-alt',
            title: 'Creación de Contenido',
            description: 'Generamos material relevante y atractivo para promover tu marca y aumentar su visibilidad.',
            image: 'images/service-contenido.jpg'
        },
        {
            icon: 'ad',
            title: 'Pauta Publicitaria',
            description: 'Planificamos y ejecutamos estrategias publicitarias efectivas en diversos canales digitales.',
            image: 'images/service-pauta.jpg'
        }
    ];

    const servicesSlider = document.querySelector('.services-slider');
    services.forEach(service => {
        const slide = document.createElement('div');
        slide.className = 'keen-slider__slide bg-white rounded-lg shadow-lg overflow-hidden';
        slide.innerHTML = `
            <img src="${service.image}" alt="${service.title}" class="w-full h-48 object-cover">
            <div class="p-6">
                <i class="fas fa-${service.icon} text-4xl text-accent mb-4"></i>
                <h3 class="text-xl font-bold mb-2">${service.title}</h3>
                <p class="text-gray-600">${service.description}</p>
            </div>
        `;
        servicesSlider.appendChild(slide);
    });

    new KeenSlider('.services-slider', {
        loop: true,
        mode: "free-snap",
        slides: {
            perView: 3,
            spacing: 15,
        },
        breakpoints: {
            '(max-width: 768px)': {
                slides: { perView: 1, spacing: 10 },
            },
            '(max-width: 1024px)': {
                slides: { perView: 2, spacing: 10 },
            },
        },
    });

    // Portfolio
    const portfolio = [
        { id: 1, category: 'branding', image: 'images/portfolio-1.jpg', title: 'Proyecto de Branding 1' },
        { id: 2, category: 'web', image: 'images/portfolio-2.jpg', title: 'Proyecto Web 1' },
        { id: 3, category: 'photo', image: 'images/portfolio-3.jpg', title: 'Proyecto de Fotografía 1' },
        { id: 4, category: 'branding', image: 'images/portfolio-4.jpg', title: 'Proyecto de Branding 2' },
        { id: 5, category: 'web', image: 'images/portfolio-5.jpg', title: 'Proyecto Web 2' },
        { id: 6, category: 'photo', image: 'images/portfolio-6.jpg', title: 'Proyecto de Fotografía 2' },
    ];

    const portfolioGrid = document.getElementById('portfolio-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');

    function renderPortfolio(items) {
        portfolioGrid.innerHTML = '';
        items.forEach(item => {
            const portfolioItem = document.createElement('div');
            portfolioItem.className = 'portfolio-item relative overflow-hidden rounded-lg shadow-lg';
            portfolioItem.innerHTML = `
                <img src="${item.image}" alt="${item.title}" class="w-full h-64 object-cover">
                <div class="portfolio-overlay absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <h3 class="text-white text-xl font-bold">${item.title}</h3>
                </div>
            `;
            portfolioGrid.appendChild(portfolioItem);
        });
    }

    renderPortfolio(portfolio);

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const filteredItems = filter === 'all' ? portfolio : portfolio.filter(item => item.category === filter);
            renderPortfolio(filteredItems);
        });
    });

    // Formulario de contacto
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Aquí iría la lógica para manejar el envío del formulario
        console.log('Formulario enviado');
        alert('Gracias por tu mensaje. Te contactaremos pronto.');
        contactForm.reset();
    });

    // Animaciones de scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll('.animate-fade-in');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (elementTop < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Llamar una vez al cargar la página
});