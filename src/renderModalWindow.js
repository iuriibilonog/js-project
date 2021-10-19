export const showModal = data => {
  const markupForModal = data.map(events => {
    const markupOneModal = `<div class="cards__backdrop is-hidden" data-modal>
    <div class="modal">
        <button class="close-button" data-modal-close>
            <svg class="modal__icon" width="29" height="19.33">
                <use href="./img/symbol-defs.svg#icon-close"></use>
            </svg>
        </button>
        <img id =${events.id} src="${events._embedded.events.images[0].url}" alt="small-logo" class="modal__small-logo">
        <div class="modal__list-position">
            <img id =${events.id} src="${events._embedded.events.images[0].url} alt="card-poster" class="modal__card-poster">
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
                                ${events._embedded.priceRanges.type} ${events._embedded.priceRanges.min} - ${events._embedded.priceRanges.max}  ${events._embedded.priceRanges.currency}
                               
                            </p>
                            <button class="modal__list-btn">BUY TICKETS</button>
                        </li>
                     </ul>
                </li>
            </ul>
        </div>
        <button type="button" class="button infoauthor-button">MORE FROM THIS AUTHOR</button>
    </div>`;
  });
};
