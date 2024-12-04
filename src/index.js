document.addEventListener('click', (e) => {
  const isDropdownBtn = e.target.matches('[data-dropdown-button]');
  if (!isDropdownBtn && e.target.closest('[data-dropdown].active') != null)
    return;

  let currentDropdown;
  if (isDropdownBtn) {
    currentDropdown = e.target.closest('[data-dropdown]');
    currentDropdown.classList.add('active');
  }

  const allDropdowns = document.querySelectorAll('[data-dropdown]');
  allDropdowns.forEach((dropdown) => {
    if (dropdown === currentDropdown) return;
    dropdown.classList.remove('active');
  });
});
