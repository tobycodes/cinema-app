import React, { FC, useRef, useEffect } from 'react';

import './index.scss';

interface RatingProps {
  rating: number;
  totalStars: number;
}

const Rating: FC<RatingProps> = ({ rating, totalStars }) => {
  const ratingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ratingRef.current && rating) {
      const percentage = (rating / totalStars) * 100;

      ratingRef.current.style.width = Math.floor(isFinite(percentage) ? percentage : 0) + '%';
      console.log(rating);
    }
  }, [rating, totalStars]);
  return (
    <div className="star-rating">
      <div className="back-stars">
        {Array.from({ length: totalStars }, (_, i) => (
          <i key={i} className="fa fa-star" aria-hidden="true"></i>
        ))}
        <div className="front-stars" ref={ratingRef}>
          {Array.from({ length: totalStars }, (_, i) => (
            <i key={i} className="fa fa-star" aria-hidden="true"></i>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rating;
