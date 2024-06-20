document.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('menuButton');
  const menuContainer = document.getElementById('menuContainer');

  button.addEventListener('click', function (event) {
    event.stopPropagation();

    menuContainer.className = 'dropdown-nav';

    setTimeout(function () {
      menuContainer.classList.add('active');
    }, 1);
  });

  document.addEventListener('click', function (event) {
    if (!menuContainer.contains(event.target)) {
      menuContainer.classList.remove('active');
    }
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 580) {
      menuContainer.className = 'nav-list';
    }
  });
});