// js/main.js
import { renderComponent } from './utils/renderComponent.js';
import { Header } from './components/Header.js';
import { Hero } from './components/Hero.js';
import { Services } from './components/Services.js';
// Importa los demás componentes aquí

document.addEventListener('DOMContentLoaded', () => {
  renderComponent('header', Header);
  renderComponent('hero', Hero);
  renderComponent('services', Services);
  // Renderiza los demás componentes aquí

  // Aquí puedes mantener el resto de tu lógica JavaScript existente
  // Por ejemplo:
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('nav');

  navToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
  });

  // ... (resto de tu código JavaScript)
});
