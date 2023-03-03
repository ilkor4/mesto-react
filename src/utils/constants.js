// Переменные (Открытие/Закрытие попапа для редактирование профиля)
const buttonEditProfile = document.querySelector('.profile__edit-button');
const popupEditSelector = '.popup_type_edit';
const formEditElement = document.querySelector('.form');
const imageProfileElement = document.querySelector('.profile__image');
const avatarImageElement = document.querySelector('.profile__pseudo');
const inputNameEditPopup = document.querySelector('.form__input_type_name');
const inputSignatureElement = document.querySelector('.form__input_type_signature');
// Переменные (Открытие/Закрытие попапа для добавления карточек)
const popupAddSelector = '.popup_type_add';
const cardsAddPopup = '.elements'
const formAddElement = document.querySelector('.form_type_add');
const buttonAddProfile = document.querySelector('.profile__add-button');
// Переменная (Выбор темплэйта)
const templateSelector = '#card';
// Переменная (Селекторы для редактирования профиля)
const profileConfig = {
  signatureProfileSelector : '.profile__signature',
  nameProfileSelector : '.profile__name'
}
// Переменная (Селектор попапа удаления карточки)
const popupDeleteSelector = '.popup_type_delete';
// Переменные (Попап для изменения аватара)
const popupAvatarSelector = '.popup_type_avatar';
const formAvatarElement = document.querySelector('.popup_type_avatar')
// Переменная (Селекторы попапа с фото)
const imagePopupConfig = {
  popupSelector: '.popup_type_photo',
  imageSelector: '.popup__image',
  titleSelector: '.popup__title'
}
// Массив (Данные для валидации)
const validationConfig = {
  inputSelector: '.form__input',
  submitButtonSelector: '.form__save-button',
  inactiveButtonClass: 'form__save-button_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
}

export { profileConfig, popupEditSelector, popupAddSelector, formAddElement, formEditElement, validationConfig, cardsAddPopup, imagePopupConfig, templateSelector, inputNameEditPopup, inputSignatureElement, buttonAddProfile, buttonEditProfile, popupDeleteSelector, popupAvatarSelector, imageProfileElement, formAvatarElement, avatarImageElement}
