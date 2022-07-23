import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { ACCOUNT_FAIL, ACCOUNT_REQUEST, ACCOUNT_SUCCESS } from "data/constants/account/account";
import { ACCOUNT_LOGIN_BACKEND_ROUTER } from "data/routes/backend/account";
import { accountActions } from "store/account/account-slice";

export const login = (email: string, password: string) => async (dispatch: Dispatch) => {
  dispatch(accountActions.login({ type: ACCOUNT_REQUEST }));

  const loginRequest = async () => {
    return await axios.post(`${ACCOUNT_LOGIN_BACKEND_ROUTER}`, {
      email,
      password
    });
  }

  try {
    const user = await loginRequest();
    const { token, userResponseData } = user.data;
    
    dispatch(accountActions.login({
      type: ACCOUNT_SUCCESS,
      token,
      payload: userResponseData
    }));
    
  } catch (error: any) {
    dispatch(accountActions.login({
      type: ACCOUNT_FAIL,
      payload: error.response.data.message
    }))
  }
}