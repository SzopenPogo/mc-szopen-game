import { createSlice } from "@reduxjs/toolkit";

const authenticationSlice = createSlice({
  name: 'authenticationSlice',
  initialState: {
    isEmailValid: false,
    isPasswordValid: false
  },
  reducers: {
    setEmailValid(state, actions) {
      state.isEmailValid = actions.payload;
    },
    setPasswordValid(state, actions) {
      state.isPasswordValid = actions.payload;
    }
  }
});

export const authenticationActions = authenticationSlice.actions;
export default authenticationSlice;