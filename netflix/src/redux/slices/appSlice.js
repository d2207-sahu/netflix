import {createSlice} from '@reduxjs/toolkit';

const appInitialState = {
  languages: 'en',
};

const appSlice = createSlice({
    name:"app",
    initialState:appInitialState,
    reducers:{
        changeLanguage:(state,action)=>{
            state.languages = action.payload;
        }
    }
});

export const {changeLanguage} = appSlice.actions;

export default appSlice.reducer;
