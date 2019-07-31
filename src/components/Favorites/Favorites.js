import React from 'react';
import { connect } from 'react-redux';
import './Favorites.css';

export const Favorites = () => {
  return (
    <>
      <h2>Favorites</h2>
      <section>
        <img className="construction-gif" src={require('../../images/underConstruction.gif')} />
      </section>
    </>
  )
}

export default Favorites;