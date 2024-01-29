import { createSlice } from '@reduxjs/toolkit';

const intialMovieState = {
  browse: null,
  loadingCarousel: false,
  homeTeaserVideoData: null,
  addMovieGenres: null,
  movieModalData: {
    info: null,
    videos: [],
    credits: [],
    similars: []
  }
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
    updateModalMovieInfo: (state, action) => {
      state.movieModalData.info = action.payload;
    },
    updateModalMovieVideos: (state, action) => {
      state.movieModalData.videos = action.payload;
    },
    updateModalMovieCredits: (state, action) => {
      state.movieModalData.credits = action.payload;
    },
    updateModalMovieSimilars: (state, action) => {
      state.movieModalData.similars = action.payload;
    }
  }
});

export const {
  addBrowseData,
  addAllMovieGenres,
  updateModalMovieInfo,
  addHomeTeaserVideoID,
  updateModalMovieSimilars,
  updateModalMovieCredits,
  updateModalMovieVideos,
  toggleLoadingCarousel
} = movieSlice.actions;
export default movieSlice.reducer;
