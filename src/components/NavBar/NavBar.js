import React from 'react';
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
      <h1>Placeholder</h1>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Favorites">Favorites</NavLink>
        <NavLink to="/Search">Search</NavLink>
      </div>
    </nav>
  )
}

export default NavBar;