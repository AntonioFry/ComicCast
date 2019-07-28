import React, { Component } from 'react'
import Card from '../Card/Card';
import './CharacterCarousel.css';
import { connect } from 'react-redux';

const CharacterCarousel = (props) => {
  let allCharacters = props.allCharacters.slice();
  let randomCharacters = [];

  for (let i = 0; i < 5; i++) {
    const randomNumber = Math.floor(Math.random() * allCharacters.length - 1);
    const character = allCharacters.splice(randomNumber, 1);
    randomCharacters.push(...character)
  }

  const characters = randomCharacters.map(character => {
    return (
      <Card
        name={character.name}
        id={character.id}
        image={character.image}
        key={character.id}
      />
    )
  })

  return (
    <section className="carousel-section">
      {characters}
    </section>
  )
}

const mapStateToProps = (store) => ({
  allCharacters: store.allCharacters
})

export default connect(mapStateToProps)(CharacterCarousel);