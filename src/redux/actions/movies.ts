import { Dispatch } from 'redux';
import { v4 as uuidv4 } from 'uuid';

import {
  SET_MOVIE_LIST,
  SET_ERRORS,
  SET_PAGE_INFO,
  LOAD_MORE_MOVIE_RESULTS,
  SET_MOVIE_CATEGORY
} from './../types';
import movieService from '../../services/movieService';
import { setLoading } from './app';
import { Movie, MovieCategory } from '../../types/app';

export const getMovies =
  (type: string, page = 1) =>
  async (dispatch: Dispatch) => {
    const results = await fetchMovies(type, page, dispatch);

    dispatch({
      type: SET_MOVIE_LIST,
      payload: results.map((x: Movie) => ({ ...x, id: uuidv4() }))
    });
    dispatch(setLoading(false));
  };

export const loadMoreMovies = (type: string, page: number) => async (dispatch: Dispatch) => {
  const results = await fetchMovies(type, page, dispatch);

  dispatch({
    type: LOAD_MORE_MOVIE_RESULTS,
    payload: results.map((x: Movie) => ({ ...x, id: uuidv4() }))
  });
};

const fetchMovies = async (type: string, page: number, dispatch: Dispatch) => {
  try {
    const { results, page: curPage, total_pages } = await movieService(type, page);

    dispatch({ type: SET_PAGE_INFO, payload: { totalPages: total_pages, page: curPage } });

    return results;
  } catch (error) {
    if (error.response) {
      dispatch({ type: SET_ERRORS, payload: error.response.data.message });
    }

    return [];
  }
};

export const setMovieCategory = (movieCategory: MovieCategory) => ({
  type: SET_MOVIE_CATEGORY,
  payload: movieCategory
});
