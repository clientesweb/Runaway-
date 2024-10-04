// js/components/WhyChooseUs.js
export function WhyChooseUs() {
  const reasons = [
    {
      icon: "fas fa-chart-line",
      title: "Resultados Comprobados",
      description: "Nuestras estrategias han impulsado el crecimiento de numerosos e-commerce."
    },
    {
      icon: "fas fa-users",
      title: "Equipo Experto",
      description: "Contamos con profesionales especializados en cada área del marketing digital."
    },
    {
      icon: "fas fa-cogs",
      title: "Enfoque Personalizado",
      description: "Desarrollamos estrategias a medida para cada cliente y sus objetivos específicos."
    }
  ];

  return `
    <section id="why-choose-us" class="animate-on-scroll">
      <div class="container">
        <h2 class="section-title"><i class="fas fa-check-circle"></i> Por qué Elegirnos</h2>
        <div class="reasons-grid">
          ${reasons.map(reason => `
            <div class="reason-item">
              <i class="${reason.icon}"></i>
              <h3>${reason.title}</h3>
              <p>${reason.description}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
