import React, { useContext } from 'react';
import { AuthContext } from "../../context/AuthContext";
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = () => {
  const { isLoggedIn, userId, logout } = useContext(AuthContext); // we'll get a context obj
  return <ul className="nav-links">
    <li>
      <NavLink to="/" exact>ALL USERS</NavLink>
    </li>
    {isLoggedIn && <li>
      <NavLink to={`/${userId}/places`}>MY PLACES</NavLink>
    </li>}
    {isLoggedIn && <li>
      <NavLink to="/places/new">ADD PLACE</NavLink>
    </li>}
    {!isLoggedIn && <li>
      <NavLink to="/auth">AUTHENTICATE</NavLink>
    </li>}

    {isLoggedIn && <li>
      <button onClick = {logout}>LOGOUT</button>
    </li>}
  </ul>
};

export default NavLinks;