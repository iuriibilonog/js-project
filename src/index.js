import './sass/main.scss';
import { getDataServer } from './fetchData';
import { showData } from './showData';
import './events';
import { modalWindow } from './modal-window';

import './pagination';
import './modal-window';

window.onload = async function () {
  const data = await getDataServer();
  console.log(data);
  await showData(data._embedded.events);
  modalWindow();
};
