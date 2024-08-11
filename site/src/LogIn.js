// LogIn.js
import React from 'react';
import './Auth.css'; // Updated import

const LogIn = ({ onClose }) => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <button className="close-button" onClick={onClose}>×</button>
        <h1>Log In</h1>
        <form>
          <label>
            <input type="email" placeholder="Enter your email" required />
          </label>
          <label>
            <input type="password" placeholder="Enter your password" required />
          </label>
          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
