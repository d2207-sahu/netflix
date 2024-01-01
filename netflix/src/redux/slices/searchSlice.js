import {createSlice} from '@reduxjs/toolkit';

const searchSliceInititalState = {
  showSearchSliceContainer: false,
  searchReduxText: '',
  searchResultData: [],
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
    updateSearchResultData: (state, action) => {
      state.searchResultData = action.payload;
    },
  },
});

export const {
  toggleSearchSliceContainer,
  updateSearchText,
  updateSearchResultData,
} = searchSlice.actions;

export default searchSlice.reducer;
