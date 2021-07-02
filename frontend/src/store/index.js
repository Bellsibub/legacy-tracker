import { combineReducers, configureStore } from '@reduxjs/toolkit';
import legacy from './legacy';
import session from './session';

const reducer = combineReducers({
  legacy,
  session
});

export default configureStore({ reducer });
