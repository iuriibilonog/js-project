import axios from 'axios';
import Notiflix from 'notiflix';
import config from './config.json';
import { showData } from './showData';
import { showPagination, checkPagesLimit } from './pagination';

export const sendParam = {
  apikey: config.key,
};

//console.log(getDataServer('NBA', 'US'));
export async function firstQueryDataServer(keyword, countryCode, page) {
  const response = await axios.get(`http://ip-api.com/json/?fields=countryCode`);
  console.log(response);
  return response;
}

export async function getDataServer(keyword, countryCode, page) {
  keyword === '' ? delete sendParam.keyword : (sendParam.keyword = keyword);
  countryCode === '' ? delete sendParam.countryCode : (sendParam.countryCode = countryCode);
  page === ''
    ? delete sendParam.page
    : page >= 50
    ? (sendParam.page = 49)
    : (sendParam.page = page);

  // console.log('SendParam: ', sendParam);

  const response = await axios.get('https://app.ticketmaster.com/discovery/v2/events.json', {
    params: sendParam,
  });
  // console.log(response)

  if (response.data.page.totalElements === 0) {
    document.querySelector('.events__list').innerHTML = '';
    document.querySelector('.pagination__container').innerHTML = '';
    Notiflix.Notify.failure(
      'К сожалению, по Вашему запросу событий не найдено. Попробуйте изменить запрос.',
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
