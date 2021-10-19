import axios from 'axios';
import Notiflix from 'notiflix';
import config from './config.json';

const sendParam = {
  apikey: config.key,
  keyword: '',
  countryCode: '',
  totalPages: '',
  page: 1,
};

console.log(getDataServer('metal', 'US'));

export async function getDataServer(
  keyword = sendParam.keyword,
  countryCode = sendParam.countryCode,
) {
  sendParam.keyword = keyword;
  sendParam.countryCode = countryCode;
  const response = await axios.get('https://app.ticketmaster.com/discovery/v2/events.json', {
    params: sendParam,
  });

  if (response.status >= 200 && response.status < 300) {
    return response.data;
  }
  throw new Error(
    Notiflix.Notify.failure(
      'К сожалению, по Вашему запросу событий не найдено. Попробуйте изменить запрос.',
    ),
  );
}
