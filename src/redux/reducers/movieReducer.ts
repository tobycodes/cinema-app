import {
  SET_MOVIE_LIST,
  SET_PAGE_INFO,
  LOAD_MORE_MOVIE_RESULTS,
  SET_MOVIE_CATEGORY
} from './../types';
const initialState = {
  list: [],
  page: 1,
  totalPages: 1,
  movieCategory: { type: 'now_playing', name: 'Now Playing', id: 1 }
};

const movieReducer = (state = initialState, { type, payload }: any): any => {
  switch (type) {
    case SET_MOVIE_LIST:
      return { ...state, list: payload.sort(() => Math.random() * 3839 - Math.random() * 3743) };

    case LOAD_MORE_MOVIE_RESULTS:
      return { ...state, list: [...state.list, ...payload] };

    case SET_PAGE_INFO:
      const { page, totalPages } = payload;

      return { ...state, page, totalPages };

    case SET_MOVIE_CATEGORY:
      return { ...state, movieCategory: payload };

    default:
      return state;
  }
};

export default movieReducer;
