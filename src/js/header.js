const menuToggle = document.querySelector('.menu-toggle');
const menuClose = document.querySelector('.menu-close');
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelectorAll('.mobile-nav-link');

function openMenu() {
  mobileMenu.style.display = 'block';
  menuToggle.style.display = 'none';
  menuClose.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  mobileMenu.style.display = 'none';
  menuToggle.style.display = 'block';
  menuClose.style.display = 'none';
  document.body.style.overflow = '';
}

menuToggle.addEventListener('click', openMenu);

menuClose.addEventListener('click', closeMenu);

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && mobileMenu.style.display === 'block') {
    closeMenu();
  }
});

navLinks.forEach(link => {
  link.addEventListener('click', event => {
    closeMenu();
    const targetId = link.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
  });
});
