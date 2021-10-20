import './sass/main.scss';
import { fetchPictures } from './fetchData';
import { showData } from './showData';
import './events';

import './pagination';
// import './modal-window';

//add scroll to top button
import './scrollUp';

window.onload = async function () {
  const data = await fetchPictures();
  console.log(data);
  showData(data._embedded.events);
};
