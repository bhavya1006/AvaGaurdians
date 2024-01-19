import { createSlice } from '@reduxjs/toolkit';

const probabilitySlice = createSlice({
  name: 'Probability',
  initialState : {
    chances: ""
  },
  reducers: {
    setProbability (state, action)  {
      state.chances = action.payload.chances
    }
  },
});

export const { setProbability } = probabilitySlice.actions;
export default probabilitySlice.reducer;