import React from 'react';
import './CharacterDetails.css';

const CharacterDetails = (props) => {
  const { image, overview, name,  full_name, first_appearance } = props;
  return (
    <sectiom>
      <article className="general-info-article">
        <img className="character-details-img" src={image} alt={`the character ${name}`}/>
        <div className="general-info-text-container">
          <p className="details-name">Name: {name}</p>
          <p className="details-full-name">Full Name: {full_name}</p>
        </div>
      </article>
      <article>
        <p className="details-overview">{overview}</p>
      </article>
      <h2>Trivia</h2>
      <article>
        <p className="details-first-appearance">{first_appearance}</p>
      </article>
    </sectiom>
  )
}

export default CharacterDetails;