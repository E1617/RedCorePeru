function toggleTooltip(icon) {
  // Cierra otras descripciones
  document.querySelectorAll('.valor-card').forEach(card => {
    if (card !== icon.parentElement) {
      card.classList.remove('active');
    }
  });

  // Alternar tooltip del ícono clicado
  icon.parentElement.classList.toggle('active');
}
