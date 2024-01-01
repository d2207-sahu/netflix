import {createSlice} from '@reduxjs/toolkit';

const intialMovieState = {
  nowPlayingMovies: null,
  popularMovies: null,
  topRatedMovies: null,
  upcomingMovies: null,
  homeTeaserVideoData: null,
  addMovieGenres: null,
  movieModalData: {
    info: null,
    videos: [],
    credits: [],
    similars: [],
  },
};

const movieSlice = createSlice({
  name: 'movies',
  initialState: intialMovieState,
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
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
    },
  },
});

export const {
  addNowPlayingMovies,
  addTopRatedMovies,
  addPopularMovies,
  addUpcomingMovies,
  addHomeTeaserVideoID,
  addAllMovieGenres,
  updateModalMovieInfo,
  updateModalMovieSimilars,
  updateModalMovieCredits,
  updateModalMovieVideos,
} = movieSlice.actions;
export default movieSlice.reducer;
