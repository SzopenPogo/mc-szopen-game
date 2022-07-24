import { Dispatch } from "@reduxjs/toolkit";
import { characterActions } from "store/character/character-slice";

export const selectCharacter = (_id: string) => (dispatch: Dispatch) => {
  dispatch(characterActions.select(_id));
}