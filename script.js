'use strict';

//selecting element classes

const modal = document.querySelector('.modal');

const overlay = document.querySelector('.overlay');

const btnCloseModal = document.querySelector('.close-modal');

const btnsOpenModal = document.querySelectorAll('.show-modal');

console.log(btnsOpenModal);

// / function opening the modal
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// function closing the modal
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// selecting multiple elements with the same class
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

// adding eventhandler on elements
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//response to keypress events etc..
// global events or keyboard events

document.addEventListener('keydown', function (key) {
  if (key.key === 'Escape') {
    // if the 'escape' key was press and
    if (!modal.classList.contains('hidden')) {
      // if the modal does not contain the 'hidden' class
      closeModal(); // then call this function to close the modal.
    }
  }
});
