/* eslint-disable react/prop-types */
import React, { useState, useEffect, FC, useCallback } from 'react';
import { connect } from 'react-redux';
import './index.scss';
import Indicators from './Indicators';
import RenderArrows from './RenderArrows';

export type SlideActionType = 'prev' | 'next';

const SLIDER_INTERVAL = 5000;

interface IProps {
  items: Array<{ id: string | number; imageUrl: string; [key: string]: any }>;
  autoChange?: boolean;
  showArrows?: boolean;
}

const Slider: FC<IProps> = ({ items, autoChange = true, showArrows = true }) => {
  const [curIndex, setCurIndex] = useState(0);
  const slidesLength = items.length;

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
    if (autoChange) {
      const timeout = setTimeout(handleAutoSlideChange, SLIDER_INTERVAL);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [curIndex, handleAutoSlideChange, autoChange]);

  return (
    <div className="slider">
      <div className="slider-items">
        <div
          className="slider-image"
          style={{ backgroundImage: `url(${items[curIndex]?.imageUrl})` }}
        ></div>
        <Indicators slides={items} currentSlide={curIndex} goToSlide={handleGoToSlide} />
        {showArrows ? <RenderArrows switchSlide={handleSlideChange} /> : null}
      </div>
    </div>
  );
};

export default connect(({ app: { loading } }: any) => ({ loading }))(Slider);
