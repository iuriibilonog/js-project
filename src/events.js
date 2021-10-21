import { getDataServer, sendParam } from './fetchData';
import { showPreloader } from './preload';

document.querySelector('.pagination__container').addEventListener('click', e => {
  if (e.target.tagName === 'SPAN' && e.target.textContent != '…') {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    const promisePreload = showPreloader();
    getDataServer(sendParam.keyword, sendParam.countryCode, +e.target.textContent - 1)
      .then(data => {
        return promisePreload;
      })
      .then(preloadNode => preloadNode.remove());
  }
});