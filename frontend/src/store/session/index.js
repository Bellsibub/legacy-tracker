/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';
import { legacy, sims } from 'utils/data';
import { load } from 'store/localStorage';
import { getData, getUserLegacies } from './services';

// import { createLegacy } from './services';

export const sessionSlice = createSlice({
  name: 'session',
  initialState: {
    legacyID: '',
    data: {},
    user: { id: '' }
  },
  reducers: {
    setLegacy(state, { payload }) {
      // state.user.legacies = _.forIn(state.user.legacies, (l) => l.active === false)
      // state.user.legacies = _.assign(state.user.legacies, {
      //   id: payload.id,
      //   active: true
      // });
      state.legacyID = payload.id;
    },
    setUserID(state, { payload }) {
      state.user.id = payload;
    }
  },
  extraReducers: {
    [getData.fulfilled]: (state, { payload }) => {
      state.data = { ...payload };
    },
    [getUserLegacies.fulfilled]: (state, { payload }) => {
      state.legacyID = payload.legacy;
    }
  }
});

export const { setLegacy, setUserID } = sessionSlice.actions;
export default sessionSlice.reducer;
