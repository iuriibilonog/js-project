import './sass/main.scss';
import './autofil-search-form';
import './search-form';
import './preload';
import { getDataServer, firstQueryDataServer } from './fetchData';
import './events';

import './modal-window';

//add scroll to top button
import './scrollUp';

// window.onload = async function () {

//   const countryCode = await firstQueryDataServer();
//   const countryCodeValidator = (countryCode) ? countryCode.data.countryCode : 'AU';
//   const data = await getDataServer('', countryCodeValidator, '');

// };
