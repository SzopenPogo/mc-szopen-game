import { Dispatch } from "@reduxjs/toolkit";
import { clientActions } from "store/client/client-slice";

export const clientSetMobile = (windowInnerWidth: number) => (dispatch: Dispatch) => {
  dispatch(clientActions.setMobile(windowInnerWidth));
}