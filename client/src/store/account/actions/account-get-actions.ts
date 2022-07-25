import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { ACCOUNT_FAIL, ACCOUNT_REQUEST, ACCOUNT_SUCCESS } from "data/constants/account/account";
import { ACCOUNT_GET_ME_BACKEND_ROUTER } from "data/routes/backend/account";
import { accountActions } from "store/account/account-slice";

export const getAccount = (token: string) => async (dispatch: Dispatch) => {
  dispatch(accountActions.get({type: ACCOUNT_REQUEST}));

  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const getAccountRequest = async () => {
    return await axios.get(ACCOUNT_GET_ME_BACKEND_ROUTER, config);
  }

  try {
    const {data} = await getAccountRequest();
    
    dispatch(accountActions.get({
      type: ACCOUNT_SUCCESS,
      payload: data
    }));
    
  } catch (error: any) {
    dispatch(accountActions.get({
      type: ACCOUNT_FAIL,
      payload: error.response.data.message
    }))
  }
}