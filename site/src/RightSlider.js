import React from 'react';
import './RightSlider.css';

const RightSlider = () => {
  return (
    <div className="content-container">
      <div className="content-box">
        <h1>Discover Our Exclusive Deals!</h1>
        <p>
          Dive into our handpicked selection of top-quality products. From elegant fashion pieces to cutting-edge electronics, we have curated collections to cater to your unique style and needs. Shop now and enjoy exclusive discounts on our top picks!
        </p>
        <button className="explore-button">Shop Now</button>
        <div className="additional-content">
          <h2>Special Offers</h2>
          <ul>
            <li>50% off on selected items</li>
            <li>Free shipping on orders over $50</li>
            <li>New arrivals every week</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RightSlider;
