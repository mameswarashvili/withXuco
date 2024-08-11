import React from 'react';
import './App.css';
import Header from './Header';
import Slider from './Slider'; // Import the new Slider component

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Slider /> {/* Use the Slider component */}
      </div>
    </div>
  );
}

export default App;
