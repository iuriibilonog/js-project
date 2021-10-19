import { getDataServer } from './fetchData';
import { debounce } from 'lodash';

import countries from './countries.json'


function printOptions(data) {
    const optionList = document.querySelector('#choose-country');
    const markUp = data
        .map(item => {
            const { countryCode, countryName } = item;
            return `<option value=${countryCode}>${countryName}</option>`;
        }).join('');
    optionList.insertAdjacentHTML('beforeend', markUp);
}

printOptions(countries);

document.querySelector('#search-form').addEventListener('input', getData)

function getData() {
    const searchInput = document.querySelector('#search-input');
    const searchCountry = document.querySelector('#search-country');
    getDataServer(searchInput.value, searchCountry.value)
    // console.log(searchInput.value)
    // console.log(searchCountry.value)
    // console.error('---')
};



