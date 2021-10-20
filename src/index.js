import './sass/main.scss';
import './search-form';
import { getDataServer } from './fetchData';
import { showData } from './showData';
import './events';
import { modalWindow } from './modal-window';
import { showPagination } from './pagination';

import './modal-window';

window.onload = async function () {
  const data = await getDataServer('rock','','3');
  console.log(data);
  await showData(data._embedded.events);
  modalWindow();
  showPagination(1, +data.page.number, +data.page.totalPages >= 50 ? 49 : +data.page.totalPages);
};
