// SignUp.js
import React from 'react';
import './Auth.css'; // Updated import

const SignUp = ({ onClose }) => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <button className="close-button" onClick={onClose}>×</button>
        <h1>Sign Up</h1>
        <form>
        <label>
            <input type="text" placeholder="Name" required />
          </label>
          <label>
            <input type="email" placeholder="Email" required />
          </label>
          <label>
            <input type="password" placeholder="Password" required />
          </label>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
