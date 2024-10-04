// js/main.js

import { renderComponent } from './utils/renderComponent.js';
import { Header } from './components/Header.js';
import { Hero } from './components/Hero.js';
import { Services } from './components/Services.js';
import { Portfolio } from './components/Portfolio.js';
import { Testimonials } from './components/Testimonials.js';
import { Contact } from './components/Contact.js';

document.addEventListener('DOMContentLoaded', () => {
  renderComponent('#header-container', Header);
  renderComponent('#hero-container', Hero);
  renderComponent('#services-container', Services);
  renderComponent('#portfolio-container', Portfolio);
  renderComponent('#testimonials-container', Testimonials);
  renderComponent('#contact-container', Contact);

  // Inicializar funcionalidades
  initializeSlider();
  initializeScrollAnimations();
  initializePortfolioFilters();
  initializeContactForm();
});

// Función para inicializar el slider
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

// Función para inicializar animaciones de scroll
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

// Función para inicializar filtros de portfolio
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

// Función para inicializar el formulario de contacto
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