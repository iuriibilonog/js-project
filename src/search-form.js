import { getDataServer } from './fetchData';
import { debounce } from 'debounce';

import countries from './countries.json';

function printOptions(data) {
  const optionList = document.querySelector('#choose-country');
  const markUp = data
    .map(item => {
      const { countryCode, countryName } = item;
      return `<option value='${countryName}'>${countryCode}</option>`;
    })
    .join('');
  optionList.insertAdjacentHTML('beforeend', markUp);
}

printOptions(countries);

document.querySelector('#search-form').addEventListener('input', debounce(getCards, 500));

function getCards() {
  const searchInput = document.querySelector('#search-input');
  const searchCountry = document.querySelector(`#search-country`);
  const searchCountryOption = document.querySelector(`#choose-country option[value="${searchCountry.value}"]`);
  // console.log(searchCountryOption.textContent)

  getDataServer(searchInput.value);

  const countryCodeCheck = countries.some((item) => item.countryCode === searchCountryOption.textContent)
  console.log(countryCodeCheck)

  if (countryCodeCheck) {
    // console.log(countryCodeCheck)
    getDataServer(searchCountryOption.textContent);
  }




  // console.log(searchInput.value)
  // console.log(searchCountry.value)
  // console.error('---')
}

