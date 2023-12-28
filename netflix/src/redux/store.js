import {configureStore} from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import movieSlice from './slices/movieSlice';
import searchSlice from './slices/searchSlice';
import appSlice from './slices/appSlice';

const store = configureStore({
  reducer: {
    app: appSlice,
    user: userReducer,
    movies: movieSlice,
    search: searchSlice,
  },
});

export default store;
