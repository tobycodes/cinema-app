import React, { FC } from 'react';
import { useState } from 'react';
import Grid from '../Grid';
import Paginate from '../Paginate';

import Slider, { SlideActionType } from '../Slider';
import './index.scss';

const Content: FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePaginate = (action: SlideActionType) => {
    switch (action) {
      case 'prev':
        if (currentPage > 1) setCurrentPage(currentPage - 1);
        break;

      case 'next':
        if (currentPage < 20) setCurrentPage(currentPage + 1);

        break;

      default:
        break;
    }
  };

  return (
    <div className="main-content">
      <Slider />
      <div className="movie-grid">
        <div className="movie-type">now playing</div>
        <div className="paginate">
          <Paginate curPage={currentPage} totalPages={20} paginate={handlePaginate} />
        </div>
      </div>
      <Grid />
    </div>
  );
};

export default Content;
