import { combineReducers } from 'redux';
import appReducer from './appReducer';
import errorReducer from './errorReducer';
import movieReducer from './movieReducer';

const rootReducer = combineReducers({
  error: errorReducer,
  movies: movieReducer,
  app: appReducer
});

export type RootReducer = ReturnType<typeof rootReducer>;

export default rootReducer;
