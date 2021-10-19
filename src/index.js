import './sass/main.scss';
import { getDataServer } from './fetchData';
import { showData } from './showData';
import './events';

import './pagination';
// import './modal-window';

window.onload = async function () {
  const data = await getDataServer();
  console.log(data);
  showData(data._embedded.events);
};
