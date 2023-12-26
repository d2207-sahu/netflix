import {createSlice} from '@reduxjs/toolkit';

const intialMovieState = {
  nowPlayingMovies: null,
  homeTeaserVideoData: null,
};

const movieSlice = createSlice({
  name: 'movies',
  initialState: intialMovieState,
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addHomeTeaserVideoID: (state, action) => {
      state.homeTeaserVideoData = action.payload;
    },
  },
});

export const {addNowPlayingMovies, addHomeTeaserVideoID} = movieSlice.actions;
export default movieSlice.reducer;
