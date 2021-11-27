import React from 'react';
import { useSelector } from 'react-redux';

import './index.scss';

const Reviews = () => {
  const movieReviews = useSelector(({ movies }) => movies.movieReviews.results);

  return (
    <div className="movie-reviews">
      <div className="div-title">Reviews {movieReviews.length}</div>
      <div className="reviews">
        {movieReviews.map(({ author, content, id }) => (
          <div key={id} className="review">
            <h3>{author}</h3>
            <div>{content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
