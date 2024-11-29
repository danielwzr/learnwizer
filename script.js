// DARK MODE
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
  if (body.getAttribute('data-theme') === 'dark') {
    body.setAttribute('data-theme', 'light');
  } else {
    body.setAttribute('data-theme', 'dark');
  }
});
//





//FILTRO
const categoryFilter = document.getElementById('category-filter');
const cards = document.querySelectorAll('.card');

categoryFilter.addEventListener('change', (event) => {
  const selectedCategory = event.target.value;
  cards.forEach(card => {
    const category = card.getAttribute('data-category');
    if (selectedCategory === 'all' || category === selectedCategory) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});
//


//MENU HAMBURGUER
const hamburgerToggle = document.getElementById('hamburger-toggle');
const menu = document.querySelector('nav ul');

hamburgerToggle.addEventListener('click', () => {
  hamburgerToggle.classList.toggle('active');
  menu.classList.toggle('active');
});
//