const firstPage = 1;
const currentPage = 15;
const lastPage = 39;

/* document
  .querySelector('.pagination__container')
  .insertAdjacentHTML('beforeend', `<a href = '#'><span class ="pagination__simple">&#8230`);
 */
let paginationMarkup = '';

for (let i = 1; i <= (lastPage <= 7 ? lastPage : 7); i++) {
  console.log(i);
  paginationMarkup += `<a href = "#"><span `;
  if (i === currentPage) {
    paginationMarkup += `class = 'pagination__selected'>${i}`;
  } else paginationMarkup += `class = 'pagination__simple'>${i}`;

  //if ((i === 2 || i===6) && lastPage > 8 ) paginationMarkup += `class = 'pagination__simple'>&#8230</span></a>`
  //else
  if (currentPage > 3 && i === 2 && lastPage > 8)
    paginationMarkup += `class = 'pagination__simple'>&#8230`;
  if (currentPage < lastPage - 2 && i === 6 /* && lastPage > 8 */)
    paginationMarkup += `class = 'pagination__simple'>&#8230`;

  paginationMarkup += `</span></a>`;
}

document.querySelector('.pagination__container').innerHTML = paginationMarkup;
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
