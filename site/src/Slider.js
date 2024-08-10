import React, { useState, useEffect } from 'react';
import './Slider.css'; // Ensure this file is correctly linked

const slides = [
  "Slide 1 Content",
  "Slide 2 Content",
  "Slide 3 Content",
  "Slide 4 Content"
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prevSlide => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
        >
          {slide}
        </div>
      ))}
    </div>
  );
};

export default Slider;
