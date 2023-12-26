import {configureStore} from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import movieSlice from './slices/movieSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    movies: movieSlice,
  },
});

export default store;
