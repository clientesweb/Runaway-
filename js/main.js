import { renderComponent } from './utils/renderComponent.js';
import { TopBanner } from './components/TopBanner.js';
import { Header } from './components/Header.js';
import { Hero } from './components/Hero.js';
import { About } from './components/About.js';
import { Services } from './components/Services.js';
import { Portfolio } from './components/Portfolio.js';
import { WhyChooseUs } from './components/WhyChooseUs.js';
import { Testimonials } from './components/Testimonials.js';
import { Commitment } from './components/Commitment.js';
import { Contact } from './components/Contact.js';
import { AdBanner } from './components/AdBanner.js';
import { Footer } from './components/Footer.js';

document.addEventListener('DOMContentLoaded', () => {
  renderComponent('#top-banner-container', TopBanner);
  renderComponent('#header-container', Header);
  renderComponent('#hero-container', Hero);
  renderComponent('#about-container', About);
  renderComponent('#services-container', Services);
  renderComponent('#portfolio-container', Portfolio);
  renderComponent('#why-choose-us-container', WhyChooseUs);
  renderComponent('#testimonials-container', Testimonials);
  renderComponent('#commitment-container', Commitment);
  renderComponent('#contact-container', Contact);
  renderComponent('#ad-banner-container', AdBanner);
  renderComponent('#footer-container', Footer);

  // Inicializar funcionalidades
  initializeSlider();
  initializeScrollAnimations();
  initializePortfolioFilters();
  initializeContactForm();
});

function initializeSlider() {
  const sliders = document.querySelectorAll('.slider');
  sliders.forEach(slider => {
    let currentSlide = 0;
    const slides = slider.querySelectorAll('.slide');
    
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
      });
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }

    setInterval(nextSlide, 5000);
    showSlide(0);
  });
}

function initializeScrollAnimations() {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
      }
    });
  }, { threshold: 0.1 });

  animatedElements.forEach(el => observer.observe(el));
}

function initializePortfolioFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');
      
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      portfolioItems.forEach(item => {
        if (filter === 'all' || item.classList.contains(filter)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

function initializeContactForm() {
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      // Aquí iría la lógica para enviar el formulario
      console.log('Formulario enviado');
      // Puedes agregar aquí la lógica para mostrar un mensaje de éxito o error
    });
  }
}

// Inicializar la funcionalidad del botón de navegación móvil
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}