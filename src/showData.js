import sprite from './img/sprite.svg';

// import { modalWindow } from './modal-window';

export const showData = data =>
  new Promise(res => {
    console.log('kutgyufrd');
    let cur = 0;
    let counter = 0;
    const markUp = data.map(events => {
      const markupOneCard = `<li class="events__item" id = ${events.id} data-modal-open>
        <a href="" class="link events__link">
           <div class="events__image-wrap" id = ${events.id}>
              <picture>
                 <img src="${events.images[3].url}" alt="" title="" class="events__image lazyload"  />
              </picture>
           </div>
           <div class="events__descr" >

              <h3 class="events__name">${events.name}</h3>
              <p class="events__date">${events.dates.start.localDate}</p>
              <p class="events__location">

              <svg class="modal__icon" width="29" height="19">
              <use href="${sprite}#icon-location"></use>
          </svg>
                 ${events._embedded.venues[0].name}
               </p>
           </div>
        </a>
     </li>`;

      setTimeout(() => {
        if (events._embedded.venues[0].name) {
          document.querySelector('.events__list').insertAdjacentHTML('beforeend', markupOneCard);
        } else {
          events._embedded.venues[0].address.line1;
        }
        if (++cur >= data.length) res();
      }, ++counter * 150);
    });
  });
