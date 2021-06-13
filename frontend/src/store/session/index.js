/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';
import { legacy, sims } from 'utils/data';
import { load } from 'store/localStorage';
import { getData } from './services'

// import { createLegacy } from './services';

export const sessionSlice = createSlice({
  name: 'session',
  initialState: load({ namespace: 'session' }) || { legacyID: '', data: {} },
  reducers: {
    setLegacy(state, { payload }) {
      state.legacyID = payload;
    }
  },
  extraReducers: {
    [getData.fulfilled]: (state, { payload }) => {
      state.data = { ...payload };
    }
  }
});

export const { setLegacy } = sessionSlice.actions;
export default sessionSlice.reducer;
