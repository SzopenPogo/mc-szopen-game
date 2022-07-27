import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { CHARACTER_FAIL, CHARACTER_REQUEST, CHARACTER_SUCCESS } from "data/constants/character/character";
import { CHARACTER_CREATE_BACKEND_ROUTER } from "data/routes/backend/character";
import { characterActions } from "store/character/character-slice";

export const createCharacter = (
  token: string,
  name: string
) => async (dispatch: Dispatch) => {
  dispatch(characterActions.create({type: CHARACTER_REQUEST}));

  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const character = {
    name
  }

  const createCharacterRequest = async () => {
    return await axios.post(CHARACTER_CREATE_BACKEND_ROUTER, character, config);
  }

  try {
    const {data} = await createCharacterRequest();

    dispatch(characterActions.create({
      type: CHARACTER_SUCCESS,
      payload: data
    }));
  } catch (error: any) {
    dispatch(characterActions.create({
      type: CHARACTER_FAIL,
      payload: error.response.data.message
    }))
  }
}