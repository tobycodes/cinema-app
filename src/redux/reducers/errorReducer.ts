import { AnyAction } from 'redux';
import { SET_ERRORS } from './../types';
const initialState = {
  message: '',
  statusCode: null as number | null
};

type ErrorStateObject = typeof initialState;

const errorReducer = (state = initialState, { type, payload }: AnyAction): ErrorStateObject => {
  switch (type) {
    case SET_ERRORS:
      return { ...state, ...payload };

    default:
      return state;
  }
};

export default errorReducer;
