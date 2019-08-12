import React from 'react';
import Card from '../Card/Card';
import './SearchResults.css'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

export const SearchResults = ({ allCharacters, search }) => {
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
        favorite={character.favorite}
      />
    )
  });
  return (
    <section className="search-results">
      {characterCards}
    </section>
  )
}

export const mapStateToProps = (store) => ({
  allCharacters: store.allCharacters,
  search: store.search
});

SearchResults.propTypes = {
  allCharacters: PropTypes.array.isRequired,
  search: PropTypes.array.isRequired
}

export default connect(mapStateToProps)(SearchResults);