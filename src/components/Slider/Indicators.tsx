import React, { FC } from 'react';

interface IndicatorProps {
  slides: any[];
  currentSlide: number;
  goToSlide: (slideIndex: number) => void;
}

const Indicators: FC<IndicatorProps> = ({ slides, currentSlide, goToSlide }) => {
  return (
    <div className="slider-nav">
      {slides.map(({ id }, i) => (
        <button key={id} className={`slider-nav-button${i === currentSlide ? ' slider-nav-button--active' : ''}`} onClick={() => goToSlide(i)} />
      ))}
    </div>
  );
};

export default Indicators;
