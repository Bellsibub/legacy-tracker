/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';
import { legacy, sims } from 'utils/data';
import { load } from 'store/localStorage';
import { getData, getUserMetadata } from './services';

// import { createLegacy } from './services';

export const sessionSlice = createSlice({
  name: 'session',
  initialState: {
    legacyID: '',
    dataFetchDone: false,
    data: {},
    user: { id: '', firstTime: true }
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
    [getData.pending]: (state, { payload }) => {
      // state.data = { ...payload };
      state.dataFetchDone = false;
    },
    [getData.fulfilled]: (state, { payload }) => {
      state.data = { ...payload };
      state.dataFetchDone = true;
    },
    [getUserMetadata.fulfilled]: (state, { payload }) => {
      state.legacyID = payload.legacy;
      state.user.firstTime = payload.firstTime;
    }
  }
});

export const { setLegacy, setUserID } = sessionSlice.actions;
export default sessionSlice.reducer;
