import './sass/main.scss';
import './search-form';
import './preload';
import { getDataServer } from './fetchData';
import './events';

import './modal-window';

//add scroll to top button
import './scrollUp';

window.onload = async function () {
  const data = await getDataServer('', '', '');
};
