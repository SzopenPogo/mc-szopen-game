import { createSlice } from "@reduxjs/toolkit";
import { ACCOUNT_FAIL, ACCOUNT_REQUEST, ACCOUNT_SUCCESS, ACCOUNT_TOKEN_COOKIE_NAME } from "data/constants/account/account";
import Cookies from "js-cookie";

const accountTokenStoredCookie = Cookies.get(ACCOUNT_TOKEN_COOKIE_NAME)
const tokenCookie = accountTokenStoredCookie && accountTokenStoredCookie !== 'undefined'
  ? accountTokenStoredCookie
  : '';

const accountSlice = createSlice({
  name: 'account',
  initialState: {
    loading: false,
    error: '',
    account: {
      _id: '',
      email: '',
      isActive: false,
    },
    token: tokenCookie
  },
  reducers: {
    login(state, action) {
      const { type, token, payload } = action.payload;
      
      switch (type) {
        case ACCOUNT_REQUEST:
          state.loading = true;
          state.error = '';
          break;
        case ACCOUNT_SUCCESS:
          state.loading = false;
          state.error = '';
          state.account = payload;
          state.token = token;

          Cookies.set(ACCOUNT_TOKEN_COOKIE_NAME, token, { expires: 7 });
          break;
        case ACCOUNT_FAIL:
          state.loading = false;
          state.error = payload;
          break;
      }
    },
    register(state, action) {
      const { type, token, payload } = action.payload;
      
      switch (type) {
        case ACCOUNT_REQUEST:
          state.loading = true;
          state.error = '';
          break;
        case ACCOUNT_SUCCESS:
          state.loading = false;
          state.error = '';
          state.account = payload;
          state.token = token;

          Cookies.set(ACCOUNT_TOKEN_COOKIE_NAME, token, { expires: 7 });
          break;
        case ACCOUNT_FAIL:
          state.loading = false;
          state.error = payload;
          break;
      }
    }
  }
})

export const accountActions = accountSlice.actions;
export default accountSlice;