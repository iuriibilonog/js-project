import axios from 'axios';
import Notiflix from 'notiflix';
import config from '../config.json';
import { showData } from './showData';
import { showPagination, checkPagesLimit } from './pagination';

export const sendParam = {
  apikey: config.key,
};

export async function firstQueryDataServer() {
  try {
    const response = await axios.get(`http://ip-api.com/json/?fields=countryCode`);
    return response;
  } catch (error) {
    return false;
  }
}

export async function getDataServer(keyword, countryCode, page) {
  keyword === '' ? delete sendParam.keyword : (sendParam.keyword = keyword);
  countryCode === '' ? delete sendParam.countryCode : (sendParam.countryCode = countryCode);

  page === '' ? delete sendParam.page : (sendParam.page = checkPagesLimit(page));

  if (!sendParam.countryCode && !sendParam.keyword) {
    return false;
  }

  const response = await axios.get(config.host, { params: sendParam });

  if (response.data.page.totalElements === 0) {
    document.querySelector('.events__list').innerHTML = '';
    document.querySelector('.pagination__container').innerHTML = '';
    Notiflix.Notify.failure(
      'К сожалению, в Вашей стране не найдено событий. Измените параметры поиска.',
    );
  }

  if (response.status >= 200 && response.status < 300) {
    if (response.data._embedded) {
      document.querySelector('.events__list').innerHTML = '';
      showData(response.data._embedded.events);
      showPagination(
        1,
        +response.data.page.number + 1,
        checkPagesLimit(response.data.page.totalPages),
      );
    }

    return response.data;
  }

  throw new Error(Notiflix.Notify.failure('Что-то пошло не так.'));
}
