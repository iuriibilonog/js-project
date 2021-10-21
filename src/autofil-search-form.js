import countries from './countries.json';
import { getDataServer, firstQueryDataServer } from './js/fetchData';

const countryCodeNode = document.querySelector('#search-input');
const countryNode = document.querySelector('#search-country');

const localPosition = localStorage.getItem('localCountryName')
console.log(localPosition)

async function firstLaunch() {
    // if (countryCodeNode.value === '' && countryNode.value === '') {
    //     console.log(countryCodeNode.value)
    //     console.log(countryNode.value)
    //     return false;
    // }
    if (!localPosition) {
        autofill().then(data => getDataServer('', data, ''));
        console.error('dasdasdasd')

    }
    else {
        countryNode.value = localPosition;
        // console.log(localPosition)
        const localCode = localStorage.getItem('localCountryCode')
        getDataServer('', localCode, '')


    }

    // const data = await getDataServer('', countryCodeValidator, '');
}
firstLaunch()


async function autofill() {

    const getCountryCodeByIP = await firstQueryDataServer();
    const countryCodeValidator = (getCountryCodeByIP) ? getCountryCodeByIP.data.countryCode : 'AU';

    const countryCodeCheck = countries.find(item => item.countryCode === countryCodeValidator);
    countryNode.value = countryCodeCheck.countryName;
    if (!localStorage.getItem('localCountryName') && !localStorage.getItem('localCountryCode')) {
        // console.log(countryNode.value)
        localStorage.setItem('localCountryName', countryNode.value);
        localStorage.setItem('localCountryCode', countryCodeValidator);
    }


    // localStorage.setItem('localCountry', countryNode.value);
    // localStorage.setItem('localCountryName', countryNode.value);
    // localStorage.setItem('localCountryCode', countryCodeValidator);
    return countryCodeValidator;










    // const data = await getDataServer('', countryCodeValidator, '');
};




// console.log(searchCountryOption.textContent)

// if (countryCodeCheck) {
//     console.log(countryCodeCheck)
//     // getDataServer(searchInput.value, searchCountryOption.textContent);
// }





// countryNode.value = localStorage.getItem('')



















// ===============================================

// const getLocalData = (data) => {
//     localStorage.getItem('')
// }