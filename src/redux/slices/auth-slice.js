import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: JSON.parse(localStorage.getItem('logged_in')),
  token: localStorage.getItem('token'),
};

const AuthSlice = createSlice({
  name: 'auth-slice',
  initialState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.token = action.payload;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.token = null;
    },
  },
});

export const AuthSliceReducers = AuthSlice.reducer;
export const AuthSliceActions = AuthSlice.actions;
