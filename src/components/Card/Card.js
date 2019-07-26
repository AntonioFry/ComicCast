import React from 'react';
import './Card.css'

const Card = ({ name, id, image }) => {
  return (
    <div className="character-card" style={{backgroundImage: `url(${image})`}}>
      {/* <img className='character-card-img' src={image} alt='character'/> */}
      <div className="character-card-name-box">
        <h3 className="character-card-text">{name}</h3>
      </div>
    </div>
  )
}

export default Card;