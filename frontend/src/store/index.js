import { combineReducers, configureStore } from '@reduxjs/toolkit';
import legacy from './legacy';

const reducer = combineReducers({
  legacy
});

export default configureStore({ reducer });
