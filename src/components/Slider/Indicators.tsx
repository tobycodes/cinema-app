import React, { FC } from 'react';

interface IndicatorProps {
  slides: any[];
  currentSlide: number;
}
const Indicators: FC<IndicatorProps> = ({ slides, currentSlide }) => {
  return (
    <div className="slider-nav">
      {slides.map(({ id }, i) => (
        <button key={id} className={`slider-nav-button${i === currentSlide ? ' slider-nav-button--active' : ''}`} />
      ))}
    </div>
  );
};

export default Indicators;
