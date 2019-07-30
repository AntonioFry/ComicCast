import React from 'react';
import './Card.css'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const Card = ({ name, id, image }) => {
  return (
    <Link className="card-link" to={`/${id}`}>
      <div className="character-card" style={{backgroundImage: `url(${image})`}}>
        <div className="character-card-name-box">
          <h3 className="character-card-text">{name}</h3>
        </div>
      </div>
    </Link>
  )
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}

export default Card;