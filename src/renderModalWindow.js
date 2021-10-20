import symbolDevs from './img/symbol-defs.svg';

export const showModal = events => {
  let priceRange = '';
  let priceRangeMin = '';
  let priceRangeMax = '';
  let priceRangeCurrency = '';
  if (events.priceRanges) {
    priceRange = events.priceRanges[0].type;
    priceRangeMin = events.priceRanges[0].min;
    priceRangeMax = events.priceRanges[0].max;
    priceRangeCurrency = events.priceRanges[0].currency;
  }

  const markupOneModal = `<div class="cards__backdrop" data-modal>
    <div class="modal">
        <button class="close-button" data-modal-close>
            <svg class="modal__icon" width="29" height="19.33">
                <use href="${symbolDevs}#icon-close"></use>
            </svg>
        </button>
        <img id =${events.id} src="${events.images[0].url}" alt="small-logo" class="modal__small-logo">
        <div class="modal__list-position">
            <div style= 'background-image: url("${events.images[0].url}");' class="modal__card-poster"></div>
            <div class="modal__list-width">
                <ul>
                    <li class="modal__list-info">
                        <h3 class="modal__item-title">INFO</h3>
                        <p class="modal__item-text" id = ${events.id}>${events.info}</p>
                    </li>
                    <li class="modal__list-info">
                        <h3 class="modal__item-title">WHEN</h3>
                        <p class="modal__item-text" id = ${events.id}>${events.dates.start.localDate} <br>${events.dates.start.localTime} (Kyiv/Ukraine)</p>
                    </li>
                    <li class="modal__list-info">
                        <h3 class="modal__item-title">WHERE</h3>
                        <p class="modal__item-text" id = ${events.id}>${events._embedded.venues[0].country.name} <br>${events._embedded.venues[0].name}</p>
                    </li>
                    <li class="modal__list-info">
                        <h3 class="modal__item-title">WHO</h3>
                        <p class="modal__item-text" id = ${events.id}>${events.name}</p>
                    </li>
                    <li class="modal__list-info">
                    <h3 class="modal__item-title">PRICES</h3>
                        <ul>
                            <li>
                                <p class="modal__price-text" id=${events.id}>
                                    <span>
                                        <svg width="29" height="19.33">
                                            <use href="./img/symbol-defs.svg#icon-ticket1"></use>
                                        </svg>
                                    </span>
                                    ${priceRange} ${priceRangeMin} - ${priceRangeMax}  ${priceRangeCurrency}

                                </p>
                                <a href="${events.url}" target="_blank" class="modal__list-btn">BUY TICKETS</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        <button type="button" class="button infoauthor-button">MORE FROM THIS AUTHOR</button>
    </div>`;

  document.querySelector('#modalNode').innerHTML = markupOneModal;
};
