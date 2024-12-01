import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">My App</h1>
      <nav className="nav">
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;