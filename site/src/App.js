import React, { useState } from 'react';
import Header from './Header';
import Slider from './Slider';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
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
    </div>
  );
}

export default App;
