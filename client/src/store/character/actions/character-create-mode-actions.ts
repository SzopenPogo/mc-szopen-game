import { Dispatch } from "@reduxjs/toolkit";
import { characterActions } from "store/character/character-slice";

export const setCharacterCreateMode = (status: boolean) => (dispatch: Dispatch) => {
  dispatch(characterActions.setCreateMode(status));
}