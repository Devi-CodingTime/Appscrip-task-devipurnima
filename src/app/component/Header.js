// components/Header.js
import React from 'react';
import "../styles/header.css"; // Assuming you have a CSS file for styling

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img src="/images/logo-icon.png" alt="Logo Icon" className="logo-icon" />
      </div>

      <div className="header-center">
        <h1 className="logo-text">LOGO</h1>
      </div>

      <div className="header-right">
        <ul className="nav-icons">
          <li><span role="img" aria-label="search">🔍</span></li>
          <li><span role="img" aria-label="wishlist">🤍</span></li>
          <li><span role="img" aria-label="cart">👜</span></li>
          <li><span role="img" aria-label="user">👤</span></li>
          <li>ENG ⌄</li>
        </ul>
      </div>

      <nav className="nav-links">
        <ul>
          <li>SHOP</li>
          <li>SKILLS</li>
          <li>STORIES</li>
          <li>ABOUT</li>
          <li>CONTACT US</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
