import React, { useState } from 'react';
import { FaUser, FaBars, FaSearch, FaBell, FaShoppingCart } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' }
  ]);

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
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
          <li className="cart-button">
            <button onClick={toggleCart}>
              <FaShoppingCart className="cart-icon" />
              {cartItems.length > 0 && (
                <span className="cart-count">{cartItems.length}</span>
              )}
            </button>
            {isCartOpen && (
              <div className="cart-sidebar">
                <h2>Cart</h2>
                <ul>
                  {cartItems.map(item => (
                    <li key={item.id}>
                      <span>{item.name}</span>
                      <button onClick={() => removeItem(item.id)}>Remove</button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
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
