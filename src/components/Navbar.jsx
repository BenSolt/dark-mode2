import React, { useState } from 'react';
import {useDarkMode} from './hooks/useDarkMode';
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>

      <NavLink className='navlink' to='/'>COIN1</NavLink>
      <NavLink className='navlink' to='/ether'>COIN2</NavLink>

      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
