import React from 'react'
import Card from '../Card/Card';
import './CharacterCarousel.css';

const CharacterCarousel = ({ suggestedCharacters}) => {
  const charcters = suggestedCharacters.map(character => {
    return (
    <Card
    name={character.name}
    id={character.id}
    image={character.image}
    key={character.key}
    />
    )
  })
  return (
    <section className="carousel-section">
      {charcters}
    </section>
  )
}

export default CharacterCarousel;