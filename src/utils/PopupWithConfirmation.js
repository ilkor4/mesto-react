import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, submitForm) {
    super(popupSelector);

    this._form = this._popup.querySelector('.form');
    this._submitFormFunction = submitForm;
  }

  open(card, cardId) {
    this._card = card;
    this._cardId = cardId;

    this._setEventListeners()

    super.open();
  }

  close() {
    this._form.removeEventListener('submit', this._submitForm)

    super.close();
  }

  _setEventListeners() {
    this._form.addEventListener('submit', this._submitForm);

    super.setEventListeners();
  }

  _submitForm = (evt) => {
    evt.preventDefault();

    this._submitFormFunction(this._card, this._cardId);

    this._card = null;
    this._cardId = null;

    this.close();
  };
}
