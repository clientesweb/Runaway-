// js/components/Testimonials.js
export function Testimonials() {
  const testimonials = [
    {
      text: "RNW Studio transformó completamente nuestra presencia online. Nuestras ventas se han duplicado desde que empezamos a trabajar con ellos.",
      author: "María González, CEO de FashionTrends"
    },
    {
      text: "El equipo de RNW Studio es increíblemente profesional y creativo. Han llevado nuestra marca al siguiente nivel.",
      author: "Carlos Rodríguez, Fundador de TechInnovate"
    },
    {
      text: "Gracias a las estrategias de RNW Studio, hemos logrado un crecimiento sostenido en nuestro e-commerce durante el último año.",
      author: "Ana Martínez, Directora de Marketing de EcoLife"
    }
  ];

  return `
    <section id="testimonios" class="animate-on-scroll">
      <div class="container">
        <h2 class="section-title"><i class="fas fa-quote-left"></i> Testimonios de Clientes Satisfechos</h2>
        <div class="testimonial-slider">
          ${testimonials.map(testimonial => `
            <div class="testimonial">
              <p>"${testimonial.text}"</p>
              <cite>- ${testimonial.author}</cite>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
