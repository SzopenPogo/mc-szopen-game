import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { ACCOUNT_FAIL, ACCOUNT_REQUEST, ACCOUNT_SUCCESS } from "data/constants/account/account";
import { ACCOUNT_REGISTER_BACKEND_ROUTER } from "data/routes/backend/account";
import { accountActions } from "store/account/account-slice";

export const registerAccount = (
  email: string, 
  password: string
  ) => async (dispatch: Dispatch) => {
  dispatch(accountActions.register({ type: ACCOUNT_REQUEST }));

  const accountData = {
    email,
    password
  }

  const registerAccountRequest = async () => {
    return await axios.post(ACCOUNT_REGISTER_BACKEND_ROUTER, accountData);
  }

  try {
    const {data} = await registerAccountRequest();
    const {account, token} = data;

    dispatch(accountActions.register({
      type: ACCOUNT_SUCCESS,
      token,
      payload: account
    }));
  } catch (error: any) {
    dispatch(accountActions.register({
      type: ACCOUNT_FAIL,
      payload: error.response.data.message
    }))
  }

}