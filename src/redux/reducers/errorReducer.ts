import { SET_ERRORS } from './../types';
const initialState = {};

const errorReducer = (state = initialState, { type, payload }: any): any => {
  switch (type) {
    case SET_ERRORS:
      return { ...state, message: payload };
    default:
      return state;
  }
};

export default errorReducer;
