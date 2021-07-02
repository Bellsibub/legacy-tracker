import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';
import { createLegacy, getLegacy, deleteLegacy } from './services';

const initState = {
  loading: false,
  fetchDone: false,
  error: null,
  score: {
    aspirations: {
      score: 0,
      count: 0,
      percentage: 0
    },
    skills: {
      score: 0,
      count: 0,
      percentage: 0
    },
    food: {
      score: 0,
      count: 0,
      percentage: 0
    }
  }
};
export const legacySlice = createSlice({
  name: 'legacy',
  initialState: initState,
  reducers: {
    setScores(state) {
      state.score = _.mapValues(state.goals, (goals, key) => {
        const goalCount = _.countBy(goals, 'completed');
        let completionCount;
        let percentage;
        if (key !== 'food') {
          completionCount = _.sumBy(state[key], (o) => o.completed);
          percentage = ((completionCount / state[key].length) * 100).toFixed(2);
        }
        return {
          score: goalCount.true,
          count: completionCount || null,
          percentage: percentage || null
        };
      });
    }
  },
  extraReducers: {
    [createLegacy.pending]: (state) => {
      state.loading = true;
      state.fetchDone = false;
    },
    [createLegacy.rejected]: (state, { payload }) => {
      state.loading = false;
      state.fetchDone = false;
      state.error = { ...payload };
    },
    [createLegacy.fulfilled]: (state, { payload }) => {
      return { ...state, ...payload, fetchDone: true, loading: false };
    },
    [getLegacy.pending]: (state) => {
      state.loading = true;
      state.fetchDone = false;
    },
    [getLegacy.rejected]: (state, { payload }) => {
      state.loading = false;
      state.fetchDone = false;
      state.error = { ...payload };
    },
    [getLegacy.fulfilled]: (state, { payload }) => {
      return { ...state, ...payload, fetchDone: true, loading: false };
    },
    [deleteLegacy.pending]: (state) => {
      state.loading = true;
      state.fetchDone = false;
    },
    [deleteLegacy.fulfilled]: () => {
      return { ...initState, fetchDone: true, loading: false };
    }
  }
});

export const { setScores, resetLegacy } = legacySlice.actions;
export default legacySlice.reducer;
