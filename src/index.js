import './sass/main.scss';
import { fetchPictures } from './fetchData';
import { showData } from './showData';
import './events';

import './pagination';
// import './modal-window';

window.onload = async function () {
  const data = await fetchPictures();
  console.log(data);
  showData(data._embedded.events);
};
