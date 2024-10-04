// js/components/About.js
export function About() {
  return `
    <section id="about" class="animate-on-scroll">
      <div class="container">
        <h2 class="section-title"><i class="fas fa-users"></i> Quiénes Somos</h2>
        <div class="video-container">
          <video id="agency-video" controls>
            <source src="video/agency-presentation.mp4" type="video/mp4">
            Tu navegador no soporta el elemento de video.
          </video>
        </div>
        <h3>AUMENTA TUS VENTAS, POSICIONÁ TU MARCA!</h3>
        <a href="#contacto" class="btn"><i class="fas fa-calendar-alt"></i> QUIERO AGENDAR UNA REUNIÓN</a>
      </div>
    </section>
  `;
}
