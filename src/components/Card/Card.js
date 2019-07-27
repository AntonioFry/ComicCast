import React from 'react';
import './Card.css'
import { Link } from 'react-router-dom';

const Card = ({ name, id, image }) => {
  return (
    <Link to={`/${id}`}>
      <div className="character-card" style={{backgroundImage: `url(${image})`}}>
        <div className="character-card-name-box">
          <h3 className="character-card-text">{name}</h3>
        </div>
      </div>
    </Link>
  )
}

export default Card;