import React, { useState } from 'react';
import { FaUser, FaBars, FaSearch, FaBell, FaShoppingCart } from 'react-icons/fa'; // Import FaShoppingCart
import './Header.css';

const Header = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#boxes">Boxes</a></li>
          <li className="search-bar">
            <input type="text" placeholder="Search..." />
            <FaSearch className="search-icon" />
          </li>
          <li className="user-menu-container">
            <button className="user-menu-button" onClick={toggleUserMenu}>
              <FaUser className="user-icon" />
              <span className="user-text">User</span>
            </button>
            {isUserMenuOpen && (
              <ul className="user-menu">
                <li><a href="#signup">Sign Up</a></li>
                <li><a href="#login">Log In</a></li>
              </ul>
            )}
          </li>
          <li className="cta-button">
            <a href="#contact">Contact Us</a>
          </li>
          <li>
            <FaBell className="notification-icon" />
          </li>
          <li>
            <FaShoppingCart className="cart-icon" /> {/* Added cart icon */}
          </li>
        </ul>
      </nav>
      <div className="burger" onClick={() => console.log('Burger clicked')}>
        <FaBars className="burger-icon" />
      </div>
    </header>
  );
};

export default Header;
