import React from 'react';
import './CharacterDetails.css';

export const CharacterDetails = (props) => {
  const { image, overview, name,  full_name, first_appearance, publisher } = props;
  return (
    <section className="character-details-section">
      <article className="general-info-article">
        <img className="character-details-img" src={image} alt={`the character ${name}`}/>
        <div className="general-info-text-container">
          <p className="details-name">Name: {name}</p>
          <p className="details-full-name">Full Name: {full_name}</p>
        </div>
      </article>
      <section className="details-right-section">
        <h2 className="overview-header" >Overview</h2>
        <article className="overview-article">
          <p className="details-overview">Overview: {overview}</p>
        </article>
        <h2 className="trivia-header" >Trivia</h2>
        <article className="trivia-article">
          <p className="details-first-appearance">First Appearance: {first_appearance}</p>
          <p className="character-publisher">Publisher: {publisher}</p>
        </article>
      </section>
    </section>
  )
}

export default CharacterDetails;