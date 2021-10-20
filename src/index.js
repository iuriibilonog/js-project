import './sass/main.scss';
import './search-form';
import { getDataServer } from './fetchData';
import { showData } from './showData';
import './events';
import { modalWindow } from './modal-window';
import { showPagination } from './pagination';

import './modal-window';

//add scroll to top button
import './scrollUp';

window.onload = async function () {
  const data = await getDataServer('', '', '');

  await showData(data._embedded.events);
  /*   (() => {
    if ('loading' in HTMLImageElement.prototype) {
      const lazyLoadImg = document.querySelectorAll('.lazyload');
      lazyLoadImg.forEach(img => (img.src = img.dataset.src));
      // <img src="image.jpg" loading="lazy" alt="..." />;
    } else {
      require('lazysizes');
      // <img data-src="image.jpg" class="lazyload" />;
    }
  })();
  
 */ 
  showPagination(
    1,
    +data.page.number + 1,
    +data.page.totalPages >= 50 ? 49 : +data.page.totalPages,
  );

};
