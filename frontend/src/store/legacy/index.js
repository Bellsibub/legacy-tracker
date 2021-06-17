/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';
import { createLegacy, getLegacy, updateLegacy, updateCategoryItem } from './services';

export const legacySlice = createSlice({
  name: 'legacy',
  initialState: {
    loading: false,
    fetchDone: false,
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
        score: 0
      }
    }
  },
  reducers: {
    setScores(state, { payload }) {
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
    },
    validateGoals(state, { payload }) {}
  },
  extraReducers: {
    [createLegacy.pending]: (state, { payload }) => {
      state.loading = true;
      state.fetchDone = false;
    },
    [createLegacy.fulfilled]: (state, { payload }) => {
      return { ...state, ...payload, fetchDone: true, loading: false };
    },
    [getLegacy.pending]: (state, { payload }) => {
      state.loading = true;
      state.fetchDone = false;
    },
    [getLegacy.fulfilled]: (state, { payload }) => {
      return { ...state, ...payload, fetchDone: true, loading: false };
    },
    [updateLegacy.fulfilled]: (state, { payload }) => {
      return { ...payload };
    }
  }
});

export const {
  addNewSim,
  addNewGeneration,
  editSim,
  updateHeir,
  setRuler,
  completeTask,
  addNewTask,
  setScores,
  validateGoals
} = legacySlice.actions;
export default legacySlice.reducer;