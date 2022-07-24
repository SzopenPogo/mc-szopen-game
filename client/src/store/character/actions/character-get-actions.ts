import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { CHARACTER_FAIL, CHARACTER_REQUEST, CHARACTER_SUCCESS } from "data/constants/character/character";
import { CHARACTER_GET_BACKEND_ROUTER } from "data/routes/backend/character";
import { characterActions } from "store/character/character-slice";

export const getCharacter = (token: string) => async (dispatch: Dispatch) => {
  dispatch(characterActions.get({type: CHARACTER_REQUEST}));

  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const getCharacterRequest = async () => {
    return await axios.get(`${CHARACTER_GET_BACKEND_ROUTER}`, config);
  }

  try {
    const {data} = await getCharacterRequest();

    dispatch(characterActions.get({
      type: CHARACTER_SUCCESS,
      payload: data
    }));
  } catch (error: any) {
    dispatch(characterActions.get({
      type: CHARACTER_FAIL,
      payload: error.response.data.message
    }))
  }
}