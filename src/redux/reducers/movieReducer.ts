import { PaginatedRecord } from './../../types/app';
import { AnyAction } from 'redux';
import { Movie, MovieCredits, MovieImages, MovieReview, MovieVideos } from '../../types/app';
import {
  SET_MOVIE_LIST,
  SET_PAGE_INFO,
  LOAD_MORE_MOVIE_RESULTS,
  SET_MOVIE_CATEGORY,
  SET_SEARCH_QUERY,
  SET_SEARCH_RESULTS,
  SET_CURRENT_MOVIE_DETAILS,
  CLEAR_CURRENT_MOVIE_DETAILS,
  SET_CURRENT_MOVIE_CREDITS,
  SET_CURRENT_MOVIE_IMAGES,
  SET_CURRENT_MOVIE_REVIEWS,
  SET_CURRENT_MOVIE_VIDEOS
} from './../types';

const initialState = {
  list: [] as Movie[],
  page: 1,
  totalPages: 1,
  movieCategory: { type: 'now_playing', name: 'Now Playing', id: 1 },
  searchQuery: '',
  searchResults: [] as Movie[],
  currentMovie: {} as Movie,
  movieImages: {} as MovieImages,
  movieVideos: {} as MovieVideos,
  movieCredits: {} as MovieCredits,
  movieReviews: {} as PaginatedRecord<MovieReview>
};

//stackoverflow
// type Modify<T, R> = Omit<T, keyof R> & R;

type MovieStateObject = typeof initialState;

const movieReducer = (state = initialState, { type, payload }: AnyAction): MovieStateObject => {
  switch (type) {
    case SET_MOVIE_LIST:
      return { ...state, list: payload.sort(() => Math.random() - Math.random()) };

    case LOAD_MORE_MOVIE_RESULTS:
      return { ...state, list: [...state.list, ...payload] };

    case SET_PAGE_INFO:
      const { page, totalPages } = payload;

      return { ...state, page, totalPages };

    case SET_MOVIE_CATEGORY:
      return { ...state, movieCategory: payload };

    case SET_SEARCH_QUERY:
      return { ...state, searchQuery: payload };

    case SET_SEARCH_RESULTS:
      return { ...state, searchResults: [...payload] };

    case SET_CURRENT_MOVIE_DETAILS:
      return { ...state, currentMovie: payload };

    case CLEAR_CURRENT_MOVIE_DETAILS:
      return {
        ...state,
        currentMovie: payload,
        movieCredits: payload,
        movieImages: payload,
        movieVideos: payload,
        movieReviews: payload
      };

    case SET_CURRENT_MOVIE_CREDITS:
      return { ...state, movieCredits: payload };

    case SET_CURRENT_MOVIE_IMAGES:
      return { ...state, movieImages: payload };

    case SET_CURRENT_MOVIE_REVIEWS:
      return { ...state, movieReviews: payload };

    case SET_CURRENT_MOVIE_VIDEOS:
      return { ...state, movieVideos: payload };

    default:
      return state;
  }
};

export default movieReducer;
