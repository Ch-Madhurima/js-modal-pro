'use strict';
const closeModal = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const showModal = document.querySelectorAll('.show-modal');

const modalCloseFn = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
const modalOpenFn = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener('click', modalOpenFn);
}
closeModal.addEventListener('click', modalCloseFn);
overlay.addEventListener('click', modalCloseFn);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden')) modalCloseFn();
  }
});
