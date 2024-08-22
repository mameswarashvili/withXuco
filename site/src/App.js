import React, { useState } from 'react';
import Header from './Header';
import Slider from './Slider';
import Notification from './Notification';
import RightSlider from './RightSlider.js'; // Import the new component
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [notificationMessage, setNotificationMessage] = useState('');

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
    setNotificationMessage(`Added ${product.title} to cart!`);
    setTimeout(() => {
      setNotificationMessage('');
    }, 3000); // Hide notification after 3 seconds
  };

  const removeItem = (itemId) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== itemId));
  };

  return (
    <div className="App">
      <Header cartItems={cartItems} removeItem={removeItem} />
      <div className="content">
        <Slider addToCart={addToCart} />
      </div>
      <RightSlider /> {/* Add the new component here */}
      <div className={`notification ${notificationMessage ? 'show' : ''}`}>
        <span className="notification-text">{notificationMessage}</span>
        <button className="notification-close" onClick={() => setNotificationMessage('')}>×</button>
      </div>
    </div>
  );
}

export default App;
