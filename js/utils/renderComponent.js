// js/utils/renderComponent.js
export function renderComponent(containerId, component) {
  const container = document.getElementById(containerId);
  if (container) {
    container.innerHTML = component();
  }
}
