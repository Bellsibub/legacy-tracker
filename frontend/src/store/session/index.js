import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';
import { getData, getUserMetadata } from './services';

export const sessionSlice = createSlice({
  name: 'session',
  initialState: {
    legacyID: '',
    dataFetchDone: false,
    metaDataFetchDone: false,
    data: {},
    user: { id: '', firstTime: true, userName: '' }
  },
  reducers: {
    setLegacy(state, { payload }) {
      state.legacyID = payload.id;
    },
    setUserID(state, { payload }) {
      state.user.id = payload;
    }
  },
  extraReducers: {
    [getData.pending]: (state, { payload }) => {
      state.dataFetchDone = false;
    },
    [getData.fulfilled]: (state, { payload }) => {
      state.data = { ...payload };
      state.dataFetchDone = true;
    },
    [getUserMetadata.pending]: (state, { payload }) => {
      state.metaDataFetchDone = false;
    },
    [getUserMetadata.fulfilled]: (state, { payload }) => {
      state.legacyID = payload.legacy;
      state.user.firstTime = payload.firstTime;
      state.user.userName = payload.userName;
      state.metaDataFetchDone = true;
    }
  }
});

export const { setLegacy, setUserID } = sessionSlice.actions;
export default sessionSlice.reducer;
