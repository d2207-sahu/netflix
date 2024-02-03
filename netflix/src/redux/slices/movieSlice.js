import { createSlice } from '@reduxjs/toolkit';

const intialMovieState = {
  browse: null,
  loadingCarousel: false,
  homeTeaserVideoData: null,
  addMovieGenres: null,
  modalMovieInfo: null,
};

const movieSlice = createSlice({
  name: 'movies',
  initialState: intialMovieState,
  reducers: {
    addBrowseData: (state, action) => {
      state.browse = action.payload;
    },
    toggleLoadingCarousel: (state, action) => {
      state.loadingCarousel = action.payload;
      return state;
    },
    addHomeTeaserVideoID: (state, action) => {
      state.homeTeaserVideoData = action.payload;
    },
    addAllMovieGenres: (state, action) => {
      state.addMovieGenres = action.payload;
    },
    updateMovieModalInfo: (state, action) => {
      state.modalMovieInfo = action.payload;
    },
    updateModalMovieVideos: (state, action) => {
      state.movieModalData.videos = action.payload;
    },
  }
});

export const {
  addBrowseData,
  addAllMovieGenres,
  updateMovieModalInfo,
  addHomeTeaserVideoID,
  updateModalMovieVideos,
  toggleLoadingCarousel
} = movieSlice.actions;
export default movieSlice.reducer;
