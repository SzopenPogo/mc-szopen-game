import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { CHARACTER_FAIL, CHARACTER_REQUEST, CHARACTER_SUCCESS } from "data/constants/character/character";
import { CHARACTER_GET_BACKEND_ROUTER } from "data/routes/backend/character";
import { characterActions } from "store/character/character-slice";

export const getMyCharacterById = (token: string, characterId: string) => async (dispatch: Dispatch) => {
  dispatch(characterActions.getMeById({type: CHARACTER_REQUEST}));

  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const getMyCharacterByIdRequest = async () => {
    const url = `${CHARACTER_GET_BACKEND_ROUTER}/${characterId}`
    return await axios.get(url, config);
  }

  try {
    const {data} = await getMyCharacterByIdRequest();

    dispatch(characterActions.getMeById({
      type: CHARACTER_SUCCESS,
      payload: data
    }));
  } catch (error: any) {
    dispatch(characterActions.getMeById({
      type: CHARACTER_FAIL,
      payload: error.response.data.message
    }))
  }
}