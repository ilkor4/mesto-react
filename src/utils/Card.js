// Класс объекта карточки
export default class Card {
// Статические селекторы
  static selectors = {
    buttonDeleteSelector: '.element__delete-button',
    elementSelector: '.element',
    heartSelector: '.element__heart',
    amountSelector: '.element__amount',
    titleSelector: '.element__title',
    imageSelector: '.element__image',
    heartActiveSelector: 'element__heart_type_active',
    myId: '49b97b967df25352c0865474'
  }
// Конструктор
  constructor( { data, templateSelector, handleCardClick, openDeletePopup, likeCardFunction, dislikeCardFunction }) {
    this._title = data.name;
    this._imageLink = data.link;
    this._imageAlt = data.name;
    this._id = data._id;
    this._ownerId = data.owner._id;
    this._likeCardFunction = likeCardFunction;
    this._dislikeCardFunction = dislikeCardFunction;
    this._allLikes = data.likes;
    this._likes = data.likes.length;
    this._template = document.querySelector(templateSelector);
    this._handleCardClick = handleCardClick;
    this._openDeletePopup = openDeletePopup;
  }
// Получить темплэйт
  _getTemplate() {
    const cardElement = this._template.content.querySelector(Card.selectors.elementSelector).cloneNode(true);

    return cardElement;
  }
  // Создать карточку
  generateCard() {
    this._element = this._getTemplate();

    this._likeButton = this._element.querySelector(Card.selectors.heartSelector);
    this._amountLikes = this._element.querySelector(Card.selectors.amountSelector);
    this._imageCard = this._element.querySelector(Card.selectors.imageSelector);

    this._element.querySelector(Card.selectors.titleSelector).textContent = this._title;
    this._amountLikes.textContent = this._likes;

    this._imageCard.setAttribute('src', this._imageLink);
    this._imageCard.setAttribute('alt', this._imageAlt);

    if (this._isAlienCard()) this._removeBasket();
    if (this._isCardHaveMyLike())  this._likeButton.classList.add(Card.selectors.heartActiveSelector);

    this._setEventListeners();

    return this._element;
  }
  // Навесить слушатели
  _setEventListeners() {
    this._likeButton.addEventListener('click', () => {
      if (!this._likeButton.classList.contains(Card.selectors.heartActiveSelector)) this._likeCardFunction();
      else this._dislikeCardFunction();
    });

    if (!this._isAlienCard()) {
      this._element.querySelector(Card.selectors.buttonDeleteSelector)
        .addEventListener('click', () => this._openDeletePopup(this._element, this._id));
    }

    this._imageCard
      .addEventListener('click', () =>  this._handleCardClick(this));
  }
  // Проверка на мой лайк
  _isCardHaveMyLike() {
    return this._allLikes.some((item) => item._id === Card.selectors.myId);
  }
  // Лайкнуть карточку
  likeCard(amount) {
    this._likeButton.classList.add(Card.selectors.heartActiveSelector);

    this._amountLikes.textContent = amount;
  }
  // Удалить лайк
  dislikeCard(amount) {
    this._likeButton.classList.remove(Card.selectors.heartActiveSelector);

    this._amountLikes.textContent = amount;
  }
  // Проверка на чужую карточку
  _isAlienCard() {
    return (this._ownerId != Card.selectors.myId);
  }
  // Удалить значек корзины
  _removeBasket() {
    this._element.querySelector(Card.selectors.buttonDeleteSelector).remove();
  }
}
