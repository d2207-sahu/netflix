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
    updateSavedMovies: (state, action) => {
      state.saved = action.payload;
      return state;
    },
    addToSavedMovies: (state, action) => {
      state.saved = [...state.saved, action.payload];
      return state;
    },
    updatePlayedMovies: (state, action) => {
      state.played = action.payload;
      return state;
    },
    addToPlayedMovies: (state, action) => {
      state.played.push(action.payload);
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
  updateSavedMovies,
  addToSavedMovies,
  updatePlayedMovies,
  addToPlayedMovies,
  removeAccount,
  updateName,
  updateUsers
} = userSlice.actions;
export default userSlice.reducer;
