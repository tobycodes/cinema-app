import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Movie } from 'types/app';
import Rating from '../Rating';

import './index.scss';
import LazyImage from '../LazyImage';

interface IProps {
  movieList: Movie[];
}

const Grid: FC<IProps> = ({ movieList }) => {
  return (
    <div className="grid">
      {movieList.map(({ imageUrl, title, vote_average, id }) => {
        return (
          <LazyImage key={id} className="grid-cell" src={imageUrl}>
            <div className="grid-read-more">
              <Link to={`/${id}/details`} className="grid-cell-link">
                Read More
              </Link>
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
  );
};

export default Grid;
