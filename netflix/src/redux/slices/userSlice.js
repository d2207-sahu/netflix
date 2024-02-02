import { createSlice } from '@reduxjs/toolkit';

const initialUserState = {
  state: false,
  // Account Level
  uid: '',
  email: '',
  // User Level
  users: null,
  // Specific to User
  name: '',
  played: [],
  searched: [],
  saved: []
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    addAccount: (state, action) => {
      state = {
        ...state,
        state: true,
        uid: action.payload
      };
      return state;
    },
    updateName: (state, action) => {
      state.name = action.payload;
      state.played = [];
      state.saved = [];
      state.searched = [];
      return state;
    },
    updateUsers: (state, action) => {
      state.users = action.payload;
      state.played = [];
      state.saved = [];
      state.searched = [];
      return state;
    },
    updateMoviesData: (state, action) => {
      console.log(action.payload.keyword, action.payload.movieList);
      if (action.payload.keyword) state[action.payload.keyword] = action.payload.movieList;
      return state;
    },
    addMoviesData: (state, action) => {
      console.log(action.payload.keyword, action.payload.movie);
      if (action.payload.keyword)
        state[action.payload.keyword] = [
          ...state[action.payload.keyword],
          { videoData: action.payload.movie }
        ];
      return state;
    },
    addToSearchedMovies: (state, action) => {
      state.searched = [...state.searched, { videoData: action.payload }];
      return state;
    },
    // eslint-disable-next-line no-unused-vars
    removeAccount: (state, action) => {
      return null;
    }
  }
});

export const {
  addAccount,
  addMoviesData,
  updateMoviesData,
  addToSearchedMovies,
  removeAccount,
  updateName,
  updateUsers
} = userSlice.actions;
export default userSlice.reducer;
