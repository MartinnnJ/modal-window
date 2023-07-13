'use strict';

const dropdown = document.querySelector('select');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelector('.show-modal');

const setAnimation = () => {
  modal.className = 'modal'; // odstranime vsetky class-y okrem .modal
  modal.classList.add(`${dropdown.value}`);
}

const openModal = () => {
  modal.classList.remove(`${dropdown.value}`);
  overlay.classList.remove('hidden');
};

const closeModal = () => {
  modal.classList.add(`${dropdown.value}`);
  overlay.classList.add('hidden');
};

window.addEventListener('DOMContentLoaded', () => {
  document.body.style.visibility = 'visible';
})

modal.classList.add(`${dropdown.value}`); // skryjeme modal pomocou defaultnej class-y

dropdown.addEventListener('change', setAnimation);
btnOpenModal.addEventListener('click', openModal);
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
