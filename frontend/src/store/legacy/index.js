/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';
import { createLegacy, getLegacy, updateLegacy, toggleGoal } from './services';

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
      }
    }
  },
  reducers: {
    setScores(state, { payload }) {
      state.score = _.mapValues(state.goals, (goals, key) => {
        const goalCount = _.countBy(goals, 'completed');
        const completionCount = _.sumBy(state[key], (o) => o.completed);
        const percentage = (completionCount / state[key].length) * 100;
        return {
          score: goalCount.true,
          count: completionCount,
          percentage: percentage.toFixed(2)
        };
      });
      // const score = _.countBy(state.goals.aspirations, 'completed')
      // state.score.aspirations = score.true
    },
    validateGoals(state, { payload }) {

    }
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
