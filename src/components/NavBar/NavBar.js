import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

export const NavBar = () => {
  return (
    <nav>
      <h1>ComicCast</h1>
      <div className="navigation-links-container">
        <NavLink className="navigation-links" to="/">Home</NavLink>
        <NavLink className="navigation-links" to="/Favorites">Favorites</NavLink>
        <NavLink className="navigation-links" to="/Search">Search</NavLink>
      </div>
    </nav>
  )
}

export default NavBar;