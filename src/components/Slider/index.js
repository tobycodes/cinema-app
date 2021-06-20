/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import './index.scss';

const IMAGES = Array.from({ length: 5 }, (_, i) => ({ id: i, url: `https://source.unsplash.com/random/${i}` }));
const SLIDER_INTERVAL = 5000;

const Slider = () => {
  const [curIndex, setCurIndex] = useState(0);
  const slidesLength = IMAGES.length;

  const handleSlideChange = (type) => {
    switch (type) {
      case 'prev':
        if (curIndex <= 0) setCurIndex(slidesLength - 1);
        else setCurIndex(curIndex - 1);
        break;

      case 'next':
        if (curIndex < slidesLength - 1) setCurIndex(curIndex + 1);
        else setCurIndex(0);
        break;
    }
  };

  const handleAutoSlideChange = () => {
    if (curIndex < slidesLength - 1) setCurIndex(curIndex + 1);
    else setCurIndex(0);
  };

  useEffect(() => {
    const timeout = setTimeout(handleAutoSlideChange, SLIDER_INTERVAL);

    return () => {
      clearTimeout(timeout);
    };
  }, [curIndex]);

  return (
    <div className="slider">
      <div className="slider-items">
        {/* <div className="slider-image" style={{ backgroundImage: `url(${IMAGES[curIndex].url})` }}></div> */}
        <Indicators slides={IMAGES} currentSlide={curIndex} />
        <RenderArrows switchSlide={handleSlideChange} />
      </div>
    </div>
  );
};

const Indicators = ({ slides, currentSlide }) => {
  return (
    <div className="slider-nav">
      {slides.map(({ id }, i) => (
        <button key={id} className={`slider-nav-button${i === currentSlide ? ' slider-nav-button--active' : ''}`} />
      ))}
    </div>
  );
};

const RenderArrows = ({ switchSlide }) => {
  return (
    <div className="slider-arrows">
      <button className="slider-arrow slider-arrow--left" onClick={() => switchSlide('prev')}></button>
      <button className="slider-arrow slider-arrow--right" onClick={() => switchSlide('next')}></button>
    </div>
  );
};

export default Slider;
