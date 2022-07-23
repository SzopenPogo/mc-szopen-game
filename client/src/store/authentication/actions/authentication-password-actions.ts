import { Dispatch } from "@reduxjs/toolkit";
import { authenticationActions } from "store/authentication/authentication-slice";

export const setPasswordValid = (isValid: boolean) => (dispatch: Dispatch) => {
  dispatch(authenticationActions.setPasswordValid(isValid));
}