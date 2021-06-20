import React from 'react';

import Slider from '../Slider';
import './index.scss';

const Content = () => {
  return (
    <div className="main-content">
      <Slider />
      <div className="movie-grid">
        <div className="movie-type">now playing</div>
        <div className="paginate">paginate</div>
      </div>
    </div>
  );
};

export default Content;
