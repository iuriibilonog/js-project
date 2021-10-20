import './sass/main.scss';
import './search-form';
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
  (() => {
    if ('loading' in HTMLImageElement.prototype) {
      const lazyLoadImg = document.querySelectorAll('.lazyload');
      lazyLoadImg.forEach(img => (img.src = img.dataset.src));
      // <img src="image.jpg" loading="lazy" alt="..." />;
    } else {
      require('lazysizes');
      // <img data-src="image.jpg" class="lazyload" />;
    }
  })();
  modalWindow();
};
