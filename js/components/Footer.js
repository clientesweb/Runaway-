// js/components/Footer.js
export function Footer() {
  return `
    <footer>
      <div class="container">
        <div class="footer-content">
          <div class="footer-logo">
            <img src="images/rnw-studio-logo.svg" alt="RNW Studio">
          </div>
          <div class="footer-links">
            <h4>Enlaces rápidos</h4>
            <ul>
              <li><a href="#inicio"><i class="fas fa-home"></i> Inicio</a></li>
              <li><a href="#servicios"><i class="fas fa-cogs"></i> Servicios</a></li>
              <li><a href="#portfolio"><i class="fas fa-briefcase"></i> Portfolio</a></li>
              <li><a href="#contacto"><i class="fas fa-envelope"></i> Contacto</a></li>
            </ul>
          </div>
          <div class="footer-contact">
            <h4>Contáctanos</h4>
            <p><i class="fas fa-envelope"></i> Email: info@rnwstudio.com</p>
            <p><i class="fas fa-phone"></i> Teléfono: +1 234 567 890</p>
          </div>
          <div class="footer-social">
            <h4>Síguenos</h4>
            <div class="social-icons">
              <a href="#" target="_blank"><i class="fab fa-facebook-f"></i></a>
              <a href="#" target="_blank"><i class="fab fa-instagram"></i></a>
              <a href="#" target="_blank"><i class="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2024 RNW Studio. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  `;
}
