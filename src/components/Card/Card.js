import React from 'react';
import './Card.css'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { setSearchResult } from '../../actions';
import { connect } from 'react-redux';

export const Card = ({ name, id, image, setSearchResult }) => {
  return (
    <Link className="card-link" to={`/${id}`} onClick={() => setSearchResult("")}>
      <div className="character-card" style={{backgroundImage: `url(${image})`}}>
        <div className="character-card-name-box">
          <h3 className="character-card-text">{name}</h3>
        </div>
      </div>
    </Link>
  )
}

const mapDispatchToProps = (dispatch) => ({
  setSearchResult: search => dispatch(setSearchResult(search))
})

Card.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}

export default connect(null, mapDispatchToProps)(Card);