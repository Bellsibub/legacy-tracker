/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';
import { createLegacy, getLegacy, updateLegacy } from './services'

export const legacySlice = createSlice({
  name: 'legacy',
  initialState: {},
  reducers: {
    // addNewSim(state, { payload }) {
    //   state.generations[payload.generation].push({ ...payload.newSim });
    // },
    // editSim(state, { payload }) {
    //   const index = state.generations[payload.generation].findIndex(
    //     (sim) => sim.id === payload.id
    //   );
    //   state.generations[payload.generation][index] = { ...payload };
    // },
    // addNewGeneration(state, { payload }) {
    //   _.assign(state.generations, { [payload.generation]: [] });
    // },
    // updateHeir(state, { payload }) {
    //   state.heir = payload.newHeir;
    //   state.potentialHeirs = _.omitBy(
    //     state.potentialHeirs,
    //     (heir) => heir.id === payload.newHeir.id
    //   );
    // },
    // setRuler(state) {
    //   const ruler = state.generations[state.generation].find(
    //     (sim) => sim.role === 'Ruler'
    //   );
    //   if (ruler) {
    //     state.ruler = { ...ruler };
    //   }
    // },
    // addNewTask(state, { payload }) {
    //   state.tasks.push({ ...payload.newTask });
    // },
    // completeTask(state, { payload }) {
    //   console.log(payload);
    //   const index = state[payload.category].findIndex(
    //     (item) => item._id === payload.item._id
    //   );
    //   state[payload.category][index].completed++;
    // }
  },
  extraReducers: {
    [createLegacy.fulfilled]: (state, { payload }) => {
      return { ...payload };
    },
    [getLegacy.fulfilled]: (state, { payload }) => {
      return { ...payload };
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
  addNewTask
} = legacySlice.actions;
export default legacySlice.reducer;
