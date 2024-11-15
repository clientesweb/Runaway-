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
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
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

    // Services slider
    const servicesData = [
        { title: "Branding", description: "Creamos identidades de marca únicas y memorables." },
        { title: "Desarrollo Web", description: "Diseñamos y desarrollamos sitios web atractivos y funcionales." },
        { title: "Marketing Digital", description: "Estrategias efectivas para aumentar tu presencia online." },
        { title: "E-commerce", description: "Soluciones de comercio electrónico personalizadas." },
        { title: "SEO", description: "Optimizamos tu sitio para los motores de búsqueda." },
        { title: "Redes Sociales", description: "Gestionamos y potenciamos tus redes sociales." }
    ];

    const servicesSlider = document.querySelector('.services-slider');
    servicesData.forEach((service, index) => {
        const serviceCard = document.createElement('div');
        serviceCard.classList.add('service-card');
        serviceCard.innerHTML = `
            <h3 class="${index % 2 === 0 ? 'montserrat' : 'the-season-light'}">${service.title}</h3>
            <p class="${index % 2 === 0 ? 'the-season-light' : 'montserrat'}">${service.description}</p>
        `;
        servicesSlider.appendChild(serviceCard);
    });

    let serviceCurrentSlide = 0;
    const serviceCards = servicesSlider.children;

    function nextServiceSlide() {
        serviceCurrentSlide = (serviceCurrentSlide + 1) % serviceCards.length;
        servicesSlider.style.transform = `translateX(-${serviceCurrentSlide * (300 + 20)}px)`;
    }

    setInterval(nextServiceSlide, 3000);

    // Portfolio grid
    const portfolioData = [
        { title: "Proyecto 1", category: "branding", image: "path/to/image1.jpg", description: "Descripción del proyecto 1" },
        { title: "Proyecto 2", category: "contenido", image: "path/to/image2.jpg", description: "Descripción del proyecto 2" },
        { title: "Proyecto 3", category: "produccion", image: "path/to/image3.jpg", description: "Descripción del proyecto 3" },
        { title: "Proyecto 4", category: "tienda", image: "path/to/image4.jpg", description: "Descripción del proyecto 4" },
        { title: "Proyecto 5", category: "pauta", image: "path/to/image5.jpg", description: "Descripción del proyecto 5" },
        { title: "Proyecto 6", category: "branding", image: "path/to/image6.jpg", description: "Descripción del proyecto 6" },
    ];

    const portfolioGrid = document.querySelector('.portfolio-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');

    function renderPortfolio(items) {
        portfolioGrid.innerHTML = '';
        items.forEach((item, index) => {
            const portfolioItem = document.createElement('div');
            portfolioItem.classList.add('portfolio-item');
            portfolioItem.dataset.category = item.category;
            portfolioItem.innerHTML = `
                <img src="${item.image}" alt="${item.title}">
                <h3 class="${index % 2 === 0 ? 'montserrat' : 'the-season-light'}">${item.title}</h3>
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
        document.getElementById('modal-image').src = item.image;
        document.getElementById('modal-description').textContent = item.description;
        modal.style.display = 'block';
    }

    closeModal.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    // Form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Aquí puedes añadir la lógica para enviar el formulario
        alert('Formulario enviado con éxito!');
    });
});