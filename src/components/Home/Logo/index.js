import React, { useState, useEffect } from 'react';
import pic from '../../../assets/images/self_pic.jpg';
import pic2 from '../../../assets/images/self_pic2.jpg';
import pic3 from '../../../assets/images/self_pic3.jpg';
import './index.scss';

const Logo = () => {
  const [activeSlide, setActiveSlide] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => {
        const nextSlide = prevSlide === 3 ? 1 : prevSlide + 1;
        return nextSlide;
      });
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="logo-container">
      <ul className="slides">
        <input type="radio" name="radio-buttons" id="img-1" checked={activeSlide === 1}
               onChange={() => setActiveSlide(1)} />
        <li className="slide-container">
          <div className="slide-image">
            <img src={pic} alt="Pic1" style={{
              width: '50%', height: 'auto',
              position: 'relative', bottom: '110px',
              clipPath: 'polygon(0 0, 100% 0, 100% 75%, 0 75%)',
            }} />
          </div>
          <div className="carousel-controls">
            <label htmlFor="img-3" className="prev-slide">
              <span>&lsaquo;</span>
            </label>
            <label htmlFor="img-2" className="next-slide">
              <span>&rsaquo;</span>
            </label>
          </div>
        </li>

        <input type="radio" name="radio-buttons" id="img-2" checked={activeSlide === 2}
               onChange={() => setActiveSlide(2)}/>
        <li className="slide-container">
          <div className="slide-image">
            <img src={pic3} alt="Pic2" style={{ width: '50%', height: 'auto' }} />
          </div>
          <div className="carousel-controls">
            <label htmlFor="img-1" className="prev-slide">
              <span>&lsaquo;</span>
            </label>
            <label htmlFor="img-3" className="next-slide">
              <span>&rsaquo;</span>
            </label>
          </div>
        </li>

        <input type="radio" name="radio-buttons" id="img-3" checked={activeSlide === 3}
               onChange={() => setActiveSlide(3)}/>
        <li className="slide-container">
          <div className="slide-image">
            <img src={pic2} alt="Pic3"
              style={{
                width: '50%', height: 'auto',
                clipPath: 'polygon(0 0, 100% 0, 100% 75%, 0 75%)',
                position: 'relative',
                bottom: '110px'
              }} />
          </div>
          <div className="carousel-controls">
            <label htmlFor="img-2" className="prev-slide">
              <span>&lsaquo;</span>
            </label>
            <label htmlFor="img-1" className="next-slide">
              <span>&rsaquo;</span>
            </label>
          </div>
        </li>

        <div className="carousel-dots">
          <label htmlFor="img-1" className="carousel-dot" id="img-dot-1"></label>
          <label htmlFor="img-2" className="carousel-dot" id="img-dot-2"></label>
          <label htmlFor="img-3" className="carousel-dot" id="img-dot-3"></label>
        </div>
      </ul>
    </div>
  );
};

export default Logo;
