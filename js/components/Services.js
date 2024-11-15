export function Services() {
  const services = [
    {
      icon: "fas fa-paint-brush",
      title: "Branding",
      description: "Creamos una identidad de marca única y distintiva que se destaca en el mercado."
    },
    {
      icon: "fas fa-sync-alt",
      title: "Rebranding",
      description: "Renovamos la identidad de marcas existentes para mantenerlas relevantes y en sintonía con el mercado."
    },
    {
      icon: "fas fa-camera",
      title: "Producción & Estilismo",
      description: "Planificamos y ejecutamos producciones de fotos y videos para crear contenido visual coherente y efectivo."
    },
    {
      icon: "fas fa-pencil-alt",
      title: "Creación de Contenido",
      description: "Generamos material relevante y atractivo para promover tu marca y aumentar su visibilidad."
    },
    {
      icon: "fas fa-ad",
      title: "Pauta Publicitaria",
      description: "Planificamos y ejecutamos estrategias publicitarias efectivas en diversos canales digitales."
    }
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