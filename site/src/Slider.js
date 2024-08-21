import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Slider.css';

// Import images
import perfumeImage from './images/perfume.jpg';
import headsetImage from './images/headset.jpg';
import glassesImage from './images/glasses.jpg';
import airpodsImage from './images/airpods.jpg';
import jordanImage from './images/jordan.jpg';

const Slider = ({ addToCart }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [cartAnimation, setCartAnimation] = useState(false);

  // Array of slide data (image, title, price)
  const slides = [
    { image: jordanImage, title: 'Air Jordan', price: '199ლ', id: 1 },
    { image: perfumeImage, title: 'Dior Sauvage', price: '89ლ', id: 2 },
    { image: headsetImage, title: 'Headset', price: '129ლ', id: 3 },
    { image: glassesImage, title: 'მზის სათვალე', price: '149ლ', id: 4 },
    { image: airpodsImage, title: 'AirPods', price: '249ლ', id: 5 }
  ];

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  const handleQuantityChange = (event) => {
    setQuantity(Number(event.target.value));
  };

  const handleAddToCart = (item) => {
    setCartAnimation(true);
    setTimeout(() => {
      setCartAnimation(false);
    }, 800); // Animation duration

    addToCart({ ...item, quantity });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="slider-container">
      <button className="nav-icon prev" onClick={goToPrevious}>
        <FaChevronLeft />
      </button>
      <div className={`slider ${cartAnimation ? 'cart-animation' : ''}`}>
        <div
          className="slides"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="slide"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="overlay">
                <div className="product-info">
                  <div className="product-image" style={{ backgroundImage: `url(${slide.image})` }}></div>
                  <div className="product-details">
                    <h2>{slide.title}</h2>
                    <h3>{slide.price}</h3>
                    <div className="cart-controls">
                      <input
                        type="number"
                        value={quantity}
                        min="1"
                        onChange={handleQuantityChange}
                      />
                      <button onClick={() => handleAddToCart(slide)}>Add to Cart</button>
                    </div>
                  </div>
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
