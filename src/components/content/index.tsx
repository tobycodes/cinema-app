import React, { FC } from 'react';
import { useCallback } from 'react';
import { connect } from 'react-redux';

import { getMovies } from '../../redux/actions/movies';
import { IMAGE_URL } from '../../services/movieService';
import { Movie, MovieCategory } from '../../types/app';
import MoviesGrid from '../Grid';
import Paginate from '../Paginate';
import Slider, { SlideActionType } from '../Slider';

import './index.scss';

interface IProps {
  movieList: Movie[];
  movieCategory: MovieCategory;
  totalPages: number;
  page: number;
  getMovies: (type: string, page?: number) => void;
}

const Content: FC<IProps> = ({ movieList, movieCategory, page, totalPages, getMovies }) => {
  const moviePosters = movieList.map((m) => ({
    ...m,
    imageUrl: IMAGE_URL + (m.backdrop_path || m.poster_path)
  }));

  const handlePaginate = useCallback(
    (action: SlideActionType) => {
      switch (action) {
        case 'prev':
          if (page > 1) getMovies(movieCategory.type, page - 1);
          break;

        case 'next':
          if (page < totalPages) getMovies(movieCategory.type, page + 1);
          break;

        default:
          break;
      }
    },
    [getMovies, movieCategory.type, page, totalPages]
  );

  return (
    <div className="main-content">
      <Slider items={moviePosters.slice(0, 5)} showArrows={true} />
      <div className="movie-grid">
        <div className="movie-type">{movieCategory.name}</div>
        <div className="paginate">
          <Paginate curPage={page} totalPages={totalPages} paginate={handlePaginate} />
        </div>
      </div>
      <MoviesGrid movieList={moviePosters} />
    </div>
  );
};

const stateProps = ({ movies: { list, movieCategory, totalPages, page } }: any) => ({
  movieList: list,
  movieCategory,
  totalPages,
  page
});

const actionProps = { getMovies };

export default connect(stateProps, actionProps)(Content);
