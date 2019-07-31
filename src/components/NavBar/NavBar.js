import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import { setSearchResult } from '../../actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export const NavBar = ({ setSearchResult }) => {
  return (
    <nav>
      <h1>ComicCast</h1>
      <div className="navigation-links-container">
        <NavLink className="navigation-links" to="/" onClick={() => setSearchResult("")}>Home</NavLink>
        <NavLink className="navigation-links" to="/Favorites" onClick={() => setSearchResult("")}>Favorites</NavLink>
        <NavLink className="navigation-links" to="/Search">Search</NavLink>
      </div>
    </nav>
  )
}

const mapDispatchToProps = (dispatch) => ({
  setSearchResult: search => dispatch(setSearchResult(search))
});

NavBar.propTypes = {
  setSearchResult: PropTypes.func.isRequired
}

export default connect(null, mapDispatchToProps)(NavBar);