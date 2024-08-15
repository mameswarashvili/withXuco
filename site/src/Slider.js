import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Slider.css';

// Import images
import perfumeImage from './images/perfume.jpg';
import headsetImage from './images/headset.jpg';
import glassesImage from './images/glasses.jpg';
import airpodsImage from './images/airpods.jpg';
import jordanImage from './images/jordan.jpg';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transition, setTransition] = useState('');

  // Array of slide data (image and text)
  const slides = [
    { image: jordanImage, title: 'Air Jordan', price: '199ლ', text: 'სპორტული ფეხსაცმელი ცნობილი კალათბურთელი მაიკლ ჯორდანის' },
    { image: perfumeImage, title: 'Dior Sauvage', price: '89ლ', text: 'მამაკაცის სუნამო Dior Sauvage – სუნამო ქარიზმატული სურნელით. სავაჟის ახალი კონცენტრირებული ინტერპრეტაცია, რომელიც აერთიანებს გრილ და თბილ აღმოსავლურ ნოტებს.' },
    { image: headsetImage, title: 'Headset', price: '129ლ' },
    { image: glassesImage, title: 'მზის სათვალე', text: 'მზის სათვალე G.PIRALLI – 2372-C1 ბუდით, მზის სათვალე G.PIRALLI – 2372-C2 ბუდით, მზის სათვალე G.PIRALLI – 2372-C3 ბუდით, მზის სათვალე G.PIRALLI – 2372-C4 ბუდით', price: '149ლ' },
    { image: airpodsImage, title: 'AirPods', price: '249ლ' },
  ];

  const goToPrevious = () => {
    setTransition('prev');
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setTransition('next');
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
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
          {slides.map((slide, index) => (
            <div
              key={index}
              className="slide"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="slide-content">
                <div className="image-container" style={{ backgroundImage: `url(${slide.image})` }}></div>
                <div className="text-container">
                  <h2>{slide.title}</h2>
                  <h1>{slide.price}</h1>
                  <p>{slide.text}</p>
                </div>
              </div>
            </div>
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
