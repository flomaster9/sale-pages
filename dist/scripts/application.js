'use strict';

document.addEventListener("DOMContentLoaded", ready);

function ready() {
  var toggler = document.querySelector('#header-toggler');
  var nav = document.querySelector('#header-nav');

  toggler.addEventListener('click', function () {
    if (!nav) {
      return;
    }

    nav.classList.toggle('nav_open');
    toggler.classList.toggle('toggler_active');
  });
}