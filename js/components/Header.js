// js/components/Header.js
export function Header() {
  return `
    <header>
      <div class="container">
        <a href="index.html" class="logo">
          <img src="images/rnw-studio-logo.svg" alt="RNW Studio">
        </a>
        <button class="nav-toggle" aria-label="Abrir menú">
          <i class="fas fa-bars"></i>
        </button>
        <nav>
          <ul class="nav-menu">
            <li><a href="#inicio"><i class="fas fa-home"></i> Inicio</a></li>
            <li><a href="#servicios"><i class="fas fa-cogs"></i> Servicios</a></li>
            <li><a href="#portfolio"><i class="fas fa-briefcase"></i> Portfolio</a></li>
            <li><a href="#testimonios"><i class="fas fa-comments"></i> Testimonios</a></li>
            <li><a href="#contacto"><i class="fas fa-envelope"></i> Contacto</a></li>
          </ul>
        </nav>
        <div class="social-icons">
          <a href="#" target="_blank"><i class="fab fa-facebook-f"></i></a>
          <a href="#" target="_blank"><i class="fab fa-instagram"></i></a>
          <a href="#" target="_blank"><i class="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </header>
  `;
}

// js/components/Hero.js
export function Hero() {
  return `
    <section id="inicio" class="hero slider">
      <div class="slide">
        <div class="container">
          <h1>Impulsa tu E-Commerce hacia el Éxito con Nuestros Servicios</h1>
          <p>Hacemos que tu marca destaque y las ventas aumenten</p>
          <a href="#contacto" class="btn"><i class="fas fa-rocket"></i> Contáctanos</a>
        </div>
      </div>
      <!-- Más slides aquí -->
    </section>
  `;
}

// js/components/Services.js
export function Services() {
  const services = [
    {
      icon: "fas fa-paint-brush",
      title: "Branding",
      description: "Creamos una identidad de marca única y distintiva que se destaca en el mercado."
    },
    // Más servicios aquí
  ];

  return `
    <section id="servicios" class="animate-on-scroll">
      <div class="container">
        <h2 class="section-title"><i class="fas fa-cogs"></i> Nuestros Servicios</h2>
        <div class="services-grid">
          ${services.map(service => `
            <div class="service-item">
              <div class="circle"><i class="${service.icon}"></i></div>
              <h3>${service.title}</h3>
              <p>${service.description}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
