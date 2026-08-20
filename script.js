const dateEl = document.getElementById('today-date');
if (dateEl) {
  const today = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  dateEl.textContent = today.toLocaleDateString('fr-FR', options);
}
