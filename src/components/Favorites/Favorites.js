import React from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card';
import './Favorites.css';

export const Favorites = ({ allCharacters }) => {
  const favorited = allCharacters.filter(charcater => charcater.favorite === true);
  const cards = favorited.map(character => {
    return (
      <Card
        name={character.name}
        id={character.id}
        image={character.image}
        key={character.id}
        favorite={character.favorite}
      />
    )
  });
  return (
    <section className="favorites">
      {cards}
    </section>
  )
}

const mapStateToProps = (store) => ({
  allCharacters: store.allCharacters
});

export default connect(mapStateToProps)(Favorites);