// js/components/Contact.js
export function Contact() {
  return `
    <section id="contacto" class="animate-on-scroll">
      <div class="container">
        <h2 class="section-title"><i class="fas fa-envelope"></i> Contáctanos</h2>
        <p>Completa el formulario y programemos nuestra primera reunión para empezar a trabajar juntos!</p>
        <form id="contact-form">
          <div class="form-group">
            <label for="nombre"><i class="fas fa-user"></i> Nombre completo *</label>
            <input type="text" id="nombre" name="nombre" required>
          </div>
          <div class="form-group">
            <label for="whatsapp"><i class="fab fa-whatsapp"></i> WhatsApp *</label>
            <input type="tel" id="whatsapp" name="whatsapp" required>
          </div>
          <div class="form-group">
            <label for="sitio_web"><i class="fas fa-globe"></i> Sitio Web *</label>
            <input type="url" id="sitio_web" name="sitio_web" required>
          </div>
          <div class="form-group">
            <label for="pais"><i class="fas fa-map-marker-alt"></i> País</label>
            <input type="text" id="pais" name="pais">
          </div>
          <div class="form-group">
            <label for="servicios"><i class="fas fa-list-ul"></i> ¿En qué servicios estás interesado? *</label>
            <select id="servicios" name="servicios" required>
              <option value="">Selecciona una opción</option>
              <option value="branding">BRANDING</option>
              <option value="contenido">CREACIÓN DE CONTENIDO | PRODUCCIÓN & ESTILISMO</option>
              <option value="pauta">PAUTA PUBLICITARIA</option>
              <option value="todos">TODOS</option>
            </select>
          </div>
          <div class="form-group">
            <label for="anos_empresa"><i class="fas fa-building"></i> ¿Cuántos años lleva la empresa en el mercado?</label>
            <input type="number" id="anos_empresa" name="anos_empresa">
          </div>
          <div class="form-group">
            <label for="facturacion"><i class="fas fa-dollar-sign"></i> ¿Cuánto estás facturando por mes? *</label>
            <select id="facturacion" name="facturacion" required>
              <option value="">Selecciona una opción</option>
              <option value="0-1000">0-1000 USD</option>
              <option value="1000-3000">1000 USD A 3000 USD</option>
              <option value="3000-5000">3000 USD A 5000 USD</option>
              <option value="5000-10000">5000 USD - 10.000 USD</option>
            </select>
          </div>
          <div class="form-group">
            <label for="inversion_previa"><i class="fas fa-ad"></i> ¿Alguna vez invertiste en pauta publicitaria? *</label>
            <select id="inversion_previa" name="inversion_previa" required>
              <option value="">Selecciona una opción</option>
              <option value="si">Sí</option>
              <option value="no">No</option>
            </select>
          </div>
          <div class="form-group">
            <label for="inversion_futura"><i class="fas fa-money-bill-wave"></i> ¿Qué monto estarías dispuesto a invertir en pauta publicitaria?</label>
            <input type="number" id="inversion_futura" name="inversion_futura">
          </div>
          <button type="submit" class="btn"><i class="fas fa-paper-plane"></i> Enviar y Agendar Reunión</button>
        </form>
      </div>
    </section>
  `;
}
