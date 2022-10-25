const hamburger = document.querySelector('.bars');
const overlay = document.querySelector('.overlay');
const mainMenu = document.querySelector('.main-menu');
const cancel = document.querySelector('.cancel');
const links = document.querySelector('.menu-item');
const cardsSection = document.querySelector('.middle');
const modalsSection = document.querySelector('.modal-container');

hamburger.addEventListener('click', () => {
  mainMenu.style.display = 'flex';
  overlay.style.display = 'block';
});

cancel.addEventListener('click', () => {
  overlay.style.display = 'none';
});