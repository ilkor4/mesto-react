import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  static selectors =  {
    formSelector: '.form',
    buttonSaveSelector: '.form__save-button',
    inputSelector: '.form__input'
  }

  constructor(popupSelector, submitForm) {
    super(popupSelector);
    this._form = this._popup.querySelector(PopupWithForm.selectors.formSelector);
    this._buttonSubmit = this._form.querySelector(PopupWithForm.selectors.buttonSaveSelector);
    this._inputList = this._form.querySelectorAll(PopupWithForm.selectors.inputSelector);
    this._submitForm = submitForm;
  }
  _getInputValues() {
    this._formValues = {};

    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
  }

  setEventListeners() {
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();

      this._changeButtonText('Сохранение...');

      this._submitForm(this._getInputValues());
    });

    super.setEventListeners();
  }

  close = () => {
    this._form.reset();

    this._changeButtonText('Сохранить');

    super.close();
  }

  _changeButtonText(text) {
    this._buttonSubmit.textContent = text;
  }
}

