function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
    document.querySelector('.popup_type_photo').classList.add('popup_opened');
  }

  return(
    <li className="element" onClick={() => handleClick()}>
      <div  className="element__image" style={{backgroundImage: `url(${props.card.link})`}} onClick={() => handleClick()}></div>
      <button className="element__delete-button" type="button" aria-label="Кнопка удаления карточки"></button>
      <div className="element__wrapper">
        <h2 className="element__title">{props.card.name}</h2>
        <div className="element__like">
          <button className="element__heart" type="button" aria-label="Кнопка лайка"></button>
          <p className="element__amount">{props.card.likes.length}</p>
        </div>
      </div>
    </li>
  )
}

export default Card;
