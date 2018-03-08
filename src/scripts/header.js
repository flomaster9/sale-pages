document.addEventListener("DOMContentLoaded", ready);

function ready() {
  let toggler = document.querySelector('#header-toggler');
  let nav = document.querySelector('#header-nav');

  toggler.addEventListener('click', () => {
    if (!nav) {
      return;
    }

    nav.classList.toggle('nav_open');
    toggler.classList.toggle('toggler_active');
  })
}