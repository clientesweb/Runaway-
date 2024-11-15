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