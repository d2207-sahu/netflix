import { createSlice } from '@reduxjs/toolkit';

const appInitialState = {
  modalMovieSelectedID: null,
  modalSelectedVideo: null,
  isModalOpen: false
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
    },
    openGlobalModal: (state) => {
      state.isModalOpen = true;
    },
    closeGlobalModal: (state) => {
      state.isModalOpen = false;
    }
  }
});

export const { updateModalMovieSelectedID, updateModalSelectedVideo, openGlobalModal, closeGlobalModal } =
  appSlice.actions;

export default appSlice.reducer;
