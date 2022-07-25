import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { ACCOUNT_FAIL, ACCOUNT_REQUEST, ACCOUNT_SUCCESS } from "data/constants/account/account";
import { AccountEdit } from "data/interfaces/account/AccountEdit";
import { ACCOUNT_EDIT_BACKEND_ROUTER } from "data/routes/backend/account";
import { accountActions } from "store/account/account-slice";

export const editAccount = (
  token: string,
  editData: AccountEdit
) => async (dispatch: Dispatch) => {
  // dispatch(accountActions.edit({type: ACCOUNT_REQUEST}));

  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const {email, password, currentPassword} = editData;

  // const formData = new FormData();
  // email && formData.append('email', email);
  // password && formData.append('password', password);
  // formData.append('currentPassword', currentPassword);

  //TODO
  Object.keys(editData).forEach(key => {
    //console.log(editData?[key]);
    
  });

  console.log(editData);

  const editAccountRequest = async () => {
    return await axios.patch(ACCOUNT_EDIT_BACKEND_ROUTER, editData, config);
  }

  // try {
  //   const {data} = await editAccountRequest();
  //   console.log(data);
    
  //   dispatch(accountActions.edit({
  //     type: ACCOUNT_SUCCESS,
  //     payload: data
  //   }));
    
  // } catch (error: any) {
  //   dispatch(accountActions.edit({
  //     type: ACCOUNT_FAIL,
  //     payload: error.response.data.message
  //   }))
  // }
}