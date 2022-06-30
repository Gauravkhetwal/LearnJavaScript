'use strict';

const model = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const btnOpenModel = document.querySelectorAll('.show-modal');

//fun to open the modal
const openModal = function () {
  model.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// fun to close the modal
const closeModal = function () {
  model.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Travel the show Modal buttons

for (let i = 0; i < btnOpenModel.length; i++) {
  btnOpenModel[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

//function to close the menu with the help of escape key.
document.addEventListener('keydown', function (e) {
  //console.log(e.key);
  if (e.key === 'Escape' && !model.classList.contains('hidden')) closeModal();
});
