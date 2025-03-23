import "boxicons";
import React from "react";

function Card({ character }) {
  return (
    <div className="card">
      <div className="card__side card__side-closed">
        <div className="card__characters-info">
          <span>{character.age}y</span>
          <span>{character.height}m</span>
          <span>{character.nationality}</span>
        </div>
        <div className="card__container">
          <div className="card__div-image-icons u-margin-bottom-small">
            <div className="card__image-box">
              <img
                src={character.image}
                alt="Character icon"
                className="card__image"
              />
            </div>
          </div>
          <div className="heading u-margin-bottom-xSmall">
            <h4>{character.name}</h4>
          </div>
          <p className="card__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            vehicula ipsum neque. Nam congue eu magna non fermentum. Cras sed
            aliquet nisi, sed molestie dui. Mauris quam velit, condimentum sed
            auctor et, consequat vitae nibh.
          </p>
        </div>
      </div>
      <div className="card__side card__side-opened">
        <p className="card__image-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          vehicula ipsum neque. Nam congue eu magna non fermentum. Cras sed
          aliquet nisi, sed molestie dui. Mauris quam velit, condimentum sed
          auctor et, consequat vitae nibh.
        </p>
        <p className="card__phrase">{character.phrase}</p>
        <div
          className="card__banner"
          style={{
            backgroundImage: `linear-gradient(to top, rgb(240, 236, 227, 0.6) 30%, rgb(20, 20, 20, 0.6)), url(${character.banner})`,
          }}
        ></div>
      </div>
    </div>
  );
}

export default Card;
