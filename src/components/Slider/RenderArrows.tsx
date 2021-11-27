import React, { FC } from 'react';
import { SlideActionType } from './index';

interface RenderArrowProps {
  switchSlide: (type: SlideActionType) => void;
}
const RenderArrows: FC<RenderArrowProps> = ({ switchSlide }) => {
  return (
    <div className="slider-arrows">
      <button
        className="slider-arrow slider-arrow--left"
        onClick={() => switchSlide('prev')}
      ></button>
      <button
        className="slider-arrow slider-arrow--right"
        onClick={() => switchSlide('next')}
      ></button>
    </div>
  );
};

export default RenderArrows;
