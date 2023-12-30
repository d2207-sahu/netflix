import {createSlice} from '@reduxjs/toolkit';

const intialMovieState = {
  nowPlayingMovies: null,
  popularMovies: null,
  topRatedMovies: null,
  upcomingMovies: null,
  homeTeaserVideoData: null,
  addMovieGenres: null,
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
  },
});

export const {
  addNowPlayingMovies,
  addTopRatedMovies,
  addPopularMovies,
  addUpcomingMovies,
  addHomeTeaserVideoID,
  addAllMovieGenres,
} = movieSlice.actions;
export default movieSlice.reducer;
