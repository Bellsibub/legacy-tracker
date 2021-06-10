import { createSlice } from '@reduxjs/toolkit';
import { legacy } from 'utils/data';

export const legacySlice = createSlice({
  name: 'legacy',
  initialState: { ...legacy },
  reducers: {}
});

// export const {} = legacySlice.actions;
export default legacySlice.reducer;
