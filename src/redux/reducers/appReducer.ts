import { SET_LOADING } from './../types';
const initialState = { loading: true };

type AppStateObject = typeof initialState;

const appReducer = (state = initialState, { type, payload }: any): AppStateObject => {
  switch (type) {
    case SET_LOADING:
      return { ...state, loading: payload };
    default:
      return state;
  }
};

export default appReducer;
