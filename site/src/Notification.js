import React from 'react';
import './Notification.css'; // Ensure you have appropriate styles

const Notification = ({ message }) => {
  return (
    <div className="notification">
      {message}
    </div>
  );
};

export default Notification;
