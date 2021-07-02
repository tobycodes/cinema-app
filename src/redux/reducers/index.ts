import { combineReducers } from 'redux';
import appReducer from './appReducer';
import errorReducer from './errorReducer';
import movieReducer from './movieReducer';

const rootReducer = combineReducers({
  errors: errorReducer,
  movies: movieReducer,
  app: appReducer
});

export default rootReducer;
