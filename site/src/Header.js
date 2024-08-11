import React, { useState } from 'react';
import { FaUser, FaBars, FaSearch, FaBell, FaShoppingCart, FaTimes } from 'react-icons/fa';
import SignUp from './SignUp';
import LogIn from './LogIn';
import './Header.css';

const Header = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSignUpVisible, setIsSignUpVisible] = useState(false);
  const [isLogInVisible, setIsLogInVisible] = useState(false);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'ყუთი 1' },
    { id: 2, name: 'ყუთი 2' }
  ]);

  const toggleUserMenu = () => setIsUserMenuOpen(!isUserMenuOpen);
  const toggleCart = () => setIsCartOpen(!isCartOpen);
  const toggleBurgerMenu = () => setIsBurgerMenuOpen(!isBurgerMenuOpen);
  const removeItem = (id) => setCartItems(cartItems.filter(item => item.id !== id));
  const closeCart = () => setIsCartOpen(false);

  const handleSignUpClick = () => {
    setIsSignUpVisible(true);
    setIsUserMenuOpen(false);
  };

  const handleLogInClick = () => {
    setIsLogInVisible(true);
    setIsUserMenuOpen(false);
  };

  const handleCloseAuth = () => {
    setIsSignUpVisible(false);
    setIsLogInVisible(false);
  };

  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-links">
          <li><a href="#home">მთავარი</a></li>
          <li><a href="#boxes">ყუთები</a></li>
          <li className="search-bar">
            <input type="text" placeholder="ძებნა..." />
            <FaSearch className="search-icon" />
          </li>
          <li className="user-menu-container">
            <button className="user-menu-button" onClick={toggleUserMenu}>
              <FaUser className="user-icon" />
              <span className="user-text">ანგარიში</span>
            </button>
            {isUserMenuOpen && (
              <ul className="user-menu">
                <li><button onClick={handleSignUpClick}>რეგისტრაცია</button></li>
                <li><button onClick={handleLogInClick}>ავტორიზაცია</button></li>
              </ul>
            )}
          </li>
          <li className="cta-button">
            <a href="#contact">საკონტაქტო</a>
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
                <button className="cart-close-button" onClick={closeCart}>
                  <FaTimes />
                </button>
                <h2>კალათა</h2>
                <ul>
                  {cartItems.map(item => (
                    <li key={item.id} className="slide-out">
                      <span>{item.name}</span>
                      <button onClick={() => removeItem(item.id)}>წაშლა</button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        </ul>
      </nav>
      <div className="burger" onClick={toggleBurgerMenu}>
        <FaBars className="burger-icon" />
      </div>
      {isBurgerMenuOpen && (
        <div className="burger-menu-overlay open">
          <div className="burger-menu-content">
            <a href="#home" onClick={toggleBurgerMenu}>მთავარი</a>
            <a href="#boxes" onClick={toggleBurgerMenu}>ყუთები</a>
            <a href="#contact" onClick={toggleBurgerMenu}>საკონტაქტო</a>
            <button onClick={toggleBurgerMenu}>დახურვა</button>
          </div>
        </div>
      )}
      {isSignUpVisible && <SignUp onClose={handleCloseAuth} />}
      {isLogInVisible && <LogIn onClose={handleCloseAuth} />}
    </header>
  );
};

export default Header;
