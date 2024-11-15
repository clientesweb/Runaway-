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

    // Services slider
    const servicesData = [
        { title: "Branding", description: "Creamos identidades de marca únicas y memorables." },
        { title: "Desarrollo Web", description: "Diseñamos y desarrollamos sitios web atractivos y funcionales." },
        { title: "Marketing Digital", description: "Estrategias efectivas para aumentar tu presencia online." },
        // Añade más servicios aquí
    ];

    const servicesSlider = document.querySelector('.services-slider');
    servicesData.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.classList.add('service-card');
        serviceCard.innerHTML = `
            <h3>${service.title}</h3>
            <p>${service.description}</p>
        `;
        servicesSlider.appendChild(serviceCard);
    });

    // Portfolio grid
    const portfolioData = [
        { title: "Proyecto 1", category: "branding", image: "path/to/image1.jpg", description: "Descripción del proyecto 1" },
        { title: "Proyecto 2", category: "contenido", image: "path/to/image2.jpg", description: "Descripción del proyecto 2" },
        // Añade más proyectos aquí
    ];

    const portfolioGrid = document.querySelector('.portfolio-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');

    function renderPortfolio(items) {
        portfolioGrid.innerHTML = '';
        items.forEach(item => {
            const portfolioItem = document.createElement('div');
            portfolioItem.classList.add('portfolio-item');
            portfolioItem.dataset.category = item.category;
            portfolioItem.innerHTML = `
                <img src="${item.image}" alt="${item.title}">
                <h3>${item.title}</h3>
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