import {createSlice} from '@reduxjs/toolkit';

const appInitialState = {
  languages: 'en-IN',
  modalMovieSelectedID: null,
  modalSelectedVideo: null,
};

const appSlice = createSlice({
  name: 'app',
  initialState: appInitialState,
  reducers: {
    changeLanguage: (state, action) => {
      state.languages = action.payload;
    },
    updateModalMovieSelectedID: (state, action) => {
      state.modalMovieSelectedID = action.payload;
    },
    updateModalSelectedVideo: (state, action) => {
      state.modalSelectedVideo = action.payload;
    }
  },
});

export const {
  changeLanguage,
  updateModalMovieSelectedID,
  updateModalSelectedVideo,
} = appSlice.actions;

export default appSlice.reducer;
