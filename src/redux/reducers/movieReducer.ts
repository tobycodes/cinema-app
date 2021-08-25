import { Movie } from '../../types/app';
import {
  SET_MOVIE_LIST,
  SET_PAGE_INFO,
  LOAD_MORE_MOVIE_RESULTS,
  SET_MOVIE_CATEGORY,
  SET_SEARCH_QUERY,
  SET_SEARCH_RESULTS
} from './../types';

const initialState = {
  list: [],
  page: 1,
  totalPages: 1,
  movieCategory: { type: 'now_playing', name: 'Now Playing', id: 1 },
  searchQuery: '',
  searchResults: []
};

//stackoverflow
type Modify<T, R> = Omit<T, keyof R> & R;

type InitialState = typeof initialState;

type MovieReducerType = Modify<InitialState, { list: Movie[]; searchResults: Movie[] }>;

const movieReducer = (state = initialState, { type, payload }: any): MovieReducerType => {
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

    default:
      return state;
  }
};

export default movieReducer;
