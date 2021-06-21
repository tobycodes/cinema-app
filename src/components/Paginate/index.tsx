import React, { FC } from 'react';
import { SlideActionType } from '../Slider';
import './index.scss';

interface PaginateProps {
  curPage: number;
  totalPages: number;
  paginate: (action: SlideActionType) => void;
}

const Paginate: FC<PaginateProps> = ({ curPage, totalPages, paginate }) => {
  return (
    <>
      <span className="page-count">
        {curPage} - {totalPages}
      </span>
      <button className={`paginate-button${curPage === 1 ? ' disable' : ''}`} onClick={() => paginate('prev')}>
        Prev
      </button>
      <button className={`paginate-button${curPage === totalPages ? ' disable' : ''}`} onClick={() => paginate('next')}>
        Next
      </button>
    </>
  );
};

export default Paginate;
