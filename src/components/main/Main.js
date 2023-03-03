import React from "react";
import {api} from '../../utils/Api.js';
import Card from "../card/Card.js";

function Main(props) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getProfileInfo(), api.getInitialCards()])
      .then(([profileData, cards]) => {
        setUserName(profileData.name);
        setUserDescription(profileData.about);
        setUserAvatar(profileData.avatar);

        setCards(cards);
      })
      .catch(error => console.log(error))
  }, [])

  return(
    <main className="content">
      <section className="profile" aria-label="Профиль">
        <div className="profile__image" onClick={props.onEditAvatar} style={{ backgroundImage: `url(${userAvatar})` }}></div>
        <div className="profile__info">
          <div className="profile__wrapper">
            <h1 className="profile__name">{ userName }</h1>
            <button className="profile__edit-button" type="button" onClick={props.onEditProfile} aria-label="Кнопка редактирования"></button>
          </div>
          <p className="profile__signature">{ userDescription }</p>
        </div>
        <button className="profile__add-button" type="button" onClick={props.onAddPlace} aria-label="Кнопка добавления карточки"></button>
      </section>
      <section aria-label="Элементы">
        <ul className="elements">
          {cards.map(cardConfig => <Card card={cardConfig} key={cardConfig._id} onCardClick={props.onCardClick} />)}
        </ul>
      </section>
    </main>
  )
}

export default Main;
