import { getDataServer, sendParam } from './fetchData';
import { showData } from './showData';
import { showPreloader } from './preload';

export const checkPagesLimit = function (totalPages) {
  let validLastPage;
  validLastPage = totalPages >= 50 ? 49 : +totalPages;
  return validLastPage;
};

export const showPagination = function (firstPage, currentPage, lastPage) {
  let paginationMarkup = '';

  if (lastPage <= 7)
    for (let i = 1; i <= lastPage; i++) {
      paginationMarkup += `<span `;
      if (i === currentPage) paginationMarkup += `class = 'pagination__selected'>`;
      else paginationMarkup += `class = 'pagination__simple'>`;
      paginationMarkup += `${i}</span>`;
    }

  if (lastPage >= 8) {
    paginationMarkup += `<span `;
    if (currentPage === 1) paginationMarkup += `class = 'pagination__selected'>1</span>`;
    else paginationMarkup += `class = 'pagination__simple'>1</span>`;

    for (let i = 1; i <= 5; i++) {
      if ((currentPage > 4 && i === 1) || (currentPage <= lastPage - 4 && i === 5)) {
        paginationMarkup += `<span class = 'pagination__dots'>&#8230</span>`;
        continue;
      }
      paginationMarkup += `<span `;
      if (i === 3 && currentPage != 1 && currentPage != lastPage)
        paginationMarkup += `class = 'pagination__selected'>${currentPage - 3 + i}</span>`;
      else if (currentPage - 3 + i < lastPage && currentPage - 3 + i > 1)
        paginationMarkup += `class = 'pagination__simple'>${currentPage - 3 + i}</span>`;
    }

    paginationMarkup += `<span `;
    if (currentPage === lastPage)
      paginationMarkup += `class = 'pagination__selected'>${lastPage}</span>`;
    else paginationMarkup += `class = 'pagination__simple'>${lastPage}</span>`;
  }
  document.querySelector('.pagination__container').innerHTML = paginationMarkup;
};

document.querySelector('.pagination__container').addEventListener('click', e => {
  //console.log(e);
  if (e.target.tagName === 'SPAN' && e.target.textContent != '…') {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    const promisePreload = showPreloader();

    getDataServer(sendParam.keyword, sendParam.countryCode, +e.target.textContent - 1)
      .then(data => {
        /*         document.querySelector('.events__list').innerHTML = '';
        showPagination(1, +e.target.textContent, checkPagesLimit(data.page.totalPages));
        showData(data._embedded.events); */
        return promisePreload;
      })
      .then(preloadNode => preloadNode.remove());
  }
});
