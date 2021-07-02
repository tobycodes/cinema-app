import React, { FC } from 'react';
import { Movie } from '../../types/app';
import Rating from '../Rating';

import './index.scss';
import LazyImage from '../LazyImage';

interface IProps {
  movieList: Array<Movie & { imageUrl: string }>;
}

const Grid: FC<IProps> = ({ movieList }) => {
  return (
    <>
      <div className="grid">
        {movieList.map(({ imageUrl, title, vote_average, id }) => {
          return (
            <LazyImage key={id} className="grid-cell" src={imageUrl}>
              <div className="grid-read-more">
                <button className="grid-cell-button">Read More</button>
              </div>
              <div className="grid-detail">
                <span className="grid-detail-title">{title}</span>
                <div className="grid-detail-rating">
                  <Rating rating={vote_average} totalStars={10} />
                  &nbsp; &nbsp;
                  <span className="grid-vote-average">{vote_average}</span>
                </div>
              </div>
            </LazyImage>
          );
        })}
      </div>
    </>
  );
};

export default Grid;
