import {createSlice} from '@reduxjs/toolkit';

const searchSliceInititalState = {
  showSearchSliceContainer: false,
  searchReduxText: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState: searchSliceInititalState,
  reducers: {
    // eslint-disable-next-line no-unused-vars
    toggleSearchSliceContainer: (state, action) => {
      state.showSearchSliceContainer = !state.showSearchSliceContainer;
    },
    updateSearchText: (state, action) => {
      state.searchReduxText = action.payload;
    },
  },
});

export const {toggleSearchSliceContainer, updateSearchText} =
  searchSlice.actions;

export default searchSlice.reducer;
