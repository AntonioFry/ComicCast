import React from 'react';
import Card from '../Card/Card';
import './SearchResults.css'
import { connect } from 'react-redux';

const SeacrhResult = ({ allCharacters, search }) => {
  const filteredCharacters = allCharacters.filter(character => {
    return character.name.toLowerCase().includes(search);
  });
  const characterCards = filteredCharacters.map(character => {
    return (
      <Card
        name={character.name}
        id={character.id}
        image={character.image}
        key={character.id}
      />
    )
  });
  return (
    <section className="search-results">
      {characterCards}
    </section>
  )
}

const mapStateToProps = (store) => ({
  allCharacters: store.allCharacters,
  search: store.search
});

export default connect(mapStateToProps)(SeacrhResult);