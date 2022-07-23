import { Dispatch } from "@reduxjs/toolkit";
import { authenticationActions } from "store/authentication/authentication-slice";

export const setEmailValid = (isValid: boolean) => (dispatch: Dispatch) => {
  dispatch(authenticationActions.setEmailValid(isValid));
}