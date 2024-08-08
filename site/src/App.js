// src/App.js
import React, { useState } from 'react';
import './App.css';
import Header from './Header';

function App() {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <div className="App">
      {isVisible && (
        <div className="overlay">
          <div className="shadow">
            <button className="close-button" onClick={handleClose}>×</button>
            <h1>Don't Have an Account?</h1>
            <p>
              <a href="/create-account" className="link-button">Create one</a>
              <span> or </span>
              <a href="/login" className="link-button">Log in</a>
            </p>
          </div>
        </div>
      )}
      <div className="content">
        <Header />
      </div>
    </div>
  );
}

export default App;
