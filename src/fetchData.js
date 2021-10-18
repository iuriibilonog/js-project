import axios from 'axios';
import Notiflix from 'notiflix';
import config from './config.json';

export async function fetchPictures(keyword) {
  const response = await axios(
    `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${keyword}&apikey=${config.key}`,
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
