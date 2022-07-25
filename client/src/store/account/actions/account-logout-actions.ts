import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { ACCOUNT_FAIL, ACCOUNT_REQUEST, ACCOUNT_SUCCESS } from "data/constants/account/account";
import { ACCOUNT_LOGOUT_BACKEND_ROUTER } from "data/routes/backend/account";
import { accountActions } from "store/account/account-slice";

export const logout = (token: string) => async (dispatch: Dispatch) => {
  dispatch(accountActions.logout({type: ACCOUNT_REQUEST}));

  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const logoutRequest = async () => {
    return await axios.post(ACCOUNT_LOGOUT_BACKEND_ROUTER, {}, config);
  }

  try {
    const {data} = await logoutRequest();
    
    dispatch(accountActions.logout({
      type: ACCOUNT_SUCCESS,
      payload: data
    }));
    
  } catch (error: any) {
    dispatch(accountActions.logout({
      type: ACCOUNT_FAIL,
      payload: error.response.data.message
    }))
  }
}