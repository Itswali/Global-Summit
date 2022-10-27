const hamburger = document.querySelector('.bars');
const overlay = document.querySelector('.overlay');
const mainMenu = document.querySelector('.main-menu');
const cancel = document.querySelector('.cancel');
const links = document.querySelector('.menu-item');

hamburger.addEventListener('click', () => {
  mainMenu.style.display = 'flex';
  overlay.style.display = 'block';
});

cancel.addEventListener('click', () => {
  overlay.style.display = 'none';
});

for (let i = 0; i < links.length; i += 1) {
  links[i].addEventListener('click', () => {
    overlay.style.display = 'none';
  });
}