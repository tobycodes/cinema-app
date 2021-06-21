import React, { FC } from 'react';
import Rating from '../Rating';
import { IMAGES } from '../Slider';

import './index.scss';

const Grid: FC = () => {
  return (
    <>
      <div className="grid">
        {IMAGES.map((img) => (
          <div key={img.id} className="">
            <div className="grid-cell" style={{ backgroundImage: `url(${img.url})` }}>
              <div className="grid-read-more">
                <button className="grid-cell-button">Read More</button>
              </div>
              <div className="grid-detail">
                <span className="grid-detail-title">Mission Impossible</span>
                <div className="grid-detail-rating">
                  <Rating rating={4.5} totalStars={5} />
                  &nbsp; &nbsp;
                  <span className="grid-vote-average">4.5</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Grid;
