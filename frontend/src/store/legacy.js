import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';
import { legacy, sims } from 'utils/data';

const generations = _.groupBy(sims, 'generation');

export const legacySlice = createSlice({
  name: 'legacy',
  initialState: { generations, ...legacy },
  reducers: {
    addNewSim(state, { payload }) {
      state.generations[payload.generation].push({ ...payload.newSim });
    },
    addNewGeneration(state, { payload }) {
      _.assign(state.generations, { [payload.generation]: [] })
    }
  }
});

export const { addNewSim, addNewGeneration } = legacySlice.actions;
export default legacySlice.reducer;
