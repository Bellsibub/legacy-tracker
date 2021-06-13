import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { save } from './localStorage';
import legacy from './legacy';
import session from './session';

const reducer = combineReducers({
  legacy,
  session
});

const store = configureStore({ reducer });

store.subscribe(() => save(store.getState().session, { namespace: 'session' }));

export default store;