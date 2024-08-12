import React from 'react';
import './App.css';
import Header from './Header';
import Slider from './Slider'; 

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Slider /> 
        
      </div>
    </div>
  );
}

export default App;
