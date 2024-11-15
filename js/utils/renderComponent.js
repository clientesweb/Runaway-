// js/utils/renderComponent.js

export function renderComponent(selector, component) {
  const container = document.querySelector(selector);
  if (container) {
    container.innerHTML = component();
  } else {
    console.warn(`Container not found for selector: ${selector}`);
  }
}