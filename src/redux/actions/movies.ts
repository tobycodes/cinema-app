import {
  MovieCredits,
  MovieImages,
  MovieReview,
  MovieVideos,
  PaginatedRecord
} from './../../types/app';
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
  SET_SEARCH_RESULTS,
  SET_CURRENT_MOVIE_DETAILS,
  CLEAR_CURRENT_MOVIE_DETAILS,
  SET_CURRENT_MOVIE_REVIEWS,
  SET_CURRENT_MOVIE_CREDITS,
  SET_CURRENT_MOVIE_IMAGES,
  SET_CURRENT_MOVIE_VIDEOS
} from './../types';
import { setLoading } from './app';

export const getMovies =
  (type: string, page = 1) =>
  async (dispatch: Dispatch) => {
    const movies = await fetchMovies(type, page, dispatch);

    dispatch({ type: SET_MOVIE_LIST, payload: movies });
    dispatch(setLoading(false));
  };

export const loadMoreMovies = (type: string, page: number) => async (dispatch: Dispatch) => {
  const movies = await fetchMovies(type, page, dispatch);

  dispatch({ type: LOAD_MORE_MOVIE_RESULTS, payload: movies });
};

export const getSearchResults = (query: string) => async (dispatch: Dispatch) => {
  if (!query) return;

  try {
    const { results } = await movieService.searchMovies(query);
    const movieResults = generateMovieArray(results);

    dispatch(setSearchResults(movieResults));
  } catch (error: any) {
    if (error.response) {
      dispatch(setError(error.response.data.message));
    }
  }
};

export const getMovieDetails = (id: number) => async (dispatch: Dispatch) => {
  if (!id) return;

  dispatch(setLoading(true));
  try {
    const [movie, credits, images, reviews, videos] = await Promise.all([
      movieService.getMovie(id),
      movieService.getMovieCredits(id),
      movieService.getMovieImages(id),
      movieService.getMovieReviews(id),
      movieService.getMovieVideos(id)
    ]);

    dispatch(setMovieDetails(movie));
    dispatch(setMovieCredits(credits));
    dispatch(setMovieImages(images));
    dispatch(setMovieReviews(reviews));
    dispatch(setMovieVideos(videos));
  } catch (error: any) {
    if (error.response) {
      dispatch(setError(error.response.data.message));
    }
  } finally {
    dispatch(setLoading(false));
  }
};

const fetchMovies = async (type: string, page: number, dispatch: Dispatch) => {
  try {
    const { results, page: curPage, total_pages } = await movieService.requestMovies(type, page);
    dispatch({ type: SET_PAGE_INFO, payload: { totalPages: total_pages, page: curPage } });

    return generateMovieArray(results);
  } catch (error: any) {
    if (error.response) {
      dispatch(setError(error.response.data.message));
    }

    return [];
  }
};

export const setSearchQuery = (query: string) => ({ type: SET_SEARCH_QUERY, payload: query });

export const setError = (error: string) => ({ type: SET_ERRORS, payload: error });

export const setSearchResults = (results: Movie[]) => ({
  type: SET_SEARCH_RESULTS,
  payload: results
});

export const setMovieCategory = (movieCategory: MovieCategory) => ({
  type: SET_MOVIE_CATEGORY,
  payload: movieCategory
});

export const setMovieDetails = (movie: Movie) => ({
  type: SET_CURRENT_MOVIE_DETAILS,
  payload: movie
});

export const clearCurrentMovieDetails = () => ({
  type: CLEAR_CURRENT_MOVIE_DETAILS,
  payload: {}
});

export const setMovieCredits = (credits: MovieCredits) => ({
  type: SET_CURRENT_MOVIE_CREDITS,
  payload: credits
});

export const setMovieImages = (images: MovieImages) => ({
  type: SET_CURRENT_MOVIE_IMAGES,
  payload: images
});

export const setMovieVideos = (videos: MovieVideos) => ({
  type: SET_CURRENT_MOVIE_VIDEOS,
  payload: videos
});

export const setMovieReviews = (reviews: PaginatedRecord<MovieReview>) => ({
  type: SET_CURRENT_MOVIE_REVIEWS,
  payload: reviews
});
