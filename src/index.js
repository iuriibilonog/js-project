import './sass/main.scss';
import './search-form';
import './preload';
import { getDataServer, firstQueryDataServer } from './fetchData';
import './events';

import './modal-window';

//add scroll to top button
import './scrollUp';

window.onload = async function () {

  const countryCode = await firstQueryDataServer();
  console.log(countryCode.data.countryCode);
  const data = await getDataServer('', countryCode.data.countryCode, '');

};
