import { getDataServer } from './fetchData';
import config from './config.json';
import axios from 'axios';
import { showModal } from './renderModalWindow';

export async function getEventDetails(id) {
  const response = await axios.get(
    `http://app.ticketmaster.com/discovery/v2/events/${id}?apikey=${config.key}`,
  );

  if (response.status >= 200 && response.status < 300) {
    return response.data;
  }
  throw new Error(
    Notiflix.Notify.failure(
      'К сожалению, по Вашему запросу событий не найдено. Попробуйте изменить запрос.',
    ),
  );
}

document.querySelector('.events__list').addEventListener('click', async e => {
  e.preventDefault();
  const id = e.target.closest('.events__item').id;
  const data = await getEventDetails(id);
  showModal(data);

  const refs = {
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    backdropNode: document.querySelector('.cards__backdrop'),
  };

  refs.closeModalBtn.addEventListener('click', e => {
    // e.preventDefault();

    refs.modal.classList.add('is-hidden');
  });

  refs.backdropNode.addEventListener('click', e => {
    // e.preventDefault();
    if (e.target.dataset.modal === '') refs.modal.classList.add('is-hidden');
  });
});
