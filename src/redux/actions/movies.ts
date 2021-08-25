import { Dispatch } from 'redux';

import movieService from 'services/movieService';
import { Movie, MovieCategory } from 'types/app';
import generateMovieArray from 'utils/generateMovieArray';
import {
  SET_MOVIE_LIST,
  SET_ERRORS,
  SET_PAGE_INFO,
  LOAD_MORE_MOVIE_RESULTS,
  SET_MOVIE_CATEGORY,
  SET_SEARCH_QUERY,
  SET_SEARCH_RESULTS
} from './../types';
import { setLoading } from './app';

export const getMovies =
  (type: string, page = 1) =>
  async (dispatch: Dispatch) => {
    const results = await fetchMovies(type, page, dispatch);
    const movies = generateMovieArray(results);

    dispatch({ type: SET_MOVIE_LIST, payload: movies });
    dispatch(setLoading(false));
  };

export const loadMoreMovies = (type: string, page: number) => async (dispatch: Dispatch) => {
  const results = await fetchMovies(type, page, dispatch);
  const movies = generateMovieArray(results);

  dispatch({ type: LOAD_MORE_MOVIE_RESULTS, payload: movies });
};

export const getSearchResults = (query: string) => async (dispatch: Dispatch) => {
  if (!query) return;

  try {
    const { results } = await movieService.searchMovies(query);
    const movieResults = generateMovieArray(results);

    dispatch(setSearchResults(movieResults));
  } catch (error) {
    if (error.response) {
      dispatch({ type: SET_ERRORS, payload: error.response.data.message });
    }
  }
};

const fetchMovies = async (type: string, page: number, dispatch: Dispatch) => {
  try {
    const { results, page: curPage, total_pages } = await movieService.requestMovies(type, page);

    dispatch({ type: SET_PAGE_INFO, payload: { totalPages: total_pages, page: curPage } });

    return results;
  } catch (error) {
    if (error.response) {
      dispatch({ type: SET_ERRORS, payload: error.response.data.message });
    }

    return [];
  }
};

export const setSearchQuery = (query: string) => ({ type: SET_SEARCH_QUERY, payload: query });

export const setSearchResults = (results: Movie[]) => ({
  type: SET_SEARCH_RESULTS,
  payload: results
});

export const setMovieCategory = (movieCategory: MovieCategory) => ({
  type: SET_MOVIE_CATEGORY,
  payload: movieCategory
});
