export function Portfolio() {
  const portfolioItems = [
    { category: "branding", image: "portfolio-1.jpg", title: "Proyecto de Branding 1" },
    { category: "web", image: "portfolio-2.jpg", title: "Proyecto Web 1" },
    { category: "photo", image: "portfolio-3.jpg", title: "Proyecto de Fotografía 1" },
    { category: "branding", image: "portfolio-4.jpg", title: "Proyecto de Branding 2" },
    { category: "web", image: "portfolio-5.jpg", title: "Proyecto Web 2" },
    { category: "photo", image: "portfolio-6.jpg", title: "Proyecto de Fotografía 2" }
  ];

  return `
    <section id="portfolio" class="animate-on-scroll">
      <div class="container">
        <h2 class="section-title"><i class="fas fa-briefcase"></i> Nuestro Portfolio</h2>
        <div class="portfolio-filters">
          <button class="filter-btn active" data-filter="all">Todos</button>
          <button class="filter-btn" data-filter="branding">Branding</button>
          <button class="filter-btn" data-filter="web">Desarrollo Web</button>
          <button class="filter-btn" data-filter="photo">Fotografía</button>
        </div>
        <div class="portfolio-grid">
          ${portfolioItems.map(item => `
            <div class="portfolio-item ${item.category}">
              <img src="images/${item.image}" alt="${item.title}">
              <div class="portfolio-overlay">
                <h3>${item.title}</h3>
                <p>Descripción breve del proyecto</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
