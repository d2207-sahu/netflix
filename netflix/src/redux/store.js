import {configureStore} from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import movieSlice from './slices/movieSlice';
import gptSlice from './slices/gptSlice';
import appSlice from './slices/appSlice';

const store = configureStore({
  reducer: {
    app: appSlice,
    user: userReducer,
    movies: movieSlice,
    gpt: gptSlice,
  },
});

export default store;
