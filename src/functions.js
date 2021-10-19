import axios from 'axios';

const sendParam = {
  apikey: '6gForf4B2O7MTdYecsUK4GlRiLJGHU3r',
  keyword: '',
  countryCode: '',
  // per_page: 40,
  // page: 1,
};

async function getServerResponse(keyword = sendParam.keyword, countryCode = sendParam.countryCode) {
  sendParam.keyword = keyword;
  sendParam.countryCode = countryCode;
  const response = await axios.get('https://app.ticketmaster.com/discovery/v2/events.json', {
    params: sendParam,
  });
}

console.log(getServerResponse('metal', 'US'));
