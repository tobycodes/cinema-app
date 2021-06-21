/* eslint-disable react/prop-types */
import React, { useState, useEffect, FC, useCallback } from 'react';
import './index.scss';
import Indicators from './Indicators';
import RenderArrows from './RenderArrows';

export type SlideActionType = 'prev' | 'next';

export const IMAGES = Array.from({ length: 5 }, (_, i) => ({ id: i, url: `https://source.unsplash.com/random/${i}` }));
const SLIDER_INTERVAL = 5000;

const Slider: FC = () => {
  const [curIndex, setCurIndex] = useState(0);
  const slidesLength = IMAGES.length;

  const handleSlideChange = (type: SlideActionType) => {
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

  const handleGoToSlide = (slideIndex: number) => setCurIndex(slideIndex);

  const handleAutoSlideChange = useCallback(() => {
    if (curIndex < slidesLength - 1) setCurIndex(curIndex + 1);
    else setCurIndex(0);
  }, [curIndex, slidesLength]);

  useEffect(() => {
    const timeout = setTimeout(handleAutoSlideChange, SLIDER_INTERVAL);

    return () => {
      clearTimeout(timeout);
    };
  }, [curIndex, handleAutoSlideChange]);

  return (
    <div className="slider">
      <div className="slider-items">
        <div className="slider-image" style={{ backgroundImage: `url(${IMAGES[curIndex].url})` }}></div>
        <Indicators slides={IMAGES} currentSlide={curIndex} goToSlide={handleGoToSlide} />
        <RenderArrows switchSlide={handleSlideChange} />
      </div>
    </div>
  );
};

export default Slider;
