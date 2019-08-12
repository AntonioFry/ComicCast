import React from 'react';
import './Card.css'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { setSearchResult, favoriteCharacter, unfavoriteCharacter, changeFavoriteState } from '../../actions';
import { connect } from 'react-redux';

export const Card = ({ name, id, image, setSearchResult, favorite, unfavoriteCharacter, favoriteCharacter, changeFavoriteState }) => {
  const bookmarkImg = `bookmark-${favorite && "active"}`
  const favoriteAction = (e) => {
    e.preventDefault();
    if (favorite === true) {
      unfavoriteCharacter(id);
      changeFavoriteState(id);
    } else {
      favoriteCharacter(id); 
      changeFavoriteState(id);
    }
  };
  return (
    <Link className="card-link" to={`/${id}`} onClick={() => setSearchResult("")}>
      <div className="character-card" style={{backgroundImage: `url(${image})`}}>
        <button className={bookmarkImg} onClick={(e) => favoriteAction(e)}></button>
        <div className="character-card-name-box">
          <h3 className="character-card-text">{name}</h3>
        </div>
      </div>
    </Link>
  )
}

const mapDispatchToProps = (dispatch) => ({
  setSearchResult: search => dispatch(setSearchResult(search)),
  favoriteCharacter: characterId => dispatch(favoriteCharacter(characterId)),
  unfavoriteCharacter: characterId => dispatch(unfavoriteCharacter(characterId)),
  changeFavoriteState: characterId => dispatch(changeFavoriteState(characterId)),
})

Card.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}

export default connect(null, mapDispatchToProps)(Card);