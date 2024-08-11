import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Slider.css';

// Import images
import perfumeImage from './images/perfume.jpg';
import headsetImage from './images/headset.jpg';
import glassesImage from './images/glasses.jpg';
import airpodsImage from './images/airpods.jpg';
import jordanShoes from './images/jordan.jpg'

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transition, setTransition] = useState('');

  // Array of images
  const images = [jordanShoes, perfumeImage, headsetImage, glassesImage, airpodsImage];

  const goToPrevious = () => {
    setTransition('prev');
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setTransition('next');
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="slider-container">
      <button className="nav-icon prev" onClick={goToPrevious}>
        <FaChevronLeft />
      </button>
      <div className="slider">
        <div
          className={`slides ${transition}`}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="slide"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          ))}
        </div>
      </div>
      <button className="nav-icon next" onClick={goToNext}>
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Slider;
