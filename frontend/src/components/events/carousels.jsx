import React, { useState } from 'react';
import './events.css';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <div className="carousel">
      <button className="carousel-button left" onClick={prevSlide}>{"<"}</button>
      <div className="carousel-content">
        {items.map((item, index) => (
          <div
            key={index}
            
            className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>
      <button className="carousel-button right" onClick={nextSlide}>›</button>
    </div>
  );
};

export default Carousel;