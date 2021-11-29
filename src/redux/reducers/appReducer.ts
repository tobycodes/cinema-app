import { SET_LOADING, SET_MATCH_PATH } from './../types';
const initialState = { loading: true, path: '/' };

type AppStateObject = typeof initialState;

const appReducer = (state = initialState, { type, payload }: any): AppStateObject => {
  switch (type) {
    case SET_LOADING:
      return { ...state, loading: payload };

    case SET_MATCH_PATH:
      return { ...state, path: payload };

    default:
      return state;
  }
};

export default appReducer;
