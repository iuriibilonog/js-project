import { getDataServer, sendParam } from './fetchData';
import { showData } from './showData';
import Notiflix from 'notiflix';

export const showPagination = function (firstPage, currentPage, lastPage) {
  let paginationMarkup = '';

  if (lastPage <= 7)
    for (let i = 1; i <= lastPage; i++) {
      //      paginationMarkup += `<a href = "#page-${i}"><span `;
      paginationMarkup += `<span `;
      if (i === currentPage) paginationMarkup += `class = 'pagination__selected'>`;
      else paginationMarkup += `class = 'pagination__simple'>`;
      paginationMarkup += `${i}</span>`; //</a>
    }

  if (lastPage >= 8) {
    //        paginationMarkup += `<a href = "#"><span `;
    paginationMarkup += `<span `;
    if (currentPage === 1) paginationMarkup += `class = 'pagination__selected'>1</span>`;
    //</a>
    else paginationMarkup += `class = 'pagination__simple'>1</span>`; //</a>

    for (let i = 1; i <= 5; i++) {
      if ((currentPage > 4 && i === 1) || (currentPage <= lastPage - 4 && i === 5)) {
        paginationMarkup += `<span class = 'pagination__dots'>&#8230</span>`;
        continue;
      }

      //      paginationMarkup += `<a href = "#page-${currentPage - 3 + i}"><span `;
      paginationMarkup += `<span `;

      if (i === 3 && currentPage != 1 && currentPage != lastPage)
        paginationMarkup += `class = 'pagination__selected'>${currentPage - 3 + i}</span>`;
      //</a>
      else if (currentPage - 3 + i < lastPage && currentPage - 3 + i > 1)
        paginationMarkup += `class = 'pagination__simple'>${currentPage - 3 + i}</span>`; //</a>
    }
    //    paginationMarkup += `<a href = "#"><span `;
    paginationMarkup += `<span `;

    if (currentPage === lastPage)
      paginationMarkup += `class = 'pagination__selected'>${lastPage}</span>`;
    //</a>
    else paginationMarkup += `class = 'pagination__simple'>${lastPage}</span>`; //</a>
  }

  document.querySelector('.pagination__container').innerHTML = paginationMarkup;
};

document.querySelector('.pagination__container').addEventListener('click', e => {
  //console.log(e);
  if (e.target.tagName === 'SPAN' && e.target.textContent != '…')
    getDataServer(sendParam.keyword, sendParam.countryCode, +e.target.textContent - 1).then(
      data => {
        document.querySelector('.events__list').innerHTML = '';
        showPagination(
          1,
          +e.target.textContent,
          +data.page.totalPages >= 50 ? 49 : +data.page.totalPages,
        );
        showData(data._embedded.events);
      },
    );
});

//showPagination(1, 1, 1);

//showPagination(1, 7, 21);

/* 
    export const paginationMarkup = ({ pages, next, prev }, query = '') => {
      let markup = prev ? `<a href="${prev.slice(config.baseUrl.length)}">&lArr;</a>` : '';
      let link = next || prev;
      if (!link) return false;

      const nowPage = next ? parseInt(next.slice(next.indexOf('page=') + 5)) - 1 : pages;

      link = link.slice(config.baseUrl.length, link.indexOf('page=') + 5);
      for (let i = 1; i <= pages; i++) {
        if (nowPage + 4 === i) markup += '<span>...</span>';
        if (i === 1 || i === pages || (i >= nowPage - 2 && i <= nowPage + 2))
          markup += `<a class="${i === nowPage ? 'active' : ''}" href="${link + i}${
            query ? '&' + query : ''
          }">${i}</a>`;
        if (nowPage - 4 === i) markup += '<span>...</span>';
      }
      markup += next ? `<a href="${next.slice(config.baseUrl.length)}">&rArr;</a>` : '';

      document.querySelector('.pagination').innerHTML = markup;
    }; */
