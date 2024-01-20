import { createSlice } from '@reduxjs/toolkit';

const appInitialState = {
  modalMovieSelectedID: null,
  modalSelectedVideo: null
};

const appSlice = createSlice({
  name: 'app',
  initialState: appInitialState,
  reducers: {
    updateModalMovieSelectedID: (state, action) => {
      state.modalMovieSelectedID = action.payload;
    },
    updateModalSelectedVideo: (state, action) => {
      state.modalSelectedVideo = action.payload;
    }
  }
});

export const {
  updateModalMovieSelectedID,
  updateModalSelectedVideo,
} = appSlice.actions;

export default appSlice.reducer;
