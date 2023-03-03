import Popup from "./Popup.js";

export default class PopupWithImage  extends Popup {
  constructor({ popupSelector, imageSelector, titleSelector }) {
    super(popupSelector);
    this._image = this._popup.querySelector(imageSelector);
    this._title = this._popup.querySelector(titleSelector);
  }

  open({ imageTitle, imageLink, imageAlt }) {
    this._image.setAttribute('src', imageLink);
    this._image.setAttribute('alt', imageAlt);
    this._title.textContent = imageTitle;

    super.open();
  }
}
