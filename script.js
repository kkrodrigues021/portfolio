const toggleButton = document.getElementById('toggle-theme');
const body = document.body;

// Aplica o tema salvo
if (localStorage.getItem('theme') === 'light') {
  body.classList.add('light');
  toggleButton.innerHTML = '<i class="fas fa-sun"></i>';
}

toggleButton.addEventListener('click', () => {
  body.classList.toggle('light');

  if (body.classList.contains('light')) {
    localStorage.setItem('theme', 'light');
    toggleButton.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    localStorage.setItem('theme', 'dark');
    toggleButton.innerHTML = '<i class="fas fa-moon"></i>';
  }
});
