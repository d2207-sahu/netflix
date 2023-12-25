import {createSlice} from '@reduxjs/toolkit';

const initialUserState = {
  email: '',
  name: '',
  uid: '',
  photoURL: '',
  state: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },
    updateUser: (state, action) => {
      state.name = action.payload.name ?? state.name;
      state.photoURL = action.payload.photoURL ?? state.photoURL;
    },
    removeUser: (state, action) => {
      return null;
    },
  },
});

export const {addUser, removeUser} = userSlice.actions;
export default userSlice.reducer;
