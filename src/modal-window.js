import { getDataServer } from './fetchData';
import config from './config.json';
import axios from 'axios';

export async function getEventDetails(id) {
  const response = await axios.get(
    `http://app.ticketmaster.com/discovery/v2/events/${id}?apikey=${config.key}`,
  );

  https: if (response.status >= 200 && response.status < 300) {
    return response.data;
  }
  throw new Error(
    Notiflix.Notify.failure(
      'К сожалению, по Вашему запросу событий не найдено. Попробуйте изменить запрос.',
    ),
  );
}

export const modalWindow = () => {
  const refs = {
    modalNode: document.querySelector('.events__list'),
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.modalNode.addEventListener('click', e => {
    e.preventDefault();
    console.log(e.target.closest('.events__item').id);
    const id = e.target.closest('.events__item').id;
    getEventDetails(id);
  });

  refs.closeModalBtn.addEventListener('click', toggleModal);
  function toggleModal(e) {
    e.preventDefault();

    refs.modal.classList.toggle('is-hidden');
  }
};
