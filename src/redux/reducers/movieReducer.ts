import { AnyAction } from 'redux';
import { Movie } from '../../types/app';
import {
  SET_MOVIE_LIST,
  SET_PAGE_INFO,
  LOAD_MORE_MOVIE_RESULTS,
  SET_MOVIE_CATEGORY,
  SET_SEARCH_QUERY,
  SET_SEARCH_RESULTS,
  SET_CURRENT_MOVIE_DETAILS
} from './../types';

const initialState = {
  list: [] as Movie[],
  page: 1,
  totalPages: 1,
  movieCategory: { type: 'now_playing', name: 'Now Playing', id: 1 },
  searchQuery: '',
  searchResults: [] as Movie[],
  currentMovie: {} as Movie
};

//stackoverflow
// type Modify<T, R> = Omit<T, keyof R> & R;

type MovieReducerType = typeof initialState;

const movieReducer = (state = initialState, { type, payload }: AnyAction): MovieReducerType => {
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

    default:
      return state;
  }
};

export default movieReducer;
