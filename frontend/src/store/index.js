import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { save } from './localStorage';
import legacy from './legacy';
import session from './session';

const reducer = combineReducers({
  legacy,
  session
});

export default configureStore({ reducer });