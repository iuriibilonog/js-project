import { getDataServer } from './fetchData';

export const modalWindow = () => {
  const refs = {
    openModalBtn: document.querySelectorAll('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  console.log(refs.openModalBtn);

  refs.openModalBtn.forEach(item => {
    item.addEventListener('click', toggleModal);
  });
  refs.closeModalBtn.addEventListener('click', toggleModal);
  function toggleModal(e) {
    e.preventDefault();
    console.log(item.id);
    const searchInput = document.querySelector('#search-input');
    const searchCountry = document.querySelector('#search-country');
    getDataServer(searchInput.value, searchCountry.value, item.id);
    refs.modal.classList.toggle('is-hidden');
  }
};

// const modal = document.querySelector('[data-modal]').addEventListener('click', (e) => {
//   if (e.target.dataset === 'data-modal-open')
// })
