import './sass/main.scss';
import './search-form';
import './preload';
import { getDataServer } from './fetchData';
import './events';

//import './modal-window';

//add scroll to top button
import './scrollUp';

window.onload = async function () {
  const data = await getDataServer('', '', '');

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

};
