import {useState} from 'react';
import Header from './header/Header.js';
import Main from './main/Main.js';
import Footer from './footer/Footer.js';
import PopupWithForm from './popupWithForm/PopupWithForm.js';
import ImagePopup from './imagePopup/ImagePopup.js';

function App() {
  const [isEditProfileOpen, setEditProfileState] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupState] = useState(false);
  const [isEditAvatarOpenPopup, setEditAvatarPopupState] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  function closeAllPopups() {
    setEditProfileState(false);
    setAddPlacePopupState(false);
    setEditAvatarPopupState(false);
    setSelectedCard(null);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  return (
    <div className="App">
     <div className="wrapper">
        <div className="page">
          <Header />
          <Main
            onEditAvatar={() => setEditAvatarPopupState(true)}
            onEditProfile={() => setEditProfileState(true)}
            onAddPlace={() => setAddPlacePopupState(true)}
            onCardClick={handleCardClick}
           />
          <Footer />
          <PopupWithForm name="edit" title="Редактировать профиль" buttonText="Сохранить" isOpen={isEditProfileOpen} onClose={closeAllPopups}>
            <input placeholder="Имя" name="inputName" id="input-name" required className="form__input form__input_type_name" type="text" minLength="2" maxLength="40" />
            <span className="form__input-error input-name-error"></span>
            <input placeholder="О себе" id="input-signature" name="inputSignature" required type="text" className="form__input form__input_type_signature" minLength="2" maxLength="200" />
            <span className="form__input-error input-signature-error form__input-error_type_margin"></span>
          </PopupWithForm>
          <PopupWithForm name="add" title="Новое место" buttonText="Сохранить" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
            <input placeholder="Название" id="input-title" name="name" required className="form__input form__input_type_name" type="text" minLength="2" maxLength="30" />
            <span className="form__input-error input-title-error"></span>
            <input placeholder="Ссылка на картинку" type="url" id="inputLink" name="link" required className="form__input form__input_type_link" />
            <span className="form__input-error inputLink-error"></span>
          </PopupWithForm>
          <PopupWithForm name="avatar" title="Обновить аватар" buttonText="Сохранить" isOpen={isEditAvatarOpenPopup} onClose={closeAllPopups}>
            <input placeholder="Ссылка на картинку" type="url" id="input-link" name="avatar" required className="form__input form__input_type_link" />
            <span className="form__input-error input-link-error"></span>
          </PopupWithForm>
          <PopupWithForm name="delete" buttonText="Да" title="Вы уверены?"></PopupWithForm>
          <ImagePopup onClose={closeAllPopups} card={selectedCard}/>
        </div>
      </div>
    </div>
  );
}

export default App;
