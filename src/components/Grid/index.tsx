import React, { FC } from 'react';

import './index.scss';

const Grid: FC = () => {
  return (
    <div className="grid">
      <div className="">
        <div className="grid-cell">
          <div className="grid-read-more">
            <button className="grid-cell-button">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
