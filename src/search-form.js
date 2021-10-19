import { fetchPictures } from './fetchData';

import countries from './countries.json'


const searchForm = document.querySelector('#search-form');


function printOptions(data) {
    const optionList = document.querySelector('#choose-country');
    const markUp = data
        .map(item => {
            const { countryCode, countryName } = item;
            return `<option data-code=${countryCode}>${countryName}</option>`;
        }).join('');
    optionList.insertAdjacentHTML('beforeend', markUp);
}

printOptions(countries);


const searchInput = document.querySelector('#search-input');
const searchCountry = document.querySelector('#search-country');


searchForm.addEventListener('input', getData)


function getData() {
    fetchPictures(searchInput.value, searchCountry.value)
    console.log(searchInput.value)
    console.log(searchCountry.value)
    console.error('---')
};



