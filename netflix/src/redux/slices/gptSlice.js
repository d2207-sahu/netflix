import {createSlice} from '@reduxjs/toolkit';

const gptSliceInititalState = {
  showGPTSliceContainer: false,
};

const gptSlice = createSlice({
  name: 'gpt',
  initialState: gptSliceInititalState,
  reducers: {
    // eslint-disable-next-line no-unused-vars
    toggleGPTSliceContainer: (state, action) => {
      state.showGPTSliceContainer = !state.showGPTSliceContainer;
    },
  },
});

export const {toggleGPTSliceContainer} = gptSlice.actions;

export default gptSlice.reducer;
