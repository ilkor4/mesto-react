export default class Popup {
  static selectors = {
    buttonCloseSelector: '.popup__close-button',
    popupOpenedSelector: 'popup_opened',
  }

  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._closeButton = this._popup.querySelector(Popup.selectors.buttonCloseSelector);
  }

  open() {
    this._popup.classList.add(Popup.selectors.popupOpenedSelector);

    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popup.classList.remove(Popup.selectors.popupOpenedSelector);

    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose = (evt) => {
    if (evt.key === 'Escape') this.close();
  }

  setEventListeners() {
    this._closeButton.addEventListener('click', () => this.close());

    this._popup.addEventListener('mousedown', this._closePopupByOverlayClick);
  }

  _closePopupByOverlayClick = (evt) => {
    if (evt.target === evt.currentTarget) this.close();
  }
}
